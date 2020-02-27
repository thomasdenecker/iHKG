###
# Gaëlle Lelandais <gaelle.lelandais@u-psud.fr>
# THomas Denecker <thomas.denecker@gmail.com>
###

# Script to infer of network of co-expressed genes, as explained in
# Denecker et al.

# Step 0 : iGraph library
library(igraph)

# Step 1 : Data reading
expData = read.table("Demo_File.txt", header = T, row.names = 1)

# Step 2 : Distance calculation
distMat = as.matrix(dist(expData, method = "euclidean"))
# Threshold to link genes with edges 
Tval = quantile(as.dist(distMat), probs = 0.05)

# Step 3 : Graph construction
edgeList = NULL
for(i in 1:(nrow(distMat) - 1)){
  for(j in (i+1):ncol(distMat)){
    if(distMat[i,j] < Tval){
      edgeList = rbind(edgeList, c(row.names(distMat)[i],
                                   colnames(distMat)[j]))
    }
  }
}

coExprGraph = graph_from_edgelist(edgeList, directed = F)

# Step 3 : Graph representation
plot.igraph(coExprGraph, vertex.color = "red", vertex.size = 5, vertex.label = NA,
            arrow.size = 0.1, edge.color = "grey", main = "Network of co-expressed genes")
