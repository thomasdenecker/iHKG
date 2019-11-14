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
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A00979g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytosolic large ribosomal subunit, hyphal cell wall, yeast-form cell wall localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A00979g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A00979g'  target='_blank'> Link to GRYC</a>",
                  x : 0.551460833584232,
                  y : 2.30467265282647
                  },
                  position : {
                  'x' : 5.51460833584232,
                  'y' : 23.0467265282647
                  },
  },
{
                  data: {
                  id: 'CAGL0A02002g',
                  name: 'CAGL0A02002g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A02002g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YOL024W and Saccharomyces cerevisiae S288C : YOL024W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02002g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02002g'  target='_blank'> Link to GRYC</a>",
                  x : 2.33106952786909,
                  y : -11.3218007701807
                  },
                  position : {
                  'x' : 23.3106952786909,
                  'y' : -113.218007701807
                  },
  },
{
                  data: {
                  id: 'CAGL0A02112g',
                  name: 'CAGL0A02112g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A02112g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have asparagine-tRNA ligase activity and role in asparaginyl-tRNA aminoacylation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02112g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02112g'  target='_blank'> Link to GRYC</a>",
                  x : 0.765374567437942,
                  y : 1.98113580658619
                  },
                  position : {
                  'x' : 7.65374567437942,
                  'y' : 19.8113580658619
                  },
  },
{
                  data: {
                  id: 'CAGL0A04015g',
                  name: 'CAGL0A04015g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A04015g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in rRNA processing and box C/D snoRNP complex, nucleolus, small-subunit processome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A04015g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A04015g'  target='_blank'> Link to GRYC</a>",
                  x : 0.419441267196794,
                  y : 1.62489778950372
                  },
                  position : {
                  'x' : 4.19441267196794,
                  'y' : 16.2489778950372
                  },
  },
{
                  data: {
                  id: 'CAGL0A04653g',
                  name: 'CAGL0A04653g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A04653g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glutaminyl-tRNA synthase (glutamine-hydrolyzing) activity, role in glutaminyl-tRNAGln biosynthesis via transamidation, mitochondrial translation and glutamyl-tRNA(Gln) amidotransferase complex, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A04653g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A04653g'  target='_blank'> Link to GRYC</a>",
                  x : -5.60836432065723,
                  y : -5.05332733120497
                  },
                  position : {
                  'x' : -56.0836432065722,
                  'y' : -50.5332733120497
                  },
  },
{
                  data: {
                  id: 'CAGL0A04829g',
                  name: 'CAGL0A04829g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A04829g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative hexokinase isoenzyme 2; protein differentially expressed in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A04829g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A04829g'  target='_blank'> Link to GRYC</a>",
                  x : -2.40934907642371,
                  y : -11.3437128484354
                  },
                  position : {
                  'x' : -24.0934907642371,
                  'y' : -113.437128484354
                  },
  },
{
                  data: {
                  id: 'CAGL0B00286g',
                  name: 'CAGL0B00286g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B00286g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-serine ammonia-lyase activity, L-threonine ammonia-lyase activity, role in L-serine catabolic process, threonine catabolic process and mitochondrial nucleoid localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B00286g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B00286g'  target='_blank'> Link to GRYC</a>",
                  x : -0.0158304288598758,
                  y : 2.52427680900159
                  },
                  position : {
                  'x' : -0.158304288598758,
                  'y' : 25.2427680900159
                  },
  },
{
                  data: {
                  id: 'CAGL0B00792g',
                  name: 'CAGL0B00792g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B00792g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA binding activity, role in regulation of translation and cytoplasmic stress granule, polysome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B00792g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B00792g'  target='_blank'> Link to GRYC</a>",
                  x : 0.172882125062718,
                  y : 3.0415062572517
                  },
                  position : {
                  'x' : 1.72882125062718,
                  'y' : 30.415062572517
                  },
  },
{
                  data: {
                  id: 'CAGL0B01507g',
                  name: 'CAGL0B01507g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B01507g</h2><hr><p><b>Gene name</b> : ARG8</p><p><b>Description</b> : Ortholog(s) have N2-acetyl-L-ornithine:2-oxoglutarate 5-aminotransferase activity, role in arginine biosynthetic process, arginine biosynthetic process via ornithine, ornithine biosynthetic process and mitochondrial matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B01507g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B01507g'  target='_blank'> Link to GRYC</a>",
                  x : -1.30816118547863,
                  y : 0.928622051955307
                  },
                  position : {
                  'x' : -13.0816118547863,
                  'y' : 9.28622051955307
                  },
  },
{
                  data: {
                  id: 'CAGL0B01727g',
                  name: 'CAGL0B01727g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B01727g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have D-ribulokinase activity and role in pentose metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B01727g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B01727g'  target='_blank'> Link to GRYC</a>",
                  x : 0.293905849601131,
                  y : -11.2550733112414
                  },
                  position : {
                  'x' : 2.93905849601131,
                  'y' : -112.550733112414
                  },
  },
{
                  data: {
                  id: 'CAGL0B01881g',
                  name: 'CAGL0B01881g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B01881g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have tRNA (guanine-N2-)-methyltransferase activity, role in tRNA N2-guanine methylation, tRNA methylation and mitochondrion, nuclear envelope, nuclear inner membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B01881g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B01881g'  target='_blank'> Link to GRYC</a>",
                  x : 0.469352475604671,
                  y : 1.90663190384154
                  },
                  position : {
                  'x' : 4.69352475604671,
                  'y' : 19.0663190384154
                  },
  },
{
                  data: {
                  id: 'CAGL0B02794g',
                  name: 'CAGL0B02794g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B02794g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have (S)-2-(5-amino-1-(5-phospho-D-ribosyl)imidazole-4-carboxamido)succinate AMP-lyase (fumarate-forming) activity, N6-(1,2-dicarboxyethyl)AMP AMP-lyase (fumarate-forming) activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02794g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02794g'  target='_blank'> Link to GRYC</a>",
                  x : -1.52622349585999,
                  y : -5.2567738121616
                  },
                  position : {
                  'x' : -15.2622349585999,
                  'y' : -52.567738121616
                  },
  },
{
                  data: {
                  id: 'CAGL0B02860g',
                  name: 'CAGL0B02860g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B02860g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in autophagy of mitochondrion, macroautophagy and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02860g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02860g'  target='_blank'> Link to GRYC</a>",
                  x : -1.90230644578178,
                  y : -10.2624840863196
                  },
                  position : {
                  'x' : -19.0230644578178,
                  'y' : -102.624840863196
                  },
  },
{
                  data: {
                  id: 'CAGL0B03619g',
                  name: 'CAGL0B03619g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B03619g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have endopeptidase activity, peptidase activity, serine-type endopeptidase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B03619g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B03619g'  target='_blank'> Link to GRYC</a>",
                  x : -1.60672053186432,
                  y : -10.7170956664723
                  },
                  position : {
                  'x' : -16.0672053186432,
                  'y' : -107.170956664723
                  },
  },
{
                  data: {
                  id: 'CAGL0B03663g',
                  name: 'CAGL0B03663g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B03663g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have citrate (Si)-synthase activity, role in citrate metabolic process and cytoplasm, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B03663g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B03663g'  target='_blank'> Link to GRYC</a>",
                  x : 5.74257342394715,
                  y : 1.99831022260831
                  },
                  position : {
                  'x' : 57.4257342394716,
                  'y' : 19.9831022260831
                  },
  },
{
                  data: {
                  id: 'CAGL0B03993g',
                  name: 'CAGL0B03993g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B03993g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have dihydroxy-acid dehydratase activity and role in branched-chain amino acid biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B03993g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B03993g'  target='_blank'> Link to GRYC</a>",
                  x : -1.89671213634366,
                  y : 0.345519110920568
                  },
                  position : {
                  'x' : -18.9671213634366,
                  'y' : 3.45519110920568
                  },
  },
{
                  data: {
                  id: 'CAGL0C01595g',
                  name: 'CAGL0C01595g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C01595g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glutaminase activity, imidazoleglycerol-phosphate synthase activity and role in histidine biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C01595g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C01595g'  target='_blank'> Link to GRYC</a>",
                  x : -5.81335355966154,
                  y : -5.3695362976511
                  },
                  position : {
                  'x' : -58.1335355966154,
                  'y' : -53.695362976511
                  },
  },
{
                  data: {
                  id: 'CAGL0C02739g',
                  name: 'CAGL0C02739g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C02739g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in mitochondrion organization, phospholipid homeostasis and integral component of mitochondrial outer membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C02739g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C02739g'  target='_blank'> Link to GRYC</a>",
                  x : -2.31526130395448,
                  y : -10.0724143970876
                  },
                  position : {
                  'x' : -23.1526130395448,
                  'y' : -100.724143970876
                  },
  },
{
                  data: {
                  id: 'CAGL0C03652g',
                  name: 'CAGL0C03652g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C03652g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 4-hydroxybenzoate octaprenyltransferase activity, role in ubiquinone biosynthetic process and integral component of mitochondrial membrane, mitochondrial inner membrane, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03652g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03652g'  target='_blank'> Link to GRYC</a>",
                  x : 3.35589112556899,
                  y : 1.46851459369895
                  },
                  position : {
                  'x' : 33.5589112556899,
                  'y' : 14.6851459369895
                  },
  },
{
                  data: {
                  id: 'CAGL0C04279g',
                  name: 'CAGL0C04279g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C04279g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have dehydrodolichyl diphosphate synthase activity, prenyltransferase activity and role in dolichol biosynthetic process, endoplasmic reticulum to Golgi vesicle-mediated transport, protein glycosylation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C04279g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C04279g'  target='_blank'> Link to GRYC</a>",
                  x : -3.10736412178796,
                  y : -1.29454110197128
                  },
                  position : {
                  'x' : -31.0736412178796,
                  'y' : -12.9454110197128
                  },
  },
{
                  data: {
                  id: 'CAGL0C04587g',
                  name: 'CAGL0C04587g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C04587g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YJR098C, C. auris B8441 : B9J08_001284, Candida tenuis NRRL Y-1498 : CANTEDRAFT_135029, Pichia stipitis Pignal : PICST_42853 and Saccharomyces cerevisiae S288C : YJR098C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C04587g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C04587g'  target='_blank'> Link to GRYC</a>",
                  x : -2.26930132972538,
                  y : -9.66947972069068
                  },
                  position : {
                  'x' : -22.6930132972538,
                  'y' : -96.6947972069068
                  },
  },
{
                  data: {
                  id: 'CAGL0C04917g',
                  name: 'CAGL0C04917g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C04917g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have carbamoyl-phosphate synthase (glutamine-hydrolyzing) activity, role in arginine biosynthetic process and carbamoyl-phosphate synthase complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C04917g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C04917g'  target='_blank'> Link to GRYC</a>",
                  x : -1.28384911212067,
                  y : 2.42612190878909
                  },
                  position : {
                  'x' : -12.8384911212067,
                  'y' : 24.2612190878909
                  },
  },
{
                  data: {
                  id: 'CAGL0C05027g',
                  name: 'CAGL0C05027g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C05027g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in acetate catabolic process, carnitine metabolic process, cellular respiration and cytosol, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C05027g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C05027g'  target='_blank'> Link to GRYC</a>",
                  x : -4.22990737630185,
                  y : -8.0844877410369
                  },
                  position : {
                  'x' : -42.2990737630185,
                  'y' : -80.844877410369
                  },
  },
{
                  data: {
                  id: 'CAGL0C05115g',
                  name: 'CAGL0C05115g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0C05115g</h2><hr><p><b>Gene name</b> : ARG1</p><p><b>Description</b> : Argininosuccinate synthetase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C05115g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C05115g'  target='_blank'> Link to GRYC</a>",
                  x : -1.91470648038446,
                  y : -0.926297946322347
                  },
                  position : {
                  'x' : -19.1470648038446,
                  'y' : -9.26297946322347
                  },
  },
{
                  data: {
                  id: 'CAGL0D00880g',
                  name: 'CAGL0D00880g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D00880g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ribonucleoprotein complex binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00880g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00880g'  target='_blank'> Link to GRYC</a>",
                  x : 1.08069926769902,
                  y : 3.13631370079062
                  },
                  position : {
                  'x' : 10.8069926769902,
                  'y' : 31.3631370079062
                  },
  },
{
                  data: {
                  id: 'CAGL0D01298g',
                  name: 'CAGL0D01298g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D01298g</h2><hr><p><b>Gene name</b> : TKL1</p><p><b>Description</b> : Putative transketolase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D01298g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D01298g'  target='_blank'> Link to GRYC</a>",
                  x : -1.31760233225616,
                  y : -10.709884541285
                  },
                  position : {
                  'x' : -13.1760233225616,
                  'y' : -107.09884541285
                  },
  },
{
                  data: {
                  id: 'CAGL0D01562g',
                  name: 'CAGL0D01562g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#ffffff',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D01562g</h2><hr><p><b>Gene name</b> : FCY1</p><p><b>Description</b> : Ortholog(s) have cytosine deaminase activity and role in cytidine metabolic process, cytosine metabolic process, pyrimidine-containing compound salvage</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D01562g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D01562g'  target='_blank'> Link to GRYC</a>",
                  x : -0.961835941296415,
                  y : 4.26466238688301
                  },
                  position : {
                  'x' : -9.61835941296415,
                  'y' : 42.6466238688301
                  },
  },
{
                  data: {
                  id: 'CAGL0D02134g',
                  name: 'CAGL0D02134g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D02134g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YKL133C and Saccharomyces cerevisiae S288C : YKL133C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D02134g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D02134g'  target='_blank'> Link to GRYC</a>",
                  x : -2.54076370342427,
                  y : -9.13951748994451
                  },
                  position : {
                  'x' : -25.4076370342427,
                  'y' : -91.3951748994451
                  },
  },
{
                  data: {
                  id: 'CAGL0D02596g',
                  name: 'CAGL0D02596g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D02596g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in DNA-dependent DNA replication, double-strand break repair via break-induced replication, mitotic DNA replication initiation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D02596g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D02596g'  target='_blank'> Link to GRYC</a>",
                  x : 3.64547091961704,
                  y : 2.3971510244957
                  },
                  position : {
                  'x' : 36.4547091961704,
                  'y' : 23.971510244957
                  },
  },
{
                  data: {
                  id: 'CAGL0D04026g',
                  name: 'CAGL0D04026g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D04026g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 4-aminobutyrate transaminase activity, pyridoxal phosphate binding activity and role in cellular amide catabolic process, gamma-aminobutyric acid catabolic process, glutamate metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D04026g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D04026g'  target='_blank'> Link to GRYC</a>",
                  x : -1.40596410033542,
                  y : -9.65975403347223
                  },
                  position : {
                  'x' : -14.0596410033542,
                  'y' : -96.5975403347223
                  },
  },
{
                  data: {
                  id: 'CAGL0D05060g',
                  name: 'CAGL0D05060g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D05060g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted hydrolase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D05060g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D05060g'  target='_blank'> Link to GRYC</a>",
                  x : -0.199772694963311,
                  y : 2.04557687537471
                  },
                  position : {
                  'x' : -1.99772694963311,
                  'y' : 20.4557687537471
                  },
  },
{
                  data: {
                  id: 'CAGL0D05082g',
                  name: 'CAGL0D05082g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D05082g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D05082g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D05082g'  target='_blank'> Link to GRYC</a>",
                  x : -1.16384506083563,
                  y : -11.4602962188574
                  },
                  position : {
                  'x' : -11.6384506083563,
                  'y' : -114.602962188574
                  },
  },
{
                  data: {
                  id: 'CAGL0D06424g',
                  name: 'CAGL0D06424g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0D06424g</h2><hr><p><b>Gene name</b> : ACO1</p><p><b>Description</b> : Putative aconitate hydratase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D06424g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D06424g'  target='_blank'> Link to GRYC</a>",
                  x : -7.20454039626133,
                  y : 0.313672292430024
                  },
                  position : {
                  'x' : -72.0454039626133,
                  'y' : 3.13672292430025
                  },
  },
{
                  data: {
                  id: 'CAGL0E01155g',
                  name: 'CAGL0E01155g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E01155g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase I activity, role in nucleolar large rRNA transcription by RNA polymerase I, transcription by RNA polymerase I and RNA polymerase I complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01155g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01155g'  target='_blank'> Link to GRYC</a>",
                  x : 1.76000940891807,
                  y : 3.52478453146243
                  },
                  position : {
                  'x' : 17.6000940891807,
                  'y' : 35.2478453146243
                  },
  },
{
                  data: {
                  id: 'CAGL0E01727g',
                  name: 'CAGL0E01727g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffffff',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E01727g</h2><hr><p><b>Gene name</b> : YPS3</p><p><b>Description</b> : Putative aspartic protease; predicted GPI-anchor; member of a YPS gene cluster that is required for virulence in mice</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01727g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01727g'  target='_blank'> Link to GRYC</a>",
                  x : 9.97798727882366,
                  y : -7.24929306673582
                  },
                  position : {
                  'x' : 99.7798727882366,
                  'y' : -72.4929306673582
                  },
  },
{
                  data: {
                  id: 'CAGL0E01771g',
                  name: 'CAGL0E01771g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E01771g</h2><hr><p><b>Gene name</b> : YPS5</p><p><b>Description</b> : Putative aspartic protease; predicted GPI-anchor; member of a YPS gene cluster that is required for virulence in mice; gene is downregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01771g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01771g'  target='_blank'> Link to GRYC</a>",
                  x : -0.890658134786914,
                  y : 1.43768694340795
                  },
                  position : {
                  'x' : -8.90658134786914,
                  'y' : 14.3768694340795
                  },
  },
{
                  data: {
                  id: 'CAGL0E01793g',
                  name: 'CAGL0E01793g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E01793g</h2><hr><p><b>Gene name</b> : YPS6</p><p><b>Description</b> : Putative aspartic protease; predicted GPI-anchor; member of a YPS gene cluster that is required for virulence in mice; expression induced at high temperature</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01793g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01793g'  target='_blank'> Link to GRYC</a>",
                  x : -0.760127157613425,
                  y : -12.6910741771273
                  },
                  position : {
                  'x' : -7.60127157613425,
                  'y' : -126.910741771273
                  },
  },
{
                  data: {
                  id: 'CAGL0E01815g',
                  name: 'CAGL0E01815g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E01815g</h2><hr><p><b>Gene name</b> : YPS8</p><p><b>Description</b> : Putative aspartic protease; predicted GPI-anchor; member of a YPS gene cluster that is required for virulence in mice; induced in response to low pH and high temperature</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01815g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01815g'  target='_blank'> Link to GRYC</a>",
                  x : -2.42329397754731,
                  y : -8.88740754831658
                  },
                  position : {
                  'x' : -24.2329397754731,
                  'y' : -88.8740754831658
                  },
  },
{
                  data: {
                  id: 'CAGL0E01837g',
                  name: 'CAGL0E01837g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E01837g</h2><hr><p><b>Gene name</b> : YPS9</p><p><b>Description</b> : Putative aspartic protease; predicted GPI-anchor; member of a YPS gene cluster that is required for virulence in mice; expression induced at high temperature</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01837g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01837g'  target='_blank'> Link to GRYC</a>",
                  x : -6.32256914611752,
                  y : -7.05135110337321
                  },
                  position : {
                  'x' : -63.2256914611752,
                  'y' : -70.5135110337321
                  },
  },
{
                  data: {
                  id: 'CAGL0E02013g',
                  name: 'CAGL0E02013g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E02013g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytosolic large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E02013g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E02013g'  target='_blank'> Link to GRYC</a>",
                  x : 0.355286708277312,
                  y : 2.88328949210357
                  },
                  position : {
                  'x' : 3.55286708277312,
                  'y' : 28.8328949210357
                  },
  },
{
                  data: {
                  id: 'CAGL0E02651g',
                  name: 'CAGL0E02651g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E02651g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted identical protein binding, serine-type endopeptidase activity and role in negative regulation of catalytic activity, proteolysis</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E02651g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E02651g'  target='_blank'> Link to GRYC</a>",
                  x : -2.69529835727717,
                  y : -9.28093962235793
                  },
                  position : {
                  'x' : -26.9529835727717,
                  'y' : -92.8093962235793
                  },
  },
{
                  data: {
                  id: 'CAGL0E03520g',
                  name: 'CAGL0E03520g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E03520g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity and mitochondrial large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E03520g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E03520g'  target='_blank'> Link to GRYC</a>",
                  x : -5.47789003023727,
                  y : -3.45277426114536
                  },
                  position : {
                  'x' : -54.7789003023727,
                  'y' : -34.5277426114536
                  },
  },
{
                  data: {
                  id: 'CAGL0E03916g',
                  name: 'CAGL0E03916g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E03916g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycerol kinase activity, role in glycerol metabolic process and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E03916g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E03916g'  target='_blank'> Link to GRYC</a>",
                  x : -4.42187510336356,
                  y : -6.52027771095027
                  },
                  position : {
                  'x' : -44.2187510336356,
                  'y' : -65.2027771095027
                  },
  },
{
                  data: {
                  id: 'CAGL0E03938g',
                  name: 'CAGL0E03938g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E03938g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in maturation of LSU-rRNA and cytosolic large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E03938g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E03938g'  target='_blank'> Link to GRYC</a>",
                  x : 1.34228192869932,
                  y : 2.1925842657025
                  },
                  position : {
                  'x' : 13.4228192869932,
                  'y' : 21.925842657025
                  },
  },
{
                  data: {
                  id: 'CAGL0E04510g',
                  name: 'CAGL0E04510g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E04510g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phospholipase activity, role in cardiolipin metabolic process, phosphatidylethanolamine metabolic process, phospholipid metabolic process and mitochondrial matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04510g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04510g'  target='_blank'> Link to GRYC</a>",
                  x : -0.89079229759111,
                  y : -10.2867543900598
                  },
                  position : {
                  'x' : -8.9079229759111,
                  'y' : -102.867543900598
                  },
  },
{
                  data: {
                  id: 'CAGL0E04994g',
                  name: 'CAGL0E04994g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E04994g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity, role in cytoplasmic translation and cytosolic large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04994g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04994g'  target='_blank'> Link to GRYC</a>",
                  x : 0.264970673703872,
                  y : 2.67021496385301
                  },
                  position : {
                  'x' : 2.64970673703872,
                  'y' : 26.7021496385301
                  },
  },
{
                  data: {
                  id: 'CAGL0E05148g',
                  name: 'CAGL0E05148g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E05148g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have alpha-mannosidase activity, role in mannose catabolic process, oligosaccharide catabolic process and Cvt complex, fungal-type vacuole membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05148g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05148g'  target='_blank'> Link to GRYC</a>",
                  x : -1.5338515695172,
                  y : -11.086379920077
                  },
                  position : {
                  'x' : -15.338515695172,
                  'y' : -110.86379920077
                  },
  },
{
                  data: {
                  id: 'CAGL0E05500g',
                  name: 'CAGL0E05500g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E05500g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase I activity, promoter-specific chromatin binding activity and role in nucleolar large rRNA transcription by RNA polymerase I, transcription by RNA polymerase I</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05500g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05500g'  target='_blank'> Link to GRYC</a>",
                  x : -0.0997847568017666,
                  y : 2.39225228146709
                  },
                  position : {
                  'x' : -0.997847568017666,
                  'y' : 23.9225228146709
                  },
  },
{
                  data: {
                  id: 'CAGL0E05654g',
                  name: 'CAGL0E05654g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E05654g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphatidylglycerol phospholipase C activity, role in cell-abiotic substrate adhesion, glycerophospholipid catabolic process, phosphatidylglycerol catabolic process and lipid droplet, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05654g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05654g'  target='_blank'> Link to GRYC</a>",
                  x : -1.41904167161216,
                  y : -7.4752493385883
                  },
                  position : {
                  'x' : -14.1904167161216,
                  'y' : -74.752493385883
                  },
  },
{
                  data: {
                  id: 'CAGL0E06380g',
                  name: 'CAGL0E06380g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E06380g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATP-dependent NAD(P)H-hydrate dehydratase activity and role in nicotinamide nucleotide metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E06380g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E06380g'  target='_blank'> Link to GRYC</a>",
                  x : -2.45685815559196,
                  y : -10.2893815443886
                  },
                  position : {
                  'x' : -24.5685815559196,
                  'y' : -102.893815443886
                  },
  },
{
                  data: {
                  id: 'CAGL0F00429g',
                  name: 'CAGL0F00429g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F00429g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have GTP diphosphatase activity, ITP diphosphatase activity, UTP diphosphatase activity, XTP diphosphatase activity, dATP pyrophosphohydrolase activity and dCTP diphosphatase activity, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00429g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00429g'  target='_blank'> Link to GRYC</a>",
                  x : 1.30795401352463,
                  y : 2.99014798311395
                  },
                  position : {
                  'x' : 13.0795401352463,
                  'y' : 29.9014798311395
                  },
  },
{
                  data: {
                  id: 'CAGL0F00649g',
                  name: 'CAGL0F00649g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F00649g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted ATP binding, protein kinase activity, protein tyrosine kinase activity and role in protein phosphorylation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00649g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00649g'  target='_blank'> Link to GRYC</a>",
                  x : 5.58055010385885,
                  y : 1.12068337915599
                  },
                  position : {
                  'x' : 55.8055010385885,
                  'y' : 11.2068337915599
                  },
  },
{
                  data: {
                  id: 'CAGL0F00715g',
                  name: 'CAGL0F00715g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F00715g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00715g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00715g'  target='_blank'> Link to GRYC</a>",
                  x : 3.13659791111549,
                  y : -11.9126343558345
                  },
                  position : {
                  'x' : 31.3659791111549,
                  'y' : -119.126343558345
                  },
  },
{
                  data: {
                  id: 'CAGL0F01749g',
                  name: 'CAGL0F01749g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F01749g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative serine hydroxymethyltransferase; protein differentially expressed in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01749g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01749g'  target='_blank'> Link to GRYC</a>",
                  x : -2.16595210396546,
                  y : -5.86759465436494
                  },
                  position : {
                  'x' : -21.6595210396546,
                  'y' : -58.6759465436494
                  },
  },
{
                  data: {
                  id: 'CAGL0F02233g',
                  name: 'CAGL0F02233g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F02233g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have dipeptidase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F02233g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F02233g'  target='_blank'> Link to GRYC</a>",
                  x : 0.190558194418877,
                  y : 1.12227629519557
                  },
                  position : {
                  'x' : 1.90558194418877,
                  'y' : 11.2227629519557
                  },
  },
{
                  data: {
                  id: 'CAGL0F02431g',
                  name: 'CAGL0F02431g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F02431g</h2><hr><p><b>Gene name</b> : ACO2</p><p><b>Description</b> : Ortholog(s) have role in mitochondrial translation and cytoplasm, mitochondrion, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F02431g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F02431g'  target='_blank'> Link to GRYC</a>",
                  x : -0.975068224823967,
                  y : 1.92018458253674
                  },
                  position : {
                  'x' : -9.75068224823967,
                  'y' : 19.2018458253674
                  },
  },
{
                  data: {
                  id: 'CAGL0F02563g',
                  name: 'CAGL0F02563g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F02563g</h2><hr><p><b>Gene name</b> : HPT1</p><p><b>Description</b> : Putative hypoxanthine guanine phosphoribosyl transferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F02563g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F02563g'  target='_blank'> Link to GRYC</a>",
                  x : -0.294146043356571,
                  y : 4.02163708957279
                  },
                  position : {
                  'x' : -2.94146043356571,
                  'y' : 40.2163708957279
                  },
  },
{
                  data: {
                  id: 'CAGL0F03927g',
                  name: 'CAGL0F03927g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F03927g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have GMP synthase (glutamine-hydrolyzing) activity and role in GMP biosynthetic process, GMP metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F03927g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F03927g'  target='_blank'> Link to GRYC</a>",
                  x : 1.27830966863051,
                  y : 3.29780081686512
                  },
                  position : {
                  'x' : 12.7830966863051,
                  'y' : 32.9780081686512
                  },
  },
{
                  data: {
                  id: 'CAGL0F04411g',
                  name: 'CAGL0F04411g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F04411g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity, role in mitochondrial translation and mitochondrial large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04411g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04411g'  target='_blank'> Link to GRYC</a>",
                  x : -5.54581737255834,
                  y : -4.41490836755669
                  },
                  position : {
                  'x' : -55.4581737255834,
                  'y' : -44.1490836755669
                  },
  },
{
                  data: {
                  id: 'CAGL0F04917g',
                  name: 'CAGL0F04917g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F04917g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative regulatory subunit for protein phosphatase; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04917g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04917g'  target='_blank'> Link to GRYC</a>",
                  x : -1.16763099799252,
                  y : 5.12844037442424
                  },
                  position : {
                  'x' : -11.6763099799252,
                  'y' : 51.2844037442424
                  },
  },
{
                  data: {
                  id: 'CAGL0F06501g',
                  name: 'CAGL0F06501g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F06501g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have acetyl-CoA:L-glutamate N-acetyltransferase activity, glutamate N-acetyltransferase activity, role in ornithine biosynthetic process and mitochondrial matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F06501g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F06501g'  target='_blank'> Link to GRYC</a>",
                  x : -3.76410676819418,
                  y : -4.97190801938753
                  },
                  position : {
                  'x' : -37.6410676819418,
                  'y' : -49.7190801938753
                  },
  },
{
                  data: {
                  id: 'CAGL0F08261g',
                  name: 'CAGL0F08261g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F08261g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have high molecular weight kininogen binding, phosphopyruvate hydratase activity, protein-glutamine gamma-glutamyltransferase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F08261g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F08261g'  target='_blank'> Link to GRYC</a>",
                  x : 4.70007428698614,
                  y : -12.3071312678195
                  },
                  position : {
                  'x' : 47.0007428698614,
                  'y' : -123.071312678195
                  },
  },
{
                  data: {
                  id: 'CAGL0G01826g',
                  name: 'CAGL0G01826g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G01826g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ribosomal large subunit assembly and cytosolic large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G01826g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G01826g'  target='_blank'> Link to GRYC</a>",
                  x : 0.533046249530692,
                  y : 2.8665368020456
                  },
                  position : {
                  'x' : 5.33046249530692,
                  'y' : 28.665368020456
                  },
  },
{
                  data: {
                  id: 'CAGL0G02563g',
                  name: 'CAGL0G02563g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G02563g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted thiol-dependent ubiquitinyl hydrolase activity and role in protein deubiquitination, ubiquitin-dependent protein catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G02563g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G02563g'  target='_blank'> Link to GRYC</a>",
                  x : 2.59503920797068,
                  y : -10.6678369263789
                  },
                  position : {
                  'x' : 25.9503920797068,
                  'y' : -106.678369263789
                  },
  },
{
                  data: {
                  id: 'CAGL0G02937g',
                  name: 'CAGL0G02937g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G02937g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have pyruvate decarboxylase activity and role in L-phenylalanine catabolic process, aromatic amino acid family catabolic process to alcohol via Ehrlich pathway, ethanol metabolic process, tryptophan catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G02937g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G02937g'  target='_blank'> Link to GRYC</a>",
                  x : 5.79703924998868,
                  y : -10.0218006651892
                  },
                  position : {
                  'x' : 57.9703924998868,
                  'y' : -100.218006651892
                  },
  },
{
                  data: {
                  id: 'CAGL0G03575g',
                  name: 'CAGL0G03575g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G03575g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted structural constituent of ribosome activity, role in translation and ribosome localization; evidence for a extended second exon by 2 amino acids</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G03575g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G03575g'  target='_blank'> Link to GRYC</a>",
                  x : 1.32353525898207,
                  y : 3.73230579491113
                  },
                  position : {
                  'x' : 13.2353525898207,
                  'y' : 37.3230579491113
                  },
  },
{
                  data: {
                  id: 'CAGL0G03883g',
                  name: 'CAGL0G03883g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G03883g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ADP binding, ATP binding, ATPase activity, ATPase activity, coupled, chaperone binding, misfolded protein binding, unfolded protein binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G03883g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G03883g'  target='_blank'> Link to GRYC</a>",
                  x : -1.84527470989102,
                  y : -8.57532728841125
                  },
                  position : {
                  'x' : -18.4527470989102,
                  'y' : -85.7532728841125
                  },
  },
{
                  data: {
                  id: 'CAGL0G05874g',
                  name: 'CAGL0G05874g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G05874g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-directed 5'-3' RNA polymerase activity, RNA polymerase I activity, RNA polymerase II activity, RNA polymerase III activity, RNA-directed 5'-3' RNA polymerase activity, zinc ion binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G05874g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G05874g'  target='_blank'> Link to GRYC</a>",
                  x : 1.88450099825945,
                  y : 3.21915263519075
                  },
                  position : {
                  'x' : 18.8450099825945,
                  'y' : 32.1915263519075
                  },
  },
{
                  data: {
                  id: 'CAGL0G06248g',
                  name: 'CAGL0G06248g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G06248g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in maturation of 5.8S rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA), maturation of LSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA and LSU-rRNA), more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06248g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06248g'  target='_blank'> Link to GRYC</a>",
                  x : -0.164633402772399,
                  y : 2.89659860754516
                  },
                  position : {
                  'x' : -1.64633402772399,
                  'y' : 28.9659860754516
                  },
  },
{
                  data: {
                  id: 'CAGL0G06490g',
                  name: 'CAGL0G06490g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G06490g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ribosome biogenesis and small-subunit processome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06490g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06490g'  target='_blank'> Link to GRYC</a>",
                  x : 1.15436369374559,
                  y : 2.52846456544614
                  },
                  position : {
                  'x' : 11.5436369374559,
                  'y' : 25.2846456544614
                  },
  },
{
                  data: {
                  id: 'CAGL0G06732g',
                  name: 'CAGL0G06732g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G06732g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 2-isopropylmalate synthase activity, role in leucine biosynthetic process and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06732g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06732g'  target='_blank'> Link to GRYC</a>",
                  x : -7.4793724464874,
                  y : -5.62575751358237
                  },
                  position : {
                  'x' : -74.793724464874,
                  'y' : -56.2575751358237
                  },
  },
{
                  data: {
                  id: 'CAGL0G07106g',
                  name: 'CAGL0G07106g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G07106g</h2><hr><p><b>Gene name</b> : APT1</p><p><b>Description</b> : Putative adenine phosphoribosyltransferase; protein abundance decreased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G07106g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G07106g'  target='_blank'> Link to GRYC</a>",
                  x : 1.8723350896161,
                  y : 2.47616813375041
                  },
                  position : {
                  'x' : 18.723350896161,
                  'y' : 24.7616813375041
                  },
  },
{
                  data: {
                  id: 'CAGL0G07821g',
                  name: 'CAGL0G07821g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G07821g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glutaminyl-tRNA synthase (glutamine-hydrolyzing) activity, role in glutaminyl-tRNAGln biosynthesis via transamidation and glutamyl-tRNA(Gln) amidotransferase complex, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G07821g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G07821g'  target='_blank'> Link to GRYC</a>",
                  x : -5.01577284320755,
                  y : -6.59653369409052
                  },
                  position : {
                  'x' : -50.1577284320755,
                  'y' : -65.9653369409052
                  },
  },
{
                  data: {
                  id: 'CAGL0G08734g',
                  name: 'CAGL0G08734g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G08734g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted rRNA binding, structural constituent of ribosome activity, role in translation and ribosome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G08734g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G08734g'  target='_blank'> Link to GRYC</a>",
                  x : 0.406944394676186,
                  y : 2.51261785797155
                  },
                  position : {
                  'x' : 4.06944394676186,
                  'y' : 25.1261785797155
                  },
  },
{
                  data: {
                  id: 'CAGL0G09064g',
                  name: 'CAGL0G09064g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G09064g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in glycerol biosynthetic process and cytosol, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G09064g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G09064g'  target='_blank'> Link to GRYC</a>",
                  x : 10.8267054267489,
                  y : -3.31141508880983
                  },
                  position : {
                  'x' : 108.267054267489,
                  'y' : -33.1141508880983
                  },
  },
{
                  data: {
                  id: 'CAGL0G09130g',
                  name: 'CAGL0G09130g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G09130g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in maturation of LSU-rRNA, ribosomal large subunit biogenesis and cytoplasm, cytosolic large ribosomal subunit, nucleolus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G09130g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G09130g'  target='_blank'> Link to GRYC</a>",
                  x : 1.56136636675518,
                  y : 2.23399810552801
                  },
                  position : {
                  'x' : 15.6136636675518,
                  'y' : 22.3399810552801
                  },
  },
{
                  data: {
                  id: 'CAGL0G09691g',
                  name: 'CAGL0G09691g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G09691g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have O-phospho-L-serine:2-oxoglutarate aminotransferase activity, role in L-serine biosynthetic process, purine nucleobase biosynthetic process, serine family amino acid biosynthetic process and intracellular localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G09691g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G09691g'  target='_blank'> Link to GRYC</a>",
                  x : -2.84777735089022,
                  y : -6.89989889504298
                  },
                  position : {
                  'x' : -28.4777735089022,
                  'y' : -68.9989889504298
                  },
  },
{
                  data: {
                  id: 'CAGL0H00418g',
                  name: 'CAGL0H00418g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H00418g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00418g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00418g'  target='_blank'> Link to GRYC</a>",
                  x : -3.26842076529917,
                  y : -8.41057921686915
                  },
                  position : {
                  'x' : -32.6842076529917,
                  'y' : -84.1057921686915
                  },
  },
{
                  data: {
                  id: 'CAGL0H00682g',
                  name: 'CAGL0H00682g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H00682g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted mannosyl-oligosaccharide glucosidase activity and role in oligosaccharide metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00682g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00682g'  target='_blank'> Link to GRYC</a>",
                  x : -2.15951219967773,
                  y : -8.68618305891608
                  },
                  position : {
                  'x' : -21.5951219967773,
                  'y' : -86.8618305891608
                  },
  },
{
                  data: {
                  id: 'CAGL0H00704g',
                  name: 'CAGL0H00704g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H00704g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in autophagosome assembly, autophagy of mitochondrion, macroautophagy, protein localization by the Cvt pathway</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00704g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00704g'  target='_blank'> Link to GRYC</a>",
                  x : -0.982938310365705,
                  y : -10.7072240902313
                  },
                  position : {
                  'x' : -9.82938310365705,
                  'y' : -107.072240902313
                  },
  },
{
                  data: {
                  id: 'CAGL0H02101g',
                  name: 'CAGL0H02101g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H02101g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in RNA metabolic process and fungal biofilm matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02101g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02101g'  target='_blank'> Link to GRYC</a>",
                  x : 10.5561258091868,
                  y : -4.64696632263392
                  },
                  position : {
                  'x' : 105.561258091868,
                  'y' : -46.4696632263392
                  },
  },
{
                  data: {
                  id: 'CAGL0H02387g',
                  name: 'CAGL0H02387g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H02387g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative trehalose-6-phosphate synthase/phosphatase subunit; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02387g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02387g'  target='_blank'> Link to GRYC</a>",
                  x : -0.747494136107461,
                  y : -9.96765523582656
                  },
                  position : {
                  'x' : -7.47494136107461,
                  'y' : -99.6765523582656
                  },
  },
{
                  data: {
                  id: 'CAGL0H02585g',
                  name: 'CAGL0H02585g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H02585g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glutamate decarboxylase activity and role in cellular response to oxidative stress, glutamate catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02585g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02585g'  target='_blank'> Link to GRYC</a>",
                  x : -0.502514943509405,
                  y : -10.8041927310459
                  },
                  position : {
                  'x' : -5.02514943509405,
                  'y' : -108.041927310459
                  },
  },
{
                  data: {
                  id: 'CAGL0H03993g',
                  name: 'CAGL0H03993g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0H03993g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have citrate (Si)-synthase activity, role in acetyl-CoA catabolic process, citrate metabolic process, tricarboxylic acid cycle and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H03993g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H03993g'  target='_blank'> Link to GRYC</a>",
                  x : -2.66579872934239,
                  y : -0.620355479398954
                  },
                  position : {
                  'x' : -26.6579872934239,
                  'y' : -6.20355479398954
                  },
  },
{
                  data: {
                  id: 'CAGL0H04081g',
                  name: 'CAGL0H04081g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H04081g</h2><hr><p><b>Gene name</b> : ERG13</p><p><b>Description</b> : 3-hydroxy-3-methylglutaryl coenzyme A synthase; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H04081g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H04081g'  target='_blank'> Link to GRYC</a>",
                  x : 2.61154979429781,
                  y : 4.44918115724133
                  },
                  position : {
                  'x' : 26.1154979429781,
                  'y' : 44.4918115724133
                  },
  },
{
                  data: {
                  id: 'CAGL0H04851g',
                  name: 'CAGL0H04851g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H04851g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphatase activity, protein serine/threonine phosphatase activity and role in cellular protein localization, cellular sodium ion homeostasis, protein dephosphorylation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H04851g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H04851g'  target='_blank'> Link to GRYC</a>",
                  x : -1.75027198758753,
                  y : -9.9999047855826
                  },
                  position : {
                  'x' : -17.5027198758753,
                  'y' : -99.9990478558259
                  },
  },
{
                  data: {
                  id: 'CAGL0H05445g',
                  name: 'CAGL0H05445g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H05445g</h2><hr><p><b>Gene name</b> : PGI1</p><p><b>Description</b> : Glucose-6-phosphate isomerase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H05445g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H05445g'  target='_blank'> Link to GRYC</a>",
                  x : -2.24361387555459,
                  y : -10.576145196878
                  },
                  position : {
                  'x' : -22.4361387555459,
                  'y' : -105.76145196878
                  },
  },
{
                  data: {
                  id: 'CAGL0H05643g',
                  name: 'CAGL0H05643g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H05643g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity and role in maturation of SSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA)</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H05643g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H05643g'  target='_blank'> Link to GRYC</a>",
                  x : 1.24327401556157,
                  y : 1.86073887468366
                  },
                  position : {
                  'x' : 12.4327401556157,
                  'y' : 18.6073887468366
                  },
  },
{
                  data: {
                  id: 'CAGL0H06545g',
                  name: 'CAGL0H06545g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H06545g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in autophagy of mitochondrion, mitochondria-nucleus signaling pathway and integral component of mitochondrial outer membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H06545g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H06545g'  target='_blank'> Link to GRYC</a>",
                  x : 7.69926418899558,
                  y : -9.48064223595234
                  },
                  position : {
                  'x' : 76.9926418899558,
                  'y' : -94.8064223595234
                  },
  },
{
                  data: {
                  id: 'CAGL0H07051g',
                  name: 'CAGL0H07051g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H07051g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have asparaginase activity and role in asparagine catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H07051g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H07051g'  target='_blank'> Link to GRYC</a>",
                  x : 1.67411428279828,
                  y : 2.80854204991691
                  },
                  position : {
                  'x' : 16.7411428279828,
                  'y' : 28.0854204991691
                  },
  },
{
                  data: {
                  id: 'CAGL0H07887g',
                  name: 'CAGL0H07887g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H07887g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphoribosylamine-glycine ligase activity, phosphoribosylformylglycinamidine cyclo-ligase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H07887g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H07887g'  target='_blank'> Link to GRYC</a>",
                  x : -3.26080041311917,
                  y : -6.07156511791385
                  },
                  position : {
                  'x' : -32.6080041311917,
                  'y' : -60.7156511791385
                  },
  },
{
                  data: {
                  id: 'CAGL0H08261g',
                  name: 'CAGL0H08261g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H08261g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in autophagy of mitochondrion</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H08261g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H08261g'  target='_blank'> Link to GRYC</a>",
                  x : -3.73919781776043,
                  y : -8.77426859587244
                  },
                  position : {
                  'x' : -37.3919781776043,
                  'y' : -87.7426859587244
                  },
  },
{
                  data: {
                  id: 'CAGL0H09064g',
                  name: 'CAGL0H09064g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H09064g</h2><hr><p><b>Gene name</b> : FUR1</p><p><b>Description</b> : Putative uracil phosphoribosyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H09064g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H09064g'  target='_blank'> Link to GRYC</a>",
                  x : -3.32497468999855,
                  y : 1.03398342238216
                  },
                  position : {
                  'x' : -33.2497468999855,
                  'y' : 10.3398342238216
                  },
  },
{
                  data: {
                  id: 'CAGL0H09460g',
                  name: 'CAGL0H09460g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H09460g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have long-chain fatty acid-CoA ligase activity, medium-chain fatty acid-CoA ligase activity, very long-chain fatty acid-CoA ligase activity and role in fatty acid metabolic process, long-chain fatty acid metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H09460g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H09460g'  target='_blank'> Link to GRYC</a>",
                  x : -4.73246517904585,
                  y : -7.54100555306528
                  },
                  position : {
                  'x' : -47.3246517904585,
                  'y' : -75.4100555306528
                  },
  },
{
                  data: {
                  id: 'CAGL0H10142g',
                  name: 'CAGL0H10142g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H10142g</h2><hr><p><b>Gene name</b> : ARO3</p><p><b>Description</b> : Putative 2-dehydro-3-deoxyphosphoheptonate aldolase; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H10142g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H10142g'  target='_blank'> Link to GRYC</a>",
                  x : -2.87961929389543,
                  y : 0.400682623076211
                  },
                  position : {
                  'x' : -28.7961929389543,
                  'y' : 4.00682623076211
                  },
  },
{
                  data: {
                  id: 'CAGL0I00528g',
                  name: 'CAGL0I00528g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I00528g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have mRNA binding, pre-mRNA 5'-splice site binding activity and role in mRNA 5'-splice site recognition, mRNA splicing, via spliceosome, positive regulation of RNA binding</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I00528g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I00528g'  target='_blank'> Link to GRYC</a>",
                  x : -1.9825388695504,
                  y : -9.30231607211058
                  },
                  position : {
                  'x' : -19.825388695504,
                  'y' : -93.0231607211058
                  },
  },
{
                  data: {
                  id: 'CAGL0I00792g',
                  name: 'CAGL0I00792g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I00792g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in maturation of SSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA)</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I00792g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I00792g'  target='_blank'> Link to GRYC</a>",
                  x : 1.00861048157329,
                  y : 3.82267814622073
                  },
                  position : {
                  'x' : 10.0861048157329,
                  'y' : 38.2267814622073
                  },
  },
{
                  data: {
                  id: 'CAGL0I01298g',
                  name: 'CAGL0I01298g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I01298g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have aminopeptidase activity, metalloaminopeptidase activity, role in cellular response to drug, chaperone-mediated protein folding, proteolysis and extracellular region, fungal-type vacuole lumen localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01298g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01298g'  target='_blank'> Link to GRYC</a>",
                  x : -0.336919245706662,
                  y : 0.951499853792319
                  },
                  position : {
                  'x' : -3.36919245706662,
                  'y' : 9.51499853792319
                  },
  },
{
                  data: {
                  id: 'CAGL0I03036g',
                  name: 'CAGL0I03036g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I03036g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity and mitochondrial large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I03036g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I03036g'  target='_blank'> Link to GRYC</a>",
                  x : -4.95354627839725,
                  y : -4.04872851367167
                  },
                  position : {
                  'x' : -49.5354627839725,
                  'y' : -40.4872851367167
                  },
  },
{
                  data: {
                  id: 'CAGL0I03080g',
                  name: 'CAGL0I03080g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I03080g</h2><hr><p><b>Gene name</b> : URA3</p><p><b>Description</b> : Orotidine 5'-phosphate decarboxylase, catalyzes a step in pyrimidine biosynthesis; protein abundance decreased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I03080g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I03080g'  target='_blank'> Link to GRYC</a>",
                  x : -6.5012540911779,
                  y : -5.18589703026258
                  },
                  position : {
                  'x' : -65.012540911779,
                  'y' : -51.8589703026258
                  },
  },
{
                  data: {
                  id: 'CAGL0I03234g',
                  name: 'CAGL0I03234g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I03234g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA binding, U3 snoRNA binding, U4 snRNA binding activity and role in mRNA splicing, via spliceosome, maturation of SSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA)</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I03234g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I03234g'  target='_blank'> Link to GRYC</a>",
                  x : 0.172702533750416,
                  y : 3.51616531728858
                  },
                  position : {
                  'x' : 1.72702533750416,
                  'y' : 35.1616531728858
                  },
  },
{
                  data: {
                  id: 'CAGL0I04048g',
                  name: 'CAGL0I04048g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I04048g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have fructose 1,6-bisphosphate 1-phosphatase activity, role in carbon utilization, cellular response to glucose starvation and intracellular localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04048g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04048g'  target='_blank'> Link to GRYC</a>",
                  x : -2.88060407997439,
                  y : -8.43903584866909
                  },
                  position : {
                  'x' : -28.8060407997439,
                  'y' : -84.3903584866909
                  },
  },
{
                  data: {
                  id: 'CAGL0I04444g',
                  name: 'CAGL0I04444g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I04444g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphoribosylaminoimidazolesuccinocarboxamide synthase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04444g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04444g'  target='_blank'> Link to GRYC</a>",
                  x : -2.73689080769188,
                  y : -5.72051952526832
                  },
                  position : {
                  'x' : -27.3689080769188,
                  'y' : -57.2051952526832
                  },
  },
{
                  data: {
                  id: 'CAGL0I04752g',
                  name: 'CAGL0I04752g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I04752g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphatidate cytidylyltransferase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04752g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04752g'  target='_blank'> Link to GRYC</a>",
                  x : 1.73331484963783,
                  y : 0.838970589782646
                  },
                  position : {
                  'x' : 17.3331484963783,
                  'y' : 8.38970589782646
                  },
  },
{
                  data: {
                  id: 'CAGL0I04972g',
                  name: 'CAGL0I04972g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I04972g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in telomere maintenance via recombination and Ino80 complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04972g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04972g'  target='_blank'> Link to GRYC</a>",
                  x : -3.15932144456882,
                  y : -10.5127607426193
                  },
                  position : {
                  'x' : -31.5932144456882,
                  'y' : -105.127607426193
                  },
  },
{
                  data: {
                  id: 'CAGL0I06006g',
                  name: 'CAGL0I06006g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I06006g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase I activity, role in nucleolar large rRNA transcription by RNA polymerase I, transcription elongation from RNA polymerase I promoter and RNA polymerase I complex, nucleolus, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I06006g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I06006g'  target='_blank'> Link to GRYC</a>",
                  x : 0.458426627396042,
                  y : 3.85658868517436
                  },
                  position : {
                  'x' : 4.58426627396041,
                  'y' : 38.5658868517436
                  },
  },
{
                  data: {
                  id: 'CAGL0I06050g',
                  name: 'CAGL0I06050g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I06050g</h2><hr><p><b>Gene name</b> : INO1</p><p><b>Description</b> : Putative inositol 1-phosphate synthase; regulated by the transcriptional activators Ino2p and Ino4p; protein differentially expressed in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I06050g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I06050g'  target='_blank'> Link to GRYC</a>",
                  x : 1.85017183041681,
                  y : -7.47606375962048
                  },
                  position : {
                  'x' : 18.5017183041681,
                  'y' : -74.7606375962048
                  },
  },
{
                  data: {
                  id: 'CAGL0I07887g',
                  name: 'CAGL0I07887g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I07887g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have protein binding, bridging activity and role in cellular protein-containing complex localization, ubiquitin-dependent ERAD pathway, vesicle organization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I07887g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I07887g'  target='_blank'> Link to GRYC</a>",
                  x : -2.72174777911123,
                  y : -8.89081088575255
                  },
                  position : {
                  'x' : -27.2174777911123,
                  'y' : -88.9081088575255
                  },
  },
{
                  data: {
                  id: 'CAGL0I08305g',
                  name: 'CAGL0I08305g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I08305g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have carnitine O-acetyltransferase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I08305g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I08305g'  target='_blank'> Link to GRYC</a>",
                  x : -2.72517116937852,
                  y : -8.16205649877744
                  },
                  position : {
                  'x' : -27.2517116937852,
                  'y' : -81.6205649877744
                  },
  },
{
                  data: {
                  id: 'CAGL0I08987g',
                  name: 'CAGL0I08987g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I08987g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted argininosuccinate lyase activity and role in arginine biosynthetic process via ornithine</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I08987g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I08987g'  target='_blank'> Link to GRYC</a>",
                  x : -0.66720549974142,
                  y : 1.07592640159333
                  },
                  position : {
                  'x' : -6.6720549974142,
                  'y' : 10.7592640159333
                  },
  },
{
                  data: {
                  id: 'CAGL0I09009g',
                  name: 'CAGL0I09009g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I09009g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have histidinol-phosphatase activity and role in histidine biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09009g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09009g'  target='_blank'> Link to GRYC</a>",
                  x : -5.28131928370657,
                  y : -5.23961491870866
                  },
                  position : {
                  'x' : -52.8131928370657,
                  'y' : -52.3961491870866
                  },
  },
{
                  data: {
                  id: 'CAGL0I09284g',
                  name: 'CAGL0I09284g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I09284g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycine hydroxymethyltransferase activity, role in one-carbon metabolic process and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09284g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09284g'  target='_blank'> Link to GRYC</a>",
                  x : -4.79336423629435,
                  y : -6.31154238246331
                  },
                  position : {
                  'x' : -47.9336423629435,
                  'y' : -63.1154238246331
                  },
  },
{
                  data: {
                  id: 'CAGL0I09790g',
                  name: 'CAGL0I09790g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I09790g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in endonucleolytic cleavage in 5'-ETS of tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA and LSU-rRNA), more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09790g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09790g'  target='_blank'> Link to GRYC</a>",
                  x : -0.0844898143980821,
                  y : 2.65958408307996
                  },
                  position : {
                  'x' : -0.844898143980821,
                  'y' : 26.5958408307996
                  },
  },
{
                  data: {
                  id: 'CAGL0I10406g',
                  name: 'CAGL0I10406g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I10406g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in establishment of cell polarity, proteasomal ubiquitin-independent protein catabolic process, proteasome core complex assembly, proteasome-mediated ubiquitin-dependent protein catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10406g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10406g'  target='_blank'> Link to GRYC</a>",
                  x : -5.15714348687068,
                  y : -5.69057914236995
                  },
                  position : {
                  'x' : -51.5714348687068,
                  'y' : -56.9057914236995
                  },
  },
{
                  data: {
                  id: 'CAGL0I10670g',
                  name: 'CAGL0I10670g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I10670g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10670g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10670g'  target='_blank'> Link to GRYC</a>",
                  x : 0.375121709117086,
                  y : 3.66500839940091
                  },
                  position : {
                  'x' : 3.75121709117086,
                  'y' : 36.6500839940091
                  },
  },
{
                  data: {
                  id: 'CAGL0I10791g',
                  name: 'CAGL0I10791g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I10791g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ornithine carbamoyltransferase activity, role in arginine biosynthetic process, arginine biosynthetic process via ornithine, asexual sporulation and intracellular, mitochondrial matrix, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10791g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10791g'  target='_blank'> Link to GRYC</a>",
                  x : -0.0236497563205595,
                  y : 1.82651135939118
                  },
                  position : {
                  'x' : -0.236497563205595,
                  'y' : 18.2651135939118
                  },
  },
{
                  data: {
                  id: 'CAGL0J00473g',
                  name: 'CAGL0J00473g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J00473g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have large ribosomal subunit rRNA binding, proteasome binding, protein binding, bridging, rRNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J00473g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J00473g'  target='_blank'> Link to GRYC</a>",
                  x : 1.15967865702705,
                  y : 1.94589085298784
                  },
                  position : {
                  'x' : 11.5967865702705,
                  'y' : 19.4589085298784
                  },
  },
{
                  data: {
                  id: 'CAGL0J01045g',
                  name: 'CAGL0J01045g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J01045g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA helicase activity, RNA-dependent ATPase activity, U3 snoRNA binding, box C/D snoRNA binding activity, role in rRNA processing and small-subunit processome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J01045g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J01045g'  target='_blank'> Link to GRYC</a>",
                  x : -2.2435849657415,
                  y : -3.70715881723736
                  },
                  position : {
                  'x' : -22.435849657415,
                  'y' : -37.0715881723736
                  },
  },
{
                  data: {
                  id: 'CAGL0J01848g',
                  name: 'CAGL0J01848g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J01848g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase I activity, role in nucleolar large rRNA transcription by RNA polymerase I, transcription by RNA polymerase I and RNA polymerase I complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J01848g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J01848g'  target='_blank'> Link to GRYC</a>",
                  x : 1.48860517233491,
                  y : 3.24383190364728
                  },
                  position : {
                  'x' : 14.8860517233491,
                  'y' : 32.4383190364728
                  },
  },
{
                  data: {
                  id: 'CAGL0J03234g',
                  name: 'CAGL0J03234g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J03234g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in maturation of SSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA)</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03234g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03234g'  target='_blank'> Link to GRYC</a>",
                  x : 1.0714488718068,
                  y : 3.38836449942784
                  },
                  position : {
                  'x' : 10.714488718068,
                  'y' : 33.8836449942784
                  },
  },
{
                  data: {
                  id: 'CAGL0J03762g',
                  name: 'CAGL0J03762g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J03762g</h2><hr><p><b>Gene name</b> : MET7</p><p><b>Description</b> : Ortholog(s) have tetrahydrofolylpolyglutamate synthase activity, role in one-carbon metabolic process and cytoplasm, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03762g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03762g'  target='_blank'> Link to GRYC</a>",
                  x : -5.67490447578915,
                  y : -7.85677426682193
                  },
                  position : {
                  'x' : -56.7490447578915,
                  'y' : -78.5677426682193
                  },
  },
{
                  data: {
                  id: 'CAGL0J03916g',
                  name: 'CAGL0J03916g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0J03916g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have lipid binding, oxysterol binding, sterol transfer activity and role in endocytosis, exocytosis, maintenance of cell polarity, piecemeal microautophagy of the nucleus, sterol transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03916g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03916g'  target='_blank'> Link to GRYC</a>",
                  x : 4.9571518522801,
                  y : -11.0207702637956
                  },
                  position : {
                  'x' : 49.571518522801,
                  'y' : -110.207702637956
                  },
  },
{
                  data: {
                  id: 'CAGL0J04070g',
                  name: 'CAGL0J04070g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J04070g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase I activity, RNA polymerase II activity, RNA polymerase III activity, RNA-directed 5'-3' RNA polymerase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04070g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04070g'  target='_blank'> Link to GRYC</a>",
                  x : 1.04428479197915,
                  y : 3.60607925490827
                  },
                  position : {
                  'x' : 10.4428479197915,
                  'y' : 36.0607925490827
                  },
  },
{
                  data: {
                  id: 'CAGL0J04950g',
                  name: 'CAGL0J04950g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J04950g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in mitotic recombination and cellular bud localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04950g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04950g'  target='_blank'> Link to GRYC</a>",
                  x : 5.76878589017853,
                  y : 1.52769728783222
                  },
                  position : {
                  'x' : 57.6878589017853,
                  'y' : 15.2769728783222
                  },
  },
{
                  data: {
                  id: 'CAGL0J05082g',
                  name: 'CAGL0J05082g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J05082g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted ATP binding, protein kinase activity, protein tyrosine kinase activity and role in protein phosphorylation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J05082g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J05082g'  target='_blank'> Link to GRYC</a>",
                  x : 0.511743573375078,
                  y : -10.823287746856
                  },
                  position : {
                  'x' : 5.11743573375078,
                  'y' : -108.23287746856
                  },
  },
{
                  data: {
                  id: 'CAGL0J05258g',
                  name: 'CAGL0J05258g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J05258g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity and mitochondrial large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J05258g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J05258g'  target='_blank'> Link to GRYC</a>",
                  x : -5.95356179885414,
                  y : -5.79901706967758
                  },
                  position : {
                  'x' : -59.5356179885414,
                  'y' : -57.9901706967758
                  },
  },
{
                  data: {
                  id: 'CAGL0J05478g',
                  name: 'CAGL0J05478g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J05478g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity and mitochondrial small ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J05478g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J05478g'  target='_blank'> Link to GRYC</a>",
                  x : -5.07129640840432,
                  y : -4.56228397452452
                  },
                  position : {
                  'x' : -50.7129640840432,
                  'y' : -45.6228397452452
                  },
  },
{
                  data: {
                  id: 'CAGL0J05984g',
                  name: 'CAGL0J05984g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J05984g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have adenine deaminase activity and role in adenine catabolic process, cell-abiotic substrate adhesion, hypoxanthine salvage, purine-containing compound salvage, regulation of G2/M transition of mitotic cell cycle</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J05984g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J05984g'  target='_blank'> Link to GRYC</a>",
                  x : -0.742666261267627,
                  y : 2.34116486926935
                  },
                  position : {
                  'x' : -7.42666261267627,
                  'y' : 23.4116486926935
                  },
  },
{
                  data: {
                  id: 'CAGL0J07766g',
                  name: 'CAGL0J07766g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J07766g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase I activity and role in nucleolar large rRNA transcription by RNA polymerase I, transcription by RNA polymerase I, transcription elongation from RNA polymerase I promoter</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J07766g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J07766g'  target='_blank'> Link to GRYC</a>",
                  x : 0.762145479122613,
                  y : 2.74671512364589
                  },
                  position : {
                  'x' : 7.62145479122613,
                  'y' : 27.4671512364589
                  },
  },
{
                  data: {
                  id: 'CAGL0J08547g',
                  name: 'CAGL0J08547g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J08547g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J08547g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J08547g'  target='_blank'> Link to GRYC</a>",
                  x : -3.37516706749042,
                  y : -7.44641865927731
                  },
                  position : {
                  'x' : -33.7516706749042,
                  'y' : -74.4641865927731
                  },
  },
{
                  data: {
                  id: 'CAGL0J08679g',
                  name: 'CAGL0J08679g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J08679g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cytoplasmic translation and cytoplasm localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J08679g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J08679g'  target='_blank'> Link to GRYC</a>",
                  x : 0.761657154965965,
                  y : 2.25878929139674
                  },
                  position : {
                  'x' : 7.61657154965965,
                  'y' : 22.5878929139674
                  },
  },
{
                  data: {
                  id: 'CAGL0J09240g',
                  name: 'CAGL0J09240g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0J09240g</h2><hr><p><b>Gene name</b> : LYS21</p><p><b>Description</b> : Homocitrate synthase; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09240g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09240g'  target='_blank'> Link to GRYC</a>",
                  x : -4.16673916661652,
                  y : -0.883147335709677
                  },
                  position : {
                  'x' : -41.6673916661652,
                  'y' : -8.83147335709677
                  },
  },
{
                  data: {
                  id: 'CAGL0J09614g',
                  name: 'CAGL0J09614g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J09614g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have box H/ACA snoRNA binding activity, role in cleavage involved in rRNA processing, rRNA pseudouridine synthesis, snRNA pseudouridine synthesis and box H/ACA snoRNP complex, nucleolus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09614g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09614g'  target='_blank'> Link to GRYC</a>",
                  x : -0.581174152974587,
                  y : 2.10511228877411
                  },
                  position : {
                  'x' : -5.81174152974587,
                  'y' : 21.0511228877411
                  },
  },
{
                  data: {
                  id: 'CAGL0J09724g',
                  name: 'CAGL0J09724g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J09724g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity and mitochondrial large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09724g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09724g'  target='_blank'> Link to GRYC</a>",
                  x : -4.85307145321826,
                  y : -3.3573212638369
                  },
                  position : {
                  'x' : -48.5307145321826,
                  'y' : -33.573212638369
                  },
  },
{
                  data: {
                  id: 'CAGL0J10010g',
                  name: 'CAGL0J10010g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J10010g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have tRNA (adenine-N1-)-methyltransferase activity, role in tRNA methylation and nucleus, tRNA (m1A) methyltransferase complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J10010g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J10010g'  target='_blank'> Link to GRYC</a>",
                  x : 0.14282524327979,
                  y : 2.22921192823908
                  },
                  position : {
                  'x' : 1.4282524327979,
                  'y' : 22.2921192823908
                  },
  },
{
                  data: {
                  id: 'CAGL0J10164g',
                  name: 'CAGL0J10164g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J10164g</h2><hr><p><b>Gene name</b> : RPL16A</p><p><b>Description</b> : Putative ribosomal protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J10164g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J10164g'  target='_blank'> Link to GRYC</a>",
                  x : 1.3456511379451,
                  y : 2.72307658044376
                  },
                  position : {
                  'x' : 13.456511379451,
                  'y' : 27.2307658044376
                  },
  },
{
                  data: {
                  id: 'CAGL0J10824g',
                  name: 'CAGL0J10824g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J10824g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have lanosterol synthase activity, role in ergosterol biosynthetic process and lipid droplet localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J10824g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J10824g'  target='_blank'> Link to GRYC</a>",
                  x : 3.12787006304622,
                  y : 3.99745274371659
                  },
                  position : {
                  'x' : 31.2787006304622,
                  'y' : 39.9745274371659
                  },
  },
{
                  data: {
                  id: 'CAGL0J11858g',
                  name: 'CAGL0J11858g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J11858g</h2><hr><p><b>Gene name</b> : RML2</p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity, role in mitochondrial translation and mitochondrial large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J11858g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J11858g'  target='_blank'> Link to GRYC</a>",
                  x : -5.13415166979116,
                  y : -3.20396259346557
                  },
                  position : {
                  'x' : -51.3415166979116,
                  'y' : -32.0396259346557
                  },
  },
{
                  data: {
                  id: 'CAGL0K02233g',
                  name: 'CAGL0K02233g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K02233g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in maturation of 5.8S rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA), maturation of LSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA and LSU-rRNA), more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K02233g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K02233g'  target='_blank'> Link to GRYC</a>",
                  x : -0.307634338590338,
                  y : 1.40095870787372
                  },
                  position : {
                  'x' : -3.07634338590338,
                  'y' : 14.0095870787372
                  },
  },
{
                  data: {
                  id: 'CAGL0K04103g',
                  name: 'CAGL0K04103g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K04103g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have dolichyldiphosphatase activity, role in lipid biosynthetic process, protein N-linked glycosylation and integral component of endoplasmic reticulum membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04103g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04103g'  target='_blank'> Link to GRYC</a>",
                  x : 3.95458914891228,
                  y : 2.01013484186346
                  },
                  position : {
                  'x' : 39.5458914891228,
                  'y' : 20.1013484186346
                  },
  },
{
                  data: {
                  id: 'CAGL0K04279g',
                  name: 'CAGL0K04279g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K04279g</h2><hr><p><b>Gene name</b> : SCM4</p><p><b>Description</b> : Ortholog of S. cerevisiae : SCM4 and Saccharomyces cerevisiae S288C : YGR049W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04279g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04279g'  target='_blank'> Link to GRYC</a>",
                  x : 10.3477033901248,
                  y : -5.91813046002536
                  },
                  position : {
                  'x' : 103.477033901248,
                  'y' : -59.1813046002536
                  },
  },
{
                  data: {
                  id: 'CAGL0K04301g',
                  name: 'CAGL0K04301g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K04301g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative mitochondrial Ser/Thr protein kinase; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04301g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04301g'  target='_blank'> Link to GRYC</a>",
                  x : -1.4262608921735,
                  y : -10.3792495627351
                  },
                  position : {
                  'x' : -14.262608921735,
                  'y' : -103.792495627351
                  },
  },
{
                  data: {
                  id: 'CAGL0K04499g',
                  name: 'CAGL0K04499g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K04499g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphoribosylformylglycinamidine synthase activity and role in purine nucleotide biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04499g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04499g'  target='_blank'> Link to GRYC</a>",
                  x : -2.72351817393159,
                  y : -4.69231569025492
                  },
                  position : {
                  'x' : -27.2351817393159,
                  'y' : -46.9231569025492
                  },
  },
{
                  data: {
                  id: 'CAGL0K05357g',
                  name: 'CAGL0K05357g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K05357g</h2><hr><p><b>Gene name</b> : GLN1</p><p><b>Description</b> : Ortholog(s) have glutamate-ammonia ligase activity, role in ammonia assimilation cycle, glutamine biosynthetic process, nitrogen compound metabolic process and nuclear periphery localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K05357g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K05357g'  target='_blank'> Link to GRYC</a>",
                  x : -8.62507022940377,
                  y : -7.33162099909593
                  },
                  position : {
                  'x' : -86.2507022940377,
                  'y' : -73.3162099909593
                  },
  },
{
                  data: {
                  id: 'CAGL0K06567g',
                  name: 'CAGL0K06567g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K06567g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have preribosome, large subunit precursor localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K06567g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K06567g'  target='_blank'> Link to GRYC</a>",
                  x : 0.576188809599427,
                  y : 3.23132800637064
                  },
                  position : {
                  'x' : 5.76188809599427,
                  'y' : 32.3132800637064
                  },
  },
{
                  data: {
                  id: 'CAGL0K08536g',
                  name: 'CAGL0K08536g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K08536g</h2><hr><p><b>Gene name</b> : APE1</p><p><b>Description</b> : Vacuolar aminopeptidase I</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08536g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08536g'  target='_blank'> Link to GRYC</a>",
                  x : 4.39017481308565,
                  y : -11.7992120633138
                  },
                  position : {
                  'x' : 43.9017481308565,
                  'y' : -117.992120633138
                  },
  },
{
                  data: {
                  id: 'CAGL0K10340g',
                  name: 'CAGL0K10340g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K10340g</h2><hr><p><b>Gene name</b> : ADE2</p><p><b>Description</b> : Putative phosphoribosylaminoimidazole carboxylase; aminoimidazole ribonucleotide (AIR) carboxylase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10340g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10340g'  target='_blank'> Link to GRYC</a>",
                  x : -2.87622656134889,
                  y : -6.27246650799386
                  },
                  position : {
                  'x' : -28.7622656134889,
                  'y' : -62.7246650799386
                  },
  },
{
                  data: {
                  id: 'CAGL0K10428g',
                  name: 'CAGL0K10428g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K10428g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have enzyme inhibitor activity and role in negative regulation of glycogen catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10428g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10428g'  target='_blank'> Link to GRYC</a>",
                  x : -3.36767674307087,
                  y : -10.0366900331637
                  },
                  position : {
                  'x' : -33.6767674307087,
                  'y' : -100.366900331637
                  },
  },
{
                  data: {
                  id: 'CAGL0K12518g',
                  name: 'CAGL0K12518g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K12518g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have alanine-glyoxylate transaminase activity, role in glycine biosynthetic process, by transamination of glyoxylate and fungal biofilm matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K12518g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K12518g'  target='_blank'> Link to GRYC</a>",
                  x : -3.72107386734992,
                  y : -6.82279972237878
                  },
                  position : {
                  'x' : -37.2107386734992,
                  'y' : -68.2279972237878
                  },
  },
{
                  data: {
                  id: 'CAGL0L00759g',
                  name: 'CAGL0L00759g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0L00759g</h2><hr><p><b>Gene name</b> : HIS1</p><p><b>Description</b> : ATP phosphoribosyltransferase; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L00759g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L00759g'  target='_blank'> Link to GRYC</a>",
                  x : -6.50351644906715,
                  y : -2.77134168328877
                  },
                  position : {
                  'x' : -65.0351644906715,
                  'y' : -27.7134168328877
                  },
  },
{
                  data: {
                  id: 'CAGL0L00979g',
                  name: 'CAGL0L00979g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L00979g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in endoplasmic reticulum to Golgi vesicle-mediated transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L00979g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L00979g'  target='_blank'> Link to GRYC</a>",
                  x : -0.496220604819882,
                  y : 1.73037954560076
                  },
                  position : {
                  'x' : -4.96220604819881,
                  'y' : 17.3037954560076
                  },
  },
{
                  data: {
                  id: 'CAGL0L02937g',
                  name: 'CAGL0L02937g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L02937g</h2><hr><p><b>Gene name</b> : HIS3</p><p><b>Description</b> : Putative imidazoleglycerol-phosphate dehydratase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L02937g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L02937g'  target='_blank'> Link to GRYC</a>",
                  x : -0.758887612484878,
                  y : 1.23666514630088
                  },
                  position : {
                  'x' : -7.58887612484878,
                  'y' : 12.3666514630088
                  },
  },
{
                  data: {
                  id: 'CAGL0L03806g',
                  name: 'CAGL0L03806g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L03806g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have rRNA binding activity and role in actomyosin contractile ring assembly, maturation of LSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA), ribosomal large subunit biogenesis</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03806g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03806g'  target='_blank'> Link to GRYC</a>",
                  x : 1.03185667367336,
                  y : 2.26277866419123
                  },
                  position : {
                  'x' : 10.3185667367336,
                  'y' : 22.6277866419123
                  },
  },
{
                  data: {
                  id: 'CAGL0L03982g',
                  name: 'CAGL0L03982g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L03982g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have malate synthase activity, role in acetate catabolic process, carbon utilization, fatty acid catabolic process, glyoxylate cycle and cytosol, peroxisomal matrix, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03982g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03982g'  target='_blank'> Link to GRYC</a>",
                  x : -4.69008442479522,
                  y : -5.91376063199922
                  },
                  position : {
                  'x' : -46.9008442479522,
                  'y' : -59.1376063199922
                  },
  },
{
                  data: {
                  id: 'CAGL0L04070g',
                  name: 'CAGL0L04070g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L04070g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity and mitochondrial large ribosomal subunit, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L04070g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L04070g'  target='_blank'> Link to GRYC</a>",
                  x : -6.27322775487879,
                  y : -4.43799250032045
                  },
                  position : {
                  'x' : -62.7322775487879,
                  'y' : -44.3799250032045
                  },
  },
{
                  data: {
                  id: 'CAGL0L04664g',
                  name: 'CAGL0L04664g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L04664g</h2><hr><p><b>Gene name</b> : HEM15</p><p><b>Description</b> : Ortholog(s) have 2 iron, 2 sulfur cluster binding, ferrochelatase activity, role in heme biosynthetic process and mitochondrial inner membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L04664g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L04664g'  target='_blank'> Link to GRYC</a>",
                  x : -1.53614246061118,
                  y : 1.13367882753776
                  },
                  position : {
                  'x' : -15.3614246061118,
                  'y' : 11.3367882753776
                  },
  },
{
                  data: {
                  id: 'CAGL0L05500g',
                  name: 'CAGL0L05500g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L05500g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ribosomal large subunit biogenesis and cytoplasm, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L05500g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L05500g'  target='_blank'> Link to GRYC</a>",
                  x : 1.85501776568116,
                  y : 2.97952344933091
                  },
                  position : {
                  'x' : 18.5501776568116,
                  'y' : 29.7952344933091
                  },
  },
{
                  data: {
                  id: 'CAGL0L08114g',
                  name: 'CAGL0L08114g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L08114g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted structural constituent of ribosome activity, role in translation and ribosome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L08114g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L08114g'  target='_blank'> Link to GRYC</a>",
                  x : 0.61222679339577,
                  y : 2.44112236353608
                  },
                  position : {
                  'x' : 6.1222679339577,
                  'y' : 24.4112236353608
                  },
  },
{
                  data: {
                  id: 'CAGL0L08118g',
                  name: 'CAGL0L08118g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L08118g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have mRNA binding activity, role in maturation of SSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA), ribosomal small subunit assembly and small-subunit processome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L08118g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L08118g'  target='_blank'> Link to GRYC</a>",
                  x : 0.836911504871434,
                  y : 3.30476956211124
                  },
                  position : {
                  'x' : 8.36911504871434,
                  'y' : 33.0476956211124
                  },
  },
{
                  data: {
                  id: 'CAGL0L08184g',
                  name: 'CAGL0L08184g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L08184g</h2><hr><p><b>Gene name</b> : FEN1</p><p><b>Description</b> : Predicted fatty acid elongase with role in sphingolipid biosynthetic process; mutants show reduced sensitivity to caspofungin and increased sensitivity to micafungin</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L08184g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L08184g'  target='_blank'> Link to GRYC</a>",
                  x : 0.583379982655752,
                  y : 2.04129172054161
                  },
                  position : {
                  'x' : 5.83379982655751,
                  'y' : 20.4129172054161
                  },
  },
{
                  data: {
                  id: 'CAGL0L08426g',
                  name: 'CAGL0L08426g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L08426g</h2><hr><p><b>Gene name</b> : SUE1</p><p><b>Description</b> : Ortholog(s) have role in protein catabolic process and mitochondrial envelope localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L08426g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L08426g'  target='_blank'> Link to GRYC</a>",
                  x : -2.20870104536013,
                  y : -11.6762123304145
                  },
                  position : {
                  'x' : -22.0870104536013,
                  'y' : -116.762123304145
                  },
  },
{
                  data: {
                  id: 'CAGL0L08756g',
                  name: 'CAGL0L08756g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L08756g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in maturation of SSU-rRNA from tricistronic rRNA transcript (SSU-rRNA, 5.8S rRNA, LSU-rRNA) and nucleus, preribosome, small subunit precursor localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L08756g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L08756g'  target='_blank'> Link to GRYC</a>",
                  x : 0.894074477188998,
                  y : 2.87229424999074
                  },
                  position : {
                  'x' : 8.94074477188998,
                  'y' : 28.7229424999074
                  },
  },
{
                  data: {
                  id: 'CAGL0L09086g',
                  name: 'CAGL0L09086g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L09086g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 2-methylcitrate synthase activity, citrate (Si)-synthase activity, role in propionate catabolic process, 2-methylcitrate cycle, tricarboxylic acid cycle and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L09086g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L09086g'  target='_blank'> Link to GRYC</a>",
                  x : -2.46162807248506,
                  y : -7.90924033563106
                  },
                  position : {
                  'x' : -24.6162807248506,
                  'y' : -79.0924033563106
                  },
  },
{
                  data: {
                  id: 'CAGL0L09108g',
                  name: 'CAGL0L09108g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L09108g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in propionate metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L09108g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L09108g'  target='_blank'> Link to GRYC</a>",
                  x : -2.98841749535629,
                  y : -9.31250276423321
                  },
                  position : {
                  'x' : -29.8841749535629,
                  'y' : -93.1250276423321
                  },
  },
{
                  data: {
                  id: 'CAGL0L09273g',
                  name: 'CAGL0L09273g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L09273g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have isocitrate lyase activity, methylisocitrate lyase activity, role in propionate catabolic process, 2-methylcitrate cycle and mitochondrial matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L09273g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L09273g'  target='_blank'> Link to GRYC</a>",
                  x : 1.22286012468679,
                  y : -12.4312142243984
                  },
                  position : {
                  'x' : 12.2286012468679,
                  'y' : -124.312142243984
                  },
  },
{
                  data: {
                  id: 'CAGL0L10582g',
                  name: 'CAGL0L10582g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L10582g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted mannosyl-oligosaccharide glucosidase activity and role in oligosaccharide metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10582g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10582g'  target='_blank'> Link to GRYC</a>",
                  x : -1.69287006714119,
                  y : -9.52794813282453
                  },
                  position : {
                  'x' : -16.9287006714119,
                  'y' : -95.2794813282453
                  },
  },
{
                  data: {
                  id: 'CAGL0L10890g',
                  name: 'CAGL0L10890g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L10890g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cellular response to biotic stimulus, cellular response to starvation, chromosome organization and filamentous growth, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10890g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10890g'  target='_blank'> Link to GRYC</a>",
                  x : 0.395476942866755,
                  y : 3.16501956630646
                  },
                  position : {
                  'x' : 3.95476942866755,
                  'y' : 31.6501956630646
                  },
  },
{
                  data: {
                  id: 'CAGL0L11000g',
                  name: 'CAGL0L11000g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L11000g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have uroporphyrinogen-III synthase activity and role in heme biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L11000g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L11000g'  target='_blank'> Link to GRYC</a>",
                  x : -0.105801260241055,
                  y : 1.5516244888379
                  },
                  position : {
                  'x' : -1.05801260241055,
                  'y' : 15.516244888379
                  },
  },
{
                  data: {
                  id: 'CAGL0L11902g',
                  name: 'CAGL0L11902g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L11902g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have adenylate kinase activity, nucleoside triphosphate adenylate kinase activity, role in nucleotide metabolic process and mitochondrial inner membrane, mitochondrial matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L11902g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L11902g'  target='_blank'> Link to GRYC</a>",
                  x : -3.79733200520233,
                  y : -7.77604000378492
                  },
                  position : {
                  'x' : -37.9733200520233,
                  'y' : -77.7604000378493
                  },
  },
{
                  data: {
                  id: 'CAGL0M02167g',
                  name: 'CAGL0M02167g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M02167g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : PRM4 and Saccharomyces cerevisiae S288C : YPL156C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M02167g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M02167g'  target='_blank'> Link to GRYC</a>",
                  x : -3.04552975190977,
                  y : -6.95248600613491
                  },
                  position : {
                  'x' : -30.4552975190977,
                  'y' : -69.5248600613491
                  },
  },
{
                  data: {
                  id: 'CAGL0M02915g',
                  name: 'CAGL0M02915g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M02915g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in autophagy of peroxisome and peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M02915g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M02915g'  target='_blank'> Link to GRYC</a>",
                  x : -1.07771894760698,
                  y : -10.2305055320612
                  },
                  position : {
                  'x' : -10.7771894760698,
                  'y' : -102.305055320612
                  },
  },
{
                  data: {
                  id: 'CAGL0M05775g',
                  name: 'CAGL0M05775g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M05775g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted RNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M05775g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M05775g'  target='_blank'> Link to GRYC</a>",
                  x : 0.677453544741514,
                  y : 3.11330620130299
                  },
                  position : {
                  'x' : 6.77453544741514,
                  'y' : 31.1330620130299
                  },
  },
{
                  data: {
                  id: 'CAGL0M09669g',
                  name: 'CAGL0M09669g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M09669g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have calcium-dependent cysteine-type endopeptidase activity, cysteine-type endopeptidase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M09669g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M09669g'  target='_blank'> Link to GRYC</a>",
                  x : -4.38675561431535,
                  y : -7.01781991918551
                  },
                  position : {
                  'x' : -43.8675561431535,
                  'y' : -70.1781991918551
                  },
  },
{
                  data: {
                  id: 'CAGL0M10241g',
                  name: 'CAGL0M10241g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M10241g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA binding activity, role in macroautophagy and cytosolic large ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M10241g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M10241g'  target='_blank'> Link to GRYC</a>",
                  x : 2.07103406187116,
                  y : 2.5317329928602
                  },
                  position : {
                  'x' : 20.7103406187116,
                  'y' : 25.317329928602
                  },
  },
{
                  data: {
                  id: 'CAGL0M11110g',
                  name: 'CAGL0M11110g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M11110g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in rRNA processing and preribosome, large subunit precursor localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M11110g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M11110g'  target='_blank'> Link to GRYC</a>",
                  x : 1.07183320635925,
                  y : 2.7162291117041
                  },
                  position : {
                  'x' : 10.7183320635925,
                  'y' : 27.162291117041
                  },
  },
{
                  data: {
                  id: 'CAGL0M13717g',
                  name: 'CAGL0M13717g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M13717g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have amidophosphoribosyltransferase activity and role in 'de novo' IMP biosynthetic process, adenine metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M13717g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M13717g'  target='_blank'> Link to GRYC</a>",
                  x : -2.42572731841421,
                  y : -4.80407316801637
                  },
                  position : {
                  'x' : -24.2572731841421,
                  'y' : -48.0407316801637
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
         options += '<option value="' + id + '" />';
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
