$(function() { // on dom ready
  
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
  
  elements: [
{
                  data: {
                  id: 'CAGL0A00979g',
                  name: 'CAGL0A00979g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A00979g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytosolic large ribosomal subunit, hyphal cell wall, yeast-form cell wall localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A00979g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A00979g'  target='_blank'> Link to GRYC</a>",
                  x : -0.522479116293302,
                  y : -2.84308915625711
                  },
                  position : {
                  'x' : -5.22479116293303,
                  'y' : -28.4308915625711
                  },
  },
{
                  data: {
                  id: 'CAGL0A02002g',
                  name: 'CAGL0A02002g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A02002g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YOL024W and Saccharomyces cerevisiae S288C : YOL024W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02002g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02002g'  target='_blank'> Link to GRYC</a>",
                  x : 11.7108858060843,
                  y : 5.44735456971541
                  },
                  position : {
                  'x' : 117.108858060843,
                  'y' : 54.4735456971541
                  },
  },
{
                  data: {
                  id: 'CAGL0A02112g',
                  name: 'CAGL0A02112g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A02112g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have asparagine-tRNA ligase activity and role in asparaginyl-tRNA aminoacylation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02112g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02112g'  target='_blank'> Link to GRYC</a>",
                  x : -0.73776460850656,
                  y : -2.75964990619575
                  },
                  position : {
                  'x' : -7.3776460850656,
                  'y' : -27.5964990619575
                  },
  },
{
                  data: {
                  id: 'CAGL0A04015g',
                  name: 'CAGL0A04015g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A04015g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in rRNA processing and box C/D snoRNP complex, nucleolus, small-subunit processome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A04015g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A04015g'  target='_blank'> Link to GRYC</a>",
                  x : -0.864460554725885,
                  y : -2.20607015528819
                  },
                  position : {
                  'x' : -8.64460554725885,
                  'y' : -22.0607015528819
                  },
  },
{
                  data: {
                  id: 'CAGL0A04653g',
                  name: 'CAGL0A04653g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A04653g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glutaminyl-tRNA synthase (glutamine-hydrolyzing) activity, role in glutaminyl-tRNAGln biosynthesis via transamidation, mitochondrial translation and glutamyl-tRNA(Gln) amidotransferase complex, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A04653g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A04653g'  target='_blank'> Link to GRYC</a>",
                  x : 1.27432552162593,
                  y : 6.22111714104851
                  },
                  position : {
                  'x' : 12.7432552162593,
                  'y' : 62.2111714104851
                  },
  },
{
                  data: {
                  id: 'CAGL0A04829g',
                  name: 'CAGL0A04829g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A04829g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative hexokinase isoenzyme 2; protein differentially expressed in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A04829g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A04829g'  target='_blank'> Link to GRYC</a>",
                  x : 8.93447035636562,
                  y : 7.02347049143669
                  },
                  position : {
                  'x' : 89.3447035636562,
                  'y' : 70.2347049143669
                  },
  },
{
                  data: {
                  id: 'CAGL0B00286g',
                  name: 'CAGL0B00286g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B00286g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-serine ammonia-lyase activity, L-threonine ammonia-lyase activity, role in L-serine catabolic process, threonine catabolic process and mitochondrial nucleoid localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B00286g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B00286g'  target='_blank'> Link to GRYC</a>",
                  x : 0.191828734137565,
                  y : -2.18314364397866
                  },
                  position : {
                  'x' : 1.91828734137565,
                  'y' : -21.8314364397866
                  },
  },
{
                  data: {
                  id: 'CAGL0B00792g',
                  name: 'CAGL0B00792g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B00792g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA binding activity, role in regulation of translation and cytoplasmic stress granule, polysome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B00792g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B00792g'  target='_blank'> Link to GRYC</a>",
                  x : 0.40514863646334,
                  y : -2.70382694103625
                  },
                  position : {
                  'x' : 4.0514863646334,
                  'y' : -27.0382694103625
                  },
  },
{
                  data: {
                  id: 'CAGL0B01507g',
                  name: 'CAGL0B01507g',
                  gene: 'ARG8',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B01507g</h2><hr><p><b>Gene name</b> : ARG8</p><p><b>Description</b> : Ortholog(s) have N2-acetyl-L-ornithine:2-oxoglutarate 5-aminotransferase activity, role in arginine biosynthetic process, arginine biosynthetic process via ornithine, ornithine biosynthetic process and mitochondrial matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B01507g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B01507g'  target='_blank'> Link to GRYC</a>",
                  x : -0.501315186161079,
                  y : -0.370194422652627
                  },
                  position : {
                  'x' : -5.01315186161079,
                  'y' : -3.70194422652627
                  },
  },
{
                  data: {
                  id: 'CAGL0B01727g',
                  name: 'CAGL0B01727g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B01727g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have D-ribulokinase activity and role in pentose metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B01727g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B01727g'  target='_blank'> Link to GRYC</a>",
                  x : 9.89003615342151,
                  y : 5.18490948636399
                  },
                  position : {
                  'x' : 98.9003615342151,
                  'y' : 51.8490948636399
                  },
  },
{
                  data: {
                  id: 'CAGL0B01881g',
                  name: 'CAGL0B01881g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B01881g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have tRNA (guanine-N2-)-methyltransferase activity, role in tRNA N2-guanine methylation, tRNA methylation and mitochondrion, nuclear envelope, nuclear inner membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B01881g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B01881g'  target='_blank'> Link to GRYC</a>",
                  x : -0.964327710069873,
                  y : -2.53739924596023
                  },
                  position : {
                  'x' : -9.64327710069873,
                  'y' : -25.3739924596023
                  },
  },
{
                  data: {
                  id: 'CAGL0B02794g',
                  name: 'CAGL0B02794g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B02794g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have (S)-2-(5-amino-1-(5-phospho-D-ribosyl)imidazole-4-carboxamido)succinate AMP-lyase (fumarate-forming) activity, N6-(1,2-dicarboxyethyl)AMP AMP-lyase (fumarate-forming) activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02794g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02794g'  target='_blank'> Link to GRYC</a>",
                  x : 4.43509244691694,
                  y : 3.88836544389859
                  },
                  position : {
                  'x' : 44.3509244691694,
                  'y' : 38.8836544389859
                  },
  },
{
                  data: {
                  id: 'CAGL0B02860g',
                  name: 'CAGL0B02860g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B02860g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in autophagy of mitochondrion, macroautophagy and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02860g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02860g'  target='_blank'> Link to GRYC</a>",
                  x : 7.8472435899869,
                  y : 6.58381800600621
                  },
                  position : {
                  'x' : 78.472435899869,
                  'y' : 65.8381800600621
                  },
  },
{
                  data: {
                  id: 'CAGL0B03619g',
                  name: 'CAGL0B03619g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B03619g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have endopeptidase activity, peptidase activity, serine-type endopeptidase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B03619g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B03619g'  target='_blank'> Link to GRYC</a>",
                  x : 8.06639482871658,
                  y : 5.62381924326972
                  },
                  position : {
                  'x' : 80.6639482871658,
                  'y' : 56.2381924326972
                  },
  },
{
                  data: {
                  id: 'CAGL0B03663g',
                  name: 'CAGL0B03663g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B03663g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have citrate (Si)-synthase activity, role in citrate metabolic process and cytoplasm, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B03663g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B03663g'  target='_blank'> Link to GRYC</a>",
                  x : -1.807711865363,
                  y : -7.334442868891
                  },
                  position : {
                  'x' : -18.07711865363,
                  'y' : -73.34442868891
                  },
  },
{
                  data: {
                  id: 'CAGL0B03993g',
                  name: 'CAGL0B03993g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B03993g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have dihydroxy-acid dehydratase activity and role in branched-chain amino acid biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B03993g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B03993g'  target='_blank'> Link to GRYC</a>",
                  x : -0.72635312150881,
                  y : 0.408823417065244
                  },
                  position : {
                  'x' : -7.2635312150881,
                  'y' : 4.08823417065244
                  },
  },
{
                  data: {
                  id: 'CAGL0C01595g',
                  name: 'CAGL0C01595g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C01595g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glutaminase activity, imidazoleglycerol-phosphate synthase activity and role in histidine biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C01595g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C01595g'  target='_blank'> Link to GRYC</a>",
                  x : 1.36754654583433,
                  y : 6.55543786130865
                  },
                  position : {
                  'x' : 13.6754654583433,
                  'y' : 65.5543786130865
                  },
  },
{
                  data: {
                  id: 'CAGL0C02739g',
                  name: 'CAGL0C02739g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C02739g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in mitochondrion organization, phospholipid homeostasis and integral component of mitochondrial outer membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C02739g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C02739g'  target='_blank'> Link to GRYC</a>",
                  x : 7.45671256063892,
                  y : 6.63317179293198
                  },
                  position : {
                  'x' : 74.5671256063892,
                  'y' : 66.3317179293198
                  },
  },
{
                  data: {
                  id: 'CAGL0C03652g',
                  name: 'CAGL0C03652g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C03652g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 4-hydroxybenzoate octaprenyltransferase activity, role in ubiquinone biosynthetic process and integral component of mitochondrial membrane, mitochondrial inner membrane, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03652g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03652g'  target='_blank'> Link to GRYC</a>",
                  x : -1.96308723836842,
                  y : -4.92161266989363
                  },
                  position : {
                  'x' : -19.6308723836841,
                  'y' : -49.2161266989363
                  },
  },
{
                  data: {
                  id: 'CAGL0C04279g',
                  name: 'CAGL0C04279g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C04279g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have dehydrodolichyl diphosphate synthase activity, prenyltransferase activity and role in dolichol biosynthetic process, endoplasmic reticulum to Golgi vesicle-mediated transport, protein glycosylation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C04279g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C04279g'  target='_blank'> Link to GRYC</a>",
                  x : -0.229039411515707,
                  y : 2.14565656238147
                  },
                  position : {
                  'x' : -2.29039411515707,
                  'y' : 21.4565656238147
                  },
  },
{
                  data: {
                  id: 'CAGL0C04587g',
                  name: 'CAGL0C04587g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C04587g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YJR098C, C. auris B8441 : B9J08_001284, Candida tenuis NRRL Y-1498 : CANTEDRAFT_135029, Pichia stipitis Pignal : PICST_42853 and Saccharomyces cerevisiae S288C : YJR098C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C04587g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C04587g'  target='_blank'> Link to GRYC</a>",
                  x : 7.29884539016308,
                  y : 7.07491315153202
                  },
                  position : {
                  'x' : 72.9884539016308,
                  'y' : 70.7491315153202
                  },
  },
{
                  data: {
                  id: 'CAGL0C04917g',
                  name: 'CAGL0C04917g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C04917g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have carbamoyl-phosphate synthase (glutamine-hydrolyzing) activity, role in arginine biosynthetic process and carbamoyl-phosphate synthase complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C04917g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C04917g'  target='_blank'> Link to GRYC</a>",
                  x : 0.721210315768335,
                  y : -1.27580652496821
                  },
                  position : {
                  'x' : 7.21210315768335,
                  'y' : -12.7580652496821
                  },
  },
{
                  data: {
                  id: 'CAGL0C05027g',
                  name: 'CAGL0C05027g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C05027g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in acetate catabolic process, carnitine metabolic process, cellular respiration and cytosol, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C05027g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C05027g'  target='_blank'> Link to GRYC</a>",
                  x : 4.53920227036668,
                  y : 8.2559253212732
                  },
                  position : {
                  'x' : 45.3920227036668,
                  'y' : 82.559253212732
                  },
  },
{
                  data: {
                  id: 'CAGL0C05115g',
                  name: 'CAGL0C05115g',
                  gene: 'ARG1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0C05115g</h2><hr><p><b>Gene name</b> : ARG1</p><p><b>Description</b> : Argininosuccinate synthetase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C05115g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C05115g'  target='_blank'> Link to GRYC</a>",
                  x : 1.05882961255578,
                  y : 1.30884792653178
                  },
                  position : {
                  'x' : 10.5882961255578,
                  'y' : 13.0884792653178
                  },
  },
{
                  data: {
                  id: 'CAGL0D00880g',
                  name: 'CAGL0D00880g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D00880g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ribonucleoprotein complex binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00880g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00880g'  target='_blank'> Link to GRYC</a>",
                  x : 0.216547511245658,
                  y : -3.54352367119014
                  },
                  position : {
                  'x' : 2.16547511245658,
                  'y' : -35.4352367119014
                  },
  },
{
                  data: {
                  id: 'CAGL0D01298g',
                  name: 'CAGL0D01298g',
                  gene: 'TKL1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D01298g</h2><hr><p><b>Gene name</b> : TKL1</p><p><b>Description</b> : Putative transketolase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D01298g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D01298g'  target='_blank'> Link to GRYC</a>",
                  x : 8.59836066871279,
                  y : 6.64321236264818
                  },
                  position : {
                  'x' : 85.9836066871279,
                  'y' : 66.4321236264818
                  },
  },
{
                  data: {
                  id: 'CAGL0D01562g',
                  name: 'CAGL0D01562g',
                  gene: 'FCY1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#ffffff',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D01562g</h2><hr><p><b>Gene name</b> : FCY1</p><p><b>Description</b> : Ortholog(s) have cytosine deaminase activity and role in cytidine metabolic process, cytosine metabolic process, pyrimidine-containing compound salvage</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D01562g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D01562g'  target='_blank'> Link to GRYC</a>",
                  x : 2.28697296595338,
                  y : -2.76511188465674
                  },
                  position : {
                  'x' : 22.8697296595338,
                  'y' : -27.6511188465673
                  },
  },
{
                  data: {
                  id: 'CAGL0D02134g',
                  name: 'CAGL0D02134g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D02134g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YKL133C and Saccharomyces cerevisiae S288C : YKL133C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D02134g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D02134g'  target='_blank'> Link to GRYC</a>",
                  x : 6.47188981029632,
                  y : 6.08505924990111
                  },
                  position : {
                  'x' : 64.7188981029632,
                  'y' : 60.8505924990111
                  },
  },
{
                  data: {
                  id: 'CAGL0D02596g',
                  name: 'CAGL0D02596g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D02596g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in DNA-dependent DNA replication, double-strand break repair via break-induced replication, mitotic DNA replication initiation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D02596g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D02596g'  target='_blank'> Link to GRYC</a>",
                  x : -1.08246413164666,
                  y : -5.5802243936001
                  },
                  position : {
                  'x' : -10.8246413164666,
                  'y' : -55.802243936001
                  },
  },
{
                  data: {
                  id: 'CAGL0D04026g',
                  name: 'CAGL0D04026g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D04026g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 4-aminobutyrate transaminase activity, pyridoxal phosphate binding activity and role in cellular amide catabolic process, gamma-aminobutyric acid catabolic process, glutamate metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D04026g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D04026g'  target='_blank'> Link to GRYC</a>",
                  x : 7.4740714218953,
                  y : 5.95433711463164
                  },
                  position : {
                  'x' : 74.740714218953,
                  'y' : 59.5433711463164
                  },
  },
{
                  data: {
                  id: 'CAGL0D05060g',
                  name: 'CAGL0D05060g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D05060g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted hydrolase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D05060g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D05060g'  target='_blank'> Link to GRYC</a>",
                  x : -0.02647199252376,
                  y : -1.85265929967841
                  },
                  position : {
                  'x' : -0.2647199252376,
                  'y' : -18.5265929967841
                  },
  },
{
                  data: {
                  id: 'CAGL0D05082g',
                  name: 'CAGL0D05082g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D05082g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D05082g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D05082g'  target='_blank'> Link to GRYC</a>",
                  x : 9.1376028928487,
                  y : 5.81026645356939
                  },
                  position : {
                  'x' : 91.376028928487,
                  'y' : 58.1026645356939
                  },
  },
{
                  data: {
                  id: 'CAGL0D06424g',
                  name: 'CAGL0D06424g',
                  gene: 'ACO1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0D06424g</h2><hr><p><b>Gene name</b> : ACO1</p><p><b>Description</b> : Putative aconitate hydratase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D06424g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D06424g'  target='_blank'> Link to GRYC</a>",
                  x : -3.94443481576667,
                  y : 4.34999853463585
                  },
                  position : {
                  'x' : -39.4443481576667,
                  'y' : 43.4999853463585
                  },
  },
{
                  data: {
                  id: 'CAGL0E01155g',
                  name: 'CAGL0E01155g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E01155g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase I activity, role in nucleolar large rRNA transcription by RNA polymerase I, transcription by RNA polymerase I and RNA polymerase I complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01155g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01155g'  target='_blank'> Link to GRYC</a>",
                  x : 0.300301789800515,
                  y : -4.28212339480935
                  },
                  position : {
                  'x' : 3.00301789800515,
                  'y' : -42.8212339480935
                  },
  },
{
                  data: {
                  id: 'CAGL0E01727g',
                  name: 'CAGL0E01727g',
                  gene: 'YPS3',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffffff',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E01727g</h2><hr><p><b>Gene name</b> : YPS3</p><p><b>Description</b> : Putative aspartic protease; predicted GPI-anchor; member of a YPS gene cluster that is required for virulence in mice</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01727g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01727g'  target='_blank'> Link to GRYC</a>",
                  x : -7.72160470754004,
                  y : 7.74721893499051
                  },
                  position : {
                  'x' : -77.2160470754004,
                  'y' : 77.4721893499051
                  },
  },
{
                  data: {
                  id: 'CAGL0E01771g',
                  name: 'CAGL0E01771g',
                  gene: 'YPS5',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E01771g</h2><hr><p><b>Gene name</b> : YPS5</p><p><b>Description</b> : Putative aspartic protease; predicted GPI-anchor; member of a YPS gene cluster that is required for virulence in mice; gene is downregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01771g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01771g'  target='_blank'> Link to GRYC</a>",
                  x : -0.628144378910769,
                  y : -1.08488280288265
                  },
                  position : {
                  'x' : -6.28144378910769,
                  'y' : -10.8488280288265
                  },
  },
{
                  data: {
                  id: 'CAGL0E01793g',
                  name: 'CAGL0E01793g',
                  gene: 'YPS6',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E01793g</h2><hr><p><b>Gene name</b> : YPS6</p><p><b>Description</b> : Putative aspartic protease; predicted GPI-anchor; member of a YPS gene cluster that is required for virulence in mice; expression induced at high temperature</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01793g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01793g'  target='_blank'> Link to GRYC</a>",
                  x : 9.99012545154689,
                  y : 4.40376180205926
                  },
                  position : {
                  'x' : 99.9012545154689,
                  'y' : 44.0376180205926
                  },
  },
{
                  data: {
                  id: 'CAGL0E01815g',
                  name: 'CAGL0E01815g',
                  gene: 'YPS8',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E01815g</h2><hr><p><b>Gene name</b> : YPS8</p><p><b>Description</b> : Putative aspartic protease; predicted GPI-anchor; member of a YPS gene cluster that is required for virulence in mice; induced in response to low pH and high temperature</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01815g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01815g'  target='_blank'> Link to GRYC</a>",
                  x : 6.39324465491633,
                  y : 6.57152770638392
                  },
                  position : {
                  'x' : 63.9324465491633,
                  'y' : 65.7152770638392
                  },
  },
{
                  data: {
                  id: 'CAGL0E01837g',
                  name: 'CAGL0E01837g',
                  gene: 'YPS9',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E01837g</h2><hr><p><b>Gene name</b> : YPS9</p><p><b>Description</b> : Putative aspartic protease; predicted GPI-anchor; member of a YPS gene cluster that is required for virulence in mice; expression induced at high temperature</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01837g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01837g'  target='_blank'> Link to GRYC</a>",
                  x : 2.32317929532733,
                  y : 8.65297649029522
                  },
                  position : {
                  'x' : 23.2317929532733,
                  'y' : 86.5297649029522
                  },
  },
{
                  data: {
                  id: 'CAGL0E02013g',
                  name: 'CAGL0E02013g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E02013g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytosolic large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E02013g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E02013g'  target='_blank'> Link to GRYC</a>",
                  x : 0.00193579546486864,
                  y : -2.87179153278545
                  },
                  position : {
                  'x' : 0.0193579546486864,
                  'y' : -28.7179153278545
                  },
  },
{
                  data: {
                  id: 'CAGL0E02651g',
                  name: 'CAGL0E02651g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E02651g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted identical protein binding, serine-type endopeptidase activity and role in negative regulation of catalytic activity, proteolysis</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E02651g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E02651g'  target='_blank'> Link to GRYC</a>",
                  x : 6.54083315995619,
                  y : 6.26585888965566
                  },
                  position : {
                  'x' : 65.4083315995619,
                  'y' : 62.6585888965566
                  },
  },
{
                  data: {
                  id: 'CAGL0E03520g',
                  name: 'CAGL0E03520g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E03520g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity and mitochondrial large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E03520g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E03520g'  target='_blank'> Link to GRYC</a>",
                  x : -0.0376943869278314,
                  y : 5.12157292397377
                  },
                  position : {
                  'x' : -0.376943869278314,
                  'y' : 51.2157292397377
                  },
  },
{
                  data: {
                  id: 'CAGL0E03916g',
                  name: 'CAGL0E03916g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E03916g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycerol kinase activity, role in glycerol metabolic process and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E03916g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E03916g'  target='_blank'> Link to GRYC</a>",
                  x : 3.34203917010319,
                  y : 7.09810482895401
                  },
                  position : {
                  'x' : 33.4203917010319,
                  'y' : 70.9810482895402
                  },
  },
{
                  data: {
                  id: 'CAGL0E03938g',
                  name: 'CAGL0E03938g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E03938g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in maturation of LSU-rRNA and cytosolic large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E03938g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E03938g'  target='_blank'> Link to GRYC</a>",
                  x : -0.923126740489455,
                  y : -3.33154272667659
                  },
                  position : {
                  'x' : -9.23126740489455,
                  'y' : -33.3154272667659
                  },
  },
{
                  data: {
                  id: 'CAGL0E04510g',
                  name: 'CAGL0E04510g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E04510g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phospholipase activity, role in cardiolipin metabolic process, phosphatidylethanolamine metabolic process, phospholipid metabolic process and mitochondrial matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04510g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04510g'  target='_blank'> Link to GRYC</a>",
                  x : 8.33957134216966,
                  y : 5.81043295704886
                  },
                  position : {
                  'x' : 83.3957134216966,
                  'y' : 58.1043295704886
                  },
  },
{
                  data: {
                  id: 'CAGL0E04994g',
                  name: 'CAGL0E04994g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E04994g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity, role in cytoplasmic translation and cytosolic large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04994g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04994g'  target='_blank'> Link to GRYC</a>",
                  x : 0.148270534165003,
                  y : -2.60124947396873
                  },
                  position : {
                  'x' : 1.48270534165003,
                  'y' : -26.0124947396873
                  },
  },
{
                  data: {
                  id: 'CAGL0E05148g',
                  name: 'CAGL0E05148g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E05148g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have alpha-mannosidase activity, role in mannose catabolic process, oligosaccharide catabolic process and Cvt complex, fungal-type vacuole membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05148g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05148g'  target='_blank'> Link to GRYC</a>",
                  x : 8.58100052362678,
                  y : 5.64804757512657
                  },
                  position : {
                  'x' : 85.8100052362678,
                  'y' : 56.4804757512657
                  },
  },
{
                  data: {
                  id: 'CAGL0E05500g',
                  name: 'CAGL0E05500g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E05500g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase I activity, promoter-specific chromatin binding activity and role in nucleolar large rRNA transcription by RNA polymerase I, transcription by RNA polymerase I</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05500g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05500g'  target='_blank'> Link to GRYC</a>",
                  x : -0.13589038010108,
                  y : -2.18737960223259
                  },
                  position : {
                  'x' : -1.3589038010108,
                  'y' : -21.8737960223259
                  },
  },
{
                  data: {
                  id: 'CAGL0E05654g',
                  name: 'CAGL0E05654g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E05654g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphatidylglycerol phospholipase C activity, role in cell-abiotic substrate adhesion, glycerophospholipid catabolic process, phosphatidylglycerol catabolic process and lipid droplet, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05654g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05654g'  target='_blank'> Link to GRYC</a>",
                  x : 4.0122301103046,
                  y : 10.4088992683331
                  },
                  position : {
                  'x' : 40.122301103046,
                  'y' : 104.088992683331
                  },
  },
{
                  data: {
                  id: 'CAGL0E06380g',
                  name: 'CAGL0E06380g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E06380g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATP-dependent NAD(P)H-hydrate dehydratase activity and role in nicotinamide nucleotide metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E06380g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E06380g'  target='_blank'> Link to GRYC</a>",
                  x : 7.7518599367631,
                  y : 7.35419879668215
                  },
                  position : {
                  'x' : 77.518599367631,
                  'y' : 73.5419879668215
                  },
  },
{
                  data: {
                  id: 'CAGL0F00429g',
                  name: 'CAGL0F00429g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F00429g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have GTP diphosphatase activity, ITP diphosphatase activity, UTP diphosphatase activity, XTP diphosphatase activity, dATP pyrophosphohydrolase activity and dCTP diphosphatase activity, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00429g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00429g'  target='_blank'> Link to GRYC</a>",
                  x : 0.430672791556108,
                  y : -3.45600502915117
                  },
                  position : {
                  'x' : 4.30672791556108,
                  'y' : -34.5600502915117
                  },
  },
{
                  data: {
                  id: 'CAGL0F00649g',
                  name: 'CAGL0F00649g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F00649g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted ATP binding, protein kinase activity, protein tyrosine kinase activity and role in protein phosphorylation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00649g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00649g'  target='_blank'> Link to GRYC</a>",
                  x : -2.3023807063706,
                  y : -7.19384349157848
                  },
                  position : {
                  'x' : -23.023807063706,
                  'y' : -71.9384349157848
                  },
  },
{
                  data: {
                  id: 'CAGL0F00715g',
                  name: 'CAGL0F00715g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F00715g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00715g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00715g'  target='_blank'> Link to GRYC</a>",
                  x : 12.1713905626804,
                  y : 3.45300443442639
                  },
                  position : {
                  'x' : 121.713905626804,
                  'y' : 34.5300443442639
                  },
  },
{
                  data: {
                  id: 'CAGL0F01749g',
                  name: 'CAGL0F01749g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F01749g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative serine hydroxymethyltransferase; protein differentially expressed in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01749g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01749g'  target='_blank'> Link to GRYC</a>",
                  x : 4.43453307113624,
                  y : 4.69625646386874
                  },
                  position : {
                  'x' : 44.3453307113624,
                  'y' : 46.9625646386874
                  },
  },
{
                  data: {
                  id: 'CAGL0F02233g',
                  name: 'CAGL0F02233g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F02233g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have dipeptidase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F02233g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F02233g'  target='_blank'> Link to GRYC</a>",
                  x : -1.41680346550712,
                  y : -1.86186833071019
                  },
                  position : {
                  'x' : -14.1680346550712,
                  'y' : -18.6186833071019
                  },
  },
{
                  data: {
                  id: 'CAGL0F02431g',
                  name: 'CAGL0F02431g',
                  gene: 'ACO2',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F02431g</h2><hr><p><b>Gene name</b> : ACO2</p><p><b>Description</b> : Ortholog(s) have role in mitochondrial translation and cytoplasm, mitochondrion, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F02431g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F02431g'  target='_blank'> Link to GRYC</a>",
                  x : -1.25432088748198,
                  y : -1.52698916325871
                  },
                  position : {
                  'x' : -12.5432088748198,
                  'y' : -15.2698916325871
                  },
  },
{
                  data: {
                  id: 'CAGL0F02563g',
                  name: 'CAGL0F02563g',
                  gene: 'HPT1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F02563g</h2><hr><p><b>Gene name</b> : HPT1</p><p><b>Description</b> : Putative hypoxanthine guanine phosphoribosyl transferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F02563g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F02563g'  target='_blank'> Link to GRYC</a>",
                  x : 1.5169074011135,
                  y : -2.99784947868097
                  },
                  position : {
                  'x' : 15.169074011135,
                  'y' : -29.9784947868097
                  },
  },
{
                  data: {
                  id: 'CAGL0F03927g',
                  name: 'CAGL0F03927g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F03927g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have GMP synthase (glutamine-hydrolyzing) activity and role in GMP biosynthetic process, GMP metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F03927g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F03927g'  target='_blank'> Link to GRYC</a>",
                  x : -0.299355208874782,
                  y : -3.76217799776475
                  },
                  position : {
                  'x' : -2.99355208874782,
                  'y' : -37.6217799776475
                  },
  },
{
                  data: {
                  id: 'CAGL0F04411g',
                  name: 'CAGL0F04411g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F04411g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity, role in mitochondrial translation and mitochondrial large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04411g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04411g'  target='_blank'> Link to GRYC</a>",
                  x : 0.787612112639459,
                  y : 5.7657045318562
                  },
                  position : {
                  'x' : 7.87612112639459,
                  'y' : 57.657045318562
                  },
  },
{
                  data: {
                  id: 'CAGL0F04917g',
                  name: 'CAGL0F04917g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F04917g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative regulatory subunit for protein phosphatase; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04917g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04917g'  target='_blank'> Link to GRYC</a>",
                  x : 3.0698244702637,
                  y : -3.63902086579023
                  },
                  position : {
                  'x' : 30.698244702637,
                  'y' : -36.3902086579023
                  },
  },
{
                  data: {
                  id: 'CAGL0F06501g',
                  name: 'CAGL0F06501g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F06501g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have acetyl-CoA:L-glutamate N-acetyltransferase activity, glutamate N-acetyltransferase activity, role in ornithine biosynthetic process and mitochondrial matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F06501g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F06501g'  target='_blank'> Link to GRYC</a>",
                  x : 2.60832253088341,
                  y : 5.24890801682878
                  },
                  position : {
                  'x' : 26.0832253088341,
                  'y' : 52.4890801682878
                  },
  },
{
                  data: {
                  id: 'CAGL0F08261g',
                  name: 'CAGL0F08261g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F08261g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have high molecular weight kininogen binding, phosphopyruvate hydratase activity, protein-glutamine gamma-glutamyltransferase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F08261g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F08261g'  target='_blank'> Link to GRYC</a>",
                  x : 13.6991864430328,
                  y : 4.30462271767713
                  },
                  position : {
                  'x' : 136.991864430328,
                  'y' : 43.0462271767713
                  },
  },
{
                  data: {
                  id: 'CAGL0G01826g',
                  name: 'CAGL0G01826g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G01826g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ribosomal large subunit assembly and cytosolic large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G01826g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G01826g'  target='_blank'> Link to GRYC</a>",
                  x : 0.286860481380393,
                  y : -2.88880249883634
                  },
                  position : {
                  'x' : 2.86860481380393,
                  'y' : -28.8880249883634
                  },
  },
{
                  data: {
                  id: 'CAGL0G02563g',
                  name: 'CAGL0G02563g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G02563g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted thiol-dependent ubiquitinyl hydrolase activity and role in protein deubiquitination, ubiquitin-dependent protein catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G02563g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G02563g'  target='_blank'> Link to GRYC</a>",
                  x : 10.9673406698721,
                  y : 3.34809750570573
                  },
                  position : {
                  'x' : 109.673406698721,
                  'y' : 33.4809750570573
                  },
  },
{
                  data: {
                  id: 'CAGL0G02937g',
                  name: 'CAGL0G02937g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G02937g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have pyruvate decarboxylase activity and role in L-phenylalanine catabolic process, aromatic amino acid family catabolic process to alcohol via Ehrlich pathway, ethanol metabolic process, tryptophan catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G02937g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G02937g'  target='_blank'> Link to GRYC</a>",
                  x : 12.4727353651602,
                  y : 0.665022086228389
                  },
                  position : {
                  'x' : 124.727353651602,
                  'y' : 6.65022086228389
                  },
  },
{
                  data: {
                  id: 'CAGL0G03575g',
                  name: 'CAGL0G03575g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G03575g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted structural constituent of ribosome activity, role in translation and ribosome localization; evidence for a extended second exon by 2 amino acids</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G03575g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G03575g'  target='_blank'> Link to GRYC</a>",
                  x : 0.691245464093407,
                  y : -3.89158291571208
                  },
                  position : {
                  'x' : 6.91245464093407,
                  'y' : -38.9158291571208
                  },
  },
{
                  data: {
                  id: 'CAGL0G03883g',
                  name: 'CAGL0G03883g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G03883g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ADP binding, ATP binding, ATPase activity, ATPase activity, coupled, chaperone binding, misfolded protein binding, unfolded protein binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G03883g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G03883g'  target='_blank'> Link to GRYC</a>",
                  x : 6.46156069049023,
                  y : 7.37724963997699
                  },
                  position : {
                  'x' : 64.6156069049023,
                  'y' : 73.7724963997699
                  },
  },
{
                  data: {
                  id: 'CAGL0G05874g',
                  name: 'CAGL0G05874g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G05874g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-directed 5'-3' RNA polymerase activity, RNA polymerase I activity, RNA polymerase II activity, RNA polymerase III activity, RNA-directed 5'-3' RNA polymerase activity, zinc ion binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G05874g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G05874g'  target='_blank'> Link to GRYC</a>",
                  x : -0.0597844939153265,
                  y : -4.27959533367644
                  },
                  position : {
                  'x' : -0.597844939153265,
                  'y' : -42.7959533367644
                  },
  },
{
                  data: {
                  id: 'CAGL0G06248g',
                  name: 'CAGL0G06248g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G06248g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in maturation of 5.8S rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA), maturation of LSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA and LSU-rRNA), more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06248g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06248g'  target='_blank'> Link to GRYC</a>",
                  x : 0.315747222875793,
                  y : -2.35979531537937
                  },
                  position : {
                  'x' : 3.15747222875793,
                  'y' : -23.5979531537937
                  },
  },
{
                  data: {
                  id: 'CAGL0G06490g',
                  name: 'CAGL0G06490g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G06490g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ribosome biogenesis and small-subunit processome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06490g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06490g'  target='_blank'> Link to GRYC</a>",
                  x : -0.424305034727735,
                  y : -3.31360208523365
                  },
                  position : {
                  'x' : -4.24305034727735,
                  'y' : -33.1360208523365
                  },
  },
{
                  data: {
                  id: 'CAGL0G06732g',
                  name: 'CAGL0G06732g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G06732g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 2-isopropylmalate synthase activity, role in leucine biosynthetic process and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06732g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06732g'  target='_blank'> Link to GRYC</a>",
                  x : 0.32783542738404,
                  y : 7.88002016483088
                  },
                  position : {
                  'x' : 3.2783542738404,
                  'y' : 78.8002016483088
                  },
  },
{
                  data: {
                  id: 'CAGL0G07106g',
                  name: 'CAGL0G07106g',
                  gene: 'APT1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G07106g</h2><hr><p><b>Gene name</b> : APT1</p><p><b>Description</b> : Putative adenine phosphoribosyltransferase; protein abundance decreased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G07106g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G07106g'  target='_blank'> Link to GRYC</a>",
                  x : -1.2111836734094,
                  y : -3.72811950084451
                  },
                  position : {
                  'x' : -12.111836734094,
                  'y' : -37.2811950084451
                  },
  },
{
                  data: {
                  id: 'CAGL0G07821g',
                  name: 'CAGL0G07821g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G07821g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glutaminyl-tRNA synthase (glutamine-hydrolyzing) activity, role in glutaminyl-tRNAGln biosynthesis via transamidation and glutamyl-tRNA(Gln) amidotransferase complex, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G07821g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G07821g'  target='_blank'> Link to GRYC</a>",
                  x : 2.91021884007955,
                  y : 6.39134497102101
                  },
                  position : {
                  'x' : 29.1021884007955,
                  'y' : 63.9134497102101
                  },
  },
{
                  data: {
                  id: 'CAGL0G08734g',
                  name: 'CAGL0G08734g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G08734g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted rRNA binding, structural constituent of ribosome activity, role in translation and ribosome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G08734g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G08734g'  target='_blank'> Link to GRYC</a>",
                  x : -0.103366545092174,
                  y : -2.67131376689542
                  },
                  position : {
                  'x' : -1.03366545092174,
                  'y' : -26.7131376689542
                  },
  },
{
                  data: {
                  id: 'CAGL0G09064g',
                  name: 'CAGL0G09064g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G09064g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in glycerol biosynthetic process and cytosol, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G09064g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G09064g'  target='_blank'> Link to GRYC</a>",
                  x : 11.7517224364005,
                  y : -5.37524480756148
                  },
                  position : {
                  'x' : 117.517224364005,
                  'y' : -53.7524480756148
                  },
  },
{
                  data: {
                  id: 'CAGL0G09130g',
                  name: 'CAGL0G09130g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G09130g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in maturation of LSU-rRNA, ribosomal large subunit biogenesis and cytoplasm, cytosolic large ribosomal subunit, nucleolus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G09130g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G09130g'  target='_blank'> Link to GRYC</a>",
                  x : -0.827899642290749,
                  y : -3.57221344120295
                  },
                  position : {
                  'x' : -8.27899642290749,
                  'y' : -35.7221344120295
                  },
  },
{
                  data: {
                  id: 'CAGL0G09691g',
                  name: 'CAGL0G09691g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G09691g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have O-phospho-L-serine:2-oxoglutarate aminotransferase activity, role in L-serine biosynthetic process, purine nucleobase biosynthetic process, serine family amino acid biosynthetic process and intracellular localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G09691g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G09691g'  target='_blank'> Link to GRYC</a>",
                  x : 4.658666273398,
                  y : 5.81865111302414
                  },
                  position : {
                  'x' : 46.58666273398,
                  'y' : 58.1865111302414
                  },
  },
{
                  data: {
                  id: 'CAGL0H00418g',
                  name: 'CAGL0H00418g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H00418g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00418g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00418g'  target='_blank'> Link to GRYC</a>",
                  x : 5.49186188399972,
                  y : 7.77130139027032
                  },
                  position : {
                  'x' : 54.9186188399972,
                  'y' : 77.7130139027032
                  },
  },
{
                  data: {
                  id: 'CAGL0H00682g',
                  name: 'CAGL0H00682g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H00682g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted mannosyl-oligosaccharide glucosidase activity and role in oligosaccharide metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00682g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00682g'  target='_blank'> Link to GRYC</a>",
                  x : 6.48753768213292,
                  y : 6.7846135385666
                  },
                  position : {
                  'x' : 64.8753768213292,
                  'y' : 67.846135385666
                  },
  },
{
                  data: {
                  id: 'CAGL0H00704g',
                  name: 'CAGL0H00704g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H00704g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in autophagosome assembly, autophagy of mitochondrion, macroautophagy, protein localization by the Cvt pathway</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00704g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00704g'  target='_blank'> Link to GRYC</a>",
                  x : 8.18617427672552,
                  y : 5.23410801978756
                  },
                  position : {
                  'x' : 81.8617427672552,
                  'y' : 52.3410801978756
                  },
  },
{
                  data: {
                  id: 'CAGL0H02101g',
                  name: 'CAGL0H02101g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H02101g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in RNA metabolic process and fungal biofilm matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02101g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02101g'  target='_blank'> Link to GRYC</a>",
                  x : 6.14701744018764,
                  y : 14.0522914028853
                  },
                  position : {
                  'x' : 61.4701744018764,
                  'y' : 140.522914028853
                  },
  },
{
                  data: {
                  id: 'CAGL0H02387g',
                  name: 'CAGL0H02387g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H02387g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative trehalose-6-phosphate synthase/phosphatase subunit; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02387g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02387g'  target='_blank'> Link to GRYC</a>",
                  x : 8.24006679743115,
                  y : 6.04628409582742
                  },
                  position : {
                  'x' : 82.4006679743115,
                  'y' : 60.4628409582742
                  },
  },
{
                  data: {
                  id: 'CAGL0H02585g',
                  name: 'CAGL0H02585g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H02585g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glutamate decarboxylase activity and role in cellular response to oxidative stress, glutamate catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02585g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02585g'  target='_blank'> Link to GRYC</a>",
                  x : 8.74721848504527,
                  y : 5.15958518593654
                  },
                  position : {
                  'x' : 87.4721848504527,
                  'y' : 51.5958518593654
                  },
  },
{
                  data: {
                  id: 'CAGL0H03993g',
                  name: 'CAGL0H03993g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0H03993g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have citrate (Si)-synthase activity, role in acetyl-CoA catabolic process, citrate metabolic process, tricarboxylic acid cycle and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H03993g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H03993g'  target='_blank'> Link to GRYC</a>",
                  x : -0.553649093266319,
                  y : 1.43349770626286
                  },
                  position : {
                  'x' : -5.53649093266319,
                  'y' : 14.3349770626286
                  },
  },
{
                  data: {
                  id: 'CAGL0H04081g',
                  name: 'CAGL0H04081g',
                  gene: 'ERG13',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H04081g</h2><hr><p><b>Gene name</b> : ERG13</p><p><b>Description</b> : 3-hydroxy-3-methylglutaryl coenzyme A synthase; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H04081g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H04081g'  target='_blank'> Link to GRYC</a>",
                  x : 0.601548341255023,
                  y : -5.47428827632893
                  },
                  position : {
                  'x' : 6.01548341255023,
                  'y' : -54.7428827632893
                  },
  },
{
                  data: {
                  id: 'CAGL0H04851g',
                  name: 'CAGL0H04851g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H04851g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphatase activity, protein serine/threonine phosphatase activity and role in cellular protein localization, cellular sodium ion homeostasis, protein dephosphorylation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H04851g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H04851g'  target='_blank'> Link to GRYC</a>",
                  x : 7.71284798770231,
                  y : 6.25180654117178
                  },
                  position : {
                  'x' : 77.1284798770231,
                  'y' : 62.5180654117178
                  },
  },
{
                  data: {
                  id: 'CAGL0H05445g',
                  name: 'CAGL0H05445g',
                  gene: 'PGI1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H05445g</h2><hr><p><b>Gene name</b> : PGI1</p><p><b>Description</b> : Glucose-6-phosphate isomerase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H05445g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H05445g'  target='_blank'> Link to GRYC</a>",
                  x : 7.95698162147901,
                  y : 6.97263087238477
                  },
                  position : {
                  'x' : 79.5698162147901,
                  'y' : 69.7263087238477
                  },
  },
{
                  data: {
                  id: 'CAGL0H05643g',
                  name: 'CAGL0H05643g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H05643g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity and role in maturation of SSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA)</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H05643g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H05643g'  target='_blank'> Link to GRYC</a>",
                  x : -0.899858730017608,
                  y : -3.12201269213806
                  },
                  position : {
                  'x' : -8.99858730017608,
                  'y' : -31.2201269213806
                  },
  },
{
                  data: {
                  id: 'CAGL0H06545g',
                  name: 'CAGL0H06545g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H06545g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in autophagy of mitochondrion, mitochondria-nucleus signaling pathway and integral component of mitochondrial outer membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H06545g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H06545g'  target='_blank'> Link to GRYC</a>",
                  x : 13.1155603516766,
                  y : -1.14525649481875
                  },
                  position : {
                  'x' : 131.155603516766,
                  'y' : -11.4525649481875
                  },
  },
{
                  data: {
                  id: 'CAGL0H07051g',
                  name: 'CAGL0H07051g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H07051g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have asparaginase activity and role in asparagine catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H07051g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H07051g'  target='_blank'> Link to GRYC</a>",
                  x : -0.283153217412778,
                  y : -3.97498624711248
                  },
                  position : {
                  'x' : -2.83153217412778,
                  'y' : -39.7498624711248
                  },
  },
{
                  data: {
                  id: 'CAGL0H07887g',
                  name: 'CAGL0H07887g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H07887g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphoribosylamine-glycine ligase activity, phosphoribosylformylglycinamidine cyclo-ligase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H07887g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H07887g'  target='_blank'> Link to GRYC</a>",
                  x : 3.77184263908732,
                  y : 5.77585453853357
                  },
                  position : {
                  'x' : 37.7184263908732,
                  'y' : 57.7585453853358
                  },
  },
{
                  data: {
                  id: 'CAGL0H08261g',
                  name: 'CAGL0H08261g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H08261g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in autophagy of mitochondrion</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H08261g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H08261g'  target='_blank'> Link to GRYC</a>",
                  x : 5.64998516355973,
                  y : 8.06676319140725
                  },
                  position : {
                  'x' : 56.4998516355973,
                  'y' : 80.6676319140725
                  },
  },
{
                  data: {
                  id: 'CAGL0H09064g',
                  name: 'CAGL0H09064g',
                  gene: 'FUR1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H09064g</h2><hr><p><b>Gene name</b> : FUR1</p><p><b>Description</b> : Putative uracil phosphoribosyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H09064g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H09064g'  target='_blank'> Link to GRYC</a>",
                  x : -2.16677588331844,
                  y : 0.912363688032847
                  },
                  position : {
                  'x' : -21.6677588331844,
                  'y' : 9.12363688032847
                  },
  },
{
                  data: {
                  id: 'CAGL0H09460g',
                  name: 'CAGL0H09460g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H09460g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have long-chain fatty acid-CoA ligase activity, medium-chain fatty acid-CoA ligase activity, very long-chain fatty acid-CoA ligase activity and role in fatty acid metabolic process, long-chain fatty acid metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H09460g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H09460g'  target='_blank'> Link to GRYC</a>",
                  x : 3.51456424387899,
                  y : 8.52671430038691
                  },
                  position : {
                  'x' : 35.1456424387898,
                  'y' : 85.2671430038691
                  },
  },
{
                  data: {
                  id: 'CAGL0H10142g',
                  name: 'CAGL0H10142g',
                  gene: 'ARO3',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H10142g</h2><hr><p><b>Gene name</b> : ARO3</p><p><b>Description</b> : Putative 2-dehydro-3-deoxyphosphoheptonate aldolase; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H10142g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H10142g'  target='_blank'> Link to GRYC</a>",
                  x : -1.25267820540526,
                  y : 1.11577394706032
                  },
                  position : {
                  'x' : -12.5267820540526,
                  'y' : 11.1577394706032
                  },
  },
{
                  data: {
                  id: 'CAGL0I00528g',
                  name: 'CAGL0I00528g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I00528g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have mRNA binding, pre-mRNA 5'-splice site binding activity and role in mRNA 5'-splice site recognition, mRNA splicing, via spliceosome, positive regulation of RNA binding</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I00528g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I00528g'  target='_blank'> Link to GRYC</a>",
                  x : 7.03811255284332,
                  y : 6.82563604430062
                  },
                  position : {
                  'x' : 70.3811255284332,
                  'y' : 68.2563604430062
                  },
  },
{
                  data: {
                  id: 'CAGL0I00792g',
                  name: 'CAGL0I00792g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I00792g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in maturation of SSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA)</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I00792g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I00792g'  target='_blank'> Link to GRYC</a>",
                  x : 0.421095497893955,
                  y : -3.95104093965606
                  },
                  position : {
                  'x' : 4.21095497893955,
                  'y' : -39.5104093965606
                  },
  },
{
                  data: {
                  id: 'CAGL0I01298g',
                  name: 'CAGL0I01298g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I01298g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have aminopeptidase activity, metalloaminopeptidase activity, role in cellular response to drug, chaperone-mediated protein folding, proteolysis and extracellular region, fungal-type vacuole lumen localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01298g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01298g'  target='_blank'> Link to GRYC</a>",
                  x : -1.08430056943789,
                  y : -1.20895781403826
                  },
                  position : {
                  'x' : -10.8430056943789,
                  'y' : -12.0895781403826
                  },
  },
{
                  data: {
                  id: 'CAGL0I03036g',
                  name: 'CAGL0I03036g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I03036g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity and mitochondrial large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I03036g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I03036g'  target='_blank'> Link to GRYC</a>",
                  x : 0.892960983425028,
                  y : 5.13768606588803
                  },
                  position : {
                  'x' : 8.92960983425028,
                  'y' : 51.3768606588803
                  },
  },
{
                  data: {
                  id: 'CAGL0I03080g',
                  name: 'CAGL0I03080g',
                  gene: 'URA3',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I03080g</h2><hr><p><b>Gene name</b> : URA3</p><p><b>Description</b> : Orotidine 5'-phosphate decarboxylase, catalyzes a step in pyrimidine biosynthesis; protein abundance decreased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I03080g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I03080g'  target='_blank'> Link to GRYC</a>",
                  x : 0.931989395438453,
                  y : 7.29197885619802
                  },
                  position : {
                  'x' : 9.31989395438453,
                  'y' : 72.9197885619802
                  },
  },
{
                  data: {
                  id: 'CAGL0I03234g',
                  name: 'CAGL0I03234g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I03234g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA binding, U3 snoRNA binding, U4 snRNA binding activity and role in mRNA splicing, via spliceosome, maturation of SSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA)</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I03234g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I03234g'  target='_blank'> Link to GRYC</a>",
                  x : 0.89880966124159,
                  y : -2.97548425329249
                  },
                  position : {
                  'x' : 8.98809661241591,
                  'y' : -29.7548425329249
                  },
  },
{
                  data: {
                  id: 'CAGL0I04048g',
                  name: 'CAGL0I04048g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I04048g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have fructose 1,6-bisphosphate 1-phosphatase activity, role in carbon utilization, cellular response to glucose starvation and intracellular localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04048g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04048g'  target='_blank'> Link to GRYC</a>",
                  x : 5.76839167161775,
                  y : 7.08849288078765
                  },
                  position : {
                  'x' : 57.6839167161775,
                  'y' : 70.8849288078765
                  },
  },
{
                  data: {
                  id: 'CAGL0I04444g',
                  name: 'CAGL0I04444g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I04444g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphoribosylaminoimidazolesuccinocarboxamide synthase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04444g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04444g'  target='_blank'> Link to GRYC</a>",
                  x : 3.93093102610062,
                  y : 5.08244248198173
                  },
                  position : {
                  'x' : 39.3093102610062,
                  'y' : 50.8244248198173
                  },
  },
{
                  data: {
                  id: 'CAGL0I04752g',
                  name: 'CAGL0I04752g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I04752g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphatidate cytidylyltransferase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04752g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04752g'  target='_blank'> Link to GRYC</a>",
                  x : -2.27575662771864,
                  y : -2.97112391835257
                  },
                  position : {
                  'x' : -22.7575662771864,
                  'y' : -29.7112391835257
                  },
  },
{
                  data: {
                  id: 'CAGL0I04972g',
                  name: 'CAGL0I04972g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I04972g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in telomere maintenance via recombination and Ino80 complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04972g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04972g'  target='_blank'> Link to GRYC</a>",
                  x : 7.27053064126537,
                  y : 7.76232494156701
                  },
                  position : {
                  'x' : 72.7053064126537,
                  'y' : 77.6232494156701
                  },
  },
{
                  data: {
                  id: 'CAGL0I06006g',
                  name: 'CAGL0I06006g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I06006g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase I activity, role in nucleolar large rRNA transcription by RNA polymerase I, transcription elongation from RNA polymerase I promoter and RNA polymerase I complex, nucleolus, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I06006g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I06006g'  target='_blank'> Link to GRYC</a>",
                  x : 1.03867255976072,
                  y : -3.4329891701794
                  },
                  position : {
                  'x' : 10.3867255976072,
                  'y' : -34.329891701794
                  },
  },
{
                  data: {
                  id: 'CAGL0I06050g',
                  name: 'CAGL0I06050g',
                  gene: 'INO1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I06050g</h2><hr><p><b>Gene name</b> : INO1</p><p><b>Description</b> : Putative inositol 1-phosphate synthase; regulated by the transcriptional activators Ino2p and Ino4p; protein differentially expressed in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I06050g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I06050g'  target='_blank'> Link to GRYC</a>",
                  x : 2.84769544901271,
                  y : 12.5496417694958
                  },
                  position : {
                  'x' : 28.4769544901271,
                  'y' : 125.496417694958
                  },
  },
{
                  data: {
                  id: 'CAGL0I07887g',
                  name: 'CAGL0I07887g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I07887g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have protein binding, bridging activity and role in cellular protein-containing complex localization, ubiquitin-dependent ERAD pathway, vesicle organization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I07887g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I07887g'  target='_blank'> Link to GRYC</a>",
                  x : 6.24763922434622,
                  y : 6.83198608699424
                  },
                  position : {
                  'x' : 62.4763922434622,
                  'y' : 68.3198608699424
                  },
  },
{
                  data: {
                  id: 'CAGL0I08305g',
                  name: 'CAGL0I08305g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I08305g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have carnitine O-acetyltransferase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I08305g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I08305g'  target='_blank'> Link to GRYC</a>",
                  x : 5.6040049363656,
                  y : 6.70008438823648
                  },
                  position : {
                  'x' : 56.040049363656,
                  'y' : 67.0008438823648
                  },
  },
{
                  data: {
                  id: 'CAGL0I08987g',
                  name: 'CAGL0I08987g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I08987g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted argininosuccinate lyase activity and role in arginine biosynthetic process via ornithine</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I08987g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I08987g'  target='_blank'> Link to GRYC</a>",
                  x : -0.853610801213392,
                  y : -1.0306230807037
                  },
                  position : {
                  'x' : -8.53610801213392,
                  'y' : -10.306230807037
                  },
  },
{
                  data: {
                  id: 'CAGL0I09009g',
                  name: 'CAGL0I09009g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I09009g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have histidinol-phosphatase activity and role in histidine biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09009g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09009g'  target='_blank'> Link to GRYC</a>",
                  x : 1.63400137701108,
                  y : 6.15137268657669
                  },
                  position : {
                  'x' : 16.3400137701108,
                  'y' : 61.5137268657669
                  },
  },
{
                  data: {
                  id: 'CAGL0I09284g',
                  name: 'CAGL0I09284g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I09284g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycine hydroxymethyltransferase activity, role in one-carbon metabolic process and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09284g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09284g'  target='_blank'> Link to GRYC</a>",
                  x : 2.82388373516393,
                  y : 6.95375097889246
                  },
                  position : {
                  'x' : 28.2388373516393,
                  'y' : 69.5375097889246
                  },
  },
{
                  data: {
                  id: 'CAGL0I09790g',
                  name: 'CAGL0I09790g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I09790g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in endonucleolytic cleavage in 5'-ETS of tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA and LSU-rRNA), more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09790g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09790g'  target='_blank'> Link to GRYC</a>",
                  x : -0.013422088526011,
                  y : -2.3887188594608
                  },
                  position : {
                  'x' : -0.13422088526011,
                  'y' : -23.887188594608
                  },
  },
{
                  data: {
                  id: 'CAGL0I10406g',
                  name: 'CAGL0I10406g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I10406g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in establishment of cell polarity, proteasomal ubiquitin-independent protein catabolic process, proteasome core complex assembly, proteasome-mediated ubiquitin-dependent protein catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10406g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10406g'  target='_blank'> Link to GRYC</a>",
                  x : 2.13329488161526,
                  y : 6.05296879911846
                  },
                  position : {
                  'x' : 21.3329488161526,
                  'y' : 60.5296879911846
                  },
  },
{
                  data: {
                  id: 'CAGL0I10670g',
                  name: 'CAGL0I10670g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I10670g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10670g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10670g'  target='_blank'> Link to GRYC</a>",
                  x : 0.892744857132321,
                  y : -3.2680356170407
                  },
                  position : {
                  'x' : 8.92744857132321,
                  'y' : -32.680356170407
                  },
  },
{
                  data: {
                  id: 'CAGL0I10791g',
                  name: 'CAGL0I10791g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I10791g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ornithine carbamoyltransferase activity, role in arginine biosynthetic process, arginine biosynthetic process via ornithine, asexual sporulation and intracellular, mitochondrial matrix, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10791g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10791g'  target='_blank'> Link to GRYC</a>",
                  x : -0.558419325775762,
                  y : -1.95834475318923
                  },
                  position : {
                  'x' : -5.58419325775762,
                  'y' : -19.5834475318923
                  },
  },
{
                  data: {
                  id: 'CAGL0J00473g',
                  name: 'CAGL0J00473g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J00473g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have large ribosomal subunit rRNA binding, proteasome binding, protein binding, bridging, rRNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J00473g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J00473g'  target='_blank'> Link to GRYC</a>",
                  x : -1.06291032975785,
                  y : -3.0022703232848
                  },
                  position : {
                  'x' : -10.6291032975785,
                  'y' : -30.022703232848
                  },
  },
{
                  data: {
                  id: 'CAGL0J01045g',
                  name: 'CAGL0J01045g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J01045g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA helicase activity, RNA-dependent ATPase activity, U3 snoRNA binding, box C/D snoRNA binding activity, role in rRNA processing and small-subunit processome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J01045g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J01045g'  target='_blank'> Link to GRYC</a>",
                  x : 3.09764321162919,
                  y : 3.34432575916194
                  },
                  position : {
                  'x' : 30.9764321162919,
                  'y' : 33.4432575916194
                  },
  },
{
                  data: {
                  id: 'CAGL0J01848g',
                  name: 'CAGL0J01848g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J01848g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase I activity, role in nucleolar large rRNA transcription by RNA polymerase I, transcription by RNA polymerase I and RNA polymerase I complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J01848g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J01848g'  target='_blank'> Link to GRYC</a>",
                  x : 0.147220099553753,
                  y : -3.89223406758734
                  },
                  position : {
                  'x' : 1.47220099553753,
                  'y' : -38.9223406758734
                  },
  },
{
                  data: {
                  id: 'CAGL0J03234g',
                  name: 'CAGL0J03234g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J03234g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in maturation of SSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA)</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03234g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03234g'  target='_blank'> Link to GRYC</a>",
                  x : -0.0578833837664554,
                  y : -3.75965412385876
                  },
                  position : {
                  'x' : -0.578833837664554,
                  'y' : -37.5965412385876
                  },
  },
{
                  data: {
                  id: 'CAGL0J03762g',
                  name: 'CAGL0J03762g',
                  gene: 'MET7',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J03762g</h2><hr><p><b>Gene name</b> : MET7</p><p><b>Description</b> : Ortholog(s) have tetrahydrofolylpolyglutamate synthase activity, role in one-carbon metabolic process and cytoplasm, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03762g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03762g'  target='_blank'> Link to GRYC</a>",
                  x : 3.39225472760624,
                  y : 7.80834656136922
                  },
                  position : {
                  'x' : 33.9225472760624,
                  'y' : 78.0834656136922
                  },
  },
{
                  data: {
                  id: 'CAGL0J03916g',
                  name: 'CAGL0J03916g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0J03916g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have lipid binding, oxysterol binding, sterol transfer activity and role in endocytosis, exocytosis, maintenance of cell polarity, piecemeal microautophagy of the nucleus, sterol transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03916g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03916g'  target='_blank'> Link to GRYC</a>",
                  x : 13.7157670026605,
                  y : 5.35518797718451
                  },
                  position : {
                  'x' : 137.157670026605,
                  'y' : 53.5518797718451
                  },
  },
{
                  data: {
                  id: 'CAGL0J04070g',
                  name: 'CAGL0J04070g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J04070g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase I activity, RNA polymerase II activity, RNA polymerase III activity, RNA-directed 5'-3' RNA polymerase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04070g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04070g'  target='_blank'> Link to GRYC</a>",
                  x : 0.63979218380327,
                  y : -3.65786838621454
                  },
                  position : {
                  'x' : 6.39792183803269,
                  'y' : -36.5786838621454
                  },
  },
{
                  data: {
                  id: 'CAGL0J04950g',
                  name: 'CAGL0J04950g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J04950g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in mitotic recombination and cellular bud localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04950g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04950g'  target='_blank'> Link to GRYC</a>",
                  x : -2.72934991100181,
                  y : -6.89771370552573
                  },
                  position : {
                  'x' : -27.2934991100181,
                  'y' : -68.9771370552573
                  },
  },
{
                  data: {
                  id: 'CAGL0J05082g',
                  name: 'CAGL0J05082g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J05082g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted ATP binding, protein kinase activity, protein tyrosine kinase activity and role in protein phosphorylation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J05082g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J05082g'  target='_blank'> Link to GRYC</a>",
                  x : 9.36656245991196,
                  y : 4.53287328018705
                  },
                  position : {
                  'x' : 93.6656245991196,
                  'y' : 45.3287328018705
                  },
  },
{
                  data: {
                  id: 'CAGL0J05258g',
                  name: 'CAGL0J05258g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J05258g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity and mitochondrial large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J05258g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J05258g'  target='_blank'> Link to GRYC</a>",
                  x : 1.65595404214594,
                  y : 6.90580180502906
                  },
                  position : {
                  'x' : 16.5595404214594,
                  'y' : 69.0580180502906
                  },
  },
{
                  data: {
                  id: 'CAGL0J05478g',
                  name: 'CAGL0J05478g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J05478g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity and mitochondrial small ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J05478g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J05478g'  target='_blank'> Link to GRYC</a>",
                  x : 1.2440198574879,
                  y : 5.60172023534729
                  },
                  position : {
                  'x' : 12.440198574879,
                  'y' : 56.0172023534729
                  },
  },
{
                  data: {
                  id: 'CAGL0J05984g',
                  name: 'CAGL0J05984g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J05984g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have adenine deaminase activity and role in adenine catabolic process, cell-abiotic substrate adhesion, hypoxanthine salvage, purine-containing compound salvage, regulation of G2/M transition of mitotic cell cycle</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J05984g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J05984g'  target='_blank'> Link to GRYC</a>",
                  x : 0.00981884894310112,
                  y : -1.5219247029531
                  },
                  position : {
                  'x' : 0.0981884894310112,
                  'y' : -15.219247029531
                  },
  },
{
                  data: {
                  id: 'CAGL0J07766g',
                  name: 'CAGL0J07766g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J07766g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase I activity and role in nucleolar large rRNA transcription by RNA polymerase I, transcription by RNA polymerase I, transcription elongation from RNA polymerase I promoter</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J07766g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J07766g'  target='_blank'> Link to GRYC</a>",
                  x : 0.0331469013148866,
                  y : -3.14711455254725
                  },
                  position : {
                  'x' : 0.331469013148866,
                  'y' : -31.4711455254725
                  },
  },
{
                  data: {
                  id: 'CAGL0J08547g',
                  name: 'CAGL0J08547g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J08547g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J08547g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J08547g'  target='_blank'> Link to GRYC</a>",
                  x : 4.67346783919166,
                  y : 6.71567757201127
                  },
                  position : {
                  'x' : 46.7346783919166,
                  'y' : 67.1567757201127
                  },
  },
{
                  data: {
                  id: 'CAGL0J08679g',
                  name: 'CAGL0J08679g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J08679g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cytoplasmic translation and cytoplasm localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J08679g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J08679g'  target='_blank'> Link to GRYC</a>",
                  x : -0.341545562113763,
                  y : -2.62500198813448
                  },
                  position : {
                  'x' : -3.41545562113763,
                  'y' : -26.2500198813448
                  },
  },
{
                  data: {
                  id: 'CAGL0J09240g',
                  name: 'CAGL0J09240g',
                  gene: 'LYS21',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0J09240g</h2><hr><p><b>Gene name</b> : LYS21</p><p><b>Description</b> : Homocitrate synthase; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09240g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09240g'  target='_blank'> Link to GRYC</a>",
                  x : -0.982522528733484,
                  y : 2.86735199595859
                  },
                  position : {
                  'x' : -9.82522528733485,
                  'y' : 28.6735199595859
                  },
  },
{
                  data: {
                  id: 'CAGL0J09614g',
                  name: 'CAGL0J09614g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J09614g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have box H/ACA snoRNA binding activity, role in cleavage involved in rRNA processing, rRNA pseudouridine synthesis, snRNA pseudouridine synthesis and box H/ACA snoRNP complex, nucleolus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09614g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09614g'  target='_blank'> Link to GRYC</a>",
                  x : 0.835620157369329,
                  y : -1.70748230637711
                  },
                  position : {
                  'x' : 8.35620157369329,
                  'y' : -17.0748230637711
                  },
  },
{
                  data: {
                  id: 'CAGL0J09724g',
                  name: 'CAGL0J09724g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J09724g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity and mitochondrial large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09724g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09724g'  target='_blank'> Link to GRYC</a>",
                  x : 0.337832498587724,
                  y : 4.69031717478537
                  },
                  position : {
                  'x' : 3.37832498587724,
                  'y' : 46.9031717478537
                  },
  },
{
                  data: {
                  id: 'CAGL0J10010g',
                  name: 'CAGL0J10010g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J10010g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have tRNA (adenine-N1-)-methyltransferase activity, role in tRNA methylation and nucleus, tRNA (m1A) methyltransferase complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J10010g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J10010g'  target='_blank'> Link to GRYC</a>",
                  x : -0.33347703705014,
                  y : -2.28789648424886
                  },
                  position : {
                  'x' : -3.3347703705014,
                  'y' : -22.8789648424886
                  },
  },
{
                  data: {
                  id: 'CAGL0J10164g',
                  name: 'CAGL0J10164g',
                  gene: 'RPL16A',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J10164g</h2><hr><p><b>Gene name</b> : RPL16A</p><p><b>Description</b> : Putative ribosomal protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J10164g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J10164g'  target='_blank'> Link to GRYC</a>",
                  x : -0.476941084358409,
                  y : -3.58605240976025
                  },
                  position : {
                  'x' : -4.76941084358409,
                  'y' : -35.8605240976025
                  },
  },
{
                  data: {
                  id: 'CAGL0J10824g',
                  name: 'CAGL0J10824g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J10824g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have lanosterol synthase activity, role in ergosterol biosynthetic process and lipid droplet localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J10824g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J10824g'  target='_blank'> Link to GRYC</a>",
                  x : 0.994272999226942,
                  y : -5.57725642201424
                  },
                  position : {
                  'x' : 9.94272999226942,
                  'y' : -55.7725642201424
                  },
  },
{
                  data: {
                  id: 'CAGL0J11858g',
                  name: 'CAGL0J11858g',
                  gene: 'RML2',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J11858g</h2><hr><p><b>Gene name</b> : RML2</p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity, role in mitochondrial translation and mitochondrial large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J11858g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J11858g'  target='_blank'> Link to GRYC</a>",
                  x : 0.0477408119518295,
                  y : 4.6953525044789
                  },
                  position : {
                  'x' : 0.477408119518295,
                  'y' : 46.953525044789
                  },
  },
{
                  data: {
                  id: 'CAGL0K02233g',
                  name: 'CAGL0K02233g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K02233g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in maturation of 5.8S rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA), maturation of LSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA and LSU-rRNA), more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K02233g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K02233g'  target='_blank'> Link to GRYC</a>",
                  x : -0.314820413044637,
                  y : -1.45969517201423
                  },
                  position : {
                  'x' : -3.14820413044637,
                  'y' : -14.5969517201423
                  },
  },
{
                  data: {
                  id: 'CAGL0K04103g',
                  name: 'CAGL0K04103g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K04103g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have dolichyldiphosphatase activity, role in lipid biosynthetic process, protein N-linked glycosylation and integral component of endoplasmic reticulum membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04103g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04103g'  target='_blank'> Link to GRYC</a>",
                  x : -1.65140705792135,
                  y : -5.68171555526055
                  },
                  position : {
                  'x' : -16.5140705792135,
                  'y' : -56.8171555526055
                  },
  },
{
                  data: {
                  id: 'CAGL0K04279g',
                  name: 'CAGL0K04279g',
                  gene: 'SCM4',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K04279g</h2><hr><p><b>Gene name</b> : SCM4</p><p><b>Description</b> : Ortholog of S. cerevisiae : SCM4 and Saccharomyces cerevisiae S288C : YGR049W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04279g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04279g'  target='_blank'> Link to GRYC</a>",
                  x : -6.40818567760205,
                  y : 9.71967467100868
                  },
                  position : {
                  'x' : -64.0818567760205,
                  'y' : 97.1967467100868
                  },
  },
{
                  data: {
                  id: 'CAGL0K04301g',
                  name: 'CAGL0K04301g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K04301g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative mitochondrial Ser/Thr protein kinase; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04301g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04301g'  target='_blank'> Link to GRYC</a>",
                  x : 8.31118244560631,
                  y : 6.26442823055906
                  },
                  position : {
                  'x' : 83.1118244560631,
                  'y' : 62.6442823055906
                  },
  },
{
                  data: {
                  id: 'CAGL0K04499g',
                  name: 'CAGL0K04499g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K04499g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphoribosylformylglycinamidine synthase activity and role in purine nucleotide biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04499g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04499g'  target='_blank'> Link to GRYC</a>",
                  x : 3.24969690493766,
                  y : 4.34989035359114
                  },
                  position : {
                  'x' : 32.4969690493766,
                  'y' : 43.4989035359114
                  },
  },
{
                  data: {
                  id: 'CAGL0K05357g',
                  name: 'CAGL0K05357g',
                  gene: 'GLN1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K05357g</h2><hr><p><b>Gene name</b> : GLN1</p><p><b>Description</b> : Ortholog(s) have glutamate-ammonia ligase activity, role in ammonia assimilation cycle, glutamine biosynthetic process, nitrogen compound metabolic process and nuclear periphery localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K05357g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K05357g'  target='_blank'> Link to GRYC</a>",
                  x : 0.799306318656101,
                  y : 9.76679476706762
                  },
                  position : {
                  'x' : 7.99306318656101,
                  'y' : 97.6679476706762
                  },
  },
{
                  data: {
                  id: 'CAGL0K06567g',
                  name: 'CAGL0K06567g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K06567g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have preribosome, large subunit precursor localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K06567g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K06567g'  target='_blank'> Link to GRYC</a>",
                  x : 0.24373783163619,
                  y : -3.19426774784902
                  },
                  position : {
                  'x' : 2.4373783163619,
                  'y' : -31.9426774784902
                  },
  },
{
                  data: {
                  id: 'CAGL0K08536g',
                  name: 'CAGL0K08536g',
                  gene: 'APE1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K08536g</h2><hr><p><b>Gene name</b> : APE1</p><p><b>Description</b> : Vacuolar aminopeptidase I</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08536g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08536g'  target='_blank'> Link to GRYC</a>",
                  x : 13.3015443327234,
                  y : 3.65980697434448
                  },
                  position : {
                  'x' : 133.015443327234,
                  'y' : 36.5980697434448
                  },
  },
{
                  data: {
                  id: 'CAGL0K10340g',
                  name: 'CAGL0K10340g',
                  gene: 'ADE2',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K10340g</h2><hr><p><b>Gene name</b> : ADE2</p><p><b>Description</b> : Putative phosphoribosylaminoimidazole carboxylase; aminoimidazole ribonucleotide (AIR) carboxylase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10340g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10340g'  target='_blank'> Link to GRYC</a>",
                  x : 4.19106081769577,
                  y : 5.5785902416138
                  },
                  position : {
                  'x' : 41.9106081769577,
                  'y' : 55.785902416138
                  },
  },
{
                  data: {
                  id: 'CAGL0K10428g',
                  name: 'CAGL0K10428g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K10428g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have enzyme inhibitor activity and role in negative regulation of glycogen catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10428g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10428g'  target='_blank'> Link to GRYC</a>",
                  x : 6.80806418252769,
                  y : 7.66698967850666
                  },
                  position : {
                  'x' : 68.0806418252769,
                  'y' : 76.6698967850666
                  },
  },
{
                  data: {
                  id: 'CAGL0K12518g',
                  name: 'CAGL0K12518g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K12518g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have alanine-glyoxylate transaminase activity, role in glycine biosynthetic process, by transamination of glyoxylate and fungal biofilm matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K12518g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K12518g'  target='_blank'> Link to GRYC</a>",
                  x : 4.00067077151568,
                  y : 6.27900508113612
                  },
                  position : {
                  'x' : 40.0067077151568,
                  'y' : 62.7900508113612
                  },
  },
{
                  data: {
                  id: 'CAGL0L00759g',
                  name: 'CAGL0L00759g',
                  gene: 'HIS1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0L00759g</h2><hr><p><b>Gene name</b> : HIS1</p><p><b>Description</b> : ATP phosphoribosyltransferase; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L00759g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L00759g'  target='_blank'> Link to GRYC</a>",
                  x : -1.03074296482109,
                  y : 5.78655666646456
                  },
                  position : {
                  'x' : -10.3074296482109,
                  'y' : 57.8655666646456
                  },
  },
{
                  data: {
                  id: 'CAGL0L00979g',
                  name: 'CAGL0L00979g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L00979g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in endoplasmic reticulum to Golgi vesicle-mediated transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L00979g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L00979g'  target='_blank'> Link to GRYC</a>",
                  x : -0.854415308759113,
                  y : -1.64441641616805
                  },
                  position : {
                  'x' : -8.54415308759113,
                  'y' : -16.4441641616805
                  },
  },
{
                  data: {
                  id: 'CAGL0L02937g',
                  name: 'CAGL0L02937g',
                  gene: 'HIS3',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L02937g</h2><hr><p><b>Gene name</b> : HIS3</p><p><b>Description</b> : Putative imidazoleglycerol-phosphate dehydratase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L02937g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L02937g'  target='_blank'> Link to GRYC</a>",
                  x : -0.364710630559376,
                  y : -0.969197492163142
                  },
                  position : {
                  'x' : -3.64710630559376,
                  'y' : -9.69197492163142
                  },
  },
{
                  data: {
                  id: 'CAGL0L03806g',
                  name: 'CAGL0L03806g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L03806g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have rRNA binding activity and role in actomyosin contractile ring assembly, maturation of LSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA), ribosomal large subunit biogenesis</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03806g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03806g'  target='_blank'> Link to GRYC</a>",
                  x : -0.570635394970521,
                  y : -3.08272242697037
                  },
                  position : {
                  'x' : -5.70635394970521,
                  'y' : -30.8272242697037
                  },
  },
{
                  data: {
                  id: 'CAGL0L03982g',
                  name: 'CAGL0L03982g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L03982g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have malate synthase activity, role in acetate catabolic process, carbon utilization, fatty acid catabolic process, glyoxylate cycle and cytosol, peroxisomal matrix, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03982g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03982g'  target='_blank'> Link to GRYC</a>",
                  x : 2.54093236584487,
                  y : 6.57201908557515
                  },
                  position : {
                  'x' : 25.4093236584487,
                  'y' : 65.7201908557515
                  },
  },
{
                  data: {
                  id: 'CAGL0L04070g',
                  name: 'CAGL0L04070g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L04070g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity and mitochondrial large ribosomal subunit, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L04070g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L04070g'  target='_blank'> Link to GRYC</a>",
                  x : 0.364953274683815,
                  y : 6.27379290700629
                  },
                  position : {
                  'x' : 3.64953274683815,
                  'y' : 62.7379290700629
                  },
  },
{
                  data: {
                  id: 'CAGL0L04664g',
                  name: 'CAGL0L04664g',
                  gene: 'HEM15',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L04664g</h2><hr><p><b>Gene name</b> : HEM15</p><p><b>Description</b> : Ortholog(s) have 2 iron, 2 sulfur cluster binding, ferrochelatase activity, role in heme biosynthetic process and mitochondrial inner membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L04664g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L04664g'  target='_blank'> Link to GRYC</a>",
                  x : -0.878407389081209,
                  y : -0.426426461968379
                  },
                  position : {
                  'x' : -8.78407389081209,
                  'y' : -4.26426461968379
                  },
  },
{
                  data: {
                  id: 'CAGL0L05500g',
                  name: 'CAGL0L05500g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L05500g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ribosomal large subunit biogenesis and cytoplasm, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L05500g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L05500g'  target='_blank'> Link to GRYC</a>",
                  x : -0.393466993684105,
                  y : -4.13948996918965
                  },
                  position : {
                  'x' : -3.93466993684105,
                  'y' : -41.3948996918965
                  },
  },
{
                  data: {
                  id: 'CAGL0L08114g',
                  name: 'CAGL0L08114g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L08114g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted structural constituent of ribosome activity, role in translation and ribosome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L08114g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L08114g'  target='_blank'> Link to GRYC</a>",
                  x : -0.407337637541167,
                  y : -2.74137206387364
                  },
                  position : {
                  'x' : -4.07337637541167,
                  'y' : -27.4137206387364
                  },
  },
{
                  data: {
                  id: 'CAGL0L08118g',
                  name: 'CAGL0L08118g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L08118g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have mRNA binding activity, role in maturation of SSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA), ribosomal small subunit assembly and small-subunit processome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L08118g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L08118g'  target='_blank'> Link to GRYC</a>",
                  x : -0.00685551971272911,
                  y : -3.45604742583195
                  },
                  position : {
                  'x' : -0.0685551971272911,
                  'y' : -34.5604742583195
                  },
  },
{
                  data: {
                  id: 'CAGL0L08184g',
                  name: 'CAGL0L08184g',
                  gene: 'FEN1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L08184g</h2><hr><p><b>Gene name</b> : FEN1</p><p><b>Description</b> : Predicted fatty acid elongase with role in sphingolipid biosynthetic process; mutants show reduced sensitivity to caspofungin and increased sensitivity to micafungin</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L08184g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L08184g'  target='_blank'> Link to GRYC</a>",
                  x : -0.666652606384981,
                  y : -2.51829482499998
                  },
                  position : {
                  'x' : -6.66652606384981,
                  'y' : -25.1829482499998
                  },
  },
{
                  data: {
                  id: 'CAGL0L08426g',
                  name: 'CAGL0L08426g',
                  gene: 'SUE1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L08426g</h2><hr><p><b>Gene name</b> : SUE1</p><p><b>Description</b> : Ortholog(s) have role in protein catabolic process and mitochondrial envelope localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L08426g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L08426g'  target='_blank'> Link to GRYC</a>",
                  x : 8.85701030543191,
                  y : 7.7716841183535
                  },
                  position : {
                  'x' : 88.5701030543191,
                  'y' : 77.716841183535
                  },
  },
{
                  data: {
                  id: 'CAGL0L08756g',
                  name: 'CAGL0L08756g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L08756g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in maturation of SSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA) and nucleus, preribosome, small subunit precursor localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L08756g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L08756g'  target='_blank'> Link to GRYC</a>",
                  x : -0.167844778243635,
                  y : -3.1076745319669
                  },
                  position : {
                  'x' : -1.67844778243635,
                  'y' : -31.076745319669
                  },
  },
{
                  data: {
                  id: 'CAGL0L09086g',
                  name: 'CAGL0L09086g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L09086g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 2-methylcitrate synthase activity, citrate (Si)-synthase activity, role in propionate catabolic process, 2-methylcitrate cycle, tricarboxylic acid cycle and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L09086g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L09086g'  target='_blank'> Link to GRYC</a>",
                  x : 5.60009557626957,
                  y : 6.21182097834085
                  },
                  position : {
                  'x' : 56.0009557626957,
                  'y' : 62.1182097834085
                  },
  },
{
                  data: {
                  id: 'CAGL0L09108g',
                  name: 'CAGL0L09108g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L09108g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in propionate metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L09108g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L09108g'  target='_blank'> Link to GRYC</a>",
                  x : 6.28559937248082,
                  y : 6.34575634326054
                  },
                  position : {
                  'x' : 62.8559937248082,
                  'y' : 63.4575634326054
                  },
  },
{
                  data: {
                  id: 'CAGL0L09273g',
                  name: 'CAGL0L09273g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L09273g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have isocitrate lyase activity, methylisocitrate lyase activity, role in propionate catabolic process, 2-methylcitrate cycle and mitochondrial matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L09273g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L09273g'  target='_blank'> Link to GRYC</a>",
                  x : 10.1118658734521,
                  y : 3.00807914543654
                  },
                  position : {
                  'x' : 101.118658734521,
                  'y' : 30.0807914543654
                  },
  },
{
                  data: {
                  id: 'CAGL0L10582g',
                  name: 'CAGL0L10582g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L10582g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted mannosyl-oligosaccharide glucosidase activity and role in oligosaccharide metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10582g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10582g'  target='_blank'> Link to GRYC</a>",
                  x : 7.26202428043018,
                  y : 6.29752725163361
                  },
                  position : {
                  'x' : 72.6202428043018,
                  'y' : 62.9752725163361
                  },
  },
{
                  data: {
                  id: 'CAGL0L10890g',
                  name: 'CAGL0L10890g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L10890g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cellular response to biotic stimulus, cellular response to starvation, chromosome organization and filamentous growth, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10890g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10890g'  target='_blank'> Link to GRYC</a>",
                  x : 0.463431354349037,
                  y : -3.0614789614459
                  },
                  position : {
                  'x' : 4.63431354349037,
                  'y' : -30.614789614459
                  },
  },
{
                  data: {
                  id: 'CAGL0L11000g',
                  name: 'CAGL0L11000g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L11000g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have uroporphyrinogen-III synthase activity and role in heme biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L11000g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L11000g'  target='_blank'> Link to GRYC</a>",
                  x : -0.553167756969512,
                  y : -1.6388697247693
                  },
                  position : {
                  'x' : -5.53167756969513,
                  'y' : -16.388697247693
                  },
  },
{
                  data: {
                  id: 'CAGL0L11902g',
                  name: 'CAGL0L11902g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L11902g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have adenylate kinase activity, nucleoside triphosphate adenylate kinase activity, role in nucleotide metabolic process and mitochondrial inner membrane, mitochondrial matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L11902g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L11902g'  target='_blank'> Link to GRYC</a>",
                  x : 4.63157601119539,
                  y : 7.08925606128526
                  },
                  position : {
                  'x' : 46.3157601119539,
                  'y' : 70.8925606128526
                  },
  },
{
                  data: {
                  id: 'CAGL0M02167g',
                  name: 'CAGL0M02167g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M02167g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : PRM4 and Saccharomyces cerevisiae S288C : YPL156C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M02167g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M02167g'  target='_blank'> Link to GRYC</a>",
                  x : 4.64957223923034,
                  y : 6.19288020642423
                  },
                  position : {
                  'x' : 46.4957223923034,
                  'y' : 61.9288020642423
                  },
  },
{
                  data: {
                  id: 'CAGL0M02915g',
                  name: 'CAGL0M02915g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M02915g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in autophagy of peroxisome and peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M02915g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M02915g'  target='_blank'> Link to GRYC</a>",
                  x : 8.50323913029867,
                  y : 6.4511704480243
                  },
                  position : {
                  'x' : 85.0323913029867,
                  'y' : 64.511704480243
                  },
  },
{
                  data: {
                  id: 'CAGL0M05775g',
                  name: 'CAGL0M05775g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M05775g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted RNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M05775g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M05775g'  target='_blank'> Link to GRYC</a>",
                  x : 0.590661854986999,
                  y : -2.92066418613202
                  },
                  position : {
                  'x' : 5.90661854986999,
                  'y' : -29.2066418613202
                  },
  },
{
                  data: {
                  id: 'CAGL0M09669g',
                  name: 'CAGL0M09669g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M09669g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have calcium-dependent cysteine-type endopeptidase activity, cysteine-type endopeptidase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M09669g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M09669g'  target='_blank'> Link to GRYC</a>",
                  x : 3.58978508210603,
                  y : 6.41650501898898
                  },
                  position : {
                  'x' : 35.8978508210603,
                  'y' : 64.1650501898898
                  },
  },
{
                  data: {
                  id: 'CAGL0M10241g',
                  name: 'CAGL0M10241g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M10241g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA binding activity, role in macroautophagy and cytosolic large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M10241g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M10241g'  target='_blank'> Link to GRYC</a>",
                  x : -0.952106453494014,
                  y : -4.03162784570072
                  },
                  position : {
                  'x' : -9.52106453494014,
                  'y' : -40.3162784570072
                  },
  },
{
                  data: {
                  id: 'CAGL0M11110g',
                  name: 'CAGL0M11110g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M11110g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in rRNA processing and preribosome, large subunit precursor localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M11110g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M11110g'  target='_blank'> Link to GRYC</a>",
                  x : -0.245138709530827,
                  y : -3.33187552108421
                  },
                  position : {
                  'x' : -2.45138709530827,
                  'y' : -33.3187552108421
                  },
  },
{
                  data: {
                  id: 'CAGL0M13717g',
                  name: 'CAGL0M13717g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M13717g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have amidophosphoribosyltransferase activity and role in 'de novo' IMP biosynthetic process, adenine metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M13717g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M13717g'  target='_blank'> Link to GRYC</a>",
                  x : 3.52739540271962,
                  y : 4.18970780967116
                  },
                  position : {
                  'x' : 35.2739540271962,
                  'y' : 41.8970780967116
                  },
  },
{
                  data: {
                  source: 'CAGL0A02112g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0A04015g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B00286g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B00792g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B01881g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D00880g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D05060g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01155g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01771g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E02013g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E03938g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04994g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05500g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F00429g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02233g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02431g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03927g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G01826g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G03575g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05874g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06248g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06490g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07106g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09130g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00792g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01298g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04752g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06006g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08987g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0A00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D01298g',
                  target: 'CAGL0A02002g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F08261g',
                  target: 'CAGL0A02002g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03916g',
                  target: 'CAGL0A02002g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08536g',
                  target: 'CAGL0A02002g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0A02002g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0A04015g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B00286g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B00792g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B01881g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C03652g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D00880g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D05060g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01155g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01771g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E02013g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E03938g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04994g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05500g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F00429g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02233g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02431g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03927g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G01826g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G03575g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05874g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06248g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06490g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07106g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09130g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01298g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04752g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08987g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0A02112g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B00286g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B00792g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B01507g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B01881g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C03652g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D05060g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01771g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E02013g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E03938g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04994g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05500g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F00429g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02233g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02431g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03927g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G01826g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06490g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09130g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H03993g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01298g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04752g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08987g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0A04015g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C01595g',
                  target: 'CAGL0A04653g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E03520g',
                  target: 'CAGL0A04653g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04411g',
                  target: 'CAGL0A04653g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07821g',
                  target: 'CAGL0A04653g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03036g',
                  target: 'CAGL0A04653g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03080g',
                  target: 'CAGL0A04653g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09009g',
                  target: 'CAGL0A04653g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09284g',
                  target: 'CAGL0A04653g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10406g',
                  target: 'CAGL0A04653g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05258g',
                  target: 'CAGL0A04653g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05478g',
                  target: 'CAGL0A04653g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09724g',
                  target: 'CAGL0A04653g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11858g',
                  target: 'CAGL0A04653g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0A04653g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03982g',
                  target: 'CAGL0A04653g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04070g',
                  target: 'CAGL0A04653g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09669g',
                  target: 'CAGL0A04653g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B02860g',
                  target: 'CAGL0A04829g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B03619g',
                  target: 'CAGL0A04829g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C02739g',
                  target: 'CAGL0A04829g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C04587g',
                  target: 'CAGL0A04829g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D01298g',
                  target: 'CAGL0A04829g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D05082g',
                  target: 'CAGL0A04829g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E02651g',
                  target: 'CAGL0A04829g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05148g',
                  target: 'CAGL0A04829g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E06380g',
                  target: 'CAGL0A04829g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04851g',
                  target: 'CAGL0A04829g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05445g',
                  target: 'CAGL0A04829g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0A04829g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08426g',
                  target: 'CAGL0A04829g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B00792g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B01881g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D00880g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D05060g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01771g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E02013g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04994g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05500g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F00429g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02431g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03927g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G01826g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G03575g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06490g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01298g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06006g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0B00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B01881g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C04917g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D00880g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D01562g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D05060g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01155g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01771g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E02013g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E03938g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04994g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05500g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F00429g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02563g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03927g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G01826g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G03575g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05874g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06248g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06490g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07106g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09130g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00792g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06006g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0B00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B03993g',
                  target: 'CAGL0B01507g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C04917g',
                  target: 'CAGL0B01507g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C05115g',
                  target: 'CAGL0B01507g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D05060g',
                  target: 'CAGL0B01507g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01771g',
                  target: 'CAGL0B01507g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05500g',
                  target: 'CAGL0B01507g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02233g',
                  target: 'CAGL0B01507g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02431g',
                  target: 'CAGL0B01507g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H10142g',
                  target: 'CAGL0B01507g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01298g',
                  target: 'CAGL0B01507g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08987g',
                  target: 'CAGL0B01507g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0B01507g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0B01507g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0B01507g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0B01507g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0B01507g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0B01507g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0B01507g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0B01507g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B03619g',
                  target: 'CAGL0B01727g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D01298g',
                  target: 'CAGL0B01727g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D05082g',
                  target: 'CAGL0B01727g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04510g',
                  target: 'CAGL0B01727g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05148g',
                  target: 'CAGL0B01727g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F00715g',
                  target: 'CAGL0B01727g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G02563g',
                  target: 'CAGL0B01727g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00704g',
                  target: 'CAGL0B01727g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04851g',
                  target: 'CAGL0B01727g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0B01727g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0B01727g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D00880g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D05060g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01771g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E02013g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E03938g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04994g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05500g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F00429g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02233g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02431g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03927g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G01826g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06248g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06490g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07106g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09130g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01298g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04752g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08987g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0B01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F01749g',
                  target: 'CAGL0B02794g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07887g',
                  target: 'CAGL0B02794g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04444g',
                  target: 'CAGL0B02794g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04499g',
                  target: 'CAGL0B02794g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10340g',
                  target: 'CAGL0B02794g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M13717g',
                  target: 'CAGL0B02794g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B03619g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C02739g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C04587g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D01298g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D02134g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D04026g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D05082g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01815g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E02651g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04510g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05148g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E06380g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G03883g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00682g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00704g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02387g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02585g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04851g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05445g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04048g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07887g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08426g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0B02860g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C02739g',
                  target: 'CAGL0B03619g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C04587g',
                  target: 'CAGL0B03619g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D01298g',
                  target: 'CAGL0B03619g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D02134g',
                  target: 'CAGL0B03619g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D04026g',
                  target: 'CAGL0B03619g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D05082g',
                  target: 'CAGL0B03619g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01793g',
                  target: 'CAGL0B03619g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01815g',
                  target: 'CAGL0B03619g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E02651g',
                  target: 'CAGL0B03619g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04510g',
                  target: 'CAGL0B03619g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05148g',
                  target: 'CAGL0B03619g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00704g',
                  target: 'CAGL0B03619g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02387g',
                  target: 'CAGL0B03619g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02585g',
                  target: 'CAGL0B03619g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04851g',
                  target: 'CAGL0B03619g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05445g',
                  target: 'CAGL0B03619g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07887g',
                  target: 'CAGL0B03619g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05082g',
                  target: 'CAGL0B03619g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0B03619g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0B03619g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0B03619g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0B03619g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C03652g',
                  target: 'CAGL0B03663g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D02596g',
                  target: 'CAGL0B03663g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F00649g',
                  target: 'CAGL0B03663g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04950g',
                  target: 'CAGL0B03663g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04103g',
                  target: 'CAGL0B03663g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C04279g',
                  target: 'CAGL0B03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C05115g',
                  target: 'CAGL0B03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D05060g',
                  target: 'CAGL0B03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01771g',
                  target: 'CAGL0B03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H03993g',
                  target: 'CAGL0B03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H10142g',
                  target: 'CAGL0B03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01298g',
                  target: 'CAGL0B03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08987g',
                  target: 'CAGL0B03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0B03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09240g',
                  target: 'CAGL0B03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0B03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0B03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0B03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0B03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E03520g',
                  target: 'CAGL0C01595g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04411g',
                  target: 'CAGL0C01595g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06732g',
                  target: 'CAGL0C01595g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07821g',
                  target: 'CAGL0C01595g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03036g',
                  target: 'CAGL0C01595g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09009g',
                  target: 'CAGL0C01595g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09284g',
                  target: 'CAGL0C01595g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10406g',
                  target: 'CAGL0C01595g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03762g',
                  target: 'CAGL0C01595g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05258g',
                  target: 'CAGL0C01595g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05478g',
                  target: 'CAGL0C01595g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09724g',
                  target: 'CAGL0C01595g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11858g',
                  target: 'CAGL0C01595g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0C01595g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03982g',
                  target: 'CAGL0C01595g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04070g',
                  target: 'CAGL0C01595g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09669g',
                  target: 'CAGL0C01595g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C04587g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D01298g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D02134g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D04026g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D05082g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01815g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E02651g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04510g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05148g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E06380g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00682g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00704g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02387g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04851g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05445g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04972g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07887g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10428g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08426g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09669g',
                  target: 'CAGL0C02739g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D02596g',
                  target: 'CAGL0C03652g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F00649g',
                  target: 'CAGL0C03652g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0C03652g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0C03652g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04752g',
                  target: 'CAGL0C03652g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0C03652g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04950g',
                  target: 'CAGL0C03652g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04103g',
                  target: 'CAGL0C03652g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0C03652g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01771g',
                  target: 'CAGL0C04279g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E03520g',
                  target: 'CAGL0C04279g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04411g',
                  target: 'CAGL0C04279g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H03993g',
                  target: 'CAGL0C04279g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01298g',
                  target: 'CAGL0C04279g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03036g',
                  target: 'CAGL0C04279g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08987g',
                  target: 'CAGL0C04279g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05478g',
                  target: 'CAGL0C04279g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09240g',
                  target: 'CAGL0C04279g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09724g',
                  target: 'CAGL0C04279g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11858g',
                  target: 'CAGL0C04279g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0C04279g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0C04279g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0C04279g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D01298g',
                  target: 'CAGL0C04587g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D02134g',
                  target: 'CAGL0C04587g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D04026g',
                  target: 'CAGL0C04587g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01815g',
                  target: 'CAGL0C04587g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E02651g',
                  target: 'CAGL0C04587g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E06380g',
                  target: 'CAGL0C04587g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G03883g',
                  target: 'CAGL0C04587g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00418g',
                  target: 'CAGL0C04587g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00682g',
                  target: 'CAGL0C04587g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02387g',
                  target: 'CAGL0C04587g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04851g',
                  target: 'CAGL0C04587g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05445g',
                  target: 'CAGL0C04587g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00528g',
                  target: 'CAGL0C04587g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04048g',
                  target: 'CAGL0C04587g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07887g',
                  target: 'CAGL0C04587g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08305g',
                  target: 'CAGL0C04587g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0C04587g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08426g',
                  target: 'CAGL0C04587g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0C04587g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0C04587g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0C04587g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C05115g',
                  target: 'CAGL0C04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D01562g',
                  target: 'CAGL0C04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D05060g',
                  target: 'CAGL0C04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01771g',
                  target: 'CAGL0C04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E02013g',
                  target: 'CAGL0C04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04994g',
                  target: 'CAGL0C04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05500g',
                  target: 'CAGL0C04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02431g',
                  target: 'CAGL0C04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02563g',
                  target: 'CAGL0C04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G01826g',
                  target: 'CAGL0C04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06248g',
                  target: 'CAGL0C04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0C04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0C04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08987g',
                  target: 'CAGL0C04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0C04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0C04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0C04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0C04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0C04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0C04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0C04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01815g',
                  target: 'CAGL0C05027g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01837g',
                  target: 'CAGL0C05027g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E03916g',
                  target: 'CAGL0C05027g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05654g',
                  target: 'CAGL0C05027g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00418g',
                  target: 'CAGL0C05027g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08261g',
                  target: 'CAGL0C05027g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H09460g',
                  target: 'CAGL0C05027g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04048g',
                  target: 'CAGL0C05027g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07887g',
                  target: 'CAGL0C05027g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08305g',
                  target: 'CAGL0C05027g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09284g',
                  target: 'CAGL0C05027g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08547g',
                  target: 'CAGL0C05027g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11902g',
                  target: 'CAGL0C05027g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D05060g',
                  target: 'CAGL0C05115g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H10142g',
                  target: 'CAGL0C05115g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01045g',
                  target: 'CAGL0C05115g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09240g',
                  target: 'CAGL0C05115g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0C05115g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04499g',
                  target: 'CAGL0C05115g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0C05115g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M13717g',
                  target: 'CAGL0C05115g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D05060g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01155g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E02013g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E03938g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04994g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05500g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F00429g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02563g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03927g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G01826g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G03575g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05874g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06248g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06490g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07106g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09130g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00792g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06006g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0D00880g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D02134g',
                  target: 'CAGL0D01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D04026g',
                  target: 'CAGL0D01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D05082g',
                  target: 'CAGL0D01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E02651g',
                  target: 'CAGL0D01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04510g',
                  target: 'CAGL0D01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05148g',
                  target: 'CAGL0D01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E06380g',
                  target: 'CAGL0D01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00704g',
                  target: 'CAGL0D01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02387g',
                  target: 'CAGL0D01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04851g',
                  target: 'CAGL0D01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05445g',
                  target: 'CAGL0D01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00528g',
                  target: 'CAGL0D01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04972g',
                  target: 'CAGL0D01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0D01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10428g',
                  target: 'CAGL0D01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08426g',
                  target: 'CAGL0D01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0D01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0D01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0D01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02563g',
                  target: 'CAGL0D01562g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G01826g',
                  target: 'CAGL0D01562g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0D01562g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06006g',
                  target: 'CAGL0D01562g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0D01562g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0D01562g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0D01562g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0D01562g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D04026g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01815g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E02651g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04510g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05148g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07821g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09691g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00682g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00704g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04851g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05445g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00528g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04972g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07887g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08305g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08547g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10428g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09086g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11902g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09669g',
                  target: 'CAGL0D02134g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01155g',
                  target: 'CAGL0D02596g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F00649g',
                  target: 'CAGL0D02596g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05874g',
                  target: 'CAGL0D02596g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0D02596g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0D02596g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0D02596g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04950g',
                  target: 'CAGL0D02596g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10824g',
                  target: 'CAGL0D02596g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04103g',
                  target: 'CAGL0D02596g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0D02596g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0D02596g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D05082g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01815g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E02651g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04510g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05148g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E06380g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G03883g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00682g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00704g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02387g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02585g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04851g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05445g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00528g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04048g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07887g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08305g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05082g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09086g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0D04026g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01771g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E02013g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E03938g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04994g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05500g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F00429g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02233g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02431g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G01826g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06248g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06490g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01298g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06006g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08987g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0D05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01793g',
                  target: 'CAGL0D05082g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E02651g',
                  target: 'CAGL0D05082g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04510g',
                  target: 'CAGL0D05082g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05148g',
                  target: 'CAGL0D05082g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00704g',
                  target: 'CAGL0D05082g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02585g',
                  target: 'CAGL0D05082g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04851g',
                  target: 'CAGL0D05082g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0D05082g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09240g',
                  target: 'CAGL0D06424g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04994g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F00429g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03927g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G01826g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G03575g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05874g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06490g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09130g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04081g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00792g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06006g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10824g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0E01155g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04994g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05500g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02233g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02431g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H03993g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H09064g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01298g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08987g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0E01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05148g',
                  target: 'CAGL0E01793g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00704g',
                  target: 'CAGL0E01793g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E02651g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04510g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E06380g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G03883g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09691g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00418g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00682g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00704g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04851g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05445g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08261g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00528g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04048g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07887g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08305g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08547g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09086g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11902g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09669g',
                  target: 'CAGL0E01815g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E03916g',
                  target: 'CAGL0E01837g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H09460g',
                  target: 'CAGL0E01837g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03080g',
                  target: 'CAGL0E01837g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09284g',
                  target: 'CAGL0E01837g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03982g',
                  target: 'CAGL0E01837g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E03938g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04994g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05500g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F00429g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02233g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02431g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02563g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03927g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G01826g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G03575g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05874g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06248g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06490g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07106g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09130g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00792g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06006g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0E02013g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04510g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05148g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E06380g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G03883g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07821g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00418g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00682g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00704g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02585g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04851g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05445g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04048g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07887g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08305g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10406g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08547g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11902g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09669g',
                  target: 'CAGL0E02651g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04411g',
                  target: 'CAGL0E03520g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06732g',
                  target: 'CAGL0E03520g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H03993g',
                  target: 'CAGL0E03520g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03036g',
                  target: 'CAGL0E03520g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09009g',
                  target: 'CAGL0E03520g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10406g',
                  target: 'CAGL0E03520g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05478g',
                  target: 'CAGL0E03520g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09724g',
                  target: 'CAGL0E03520g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11858g',
                  target: 'CAGL0E03520g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04070g',
                  target: 'CAGL0E03520g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F06501g',
                  target: 'CAGL0E03916g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07821g',
                  target: 'CAGL0E03916g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09691g',
                  target: 'CAGL0E03916g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07887g',
                  target: 'CAGL0E03916g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H09460g',
                  target: 'CAGL0E03916g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03080g',
                  target: 'CAGL0E03916g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04444g',
                  target: 'CAGL0E03916g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09284g',
                  target: 'CAGL0E03916g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08547g',
                  target: 'CAGL0E03916g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10340g',
                  target: 'CAGL0E03916g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0E03916g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03982g',
                  target: 'CAGL0E03916g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11902g',
                  target: 'CAGL0E03916g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0E03916g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09669g',
                  target: 'CAGL0E03916g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04994g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02233g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03927g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G01826g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05874g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06248g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06490g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07106g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09130g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00792g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04752g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0E03938g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05148g',
                  target: 'CAGL0E04510g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G02563g',
                  target: 'CAGL0E04510g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00704g',
                  target: 'CAGL0E04510g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02387g',
                  target: 'CAGL0E04510g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04851g',
                  target: 'CAGL0E04510g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05445g',
                  target: 'CAGL0E04510g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00528g',
                  target: 'CAGL0E04510g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04972g',
                  target: 'CAGL0E04510g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05082g',
                  target: 'CAGL0E04510g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0E04510g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10428g',
                  target: 'CAGL0E04510g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0E04510g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0E04510g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0E04510g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05500g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F00429g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02563g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03927g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G01826g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G03575g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05874g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06248g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06490g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09130g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00792g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01298g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06006g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08987g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0E04994g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00704g',
                  target: 'CAGL0E05148g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02387g',
                  target: 'CAGL0E05148g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02585g',
                  target: 'CAGL0E05148g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04851g',
                  target: 'CAGL0E05148g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05445g',
                  target: 'CAGL0E05148g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0E05148g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0E05148g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0E05148g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0E05148g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F00429g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02233g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02431g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03927g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G01826g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06248g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06490g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01298g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06006g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08987g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0E05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00418g',
                  target: 'CAGL0E05654g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H09460g',
                  target: 'CAGL0E05654g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06050g',
                  target: 'CAGL0E05654g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G03883g',
                  target: 'CAGL0E06380g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00682g',
                  target: 'CAGL0E06380g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02387g',
                  target: 'CAGL0E06380g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04851g',
                  target: 'CAGL0E06380g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05445g',
                  target: 'CAGL0E06380g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00528g',
                  target: 'CAGL0E06380g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04048g',
                  target: 'CAGL0E06380g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07887g',
                  target: 'CAGL0E06380g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0E06380g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08426g',
                  target: 'CAGL0E06380g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0E06380g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0E06380g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03927g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G01826g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G03575g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05874g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06490g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09130g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04081g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00792g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06006g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10824g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0F00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04950g',
                  target: 'CAGL0F00649g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04103g',
                  target: 'CAGL0F00649g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G02563g',
                  target: 'CAGL0F00715g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08536g',
                  target: 'CAGL0F00715g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09691g',
                  target: 'CAGL0F01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07887g',
                  target: 'CAGL0F01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04444g',
                  target: 'CAGL0F01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01045g',
                  target: 'CAGL0F01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08547g',
                  target: 'CAGL0F01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04499g',
                  target: 'CAGL0F01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10340g',
                  target: 'CAGL0F01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0F01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09086g',
                  target: 'CAGL0F01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M13717g',
                  target: 'CAGL0F01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02431g',
                  target: 'CAGL0F02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06248g',
                  target: 'CAGL0F02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0F02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0F02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01298g',
                  target: 'CAGL0F02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04752g',
                  target: 'CAGL0F02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08987g',
                  target: 'CAGL0F02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0F02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0F02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0F02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0F02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0F02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0F02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0F02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0F02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0F02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0F02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0F02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0F02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0F02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06248g',
                  target: 'CAGL0F02431g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01298g',
                  target: 'CAGL0F02431g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08987g',
                  target: 'CAGL0F02431g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0F02431g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0F02431g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0F02431g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0F02431g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0F02431g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0F02431g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0F02431g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0F02431g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0F02431g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0F02431g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0F02431g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G01826g',
                  target: 'CAGL0F02563g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06248g',
                  target: 'CAGL0F02563g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0F02563g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00792g',
                  target: 'CAGL0F02563g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0F02563g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06006g',
                  target: 'CAGL0F02563g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0F02563g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0F02563g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0F02563g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0F02563g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0F02563g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0F02563g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0F02563g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0F02563g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0F02563g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0F02563g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G01826g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G03575g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05874g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06490g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07106g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09130g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04081g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00792g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06006g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0F03927g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06732g',
                  target: 'CAGL0F04411g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07821g',
                  target: 'CAGL0F04411g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03036g',
                  target: 'CAGL0F04411g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09009g',
                  target: 'CAGL0F04411g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10406g',
                  target: 'CAGL0F04411g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05258g',
                  target: 'CAGL0F04411g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05478g',
                  target: 'CAGL0F04411g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09724g',
                  target: 'CAGL0F04411g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11858g',
                  target: 'CAGL0F04411g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03982g',
                  target: 'CAGL0F04411g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04070g',
                  target: 'CAGL0F04411g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09669g',
                  target: 'CAGL0F04411g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0F04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06006g',
                  target: 'CAGL0F04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0F04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0F04917g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09691g',
                  target: 'CAGL0F06501g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07887g',
                  target: 'CAGL0F06501g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03036g',
                  target: 'CAGL0F06501g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04444g',
                  target: 'CAGL0F06501g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09009g',
                  target: 'CAGL0F06501g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09284g',
                  target: 'CAGL0F06501g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01045g',
                  target: 'CAGL0F06501g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05478g',
                  target: 'CAGL0F06501g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08547g',
                  target: 'CAGL0F06501g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09240g',
                  target: 'CAGL0F06501g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04499g',
                  target: 'CAGL0F06501g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10340g',
                  target: 'CAGL0F06501g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0F06501g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03982g',
                  target: 'CAGL0F06501g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0F06501g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M13717g',
                  target: 'CAGL0F06501g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08536g',
                  target: 'CAGL0F08261g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G03575g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05874g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06248g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06490g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07106g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09130g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00792g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06006g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0G01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G02937g',
                  target: 'CAGL0G02563g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05082g',
                  target: 'CAGL0G02563g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H06545g',
                  target: 'CAGL0G02937g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05874g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06490g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04081g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00792g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06006g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10824g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0G03575g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00418g',
                  target: 'CAGL0G03883g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00682g',
                  target: 'CAGL0G03883g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02387g',
                  target: 'CAGL0G03883g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08261g',
                  target: 'CAGL0G03883g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04048g',
                  target: 'CAGL0G03883g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07887g',
                  target: 'CAGL0G03883g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08305g',
                  target: 'CAGL0G03883g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08547g',
                  target: 'CAGL0G03883g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09086g',
                  target: 'CAGL0G03883g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0G03883g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0G03883g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06490g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09130g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04081g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00792g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06006g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10824g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04103g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0G05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06490g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07106g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09130g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00792g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08987g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0G06248g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07106g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09130g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00792g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06006g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0G06490g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03762g',
                  target: 'CAGL0G06732g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05357g',
                  target: 'CAGL0G06732g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08734g',
                  target: 'CAGL0G07106g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09130g',
                  target: 'CAGL0G07106g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00792g',
                  target: 'CAGL0G07106g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0G07106g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0G07106g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0G07106g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0G07106g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0G07106g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0G07106g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0G07106g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0G07106g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0G07106g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0G07106g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03036g',
                  target: 'CAGL0G07821g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09009g',
                  target: 'CAGL0G07821g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09284g',
                  target: 'CAGL0G07821g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10406g',
                  target: 'CAGL0G07821g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03762g',
                  target: 'CAGL0G07821g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05258g',
                  target: 'CAGL0G07821g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05478g',
                  target: 'CAGL0G07821g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08547g',
                  target: 'CAGL0G07821g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0G07821g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03982g',
                  target: 'CAGL0G07821g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04070g',
                  target: 'CAGL0G07821g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11902g',
                  target: 'CAGL0G07821g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09669g',
                  target: 'CAGL0G07821g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09130g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00792g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01298g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06006g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08987g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0G08734g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05643g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04752g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0G09130g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00682g',
                  target: 'CAGL0G09691g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07887g',
                  target: 'CAGL0G09691g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00528g',
                  target: 'CAGL0G09691g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04048g',
                  target: 'CAGL0G09691g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04444g',
                  target: 'CAGL0G09691g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07887g',
                  target: 'CAGL0G09691g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08305g',
                  target: 'CAGL0G09691g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09284g',
                  target: 'CAGL0G09691g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01045g',
                  target: 'CAGL0G09691g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08547g',
                  target: 'CAGL0G09691g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04499g',
                  target: 'CAGL0G09691g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10340g',
                  target: 'CAGL0G09691g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0G09691g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03982g',
                  target: 'CAGL0G09691g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09086g',
                  target: 'CAGL0G09691g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0G09691g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11902g',
                  target: 'CAGL0G09691g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0G09691g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09669g',
                  target: 'CAGL0G09691g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M13717g',
                  target: 'CAGL0G09691g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00682g',
                  target: 'CAGL0H00418g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08261g',
                  target: 'CAGL0H00418g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04048g',
                  target: 'CAGL0H00418g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07887g',
                  target: 'CAGL0H00418g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08305g',
                  target: 'CAGL0H00418g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08547g',
                  target: 'CAGL0H00418g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0H00418g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0H00418g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11902g',
                  target: 'CAGL0H00418g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0H00418g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02387g',
                  target: 'CAGL0H00682g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04851g',
                  target: 'CAGL0H00682g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05445g',
                  target: 'CAGL0H00682g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08261g',
                  target: 'CAGL0H00682g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00528g',
                  target: 'CAGL0H00682g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04048g',
                  target: 'CAGL0H00682g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07887g',
                  target: 'CAGL0H00682g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08305g',
                  target: 'CAGL0H00682g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08547g',
                  target: 'CAGL0H00682g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0H00682g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10340g',
                  target: 'CAGL0H00682g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0H00682g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09086g',
                  target: 'CAGL0H00682g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0H00682g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0H00682g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0H00682g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02387g',
                  target: 'CAGL0H00704g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02585g',
                  target: 'CAGL0H00704g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04851g',
                  target: 'CAGL0H00704g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07887g',
                  target: 'CAGL0H00704g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05082g',
                  target: 'CAGL0H00704g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0H00704g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0H00704g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09273g',
                  target: 'CAGL0H00704g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0H00704g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0H00704g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02585g',
                  target: 'CAGL0H02387g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04851g',
                  target: 'CAGL0H02387g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05445g',
                  target: 'CAGL0H02387g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05082g',
                  target: 'CAGL0H02387g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0H02387g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0H02387g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0H02387g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04851g',
                  target: 'CAGL0H02585g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05082g',
                  target: 'CAGL0H02585g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0H02585g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0H02585g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0H02585g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H09064g',
                  target: 'CAGL0H03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01298g',
                  target: 'CAGL0H03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03036g',
                  target: 'CAGL0H03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08987g',
                  target: 'CAGL0H03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09240g',
                  target: 'CAGL0H03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09724g',
                  target: 'CAGL0H03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11858g',
                  target: 'CAGL0H03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0H03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0H03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0H03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0H03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0H04081g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0H04081g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0H04081g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10824g',
                  target: 'CAGL0H04081g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0H04081g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05445g',
                  target: 'CAGL0H04851g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00528g',
                  target: 'CAGL0H04851g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04972g',
                  target: 'CAGL0H04851g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07887g',
                  target: 'CAGL0H04851g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08305g',
                  target: 'CAGL0H04851g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0H04851g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10428g',
                  target: 'CAGL0H04851g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09086g',
                  target: 'CAGL0H04851g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0H04851g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0H04851g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0H04851g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00528g',
                  target: 'CAGL0H05445g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04972g',
                  target: 'CAGL0H05445g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0H05445g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10428g',
                  target: 'CAGL0H05445g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08426g',
                  target: 'CAGL0H05445g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0H05445g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0H05445g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0H05445g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07051g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01298g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04752g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08987g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04103g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0H05643g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00792g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06006g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10824g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04103g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0H07051g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H09460g',
                  target: 'CAGL0H07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04444g',
                  target: 'CAGL0H07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08305g',
                  target: 'CAGL0H07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09284g',
                  target: 'CAGL0H07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01045g',
                  target: 'CAGL0H07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08547g',
                  target: 'CAGL0H07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04499g',
                  target: 'CAGL0H07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10340g',
                  target: 'CAGL0H07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0H07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03982g',
                  target: 'CAGL0H07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09086g',
                  target: 'CAGL0H07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11902g',
                  target: 'CAGL0H07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0H07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M13717g',
                  target: 'CAGL0H07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04048g',
                  target: 'CAGL0H08261g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07887g',
                  target: 'CAGL0H08261g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08305g',
                  target: 'CAGL0H08261g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08547g',
                  target: 'CAGL0H08261g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09086g',
                  target: 'CAGL0H08261g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0H08261g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09240g',
                  target: 'CAGL0H09064g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0H09064g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0H09064g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09284g',
                  target: 'CAGL0H09460g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08547g',
                  target: 'CAGL0H09460g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11902g',
                  target: 'CAGL0H09460g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08987g',
                  target: 'CAGL0H10142g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09240g',
                  target: 'CAGL0H10142g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0H10142g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0H10142g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04972g',
                  target: 'CAGL0I00528g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07887g',
                  target: 'CAGL0I00528g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08305g',
                  target: 'CAGL0I00528g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10428g',
                  target: 'CAGL0I00528g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09086g',
                  target: 'CAGL0I00528g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0I00528g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0I00528g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0I00528g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03234g',
                  target: 'CAGL0I00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06006g',
                  target: 'CAGL0I00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0I00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0I00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0I00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0I00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0I00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0I00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0I00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0I00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0I00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0I00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0I00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0I00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0I00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0I00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0I00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0I00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0I00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0I00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0I00792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04752g',
                  target: 'CAGL0I01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08987g',
                  target: 'CAGL0I01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0I01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0I01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0I01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0I01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0I01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0I01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0I01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0I01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0I01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0I01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0I01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0I01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0I01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0I01298g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03080g',
                  target: 'CAGL0I03036g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09009g',
                  target: 'CAGL0I03036g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10406g',
                  target: 'CAGL0I03036g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05258g',
                  target: 'CAGL0I03036g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05478g',
                  target: 'CAGL0I03036g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09724g',
                  target: 'CAGL0I03036g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11858g',
                  target: 'CAGL0I03036g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00759g',
                  target: 'CAGL0I03036g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03982g',
                  target: 'CAGL0I03036g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04070g',
                  target: 'CAGL0I03036g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09669g',
                  target: 'CAGL0I03036g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09284g',
                  target: 'CAGL0I03080g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05258g',
                  target: 'CAGL0I03080g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05478g',
                  target: 'CAGL0I03080g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00759g',
                  target: 'CAGL0I03080g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03982g',
                  target: 'CAGL0I03080g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06006g',
                  target: 'CAGL0I03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0I03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0I03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0I03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0I03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0I03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0I03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0I03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0I03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0I03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0I03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0I03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0I03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0I03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0I03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0I03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0I03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0I03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0I03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0I03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0I03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0I03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07887g',
                  target: 'CAGL0I04048g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08305g',
                  target: 'CAGL0I04048g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08547g',
                  target: 'CAGL0I04048g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10340g',
                  target: 'CAGL0I04048g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0I04048g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09086g',
                  target: 'CAGL0I04048g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0I04048g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11902g',
                  target: 'CAGL0I04048g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0I04048g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01045g',
                  target: 'CAGL0I04444g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08547g',
                  target: 'CAGL0I04444g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04499g',
                  target: 'CAGL0I04444g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10340g',
                  target: 'CAGL0I04444g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0I04444g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09086g',
                  target: 'CAGL0I04444g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0I04444g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M13717g',
                  target: 'CAGL0I04444g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0I04752g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0I04752g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0I04752g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03762g',
                  target: 'CAGL0I04972g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10428g',
                  target: 'CAGL0I04972g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08426g',
                  target: 'CAGL0I04972g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0I04972g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0I04972g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0I06006g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0I06006g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0I06006g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0I06006g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0I06006g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0I06006g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0I06006g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0I06006g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0I06006g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0I06006g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0I06006g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0I06006g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0I06006g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0I06006g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0I06006g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0I06006g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0I06006g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08305g',
                  target: 'CAGL0I07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08547g',
                  target: 'CAGL0I07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0I07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0I07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09086g',
                  target: 'CAGL0I07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0I07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0I07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11902g',
                  target: 'CAGL0I07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0I07887g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08547g',
                  target: 'CAGL0I08305g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10340g',
                  target: 'CAGL0I08305g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0I08305g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09086g',
                  target: 'CAGL0I08305g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0I08305g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0I08305g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11902g',
                  target: 'CAGL0I08305g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0I08305g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09790g',
                  target: 'CAGL0I08987g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0I08987g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0I08987g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0I08987g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0I08987g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0I08987g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0I08987g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0I08987g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0I08987g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0I08987g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0I08987g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0I08987g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0I08987g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0I08987g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09284g',
                  target: 'CAGL0I09009g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10406g',
                  target: 'CAGL0I09009g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03762g',
                  target: 'CAGL0I09009g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05258g',
                  target: 'CAGL0I09009g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05478g',
                  target: 'CAGL0I09009g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09724g',
                  target: 'CAGL0I09009g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11858g',
                  target: 'CAGL0I09009g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0I09009g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03982g',
                  target: 'CAGL0I09009g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04070g',
                  target: 'CAGL0I09009g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09669g',
                  target: 'CAGL0I09009g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10406g',
                  target: 'CAGL0I09284g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05258g',
                  target: 'CAGL0I09284g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05478g',
                  target: 'CAGL0I09284g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08547g',
                  target: 'CAGL0I09284g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10340g',
                  target: 'CAGL0I09284g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0I09284g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03982g',
                  target: 'CAGL0I09284g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11902g',
                  target: 'CAGL0I09284g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0I09284g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09669g',
                  target: 'CAGL0I09284g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10670g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10791g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0I09790g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03762g',
                  target: 'CAGL0I10406g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05258g',
                  target: 'CAGL0I10406g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05478g',
                  target: 'CAGL0I10406g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09724g',
                  target: 'CAGL0I10406g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11858g',
                  target: 'CAGL0I10406g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0I10406g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03982g',
                  target: 'CAGL0I10406g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04070g',
                  target: 'CAGL0I10406g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09669g',
                  target: 'CAGL0I10406g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0I10670g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0I10670g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0I10670g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0I10670g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0I10670g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0I10670g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0I10670g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0I10670g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0I10670g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0I10670g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0I10670g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0I10670g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0I10670g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0I10670g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0I10670g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0I10670g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0I10670g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00473g',
                  target: 'CAGL0I10791g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05984g',
                  target: 'CAGL0I10791g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0I10791g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0I10791g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0I10791g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0I10791g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0I10791g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0I10791g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0I10791g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0I10791g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0I10791g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0I10791g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0I10791g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0I10791g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0I10791g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0I10791g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0I10791g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0I10791g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0I10791g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0I10791g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0I10791g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01848g',
                  target: 'CAGL0J00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0J00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0J00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0J00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0J00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0J00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0J00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04103g',
                  target: 'CAGL0J00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0J00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0J00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0J00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0J00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0J00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0J00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0J00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0J00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0J00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0J00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0J00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0J00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0J00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0J00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0J01045g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04499g',
                  target: 'CAGL0J01045g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10340g',
                  target: 'CAGL0J01045g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0J01045g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M13717g',
                  target: 'CAGL0J01045g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03234g',
                  target: 'CAGL0J01848g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0J01848g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0J01848g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0J01848g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0J01848g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0J01848g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10824g',
                  target: 'CAGL0J01848g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0J01848g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0J01848g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0J01848g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0J01848g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0J01848g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0J01848g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0J01848g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0J01848g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0J01848g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0J01848g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0J01848g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04070g',
                  target: 'CAGL0J03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0J03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0J03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0J03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0J03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0J03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0J03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0J03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0J03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0J03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0J03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0J03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0J03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0J03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0J03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0J03234g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05357g',
                  target: 'CAGL0J03762g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10428g',
                  target: 'CAGL0J03762g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0J03762g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09669g',
                  target: 'CAGL0J03762g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0J04070g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0J04070g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0J04070g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0J04070g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0J04070g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10824g',
                  target: 'CAGL0J04070g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0J04070g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0J04070g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0J04070g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0J04070g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0J04070g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0J04070g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0J04070g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0J04070g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0J04070g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0J04070g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04103g',
                  target: 'CAGL0J04950g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04301g',
                  target: 'CAGL0J05082g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09273g',
                  target: 'CAGL0J05082g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05478g',
                  target: 'CAGL0J05258g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0J05258g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03982g',
                  target: 'CAGL0J05258g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04070g',
                  target: 'CAGL0J05258g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09669g',
                  target: 'CAGL0J05258g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09724g',
                  target: 'CAGL0J05478g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11858g',
                  target: 'CAGL0J05478g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0J05478g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00759g',
                  target: 'CAGL0J05478g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03982g',
                  target: 'CAGL0J05478g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04070g',
                  target: 'CAGL0J05478g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09669g',
                  target: 'CAGL0J05478g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07766g',
                  target: 'CAGL0J05984g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0J05984g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0J05984g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0J05984g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0J05984g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0J05984g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0J05984g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0J05984g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0J05984g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0J05984g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0J05984g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0J05984g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J08679g',
                  target: 'CAGL0J07766g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0J07766g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0J07766g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0J07766g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0J07766g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0J07766g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0J07766g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0J07766g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0J07766g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0J07766g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0J07766g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0J07766g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0J07766g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0J07766g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0J07766g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0J07766g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0J07766g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10340g',
                  target: 'CAGL0J08547g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0J08547g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03982g',
                  target: 'CAGL0J08547g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09086g',
                  target: 'CAGL0J08547g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0J08547g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11902g',
                  target: 'CAGL0J08547g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0J08547g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09669g',
                  target: 'CAGL0J08547g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09614g',
                  target: 'CAGL0J08679g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0J08679g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0J08679g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0J08679g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0J08679g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0J08679g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0J08679g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0J08679g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0J08679g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0J08679g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0J08679g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0J08679g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0J08679g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0J08679g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0J08679g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0J08679g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0J08679g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0J08679g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00759g',
                  target: 'CAGL0J09240g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0J09240g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10010g',
                  target: 'CAGL0J09614g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0J09614g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0J09614g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0J09614g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0J09614g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0J09614g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0J09614g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0J09614g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0J09614g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0J09614g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0J09614g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0J09614g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11858g',
                  target: 'CAGL0J09724g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04070g',
                  target: 'CAGL0J09724g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10164g',
                  target: 'CAGL0J10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02233g',
                  target: 'CAGL0J10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0J10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0J10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0J10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0J10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0J10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0J10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0J10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0J10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0J10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0J10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0J10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0J10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0J10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06567g',
                  target: 'CAGL0J10164g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0J10164g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0J10164g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0J10164g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0J10164g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0J10164g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0J10164g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0J10164g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0J10164g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0J10164g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0J10164g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04070g',
                  target: 'CAGL0J11858g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00979g',
                  target: 'CAGL0K02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0K02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0K02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0K02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0K02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0K02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0K02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0K02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0K02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0K02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0K02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0K04103g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08426g',
                  target: 'CAGL0K04301g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0K04301g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0K04301g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10340g',
                  target: 'CAGL0K04499g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0K04499g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0K04499g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M13717g',
                  target: 'CAGL0K04499g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0K06567g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0K06567g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0K06567g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0K06567g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0K06567g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0K06567g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0K06567g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0K06567g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0K06567g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0K06567g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0K06567g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12518g',
                  target: 'CAGL0K10340g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03982g',
                  target: 'CAGL0K10340g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09086g',
                  target: 'CAGL0K10340g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0K10340g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M13717g',
                  target: 'CAGL0K10340g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09086g',
                  target: 'CAGL0K10428g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0K10428g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03982g',
                  target: 'CAGL0K12518g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09086g',
                  target: 'CAGL0K12518g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0K12518g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11902g',
                  target: 'CAGL0K12518g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0K12518g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09669g',
                  target: 'CAGL0K12518g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M13717g',
                  target: 'CAGL0K12518g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02937g',
                  target: 'CAGL0L00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0L00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0L00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0L00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0L00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0L00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0L00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0L00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0L00979g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03806g',
                  target: 'CAGL0L02937g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04664g',
                  target: 'CAGL0L02937g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0L02937g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0L02937g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0L02937g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05500g',
                  target: 'CAGL0L03806g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0L03806g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0L03806g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0L03806g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0L03806g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0L03806g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0L03806g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0L03806g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0L03806g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0L03806g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11902g',
                  target: 'CAGL0L03982g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0L03982g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09669g',
                  target: 'CAGL0L03982g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0L04664g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08114g',
                  target: 'CAGL0L05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0L05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0L05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0L05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0L05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0L05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0L05500g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08118g',
                  target: 'CAGL0L08114g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0L08114g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0L08114g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0L08114g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0L08114g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0L08114g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0L08114g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0L08114g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08184g',
                  target: 'CAGL0L08118g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0L08118g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0L08118g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0L08118g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0L08118g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0L08118g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08756g',
                  target: 'CAGL0L08184g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0L08184g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11000g',
                  target: 'CAGL0L08184g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0L08184g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0L08184g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0L08184g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0L08426g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10890g',
                  target: 'CAGL0L08756g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0L08756g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M10241g',
                  target: 'CAGL0L08756g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0L08756g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09108g',
                  target: 'CAGL0L09086g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0L09086g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11902g',
                  target: 'CAGL0L09086g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0L09086g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10582g',
                  target: 'CAGL0L09108g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11902g',
                  target: 'CAGL0L09108g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09669g',
                  target: 'CAGL0L09108g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02915g',
                  target: 'CAGL0L10582g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05775g',
                  target: 'CAGL0L10890g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0L10890g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02167g',
                  target: 'CAGL0L11902g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09669g',
                  target: 'CAGL0L11902g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M13717g',
                  target: 'CAGL0M02167g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0M05775g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11110g',
                  target: 'CAGL0M10241g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
],
         
         layout: {
         name: 'preset',
         fit: true
         },
         
         ready: function() {
         window.cy = this;
         },
         
         });
cy.$('#CAGL0A00979g').qtip({
                  content: "<h2>CAGL0A00979g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytosolic large ribosomal subunit, hyphal cell wall, yeast-form cell wall localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A00979g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A00979g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0A02002g').qtip({
                  content: "<h2>CAGL0A02002g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YOL024W and Saccharomyces cerevisiae S288C : YOL024W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02002g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02002g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0A02112g').qtip({
                  content: "<h2>CAGL0A02112g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have asparagine-tRNA ligase activity and role in asparaginyl-tRNA aminoacylation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02112g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02112g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0A04015g').qtip({
                  content: "<h2>CAGL0A04015g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in rRNA processing and box C/D snoRNP complex, nucleolus, small-subunit processome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A04015g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A04015g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0A04653g').qtip({
                  content: "<h2>CAGL0A04653g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glutaminyl-tRNA synthase (glutamine-hydrolyzing) activity, role in glutaminyl-tRNAGln biosynthesis via transamidation, mitochondrial translation and glutamyl-tRNA(Gln) amidotransferase complex, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A04653g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A04653g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0A04829g').qtip({
                  content: "<h2>CAGL0A04829g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative hexokinase isoenzyme 2; protein differentially expressed in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A04829g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A04829g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0B00286g').qtip({
                  content: "<h2>CAGL0B00286g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-serine ammonia-lyase activity, L-threonine ammonia-lyase activity, role in L-serine catabolic process, threonine catabolic process and mitochondrial nucleoid localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B00286g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B00286g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0B00792g').qtip({
                  content: "<h2>CAGL0B00792g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA binding activity, role in regulation of translation and cytoplasmic stress granule, polysome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B00792g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B00792g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0B01507g').qtip({
                  content: "<h2>CAGL0B01507g</h2><hr><p><b>Gene name</b> : ARG8</p><p><b>Description</b> : Ortholog(s) have N2-acetyl-L-ornithine:2-oxoglutarate 5-aminotransferase activity, role in arginine biosynthetic process, arginine biosynthetic process via ornithine, ornithine biosynthetic process and mitochondrial matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B01507g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B01507g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0B01727g').qtip({
                  content: "<h2>CAGL0B01727g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have D-ribulokinase activity and role in pentose metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B01727g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B01727g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0B01881g').qtip({
                  content: "<h2>CAGL0B01881g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have tRNA (guanine-N2-)-methyltransferase activity, role in tRNA N2-guanine methylation, tRNA methylation and mitochondrion, nuclear envelope, nuclear inner membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B01881g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B01881g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0B02794g').qtip({
                  content: "<h2>CAGL0B02794g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have (S)-2-(5-amino-1-(5-phospho-D-ribosyl)imidazole-4-carboxamido)succinate AMP-lyase (fumarate-forming) activity, N6-(1,2-dicarboxyethyl)AMP AMP-lyase (fumarate-forming) activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02794g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02794g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0B02860g').qtip({
                  content: "<h2>CAGL0B02860g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in autophagy of mitochondrion, macroautophagy and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02860g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02860g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0B03619g').qtip({
                  content: "<h2>CAGL0B03619g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have endopeptidase activity, peptidase activity, serine-type endopeptidase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B03619g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B03619g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0B03663g').qtip({
                  content: "<h2>CAGL0B03663g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have citrate (Si)-synthase activity, role in citrate metabolic process and cytoplasm, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B03663g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B03663g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0B03993g').qtip({
                  content: "<h2>CAGL0B03993g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have dihydroxy-acid dehydratase activity and role in branched-chain amino acid biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B03993g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B03993g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0C01595g').qtip({
                  content: "<h2>CAGL0C01595g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glutaminase activity, imidazoleglycerol-phosphate synthase activity and role in histidine biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C01595g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C01595g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0C02739g').qtip({
                  content: "<h2>CAGL0C02739g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in mitochondrion organization, phospholipid homeostasis and integral component of mitochondrial outer membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C02739g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C02739g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0C03652g').qtip({
                  content: "<h2>CAGL0C03652g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 4-hydroxybenzoate octaprenyltransferase activity, role in ubiquinone biosynthetic process and integral component of mitochondrial membrane, mitochondrial inner membrane, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03652g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03652g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0C04279g').qtip({
                  content: "<h2>CAGL0C04279g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have dehydrodolichyl diphosphate synthase activity, prenyltransferase activity and role in dolichol biosynthetic process, endoplasmic reticulum to Golgi vesicle-mediated transport, protein glycosylation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C04279g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C04279g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0C04587g').qtip({
                  content: "<h2>CAGL0C04587g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YJR098C, C. auris B8441 : B9J08_001284, Candida tenuis NRRL Y-1498 : CANTEDRAFT_135029, Pichia stipitis Pignal : PICST_42853 and Saccharomyces cerevisiae S288C : YJR098C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C04587g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C04587g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0C04917g').qtip({
                  content: "<h2>CAGL0C04917g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have carbamoyl-phosphate synthase (glutamine-hydrolyzing) activity, role in arginine biosynthetic process and carbamoyl-phosphate synthase complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C04917g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C04917g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0C05027g').qtip({
                  content: "<h2>CAGL0C05027g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in acetate catabolic process, carnitine metabolic process, cellular respiration and cytosol, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C05027g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C05027g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0C05115g').qtip({
                  content: "<h2>CAGL0C05115g</h2><hr><p><b>Gene name</b> : ARG1</p><p><b>Description</b> : Argininosuccinate synthetase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C05115g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C05115g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0D00880g').qtip({
                  content: "<h2>CAGL0D00880g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ribonucleoprotein complex binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00880g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00880g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0D01298g').qtip({
                  content: "<h2>CAGL0D01298g</h2><hr><p><b>Gene name</b> : TKL1</p><p><b>Description</b> : Putative transketolase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D01298g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D01298g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0D01562g').qtip({
                  content: "<h2>CAGL0D01562g</h2><hr><p><b>Gene name</b> : FCY1</p><p><b>Description</b> : Ortholog(s) have cytosine deaminase activity and role in cytidine metabolic process, cytosine metabolic process, pyrimidine-containing compound salvage</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D01562g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D01562g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0D02134g').qtip({
                  content: "<h2>CAGL0D02134g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YKL133C and Saccharomyces cerevisiae S288C : YKL133C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D02134g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D02134g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0D02596g').qtip({
                  content: "<h2>CAGL0D02596g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in DNA-dependent DNA replication, double-strand break repair via break-induced replication, mitotic DNA replication initiation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D02596g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D02596g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0D04026g').qtip({
                  content: "<h2>CAGL0D04026g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 4-aminobutyrate transaminase activity, pyridoxal phosphate binding activity and role in cellular amide catabolic process, gamma-aminobutyric acid catabolic process, glutamate metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D04026g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D04026g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0D05060g').qtip({
                  content: "<h2>CAGL0D05060g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted hydrolase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D05060g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D05060g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0D05082g').qtip({
                  content: "<h2>CAGL0D05082g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D05082g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D05082g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0D06424g').qtip({
                  content: "<h2>CAGL0D06424g</h2><hr><p><b>Gene name</b> : ACO1</p><p><b>Description</b> : Putative aconitate hydratase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D06424g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D06424g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0E01155g').qtip({
                  content: "<h2>CAGL0E01155g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase I activity, role in nucleolar large rRNA transcription by RNA polymerase I, transcription by RNA polymerase I and RNA polymerase I complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01155g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01155g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0E01727g').qtip({
                  content: "<h2>CAGL0E01727g</h2><hr><p><b>Gene name</b> : YPS3</p><p><b>Description</b> : Putative aspartic protease; predicted GPI-anchor; member of a YPS gene cluster that is required for virulence in mice</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01727g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01727g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0E01771g').qtip({
                  content: "<h2>CAGL0E01771g</h2><hr><p><b>Gene name</b> : YPS5</p><p><b>Description</b> : Putative aspartic protease; predicted GPI-anchor; member of a YPS gene cluster that is required for virulence in mice; gene is downregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01771g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01771g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0E01793g').qtip({
                  content: "<h2>CAGL0E01793g</h2><hr><p><b>Gene name</b> : YPS6</p><p><b>Description</b> : Putative aspartic protease; predicted GPI-anchor; member of a YPS gene cluster that is required for virulence in mice; expression induced at high temperature</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01793g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01793g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0E01815g').qtip({
                  content: "<h2>CAGL0E01815g</h2><hr><p><b>Gene name</b> : YPS8</p><p><b>Description</b> : Putative aspartic protease; predicted GPI-anchor; member of a YPS gene cluster that is required for virulence in mice; induced in response to low pH and high temperature</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01815g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01815g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0E01837g').qtip({
                  content: "<h2>CAGL0E01837g</h2><hr><p><b>Gene name</b> : YPS9</p><p><b>Description</b> : Putative aspartic protease; predicted GPI-anchor; member of a YPS gene cluster that is required for virulence in mice; expression induced at high temperature</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01837g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01837g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0E02013g').qtip({
                  content: "<h2>CAGL0E02013g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytosolic large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E02013g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E02013g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0E02651g').qtip({
                  content: "<h2>CAGL0E02651g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted identical protein binding, serine-type endopeptidase activity and role in negative regulation of catalytic activity, proteolysis</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E02651g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E02651g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0E03520g').qtip({
                  content: "<h2>CAGL0E03520g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity and mitochondrial large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E03520g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E03520g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0E03916g').qtip({
                  content: "<h2>CAGL0E03916g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycerol kinase activity, role in glycerol metabolic process and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E03916g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E03916g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0E03938g').qtip({
                  content: "<h2>CAGL0E03938g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in maturation of LSU-rRNA and cytosolic large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E03938g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E03938g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0E04510g').qtip({
                  content: "<h2>CAGL0E04510g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phospholipase activity, role in cardiolipin metabolic process, phosphatidylethanolamine metabolic process, phospholipid metabolic process and mitochondrial matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04510g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04510g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0E04994g').qtip({
                  content: "<h2>CAGL0E04994g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity, role in cytoplasmic translation and cytosolic large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04994g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04994g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0E05148g').qtip({
                  content: "<h2>CAGL0E05148g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have alpha-mannosidase activity, role in mannose catabolic process, oligosaccharide catabolic process and Cvt complex, fungal-type vacuole membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05148g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05148g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0E05500g').qtip({
                  content: "<h2>CAGL0E05500g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase I activity, promoter-specific chromatin binding activity and role in nucleolar large rRNA transcription by RNA polymerase I, transcription by RNA polymerase I</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05500g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05500g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0E05654g').qtip({
                  content: "<h2>CAGL0E05654g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphatidylglycerol phospholipase C activity, role in cell-abiotic substrate adhesion, glycerophospholipid catabolic process, phosphatidylglycerol catabolic process and lipid droplet, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05654g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05654g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0E06380g').qtip({
                  content: "<h2>CAGL0E06380g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATP-dependent NAD(P)H-hydrate dehydratase activity and role in nicotinamide nucleotide metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E06380g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E06380g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0F00429g').qtip({
                  content: "<h2>CAGL0F00429g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have GTP diphosphatase activity, ITP diphosphatase activity, UTP diphosphatase activity, XTP diphosphatase activity, dATP pyrophosphohydrolase activity and dCTP diphosphatase activity, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00429g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00429g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0F00649g').qtip({
                  content: "<h2>CAGL0F00649g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted ATP binding, protein kinase activity, protein tyrosine kinase activity and role in protein phosphorylation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00649g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00649g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0F00715g').qtip({
                  content: "<h2>CAGL0F00715g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00715g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00715g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0F01749g').qtip({
                  content: "<h2>CAGL0F01749g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative serine hydroxymethyltransferase; protein differentially expressed in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01749g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01749g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0F02233g').qtip({
                  content: "<h2>CAGL0F02233g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have dipeptidase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F02233g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F02233g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0F02431g').qtip({
                  content: "<h2>CAGL0F02431g</h2><hr><p><b>Gene name</b> : ACO2</p><p><b>Description</b> : Ortholog(s) have role in mitochondrial translation and cytoplasm, mitochondrion, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F02431g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F02431g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0F02563g').qtip({
                  content: "<h2>CAGL0F02563g</h2><hr><p><b>Gene name</b> : HPT1</p><p><b>Description</b> : Putative hypoxanthine guanine phosphoribosyl transferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F02563g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F02563g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0F03927g').qtip({
                  content: "<h2>CAGL0F03927g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have GMP synthase (glutamine-hydrolyzing) activity and role in GMP biosynthetic process, GMP metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F03927g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F03927g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0F04411g').qtip({
                  content: "<h2>CAGL0F04411g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity, role in mitochondrial translation and mitochondrial large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04411g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04411g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0F04917g').qtip({
                  content: "<h2>CAGL0F04917g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative regulatory subunit for protein phosphatase; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04917g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04917g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0F06501g').qtip({
                  content: "<h2>CAGL0F06501g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have acetyl-CoA:L-glutamate N-acetyltransferase activity, glutamate N-acetyltransferase activity, role in ornithine biosynthetic process and mitochondrial matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F06501g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F06501g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0F08261g').qtip({
                  content: "<h2>CAGL0F08261g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have high molecular weight kininogen binding, phosphopyruvate hydratase activity, protein-glutamine gamma-glutamyltransferase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F08261g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F08261g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0G01826g').qtip({
                  content: "<h2>CAGL0G01826g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ribosomal large subunit assembly and cytosolic large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G01826g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G01826g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0G02563g').qtip({
                  content: "<h2>CAGL0G02563g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted thiol-dependent ubiquitinyl hydrolase activity and role in protein deubiquitination, ubiquitin-dependent protein catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G02563g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G02563g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0G02937g').qtip({
                  content: "<h2>CAGL0G02937g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have pyruvate decarboxylase activity and role in L-phenylalanine catabolic process, aromatic amino acid family catabolic process to alcohol via Ehrlich pathway, ethanol metabolic process, tryptophan catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G02937g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G02937g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0G03575g').qtip({
                  content: "<h2>CAGL0G03575g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted structural constituent of ribosome activity, role in translation and ribosome localization; evidence for a extended second exon by 2 amino acids</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G03575g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G03575g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0G03883g').qtip({
                  content: "<h2>CAGL0G03883g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ADP binding, ATP binding, ATPase activity, ATPase activity, coupled, chaperone binding, misfolded protein binding, unfolded protein binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G03883g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G03883g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0G05874g').qtip({
                  content: "<h2>CAGL0G05874g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-directed 5'-3' RNA polymerase activity, RNA polymerase I activity, RNA polymerase II activity, RNA polymerase III activity, RNA-directed 5'-3' RNA polymerase activity, zinc ion binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G05874g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G05874g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0G06248g').qtip({
                  content: "<h2>CAGL0G06248g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in maturation of 5.8S rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA), maturation of LSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA and LSU-rRNA), more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06248g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06248g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0G06490g').qtip({
                  content: "<h2>CAGL0G06490g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ribosome biogenesis and small-subunit processome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06490g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06490g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0G06732g').qtip({
                  content: "<h2>CAGL0G06732g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 2-isopropylmalate synthase activity, role in leucine biosynthetic process and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06732g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06732g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0G07106g').qtip({
                  content: "<h2>CAGL0G07106g</h2><hr><p><b>Gene name</b> : APT1</p><p><b>Description</b> : Putative adenine phosphoribosyltransferase; protein abundance decreased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G07106g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G07106g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0G07821g').qtip({
                  content: "<h2>CAGL0G07821g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glutaminyl-tRNA synthase (glutamine-hydrolyzing) activity, role in glutaminyl-tRNAGln biosynthesis via transamidation and glutamyl-tRNA(Gln) amidotransferase complex, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G07821g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G07821g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0G08734g').qtip({
                  content: "<h2>CAGL0G08734g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted rRNA binding, structural constituent of ribosome activity, role in translation and ribosome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G08734g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G08734g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0G09064g').qtip({
                  content: "<h2>CAGL0G09064g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in glycerol biosynthetic process and cytosol, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G09064g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G09064g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0G09130g').qtip({
                  content: "<h2>CAGL0G09130g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in maturation of LSU-rRNA, ribosomal large subunit biogenesis and cytoplasm, cytosolic large ribosomal subunit, nucleolus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G09130g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G09130g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0G09691g').qtip({
                  content: "<h2>CAGL0G09691g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have O-phospho-L-serine:2-oxoglutarate aminotransferase activity, role in L-serine biosynthetic process, purine nucleobase biosynthetic process, serine family amino acid biosynthetic process and intracellular localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G09691g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G09691g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0H00418g').qtip({
                  content: "<h2>CAGL0H00418g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00418g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00418g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0H00682g').qtip({
                  content: "<h2>CAGL0H00682g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted mannosyl-oligosaccharide glucosidase activity and role in oligosaccharide metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00682g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00682g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0H00704g').qtip({
                  content: "<h2>CAGL0H00704g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in autophagosome assembly, autophagy of mitochondrion, macroautophagy, protein localization by the Cvt pathway</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00704g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00704g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0H02101g').qtip({
                  content: "<h2>CAGL0H02101g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in RNA metabolic process and fungal biofilm matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02101g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02101g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0H02387g').qtip({
                  content: "<h2>CAGL0H02387g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative trehalose-6-phosphate synthase/phosphatase subunit; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02387g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02387g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0H02585g').qtip({
                  content: "<h2>CAGL0H02585g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glutamate decarboxylase activity and role in cellular response to oxidative stress, glutamate catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02585g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02585g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0H03993g').qtip({
                  content: "<h2>CAGL0H03993g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have citrate (Si)-synthase activity, role in acetyl-CoA catabolic process, citrate metabolic process, tricarboxylic acid cycle and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H03993g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H03993g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0H04081g').qtip({
                  content: "<h2>CAGL0H04081g</h2><hr><p><b>Gene name</b> : ERG13</p><p><b>Description</b> : 3-hydroxy-3-methylglutaryl coenzyme A synthase; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H04081g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H04081g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0H04851g').qtip({
                  content: "<h2>CAGL0H04851g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphatase activity, protein serine/threonine phosphatase activity and role in cellular protein localization, cellular sodium ion homeostasis, protein dephosphorylation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H04851g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H04851g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0H05445g').qtip({
                  content: "<h2>CAGL0H05445g</h2><hr><p><b>Gene name</b> : PGI1</p><p><b>Description</b> : Glucose-6-phosphate isomerase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H05445g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H05445g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0H05643g').qtip({
                  content: "<h2>CAGL0H05643g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity and role in maturation of SSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA)</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H05643g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H05643g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0H06545g').qtip({
                  content: "<h2>CAGL0H06545g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in autophagy of mitochondrion, mitochondria-nucleus signaling pathway and integral component of mitochondrial outer membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H06545g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H06545g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0H07051g').qtip({
                  content: "<h2>CAGL0H07051g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have asparaginase activity and role in asparagine catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H07051g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H07051g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0H07887g').qtip({
                  content: "<h2>CAGL0H07887g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphoribosylamine-glycine ligase activity, phosphoribosylformylglycinamidine cyclo-ligase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H07887g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H07887g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0H08261g').qtip({
                  content: "<h2>CAGL0H08261g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in autophagy of mitochondrion</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H08261g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H08261g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0H09064g').qtip({
                  content: "<h2>CAGL0H09064g</h2><hr><p><b>Gene name</b> : FUR1</p><p><b>Description</b> : Putative uracil phosphoribosyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H09064g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H09064g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0H09460g').qtip({
                  content: "<h2>CAGL0H09460g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have long-chain fatty acid-CoA ligase activity, medium-chain fatty acid-CoA ligase activity, very long-chain fatty acid-CoA ligase activity and role in fatty acid metabolic process, long-chain fatty acid metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H09460g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H09460g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0H10142g').qtip({
                  content: "<h2>CAGL0H10142g</h2><hr><p><b>Gene name</b> : ARO3</p><p><b>Description</b> : Putative 2-dehydro-3-deoxyphosphoheptonate aldolase; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H10142g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H10142g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0I00528g').qtip({
                  content: "<h2>CAGL0I00528g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have mRNA binding, pre-mRNA 5'-splice site binding activity and role in mRNA 5'-splice site recognition, mRNA splicing, via spliceosome, positive regulation of RNA binding</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I00528g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I00528g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0I00792g').qtip({
                  content: "<h2>CAGL0I00792g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in maturation of SSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA)</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I00792g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I00792g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0I01298g').qtip({
                  content: "<h2>CAGL0I01298g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have aminopeptidase activity, metalloaminopeptidase activity, role in cellular response to drug, chaperone-mediated protein folding, proteolysis and extracellular region, fungal-type vacuole lumen localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01298g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01298g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0I03036g').qtip({
                  content: "<h2>CAGL0I03036g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity and mitochondrial large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I03036g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I03036g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0I03080g').qtip({
                  content: "<h2>CAGL0I03080g</h2><hr><p><b>Gene name</b> : URA3</p><p><b>Description</b> : Orotidine 5'-phosphate decarboxylase, catalyzes a step in pyrimidine biosynthesis; protein abundance decreased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I03080g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I03080g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0I03234g').qtip({
                  content: "<h2>CAGL0I03234g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA binding, U3 snoRNA binding, U4 snRNA binding activity and role in mRNA splicing, via spliceosome, maturation of SSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA)</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I03234g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I03234g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0I04048g').qtip({
                  content: "<h2>CAGL0I04048g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have fructose 1,6-bisphosphate 1-phosphatase activity, role in carbon utilization, cellular response to glucose starvation and intracellular localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04048g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04048g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0I04444g').qtip({
                  content: "<h2>CAGL0I04444g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphoribosylaminoimidazolesuccinocarboxamide synthase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04444g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04444g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0I04752g').qtip({
                  content: "<h2>CAGL0I04752g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphatidate cytidylyltransferase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04752g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04752g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0I04972g').qtip({
                  content: "<h2>CAGL0I04972g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in telomere maintenance via recombination and Ino80 complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04972g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04972g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0I06006g').qtip({
                  content: "<h2>CAGL0I06006g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase I activity, role in nucleolar large rRNA transcription by RNA polymerase I, transcription elongation from RNA polymerase I promoter and RNA polymerase I complex, nucleolus, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I06006g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I06006g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0I06050g').qtip({
                  content: "<h2>CAGL0I06050g</h2><hr><p><b>Gene name</b> : INO1</p><p><b>Description</b> : Putative inositol 1-phosphate synthase; regulated by the transcriptional activators Ino2p and Ino4p; protein differentially expressed in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I06050g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I06050g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0I07887g').qtip({
                  content: "<h2>CAGL0I07887g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have protein binding, bridging activity and role in cellular protein-containing complex localization, ubiquitin-dependent ERAD pathway, vesicle organization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I07887g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I07887g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0I08305g').qtip({
                  content: "<h2>CAGL0I08305g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have carnitine O-acetyltransferase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I08305g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I08305g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0I08987g').qtip({
                  content: "<h2>CAGL0I08987g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted argininosuccinate lyase activity and role in arginine biosynthetic process via ornithine</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I08987g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I08987g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0I09009g').qtip({
                  content: "<h2>CAGL0I09009g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have histidinol-phosphatase activity and role in histidine biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09009g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09009g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0I09284g').qtip({
                  content: "<h2>CAGL0I09284g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycine hydroxymethyltransferase activity, role in one-carbon metabolic process and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09284g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09284g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0I09790g').qtip({
                  content: "<h2>CAGL0I09790g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in endonucleolytic cleavage in 5'-ETS of tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA and LSU-rRNA), more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09790g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09790g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0I10406g').qtip({
                  content: "<h2>CAGL0I10406g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in establishment of cell polarity, proteasomal ubiquitin-independent protein catabolic process, proteasome core complex assembly, proteasome-mediated ubiquitin-dependent protein catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10406g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10406g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0I10670g').qtip({
                  content: "<h2>CAGL0I10670g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10670g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10670g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0I10791g').qtip({
                  content: "<h2>CAGL0I10791g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ornithine carbamoyltransferase activity, role in arginine biosynthetic process, arginine biosynthetic process via ornithine, asexual sporulation and intracellular, mitochondrial matrix, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10791g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10791g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0J00473g').qtip({
                  content: "<h2>CAGL0J00473g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have large ribosomal subunit rRNA binding, proteasome binding, protein binding, bridging, rRNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J00473g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J00473g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0J01045g').qtip({
                  content: "<h2>CAGL0J01045g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA helicase activity, RNA-dependent ATPase activity, U3 snoRNA binding, box C/D snoRNA binding activity, role in rRNA processing and small-subunit processome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J01045g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J01045g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0J01848g').qtip({
                  content: "<h2>CAGL0J01848g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase I activity, role in nucleolar large rRNA transcription by RNA polymerase I, transcription by RNA polymerase I and RNA polymerase I complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J01848g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J01848g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0J03234g').qtip({
                  content: "<h2>CAGL0J03234g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in maturation of SSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA)</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03234g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03234g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0J03762g').qtip({
                  content: "<h2>CAGL0J03762g</h2><hr><p><b>Gene name</b> : MET7</p><p><b>Description</b> : Ortholog(s) have tetrahydrofolylpolyglutamate synthase activity, role in one-carbon metabolic process and cytoplasm, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03762g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03762g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0J03916g').qtip({
                  content: "<h2>CAGL0J03916g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have lipid binding, oxysterol binding, sterol transfer activity and role in endocytosis, exocytosis, maintenance of cell polarity, piecemeal microautophagy of the nucleus, sterol transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03916g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03916g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0J04070g').qtip({
                  content: "<h2>CAGL0J04070g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase I activity, RNA polymerase II activity, RNA polymerase III activity, RNA-directed 5'-3' RNA polymerase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04070g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04070g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0J04950g').qtip({
                  content: "<h2>CAGL0J04950g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in mitotic recombination and cellular bud localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04950g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04950g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0J05082g').qtip({
                  content: "<h2>CAGL0J05082g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted ATP binding, protein kinase activity, protein tyrosine kinase activity and role in protein phosphorylation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J05082g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J05082g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0J05258g').qtip({
                  content: "<h2>CAGL0J05258g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity and mitochondrial large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J05258g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J05258g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0J05478g').qtip({
                  content: "<h2>CAGL0J05478g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity and mitochondrial small ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J05478g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J05478g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0J05984g').qtip({
                  content: "<h2>CAGL0J05984g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have adenine deaminase activity and role in adenine catabolic process, cell-abiotic substrate adhesion, hypoxanthine salvage, purine-containing compound salvage, regulation of G2/M transition of mitotic cell cycle</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J05984g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J05984g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0J07766g').qtip({
                  content: "<h2>CAGL0J07766g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase I activity and role in nucleolar large rRNA transcription by RNA polymerase I, transcription by RNA polymerase I, transcription elongation from RNA polymerase I promoter</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J07766g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J07766g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0J08547g').qtip({
                  content: "<h2>CAGL0J08547g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J08547g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J08547g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0J08679g').qtip({
                  content: "<h2>CAGL0J08679g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cytoplasmic translation and cytoplasm localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J08679g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J08679g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0J09240g').qtip({
                  content: "<h2>CAGL0J09240g</h2><hr><p><b>Gene name</b> : LYS21</p><p><b>Description</b> : Homocitrate synthase; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09240g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09240g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0J09614g').qtip({
                  content: "<h2>CAGL0J09614g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have box H/ACA snoRNA binding activity, role in cleavage involved in rRNA processing, rRNA pseudouridine synthesis, snRNA pseudouridine synthesis and box H/ACA snoRNP complex, nucleolus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09614g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09614g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0J09724g').qtip({
                  content: "<h2>CAGL0J09724g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity and mitochondrial large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09724g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09724g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0J10010g').qtip({
                  content: "<h2>CAGL0J10010g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have tRNA (adenine-N1-)-methyltransferase activity, role in tRNA methylation and nucleus, tRNA (m1A) methyltransferase complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J10010g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J10010g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0J10164g').qtip({
                  content: "<h2>CAGL0J10164g</h2><hr><p><b>Gene name</b> : RPL16A</p><p><b>Description</b> : Putative ribosomal protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J10164g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J10164g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0J10824g').qtip({
                  content: "<h2>CAGL0J10824g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have lanosterol synthase activity, role in ergosterol biosynthetic process and lipid droplet localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J10824g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J10824g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0J11858g').qtip({
                  content: "<h2>CAGL0J11858g</h2><hr><p><b>Gene name</b> : RML2</p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity, role in mitochondrial translation and mitochondrial large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J11858g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J11858g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0K02233g').qtip({
                  content: "<h2>CAGL0K02233g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in maturation of 5.8S rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA), maturation of LSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA and LSU-rRNA), more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K02233g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K02233g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0K04103g').qtip({
                  content: "<h2>CAGL0K04103g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have dolichyldiphosphatase activity, role in lipid biosynthetic process, protein N-linked glycosylation and integral component of endoplasmic reticulum membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04103g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04103g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0K04279g').qtip({
                  content: "<h2>CAGL0K04279g</h2><hr><p><b>Gene name</b> : SCM4</p><p><b>Description</b> : Ortholog of S. cerevisiae : SCM4 and Saccharomyces cerevisiae S288C : YGR049W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04279g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04279g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0K04301g').qtip({
                  content: "<h2>CAGL0K04301g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative mitochondrial Ser/Thr protein kinase; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04301g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04301g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0K04499g').qtip({
                  content: "<h2>CAGL0K04499g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphoribosylformylglycinamidine synthase activity and role in purine nucleotide biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04499g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04499g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0K05357g').qtip({
                  content: "<h2>CAGL0K05357g</h2><hr><p><b>Gene name</b> : GLN1</p><p><b>Description</b> : Ortholog(s) have glutamate-ammonia ligase activity, role in ammonia assimilation cycle, glutamine biosynthetic process, nitrogen compound metabolic process and nuclear periphery localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K05357g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K05357g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0K06567g').qtip({
                  content: "<h2>CAGL0K06567g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have preribosome, large subunit precursor localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K06567g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K06567g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0K08536g').qtip({
                  content: "<h2>CAGL0K08536g</h2><hr><p><b>Gene name</b> : APE1</p><p><b>Description</b> : Vacuolar aminopeptidase I</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08536g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08536g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0K10340g').qtip({
                  content: "<h2>CAGL0K10340g</h2><hr><p><b>Gene name</b> : ADE2</p><p><b>Description</b> : Putative phosphoribosylaminoimidazole carboxylase; aminoimidazole ribonucleotide (AIR) carboxylase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10340g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10340g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0K10428g').qtip({
                  content: "<h2>CAGL0K10428g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have enzyme inhibitor activity and role in negative regulation of glycogen catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10428g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10428g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0K12518g').qtip({
                  content: "<h2>CAGL0K12518g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have alanine-glyoxylate transaminase activity, role in glycine biosynthetic process, by transamination of glyoxylate and fungal biofilm matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K12518g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K12518g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0L00759g').qtip({
                  content: "<h2>CAGL0L00759g</h2><hr><p><b>Gene name</b> : HIS1</p><p><b>Description</b> : ATP phosphoribosyltransferase; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L00759g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L00759g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0L00979g').qtip({
                  content: "<h2>CAGL0L00979g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in endoplasmic reticulum to Golgi vesicle-mediated transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L00979g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L00979g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0L02937g').qtip({
                  content: "<h2>CAGL0L02937g</h2><hr><p><b>Gene name</b> : HIS3</p><p><b>Description</b> : Putative imidazoleglycerol-phosphate dehydratase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L02937g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L02937g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0L03806g').qtip({
                  content: "<h2>CAGL0L03806g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have rRNA binding activity and role in actomyosin contractile ring assembly, maturation of LSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA), ribosomal large subunit biogenesis</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03806g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03806g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0L03982g').qtip({
                  content: "<h2>CAGL0L03982g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have malate synthase activity, role in acetate catabolic process, carbon utilization, fatty acid catabolic process, glyoxylate cycle and cytosol, peroxisomal matrix, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03982g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03982g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0L04070g').qtip({
                  content: "<h2>CAGL0L04070g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity and mitochondrial large ribosomal subunit, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L04070g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L04070g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0L04664g').qtip({
                  content: "<h2>CAGL0L04664g</h2><hr><p><b>Gene name</b> : HEM15</p><p><b>Description</b> : Ortholog(s) have 2 iron, 2 sulfur cluster binding, ferrochelatase activity, role in heme biosynthetic process and mitochondrial inner membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L04664g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L04664g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0L05500g').qtip({
                  content: "<h2>CAGL0L05500g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ribosomal large subunit biogenesis and cytoplasm, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L05500g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L05500g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0L08114g').qtip({
                  content: "<h2>CAGL0L08114g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted structural constituent of ribosome activity, role in translation and ribosome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L08114g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L08114g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0L08118g').qtip({
                  content: "<h2>CAGL0L08118g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have mRNA binding activity, role in maturation of SSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA), ribosomal small subunit assembly and small-subunit processome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L08118g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L08118g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0L08184g').qtip({
                  content: "<h2>CAGL0L08184g</h2><hr><p><b>Gene name</b> : FEN1</p><p><b>Description</b> : Predicted fatty acid elongase with role in sphingolipid biosynthetic process; mutants show reduced sensitivity to caspofungin and increased sensitivity to micafungin</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L08184g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L08184g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0L08426g').qtip({
                  content: "<h2>CAGL0L08426g</h2><hr><p><b>Gene name</b> : SUE1</p><p><b>Description</b> : Ortholog(s) have role in protein catabolic process and mitochondrial envelope localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L08426g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L08426g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0L08756g').qtip({
                  content: "<h2>CAGL0L08756g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in maturation of SSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA) and nucleus, preribosome, small subunit precursor localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L08756g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L08756g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0L09086g').qtip({
                  content: "<h2>CAGL0L09086g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 2-methylcitrate synthase activity, citrate (Si)-synthase activity, role in propionate catabolic process, 2-methylcitrate cycle, tricarboxylic acid cycle and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L09086g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L09086g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0L09108g').qtip({
                  content: "<h2>CAGL0L09108g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in propionate metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L09108g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L09108g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0L09273g').qtip({
                  content: "<h2>CAGL0L09273g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have isocitrate lyase activity, methylisocitrate lyase activity, role in propionate catabolic process, 2-methylcitrate cycle and mitochondrial matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L09273g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L09273g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0L10582g').qtip({
                  content: "<h2>CAGL0L10582g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted mannosyl-oligosaccharide glucosidase activity and role in oligosaccharide metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10582g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10582g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0L10890g').qtip({
                  content: "<h2>CAGL0L10890g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cellular response to biotic stimulus, cellular response to starvation, chromosome organization and filamentous growth, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10890g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10890g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0L11000g').qtip({
                  content: "<h2>CAGL0L11000g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have uroporphyrinogen-III synthase activity and role in heme biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L11000g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L11000g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0L11902g').qtip({
                  content: "<h2>CAGL0L11902g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have adenylate kinase activity, nucleoside triphosphate adenylate kinase activity, role in nucleotide metabolic process and mitochondrial inner membrane, mitochondrial matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L11902g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L11902g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0M02167g').qtip({
                  content: "<h2>CAGL0M02167g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : PRM4 and Saccharomyces cerevisiae S288C : YPL156C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M02167g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M02167g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0M02915g').qtip({
                  content: "<h2>CAGL0M02915g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in autophagy of peroxisome and peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M02915g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M02915g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0M05775g').qtip({
                  content: "<h2>CAGL0M05775g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted RNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M05775g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M05775g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0M09669g').qtip({
                  content: "<h2>CAGL0M09669g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have calcium-dependent cysteine-type endopeptidase activity, cysteine-type endopeptidase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M09669g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M09669g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0M10241g').qtip({
                  content: "<h2>CAGL0M10241g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA binding activity, role in macroautophagy and cytosolic large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M10241g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M10241g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0M11110g').qtip({
                  content: "<h2>CAGL0M11110g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in rRNA processing and preribosome, large subunit precursor localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M11110g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M11110g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.$('#CAGL0M13717g').qtip({
                  content: "<h2>CAGL0M13717g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have amidophosphoribosyltransferase activity and role in 'de novo' IMP biosynthetic process, adenine metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M13717g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M13717g'  target='_blank'> Link to GRYC</a>",
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
  });
cy.fit(100);
         
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
         var id = allNodes[i].data("id");
         var newCol = cy.nodes("[id = '" + id + "']").data('faveColorLow');
         cy.nodes("[id = '" + id + "']").style('background-color', newCol);
         }
         };
         
         document.getElementById('High').onclick = function() {
         var allNodes = cy.$('node');
         for( var i = 0; i < allNodes.length; i++ ){
         var id = allNodes[i].data("id");
         var newCol = cy.nodes("[id = '" + id + "']").data('faveColorHigh');
         cy.nodes("[id = '" + id + "']").style('background-color', newCol);
         }
         };
         
         var options = '';
         var allNodes = cy.$('node');
         for (var i = 0; i < allNodes.length; i++) {
          var id = allNodes[i].data('id');
          var nameGene = allNodes[i].data('gene');
          options += '<option value="' + id + '">' + nameGene + '</option>';
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
         cy.nodes("[id = '" + id + "']").style('border-color', '#595959');
         }
         cy.nodes('#' + document.getElementById('gene').value).style('border-color', '#fbff42');
         };
         
         document.getElementById('Clear').onclick = function() {
         cy.fit(100);
         var allNodes = cy.$('node');
         for (var i = 0; i < allNodes.length; i++) {
         var id = allNodes[i].data('id');
         cy.nodes("[id = '" + id + "']").style('border-color', '#595959');
    }
    document.getElementById('gene').value = '';
  };
         
  }); // on dom ready
