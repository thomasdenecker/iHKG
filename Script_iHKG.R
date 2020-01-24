################################################################################
# iHKG : iron Homeostasis Key Genes 
# Thomas DENECKER & Gaëlle Lelandais
# thomas.denecker@gmail.com
# 10/2019
#
# GitHub : https://github.com/thomasdenecker/iHKG
# Docker : docker run --name=iHKG_Rstudio -e PASSWORD=rstudioPW -v ${PWD}:/home/rstudio --rm -p 8788:8787 tdenecker/ihkg
# 
################################################################################

################################################################################
# List of Libraries
################################################################################

library(xlsx)
library(dplyr)
require(VennDiagram)
library(ggthemes)
library(ggplot2)
library(gridExtra)
library(grid)
library(reshape2)
library(ggpubr)
library(cowplot)
library(igraph)
library(qgraph)
library(FactoMineR)
library(factoextra)
library(corrplot)
library(ggforce)
library(UpSetR)
library(psy)
library(tm)
library(limma)
library(readODS)

################################################################################
# List of functions 
################################################################################

subGraph <- function(groupName, nodes, edges){
  nodes2 = subset(nodes,group == groupName)
  rownames(nodes2) = nodes2$id
  edges2 = edges[edges$source %in% nodes2$id & edges$target %in% nodes2$id,] 
  
  png(paste0("outputs/",groupName,".png"), width = 800, height = 800)
  par(mfrow= c(1,2), mar=c(0,0 ,2,0))
  g = graph_from_data_frame(edges2, directed = FALSE, vertices = nodes2$id)
  V(g)$color = nodes2[V(g)$name, "colLow"]
  V(g)$size = nodes2[V(g)$name, "size"]
  V(g)$shape = nodes2[V(g)$name, "shape"]
  E(g)$lty = 3
  e <- get.edgelist(g,names=F)
  # l <- qgraph.layout.fruchtermanreingold(e,vcount=vcount(g),
  #                                             area=4*(vcount(g)^2),repulse.rad=(vcount(g)^3.1))
  # 
  # l<-qgraph.layout.fruchtermanreingold(e,vcount=vcount(g))
  
  l<- layout_nicely(g)
  
  plot(g,vertex.label=NA, main = paste(groupName, "- Low"), 
       layout = l, cex.main= 1.5, cex.lab=1.5, cex.axis=1.5)
  
  V(g)$color = nodes2[V(g)$name, "colHigh"]
  V(g)$size = nodes2[V(g)$name, "size"]
  V(g)$shape = nodes2[V(g)$name, "shape"]
  plot(g, vertex.label=NA, main = paste(groupName, "- High"), 
       layout = l, cex.main= 1.5, cex.lab=1.5, cex.axis=1.5)
  par(mar=c(5, 4, 4, 2) + 0.1)
  dev.off()
}

switchColor <- function(color){
  if(color == "darkgreen"){
    col="#009900"
  } else if(color == "firebrick"){
    col="#cc0000"
  }else if(color == "white"){
    col="#ffffff"
  }else if(color == "red"){
    col="#ffb3b3"
  }else if(color == "chartreuse"){
    col="#66ff66"
  } else if (color == "#bec1c6") {
    col="#bec1c6"
  }else {
    col="#000000"
  }
  return(col)
}

switchShape <- function(shape){
  if(shape=="circle"){return("ellipse")}else{return(shape)}
}

