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
                  id: 'CAGL0A01067g',
                  name: 'CAGL0A01067g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A01067g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : KEL3, C. albicans SC5314 : C1_13720W_A, C. dubliniensis CD36 : Cd36_12710, C. parapsilosis CDC317 : CPAR2_201590 and C. auris B8441 : B9J08_002506</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01067g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01067g'  target='_blank'> Link to GRYC</a>",
                  x : 6.27293929743237,
                  y : 9.07400589341372
                  },
                  position : {
                  'x' : 62.7293929743237,
                  'y' : 90.7400589341372
                  },
  },
{
                  data: {
                  id: 'CAGL0A01089g',
                  name: 'CAGL0A01089g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A01089g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted alcohol O-acetyltransferase activity and role in alcohol metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01089g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01089g'  target='_blank'> Link to GRYC</a>",
                  x : 5.27157141649191,
                  y : -1.48285392215379
                  },
                  position : {
                  'x' : 52.7157141649191,
                  'y' : -14.8285392215379
                  },
  },
{
                  data: {
                  id: 'CAGL0A01650g',
                  name: 'CAGL0A01650g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A01650g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01650g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01650g'  target='_blank'> Link to GRYC</a>",
                  x : 1.64296263041125,
                  y : 0.410212965454916
                  },
                  position : {
                  'x' : 16.4296263041125,
                  'y' : 4.10212965454916
                  },
  },
{
                  data: {
                  id: 'CAGL0A02277g',
                  name: 'CAGL0A02277g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffffff',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A02277g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02277g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02277g'  target='_blank'> Link to GRYC</a>",
                  x : 9.61091378265043,
                  y : 12.4184161397536
                  },
                  position : {
                  'x' : 96.1091378265043,
                  'y' : 124.184161397536
                  },
  },
{
                  data: {
                  id: 'CAGL0A02299g',
                  name: 'CAGL0A02299g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A02299g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02299g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02299g'  target='_blank'> Link to GRYC</a>",
                  x : 0.870689497504904,
                  y : 1.16207365093923
                  },
                  position : {
                  'x' : 8.70689497504904,
                  'y' : 11.6207365093923
                  },
  },
{
                  data: {
                  id: 'CAGL0B00594g',
                  name: 'CAGL0B00594g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B00594g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Predicted GPI-linked protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B00594g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B00594g'  target='_blank'> Link to GRYC</a>",
                  x : 7.04873804601058,
                  y : 7.88003417688522
                  },
                  position : {
                  'x' : 70.4873804601058,
                  'y' : 78.8003417688522
                  },
  },
{
                  data: {
                  id: 'CAGL0B00946g',
                  name: 'CAGL0B00946g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B00946g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytosol localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B00946g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B00946g'  target='_blank'> Link to GRYC</a>",
                  x : 3.04397015732364,
                  y : 0.624440803092027
                  },
                  position : {
                  'x' : 30.4397015732364,
                  'y' : 6.24440803092027
                  },
  },
{
                  data: {
                  id: 'CAGL0B02585g',
                  name: 'CAGL0B02585g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B02585g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ER-dependent peroxisome organization, endoplasmic reticulum inheritance, endoplasmic reticulum tubular network maintenance and endoplasmic reticulum tubular network organization, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02585g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02585g'  target='_blank'> Link to GRYC</a>",
                  x : 2.63801282658804,
                  y : 7.93156644499243
                  },
                  position : {
                  'x' : 26.3801282658804,
                  'y' : 79.3156644499243
                  },
  },
{
                  data: {
                  id: 'CAGL0B02904g',
                  name: 'CAGL0B02904g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B02904g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Beta mannosyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02904g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02904g'  target='_blank'> Link to GRYC</a>",
                  x : 1.40636437551751,
                  y : 3.89954044728633
                  },
                  position : {
                  'x' : 14.0636437551751,
                  'y' : 38.9954044728633
                  },
  },
{
                  data: {
                  id: 'CAGL0B02970g',
                  name: 'CAGL0B02970g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffffff',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B02970g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Beta mannosyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02970g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02970g'  target='_blank'> Link to GRYC</a>",
                  x : -2.28648885487322,
                  y : 6.4995632240294
                  },
                  position : {
                  'x' : -22.8648885487322,
                  'y' : 64.995632240294
                  },
  },
{
                  data: {
                  id: 'CAGL0C00110g',
                  name: 'CAGL0C00110g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C00110g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Sub-telomerically encoded adhesin with a role in cell adhesion; binds to ligands containing a terminal galactose residue; expressed during murine urinary tract infection, biofilm-upregulated; belongs to adhesin cluster I</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C00110g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C00110g'  target='_blank'> Link to GRYC</a>",
                  x : -1.12878829802175,
                  y : 7.19657687251147
                  },
                  position : {
                  'x' : -11.2878829802175,
                  'y' : 71.9657687251147
                  },
  },
{
                  data: {
                  id: 'CAGL0C00275g',
                  name: 'CAGL0C00275g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C00275g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative cysteine protease; protein differentially expressed in azole resistant strain; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C00275g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C00275g'  target='_blank'> Link to GRYC</a>",
                  x : -2.71339646764153,
                  y : 0.352302182771173
                  },
                  position : {
                  'x' : -27.1339646764153,
                  'y' : 3.52302182771173
                  },
  },
{
                  data: {
                  id: 'CAGL0C00968g',
                  name: 'CAGL0C00968g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C00968g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Adhesin-like protein with a predicted role in cell adhesion; belongs to adhesin cluster VII; predicted GPI-anchor</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C00968g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C00968g'  target='_blank'> Link to GRYC</a>",
                  x : -1.44306274269253,
                  y : 6.01405090438471
                  },
                  position : {
                  'x' : -14.4306274269253,
                  'y' : 60.1405090438471
                  },
  },
{
                  data: {
                  id: 'CAGL0C01133g',
                  name: 'CAGL0C01133g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C01133g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Adhesin-like protein; belongs to adhesin cluster VII; predicted GPI anchor</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C01133g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C01133g'  target='_blank'> Link to GRYC</a>",
                  x : -1.59643756802139,
                  y : 6.29760680702312
                  },
                  position : {
                  'x' : -15.9643756802139,
                  'y' : 62.9760680702312
                  },
  },
{
                  data: {
                  id: 'CAGL0C01749g',
                  name: 'CAGL0C01749g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C01749g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 5'-deoxynucleotidase activity, GMP 5'-nucleotidase activity and role in deoxyribonucleoside monophosphate catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C01749g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C01749g'  target='_blank'> Link to GRYC</a>",
                  x : 9.98717091282134,
                  y : 5.91191053891716
                  },
                  position : {
                  'x' : 99.8717091282134,
                  'y' : 59.1191053891716
                  },
  },
{
                  data: {
                  id: 'CAGL0C02365g',
                  name: 'CAGL0C02365g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C02365g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C02365g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C02365g'  target='_blank'> Link to GRYC</a>",
                  x : 2.83013026205573,
                  y : 1.84320666283513
                  },
                  position : {
                  'x' : 28.3013026205573,
                  'y' : 18.4320666283513
                  },
  },
{
                  data: {
                  id: 'CAGL0C03487g',
                  name: 'CAGL0C03487g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C03487g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in phospholipid translocation and trans-Golgi network localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03487g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03487g'  target='_blank'> Link to GRYC</a>",
                  x : 10.9309100562935,
                  y : 5.37605648643151
                  },
                  position : {
                  'x' : 109.309100562935,
                  'y' : 53.7605648643151
                  },
  },
{
                  data: {
                  id: 'CAGL0C03608g',
                  name: 'CAGL0C03608g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C03608g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03608g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03608g'  target='_blank'> Link to GRYC</a>",
                  x : -0.759952193596164,
                  y : 6.86957468555092
                  },
                  position : {
                  'x' : -7.59952193596164,
                  'y' : 68.6957468555092
                  },
  },
{
                  data: {
                  id: 'CAGL0C03872g',
                  name: 'CAGL0C03872g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C03872g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative GPI-linked cell wall protein involved in sterol uptake</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03872g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03872g'  target='_blank'> Link to GRYC</a>",
                  x : 5.10029299635935,
                  y : -3.1685498902614
                  },
                  position : {
                  'x' : 51.0029299635935,
                  'y' : -31.685498902614
                  },
  },
{
                  data: {
                  id: 'CAGL0D00264g',
                  name: 'CAGL0D00264g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D00264g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative nuclear phosphatase regulatory subunit; gene is downregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00264g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00264g'  target='_blank'> Link to GRYC</a>",
                  x : 5.72101188427836,
                  y : 2.11488709497329
                  },
                  position : {
                  'x' : 57.2101188427836,
                  'y' : 21.1488709497329
                  },
  },
{
                  data: {
                  id: 'CAGL0D01265g',
                  name: 'CAGL0D01265g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffffff',
                  faveColorHigh: '#ffffff',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D01265g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Copper-binding metallothionein, involved in sequestration of metal ions; inducible by copper and silver; gene used for molecular typing of C. glabrata strain isolates</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D01265g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D01265g'  target='_blank'> Link to GRYC</a>",
                  x : 12.3373380257511,
                  y : -0.251714724233391
                  },
                  position : {
                  'x' : 123.373380257511,
                  'y' : -2.51714724233391
                  },
  },
{
                  data: {
                  id: 'CAGL0D01474g',
                  name: 'CAGL0D01474g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D01474g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D01474g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D01474g'  target='_blank'> Link to GRYC</a>",
                  x : 2.95751966724431,
                  y : 1.40144422347963
                  },
                  position : {
                  'x' : 29.5751966724431,
                  'y' : 14.0144422347963
                  },
  },
{
                  data: {
                  id: 'CAGL0D05434g',
                  name: 'CAGL0D05434g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D05434g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D05434g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D05434g'  target='_blank'> Link to GRYC</a>",
                  x : 12.1657920294272,
                  y : 4.39543778349678
                  },
                  position : {
                  'x' : 121.657920294272,
                  'y' : 43.9543778349678
                  },
  },
{
                  data: {
                  id: 'CAGL0E00803g',
                  name: 'CAGL0E00803g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E00803g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative small cytosolic stress-induced chaperone; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E00803g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E00803g'  target='_blank'> Link to GRYC</a>",
                  x : 3.16383123543848,
                  y : 2.33951342958038
                  },
                  position : {
                  'x' : 31.6383123543848,
                  'y' : 23.3951342958038
                  },
  },
{
                  data: {
                  id: 'CAGL0E01881g',
                  name: 'CAGL0E01881g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E01881g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative aspartic protease; member of a YPS gene cluster that is required for virulence in mice; induced in response to low pH and high temperature</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01881g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01881g'  target='_blank'> Link to GRYC</a>",
                  x : 1.07560408771303,
                  y : 4.73375057244119
                  },
                  position : {
                  'x' : 10.7560408771303,
                  'y' : 47.3375057244119
                  },
  },
{
                  data: {
                  id: 'CAGL0E02255g',
                  name: 'CAGL0E02255g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E02255g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in fungal-type cell wall organization and extrinsic component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E02255g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E02255g'  target='_blank'> Link to GRYC</a>",
                  x : 6.62438569433674,
                  y : 13.7491300981369
                  },
                  position : {
                  'x' : 66.2438569433674,
                  'y' : 137.491300981369
                  },
  },
{
                  data: {
                  id: 'CAGL0E03025g',
                  name: 'CAGL0E03025g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E03025g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : ECL1 and Saccharomyces cerevisiae S288C : YGR146C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E03025g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E03025g'  target='_blank'> Link to GRYC</a>",
                  x : 4.01890825010761,
                  y : 0.169217239910585
                  },
                  position : {
                  'x' : 40.1890825010761,
                  'y' : 1.69217239910585
                  },
  },
{
                  data: {
                  id: 'CAGL0E04224g',
                  name: 'CAGL0E04224g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E04224g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04224g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04224g'  target='_blank'> Link to GRYC</a>",
                  x : -0.501473248301579,
                  y : 5.98004734212174
                  },
                  position : {
                  'x' : -5.01473248301579,
                  'y' : 59.8004734212174
                  },
  },
{
                  data: {
                  id: 'CAGL0E04548g',
                  name: 'CAGL0E04548g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E04548g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YOR020W-A and Saccharomyces cerevisiae S288C : YOR020W-A</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04548g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04548g'  target='_blank'> Link to GRYC</a>",
                  x : 0.33770976878768,
                  y : -0.515558155016909
                  },
                  position : {
                  'x' : 3.3770976878768,
                  'y' : -5.15558155016909
                  },
  },
{
                  data: {
                  id: 'CAGL0E04554g',
                  name: 'CAGL0E04554g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E04554g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04554g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04554g'  target='_blank'> Link to GRYC</a>",
                  x : 2.76498843194771,
                  y : 6.74371762542718
                  },
                  position : {
                  'x' : 27.6498843194771,
                  'y' : 67.4371762542718
                  },
  },
{
                  data: {
                  id: 'CAGL0E05588g',
                  name: 'CAGL0E05588g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0E05588g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-directed DNA polymerase activity, deoxycytidyl transferase activity and role in error-free translesion synthesis, error-prone translesion synthesis</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05588g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05588g'  target='_blank'> Link to GRYC</a>",
                  x : 4.17816646393327,
                  y : 1.00138095823427
                  },
                  position : {
                  'x' : 41.7816646393327,
                  'y' : 10.0138095823427
                  },
  },
{
                  data: {
                  id: 'CAGL0E06072g',
                  name: 'CAGL0E06072g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E06072g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YMR181C and Saccharomyces cerevisiae S288C : YMR181C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E06072g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E06072g'  target='_blank'> Link to GRYC</a>",
                  x : 1.07549257882408,
                  y : 2.30959658356675
                  },
                  position : {
                  'x' : 10.7549257882408,
                  'y' : 23.0959658356675
                  },
  },
{
                  data: {
                  id: 'CAGL0F01463g',
                  name: 'CAGL0F01463g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F01463g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative GPI-linked cell wall mannoprotein of the Srp1p/Tip1p family</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01463g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01463g'  target='_blank'> Link to GRYC</a>",
                  x : 5.17783614146829,
                  y : 2.25821393458861
                  },
                  position : {
                  'x' : 51.7783614146829,
                  'y' : 22.5821393458861
                  },
  },
{
                  data: {
                  id: 'CAGL0F01485g',
                  name: 'CAGL0F01485g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F01485g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative GPI-linked cell wall mannoprotein of the Srp1p/Tip1p family</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01485g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01485g'  target='_blank'> Link to GRYC</a>",
                  x : 2.55888922014737,
                  y : 1.58462609002567
                  },
                  position : {
                  'x' : 25.5888922014737,
                  'y' : 15.8462609002567
                  },
  },
{
                  data: {
                  id: 'CAGL0F02145g',
                  name: 'CAGL0F02145g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F02145g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have calmodulin binding activity and role in lysosomal microautophagy, polyphosphate metabolic process, protein localization, vacuolar transport, vacuole fusion, non-autophagic</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F02145g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F02145g'  target='_blank'> Link to GRYC</a>",
                  x : -0.137612244256384,
                  y : 5.1830874065591
                  },
                  position : {
                  'x' : -1.37612244256384,
                  'y' : 51.830874065591
                  },
  },
{
                  data: {
                  id: 'CAGL0F04191g',
                  name: 'CAGL0F04191g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F04191g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YBL029C-A, C. albicans SC5314 : C1_02060W_A, C. dubliniensis CD36 : Cd36_01920, C. parapsilosis CDC317 : CPAR2_108200 and C. auris B8441 : B9J08_000493</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04191g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04191g'  target='_blank'> Link to GRYC</a>",
                  x : 1.50341539082837,
                  y : 4.92908784101308
                  },
                  position : {
                  'x' : 15.0341539082837,
                  'y' : 49.2908784101308
                  },
  },
{
                  data: {
                  id: 'CAGL0F04631g',
                  name: 'CAGL0F04631g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F04631g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : MOH1, C. albicans SC5314 : C4_03430W_A/MOH1, C. dubliniensis CD36 : Cd36_43220, C. parapsilosis CDC317 : CPAR2_403470 and C. auris B8441 : B9J08_003595</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04631g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04631g'  target='_blank'> Link to GRYC</a>",
                  x : 0.51627475530795,
                  y : -2.85523268744999
                  },
                  position : {
                  'x' : 5.1627475530795,
                  'y' : -28.5523268744999
                  },
  },
{
                  data: {
                  id: 'CAGL0F04807g',
                  name: 'CAGL0F04807g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F04807g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in pathogenesis and cell surface, hyphal cell wall, integral component of mitochondrial outer membrane, membrane, mitochondrial outer membrane, mitochondrion, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04807g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04807g'  target='_blank'> Link to GRYC</a>",
                  x : 1.48809940167072,
                  y : 2.40191345636366
                  },
                  position : {
                  'x' : 14.8809940167072,
                  'y' : 24.0191345636366
                  },
  },
{
                  data: {
                  id: 'CAGL0F05093g',
                  name: 'CAGL0F05093g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F05093g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in microtubule-based process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F05093g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F05093g'  target='_blank'> Link to GRYC</a>",
                  x : 1.39626220848799,
                  y : 7.46318951633239
                  },
                  position : {
                  'x' : 13.9626220848799,
                  'y' : 74.6318951633239
                  },
  },
{
                  data: {
                  id: 'CAGL0F05709g',
                  name: 'CAGL0F05709g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F05709g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in bipolar cellular bud site selection, cellular cation homeostasis and nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F05709g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F05709g'  target='_blank'> Link to GRYC</a>",
                  x : 1.46682397207527,
                  y : 10.0224277672104
                  },
                  position : {
                  'x' : 14.6682397207527,
                  'y' : 100.224277672104
                  },
  },
{
                  data: {
                  id: 'CAGL0F07953g',
                  name: 'CAGL0F07953g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F07953g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : SPG1 and Saccharomyces cerevisiae S288C : YGR236C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F07953g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F07953g'  target='_blank'> Link to GRYC</a>",
                  x : -1.43148906471139,
                  y : -0.572298556162121
                  },
                  position : {
                  'x' : -14.3148906471139,
                  'y' : -5.72298556162121
                  },
  },
{
                  data: {
                  id: 'CAGL0F08217g',
                  name: 'CAGL0F08217g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F08217g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytoplasmic stress granule localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F08217g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F08217g'  target='_blank'> Link to GRYC</a>",
                  x : 1.31617633725993,
                  y : 2.71964442563351
                  },
                  position : {
                  'x' : 13.1617633725993,
                  'y' : 27.1964442563351
                  },
  },
{
                  data: {
                  id: 'CAGL0G01122g',
                  name: 'CAGL0G01122g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G01122g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G01122g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G01122g'  target='_blank'> Link to GRYC</a>",
                  x : 0.249878843843012,
                  y : 0.567924506603165
                  },
                  position : {
                  'x' : 2.49878843843012,
                  'y' : 5.67924506603165
                  },
  },
{
                  data: {
                  id: 'CAGL0G02849g',
                  name: 'CAGL0G02849g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G02849g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have endoplasmic reticulum, nuclear envelope localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G02849g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G02849g'  target='_blank'> Link to GRYC</a>",
                  x : 0.0137154925412335,
                  y : 1.06161513870072
                  },
                  position : {
                  'x' : 0.137154925412335,
                  'y' : 10.6161513870072
                  },
  },
{
                  data: {
                  id: 'CAGL0G03289g',
                  name: 'CAGL0G03289g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G03289g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Heat shock protein of the HSP70 family</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G03289g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G03289g'  target='_blank'> Link to GRYC</a>",
                  x : 4.06806544795553,
                  y : -3.79702268164176
                  },
                  position : {
                  'x' : 40.6806544795553,
                  'y' : -37.9702268164176
                  },
  },
{
                  data: {
                  id: 'CAGL0G04433g',
                  name: 'CAGL0G04433g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G04433g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : PRM10, C. albicans SC5314 : C7_01940C_A, C. dubliniensis CD36 : Cd36_71750, C. parapsilosis CDC317 : CPAR2_703450 and C. auris B8441 : B9J08_001559</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G04433g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G04433g'  target='_blank'> Link to GRYC</a>",
                  x : 4.50279252839758,
                  y : 0.996287380822209
                  },
                  position : {
                  'x' : 45.0279252839758,
                  'y' : 9.96287380822209
                  },
  },
{
                  data: {
                  id: 'CAGL0G05566g',
                  name: 'CAGL0G05566g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G05566g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ascospore formation, cellular response to drug, fungal-type cell wall organization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G05566g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G05566g'  target='_blank'> Link to GRYC</a>",
                  x : 5.85426907439049,
                  y : 8.33518440869647
                  },
                  position : {
                  'x' : 58.5426907439049,
                  'y' : 83.3518440869647
                  },
  },
{
                  data: {
                  id: 'CAGL0G05830g',
                  name: 'CAGL0G05830g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G05830g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G05830g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G05830g'  target='_blank'> Link to GRYC</a>",
                  x : 1.15739833947621,
                  y : 3.14458868427759
                  },
                  position : {
                  'x' : 11.5739833947621,
                  'y' : 31.4458868427759
                  },
  },
{
                  data: {
                  id: 'CAGL0G05962g',
                  name: 'CAGL0G05962g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G05962g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted integral component of membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G05962g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G05962g'  target='_blank'> Link to GRYC</a>",
                  x : 2.23969583204449,
                  y : 2.75233026333299
                  },
                  position : {
                  'x' : 22.3969583204449,
                  'y' : 27.5233026333299
                  },
  },
{
                  data: {
                  id: 'CAGL0G06006g',
                  name: 'CAGL0G06006g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G06006g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have endopeptidase inhibitor activity and role in vacuole fusion, non-autophagic</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06006g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06006g'  target='_blank'> Link to GRYC</a>",
                  x : -0.364211931523795,
                  y : 2.05171042152071
                  },
                  position : {
                  'x' : -3.64211931523795,
                  'y' : 20.5171042152071
                  },
  },
{
                  data: {
                  id: 'CAGL0G06050g',
                  name: 'CAGL0G06050g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G06050g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06050g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06050g'  target='_blank'> Link to GRYC</a>",
                  x : 12.4390025374931,
                  y : 9.58461219864486
                  },
                  position : {
                  'x' : 124.390025374931,
                  'y' : 95.8461219864486
                  },
  },
{
                  data: {
                  id: 'CAGL0G06798g',
                  name: 'CAGL0G06798g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G06798g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in iron ion homeostasis and cytoplasm, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06798g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06798g'  target='_blank'> Link to GRYC</a>",
                  x : 8.17249986183912,
                  y : 13.2014764168974
                  },
                  position : {
                  'x' : 81.7249986183912,
                  'y' : 132.014764168974
                  },
  },
{
                  data: {
                  id: 'CAGL0G06952g',
                  name: 'CAGL0G06952g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G06952g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have calmodulin binding, inositol hexakisphosphate binding, polyphosphate kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06952g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06952g'  target='_blank'> Link to GRYC</a>",
                  x : 0.189501977034906,
                  y : 5.05312137881167
                  },
                  position : {
                  'x' : 1.89501977034906,
                  'y' : 50.5312137881167
                  },
  },
{
                  data: {
                  id: 'CAGL0G07711g',
                  name: 'CAGL0G07711g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G07711g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G07711g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G07711g'  target='_blank'> Link to GRYC</a>",
                  x : -0.46045131894126,
                  y : 7.20516508085308
                  },
                  position : {
                  'x' : -4.6045131894126,
                  'y' : 72.0516508085308
                  },
  },
{
                  data: {
                  id: 'CAGL0G10175g',
                  name: 'CAGL0G10175g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0G10175g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Adhesin-like protein; identified in cell wall extracts by mass spectrometry; belongs to adhesin cluster IV; predicted GPI anchor</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G10175g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G10175g'  target='_blank'> Link to GRYC</a>",
                  x : 7.60279118494504,
                  y : -2.72979487503448
                  },
                  position : {
                  'x' : 76.0279118494504,
                  'y' : -27.2979487503448
                  },
  },
{
                  data: {
                  id: 'CAGL0H00572g',
                  name: 'CAGL0H00572g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H00572g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted integral component of membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00572g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00572g'  target='_blank'> Link to GRYC</a>",
                  x : 11.3115124495644,
                  y : 5.03076416128492
                  },
                  position : {
                  'x' : 113.115124495644,
                  'y' : 50.3076416128492
                  },
  },
{
                  data: {
                  id: 'CAGL0H00594g',
                  name: 'CAGL0H00594g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H00594g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural molecule activity, role in protein localization to spindle pole body, spindle pole body duplication and central plaque of spindle pole body localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00594g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00594g'  target='_blank'> Link to GRYC</a>",
                  x : 11.4959336262705,
                  y : 5.63563056742678
                  },
                  position : {
                  'x' : 114.959336262705,
                  'y' : 56.3563056742678
                  },
  },
{
                  data: {
                  id: 'CAGL0H00825g',
                  name: 'CAGL0H00825g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H00825g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted nucleoside-triphosphatase activity, nucleotide binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00825g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00825g'  target='_blank'> Link to GRYC</a>",
                  x : 5.13997652585847,
                  y : -0.414123526188133
                  },
                  position : {
                  'x' : 51.3997652585847,
                  'y' : -4.14123526188133
                  },
  },
{
                  data: {
                  id: 'CAGL0H02563g',
                  name: 'CAGL0H02563g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H02563g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Predicted GPI-linked protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02563g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02563g'  target='_blank'> Link to GRYC</a>",
                  x : -1.5391664751656,
                  y : 4.79580635658814
                  },
                  position : {
                  'x' : -15.391664751656,
                  'y' : 47.9580635658814
                  },
  },
{
                  data: {
                  id: 'CAGL0H02893g',
                  name: 'CAGL0H02893g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H02893g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted deaminase activity and role in purine ribonucleoside monophosphate biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02893g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02893g'  target='_blank'> Link to GRYC</a>",
                  x : 1.87640303450668,
                  y : 2.95557877168683
                  },
                  position : {
                  'x' : 18.7640303450668,
                  'y' : 29.5557877168683
                  },
  },
{
                  data: {
                  id: 'CAGL0H07337g',
                  name: 'CAGL0H07337g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H07337g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H07337g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H07337g'  target='_blank'> Link to GRYC</a>",
                  x : 13.9028183191677,
                  y : 6.65932587935817
                  },
                  position : {
                  'x' : 139.028183191677,
                  'y' : 66.5932587935817
                  },
  },
{
                  data: {
                  id: 'CAGL0H08624g',
                  name: 'CAGL0H08624g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H08624g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in chromosome segregation, establishment of mitotic sister chromatid cohesion and condensed nuclear chromosome kinetochore localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H08624g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H08624g'  target='_blank'> Link to GRYC</a>",
                  x : 1.58108303460281,
                  y : 6.46323541919302
                  },
                  position : {
                  'x' : 15.8108303460281,
                  'y' : 64.6323541919302
                  },
  },
{
                  data: {
                  id: 'CAGL0H08844g',
                  name: 'CAGL0H08844g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H08844g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative adhesin-like protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H08844g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H08844g'  target='_blank'> Link to GRYC</a>",
                  x : 1.82962644378361,
                  y : -1.32667202607251
                  },
                  position : {
                  'x' : 18.2962644378361,
                  'y' : -13.2667202607251
                  },
  },
{
                  data: {
                  id: 'CAGL0H09592g',
                  name: 'CAGL0H09592g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#66ff66',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0H09592g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative GPI-linked cell wall protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H09592g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H09592g'  target='_blank'> Link to GRYC</a>",
                  x : 3.74754940853409,
                  y : 14.5444144525222
                  },
                  position : {
                  'x' : 37.4754940853409,
                  'y' : 145.444144525222
                  },
  },
{
                  data: {
                  id: 'CAGL0H09614g',
                  name: 'CAGL0H09614g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#66ff66',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0H09614g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative GPI-linked cell wall protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H09614g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H09614g'  target='_blank'> Link to GRYC</a>",
                  x : 2.81579937600088,
                  y : 14.5895007722577
                  },
                  position : {
                  'x' : 28.1579937600088,
                  'y' : 145.895007722577
                  },
  },
{
                  data: {
                  id: 'CAGL0H09966g',
                  name: 'CAGL0H09966g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0H09966g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : FMP23 and Saccharomyces cerevisiae S288C : YBR047W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H09966g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H09966g'  target='_blank'> Link to GRYC</a>",
                  x : 9.1158690499749,
                  y : -3.2042190200938
                  },
                  position : {
                  'x' : 91.158690499749,
                  'y' : -32.042190200938
                  },
  },
{
                  data: {
                  id: 'CAGL0H10010g',
                  name: 'CAGL0H10010g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H10010g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H10010g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H10010g'  target='_blank'> Link to GRYC</a>",
                  x : 1.2515722809018,
                  y : 1.82664313734239
                  },
                  position : {
                  'x' : 12.515722809018,
                  'y' : 18.2664313734239
                  },
  },
{
                  data: {
                  id: 'CAGL0I00550g',
                  name: 'CAGL0I00550g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I00550g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YLR297W and Saccharomyces cerevisiae S288C : YLR297W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I00550g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I00550g'  target='_blank'> Link to GRYC</a>",
                  x : 3.53936456084446,
                  y : 1.9345582208745
                  },
                  position : {
                  'x' : 35.3936456084446,
                  'y' : 19.345582208745
                  },
  },
{
                  data: {
                  id: 'CAGL0I02728g',
                  name: 'CAGL0I02728g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I02728g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in mitochondrial respiratory chain complex assembly and cytoplasm, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02728g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02728g'  target='_blank'> Link to GRYC</a>",
                  x : 0.851685347752161,
                  y : 6.20890184827425
                  },
                  position : {
                  'x' : 8.51685347752161,
                  'y' : 62.0890184827425
                  },
  },
{
                  data: {
                  id: 'CAGL0I04328g',
                  name: 'CAGL0I04328g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I04328g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YJL133C-A and Saccharomyces cerevisiae S288C : YJL133C-A</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04328g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04328g'  target='_blank'> Link to GRYC</a>",
                  x : 1.19368547392469,
                  y : 0.209169584291522
                  },
                  position : {
                  'x' : 11.9368547392469,
                  'y' : 2.09169584291522
                  },
  },
{
                  data: {
                  id: 'CAGL0I05610g',
                  name: 'CAGL0I05610g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I05610g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YNR014W and Saccharomyces cerevisiae S288C : YNR014W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I05610g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I05610g'  target='_blank'> Link to GRYC</a>",
                  x : 3.53154355648324,
                  y : -1.06803746438453
                  },
                  position : {
                  'x' : 35.3154355648324,
                  'y' : -10.6803746438453
                  },
  },
{
                  data: {
                  id: 'CAGL0I05874g',
                  name: 'CAGL0I05874g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I05874g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Haloacid dehalogenase-like hydrolase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I05874g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I05874g'  target='_blank'> Link to GRYC</a>",
                  x : 1.59638802618875,
                  y : 1.63822388209197
                  },
                  position : {
                  'x' : 15.9638802618875,
                  'y' : 16.3822388209197
                  },
  },
{
                  data: {
                  id: 'CAGL0I06182g',
                  name: 'CAGL0I06182g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I06182g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Pir protein family member, putative cell wall component</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I06182g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I06182g'  target='_blank'> Link to GRYC</a>",
                  x : 3.01855896952334,
                  y : 6.22705983586591
                  },
                  position : {
                  'x' : 30.1855896952334,
                  'y' : 62.2705983586591
                  },
  },
{
                  data: {
                  id: 'CAGL0I06644g',
                  name: 'CAGL0I06644g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I06644g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative GPI-linked cell wall protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I06644g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I06644g'  target='_blank'> Link to GRYC</a>",
                  x : 9.18878143656532,
                  y : 6.82935968491148
                  },
                  position : {
                  'x' : 91.8878143656532,
                  'y' : 68.2935968491148
                  },
  },
{
                  data: {
                  id: 'CAGL0I07491g',
                  name: 'CAGL0I07491g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0I07491g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cellular zinc ion homeostasis</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I07491g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I07491g'  target='_blank'> Link to GRYC</a>",
                  x : 4.3354998503253,
                  y : -0.962631347092387
                  },
                  position : {
                  'x' : 43.354998503253,
                  'y' : -9.62631347092387
                  },
  },
{
                  data: {
                  id: 'CAGL0I08547g',
                  name: 'CAGL0I08547g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I08547g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YER156C, C. albicans SC5314 : C1_01910W_A, C. dubliniensis CD36 : Cd36_01750, C. parapsilosis CDC317 : CPAR2_108260 and C. auris B8441 : B9J08_001589</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I08547g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I08547g'  target='_blank'> Link to GRYC</a>",
                  x : 5.77407698709383,
                  y : 14.0178643500525
                  },
                  position : {
                  'x' : 57.7407698709383,
                  'y' : 140.178643500525
                  },
  },
{
                  data: {
                  id: 'CAGL0I10147g',
                  name: 'CAGL0I10147g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0I10147g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein with 32 tandem repeats; putative adhesin-like protein; belongs to adhesin cluster II</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10147g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10147g'  target='_blank'> Link to GRYC</a>",
                  x : -0.746547567943664,
                  y : 11.9967590669675
                  },
                  position : {
                  'x' : -7.46547567943664,
                  'y' : 119.967590669675
                  },
  },
{
                  data: {
                  id: 'CAGL0J02530g',
                  name: 'CAGL0J02530g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J02530g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative adhesion protein; predicted GPI-anchor; belongs to adhesin cluster VI</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J02530g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J02530g'  target='_blank'> Link to GRYC</a>",
                  x : 5.13481850060726,
                  y : 0.225209534337745
                  },
                  position : {
                  'x' : 51.3481850060726,
                  'y' : 2.25209534337745
                  },
  },
{
                  data: {
                  id: 'CAGL0J04004g',
                  name: 'CAGL0J04004g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J04004g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in lipid homeostasis, mitochondrion organization and integral component of mitochondrial membrane, mitochondrial outer membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04004g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04004g'  target='_blank'> Link to GRYC</a>",
                  x : 8.58267115486282,
                  y : 5.12657529391198
                  },
                  position : {
                  'x' : 85.8267115486282,
                  'y' : 51.2657529391198
                  },
  },
{
                  data: {
                  id: 'CAGL0J04202g',
                  name: 'CAGL0J04202g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J04202g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Heat shock protein; gene is upregulated in azole-resistant strain; expression upregulated in biofilm vs planktonic cell culture</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04202g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04202g'  target='_blank'> Link to GRYC</a>",
                  x : 5.29163819611481,
                  y : -5.16739043873444
                  },
                  position : {
                  'x' : 52.9163819611481,
                  'y' : -51.6739043873444
                  },
  },
{
                  data: {
                  id: 'CAGL0J04224g',
                  name: 'CAGL0J04224g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J04224g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATPase activator activity, unfolded protein binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04224g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04224g'  target='_blank'> Link to GRYC</a>",
                  x : -0.528186949350474,
                  y : 6.57122964913676
                  },
                  position : {
                  'x' : -5.28186949350474,
                  'y' : 65.7122964913676
                  },
  },
{
                  data: {
                  id: 'CAGL0J04466g',
                  name: 'CAGL0J04466g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0J04466g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in fungal-type cell wall organization, protein complex oligomerization and cell cortex of cell tip, membrane raft, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04466g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04466g'  target='_blank'> Link to GRYC</a>",
                  x : 2.8108090833886,
                  y : 12.6245094374281
                  },
                  position : {
                  'x' : 28.108090833886,
                  'y' : 126.245094374281
                  },
  },
{
                  data: {
                  id: 'CAGL0J05390g',
                  name: 'CAGL0J05390g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0J05390g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J05390g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J05390g'  target='_blank'> Link to GRYC</a>",
                  x : 1.13837714781483,
                  y : 8.86290790239267
                  },
                  position : {
                  'x' : 11.3837714781483,
                  'y' : 88.6290790239267
                  },
  },
{
                  data: {
                  id: 'CAGL0J06380g',
                  name: 'CAGL0J06380g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J06380g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATPase inhibitor activity, enzyme inhibitor activity, role in negative regulation of ATPase activity and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J06380g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J06380g'  target='_blank'> Link to GRYC</a>",
                  x : -1.65255024308976,
                  y : 7.16037298751733
                  },
                  position : {
                  'x' : -16.5255024308976,
                  'y' : 71.6037298751733
                  },
  },
{
                  data: {
                  id: 'CAGL0J06666g',
                  name: 'CAGL0J06666g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J06666g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YML108W, C. albicans SC5314 : CR_06330C_A, C. dubliniensis CD36 : Cd36_31830, C. parapsilosis CDC317 : CPAR2_204870 and C. auris B8441 : B9J08_000809</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J06666g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J06666g'  target='_blank'> Link to GRYC</a>",
                  x : -0.843911160748612,
                  y : 7.82610688882779
                  },
                  position : {
                  'x' : -8.43911160748612,
                  'y' : 78.2610688882779
                  },
  },
{
                  data: {
                  id: 'CAGL0J07568g',
                  name: 'CAGL0J07568g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J07568g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase II proximal promoter sequence-specific DNA binding, cysteine-type peptidase activity, double-stranded DNA binding, mRNA binding, single-stranded DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J07568g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J07568g'  target='_blank'> Link to GRYC</a>",
                  x : 2.4646344035866,
                  y : 1.19474087267383
                  },
                  position : {
                  'x' : 24.646344035866,
                  'y' : 11.9474087267383
                  },
  },
{
                  data: {
                  id: 'CAGL0J09262g',
                  name: 'CAGL0J09262g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J09262g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATPase binding activity, role in negative regulation of ATPase activity and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09262g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09262g'  target='_blank'> Link to GRYC</a>",
                  x : 3.93970982741076,
                  y : 1.65373743374911
                  },
                  position : {
                  'x' : 39.3970982741076,
                  'y' : 16.5373743374911
                  },
  },
{
                  data: {
                  id: 'CAGL0J10362g',
                  name: 'CAGL0J10362g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J10362g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 5'-deoxynucleotidase activity, GMP 5'-nucleotidase activity and role in deoxyribonucleoside monophosphate catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J10362g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J10362g'  target='_blank'> Link to GRYC</a>",
                  x : 7.83652649386244,
                  y : 9.02716539075262
                  },
                  position : {
                  'x' : 78.3652649386244,
                  'y' : 90.2716539075262
                  },
  },
{
                  data: {
                  id: 'CAGL0K00110g',
                  name: 'CAGL0K00110g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K00110g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative adhesin; identified in cell wall extracts by mass spectrometry; belongs to adhesin cluster V; predicted GPI-anchor</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K00110g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K00110g'  target='_blank'> Link to GRYC</a>",
                  x : 0.717498901676498,
                  y : 3.53197892987703
                  },
                  position : {
                  'x' : 7.17498901676498,
                  'y' : 35.3197892987703
                  },
  },
{
                  data: {
                  id: 'CAGL0K01177g',
                  name: 'CAGL0K01177g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K01177g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have tubulin binding activity, role in tubulin complex assembly and cytoplasm, polysome, prefoldin complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K01177g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K01177g'  target='_blank'> Link to GRYC</a>",
                  x : 10.7781732214647,
                  y : 4.96583744146209
                  },
                  position : {
                  'x' : 107.781732214647,
                  'y' : 49.6583744146209
                  },
  },
{
                  data: {
                  id: 'CAGL0K01771g',
                  name: 'CAGL0K01771g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0K01771g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted transferase activity, transferring acyl groups activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K01771g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K01771g'  target='_blank'> Link to GRYC</a>",
                  x : 13.1732818030338,
                  y : 1.24054472595716
                  },
                  position : {
                  'x' : 131.732818030338,
                  'y' : 12.4054472595716
                  },
  },
{
                  data: {
                  id: 'CAGL0K02409g',
                  name: 'CAGL0K02409g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0K02409g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have proton-transporting ATP synthase activity, rotational mechanism activity and role in ATP synthesis coupled proton transport, cristae formation, protein complex oligomerization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K02409g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K02409g'  target='_blank'> Link to GRYC</a>",
                  x : -1.92935359506611,
                  y : 8.40954173623216
                  },
                  position : {
                  'x' : -19.2935359506611,
                  'y' : 84.0954173623216
                  },
  },
{
                  data: {
                  id: 'CAGL0K03091g',
                  name: 'CAGL0K03091g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K03091g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in hydrogen peroxide-mediated programmed cell death</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K03091g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K03091g'  target='_blank'> Link to GRYC</a>",
                  x : 9.45144304320249,
                  y : 5.70525974621509
                  },
                  position : {
                  'x' : 94.5144304320249,
                  'y' : 57.0525974621509
                  },
  },
{
                  data: {
                  id: 'CAGL0K03459g',
                  name: 'CAGL0K03459g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K03459g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : SPG4 and Saccharomyces cerevisiae S288C : YMR107W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K03459g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K03459g'  target='_blank'> Link to GRYC</a>",
                  x : -0.961235848626848,
                  y : -1.61466213291822
                  },
                  position : {
                  'x' : -9.61235848626848,
                  'y' : -16.1466213291822
                  },
  },
{
                  data: {
                  id: 'CAGL0K04719g',
                  name: 'CAGL0K04719g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K04719g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YNL208W, C. albicans SC5314 : C3_05710W_A/RCT1, C. dubliniensis CD36 : Cd36_85650, C. parapsilosis CDC317 : CPAR2_807040 and C. auris B8441 : B9J08_002643</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04719g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04719g'  target='_blank'> Link to GRYC</a>",
                  x : 2.06706533543501,
                  y : 4.99436349176786
                  },
                  position : {
                  'x' : 20.6706533543501,
                  'y' : 49.9436349176786
                  },
  },
{
                  data: {
                  id: 'CAGL0K06105g',
                  name: 'CAGL0K06105g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K06105g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : BOP2 and Saccharomyces cerevisiae S288C : YLR267W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K06105g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K06105g'  target='_blank'> Link to GRYC</a>",
                  x : 11.5659153802141,
                  y : -1.67312868108457
                  },
                  position : {
                  'x' : 115.659153802141,
                  'y' : -16.7312868108457
                  },
  },
{
                  data: {
                  id: 'CAGL0K06633g',
                  name: 'CAGL0K06633g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K06633g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in attachment of spindle microtubules to kinetochore, protein localization to kinetochore and COMA complex, kinetochore localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K06633g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K06633g'  target='_blank'> Link to GRYC</a>",
                  x : 10.7501443090899,
                  y : 6.03160405847481
                  },
                  position : {
                  'x' : 107.501443090899,
                  'y' : 60.3160405847481
                  },
  },
{
                  data: {
                  id: 'CAGL0K07183g',
                  name: 'CAGL0K07183g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K07183g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07183g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07183g'  target='_blank'> Link to GRYC</a>",
                  x : 3.06838075944009,
                  y : 8.97929718649702
                  },
                  position : {
                  'x' : 30.6838075944009,
                  'y' : 89.7929718649702
                  },
  },
{
                  data: {
                  id: 'CAGL0K07205g',
                  name: 'CAGL0K07205g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K07205g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07205g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07205g'  target='_blank'> Link to GRYC</a>",
                  x : 7.88097663601234,
                  y : 10.1483839425853
                  },
                  position : {
                  'x' : 78.8097663601234,
                  'y' : 101.483839425853
                  },
  },
{
                  data: {
                  id: 'CAGL0K07546g',
                  name: 'CAGL0K07546g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K07546g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Phosphate starvation inducible acid phosphatase; contains a phosphomutase-like domain; functionally complements a S. cerevisiae pho5 mutant; transcript abundance during phosphate starvation regulated by Pho4p</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07546g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07546g'  target='_blank'> Link to GRYC</a>",
                  x : 11.0361122854066,
                  y : 11.234751373368
                  },
                  position : {
                  'x' : 110.361122854066,
                  'y' : 112.34751373368
                  },
  },
{
                  data: {
                  id: 'CAGL0K07678g',
                  name: 'CAGL0K07678g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K07678g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07678g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07678g'  target='_blank'> Link to GRYC</a>",
                  x : 2.51766692542634,
                  y : -5.19774941167337
                  },
                  position : {
                  'x' : 25.1766692542634,
                  'y' : -51.9774941167337
                  },
  },
{
                  data: {
                  id: 'CAGL0K08338g',
                  name: 'CAGL0K08338g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0K08338g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08338g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08338g'  target='_blank'> Link to GRYC</a>",
                  x : 2.66841449722025,
                  y : 10.7990878512971
                  },
                  position : {
                  'x' : 26.6841449722025,
                  'y' : 107.990878512971
                  },
  },
{
                  data: {
                  id: 'CAGL0K09042g',
                  name: 'CAGL0K09042g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K09042g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : TMA16, C. albicans SC5314 : C1_09330W_A, C. dubliniensis CD36 : Cd36_08800, C. parapsilosis CDC317 : CPAR2_207530 and C. auris B8441 : B9J08_002306</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K09042g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K09042g'  target='_blank'> Link to GRYC</a>",
                  x : 8.50306037497595,
                  y : 8.53020785319712
                  },
                  position : {
                  'x' : 85.0306037497595,
                  'y' : 85.3020785319711
                  },
  },
{
                  data: {
                  id: 'CAGL0K10824g',
                  name: 'CAGL0K10824g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0K10824g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YLR149C, C. albicans SC5314 : C7_03280C_A, C. dubliniensis CD36 : Cd36_72930, C. parapsilosis CDC317 : CPAR2_704080 and C. auris B8441 : B9J08_004261</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10824g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10824g'  target='_blank'> Link to GRYC</a>",
                  x : 6.75054376819677,
                  y : 3.06262840224511
                  },
                  position : {
                  'x' : 67.5054376819677,
                  'y' : 30.6262840224511
                  },
  },
{
                  data: {
                  id: 'CAGL0K11231g',
                  name: 'CAGL0K11231g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K11231g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have alpha-1,6-mannosyltransferase activity, role in cell wall mannoprotein biosynthetic process, division septum assembly, protein N-linked glycosylation and alpha-1,6-mannosyltransferase complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K11231g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K11231g'  target='_blank'> Link to GRYC</a>",
                  x : 10.1297279280502,
                  y : 6.45503652937233
                  },
                  position : {
                  'x' : 101.297279280502,
                  'y' : 64.5503652937232
                  },
  },
{
                  data: {
                  id: 'CAGL0K12980g',
                  name: 'CAGL0K12980g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K12980g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Beta mannosyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K12980g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K12980g'  target='_blank'> Link to GRYC</a>",
                  x : -4.34031630141382,
                  y : 4.74371294031791
                  },
                  position : {
                  'x' : -43.4031630141382,
                  'y' : 47.4371294031791
                  },
  },
{
                  data: {
                  id: 'CAGL0L00473g',
                  name: 'CAGL0L00473g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L00473g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YMR187C and Saccharomyces cerevisiae S288C : YMR187C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L00473g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L00473g'  target='_blank'> Link to GRYC</a>",
                  x : 1.95876616671921,
                  y : 2.11449393150634
                  },
                  position : {
                  'x' : 19.5876616671921,
                  'y' : 21.1449393150634
                  },
  },
{
                  data: {
                  id: 'CAGL0L00957g',
                  name: 'CAGL0L00957g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L00957g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L00957g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L00957g'  target='_blank'> Link to GRYC</a>",
                  x : 2.43496465252946,
                  y : 3.10835209453107
                  },
                  position : {
                  'x' : 24.3496465252946,
                  'y' : 31.0835209453107
                  },
  },
{
                  data: {
                  id: 'CAGL0L01551g',
                  name: 'CAGL0L01551g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L01551g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ascospore formation, cellular response to biotic stimulus, cellular response to chemical stimulus, cellular response to glucose starvation and cellular response to neutral pH, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L01551g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L01551g'  target='_blank'> Link to GRYC</a>",
                  x : 9.52054501769604,
                  y : 7.53356770632491
                  },
                  position : {
                  'x' : 95.2054501769604,
                  'y' : 75.3356770632491
                  },
  },
{
                  data: {
                  id: 'CAGL0L03696g',
                  name: 'CAGL0L03696g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L03696g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in transmembrane transport and integral component of membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03696g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03696g'  target='_blank'> Link to GRYC</a>",
                  x : 9.67873788526194,
                  y : 4.55755054792933
                  },
                  position : {
                  'x' : 96.7873788526194,
                  'y' : 45.5755054792933
                  },
  },
{
                  data: {
                  id: 'CAGL0L05786g',
                  name: 'CAGL0L05786g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L05786g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted nucleic acid binding, zinc ion binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L05786g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L05786g'  target='_blank'> Link to GRYC</a>",
                  x : 2.04585515239036,
                  y : 7.5602422288947
                  },
                  position : {
                  'x' : 20.4585515239036,
                  'y' : 75.602422288947
                  },
  },
{
                  data: {
                  id: 'CAGL0L06512g',
                  name: 'CAGL0L06512g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L06512g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in meiotic cell cycle</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06512g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06512g'  target='_blank'> Link to GRYC</a>",
                  x : 1.66095555252213,
                  y : 3.69168114325183
                  },
                  position : {
                  'x' : 16.6095555252213,
                  'y' : 36.9168114325183
                  },
  },
{
                  data: {
                  id: 'CAGL0L06864g',
                  name: 'CAGL0L06864g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L06864g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein related to ECM3; gene is downregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06864g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06864g'  target='_blank'> Link to GRYC</a>",
                  x : -0.0107911948388802,
                  y : -1.0853743204037
                  },
                  position : {
                  'x' : -0.107911948388802,
                  'y' : -10.853743204037
                  },
  },
{
                  data: {
                  id: 'CAGL0L07502g',
                  name: 'CAGL0L07502g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0L07502g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative GPI-linked cell wall protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L07502g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L07502g'  target='_blank'> Link to GRYC</a>",
                  x : 0.0255273627167606,
                  y : 9.93025836121123
                  },
                  position : {
                  'x' : 0.255273627167606,
                  'y' : 99.3025836121123
                  },
  },
{
                  data: {
                  id: 'CAGL0L08294g',
                  name: 'CAGL0L08294g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L08294g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in axial cellular bud site selection and cell division site, cellular bud neck, cellular bud neck septin ring, incipient cellular bud site, integral component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L08294g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L08294g'  target='_blank'> Link to GRYC</a>",
                  x : -0.687889600169594,
                  y : 7.12619551322762
                  },
                  position : {
                  'x' : -6.87889600169594,
                  'y' : 71.2619551322763
                  },
  },
{
                  data: {
                  id: 'CAGL0L10142g',
                  name: 'CAGL0L10142g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L10142g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative sphingolipid flippase; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10142g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10142g'  target='_blank'> Link to GRYC</a>",
                  x : 8.29673414001084,
                  y : 7.3592258189539
                  },
                  position : {
                  'x' : 82.9673414001084,
                  'y' : 73.592258189539
                  },
  },
{
                  data: {
                  id: 'CAGL0L10780g',
                  name: 'CAGL0L10780g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L10780g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have acetyl-CoA carboxylase activity, role in long-chain fatty acid biosynthetic process and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10780g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10780g'  target='_blank'> Link to GRYC</a>",
                  x : 7.87853089734435,
                  y : 3.59115295998634
                  },
                  position : {
                  'x' : 78.7853089734435,
                  'y' : 35.9115295998634
                  },
  },
{
                  data: {
                  id: 'CAGL0L11814g',
                  name: 'CAGL0L11814g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L11814g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycolipid floppase activity, ion transmembrane transporter activity, phosphorylative mechanism, phosphatidylcholine flippase activity, phosphatidylethanolamine flippase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L11814g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L11814g'  target='_blank'> Link to GRYC</a>",
                  x : -0.0369380308800986,
                  y : 6.59419469347065
                  },
                  position : {
                  'x' : -0.369380308800986,
                  'y' : 65.9419469347065
                  },
  },
{
                  data: {
                  id: 'CAGL0L12914g',
                  name: 'CAGL0L12914g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L12914g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YKL050C and Saccharomyces cerevisiae S288C : YKL050C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L12914g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L12914g'  target='_blank'> Link to GRYC</a>",
                  x : 0.709987248022685,
                  y : 6.86251693985631
                  },
                  position : {
                  'x' : 7.09987248022685,
                  'y' : 68.6251693985631
                  },
  },
{
                  data: {
                  id: 'CAGL0M00418g',
                  name: 'CAGL0M00418g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M00418g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have protein carrier activity, role in protein insertion into mitochondrial inner membrane and mitochondrial intermembrane space protein transporter complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M00418g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M00418g'  target='_blank'> Link to GRYC</a>",
                  x : -1.1764889133235,
                  y : 6.42267700765427
                  },
                  position : {
                  'x' : -11.764889133235,
                  'y' : 64.2267700765427
                  },
  },
{
                  data: {
                  id: 'CAGL0M01562g',
                  name: 'CAGL0M01562g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M01562g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YDR391C, Debaryomyces hansenii CBS767 : DEHA2D01298g and Saccharomyces cerevisiae S288C : YDR391C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M01562g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M01562g'  target='_blank'> Link to GRYC</a>",
                  x : 3.85390417525428,
                  y : 0.719663023511622
                  },
                  position : {
                  'x' : 38.5390417525428,
                  'y' : 7.19663023511622
                  },
  },
{
                  data: {
                  id: 'CAGL0M02211g',
                  name: 'CAGL0M02211g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M02211g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative aspartyl protease Saccharopepsin precursor; expression upregulated in biofilm vs planktonic cell culture</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M02211g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M02211g'  target='_blank'> Link to GRYC</a>",
                  x : 1.68774518261511,
                  y : 1.23323191150959
                  },
                  position : {
                  'x' : 16.8774518261511,
                  'y' : 12.3323191150959
                  },
  },
{
                  data: {
                  id: 'CAGL0M04675g',
                  name: 'CAGL0M04675g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M04675g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have thiosulfate sulfurtransferase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M04675g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M04675g'  target='_blank'> Link to GRYC</a>",
                  x : 2.51216964774013,
                  y : 2.55169570669719
                  },
                  position : {
                  'x' : 25.1216964774013,
                  'y' : 25.5169570669719
                  },
  },
{
                  data: {
                  id: 'CAGL0M05401g',
                  name: 'CAGL0M05401g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M05401g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YBR201C-A and Saccharomyces cerevisiae S288C : YBR201C-A</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M05401g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M05401g'  target='_blank'> Link to GRYC</a>",
                  x : 0.748465413108696,
                  y : 0.272511345878496
                  },
                  position : {
                  'x' : 7.48465413108696,
                  'y' : 2.72511345878496
                  },
  },
{
                  data: {
                  id: 'CAGL0M06633g',
                  name: 'CAGL0M06633g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M06633g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M06633g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M06633g'  target='_blank'> Link to GRYC</a>",
                  x : 0.785053418347115,
                  y : 3.0916017093196
                  },
                  position : {
                  'x' : 7.85053418347115,
                  'y' : 30.916017093196
                  },
  },
{
                  data: {
                  id: 'CAGL0M07001g',
                  name: 'CAGL0M07001g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M07001g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in TORC1 signaling, protein localization to vacuole and EGO complex, fungal-type vacuole membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M07001g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M07001g'  target='_blank'> Link to GRYC</a>",
                  x : -0.910213945120008,
                  y : 5.3203934820316
                  },
                  position : {
                  'x' : -9.10213945120008,
                  'y' : 53.203934820316
                  },
  },
{
                  data: {
                  id: 'CAGL0M09229g',
                  name: 'CAGL0M09229g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M09229g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M09229g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M09229g'  target='_blank'> Link to GRYC</a>",
                  x : 2.09433892819805,
                  y : 4.24978917705688
                  },
                  position : {
                  'x' : 20.9433892819805,
                  'y' : 42.4978917705688
                  },
  },
{
                  data: {
                  id: 'CAGL0M09713g',
                  name: 'CAGL0M09713g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M09713g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein involved in DNA damage response; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M09713g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M09713g'  target='_blank'> Link to GRYC</a>",
                  x : 0.518123464109549,
                  y : 8.34871229135488
                  },
                  position : {
                  'x' : 5.18123464109549,
                  'y' : 83.4871229135488
                  },
  },
{
                  data: {
                  id: 'CAGL0M11000g',
                  name: 'CAGL0M11000g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M11000g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytosol localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M11000g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M11000g'  target='_blank'> Link to GRYC</a>",
                  x : -1.96639116876122,
                  y : 1.4870072661388
                  },
                  position : {
                  'x' : -19.6639116876122,
                  'y' : 14.870072661388
                  },
  },
{
                  data: {
                  id: 'CAGL0M12947g',
                  name: 'CAGL0M12947g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M12947g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Mitochondria-localized protein; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M12947g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M12947g'  target='_blank'> Link to GRYC</a>",
                  x : 1.58599176831713,
                  y : 5.77566531602047
                  },
                  position : {
                  'x' : 15.8599176831713,
                  'y' : 57.7566531602047
                  },
  },
{
                  data: {
                  id: 'CAGL0M14069g',
                  name: 'CAGL0M14069g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M14069g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Adhesin-like protein with similarity to S. cerevisiae flocculins, cell wall proteins that mediate adhesion; predicted GPI anchor; belongs to adhesin cluster II</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M14069g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M14069g'  target='_blank'> Link to GRYC</a>",
                  x : 2.48615414780377,
                  y : -3.34007144509778
                  },
                  position : {
                  'x' : 24.8615414780377,
                  'y' : -33.4007144509778
                  },
  },
{
                  data: {
                  source: 'CAGL0B00594g',
                  target: 'CAGL0A01067g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B02585g',
                  target: 'CAGL0A01067g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05566g',
                  target: 'CAGL0A01067g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10362g',
                  target: 'CAGL0A01067g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07205g',
                  target: 'CAGL0A01067g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09042g',
                  target: 'CAGL0A01067g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B00946g',
                  target: 'CAGL0A01089g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E03025g',
                  target: 'CAGL0A01089g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G10175g',
                  target: 'CAGL0A01089g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05610g',
                  target: 'CAGL0A01089g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07491g',
                  target: 'CAGL0A01089g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0A02299g',
                  target: 'CAGL0A01650g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B00946g',
                  target: 'CAGL0A01650g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C02365g',
                  target: 'CAGL0A01650g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D01474g',
                  target: 'CAGL0A01650g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04548g',
                  target: 'CAGL0A01650g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E06072g',
                  target: 'CAGL0A01650g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F01485g',
                  target: 'CAGL0A01650g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04807g',
                  target: 'CAGL0A01650g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G01122g',
                  target: 'CAGL0A01650g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G02849g',
                  target: 'CAGL0A01650g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08844g',
                  target: 'CAGL0A01650g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H10010g',
                  target: 'CAGL0A01650g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04328g',
                  target: 'CAGL0A01650g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05610g',
                  target: 'CAGL0A01650g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05874g',
                  target: 'CAGL0A01650g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07568g',
                  target: 'CAGL0A01650g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00473g',
                  target: 'CAGL0A01650g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06864g',
                  target: 'CAGL0A01650g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02211g',
                  target: 'CAGL0A01650g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05401g',
                  target: 'CAGL0A01650g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B00946g',
                  target: 'CAGL0A02299g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E06072g',
                  target: 'CAGL0A02299g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04807g',
                  target: 'CAGL0A02299g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06006g',
                  target: 'CAGL0A02299g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04328g',
                  target: 'CAGL0A02299g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05874g',
                  target: 'CAGL0A02299g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07568g',
                  target: 'CAGL0A02299g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00110g',
                  target: 'CAGL0A02299g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02211g',
                  target: 'CAGL0A02299g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B02585g',
                  target: 'CAGL0B00594g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05566g',
                  target: 'CAGL0B00594g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10362g',
                  target: 'CAGL0B00594g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11231g',
                  target: 'CAGL0B00594g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01551g',
                  target: 'CAGL0B00594g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10142g',
                  target: 'CAGL0B00594g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C02365g',
                  target: 'CAGL0B00946g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D01474g',
                  target: 'CAGL0B00946g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E03025g',
                  target: 'CAGL0B00946g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05588g',
                  target: 'CAGL0B00946g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E06072g',
                  target: 'CAGL0B00946g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F01485g',
                  target: 'CAGL0B00946g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04807g',
                  target: 'CAGL0B00946g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G04433g',
                  target: 'CAGL0B00946g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00825g',
                  target: 'CAGL0B00946g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00550g',
                  target: 'CAGL0B00946g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04328g',
                  target: 'CAGL0B00946g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05874g',
                  target: 'CAGL0B00946g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J02530g',
                  target: 'CAGL0B00946g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07568g',
                  target: 'CAGL0B00946g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09262g',
                  target: 'CAGL0B00946g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00473g',
                  target: 'CAGL0B00946g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M01562g',
                  target: 'CAGL0B00946g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02211g',
                  target: 'CAGL0B00946g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C00110g',
                  target: 'CAGL0B02585g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C03608g',
                  target: 'CAGL0B02585g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05566g',
                  target: 'CAGL0B02585g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04224g',
                  target: 'CAGL0B02585g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08294g',
                  target: 'CAGL0B02585g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01881g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F01485g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02145g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04191g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04807g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F08217g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05830g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05962g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06952g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02893g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08624g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H10010g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02728g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05874g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00110g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04719g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00473g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00957g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06512g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04675g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06633g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09229g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M12947g',
                  target: 'CAGL0B02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C00110g',
                  target: 'CAGL0B02970g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C00968g',
                  target: 'CAGL0B02970g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C01133g',
                  target: 'CAGL0B02970g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C03608g',
                  target: 'CAGL0B02970g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02563g',
                  target: 'CAGL0B02970g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04224g',
                  target: 'CAGL0B02970g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08294g',
                  target: 'CAGL0B02970g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00418g',
                  target: 'CAGL0B02970g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07001g',
                  target: 'CAGL0B02970g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C00968g',
                  target: 'CAGL0C00110g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C01133g',
                  target: 'CAGL0C00110g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C03608g',
                  target: 'CAGL0C00110g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02563g',
                  target: 'CAGL0C00110g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04224g',
                  target: 'CAGL0C00110g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J06380g',
                  target: 'CAGL0C00110g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08294g',
                  target: 'CAGL0C00110g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00418g',
                  target: 'CAGL0C00110g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07001g',
                  target: 'CAGL0C00110g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G02849g',
                  target: 'CAGL0C00275g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11000g',
                  target: 'CAGL0C00275g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C01133g',
                  target: 'CAGL0C00968g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C03608g',
                  target: 'CAGL0C00968g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04224g',
                  target: 'CAGL0C00968g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02145g',
                  target: 'CAGL0C00968g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06952g',
                  target: 'CAGL0C00968g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07711g',
                  target: 'CAGL0C00968g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02563g',
                  target: 'CAGL0C00968g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04224g',
                  target: 'CAGL0C00968g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J06380g',
                  target: 'CAGL0C00968g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08294g',
                  target: 'CAGL0C00968g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11814g',
                  target: 'CAGL0C00968g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00418g',
                  target: 'CAGL0C00968g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07001g',
                  target: 'CAGL0C00968g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C03608g',
                  target: 'CAGL0C01133g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04224g',
                  target: 'CAGL0C01133g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02145g',
                  target: 'CAGL0C01133g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06952g',
                  target: 'CAGL0C01133g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07711g',
                  target: 'CAGL0C01133g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02563g',
                  target: 'CAGL0C01133g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04224g',
                  target: 'CAGL0C01133g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J06380g',
                  target: 'CAGL0C01133g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08294g',
                  target: 'CAGL0C01133g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11814g',
                  target: 'CAGL0C01133g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00418g',
                  target: 'CAGL0C01133g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07001g',
                  target: 'CAGL0C01133g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C03487g',
                  target: 'CAGL0C01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00572g',
                  target: 'CAGL0C01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04004g',
                  target: 'CAGL0C01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K01177g',
                  target: 'CAGL0C01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K03091g',
                  target: 'CAGL0C01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06633g',
                  target: 'CAGL0C01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11231g',
                  target: 'CAGL0C01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01551g',
                  target: 'CAGL0C01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03696g',
                  target: 'CAGL0C01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10142g',
                  target: 'CAGL0C01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D01474g',
                  target: 'CAGL0C02365g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E00803g',
                  target: 'CAGL0C02365g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E03025g',
                  target: 'CAGL0C02365g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05588g',
                  target: 'CAGL0C02365g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E06072g',
                  target: 'CAGL0C02365g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F01463g',
                  target: 'CAGL0C02365g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F01485g',
                  target: 'CAGL0C02365g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04807g',
                  target: 'CAGL0C02365g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F08217g',
                  target: 'CAGL0C02365g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05962g',
                  target: 'CAGL0C02365g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02893g',
                  target: 'CAGL0C02365g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H10010g',
                  target: 'CAGL0C02365g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00550g',
                  target: 'CAGL0C02365g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05874g',
                  target: 'CAGL0C02365g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07568g',
                  target: 'CAGL0C02365g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09262g',
                  target: 'CAGL0C02365g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00473g',
                  target: 'CAGL0C02365g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00957g',
                  target: 'CAGL0C02365g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06512g',
                  target: 'CAGL0C02365g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M01562g',
                  target: 'CAGL0C02365g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02211g',
                  target: 'CAGL0C02365g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04675g',
                  target: 'CAGL0C02365g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D05434g',
                  target: 'CAGL0C03487g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00572g',
                  target: 'CAGL0C03487g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00594g',
                  target: 'CAGL0C03487g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K01177g',
                  target: 'CAGL0C03487g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K03091g',
                  target: 'CAGL0C03487g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06633g',
                  target: 'CAGL0C03487g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11231g',
                  target: 'CAGL0C03487g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03696g',
                  target: 'CAGL0C03487g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04224g',
                  target: 'CAGL0C03608g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02145g',
                  target: 'CAGL0C03608g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06952g',
                  target: 'CAGL0C03608g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07711g',
                  target: 'CAGL0C03608g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04224g',
                  target: 'CAGL0C03608g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J06380g',
                  target: 'CAGL0C03608g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J06666g',
                  target: 'CAGL0C03608g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02409g',
                  target: 'CAGL0C03608g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08294g',
                  target: 'CAGL0C03608g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11814g',
                  target: 'CAGL0C03608g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00418g',
                  target: 'CAGL0C03608g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07001g',
                  target: 'CAGL0C03608g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05610g',
                  target: 'CAGL0C03872g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E00803g',
                  target: 'CAGL0D00264g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05588g',
                  target: 'CAGL0D00264g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F01463g',
                  target: 'CAGL0D00264g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G04433g',
                  target: 'CAGL0D00264g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00550g',
                  target: 'CAGL0D00264g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09262g',
                  target: 'CAGL0D00264g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10824g',
                  target: 'CAGL0D00264g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10780g',
                  target: 'CAGL0D00264g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E00803g',
                  target: 'CAGL0D01474g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E03025g',
                  target: 'CAGL0D01474g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05588g',
                  target: 'CAGL0D01474g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E06072g',
                  target: 'CAGL0D01474g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F01463g',
                  target: 'CAGL0D01474g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F01485g',
                  target: 'CAGL0D01474g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04807g',
                  target: 'CAGL0D01474g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F08217g',
                  target: 'CAGL0D01474g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G04433g',
                  target: 'CAGL0D01474g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05962g',
                  target: 'CAGL0D01474g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02893g',
                  target: 'CAGL0D01474g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H10010g',
                  target: 'CAGL0D01474g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00550g',
                  target: 'CAGL0D01474g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05610g',
                  target: 'CAGL0D01474g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05874g',
                  target: 'CAGL0D01474g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07568g',
                  target: 'CAGL0D01474g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09262g',
                  target: 'CAGL0D01474g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00473g',
                  target: 'CAGL0D01474g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00957g',
                  target: 'CAGL0D01474g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M01562g',
                  target: 'CAGL0D01474g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02211g',
                  target: 'CAGL0D01474g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04675g',
                  target: 'CAGL0D01474g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00572g',
                  target: 'CAGL0D05434g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K01177g',
                  target: 'CAGL0D05434g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05588g',
                  target: 'CAGL0E00803g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F01463g',
                  target: 'CAGL0E00803g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F01485g',
                  target: 'CAGL0E00803g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04807g',
                  target: 'CAGL0E00803g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F08217g',
                  target: 'CAGL0E00803g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05962g',
                  target: 'CAGL0E00803g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02893g',
                  target: 'CAGL0E00803g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H10010g',
                  target: 'CAGL0E00803g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00550g',
                  target: 'CAGL0E00803g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05874g',
                  target: 'CAGL0E00803g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07568g',
                  target: 'CAGL0E00803g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09262g',
                  target: 'CAGL0E00803g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00473g',
                  target: 'CAGL0E00803g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00957g',
                  target: 'CAGL0E00803g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06512g',
                  target: 'CAGL0E00803g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M01562g',
                  target: 'CAGL0E00803g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04675g',
                  target: 'CAGL0E00803g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09229g',
                  target: 'CAGL0E00803g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04224g',
                  target: 'CAGL0E01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02145g',
                  target: 'CAGL0E01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04191g',
                  target: 'CAGL0E01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04807g',
                  target: 'CAGL0E01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F05093g',
                  target: 'CAGL0E01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05830g',
                  target: 'CAGL0E01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05962g',
                  target: 'CAGL0E01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06952g',
                  target: 'CAGL0E01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02893g',
                  target: 'CAGL0E01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08624g',
                  target: 'CAGL0E01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02728g',
                  target: 'CAGL0E01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00110g',
                  target: 'CAGL0E01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04719g',
                  target: 'CAGL0E01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00473g',
                  target: 'CAGL0E01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06512g',
                  target: 'CAGL0E01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11814g',
                  target: 'CAGL0E01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12914g',
                  target: 'CAGL0E01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06633g',
                  target: 'CAGL0E01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09229g',
                  target: 'CAGL0E01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M12947g',
                  target: 'CAGL0E01881g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I08547g',
                  target: 'CAGL0E02255g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05588g',
                  target: 'CAGL0E03025g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F01485g',
                  target: 'CAGL0E03025g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G04433g',
                  target: 'CAGL0E03025g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00825g',
                  target: 'CAGL0E03025g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00550g',
                  target: 'CAGL0E03025g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05610g',
                  target: 'CAGL0E03025g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07491g',
                  target: 'CAGL0E03025g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J02530g',
                  target: 'CAGL0E03025g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07568g',
                  target: 'CAGL0E03025g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09262g',
                  target: 'CAGL0E03025g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M01562g',
                  target: 'CAGL0E03025g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02145g',
                  target: 'CAGL0E04224g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06952g',
                  target: 'CAGL0E04224g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07711g',
                  target: 'CAGL0E04224g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02728g',
                  target: 'CAGL0E04224g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04224g',
                  target: 'CAGL0E04224g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J06380g',
                  target: 'CAGL0E04224g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J06666g',
                  target: 'CAGL0E04224g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00110g',
                  target: 'CAGL0E04224g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08294g',
                  target: 'CAGL0E04224g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11814g',
                  target: 'CAGL0E04224g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12914g',
                  target: 'CAGL0E04224g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00418g',
                  target: 'CAGL0E04224g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07001g',
                  target: 'CAGL0E04224g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04631g',
                  target: 'CAGL0E04548g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G01122g',
                  target: 'CAGL0E04548g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G02849g',
                  target: 'CAGL0E04548g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H10010g',
                  target: 'CAGL0E04548g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04328g',
                  target: 'CAGL0E04548g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05874g',
                  target: 'CAGL0E04548g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K03459g',
                  target: 'CAGL0E04548g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06864g',
                  target: 'CAGL0E04548g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05401g',
                  target: 'CAGL0E04548g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00110g',
                  target: 'CAGL0E04554g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07183g',
                  target: 'CAGL0E04554g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F01463g',
                  target: 'CAGL0E05588g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F01485g',
                  target: 'CAGL0E05588g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G04433g',
                  target: 'CAGL0E05588g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00550g',
                  target: 'CAGL0E05588g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05610g',
                  target: 'CAGL0E05588g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J02530g',
                  target: 'CAGL0E05588g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07568g',
                  target: 'CAGL0E05588g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09262g',
                  target: 'CAGL0E05588g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M01562g',
                  target: 'CAGL0E05588g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F01485g',
                  target: 'CAGL0E06072g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04807g',
                  target: 'CAGL0E06072g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05962g',
                  target: 'CAGL0E06072g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06006g',
                  target: 'CAGL0E06072g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02563g',
                  target: 'CAGL0E06072g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02893g',
                  target: 'CAGL0E06072g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H10010g',
                  target: 'CAGL0E06072g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00550g',
                  target: 'CAGL0E06072g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05874g',
                  target: 'CAGL0E06072g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07568g',
                  target: 'CAGL0E06072g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00957g',
                  target: 'CAGL0E06072g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02211g',
                  target: 'CAGL0E06072g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07001g',
                  target: 'CAGL0E06072g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00550g',
                  target: 'CAGL0F01463g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09262g',
                  target: 'CAGL0F01463g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10824g',
                  target: 'CAGL0F01463g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10780g',
                  target: 'CAGL0F01463g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04807g',
                  target: 'CAGL0F01485g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F08217g',
                  target: 'CAGL0F01485g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G04433g',
                  target: 'CAGL0F01485g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05962g',
                  target: 'CAGL0F01485g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02893g',
                  target: 'CAGL0F01485g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H10010g',
                  target: 'CAGL0F01485g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00550g',
                  target: 'CAGL0F01485g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05610g',
                  target: 'CAGL0F01485g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05874g',
                  target: 'CAGL0F01485g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07568g',
                  target: 'CAGL0F01485g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09262g',
                  target: 'CAGL0F01485g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00473g',
                  target: 'CAGL0F01485g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00957g',
                  target: 'CAGL0F01485g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M01562g',
                  target: 'CAGL0F01485g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02211g',
                  target: 'CAGL0F01485g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04675g',
                  target: 'CAGL0F01485g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05401g',
                  target: 'CAGL0F01485g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09229g',
                  target: 'CAGL0F01485g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04807g',
                  target: 'CAGL0F02145g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06952g',
                  target: 'CAGL0F02145g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07711g',
                  target: 'CAGL0F02145g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02563g',
                  target: 'CAGL0F02145g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02893g',
                  target: 'CAGL0F02145g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02728g',
                  target: 'CAGL0F02145g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04224g',
                  target: 'CAGL0F02145g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J06380g',
                  target: 'CAGL0F02145g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00110g',
                  target: 'CAGL0F02145g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06512g',
                  target: 'CAGL0F02145g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08294g',
                  target: 'CAGL0F02145g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11814g',
                  target: 'CAGL0F02145g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00418g',
                  target: 'CAGL0F02145g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07001g',
                  target: 'CAGL0F02145g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F08217g',
                  target: 'CAGL0F04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08624g',
                  target: 'CAGL0F04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02728g',
                  target: 'CAGL0F04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04719g',
                  target: 'CAGL0F04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06633g',
                  target: 'CAGL0F04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09229g',
                  target: 'CAGL0F04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M12947g',
                  target: 'CAGL0F04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06864g',
                  target: 'CAGL0F04631g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M14069g',
                  target: 'CAGL0F04631g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F08217g',
                  target: 'CAGL0F04807g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G01122g',
                  target: 'CAGL0F04807g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G02849g',
                  target: 'CAGL0F04807g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05830g',
                  target: 'CAGL0F04807g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05962g',
                  target: 'CAGL0F04807g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06952g',
                  target: 'CAGL0F04807g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02893g',
                  target: 'CAGL0F04807g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H10010g',
                  target: 'CAGL0F04807g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00550g',
                  target: 'CAGL0F04807g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05874g',
                  target: 'CAGL0F04807g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07568g',
                  target: 'CAGL0F04807g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00110g',
                  target: 'CAGL0F04807g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00473g',
                  target: 'CAGL0F04807g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00957g',
                  target: 'CAGL0F04807g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06512g',
                  target: 'CAGL0F04807g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02211g',
                  target: 'CAGL0F04807g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04675g',
                  target: 'CAGL0F04807g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05401g',
                  target: 'CAGL0F04807g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06633g',
                  target: 'CAGL0F04807g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09229g',
                  target: 'CAGL0F04807g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08624g',
                  target: 'CAGL0F05093g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02728g',
                  target: 'CAGL0F05093g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07183g',
                  target: 'CAGL0F05093g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11814g',
                  target: 'CAGL0F05093g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12914g',
                  target: 'CAGL0F05093g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09713g',
                  target: 'CAGL0F05093g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M12947g',
                  target: 'CAGL0F05093g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05786g',
                  target: 'CAGL0F05709g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09713g',
                  target: 'CAGL0F05709g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G02849g',
                  target: 'CAGL0F07953g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05401g',
                  target: 'CAGL0F07953g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G02849g',
                  target: 'CAGL0F08217g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05830g',
                  target: 'CAGL0F08217g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05962g',
                  target: 'CAGL0F08217g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02893g',
                  target: 'CAGL0F08217g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H10010g',
                  target: 'CAGL0F08217g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05874g',
                  target: 'CAGL0F08217g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04719g',
                  target: 'CAGL0F08217g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00473g',
                  target: 'CAGL0F08217g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00957g',
                  target: 'CAGL0F08217g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06512g',
                  target: 'CAGL0F08217g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04675g',
                  target: 'CAGL0F08217g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06633g',
                  target: 'CAGL0F08217g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09229g',
                  target: 'CAGL0F08217g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11000g',
                  target: 'CAGL0F08217g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G02849g',
                  target: 'CAGL0G01122g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H10010g',
                  target: 'CAGL0G01122g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05874g',
                  target: 'CAGL0G01122g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K03459g',
                  target: 'CAGL0G01122g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00473g',
                  target: 'CAGL0G01122g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06864g',
                  target: 'CAGL0G01122g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05401g',
                  target: 'CAGL0G01122g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06633g',
                  target: 'CAGL0G01122g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05830g',
                  target: 'CAGL0G02849g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H10010g',
                  target: 'CAGL0G02849g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05874g',
                  target: 'CAGL0G02849g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00473g',
                  target: 'CAGL0G02849g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06864g',
                  target: 'CAGL0G02849g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05401g',
                  target: 'CAGL0G02849g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06633g',
                  target: 'CAGL0G02849g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05610g',
                  target: 'CAGL0G03289g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04202g',
                  target: 'CAGL0G03289g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M14069g',
                  target: 'CAGL0G03289g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00825g',
                  target: 'CAGL0G04433g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00550g',
                  target: 'CAGL0G04433g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J02530g',
                  target: 'CAGL0G04433g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09262g',
                  target: 'CAGL0G04433g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00473g',
                  target: 'CAGL0G04433g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M01562g',
                  target: 'CAGL0G04433g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10142g',
                  target: 'CAGL0G05566g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05962g',
                  target: 'CAGL0G05830g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06952g',
                  target: 'CAGL0G05830g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02893g',
                  target: 'CAGL0G05830g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H10010g',
                  target: 'CAGL0G05830g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05874g',
                  target: 'CAGL0G05830g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00110g',
                  target: 'CAGL0G05830g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00473g',
                  target: 'CAGL0G05830g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00957g',
                  target: 'CAGL0G05830g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06512g',
                  target: 'CAGL0G05830g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04675g',
                  target: 'CAGL0G05830g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06633g',
                  target: 'CAGL0G05830g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09229g',
                  target: 'CAGL0G05830g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02893g',
                  target: 'CAGL0G05962g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H10010g',
                  target: 'CAGL0G05962g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00550g',
                  target: 'CAGL0G05962g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05874g',
                  target: 'CAGL0G05962g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07568g',
                  target: 'CAGL0G05962g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09262g',
                  target: 'CAGL0G05962g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04719g',
                  target: 'CAGL0G05962g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00473g',
                  target: 'CAGL0G05962g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00957g',
                  target: 'CAGL0G05962g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06512g',
                  target: 'CAGL0G05962g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02211g',
                  target: 'CAGL0G05962g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04675g',
                  target: 'CAGL0G05962g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06633g',
                  target: 'CAGL0G05962g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09229g',
                  target: 'CAGL0G05962g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02563g',
                  target: 'CAGL0G06006g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07568g',
                  target: 'CAGL0G06006g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02211g',
                  target: 'CAGL0G06006g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G07711g',
                  target: 'CAGL0G06952g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02563g',
                  target: 'CAGL0G06952g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02893g',
                  target: 'CAGL0G06952g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02728g',
                  target: 'CAGL0G06952g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04224g',
                  target: 'CAGL0G06952g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00110g',
                  target: 'CAGL0G06952g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00957g',
                  target: 'CAGL0G06952g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06512g',
                  target: 'CAGL0G06952g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08294g',
                  target: 'CAGL0G06952g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11814g',
                  target: 'CAGL0G06952g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12914g',
                  target: 'CAGL0G06952g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00418g',
                  target: 'CAGL0G06952g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07001g',
                  target: 'CAGL0G06952g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02728g',
                  target: 'CAGL0G07711g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04224g',
                  target: 'CAGL0G07711g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J06380g',
                  target: 'CAGL0G07711g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J06666g',
                  target: 'CAGL0G07711g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02409g',
                  target: 'CAGL0G07711g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08294g',
                  target: 'CAGL0G07711g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11814g',
                  target: 'CAGL0G07711g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12914g',
                  target: 'CAGL0G07711g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00418g',
                  target: 'CAGL0G07711g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09713g',
                  target: 'CAGL0G07711g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H09966g',
                  target: 'CAGL0G10175g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00594g',
                  target: 'CAGL0H00572g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K01177g',
                  target: 'CAGL0H00572g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06633g',
                  target: 'CAGL0H00572g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11231g',
                  target: 'CAGL0H00572g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03696g',
                  target: 'CAGL0H00572g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K01177g',
                  target: 'CAGL0H00594g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06633g',
                  target: 'CAGL0H00594g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11231g',
                  target: 'CAGL0H00594g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03696g',
                  target: 'CAGL0H00594g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J02530g',
                  target: 'CAGL0H00825g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M01562g',
                  target: 'CAGL0H00825g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04224g',
                  target: 'CAGL0H02563g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12980g',
                  target: 'CAGL0H02563g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00418g',
                  target: 'CAGL0H02563g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07001g',
                  target: 'CAGL0H02563g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H10010g',
                  target: 'CAGL0H02893g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00550g',
                  target: 'CAGL0H02893g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05874g',
                  target: 'CAGL0H02893g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07568g',
                  target: 'CAGL0H02893g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09262g',
                  target: 'CAGL0H02893g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00110g',
                  target: 'CAGL0H02893g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00473g',
                  target: 'CAGL0H02893g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00957g',
                  target: 'CAGL0H02893g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06512g',
                  target: 'CAGL0H02893g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02211g',
                  target: 'CAGL0H02893g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04675g',
                  target: 'CAGL0H02893g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09229g',
                  target: 'CAGL0H02893g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02728g',
                  target: 'CAGL0H08624g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06182g',
                  target: 'CAGL0H08624g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05390g',
                  target: 'CAGL0H08624g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04719g',
                  target: 'CAGL0H08624g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05786g',
                  target: 'CAGL0H08624g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11814g',
                  target: 'CAGL0H08624g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12914g',
                  target: 'CAGL0H08624g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09229g',
                  target: 'CAGL0H08624g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09713g',
                  target: 'CAGL0H08624g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M12947g',
                  target: 'CAGL0H08624g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04328g',
                  target: 'CAGL0H08844g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05610g',
                  target: 'CAGL0H08844g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02211g',
                  target: 'CAGL0H08844g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05401g',
                  target: 'CAGL0H08844g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M14069g',
                  target: 'CAGL0H08844g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H09614g',
                  target: 'CAGL0H09592g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05874g',
                  target: 'CAGL0H10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00110g',
                  target: 'CAGL0H10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00473g',
                  target: 'CAGL0H10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06512g',
                  target: 'CAGL0H10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02211g',
                  target: 'CAGL0H10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04675g',
                  target: 'CAGL0H10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05401g',
                  target: 'CAGL0H10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06633g',
                  target: 'CAGL0H10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05874g',
                  target: 'CAGL0I00550g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07568g',
                  target: 'CAGL0I00550g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09262g',
                  target: 'CAGL0I00550g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10824g',
                  target: 'CAGL0I00550g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00473g',
                  target: 'CAGL0I00550g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00957g',
                  target: 'CAGL0I00550g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M01562g',
                  target: 'CAGL0I00550g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02211g',
                  target: 'CAGL0I00550g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04675g',
                  target: 'CAGL0I00550g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J06666g',
                  target: 'CAGL0I02728g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04719g',
                  target: 'CAGL0I02728g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05786g',
                  target: 'CAGL0I02728g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11814g',
                  target: 'CAGL0I02728g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12914g',
                  target: 'CAGL0I02728g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09229g',
                  target: 'CAGL0I02728g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09713g',
                  target: 'CAGL0I02728g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M12947g',
                  target: 'CAGL0I02728g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05874g',
                  target: 'CAGL0I04328g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00110g',
                  target: 'CAGL0I04328g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02211g',
                  target: 'CAGL0I04328g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05401g',
                  target: 'CAGL0I04328g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09262g',
                  target: 'CAGL0I05610g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M14069g',
                  target: 'CAGL0I05610g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07568g',
                  target: 'CAGL0I05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00110g',
                  target: 'CAGL0I05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00473g',
                  target: 'CAGL0I05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06512g',
                  target: 'CAGL0I05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02211g',
                  target: 'CAGL0I05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04675g',
                  target: 'CAGL0I05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05401g',
                  target: 'CAGL0I05874g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04719g',
                  target: 'CAGL0I06182g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05786g',
                  target: 'CAGL0I06182g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09229g',
                  target: 'CAGL0I06182g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M12947g',
                  target: 'CAGL0I06182g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04004g',
                  target: 'CAGL0I06644g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10142g',
                  target: 'CAGL0I06644g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07568g',
                  target: 'CAGL0I07491g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M01562g',
                  target: 'CAGL0I07491g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L07502g',
                  target: 'CAGL0I10147g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09262g',
                  target: 'CAGL0J02530g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M01562g',
                  target: 'CAGL0J02530g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K03091g',
                  target: 'CAGL0J04004g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10824g',
                  target: 'CAGL0J04004g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03696g',
                  target: 'CAGL0J04004g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10142g',
                  target: 'CAGL0J04004g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10780g',
                  target: 'CAGL0J04004g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J06380g',
                  target: 'CAGL0J04224g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J06666g',
                  target: 'CAGL0J04224g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08294g',
                  target: 'CAGL0J04224g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11814g',
                  target: 'CAGL0J04224g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12914g',
                  target: 'CAGL0J04224g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00418g',
                  target: 'CAGL0J04224g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07001g',
                  target: 'CAGL0J04224g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08338g',
                  target: 'CAGL0J04466g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05786g',
                  target: 'CAGL0J05390g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L07502g',
                  target: 'CAGL0J05390g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12914g',
                  target: 'CAGL0J05390g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09713g',
                  target: 'CAGL0J05390g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J06666g',
                  target: 'CAGL0J06380g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02409g',
                  target: 'CAGL0J06380g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08294g',
                  target: 'CAGL0J06380g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11814g',
                  target: 'CAGL0J06380g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00418g',
                  target: 'CAGL0J06380g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02409g',
                  target: 'CAGL0J06666g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08294g',
                  target: 'CAGL0J06666g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11814g',
                  target: 'CAGL0J06666g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00418g',
                  target: 'CAGL0J06666g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09713g',
                  target: 'CAGL0J06666g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09262g',
                  target: 'CAGL0J07568g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00473g',
                  target: 'CAGL0J07568g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00957g',
                  target: 'CAGL0J07568g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M01562g',
                  target: 'CAGL0J07568g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02211g',
                  target: 'CAGL0J07568g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04675g',
                  target: 'CAGL0J07568g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10824g',
                  target: 'CAGL0J09262g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00473g',
                  target: 'CAGL0J09262g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00957g',
                  target: 'CAGL0J09262g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M01562g',
                  target: 'CAGL0J09262g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04675g',
                  target: 'CAGL0J09262g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09042g',
                  target: 'CAGL0J10362g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10142g',
                  target: 'CAGL0J10362g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00473g',
                  target: 'CAGL0K00110g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02211g',
                  target: 'CAGL0K00110g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07001g',
                  target: 'CAGL0K00110g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K03091g',
                  target: 'CAGL0K01177g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06633g',
                  target: 'CAGL0K01177g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11231g',
                  target: 'CAGL0K01177g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03696g',
                  target: 'CAGL0K01177g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L08294g',
                  target: 'CAGL0K02409g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06633g',
                  target: 'CAGL0K03091g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09042g',
                  target: 'CAGL0K03091g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11231g',
                  target: 'CAGL0K03091g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03696g',
                  target: 'CAGL0K03091g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10780g',
                  target: 'CAGL0K03091g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06864g',
                  target: 'CAGL0K03459g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00957g',
                  target: 'CAGL0K04719g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05786g',
                  target: 'CAGL0K04719g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06512g',
                  target: 'CAGL0K04719g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12914g',
                  target: 'CAGL0K04719g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04675g',
                  target: 'CAGL0K04719g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09229g',
                  target: 'CAGL0K04719g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M12947g',
                  target: 'CAGL0K04719g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11231g',
                  target: 'CAGL0K06633g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01551g',
                  target: 'CAGL0K06633g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03696g',
                  target: 'CAGL0K06633g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09042g',
                  target: 'CAGL0K07205g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M14069g',
                  target: 'CAGL0K07678g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05786g',
                  target: 'CAGL0K08338g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03696g',
                  target: 'CAGL0K10824g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10780g',
                  target: 'CAGL0K10824g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00957g',
                  target: 'CAGL0L00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06512g',
                  target: 'CAGL0L00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02211g',
                  target: 'CAGL0L00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04675g',
                  target: 'CAGL0L00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05401g',
                  target: 'CAGL0L00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06633g',
                  target: 'CAGL0L00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09229g',
                  target: 'CAGL0L00473g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06512g',
                  target: 'CAGL0L00957g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04675g',
                  target: 'CAGL0L00957g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09229g',
                  target: 'CAGL0L00957g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10142g',
                  target: 'CAGL0L01551g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10780g',
                  target: 'CAGL0L03696g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12914g',
                  target: 'CAGL0L05786g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09229g',
                  target: 'CAGL0L05786g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M12947g',
                  target: 'CAGL0L05786g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12914g',
                  target: 'CAGL0L06512g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04675g',
                  target: 'CAGL0L06512g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09229g',
                  target: 'CAGL0L06512g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05401g',
                  target: 'CAGL0L06864g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12914g',
                  target: 'CAGL0L07502g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09713g',
                  target: 'CAGL0L07502g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11814g',
                  target: 'CAGL0L08294g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00418g',
                  target: 'CAGL0L08294g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07001g',
                  target: 'CAGL0L08294g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12914g',
                  target: 'CAGL0L11814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00418g',
                  target: 'CAGL0L11814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07001g',
                  target: 'CAGL0L11814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09713g',
                  target: 'CAGL0L11814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M12947g',
                  target: 'CAGL0L11814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00418g',
                  target: 'CAGL0L12914g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09713g',
                  target: 'CAGL0L12914g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M12947g',
                  target: 'CAGL0L12914g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07001g',
                  target: 'CAGL0M00418g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04675g',
                  target: 'CAGL0M01562g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04675g',
                  target: 'CAGL0M02211g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05401g',
                  target: 'CAGL0M02211g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06633g',
                  target: 'CAGL0M04675g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09229g',
                  target: 'CAGL0M04675g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09229g',
                  target: 'CAGL0M06633g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M12947g',
                  target: 'CAGL0M06633g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M12947g',
                  target: 'CAGL0M09229g',
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
cy.$('#CAGL0A01067g').qtip({
                  content: "<h2>CAGL0A01067g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : KEL3, C. albicans SC5314 : C1_13720W_A, C. dubliniensis CD36 : Cd36_12710, C. parapsilosis CDC317 : CPAR2_201590 and C. auris B8441 : B9J08_002506</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01067g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01067g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0A01089g').qtip({
                  content: "<h2>CAGL0A01089g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted alcohol O-acetyltransferase activity and role in alcohol metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01089g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01089g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0A01650g').qtip({
                  content: "<h2>CAGL0A01650g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01650g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01650g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0A02277g').qtip({
                  content: "<h2>CAGL0A02277g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02277g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02277g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0A02299g').qtip({
                  content: "<h2>CAGL0A02299g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02299g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02299g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0B00594g').qtip({
                  content: "<h2>CAGL0B00594g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Predicted GPI-linked protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B00594g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B00594g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0B00946g').qtip({
                  content: "<h2>CAGL0B00946g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytosol localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B00946g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B00946g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0B02585g').qtip({
                  content: "<h2>CAGL0B02585g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ER-dependent peroxisome organization, endoplasmic reticulum inheritance, endoplasmic reticulum tubular network maintenance and endoplasmic reticulum tubular network organization, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02585g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02585g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0B02904g').qtip({
                  content: "<h2>CAGL0B02904g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Beta mannosyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02904g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02904g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0B02970g').qtip({
                  content: "<h2>CAGL0B02970g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Beta mannosyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02970g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02970g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C00110g').qtip({
                  content: "<h2>CAGL0C00110g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Sub-telomerically encoded adhesin with a role in cell adhesion; binds to ligands containing a terminal galactose residue; expressed during murine urinary tract infection, biofilm-upregulated; belongs to adhesin cluster I</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C00110g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C00110g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C00275g').qtip({
                  content: "<h2>CAGL0C00275g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative cysteine protease; protein differentially expressed in azole resistant strain; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C00275g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C00275g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C00968g').qtip({
                  content: "<h2>CAGL0C00968g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Adhesin-like protein with a predicted role in cell adhesion; belongs to adhesin cluster VII; predicted GPI-anchor</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C00968g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C00968g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C01133g').qtip({
                  content: "<h2>CAGL0C01133g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Adhesin-like protein; belongs to adhesin cluster VII; predicted GPI anchor</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C01133g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C01133g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C01749g').qtip({
                  content: "<h2>CAGL0C01749g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 5'-deoxynucleotidase activity, GMP 5'-nucleotidase activity and role in deoxyribonucleoside monophosphate catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C01749g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C01749g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C02365g').qtip({
                  content: "<h2>CAGL0C02365g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C02365g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C02365g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C03487g').qtip({
                  content: "<h2>CAGL0C03487g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in phospholipid translocation and trans-Golgi network localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03487g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03487g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C03608g').qtip({
                  content: "<h2>CAGL0C03608g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03608g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03608g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C03872g').qtip({
                  content: "<h2>CAGL0C03872g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative GPI-linked cell wall protein involved in sterol uptake</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03872g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03872g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D00264g').qtip({
                  content: "<h2>CAGL0D00264g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative nuclear phosphatase regulatory subunit; gene is downregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00264g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00264g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D01265g').qtip({
                  content: "<h2>CAGL0D01265g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Copper-binding metallothionein, involved in sequestration of metal ions; inducible by copper and silver; gene used for molecular typing of C. glabrata strain isolates</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D01265g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D01265g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D01474g').qtip({
                  content: "<h2>CAGL0D01474g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D01474g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D01474g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D05434g').qtip({
                  content: "<h2>CAGL0D05434g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D05434g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D05434g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E00803g').qtip({
                  content: "<h2>CAGL0E00803g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative small cytosolic stress-induced chaperone; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E00803g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E00803g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E01881g').qtip({
                  content: "<h2>CAGL0E01881g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative aspartic protease; member of a YPS gene cluster that is required for virulence in mice; induced in response to low pH and high temperature</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01881g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01881g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E02255g').qtip({
                  content: "<h2>CAGL0E02255g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in fungal-type cell wall organization and extrinsic component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E02255g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E02255g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E03025g').qtip({
                  content: "<h2>CAGL0E03025g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : ECL1 and Saccharomyces cerevisiae S288C : YGR146C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E03025g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E03025g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E04224g').qtip({
                  content: "<h2>CAGL0E04224g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04224g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04224g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E04548g').qtip({
                  content: "<h2>CAGL0E04548g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YOR020W-A and Saccharomyces cerevisiae S288C : YOR020W-A</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04548g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04548g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E04554g').qtip({
                  content: "<h2>CAGL0E04554g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04554g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04554g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E05588g').qtip({
                  content: "<h2>CAGL0E05588g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-directed DNA polymerase activity, deoxycytidyl transferase activity and role in error-free translesion synthesis, error-prone translesion synthesis</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05588g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05588g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E06072g').qtip({
                  content: "<h2>CAGL0E06072g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YMR181C and Saccharomyces cerevisiae S288C : YMR181C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E06072g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E06072g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F01463g').qtip({
                  content: "<h2>CAGL0F01463g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative GPI-linked cell wall mannoprotein of the Srp1p/Tip1p family</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01463g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01463g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F01485g').qtip({
                  content: "<h2>CAGL0F01485g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative GPI-linked cell wall mannoprotein of the Srp1p/Tip1p family</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01485g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01485g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F02145g').qtip({
                  content: "<h2>CAGL0F02145g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have calmodulin binding activity and role in lysosomal microautophagy, polyphosphate metabolic process, protein localization, vacuolar transport, vacuole fusion, non-autophagic</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F02145g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F02145g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F04191g').qtip({
                  content: "<h2>CAGL0F04191g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YBL029C-A, C. albicans SC5314 : C1_02060W_A, C. dubliniensis CD36 : Cd36_01920, C. parapsilosis CDC317 : CPAR2_108200 and C. auris B8441 : B9J08_000493</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04191g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04191g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F04631g').qtip({
                  content: "<h2>CAGL0F04631g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : MOH1, C. albicans SC5314 : C4_03430W_A/MOH1, C. dubliniensis CD36 : Cd36_43220, C. parapsilosis CDC317 : CPAR2_403470 and C. auris B8441 : B9J08_003595</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04631g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04631g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F04807g').qtip({
                  content: "<h2>CAGL0F04807g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in pathogenesis and cell surface, hyphal cell wall, integral component of mitochondrial outer membrane, membrane, mitochondrial outer membrane, mitochondrion, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04807g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04807g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F05093g').qtip({
                  content: "<h2>CAGL0F05093g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in microtubule-based process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F05093g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F05093g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F05709g').qtip({
                  content: "<h2>CAGL0F05709g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in bipolar cellular bud site selection, cellular cation homeostasis and nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F05709g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F05709g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F07953g').qtip({
                  content: "<h2>CAGL0F07953g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : SPG1 and Saccharomyces cerevisiae S288C : YGR236C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F07953g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F07953g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F08217g').qtip({
                  content: "<h2>CAGL0F08217g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytoplasmic stress granule localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F08217g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F08217g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G01122g').qtip({
                  content: "<h2>CAGL0G01122g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G01122g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G01122g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G02849g').qtip({
                  content: "<h2>CAGL0G02849g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have endoplasmic reticulum, nuclear envelope localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G02849g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G02849g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G03289g').qtip({
                  content: "<h2>CAGL0G03289g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Heat shock protein of the HSP70 family</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G03289g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G03289g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G04433g').qtip({
                  content: "<h2>CAGL0G04433g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : PRM10, C. albicans SC5314 : C7_01940C_A, C. dubliniensis CD36 : Cd36_71750, C. parapsilosis CDC317 : CPAR2_703450 and C. auris B8441 : B9J08_001559</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G04433g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G04433g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G05566g').qtip({
                  content: "<h2>CAGL0G05566g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ascospore formation, cellular response to drug, fungal-type cell wall organization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G05566g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G05566g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G05830g').qtip({
                  content: "<h2>CAGL0G05830g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G05830g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G05830g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G05962g').qtip({
                  content: "<h2>CAGL0G05962g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted integral component of membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G05962g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G05962g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G06006g').qtip({
                  content: "<h2>CAGL0G06006g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have endopeptidase inhibitor activity and role in vacuole fusion, non-autophagic</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06006g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06006g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G06050g').qtip({
                  content: "<h2>CAGL0G06050g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06050g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06050g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G06798g').qtip({
                  content: "<h2>CAGL0G06798g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in iron ion homeostasis and cytoplasm, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06798g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06798g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G06952g').qtip({
                  content: "<h2>CAGL0G06952g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have calmodulin binding, inositol hexakisphosphate binding, polyphosphate kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06952g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06952g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G07711g').qtip({
                  content: "<h2>CAGL0G07711g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G07711g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G07711g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G10175g').qtip({
                  content: "<h2>CAGL0G10175g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Adhesin-like protein; identified in cell wall extracts by mass spectrometry; belongs to adhesin cluster IV; predicted GPI anchor</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G10175g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G10175g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H00572g').qtip({
                  content: "<h2>CAGL0H00572g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted integral component of membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00572g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00572g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H00594g').qtip({
                  content: "<h2>CAGL0H00594g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural molecule activity, role in protein localization to spindle pole body, spindle pole body duplication and central plaque of spindle pole body localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00594g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00594g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H00825g').qtip({
                  content: "<h2>CAGL0H00825g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted nucleoside-triphosphatase activity, nucleotide binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00825g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00825g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H02563g').qtip({
                  content: "<h2>CAGL0H02563g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Predicted GPI-linked protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02563g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02563g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H02893g').qtip({
                  content: "<h2>CAGL0H02893g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted deaminase activity and role in purine ribonucleoside monophosphate biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02893g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02893g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H07337g').qtip({
                  content: "<h2>CAGL0H07337g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H07337g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H07337g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H08624g').qtip({
                  content: "<h2>CAGL0H08624g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in chromosome segregation, establishment of mitotic sister chromatid cohesion and condensed nuclear chromosome kinetochore localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H08624g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H08624g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H08844g').qtip({
                  content: "<h2>CAGL0H08844g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative adhesin-like protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H08844g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H08844g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H09592g').qtip({
                  content: "<h2>CAGL0H09592g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative GPI-linked cell wall protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H09592g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H09592g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H09614g').qtip({
                  content: "<h2>CAGL0H09614g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative GPI-linked cell wall protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H09614g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H09614g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H09966g').qtip({
                  content: "<h2>CAGL0H09966g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : FMP23 and Saccharomyces cerevisiae S288C : YBR047W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H09966g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H09966g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H10010g').qtip({
                  content: "<h2>CAGL0H10010g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H10010g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H10010g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I00550g').qtip({
                  content: "<h2>CAGL0I00550g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YLR297W and Saccharomyces cerevisiae S288C : YLR297W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I00550g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I00550g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I02728g').qtip({
                  content: "<h2>CAGL0I02728g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in mitochondrial respiratory chain complex assembly and cytoplasm, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02728g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02728g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I04328g').qtip({
                  content: "<h2>CAGL0I04328g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YJL133C-A and Saccharomyces cerevisiae S288C : YJL133C-A</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04328g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04328g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I05610g').qtip({
                  content: "<h2>CAGL0I05610g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YNR014W and Saccharomyces cerevisiae S288C : YNR014W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I05610g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I05610g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I05874g').qtip({
                  content: "<h2>CAGL0I05874g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Haloacid dehalogenase-like hydrolase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I05874g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I05874g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I06182g').qtip({
                  content: "<h2>CAGL0I06182g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Pir protein family member, putative cell wall component</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I06182g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I06182g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I06644g').qtip({
                  content: "<h2>CAGL0I06644g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative GPI-linked cell wall protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I06644g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I06644g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I07491g').qtip({
                  content: "<h2>CAGL0I07491g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cellular zinc ion homeostasis</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I07491g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I07491g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I08547g').qtip({
                  content: "<h2>CAGL0I08547g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YER156C, C. albicans SC5314 : C1_01910W_A, C. dubliniensis CD36 : Cd36_01750, C. parapsilosis CDC317 : CPAR2_108260 and C. auris B8441 : B9J08_001589</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I08547g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I08547g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I10147g').qtip({
                  content: "<h2>CAGL0I10147g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein with 32 tandem repeats; putative adhesin-like protein; belongs to adhesin cluster II</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10147g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10147g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J02530g').qtip({
                  content: "<h2>CAGL0J02530g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative adhesion protein; predicted GPI-anchor; belongs to adhesin cluster VI</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J02530g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J02530g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J04004g').qtip({
                  content: "<h2>CAGL0J04004g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in lipid homeostasis, mitochondrion organization and integral component of mitochondrial membrane, mitochondrial outer membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04004g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04004g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J04202g').qtip({
                  content: "<h2>CAGL0J04202g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Heat shock protein; gene is upregulated in azole-resistant strain; expression upregulated in biofilm vs planktonic cell culture</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04202g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04202g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J04224g').qtip({
                  content: "<h2>CAGL0J04224g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATPase activator activity, unfolded protein binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04224g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04224g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J04466g').qtip({
                  content: "<h2>CAGL0J04466g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in fungal-type cell wall organization, protein complex oligomerization and cell cortex of cell tip, membrane raft, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04466g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04466g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J05390g').qtip({
                  content: "<h2>CAGL0J05390g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J05390g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J05390g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J06380g').qtip({
                  content: "<h2>CAGL0J06380g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATPase inhibitor activity, enzyme inhibitor activity, role in negative regulation of ATPase activity and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J06380g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J06380g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J06666g').qtip({
                  content: "<h2>CAGL0J06666g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YML108W, C. albicans SC5314 : CR_06330C_A, C. dubliniensis CD36 : Cd36_31830, C. parapsilosis CDC317 : CPAR2_204870 and C. auris B8441 : B9J08_000809</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J06666g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J06666g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J07568g').qtip({
                  content: "<h2>CAGL0J07568g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase II proximal promoter sequence-specific DNA binding, cysteine-type peptidase activity, double-stranded DNA binding, mRNA binding, single-stranded DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J07568g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J07568g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J09262g').qtip({
                  content: "<h2>CAGL0J09262g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATPase binding activity, role in negative regulation of ATPase activity and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09262g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09262g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J10362g').qtip({
                  content: "<h2>CAGL0J10362g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 5'-deoxynucleotidase activity, GMP 5'-nucleotidase activity and role in deoxyribonucleoside monophosphate catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J10362g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J10362g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K00110g').qtip({
                  content: "<h2>CAGL0K00110g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative adhesin; identified in cell wall extracts by mass spectrometry; belongs to adhesin cluster V; predicted GPI-anchor</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K00110g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K00110g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K01177g').qtip({
                  content: "<h2>CAGL0K01177g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have tubulin binding activity, role in tubulin complex assembly and cytoplasm, polysome, prefoldin complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K01177g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K01177g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K01771g').qtip({
                  content: "<h2>CAGL0K01771g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted transferase activity, transferring acyl groups activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K01771g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K01771g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K02409g').qtip({
                  content: "<h2>CAGL0K02409g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have proton-transporting ATP synthase activity, rotational mechanism activity and role in ATP synthesis coupled proton transport, cristae formation, protein complex oligomerization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K02409g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K02409g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K03091g').qtip({
                  content: "<h2>CAGL0K03091g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in hydrogen peroxide-mediated programmed cell death</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K03091g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K03091g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K03459g').qtip({
                  content: "<h2>CAGL0K03459g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : SPG4 and Saccharomyces cerevisiae S288C : YMR107W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K03459g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K03459g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K04719g').qtip({
                  content: "<h2>CAGL0K04719g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YNL208W, C. albicans SC5314 : C3_05710W_A/RCT1, C. dubliniensis CD36 : Cd36_85650, C. parapsilosis CDC317 : CPAR2_807040 and C. auris B8441 : B9J08_002643</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04719g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04719g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K06105g').qtip({
                  content: "<h2>CAGL0K06105g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : BOP2 and Saccharomyces cerevisiae S288C : YLR267W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K06105g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K06105g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K06633g').qtip({
                  content: "<h2>CAGL0K06633g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in attachment of spindle microtubules to kinetochore, protein localization to kinetochore and COMA complex, kinetochore localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K06633g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K06633g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K07183g').qtip({
                  content: "<h2>CAGL0K07183g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07183g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07183g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K07205g').qtip({
                  content: "<h2>CAGL0K07205g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07205g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07205g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K07546g').qtip({
                  content: "<h2>CAGL0K07546g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Phosphate starvation inducible acid phosphatase; contains a phosphomutase-like domain; functionally complements a S. cerevisiae pho5 mutant; transcript abundance during phosphate starvation regulated by Pho4p</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07546g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07546g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K07678g').qtip({
                  content: "<h2>CAGL0K07678g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07678g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07678g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K08338g').qtip({
                  content: "<h2>CAGL0K08338g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08338g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08338g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K09042g').qtip({
                  content: "<h2>CAGL0K09042g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : TMA16, C. albicans SC5314 : C1_09330W_A, C. dubliniensis CD36 : Cd36_08800, C. parapsilosis CDC317 : CPAR2_207530 and C. auris B8441 : B9J08_002306</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K09042g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K09042g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K10824g').qtip({
                  content: "<h2>CAGL0K10824g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YLR149C, C. albicans SC5314 : C7_03280C_A, C. dubliniensis CD36 : Cd36_72930, C. parapsilosis CDC317 : CPAR2_704080 and C. auris B8441 : B9J08_004261</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10824g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10824g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K11231g').qtip({
                  content: "<h2>CAGL0K11231g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have alpha-1,6-mannosyltransferase activity, role in cell wall mannoprotein biosynthetic process, division septum assembly, protein N-linked glycosylation and alpha-1,6-mannosyltransferase complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K11231g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K11231g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K12980g').qtip({
                  content: "<h2>CAGL0K12980g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Beta mannosyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K12980g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K12980g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L00473g').qtip({
                  content: "<h2>CAGL0L00473g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YMR187C and Saccharomyces cerevisiae S288C : YMR187C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L00473g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L00473g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L00957g').qtip({
                  content: "<h2>CAGL0L00957g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L00957g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L00957g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L01551g').qtip({
                  content: "<h2>CAGL0L01551g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ascospore formation, cellular response to biotic stimulus, cellular response to chemical stimulus, cellular response to glucose starvation and cellular response to neutral pH, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L01551g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L01551g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L03696g').qtip({
                  content: "<h2>CAGL0L03696g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in transmembrane transport and integral component of membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03696g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03696g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L05786g').qtip({
                  content: "<h2>CAGL0L05786g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted nucleic acid binding, zinc ion binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L05786g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L05786g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L06512g').qtip({
                  content: "<h2>CAGL0L06512g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in meiotic cell cycle</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06512g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06512g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L06864g').qtip({
                  content: "<h2>CAGL0L06864g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein related to ECM3; gene is downregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06864g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06864g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L07502g').qtip({
                  content: "<h2>CAGL0L07502g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative GPI-linked cell wall protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L07502g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L07502g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L08294g').qtip({
                  content: "<h2>CAGL0L08294g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in axial cellular bud site selection and cell division site, cellular bud neck, cellular bud neck septin ring, incipient cellular bud site, integral component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L08294g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L08294g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L10142g').qtip({
                  content: "<h2>CAGL0L10142g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative sphingolipid flippase; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10142g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10142g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L10780g').qtip({
                  content: "<h2>CAGL0L10780g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have acetyl-CoA carboxylase activity, role in long-chain fatty acid biosynthetic process and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10780g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10780g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L11814g').qtip({
                  content: "<h2>CAGL0L11814g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycolipid floppase activity, ion transmembrane transporter activity, phosphorylative mechanism, phosphatidylcholine flippase activity, phosphatidylethanolamine flippase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L11814g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L11814g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L12914g').qtip({
                  content: "<h2>CAGL0L12914g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YKL050C and Saccharomyces cerevisiae S288C : YKL050C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L12914g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L12914g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M00418g').qtip({
                  content: "<h2>CAGL0M00418g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have protein carrier activity, role in protein insertion into mitochondrial inner membrane and mitochondrial intermembrane space protein transporter complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M00418g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M00418g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M01562g').qtip({
                  content: "<h2>CAGL0M01562g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YDR391C, Debaryomyces hansenii CBS767 : DEHA2D01298g and Saccharomyces cerevisiae S288C : YDR391C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M01562g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M01562g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M02211g').qtip({
                  content: "<h2>CAGL0M02211g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative aspartyl protease Saccharopepsin precursor; expression upregulated in biofilm vs planktonic cell culture</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M02211g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M02211g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M04675g').qtip({
                  content: "<h2>CAGL0M04675g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have thiosulfate sulfurtransferase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M04675g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M04675g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M05401g').qtip({
                  content: "<h2>CAGL0M05401g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YBR201C-A and Saccharomyces cerevisiae S288C : YBR201C-A</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M05401g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M05401g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M06633g').qtip({
                  content: "<h2>CAGL0M06633g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M06633g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M06633g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M07001g').qtip({
                  content: "<h2>CAGL0M07001g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in TORC1 signaling, protein localization to vacuole and EGO complex, fungal-type vacuole membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M07001g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M07001g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M09229g').qtip({
                  content: "<h2>CAGL0M09229g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M09229g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M09229g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M09713g').qtip({
                  content: "<h2>CAGL0M09713g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein involved in DNA damage response; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M09713g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M09713g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M11000g').qtip({
                  content: "<h2>CAGL0M11000g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytosol localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M11000g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M11000g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M12947g').qtip({
                  content: "<h2>CAGL0M12947g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Mitochondria-localized protein; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M12947g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M12947g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M14069g').qtip({
                  content: "<h2>CAGL0M14069g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Adhesin-like protein with similarity to S. cerevisiae flocculins, cell wall proteins that mediate adhesion; predicted GPI anchor; belongs to adhesin cluster II</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M14069g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M14069g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