subGraphWeb <- function(groupName, nodes, edges){
  nodes2 = subset(nodes,group %in% groupName)
  rownames(nodes2) = nodes2$id
  edges2 = edges[edges$source %in% nodes2$id & edges$target %in% nodes2$id,] 
  
  
  g = graph_from_data_frame(edges2, directed = FALSE, vertices = nodes2$id)
  V(g)$color = nodes2[V(g)$name, "colLow"]
  V(g)$size = nodes2[V(g)$name, "size"]
  V(g)$shape = nodes2[V(g)$name, "shape"]
  E(g)$lty = 3
  e <- get.edgelist(g,names=F)
  # l <- qgraph.layout.fruchtermanreingold(e,vcount=vcount(g),
  #                                             area=4*(vcount(g)^2),repulse.rad=(vcount(g)^3.1))
  # 
  # l<-qgraph.layout.fruchtermanreingold(e,vcount=vcount(g))
  
  l<- layout_nicely(g)
  
  if(length(groupName) == 1){
    filename = paste0("docs/assets/graphs/",groupName,".js")
  } else {
    filename = "docs/assets/graphs/all.js"
  }
  
  topFile = "$(function() { // on dom ready
  
  var cy = cytoscape({
  container: document.getElementById('cy'),
  
  boxSelectionEnabled: false,
  autounselectify: true,
  
  wheelSensitivity: 0.5,
  userZoomingEnabled: false,
  autolock: true,
  userPanningEnabled :false,
  
  style: cytoscape.stylesheet()
  .selector('node')
  .css({
  'shape': 'data(faveShape)',
  'width': 'data(width)',
  'height': 'data(height)',
  'text-valign': 'center',
  'text-outline-width': 2,
  'border-style': 'solid',
  'border-width': 0.5,
  'border-color': '#595959',
  'text-outline-color': 'data(faveColorLow)',
  'background-color': 'data(faveColorLow)',
  'color': '#fff'
  })
  .selector(':selected')
  .css({
  'border-width': 0.5,
  'border-color': '#333'
  })
  
  .selector('edge.bezier')
  .css({
  'curve-style': 'bezier',
  'control-point-step-size': 40
  })
  .selector('edge.haystack')
  .css({
  'curve-style': 'haystack',
  'haystack-radius': 0.5
  })
  .selector('edge')
  .css({
  'curve-style': 'bezier',
  'opacity': 0.5,
  'width': 1,
  'line-color': 'data(faveColor)',
  'source-arrow-color': 'data(faveColor)',
  'target-arrow-color': 'data(faveColor)'
  }),
  
  elements: ["
  write( topFile, filename)
  
  for (i in 1:nrow(nodes2)){
    write( paste0("{
                  data: {
                  id: '",nodes2[i,1], "',
                  name: '",nodes2[i,1], "',
                  size: ",nodes2[i,6], ",
                  width :",nodes2[i,6], ",
                  height :",nodes2[i,6], ",
                  weight :",nodes2[i,6], ",
                  faveColorLow: '",switchColor(nodes2[i,3]), "',
                  faveColorHigh: '",switchColor(nodes2[i,4]), "',
                  faveShape: '",switchShape(nodes2[i,5]), "',
                  type: 'bezier',
                  content: \"<h2>",nodes2[i,1], "</h2><hr><p><b>Gene name</b> : ",data[which(data$Gene == nodes2[i,1] ), "Gene name (locus name)"],"</p><p><b>Description</b> : ",data$Description[which(data$Gene == nodes2[i,1] )],"</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=",nodes2[i,1],"&organism=C_glabrata_CBS138\'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=",nodes2[i,1],"'  target='_blank'> Link to GRYC</a>\",
                  x : ",l[i,1],",
                  y : ",l[i,2],"
                  },
                  position : {
                  'x' : ",l[i,1]*10,",
                  'y' : ",l[i,2]*10,"
                  },
  },"), 
           filename, append = T)
  }
  
  for (i in 1:nrow(edges2)){
    write( paste0("{
                  data: {
                  source: '",edges2[i,1],"',
                  target: '",edges2[i,2],"',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },"), 
           filename, append = T)
  }
  
  
  write( "],
         
         layout: {
         name: 'preset',
         fit: true
         },
         
         ready: function() {
         window.cy = this;
         },
         
         });", filename, append = T)
  
  
  for (i in 1:nrow(nodes2)){
    write( paste0("cy.$('#",nodes2[i,1], "').qtip({
                  content: \"<h2>",nodes2[i,1], "</h2><hr><p><b>Gene name</b> : ",data[which(data$Gene == nodes2[i,1] ),"Gene name (locus name)"],"</p><p><b>Description</b> : ",data$Description[which(data$Gene == nodes2[i,1] )],"</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=",nodes2[i,1],"&organism=C_glabrata_CBS138\'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=",nodes2[i,1],"'  target='_blank'> Link to GRYC</a>\",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });"),  filename, append = T)
  }
  
  write( "cy.fit(100);
         
         /* automove ICI faire les modifications */
         cy.automove({
         nodesMatching: cy.$('#FTR1'),
         reposition: 'viewport'
         });
         
         cy.automove({
         nodesMatching: cy.$('#FET3'),
         reposition: 'viewport'
         });
         
         
         cy.resize();
         
         cy.panzoom({
         // options here...
         });
         
         
         
         document.getElementById('Low').onclick = function() {
         var allNodes = cy.$('node');
         for( var i = 0; i < allNodes.length; i++ ){
         var id = allNodes[i].data(\"id\");
         var newCol = cy.nodes(\"[id = '\" + id + \"']\").data('faveColorLow');
         cy.nodes(\"[id = '\" + id + \"']\").style('background-color', newCol);
         }
         };
         
         document.getElementById('High').onclick = function() {
         var allNodes = cy.$('node');
         for( var i = 0; i < allNodes.length; i++ ){
         var id = allNodes[i].data(\"id\");
         var newCol = cy.nodes(\"[id = '\" + id + \"']\").data('faveColorHigh');
         cy.nodes(\"[id = '\" + id + \"']\").style('background-color', newCol);
         }
         };
         
         var options = '';
         var allNodes = cy.$('node');
         for (var i = 0; i < allNodes.length; i++) {
         var id = allNodes[i].data('id');
         options += '<option value=\"' + id + '\" />';
         }
         
         document.getElementById('geneList').innerHTML = options;
         
         document.getElementById('Search').onclick = function() {
         var pos = cy.nodes('#' + document.getElementById('gene').value).position();
         cy.center(cy.nodes('#' + document.getElementById('gene').value));
         cy.zoom({
         level: 5.5,
         position: pos
         });
         
         var allNodes = cy.$('node');
         for (var i = 0; i < allNodes.length; i++) {
         var id = allNodes[i].data('id');
         cy.nodes(\"[id = '\" + id + \"']\").style('border-color', '#595959');
         }
         cy.nodes('#' + document.getElementById('gene').value).style('border-color', '#fbff42');
         };
         
         document.getElementById('Clear').onclick = function() {
         cy.fit(100);
         var allNodes = cy.$('node');
         for (var i = 0; i < allNodes.length; i++) {
         var id = allNodes[i].data('id');
         cy.nodes(\"[id = '\" + id + \"']\").style('border-color', '#595959');
    }
    document.getElementById('gene').value = '';
  };
         
  }); // on dom ready"
         ,  filename, append = T)
  
  
}



################################################################################
# Data preparation
################################################################################

#===============================================================================
# Read Mango data file (from GEO database) 
#===============================================================================

allData = read.csv2("data/AllData_MANGO_Final.txt", sep = "\t",row.names = 1,
                    stringsAsFactors = F)
allData = data.matrix(allData)

#===============================================================================
# Identification of differentially expressed genes, from microarray results
#===============================================================================

#-------------------------------------------------------------------------------
# Condition C1
#-------------------------------------------------------------------------------

# names of samples to be compared
condA = c("log2.YPGlu30.Ref._YPGlu30.C.1", 
          "log2.YPGlu30.Ref._YPGlu30.C.2",
          "log2.YPGlu30.Ref._YPGlu30.C.3")

condB = c("log2.YPGluBPS30.Ref._YPGlu.BPS30.C.1",
          "log2.YPGluBPS30.Ref._YPGlu.BPS30.C.2",
          "log2.YPGluBPS30.Ref._YPGlu.BPS30.C.3")

# extract the sample from the entire dataset
subData = allData[,c(condA, condB)]

MA = data.matrix(subData)
# change the names of the columns
colnames(MA) = paste("Array", 1:6, sep = "")

# create the matrix design (see LIMMA documentation)
design = cbind(c(rep(1, 3), rep(0, 3)), c(rep(0, 3), rep(1, 3)))
row.names(design) = paste("Array", 1:6, sep = "")
colnames(design)  = c("Control", "BPS")

fit <- lmFit(MA, design)
cont.matrix <- makeContrasts(BPSvsControl = BPS - Control, levels = design)
fit2 <- contrasts.fit(fit, cont.matrix)
fit2 <- eBayes(fit2)

LIMMAres = topTable(fit2, adjust = "BH", number = nrow(MA))

# result writing
allRes = cbind(LIMMAres, subData[row.names(LIMMAres),])
write.table(allRes, file = "outputs/diffResults_YPGlu30WT_BPS-Control.txt", 
            quote = F, sep = "\t")

# ------------------------------------------------------------------------------
# Condition C2
# ------------------------------------------------------------------------------

condA = c("log2.YPGlu37.Ref._YPGlu37.C.1",
          "log2.YPGlu37.Ref._YPGlu37.C.2",
          "log2.YPGlu37.Ref._YPGlu37.C.3")
condB = c("log2.WT.Glu.BPS.37.Ref._WT.Glu.BPS.37.1",
          "log2.WT.Glu.BPS.37.Ref._WT.Glu.BPS.37.2")
#    "log2.WT.Glu.BPS.37.Ref._WT.Glu.BPS.37.3")
# WARNING !!!!!!! Third replicate was removed from the analysis.

subData = allData[,c(condA, condB)]
MA = data.matrix(subData)
# change the names of the columns
colnames(MA) = paste("Array", 1:5, sep = "")
# WARNING !!!!!!! Third replicate was removed from the analysis.

# create the matrix design (see LIMMA documentation --> page 52)
design = cbind(c(rep(1, 3), rep(0, 2)), c(rep(0, 3), rep(1, 2)))
row.names(design) = paste("Array", 1:5, sep = "")
# WARNING !!!!!!! Third replicate was removed from the analysis.

colnames(design)  = c("Control", "BPS")

fit <- lmFit(MA, design)
cont.matrix <- makeContrasts(BPSvsControl = BPS - Control, levels = design)
fit2 <- contrasts.fit(fit, cont.matrix)
fit2 <- eBayes(fit2)

LIMMAres = topTable(fit2, adjust="BH", number = nrow(MA))

# result writing
allRes2 = cbind(LIMMAres, subData[row.names(LIMMAres),])
write.table(allRes2, file = "outputs/diffResults_YPGlu37WT_BPS-Control.txt", 
            quote = F, sep = "\t")


#-------------------------------------------------------------------------------
# Condition C3
#-------------------------------------------------------------------------------

condA = c("log2.YPGlu30.Ref._YPGlu30.C.1", 
          "log2.YPGlu30.Ref._YPGlu30.C.2",
          "log2.YPGlu30.Ref._YPGlu30.C.3")

condB = c("log2.WT.Glu.Fe.30.Ref._WT.Glu.Fe.30.1",
          "log2.WT.Glu.Fe.30.Ref._WT.Glu.Fe.30.2",
          "log2.WT.Glu.Fe.30.Ref._WT.Glu.Fe.30.3")

subData = allData[,c(condA, condB)]

MA = data.matrix(subData)
colnames(MA) = paste("Array", 1:6, sep = "")

design = cbind(c(rep(1, 3), rep(0, 3)), c(rep(0, 3), rep(1, 3)))
row.names(design) = paste("Array", 1:6, sep = "")
colnames(design)  = c("Control", "Overload")

fit <- lmFit(MA, design)
cont.matrix <- makeContrasts(OverloadvsControl = Overload - Control, levels = design)
fit2 <- contrasts.fit(fit, cont.matrix)
fit2 <- eBayes(fit2)

LIMMAres = topTable(fit2, adjust="BH", number = nrow(MA))

# result writing
allRes3 = cbind(LIMMAres, subData[row.names(LIMMAres),])
write.table(allRes3, file = "outputs/diffResults_YPGlu30WT_Overload-Control.txt", 
            quote = F, sep = "\t")

#-------------------------------------------------------------------------------
# Condition C4
#-------------------------------------------------------------------------------

condA = c("log2.YPGlu37.Ref._YPGlu37.C.1",
          "log2.YPGlu37.Ref._YPGlu37.C.2",
          "log2.YPGlu37.Ref._YPGlu37.C.3")

condB = c("log2.WT.Glu.Fe.37.Ref._WT.Glu.Fe.37.Fe.1",
          "log2.WT.Glu.Fe.37.Ref._WT.Glu.Fe.37.Fe.2",
          "log2.WT.Glu.Fe.37.Ref._WT.Glu.Fe.37.Fe.3")

# extract experiments
subData = allData[,c(condA, condB)]

MA = data.matrix(subData)
colnames(MA) = paste("Array", 1:6, sep = "")
design = cbind(c(rep(1, 3), rep(0, 3)), c(rep(0, 3), rep(1, 3)))
row.names(design) = paste("Array", 1:6, sep = "")
colnames(design)  = c("Control", "Overload")

fit <- lmFit(MA, design)
cont.matrix <- makeContrasts(OverloadvsControl = Overload - Control, levels = design)
fit2 <- contrasts.fit(fit, cont.matrix)
fit2 <- eBayes(fit2)

LIMMAres = topTable(fit2, adjust="BH", number = nrow(MA))

# result writing
allRes4 = cbind(LIMMAres, subData[row.names(LIMMAres),])
write.table(allRes4, file = "outputs/diffResults_YPGlu37WT_Overload-Control.txt", 
            quote = F, sep = "\t")

#-------------------------------------------------------------------------------
# Condition C5
#-------------------------------------------------------------------------------

condA = c("log2.YPGlu30.Ref._YPGlu30.C.1", 
          "log2.YPGlu30.Ref._YPGlu30.C.2",
          "log2.YPGlu30.Ref._YPGlu30.C.3")

condB = c("log2.YPGlu37.Ref._YPGlu37.C.1",
          "log2.YPGlu37.Ref._YPGlu37.C.2",
          "log2.YPGlu37.Ref._YPGlu37.C.3")

# extract experiments
subData = allData[,c(condA, condB)]

MA = data.matrix(subData)
colnames(MA) = paste("Array", 1:6, sep = "")
design = cbind(c(rep(1, 3), rep(0, 3)), c(rep(0, 3), rep(1, 3)))
row.names(design) = paste("Array", 1:6, sep = "")
colnames(design)  = c("temp30", "temp37")

fit <- lmFit(MA, design)
cont.matrix <- makeContrasts(temp30vstemp37 = temp30 - temp37, levels = design)
fit2 <- contrasts.fit(fit, cont.matrix)
fit2 <- eBayes(fit2)

LIMMAres = topTable(fit2, adjust="BH", number = nrow(MA))

# result writing
allRes5 = cbind(LIMMAres, subData[row.names(LIMMAres),])
write.table(allRes5, file = "outputs/diffResults_YPGlu_30-37.txt", 
            quote = F, sep = "\t")

#-------------------------------------------------------------------------------
# Result summary to check a few number of genes
#-------------------------------------------------------------------------------

resSummary = cbind(allRes[row.names(allData), c("logFC", "adj.P.Val")],
                   allRes2[row.names(allData), c("logFC", "adj.P.Val")],
                   allRes3[row.names(allData), c("logFC", "adj.P.Val")],
                   allRes4[row.names(allData), c("logFC", "adj.P.Val")],
                   allRes5[row.names(allData), c("logFC", "adj.P.Val")])

colnames(resSummary) = c("C1", "P.Val1",
                         "C2", "P.Val2",
                         "C3", "P.Val3",
                         "C4", "P.Val4",
                         "C5", "P.Val5")

# Genes for which annotation are avalailable in CGD
CGD_annotation = read.csv2("data/C_glabrata_CBS138_current_chromosomal_feature.tab.txt",
                           sep = "\t", skip = 8,
                           header = F, stringsAsFactors = F)

colnames(CGD_annotation) = c("Feature name (mandatory); this is the primary systematic name, if available",
                             "Gene name (locus name)",
                             "Aliases (multiples separated by |)",
                             "Feature type",
                             "Chromosome",
                             "Start Coordinate",
                             "Stop Coordinate",
                             "Strand", 
                             "Primary CGDID",
                             "Secondary CGDID (if any)",
                             "Description",
                             "Date Created",
                             "Sequence Coordinate Version Date (if any)",
                             "Blank",
                             "Blank",
                             "Date of gene name reservation (if any).",
                             "Has the reserved gene name become the standard name? (Y/N)",
                             "Name of S. cerevisiae ortholog(s) (multiples separated by |)")

rownames(CGD_annotation) = CGD_annotation[,1]
resSummary = merge(resSummary,CGD_annotation[, c("Feature name (mandatory); this is the primary systematic name, if available",
                                                 "Gene name (locus name)",
                                                 "Primary CGDID",
                                                 "Description",
                                                 "Name of S. cerevisiae ortholog(s) (multiples separated by |)")],
                   by="row.names",all.x=TRUE)


rownames(resSummary) = resSummary$Row.names

# Result writing
write.table(resSummary, file = "outputs/resSummary_glabrataGenes.txt",
            quote = F, sep = "\t")

#-------------------------------------------------------------------------------
# Z-Score calculations
#-------------------------------------------------------------------------------

dataAll = resSummary %>% 
  filter(!is.na(C1) & !is.na(C2) & !is.na(C3) & !is.na(C4)) %>%
  mutate(C1 = as.numeric(C1),
         C2 = as.numeric(C2),
         C3 = as.numeric(C3),
         C4 = as.numeric(C4),
         C5 = as.numeric(C5),
         P.Val1 = as.numeric(P.Val1),
         P.Val2 = as.numeric(P.Val2),
         P.Val3 = as.numeric(P.Val3),
         P.Val4 = as.numeric(P.Val4),
         P.Val5 = as.numeric(P.Val5)) %>%
  mutate(Zscore1 = (C1 - mean(C1, na.rm = T))/ sd(C1, na.rm = T), 
         Zscore2 = (C2 - mean(C2, na.rm = T))/ sd(C2, na.rm = T),
         Zscore3 = (C3 - mean(C3, na.rm = T))/ sd(C3, na.rm = T),
         Zscore4 = (C4 - mean(C4, na.rm = T))/ sd(C4, na.rm = T),
         Zscore5 = (C5 - mean(C5, na.rm = T))/ sd(C5, na.rm = T)) %>%
  rename(Gene = Row.names)

rownames(dataAll) = as.character(dataAll$Gene)

#===============================================================================
# PCA analyzes
#===============================================================================

interPCA = as.data.frame(data.matrix(dataAll[,paste0("Zscore",1:5)]))
colnames(interPCA) = c(paste0('C', 1:4), "C30-37")

res.pca <- PCA(interPCA)

png("outputs/ACP_3D.png", width = 1900, height = 1080)
sphpca(interPCA)
dev.off()

svg("outputs/ACP_3D.sng")
sphpca(interPCA)
dev.off()

png("outputs/ACP_D1vsD2.png")
plot.PCA(res.pca, axes=c(1, 2), choix="var")
dev.off()

svg("outputs/ACP_D1vsD2.svg")
plot.PCA(res.pca, axes=c(1, 2), choix="var")
dev.off()

fviz_eig(res.pca, addlabels = TRUE, ylim = c(0, 50))
ggsave("outputs/ScreePlot.png")
ggsave("outputs/ScreePlot.svg")

var <- get_pca_var(res.pca)

png("outputs/CorrplotConditionVSDim.png")
corrplot(var$cos2, is.corr=FALSE)
dev.off()

svg("outputs/CorrplotConditionVSDim.svg")
corrplot(var$cos2, is.corr=FALSE)
dev.off()

#===============================================================================
# Selection of the genes differentially expressed for at least one of 
# conditions C1 to C4 --> Iron responsive genes
#===============================================================================

#-------------------------------------------------------------------------------
# Venn
#-------------------------------------------------------------------------------

interByPval = dataAll %>%
  filter(P.Val1 <= 0.05 | 
           P.Val2 <= 0.05 |
           P.Val3 <= 0.05 |
           P.Val4 <= 0.05 ) %>%
  pull(Gene)

interByZscore = dataAll %>%
  filter(abs(Zscore1) >= 2 | 
           abs(Zscore2) >= 2 |
           abs(Zscore3) >= 2 |
           abs(Zscore4) >= 2 ) %>%
  pull(Gene)

venn.plot = draw.pairwise.venn(area1 = length(interByPval),
                               area2 = length(interByZscore),
                               cross.area = length(interByPval[interByPval %in% interByZscore]),category = c("By Pvalue", "By Zscore"),
                               fill = c("gray", "grey"),
                               lty = "blank",
                               cex = 2,
                               cat.cex = 2
)

png("outputs/VennPvaluevsZscoreSelection.png")
grid.draw(venn.plot);
dev.off()

svg("outputs/VennPvaluevsZscoreSelection.svg")
grid.draw(venn.plot);
dev.off()

#-------------------------------------------------------------------------------
# Selection of genes (Z-Score > 2 and adj. pval < 0.05)
#-------------------------------------------------------------------------------

data = dataAll %>%
  filter((abs(Zscore1) >= 2 & P.Val1 <= 0.05) |
           (abs(Zscore2) >= 2 & P.Val2 <= 0.05) |
           (abs(Zscore3) >= 2 & P.Val3 <= 0.05) |
           (abs(Zscore4) >= 2 & P.Val4 <= 0.05) ) %>%
  mutate(C1_2_0.05 = case_when(Zscore1 >=  2 & P.Val1 <= 0.05 ~  1,
                               Zscore1 <= -2 & P.Val1 <= 0.05 ~ -1,
                               TRUE ~ 0),
         C2_2_0.05 = case_when(Zscore2 >=  2 & P.Val2 <= 0.05 ~  1,
                               Zscore2 <= -2 & P.Val2 <= 0.05 ~ -1,
                               TRUE ~ 0),
         C3_2_0.05 = case_when(Zscore3 >=  2 & P.Val3 <= 0.05 ~  1,
                               Zscore3 <= -2 & P.Val3 <= 0.05 ~ -1,
                               TRUE ~ 0),
         C4_2_0.05 = case_when(Zscore4 >=  2 & P.Val4 <= 0.05 ~  1,
                               Zscore4 <= -2 & P.Val4 <= 0.05 ~ -1,
                               TRUE ~ 0)
  )

rownames(data) = as.character(data$Gene)

#-------------------------------------------------------------------------------
# Import Metago and General Functions
#-------------------------------------------------------------------------------

metago = read.csv2("data/Metago.tsv", sep ="\t", 
                   header = T, row.names = 1)

data <- merge(data, metago, by="row.names",all.x=TRUE)

data = data %>%
  mutate(Fsimplify = case_when(Metago2019 == "METABOLISM" ~ "F1",
                               Metago2019 == "REGULATION" ~ "F2",
                               Metago2019 == "REDOX SIGNALING" ~ "F3",
                               Metago2019 == "TRANSPORT / TRAFFICKING" ~ "F4",
                               Metago2019 == "IRON-SULFUR CLUSTER SYNTHESIS AND ASSEMBLY" ~ "F5",
                               TRUE ~ "Others"))
rownames(data) = as.character(data$Gene)

write.table(data, "outputs/dataSelectedByZscoreAndPvalue.txt", sep ="\t", quote = F, 
            row.names = F)

recapUpDown = cbind(c(sum(data$Zscore1 >= 2), sum(data$Zscore1 <= -2)),
                    c(sum(data$Zscore2 >= 2), sum(data$Zscore2 <= -2)),
                    c(sum(data$Zscore3 >= 2), sum(data$Zscore3 <= -2)),
                    c(sum(data$Zscore4 >= 2), sum(data$Zscore4 <= -2)),
                    c(sum(data$Zscore5 >= 2), sum(data$Zscore5 <= -2)))
colnames(recapUpDown) = c(paste0("C",1:4), "C30-37")
rownames(recapUpDown) = c("Up", "Down")

write.table(recapUpDown, 
            "outputs/recapUpDown.txt", sep ="\t", quote = F)

#===============================================================================
# Location of genes in general functions
#===============================================================================
#-------------------------------------------------------------------------------
# pie chart
#-------------------------------------------------------------------------------

pieData = as.data.frame(table(data$Fsimplify) ) %>%
  rename(Function = Var1) %>%
  mutate(Color = case_when(Function == "F1" ~ "purple",
                           Function == "F2" ~ "navy",
                           Function == "F3" ~ "orchid",
                           Function == "F4" ~ "cyan",
                           Function == "F5" ~ "orange",
                           TRUE ~ "gray"))

ggplot(pieData, aes(x="", y=Freq, fill=Function)) + 
  geom_bar(stat="identity", width=1) + 
  coord_polar("y", start=0, direction= -1) + 
  geom_text(aes(label = paste0(round(Freq*100/sum(Freq)), "%")), 
            position = position_stack(vjust = 0.5),size=8, 
            colour = c(rep("black",3), rep("white",3))) + 
  scale_fill_manual(values=pieData$Color) + 
  labs(x = NULL, y = NULL, fill = NULL, title = "Metago function") + 
  theme_classic() + theme(axis.line = element_blank(),
                          axis.text = element_blank(),
                          axis.ticks = element_blank(),
                          legend.text=element_text(size=15),
                          plot.title = element_text(size = 22, vjust= -7,hjust = 0.5))

ggsave("outputs/PiechartFunction.png")
ggsave("outputs/PiechartFunction.svg")

write.table(pieData[,-3], "outputs/GeneNumberInFunction.txt", quote = F,
            row.names = F, sep ="\t")

#===============================================================================
# Identification of Key Genes : type I and II (Zscore 1.5 et adj. pval < 0.01)
#===============================================================================

data = data %>%
  mutate(C1_1.5_0.01 = case_when(Zscore1 >=  1.5 & P.Val1 <= 0.01 ~  1,
                                 Zscore1 <= -1.5 & P.Val1 <= 0.01 ~ -1,
                                 TRUE ~ 0),
         C2_1.5_0.01 = case_when(Zscore2 >=  1.5 & P.Val2 <= 0.01 ~  1,
                                 Zscore2 <= -1.5 & P.Val2 <= 0.01 ~ -1,
                                 TRUE ~ 0),
         C3_1.5_0.01 = case_when(Zscore3 >=  1.5 & P.Val3 <= 0.01 ~  1,
                                 Zscore3 <= -1.5 & P.Val3 <= 0.01 ~ -1,
                                 TRUE ~ 0),
         C4_1.5_0.01 = case_when(Zscore4 >=  1.5 & P.Val4 <= 0.01 ~  1,
                                 Zscore4 <= -1.5 & P.Val4 <= 0.01 ~ -1,
                                 TRUE ~ 0),
         
         sumLow_1.5_0.01 =  C1_1.5_0.01 + C2_1.5_0.01,
         colLow = case_when(C1_1.5_0.01 + C2_1.5_0.01 == 2 ~ "red",
                            C1_1.5_0.01 + C2_1.5_0.01 == 1 ~ "firebrick",
                            C1_1.5_0.01 + C2_1.5_0.01 == 0 & abs(C1_1.5_0.01) == 1 ~ "white",
                            C1_1.5_0.01 + C2_1.5_0.01 == 0 & abs(C1_1.5_0.01) == 0 ~ "black",
                            C1_1.5_0.01 + C2_1.5_0.01 == -1 ~ "darkgreen",
                            C1_1.5_0.01 + C2_1.5_0.01 == -2 ~ "chartreuse"
         ),
         
         diffLow = case_when(colLow == "firebrick" | colLow =="red" ~ "UP",
                             colLow == "chartreuse" | colLow =="darkgreen" ~ "DOWN",
                             colLow == "black" ~ "NO",
                             colLow == "white" ~ "SWITCH"
         ),
         
         sumHigh_1.5_0.01 =  C3_1.5_0.01 + C4_1.5_0.01,
         
         colHigh = case_when(C3_1.5_0.01 + C4_1.5_0.01 == 2 ~ "red",
                             C3_1.5_0.01 + C4_1.5_0.01 == 1 ~ "firebrick",
                             C3_1.5_0.01 + C4_1.5_0.01 == 0 & abs(C3_1.5_0.01) == 1 ~ "white",
                             C3_1.5_0.01 + C4_1.5_0.01 == 0 & abs(C3_1.5_0.01) == 0 ~ "black",
                             C3_1.5_0.01 + C4_1.5_0.01 == -1 ~ "darkgreen",
                             C3_1.5_0.01 + C4_1.5_0.01 == -2 ~ "chartreuse"
         ),
         
         diffHigh = case_when(colHigh == "firebrick" | colHigh =="red" ~ "UP",
                              colHigh == "chartreuse" | colHigh =="darkgreen" ~ "DOWN",
                              colHigh == "black" ~ "NO",
                              colHigh == "white" ~ "SWITCH"
         ),
         
         type = case_when(diffLow == "UP" & diffHigh == "UP" ~ "Type II", 
                          diffLow == "DOWN" & diffHigh == "DOWN" ~ "Type II",
                          diffLow == "UP" & diffHigh == "DOWN" ~ "Type I", 
                          diffLow == "DOWN" & diffHigh == "UP" ~ "Type I",
                          diffLow == "NO" & diffHigh == "NO" ~ "NO",
                          (diffLow == "UP" | diffLow == "DOWN") & diffHigh == "NO" ~ "OFF",
                          (diffHigh == "UP" | diffHigh == "DOWN") & diffLow == "NO" ~ "OFF",
                          diffLow == "SWITCH" | diffHigh == "SWITCH" ~ "SWITCH"
         )
  )


recapTable = data %>% 
  filter(type %in% c("Type I", "Type II")) %>% 
  select(Fsimplify, type) %>% 
  group_by(Fsimplify) %>%
  count(type)

recapTable = dcast(recapTable, type ~ Fsimplify, 
                   value.var = "n")

recapTable = cbind(recapTable, Sum = apply(recapTable[,-1], 1, sum))
recapTable = rbind(recapTable, c("Sum", apply(recapTable[,-1], 2, sum), "") )
write.table(recapTable, "outputs/recapTableFunction.txt", quote = F, sep = "\t")
write.table(data, "outputs/data.txt", quote = F, sep = "\t")

rownames(data) = data$Row.names

#===============================================================================
# Location of Key Genes in general functions 
#===============================================================================
#-------------------------------------------------------------------------------
# Type I
#-------------------------------------------------------------------------------

pieData = data %>% 
  filter(type %in% "Type I") %>% 
  select(Fsimplify) %>%
  rename(Function = Fsimplify) %>%
  count(Function) %>%
  mutate(Color = case_when(Function == "F1" ~ "purple",
                           Function == "F2" ~ "navy",
                           Function == "F3" ~ "orchid",
                           Function == "F4" ~ "cyan",
                           Function == "F5" ~ "orange",
                           TRUE ~ "gray"))

ggplot(pieData, aes(x="", y=n, fill=Function)) + 
  geom_bar(stat="identity", width=1) + 
  coord_polar("y", start=0, direction= -1) + 
  geom_text(aes(label = paste0(round(n*100/sum(n)), "%")), 
            position = position_stack(vjust = 0.5),size=8, 
            colour = c(rep("black",3), rep("white",3))) + 
  scale_fill_manual(values=pieData$Color) + 
  labs(x = NULL, y = NULL, fill = NULL, title = "Metago function - iHKG Type I") + 
  theme_classic() + theme(axis.line = element_blank(),
                          axis.text = element_blank(),
                          axis.ticks = element_blank(),
                          legend.text=element_text(size=15),
                          plot.title = element_text(size = 22, vjust= -7,hjust = 0.5))

ggsave("outputs/PiechartFunctionKG_TypeI.png")
ggsave("outputs/PiechartFunctionKG_TypeI.svg")

#-------------------------------------------------------------------------------
# Type II
#-------------------------------------------------------------------------------

pieData = data %>% 
  filter(type %in% "Type II") %>% 
  select(Fsimplify) %>%
  rename(Function = Fsimplify) %>%
  count(Function) %>%
  mutate(Color = case_when(Function == "F1" ~ "purple",
                           Function == "F2" ~ "navy",
                           Function == "F3" ~ "orchid",
                           Function == "F4" ~ "cyan",
                           Function == "F5" ~ "orange",
                           TRUE ~ "gray"))

ggplot(pieData, aes(x="", y=n, fill=Function)) + 
  geom_bar(stat="identity", width=1) + 
  coord_polar("y", start=0, direction= -1) + 
  geom_text(aes(label = paste0(round(n*100/sum(n)), "%")), 
            position = position_stack(vjust = 0.5),size=8, 
            colour = c(rep("black",3), rep("white",3))) + 
  scale_fill_manual(values=pieData$Color) + 
  labs(x = NULL, y = NULL, fill = NULL, title = "Metago function - iHKG Type II") + 
  theme_classic() + theme(axis.line = element_blank(),
                          axis.text = element_blank(),
                          axis.ticks = element_blank(),
                          legend.text=element_text(size=15),
                          plot.title = element_text(size = 22, vjust= -7,hjust = 0.5))

ggsave("outputs/PiechartFunctionKG_TypeII.png")
ggsave("outputs/PiechartFunctionKG_TypeII.svg")

#-------------------------------------------------------------------------------
# Up / Down
#-------------------------------------------------------------------------------

functionStudy = rbind( 
  data %>% 
    filter( C1_1.5_0.01 != 0) %>%
    mutate(type = case_when(C1_1.5_0.01 >0 ~ "Up",
                            C1_1.5_0.01 <0 ~ "Down",
                            TRUE ~ "NA")) %>%
    select(type, Fsimplify) %>%
    group_by(Fsimplify) %>%
    count(type) %>%
    mutate(Iron = "Low", Temperature = "30°"),
  
  data %>% 
    filter( C2_1.5_0.01 != 0) %>%
    mutate(type = case_when(C2_1.5_0.01 >0 ~ "Up",
                            C2_1.5_0.01 <0 ~ "Down",
                            TRUE ~ "NA")) %>%
    select(type, Fsimplify) %>%
    group_by(Fsimplify) %>%
    count(type) %>%
    mutate(Iron = "Low", Temperature = "37°"),
  
  data %>% 
    filter( C3_1.5_0.01 != 0) %>%
    mutate(type = case_when(C3_1.5_0.01 >0 ~ "Up",
                            C3_1.5_0.01 <0 ~ "Down",
                            TRUE ~ "NA")) %>%
    select(type, Fsimplify) %>%
    group_by(Fsimplify) %>%
    count(type) %>%
    mutate(Iron = "High", Temperature = "30°"),
  
  data %>% 
    filter( C4_1.5_0.01 != 0) %>%
    mutate(type = case_when(C4_1.5_0.01 >0 ~ "Up",
                            C4_1.5_0.01 <0 ~ "Down",
                            TRUE ~ "NA")) %>%
    select(type, Fsimplify) %>%
    group_by(Fsimplify) %>%
    count(type) %>%
    mutate(Iron = "High", Temperature = "37°")
)


ggplot(data=as.data.frame(functionStudy), aes(x=Fsimplify, y=n, fill=type)) +
  geom_bar(stat="identity", position = position_dodge2(preserve = 'single'))+
  facet_grid(Temperature ~ factor(Iron, levels=c('Low','High'))  )+
  geom_text(aes(label=n), vjust=-1, color="black",
            position = position_dodge(0.9), size=3.5)+
  labs(y= "Frequence", x = "Functions") +
  scale_fill_manual(values=c("green", "red")) +
  labs(fill="Type") +
  ylim(0, 80)  + 
  labs(title = "Function by iron concentation and temperature") +
  background_grid(major = 'y', minor = "none") + 
  panel_border()

ggsave("outputs/DistributionIronUpDownTemp.png")
ggsave("outputs/DistributionIronUpDownTemp.svg")

write.table(functionStudy, "outputs/DistributionIronUpDownTemp.txt",
            sep = "\t", quote = F, row.names = F)

#===============================================================================
# Inference of functional networks of co-expressed genes
#===============================================================================

#-------------------------------------------------------------------------------
# Distance calculations between gene expresssion profiles (C1 to C4)
#-------------------------------------------------------------------------------

# matrix distance
rownames(data) = data$Gene
d = dist(data[,paste0("Zscore",1:4)])
d = as.data.frame(as.matrix(d))

# Get triangular matrix
triangMatrix = d[lower.tri(d, diag=FALSE)]
triangMatrix = sort(triangMatrix)

#-------------------------------------------------------------------------------
# Definition of a threshold
#-------------------------------------------------------------------------------

# Find top threshold
TopThreshold = round(9 * length(triangMatrix) / 100)
seuil = triangMatrix[TopThreshold]

# hist of distances
hist(triangMatrix, breaks = 100, xlab = "Distance", main = "")
abline(v= seuil, col = "red", lty = 3)
legend("topright", lty = 3, legend = "Top 5%", col = "red", box.lty = 0)

#-------------------------------------------------------------------------------
# Search for link between genes (if distance is lower than threshold)
#-------------------------------------------------------------------------------

lien = cbind(from = rownames(d)[which(d < seuil, arr.ind=TRUE)[,1]], 
             to = colnames(d)[which(d < seuil, arr.ind=TRUE)[,2]])

# Remove link of gene with himself
lien = lien[-which(lien[,1] == lien[,2]), ]

# Remove double link : A->B & B->A 
cop = paste0(lien[,1], "_", lien[,2])
invcop = paste0(lien[,2], "_", lien[,1])

inter = NULL
lien = NULL
for(i in 1:length(cop)){
  if(!(cop[i] %in% inter) & !(invcop[i] %in% inter)){
    inter = c(inter, cop[i])
    lien = rbind(lien, unlist(strsplit(cop[i], "_")))
  }
}

nodes <- data %>%
  mutate(shape = case_when(type == "Type I" ~ "square",
                           type == "Type II" ~ "circle",
                           TRUE ~ "circle"),
         size = case_when(type == "Type I" ~ 9,
                          type == "Type II" ~ 9,
                          TRUE ~ 3)) %>%
  select(id = Gene, group=Fsimplify, 
         colLow = colLow, colHigh = colHigh,
         shape, size)

edges <- data.frame(source=lien[,1],
                    target=lien[,2], 
                    stringsAsFactors=FALSE)

subGraph("F1", nodes, edges)
subGraph("F2", nodes, edges)
subGraph("F3", nodes, edges)
subGraph("F4", nodes, edges)
subGraph("F5", nodes, edges)
subGraph("Others", nodes, edges)

#===============================================================================
# Website (iHKG viewer)
#===============================================================================

subGraphWeb("F1", nodes, edges)
subGraphWeb("F2", nodes, edges)
subGraphWeb("F3", nodes, edges)
subGraphWeb("F4", nodes, edges)
subGraphWeb("F5", nodes, edges)
subGraphWeb("Others", nodes, edges)
subGraphWeb(c(paste0("F",1:5),"Others"), nodes, edges)

write.table(nodes, "docs/assets/files/nodes.txt", sep = "\t", quote = F, row.names = F)
write.table(edges, "docs/assets/files/edges.txt", sep = "\t", quote = F, row.names = F)

write.table(nodes, "docs/assets/download/nodes.txt", sep = "\t", quote = F, row.names = F)
write.table(edges, "docs/assets/download/edges.txt", sep = "\t", quote = F, row.names = F)

#===============================================================================
# Google chart - web site
#===============================================================================

for(groupName in c(unique(data$Fsimplify),"all") ){
  
  if(groupName == "all"){
    groupName = unique(data$Fsimplify)
  }
  
  P1 = data %>%
    filter(Fsimplify %in% groupName) %>%   
    mutate(type = case_when(type == "SWITCH" ~ "iHKG - Switch",
                            type == "Type I" ~ "iHKG - Type I",
                            type == "Type II" ~ "iHKG - Type II",
                            TRUE ~ "Other iron responsive genes")) %>%
    group_by(type) %>% count() %>% 
    rename(labels = type )
  
  P2 = data %>%
    filter(Fsimplify %in% groupName) %>% 
    mutate(
      labels = case_when(C1_1.5_0.01 + C2_1.5_0.01 == 2 ~ "UP (30° and 37°)",
                         C1_1.5_0.01 + C2_1.5_0.01 == 1 ~ "UP (30° or 37°)",
                         C1_1.5_0.01 + C2_1.5_0.01 == 0 & abs(C1_1.5_0.01) == 1 ~ "NO",
                         C1_1.5_0.01 + C2_1.5_0.01 == 0 & abs(C1_1.5_0.01) == 0 ~ "NO",
                         C1_1.5_0.01 + C2_1.5_0.01 == -1 ~ "DOWN (30° or 37°)",
                         C1_1.5_0.01 + C2_1.5_0.01 == -2 ~ "DOWN (30° and 37°)"
      )) %>%
    group_by(labels) %>% count() 
  
  P3 = data %>%
    filter(Fsimplify %in% groupName) %>% 
    mutate(
      labels = case_when(C3_1.5_0.01 + C4_1.5_0.01 == 2 ~ "UP (30° and 37°)",
                         C3_1.5_0.01 + C4_1.5_0.01 == 1 ~ "UP (30° or 37°)",
                         C3_1.5_0.01 + C4_1.5_0.01 == 0 & abs(C3_1.5_0.01) == 1 ~ "NO",
                         C3_1.5_0.01 + C4_1.5_0.01 == 0 & abs(C3_1.5_0.01) == 0 ~ "NO",
                         C3_1.5_0.01 + C4_1.5_0.01 == -1 ~ "DOWN (30° or 37°)",
                         C3_1.5_0.01 + C4_1.5_0.01 == -2 ~ "DOWN (30° and 37°)"
      )) %>%
    group_by(labels) %>% count()
  
  dfPies = merge(P2, P3, by="labels")
  colnames(dfPies) = c('labels', "low","high")
  
  subTable = data %>%
    filter(Fsimplify %in% groupName) 
  
  BP = data %>%
    filter(Fsimplify %in% groupName) %>% 
    mutate(
      labels = case_when(C3_1.5_0.01 + C4_1.5_0.01 == 2 ~ "UP (30° and 37°)",
                         C3_1.5_0.01 + C4_1.5_0.01 == 1 ~ "UP (30° or 37°)",
                         C3_1.5_0.01 + C4_1.5_0.01 == 0 & abs(C3_1.5_0.01) == 1 ~ "NO",
                         C3_1.5_0.01 + C4_1.5_0.01 == 0 & abs(C3_1.5_0.01) == 0 ~ "NO",
                         C3_1.5_0.01 + C4_1.5_0.01 == -1 ~ "DOWN (30° or 37°)",
                         C3_1.5_0.01 + C4_1.5_0.01 == -2 ~ "DOWN (30° and 37°)"
      ),
      type = case_when(type == "SWITCH" ~ "iHKG - Switch",
                       type == "Type I" ~ "iHKG - Type I",
                       type == "Type II" ~ "iHKG - Type II",
                       TRUE ~ "Other iron responsive genes")) %>%  
    group_by(labels, type) %>% count()
  
  BP = dcast(BP, type ~ labels)
  BP[is.na(BP)] <- 0
  
  if(length(groupName) != 1){
    groupName = "all"
  }
  
  write.table(P1, paste0("docs/assets/dataTable/",groupName,"/",groupName,"_P1.csv" ), 
              quote = F, sep = ",", row.names = F)
  
  write.table(dfPies, paste0("docs/assets/dataTable/",groupName,"/",groupName,"_multiPies.csv" ), 
              quote = F, sep = ",", row.names = F)
  
  write.table(BP, paste0("docs/assets/dataTable/",groupName,"/",groupName,"_barplot.csv" ), 
              quote = F, sep = ",", row.names = F)

  supTable = subTable[,c("Gene",
                         "Gene name (locus name)",
                         "Description",
                         "C1",
                         "P.Val1",
                         "C2",
                         "P.Val2",
                         "C3",
                         "P.Val3",
                         "C4",
                         "P.Val4",
                         "Zscore1", 
                         "Zscore2",
                         "Zscore3",
                         "Zscore4",
                         "C1_2_0.05",                                                                  
                         "C2_2_0.05",                                                                  
                         "C3_2_0.05",                                                                  
                         "C4_2_0.05",
                         "Name of S. cerevisiae ortholog(s) (multiples separated by |)",
                         "Metago2019",
                         "SubMetago",
                         "Fsimplify",
                         "Gene", 
                         "type",
                         "C1_1.5_0.01",                                                                  
                         "C2_1.5_0.01",                                                                  
                         "C3_1.5_0.01",                                                                  
                         "C4_1.5_0.01")]
  colnames(supTable)[24] = "Gene2"
  supTable <- supTable %>%
    mutate( 
      RegulationC1 = case_when(C1_1.5_0.01 == 1 ~ "UP",
                               C1_1.5_0.01 == -1 ~ "DOWN",
                               TRUE ~ "0"
      ),
      RegulationC2 = case_when(C2_1.5_0.01 == 1 ~ "UP",
                               C2_1.5_0.01 == -1 ~ "DOWN",
                               TRUE ~ "0"
      ),
      RegulationC3 = case_when(C3_1.5_0.01 == 1 ~ "UP",
                               C3_1.5_0.01 == -1 ~ "DOWN",
                               TRUE ~ "0"
      ),
      RegulationC4 = case_when(C4_1.5_0.01 == 1 ~ "UP",
                               C4_1.5_0.01 == -1 ~ "DOWN",
                               TRUE ~ "0"
      )
    ) %>% 
    select(c("Gene",
             "Gene name (locus name)",
             "Description",
             "C1",
             "P.Val1",
             "C2",
             "P.Val2",
             "C3",
             "P.Val3",
             "C4",
             "P.Val4",
             "Zscore1", 
             "Zscore2",
             "Zscore3",
             "Zscore4",
             "C1_2_0.05",                                                                  
             "C2_2_0.05",                                                                  
             "C3_2_0.05",                                                                  
             "C4_2_0.05",
             "Name of S. cerevisiae ortholog(s) (multiples separated by |)",
             "Metago2019",
             "SubMetago",
             "Fsimplify",
             "Gene2", 
             "type", 
             "RegulationC1",
             "RegulationC2",
             "RegulationC3", 
             "RegulationC4"))
  
  for(convPos in c("C1","P.Val1","C2","P.Val2","C3","P.Val3","C4","P.Val4","Zscore1", 
                   "Zscore2","Zscore3","Zscore4")){
    supTable[,convPos] =formatC(as.numeric(supTable[,convPos]),format="e", digits = 2)
  }
  
  colnames(supTable) = paste0('C', 1:29)
  
  write.table(supTable, paste0("docs/assets/dataTable/",groupName,"/SupData2_",groupName,".tsv" ), 
              quote = F, sep = "\t", row.names = F)
  
}


#===============================================================================
# Annotation
#===============================================================================

#-------------------------------------------------------------------------------
# Annotation SCERE
#-------------------------------------------------------------------------------

download.file(url = paste0("https://downloads.yeastgenome.org/curation/",
                           "chromosomal_feature/SGD_features.tab"),
              destfile = "./Data/SGD_features.tab",
              method = "wget")

# Read annotation file of S. cerevisiae
SCERE <- read.csv("./data/SGD_features.tab", sep = "\t",
                  stringsAsFactors = F, quote = "", header = F)
colnames(SCERE) <- c("Primary SGDID (mandatory)",
                     "Feature type (mandatory)",
                     "Feature qualifier (optional)",
                     "Feature name SCERE",
                     "Standard gene name (optional)",
                     "Alias (optional, multiples separated by |)",
                     "Parent feature name (optional)",
                     paste0("Secondary SGDID (optional, multiples ",
                            "separated by |)"),
                     "Chromosome (optional)",
                     "Start_coordinate (optional)",
                     "Stop_coordinate (optional)",
                     "Strand (optional)",
                     "Genetic position (optional)",
                     "Coordinate version (optional)",
                     "Sequence version (optional)",
                     "Description (optional)")

#-------------------------------------------------------------------------------
# Annotation CGLAB
#-------------------------------------------------------------------------------
download.file(paste0("http://www.candidagenome.org/download/",
                     "chromosomal_feature_files/C_glabrata_CBS138/",
                     "C_glabrata_CBS138_current_chromosomal_feature.tab"),
              destfile = "./data/CGD_features_C_glabrata.tab",
              method = "wget")

CGLAB <- read.csv("./data/CGD_features_C_glabrata.tab", sep = "\t",
                  stringsAsFactors = F, quote = "", header = F,
                  skip = 8)

colnames(CGLAB) <- c("Feature name (mandatory)",
                     "Gene name (locus name)",
                     "Aliases (multiples separated by |)",
                     "Feature type",
                     "Chromosome",
                     "Start Coordinate",
                     "Stop Coordinate",
                     "Strand",
                     "Primary CGDID",
                     "Secondary CGDID (if any)",
                     "Description",
                     "Date Created",
                     "Sequence Coordinate Version Date (if any)",
                     "Blank",
                     "Blank",
                     "Date of gene name reservation (if any).",
                     paste0("Has the reserved gene name",
                            " become the standard name? (Y/N)"),
                     paste0("Name of S. cerevisiae ortholog(s) ",
                            "(multiples separated by |)"))

CGLAB_ID = CGLAB[, c("Feature name (mandatory)","Primary CGDID")]
colnames(CGLAB_ID) = c("ORF", "CGD_ID")
rownames(CGLAB_ID) = CGLAB$`Feature name (mandatory)`

#===============================================================================
# Orthologs
#===============================================================================

download.file(url = "http://www.candidagenome.org/download/homology/best_hits/C_glabrata_CBS138_S_cerevisiae_best_hits.txt",
              destfile = "./data/orthotable_CGLAB_vs_SCERE_bestHit.txt",
              method = "wget")

download.file(url = "http://www.candidagenome.org/download/homology/orthologs/C_glabrata_CBS138_S_cerevisiae_by_CGOB/C_glabrata_CBS138_S_cerevisiae_orthologs.txt",
              destfile = "./data/orthotable_CGLAB_vs_SCERE.txt",
              method = "wget")

orthologs = rbind(read.csv2("data/orthotable_CGLAB_vs_SCERE.txt", sep ="\t", 
                            stringsAsFactors = F, skip = 8, header = F),
                  read.csv2("data/orthotable_CGLAB_vs_SCERE_bestHit.txt", sep ="\t", 
                            stringsAsFactors = F, skip = 8, header = F))

orthologs = orthologs %>%
  select(V1, V4) %>%
  rename("Feature name SCERE" = V4, 
         Gene = V1) %>% 
  left_join(SCERE[,c("Feature name SCERE", "Primary SGDID (mandatory)", "Feature name SCERE", "Standard gene name (optional)", "Description (optional)")], "Feature name SCERE")

rownames(orthologs) = orthologs$Gene

#===============================================================================
# Final table
#===============================================================================

supTable = data[,c("Gene",
                   "Gene name (locus name)",
                   "Description",
                   "C1",
                   "P.Val1",
                   "C2",
                   "P.Val2",
                   "C3",
                   "P.Val3",
                   "C4",
                   "P.Val4",
                   "Zscore1", 
                   "Zscore2",
                   "Zscore3",
                   "Zscore4",
                   "C1_2_0.05",                                                                  
                   "C2_2_0.05",                                                                  
                   "C3_2_0.05",                                                                  
                   "C4_2_0.05",
                   "Metago2019",
                   "SubMetago",
                   "Fsimplify",
                   "Gene", 
                   "type",
                   "C1_1.5_0.01",                                                                  
                   "C2_1.5_0.01",                                                                  
                   "C3_1.5_0.01",                                                                  
                   "C4_1.5_0.01")]


colnames(supTable)[23] = "GENE"

supTable <- supTable %>%
  mutate( 
    RegulationC1 = case_when(C1_1.5_0.01 == 1 ~ "UP",
                             C1_1.5_0.01 == -1 ~ "DOWN",
                             TRUE ~ "0"
    ),
    RegulationC2 = case_when(C2_1.5_0.01 == 1 ~ "UP",
                             C2_1.5_0.01 == -1 ~ "DOWN",
                             TRUE ~ "0"
    ),
    RegulationC3 = case_when(C3_1.5_0.01 == 1 ~ "UP",
                             C3_1.5_0.01 == -1 ~ "DOWN",
                             TRUE ~ "0"
    ),
    RegulationC4 = case_when(C4_1.5_0.01 == 1 ~ "UP",
                             C4_1.5_0.01 == -1 ~ "DOWN",
                             TRUE ~ "0"
    )
    
  )%>% 
  select(c("Gene",
           "Gene name (locus name)",
           "Description",
           "C1",
           "P.Val1",
           "C2",
           "P.Val2",
           "C3",
           "P.Val3",
           "C4",
           "P.Val4",
           "Zscore1", 
           "Zscore2",
           "Zscore3",
           "Zscore4",
           "C1_2_0.05",                                                                  
           "C2_2_0.05",                                                                  
           "C3_2_0.05",                                                                  
           "C4_2_0.05",
           "Metago2019",
           "SubMetago",
           "Fsimplify",
           "GENE", 
           "type",
           "RegulationC1",
           "RegulationC2",
           "RegulationC3", 
           "RegulationC4"))


rownames(supTable) = supTable$Gene

finalSupTable = merge(supTable, orthologs, by="row.names",all.x=TRUE)
finalSupTable = finalSupTable[,-1]
colnames(finalSupTable) = c("ORF (CGLAB)",	"Name",	
                            "Description (extract from CGD database)",	
                            "logFC (C1)",	"pval (C1)",
                            "logFC (C2)",	"pval (C2)",	
                            "logFC (C3)",	"pval (C3)",	
                            "logFC (C4)",	"pval (C4)",
                            "Zscore (C1)",	"Zscore (C2)",
                            "Zscore (C3)",	"Zscore (C4)",
                            "DE (C1)",	"DE (C2)",	"DE (C3)",	"DE (C4)",
                            # "Description (extract from GRYC database)",
                            "Functional classe (this study)",
                            "Functional sub-class (this study)",
                            "Function label (this study)",
                            "ORF",
                            "iHKG (this study)",
                            "Regulation (C1)",
                            "Regulation (C2)",
                            "Regulation (C3)",
                            "Regulation (C4)",
                            "GENE",	"Ortho SCERE",
                            "ID (SGD/CGD)",
                            "Feature name",
                            "Gene name",
                            "Description")
rownames(finalSupTable) = finalSupTable$`ORF (CGLAB)`

finalSupTable <- merge(finalSupTable, CGLAB_ID, by="row.names", all.x = T)

finalSupTable <- finalSupTable %>%
  mutate("Ortho SCERE" = case_when( is.na(`Ortho SCERE`) ~ "NO_ORTHO",
                                    TRUE ~ `Ortho SCERE`),
         "GENE" = case_when( is.na(`GENE`) ~ `ORF (CGLAB)`,
                             TRUE ~ `GENE`),
         "Feature name" = case_when( is.na(`Feature name`) ~ `ORF (CGLAB)`,
                                     TRUE ~ `Feature name`),
         "Gene name" = case_when( is.na(`Gene name`) ~ `Name`,
                                  TRUE ~ `Gene name`),
         "ID (SGD/CGD)" = case_when( is.na(`ID (SGD/CGD)`) ~ `CGD_ID`,
                                  TRUE ~ `ID (SGD/CGD)`),
         "Description" = case_when( is.na(`Description`) ~ `Description (extract from CGD database)`,
                                    TRUE ~ `Description`)
  )

finalSupTable <- finalSupTable[, -which(colnames(finalSupTable) %in% c("ORF.y","Row.names", "CGD_ID"))]

#-------------------------------------------------------------------------------
# write final results in different formats
#-------------------------------------------------------------------------------

write.table(finalSupTable, "docs/assets/download/SuppData_S2.tsv", quote = F, sep ="\t", 
            row.names = F)

write.csv(finalSupTable, "docs/assets/download/SuppData_S2.csv", quote = F,
            row.names = F)

write.xlsx(finalSupTable, "docs/assets/download/SuppData_S2.xlsx", sheetName = "Iron responsive genes", 
           col.names = TRUE, row.names = F, append = FALSE)

# /!\ Remove file before write new ods
write_ods(as.data.frame(finalSupTable), "docs/assets/download/SuppData_S2.ods")
