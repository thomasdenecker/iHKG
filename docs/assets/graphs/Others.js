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
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A01067g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : KEL3, C. albicans SC5314 : C1_13720W_A, C. dubliniensis CD36 : Cd36_12710, C. parapsilosis CDC317 : CPAR2_201590 and C. auris B8441 : B9J08_002506</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01067g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01067g'  target='_blank'> Link to GRYC</a>",
                  x : 5.43119095619622,
                  y : 8.88144696891349
                  },
                  position : {
                  'x' : 54.3119095619622,
                  'y' : 88.8144696891349
                  },
  },
{
                  data: {
                  id: 'CAGL0A01089g',
                  name: 'CAGL0A01089g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A01089g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted alcohol O-acetyltransferase activity and role in alcohol metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01089g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01089g'  target='_blank'> Link to GRYC</a>",
                  x : 7.36488266851631,
                  y : -2.2163562854913
                  },
                  position : {
                  'x' : 73.6488266851631,
                  'y' : -22.163562854913
                  },
  },
{
                  data: {
                  id: 'CAGL0A01650g',
                  name: 'CAGL0A01650g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A01650g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01650g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01650g'  target='_blank'> Link to GRYC</a>",
                  x : 3.4456198839949,
                  y : -1.80778373754072
                  },
                  position : {
                  'x' : 34.456198839949,
                  'y' : -18.0778373754072
                  },
  },
{
                  data: {
                  id: 'CAGL0A02277g',
                  name: 'CAGL0A02277g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffffff',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A02277g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02277g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02277g'  target='_blank'> Link to GRYC</a>",
                  x : 13.7526104946709,
                  y : 1.55449044612476
                  },
                  position : {
                  'x' : 137.526104946709,
                  'y' : 15.5449044612476
                  },
  },
{
                  data: {
                  id: 'CAGL0A02299g',
                  name: 'CAGL0A02299g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A02299g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02299g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02299g'  target='_blank'> Link to GRYC</a>",
                  x : 3.49671899844551,
                  y : -0.993161153514189
                  },
                  position : {
                  'x' : 34.9671899844551,
                  'y' : -9.93161153514189
                  },
  },
{
                  data: {
                  id: 'CAGL0B00594g',
                  name: 'CAGL0B00594g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B00594g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Predicted GPI-linked protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B00594g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B00594g'  target='_blank'> Link to GRYC</a>",
                  x : 6.45492333622568,
                  y : 7.97054241100562
                  },
                  position : {
                  'x' : 64.5492333622568,
                  'y' : 79.7054241100562
                  },
  },
{
                  data: {
                  id: 'CAGL0B00946g',
                  name: 'CAGL0B00946g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B00946g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytosol localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B00946g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B00946g'  target='_blank'> Link to GRYC</a>",
                  x : 4.65040067058012,
                  y : -0.968361563276414
                  },
                  position : {
                  'x' : 46.5040067058012,
                  'y' : -9.68361563276414
                  },
  },
{
                  data: {
                  id: 'CAGL0B02585g',
                  name: 'CAGL0B02585g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B02585g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ER-dependent peroxisome organization, endoplasmic reticulum inheritance, endoplasmic reticulum tubular network maintenance and endoplasmic reticulum tubular network organization, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02585g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02585g'  target='_blank'> Link to GRYC</a>",
                  x : 3.28035372265289,
                  y : 6.92708995920834
                  },
                  position : {
                  'x' : 32.8035372265289,
                  'y' : 69.2708995920834
                  },
  },
{
                  data: {
                  id: 'CAGL0B02904g',
                  name: 'CAGL0B02904g',
                  gene: 'BMT6',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B02904g</h2><hr><p><b>Gene name</b> : BMT6</p><p><b>Description</b> : Beta mannosyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02904g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02904g'  target='_blank'> Link to GRYC</a>",
                  x : 1.21055462083534,
                  y : 0.766017982043251
                  },
                  position : {
                  'x' : 12.1055462083534,
                  'y' : 7.66017982043251
                  },
  },
{
                  data: {
                  id: 'CAGL0B02970g',
                  name: 'CAGL0B02970g',
                  gene: 'BMT5',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffffff',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B02970g</h2><hr><p><b>Gene name</b> : BMT5</p><p><b>Description</b> : Beta mannosyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02970g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02970g'  target='_blank'> Link to GRYC</a>",
                  x : 1.81205506444693,
                  y : 5.46480023800711
                  },
                  position : {
                  'x' : 18.1205506444693,
                  'y' : 54.6480023800711
                  },
  },
{
                  data: {
                  id: 'CAGL0C00110g',
                  name: 'CAGL0C00110g',
                  gene: 'EPA6',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C00110g</h2><hr><p><b>Gene name</b> : EPA6</p><p><b>Description</b> : Sub-telomerically encoded adhesin with a role in cell adhesion; binds to ligands containing a terminal galactose residue; expressed during murine urinary tract infection, biofilm-upregulated; belongs to adhesin cluster I</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C00110g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C00110g'  target='_blank'> Link to GRYC</a>",
                  x : 1.53711499530628,
                  y : 5.79857627481386
                  },
                  position : {
                  'x' : 15.3711499530628,
                  'y' : 57.9857627481386
                  },
  },
{
                  data: {
                  id: 'CAGL0C00275g',
                  name: 'CAGL0C00275g',
                  gene: 'HSP31',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C00275g</h2><hr><p><b>Gene name</b> : HSP31</p><p><b>Description</b> : Putative cysteine protease; protein differentially expressed in azole resistant strain; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C00275g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C00275g'  target='_blank'> Link to GRYC</a>",
                  x : -0.278830161318554,
                  y : -4.22073347902603
                  },
                  position : {
                  'x' : -2.78830161318554,
                  'y' : -42.2073347902603
                  },
  },
{
                  data: {
                  id: 'CAGL0C00968g',
                  name: 'CAGL0C00968g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C00968g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Adhesin-like protein with a predicted role in cell adhesion; belongs to adhesin cluster VII; predicted GPI-anchor</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C00968g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C00968g'  target='_blank'> Link to GRYC</a>",
                  x : 1.31149901525574,
                  y : 4.48885305123534
                  },
                  position : {
                  'x' : 13.1149901525574,
                  'y' : 44.8885305123534
                  },
  },
{
                  data: {
                  id: 'CAGL0C01133g',
                  name: 'CAGL0C01133g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C01133g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Adhesin-like protein; belongs to adhesin cluster VII; predicted GPI anchor</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C01133g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C01133g'  target='_blank'> Link to GRYC</a>",
                  x : 0.943569403080498,
                  y : 4.48729174897784
                  },
                  position : {
                  'x' : 9.43569403080498,
                  'y' : 44.8729174897784
                  },
  },
{
                  data: {
                  id: 'CAGL0C01749g',
                  name: 'CAGL0C01749g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C01749g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 5'-deoxynucleotidase activity, GMP 5'-nucleotidase activity and role in deoxyribonucleoside monophosphate catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C01749g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C01749g'  target='_blank'> Link to GRYC</a>",
                  x : 9.10713868910056,
                  y : 6.72783290386922
                  },
                  position : {
                  'x' : 91.0713868910056,
                  'y' : 67.2783290386922
                  },
  },
{
                  data: {
                  id: 'CAGL0C02365g',
                  name: 'CAGL0C02365g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C02365g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C02365g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C02365g'  target='_blank'> Link to GRYC</a>",
                  x : 3.70627246393222,
                  y : -0.0810368379894287
                  },
                  position : {
                  'x' : 37.0627246393222,
                  'y' : -0.810368379894287
                  },
  },
{
                  data: {
                  id: 'CAGL0C03487g',
                  name: 'CAGL0C03487g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C03487g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in phospholipid translocation and trans-Golgi network localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03487g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03487g'  target='_blank'> Link to GRYC</a>",
                  x : 10.1434470116541,
                  y : 6.0513077708969
                  },
                  position : {
                  'x' : 101.434470116541,
                  'y' : 60.513077708969
                  },
  },
{
                  data: {
                  id: 'CAGL0C03608g',
                  name: 'CAGL0C03608g',
                  gene: 'TUP1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C03608g</h2><hr><p><b>Gene name</b> : TUP1</p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03608g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03608g'  target='_blank'> Link to GRYC</a>",
                  x : 0.908805813510975,
                  y : 5.29567121960659
                  },
                  position : {
                  'x' : 9.08805813510975,
                  'y' : 52.956712196066
                  },
  },
{
                  data: {
                  id: 'CAGL0C03872g',
                  name: 'CAGL0C03872g',
                  gene: 'TIR3',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C03872g</h2><hr><p><b>Gene name</b> : TIR3</p><p><b>Description</b> : Putative GPI-linked cell wall protein involved in sterol uptake</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03872g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03872g'  target='_blank'> Link to GRYC</a>",
                  x : 7.89206740615443,
                  y : -3.84398834210261
                  },
                  position : {
                  'x' : 78.9206740615443,
                  'y' : -38.4398834210261
                  },
  },
{
                  data: {
                  id: 'CAGL0D00264g',
                  name: 'CAGL0D00264g',
                  gene: 'NUD1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D00264g</h2><hr><p><b>Gene name</b> : NUD1</p><p><b>Description</b> : Putative nuclear phosphatase regulatory subunit; gene is downregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00264g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00264g'  target='_blank'> Link to GRYC</a>",
                  x : 6.18686316900084,
                  y : 1.37982032078218
                  },
                  position : {
                  'x' : 61.8686316900084,
                  'y' : 13.7982032078218
                  },
  },
{
                  data: {
                  id: 'CAGL0D01265g',
                  name: 'CAGL0D01265g',
                  gene: 'MT-I',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffffff',
                  faveColorHigh: '#ffffff',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D01265g</h2><hr><p><b>Gene name</b> : MT-I</p><p><b>Description</b> : Copper-binding metallothionein, involved in sequestration of metal ions; inducible by copper and silver; gene used for molecular typing of C. glabrata strain isolates</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D01265g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D01265g'  target='_blank'> Link to GRYC</a>",
                  x : 12.9485422146357,
                  y : -2.14484098224228
                  },
                  position : {
                  'x' : 129.485422146357,
                  'y' : -21.4484098224228
                  },
  },
{
                  data: {
                  id: 'CAGL0D01474g',
                  name: 'CAGL0D01474g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D01474g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D01474g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D01474g'  target='_blank'> Link to GRYC</a>",
                  x : 3.9822556852766,
                  y : -0.508178784079679
                  },
                  position : {
                  'x' : 39.822556852766,
                  'y' : -5.08178784079679
                  },
  },
{
                  data: {
                  id: 'CAGL0D05434g',
                  name: 'CAGL0D05434g',
                  gene: 'ROX1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D05434g</h2><hr><p><b>Gene name</b> : ROX1</p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D05434g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D05434g'  target='_blank'> Link to GRYC</a>",
                  x : 11.6388873529442,
                  y : 6.47960819279597
                  },
                  position : {
                  'x' : 116.388873529442,
                  'y' : 64.7960819279597
                  },
  },
{
                  data: {
                  id: 'CAGL0E00803g',
                  name: 'CAGL0E00803g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E00803g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative small cytosolic stress-induced chaperone; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E00803g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E00803g'  target='_blank'> Link to GRYC</a>",
                  x : 3.61698670855423,
                  y : 0.385460141591182
                  },
                  position : {
                  'x' : 36.1698670855423,
                  'y' : 3.85460141591182
                  },
  },
{
                  data: {
                  id: 'CAGL0E01881g',
                  name: 'CAGL0E01881g',
                  gene: 'YPS11',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E01881g</h2><hr><p><b>Gene name</b> : YPS11</p><p><b>Description</b> : Putative aspartic protease; member of a YPS gene cluster that is required for virulence in mice; induced in response to low pH and high temperature</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01881g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01881g'  target='_blank'> Link to GRYC</a>",
                  x : 0.652374098809259,
                  y : 1.46617491017815
                  },
                  position : {
                  'x' : 6.52374098809259,
                  'y' : 14.6617491017815
                  },
  },
{
                  data: {
                  id: 'CAGL0E02255g',
                  name: 'CAGL0E02255g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E02255g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in fungal-type cell wall organization and extrinsic component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E02255g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E02255g'  target='_blank'> Link to GRYC</a>",
                  x : 2.93849577631582,
                  y : 12.1351491038365
                  },
                  position : {
                  'x' : 29.3849577631582,
                  'y' : 121.351491038365
                  },
  },
{
                  data: {
                  id: 'CAGL0E03025g',
                  name: 'CAGL0E03025g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E03025g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : ECL1 and Saccharomyces cerevisiae S288C : YGR146C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E03025g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E03025g'  target='_blank'> Link to GRYC</a>",
                  x : 5.61805644142983,
                  y : -1.03513510189556
                  },
                  position : {
                  'x' : 56.1805644142983,
                  'y' : -10.3513510189556
                  },
  },
{
                  data: {
                  id: 'CAGL0E04224g',
                  name: 'CAGL0E04224g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E04224g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04224g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04224g'  target='_blank'> Link to GRYC</a>",
                  x : 0.496039028265939,
                  y : 3.62487151044306
                  },
                  position : {
                  'x' : 4.96039028265939,
                  'y' : 36.2487151044306
                  },
  },
{
                  data: {
                  id: 'CAGL0E04548g',
                  name: 'CAGL0E04548g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E04548g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YOR020W-A and Saccharomyces cerevisiae S288C : YOR020W-A</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04548g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04548g'  target='_blank'> Link to GRYC</a>",
                  x : 2.72885202450996,
                  y : -3.36250720208998
                  },
                  position : {
                  'x' : 27.2885202450996,
                  'y' : -33.6250720208998
                  },
  },
{
                  data: {
                  id: 'CAGL0E04554g',
                  name: 'CAGL0E04554g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E04554g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04554g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04554g'  target='_blank'> Link to GRYC</a>",
                  x : -1.87772511811781,
                  y : -0.524758466307096
                  },
                  position : {
                  'x' : -18.7772511811781,
                  'y' : -5.24758466307096
                  },
  },
{
                  data: {
                  id: 'CAGL0E05588g',
                  name: 'CAGL0E05588g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0E05588g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-directed DNA polymerase activity, deoxycytidyl transferase activity and role in error-free translesion synthesis, error-prone translesion synthesis</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05588g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05588g'  target='_blank'> Link to GRYC</a>",
                  x : 5.39867479367194,
                  y : -0.265838381156907
                  },
                  position : {
                  'x' : 53.9867479367194,
                  'y' : -2.65838381156907
                  },
  },
{
                  data: {
                  id: 'CAGL0E06072g',
                  name: 'CAGL0E06072g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E06072g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YMR181C and Saccharomyces cerevisiae S288C : YMR181C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E06072g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E06072g'  target='_blank'> Link to GRYC</a>",
                  x : 3.21878793974028,
                  y : 0.778877510634317
                  },
                  position : {
                  'x' : 32.1878793974028,
                  'y' : 7.78877510634317
                  },
  },
{
                  data: {
                  id: 'CAGL0F01463g',
                  name: 'CAGL0F01463g',
                  gene: 'TIR1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F01463g</h2><hr><p><b>Gene name</b> : TIR1</p><p><b>Description</b> : Putative GPI-linked cell wall mannoprotein of the Srp1p/Tip1p family</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01463g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01463g'  target='_blank'> Link to GRYC</a>",
                  x : 5.66376311068801,
                  y : 1.30476709944167
                  },
                  position : {
                  'x' : 56.6376311068801,
                  'y' : 13.0476709944167
                  },
  },
{
                  data: {
                  id: 'CAGL0F01485g',
                  name: 'CAGL0F01485g',
                  gene: 'TIR2',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F01485g</h2><hr><p><b>Gene name</b> : TIR2</p><p><b>Description</b> : Putative GPI-linked cell wall mannoprotein of the Srp1p/Tip1p family</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01485g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01485g'  target='_blank'> Link to GRYC</a>",
                  x : 3.54965987064068,
                  y : -0.500693421116705
                  },
                  position : {
                  'x' : 35.4965987064068,
                  'y' : -5.00693421116705
                  },
  },
{
                  data: {
                  id: 'CAGL0F02145g',
                  name: 'CAGL0F02145g',
                  gene: 'PHM1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F02145g</h2><hr><p><b>Gene name</b> : PHM1</p><p><b>Description</b> : Ortholog(s) have calmodulin binding activity and role in lysosomal microautophagy, polyphosphate metabolic process, protein localization, vacuolar transport, vacuole fusion, non-autophagic</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F02145g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F02145g'  target='_blank'> Link to GRYC</a>",
                  x : 1.11284920488991,
                  y : 3.03066401389772
                  },
                  position : {
                  'x' : 11.1284920488991,
                  'y' : 30.3066401389772
                  },
  },
{
                  data: {
                  id: 'CAGL0F04191g',
                  name: 'CAGL0F04191g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F04191g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YBL029C-A, C. albicans SC5314 : C1_02060W_A, C. dubliniensis CD36 : Cd36_01920, C. parapsilosis CDC317 : CPAR2_108200 and C. auris B8441 : B9J08_000493</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04191g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04191g'  target='_blank'> Link to GRYC</a>",
                  x : -0.325824829624877,
                  y : 0.46258989645468
                  },
                  position : {
                  'x' : -3.25824829624877,
                  'y' : 4.6258989645468
                  },
  },
{
                  data: {
                  id: 'CAGL0F04631g',
                  name: 'CAGL0F04631g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F04631g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : MOH1, C. albicans SC5314 : C4_03430W_A/MOH1, C. dubliniensis CD36 : Cd36_43220, C. parapsilosis CDC317 : CPAR2_403470 and C. auris B8441 : B9J08_003595</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04631g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04631g'  target='_blank'> Link to GRYC</a>",
                  x : 3.93292647199066,
                  y : -5.43711870107665
                  },
                  position : {
                  'x' : 39.3292647199066,
                  'y' : -54.3711870107665
                  },
  },
{
                  data: {
                  id: 'CAGL0F04807g',
                  name: 'CAGL0F04807g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F04807g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in pathogenesis and cell surface, hyphal cell wall, integral component of mitochondrial outer membrane, membrane, mitochondrial outer membrane, mitochondrion, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04807g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04807g'  target='_blank'> Link to GRYC</a>",
                  x : 2.35781103657391,
                  y : -0.150624869022057
                  },
                  position : {
                  'x' : 23.5781103657391,
                  'y' : -1.50624869022057
                  },
  },
{
                  data: {
                  id: 'CAGL0F05093g',
                  name: 'CAGL0F05093g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F05093g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in microtubule-based process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F05093g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F05093g'  target='_blank'> Link to GRYC</a>",
                  x : -1.78940025061554,
                  y : 2.26452721794013
                  },
                  position : {
                  'x' : -17.8940025061554,
                  'y' : 22.6452721794013
                  },
  },
{
                  data: {
                  id: 'CAGL0F05709g',
                  name: 'CAGL0F05709g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F05709g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in bipolar cellular bud site selection, cellular cation homeostasis and nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F05709g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F05709g'  target='_blank'> Link to GRYC</a>",
                  x : -3.88245485651967,
                  y : 3.17427415826221
                  },
                  position : {
                  'x' : -38.8245485651967,
                  'y' : 31.7427415826221
                  },
  },
{
                  data: {
                  id: 'CAGL0F07953g',
                  name: 'CAGL0F07953g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F07953g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : SPG1 and Saccharomyces cerevisiae S288C : YGR236C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F07953g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F07953g'  target='_blank'> Link to GRYC</a>",
                  x : 1.23488963295851,
                  y : -4.29190798728469
                  },
                  position : {
                  'x' : 12.3488963295851,
                  'y' : -42.9190798728469
                  },
  },
{
                  data: {
                  id: 'CAGL0F08217g',
                  name: 'CAGL0F08217g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F08217g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytoplasmic stress granule localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F08217g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F08217g'  target='_blank'> Link to GRYC</a>",
                  x : 1.66390378232246,
                  y : -0.541265882224941
                  },
                  position : {
                  'x' : 16.6390378232246,
                  'y' : -5.41265882224941
                  },
  },
{
                  data: {
                  id: 'CAGL0G01122g',
                  name: 'CAGL0G01122g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G01122g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G01122g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G01122g'  target='_blank'> Link to GRYC</a>",
                  x : 2.09235186680741,
                  y : -2.52426908732147
                  },
                  position : {
                  'x' : 20.9235186680741,
                  'y' : -25.2426908732147
                  },
  },
{
                  data: {
                  id: 'CAGL0G02849g',
                  name: 'CAGL0G02849g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G02849g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have endoplasmic reticulum, nuclear envelope localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G02849g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G02849g'  target='_blank'> Link to GRYC</a>",
                  x : 1.63900758299808,
                  y : -2.24612544265229
                  },
                  position : {
                  'x' : 16.3900758299808,
                  'y' : -22.4612544265229
                  },
  },
{
                  data: {
                  id: 'CAGL0G03289g',
                  name: 'CAGL0G03289g',
                  gene: 'SSA3',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G03289g</h2><hr><p><b>Gene name</b> : SSA3</p><p><b>Description</b> : Heat shock protein of the HSP70 family</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G03289g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G03289g'  target='_blank'> Link to GRYC</a>",
                  x : 7.29711443382415,
                  y : -4.82513526001542
                  },
                  position : {
                  'x' : 72.9711443382415,
                  'y' : -48.2513526001542
                  },
  },
{
                  data: {
                  id: 'CAGL0G04433g',
                  name: 'CAGL0G04433g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G04433g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : PRM10, C. albicans SC5314 : C7_01940C_A, C. dubliniensis CD36 : Cd36_71750, C. parapsilosis CDC317 : CPAR2_703450 and C. auris B8441 : B9J08_001559</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G04433g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G04433g'  target='_blank'> Link to GRYC</a>",
                  x : 5.53814650537764,
                  y : -0.026198369206081
                  },
                  position : {
                  'x' : 55.3814650537764,
                  'y' : -0.26198369206081
                  },
  },
{
                  data: {
                  id: 'CAGL0G05566g',
                  name: 'CAGL0G05566g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G05566g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ascospore formation, cellular response to drug, fungal-type cell wall organization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G05566g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G05566g'  target='_blank'> Link to GRYC</a>",
                  x : 5.32960030852413,
                  y : 8.05234699563382
                  },
                  position : {
                  'x' : 53.2960030852413,
                  'y' : 80.5234699563382
                  },
  },
{
                  data: {
                  id: 'CAGL0G05830g',
                  name: 'CAGL0G05830g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G05830g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G05830g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G05830g'  target='_blank'> Link to GRYC</a>",
                  x : 1.4398998936907,
                  y : 0.0243401948256093
                  },
                  position : {
                  'x' : 14.398998936907,
                  'y' : 0.243401948256093
                  },
  },
{
                  data: {
                  id: 'CAGL0G05962g',
                  name: 'CAGL0G05962g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G05962g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted integral component of membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G05962g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G05962g'  target='_blank'> Link to GRYC</a>",
                  x : 2.38645299345701,
                  y : 0.199651536886403
                  },
                  position : {
                  'x' : 23.8645299345701,
                  'y' : 1.99651536886403
                  },
  },
{
                  data: {
                  id: 'CAGL0G06006g',
                  name: 'CAGL0G06006g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G06006g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have endopeptidase inhibitor activity and role in vacuole fusion, non-autophagic</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06006g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06006g'  target='_blank'> Link to GRYC</a>",
                  x : 3.78596098997764,
                  y : 1.59233278380176
                  },
                  position : {
                  'x' : 37.8596098997764,
                  'y' : 15.9233278380176
                  },
  },
{
                  data: {
                  id: 'CAGL0G06050g',
                  name: 'CAGL0G06050g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G06050g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06050g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06050g'  target='_blank'> Link to GRYC</a>",
                  x : 13.2997860290767,
                  y : -0.786586998786777
                  },
                  position : {
                  'x' : 132.997860290768,
                  'y' : -7.86586998786777
                  },
  },
{
                  data: {
                  id: 'CAGL0G06798g',
                  name: 'CAGL0G06798g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G06798g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in iron ion homeostasis and cytoplasm, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06798g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06798g'  target='_blank'> Link to GRYC</a>",
                  x : 10.4493657086082,
                  y : 10.4237598155351
                  },
                  position : {
                  'x' : 104.493657086082,
                  'y' : 104.237598155351
                  },
  },
{
                  data: {
                  id: 'CAGL0G06952g',
                  name: 'CAGL0G06952g',
                  gene: 'PHM3',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G06952g</h2><hr><p><b>Gene name</b> : PHM3</p><p><b>Description</b> : Ortholog(s) have calmodulin binding, inositol hexakisphosphate binding, polyphosphate kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06952g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06952g'  target='_blank'> Link to GRYC</a>",
                  x : 1.16224093120088,
                  y : 2.70547512539082
                  },
                  position : {
                  'x' : 11.6224093120088,
                  'y' : 27.0547512539082
                  },
  },
{
                  data: {
                  id: 'CAGL0G07711g',
                  name: 'CAGL0G07711g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G07711g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G07711g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G07711g'  target='_blank'> Link to GRYC</a>",
                  x : -0.147913532343842,
                  y : 4.37201126041835
                  },
                  position : {
                  'x' : -1.47913532343842,
                  'y' : 43.7201126041835
                  },
  },
{
                  data: {
                  id: 'CAGL0G10175g',
                  name: 'CAGL0G10175g',
                  gene: 'AWP6',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0G10175g</h2><hr><p><b>Gene name</b> : AWP6</p><p><b>Description</b> : Adhesin-like protein; identified in cell wall extracts by mass spectrometry; belongs to adhesin cluster IV; predicted GPI anchor</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G10175g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G10175g'  target='_blank'> Link to GRYC</a>",
                  x : 9.85644657516064,
                  y : -2.83572479520734
                  },
                  position : {
                  'x' : 98.5644657516064,
                  'y' : -28.3572479520734
                  },
  },
{
                  data: {
                  id: 'CAGL0H00572g',
                  name: 'CAGL0H00572g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H00572g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted integral component of membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00572g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00572g'  target='_blank'> Link to GRYC</a>",
                  x : 10.5627510778691,
                  y : 6.81846301143644
                  },
                  position : {
                  'x' : 105.627510778691,
                  'y' : 68.1846301143644
                  },
  },
{
                  data: {
                  id: 'CAGL0H00594g',
                  name: 'CAGL0H00594g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H00594g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural molecule activity, role in protein localization to spindle pole body, spindle pole body duplication and central plaque of spindle pole body localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00594g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00594g'  target='_blank'> Link to GRYC</a>",
                  x : 10.7078559839841,
                  y : 6.07620591942158
                  },
                  position : {
                  'x' : 107.078559839841,
                  'y' : 60.7620591942158
                  },
  },
{
                  data: {
                  id: 'CAGL0H00825g',
                  name: 'CAGL0H00825g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H00825g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted nucleoside-triphosphatase activity, nucleotide binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00825g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00825g'  target='_blank'> Link to GRYC</a>",
                  x : 6.9019976759494,
                  y : -0.955829357044269
                  },
                  position : {
                  'x' : 69.019976759494,
                  'y' : -9.55829357044269
                  },
  },
{
                  data: {
                  id: 'CAGL0H02563g',
                  name: 'CAGL0H02563g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H02563g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Predicted GPI-linked protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02563g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02563g'  target='_blank'> Link to GRYC</a>",
                  x : 2.32747293706866,
                  y : 4.12477833553378
                  },
                  position : {
                  'x' : 23.2747293706866,
                  'y' : 41.2477833553378
                  },
  },
{
                  data: {
                  id: 'CAGL0H02893g',
                  name: 'CAGL0H02893g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H02893g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted deaminase activity and role in purine ribonucleoside monophosphate biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02893g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02893g'  target='_blank'> Link to GRYC</a>",
                  x : 2.54695024415874,
                  y : 0.763587403999313
                  },
                  position : {
                  'x' : 25.4695024415874,
                  'y' : 7.63587403999313
                  },
  },
{
                  data: {
                  id: 'CAGL0H07337g',
                  name: 'CAGL0H07337g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H07337g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H07337g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H07337g'  target='_blank'> Link to GRYC</a>",
                  x : 13.7401746253935,
                  y : 4.25491666313755
                  },
                  position : {
                  'x' : 137.401746253935,
                  'y' : 42.5491666313755
                  },
  },
{
                  data: {
                  id: 'CAGL0H08624g',
                  name: 'CAGL0H08624g',
                  gene: 'MCM16',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H08624g</h2><hr><p><b>Gene name</b> : MCM16</p><p><b>Description</b> : Ortholog(s) have role in chromosome segregation, establishment of mitotic sister chromatid cohesion and condensed nuclear chromosome kinetochore localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H08624g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H08624g'  target='_blank'> Link to GRYC</a>",
                  x : -0.996983415636463,
                  y : 1.89142346609289
                  },
                  position : {
                  'x' : -9.96983415636463,
                  'y' : 18.9142346609289
                  },
  },
{
                  data: {
                  id: 'CAGL0H08844g',
                  name: 'CAGL0H08844g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H08844g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative adhesin-like protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H08844g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H08844g'  target='_blank'> Link to GRYC</a>",
                  x : 4.37534628460261,
                  y : -3.30936808420575
                  },
                  position : {
                  'x' : 43.7534628460261,
                  'y' : -33.0936808420575
                  },
  },
{
                  data: {
                  id: 'CAGL0H09592g',
                  name: 'CAGL0H09592g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#66ff66',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0H09592g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative GPI-linked cell wall protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H09592g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H09592g'  target='_blank'> Link to GRYC</a>",
                  x : -0.11212536832875,
                  y : 11.4330874588556
                  },
                  position : {
                  'x' : -1.1212536832875,
                  'y' : 114.330874588556
                  },
  },
{
                  data: {
                  id: 'CAGL0H09614g',
                  name: 'CAGL0H09614g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#66ff66',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0H09614g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative GPI-linked cell wall protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H09614g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H09614g'  target='_blank'> Link to GRYC</a>",
                  x : 0.774581747011752,
                  y : 11.7025657276411
                  },
                  position : {
                  'x' : 7.74581747011752,
                  'y' : 117.025657276411
                  },
  },
{
                  data: {
                  id: 'CAGL0H09966g',
                  name: 'CAGL0H09966g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0H09966g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : FMP23 and Saccharomyces cerevisiae S288C : YBR047W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H09966g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H09966g'  target='_blank'> Link to GRYC</a>",
                  x : 11.3072282903003,
                  y : -3.21272623600086
                  },
                  position : {
                  'x' : 113.072282903003,
                  'y' : -32.1272623600086
                  },
  },
{
                  data: {
                  id: 'CAGL0H10010g',
                  name: 'CAGL0H10010g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H10010g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H10010g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H10010g'  target='_blank'> Link to GRYC</a>",
                  x : 2.29912500180569,
                  y : -0.904127758815702
                  },
                  position : {
                  'x' : 22.9912500180569,
                  'y' : -9.04127758815702
                  },
  },
{
                  data: {
                  id: 'CAGL0I00550g',
                  name: 'CAGL0I00550g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I00550g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YLR297W and Saccharomyces cerevisiae S288C : YLR297W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I00550g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I00550g'  target='_blank'> Link to GRYC</a>",
                  x : 4.35464363877146,
                  y : 0.419509718306916
                  },
                  position : {
                  'x' : 43.5464363877146,
                  'y' : 4.19509718306916
                  },
  },
{
                  data: {
                  id: 'CAGL0I02728g',
                  name: 'CAGL0I02728g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I02728g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in mitochondrial respiratory chain complex assembly and cytoplasm, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02728g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02728g'  target='_blank'> Link to GRYC</a>",
                  x : -0.392985079506707,
                  y : 2.44247718328514
                  },
                  position : {
                  'x' : -3.92985079506707,
                  'y' : 24.4247718328514
                  },
  },
{
                  data: {
                  id: 'CAGL0I04328g',
                  name: 'CAGL0I04328g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I04328g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YJL133C-A and Saccharomyces cerevisiae S288C : YJL133C-A</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04328g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04328g'  target='_blank'> Link to GRYC</a>",
                  x : 3.19151119321,
                  y : -2.18580037915936
                  },
                  position : {
                  'x' : 31.9151119321,
                  'y' : -21.8580037915936
                  },
  },
{
                  data: {
                  id: 'CAGL0I05610g',
                  name: 'CAGL0I05610g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I05610g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YNR014W and Saccharomyces cerevisiae S288C : YNR014W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I05610g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I05610g'  target='_blank'> Link to GRYC</a>",
                  x : 5.67416597916538,
                  y : -2.44640867015261
                  },
                  position : {
                  'x' : 56.7416597916538,
                  'y' : -24.4640867015261
                  },
  },
{
                  data: {
                  id: 'CAGL0I05874g',
                  name: 'CAGL0I05874g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I05874g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Haloacid dehalogenase-like hydrolase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I05874g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I05874g'  target='_blank'> Link to GRYC</a>",
                  x : 2.72743097681035,
                  y : -0.878900353308455
                  },
                  position : {
                  'x' : 27.2743097681035,
                  'y' : -8.78900353308455
                  },
  },
{
                  data: {
                  id: 'CAGL0I06182g',
                  name: 'CAGL0I06182g',
                  gene: 'PIR2',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I06182g</h2><hr><p><b>Gene name</b> : PIR2</p><p><b>Description</b> : Pir protein family member, putative cell wall component</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I06182g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I06182g'  target='_blank'> Link to GRYC</a>",
                  x : -1.59854767317132,
                  y : 0.661674831156549
                  },
                  position : {
                  'x' : -15.9854767317132,
                  'y' : 6.61674831156549
                  },
  },
{
                  data: {
                  id: 'CAGL0I06644g',
                  name: 'CAGL0I06644g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I06644g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative GPI-linked cell wall protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I06644g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I06644g'  target='_blank'> Link to GRYC</a>",
                  x : 7.79623868431097,
                  y : 6.73448145160778
                  },
                  position : {
                  'x' : 77.9623868431097,
                  'y' : 67.3448145160778
                  },
  },
{
                  data: {
                  id: 'CAGL0I07491g',
                  name: 'CAGL0I07491g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0I07491g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cellular zinc ion homeostasis</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I07491g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I07491g'  target='_blank'> Link to GRYC</a>",
                  x : 6.54041970181279,
                  y : -1.66646487096191
                  },
                  position : {
                  'x' : 65.4041970181279,
                  'y' : -16.6646487096191
                  },
  },
{
                  data: {
                  id: 'CAGL0I08547g',
                  name: 'CAGL0I08547g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I08547g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YER156C, C. albicans SC5314 : C1_01910W_A, C. dubliniensis CD36 : Cd36_01750, C. parapsilosis CDC317 : CPAR2_108260 and C. auris B8441 : B9J08_001589</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I08547g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I08547g'  target='_blank'> Link to GRYC</a>",
                  x : 3.87898379715961,
                  y : 12.2718257344324
                  },
                  position : {
                  'x' : 38.7898379715961,
                  'y' : 122.718257344324
                  },
  },
{
                  data: {
                  id: 'CAGL0I10147g',
                  name: 'CAGL0I10147g',
                  gene: 'PWP1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0I10147g</h2><hr><p><b>Gene name</b> : PWP1</p><p><b>Description</b> : Protein with 32 tandem repeats; putative adhesin-like protein; belongs to adhesin cluster II</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10147g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10147g'  target='_blank'> Link to GRYC</a>",
                  x : -4.39684001207586,
                  y : 6.29098697501312
                  },
                  position : {
                  'x' : -43.9684001207586,
                  'y' : 62.9098697501312
                  },
  },
{
                  data: {
                  id: 'CAGL0J02530g',
                  name: 'CAGL0J02530g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J02530g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative adhesion protein; predicted GPI-anchor; belongs to adhesin cluster VI</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J02530g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J02530g'  target='_blank'> Link to GRYC</a>",
                  x : 6.55536455644918,
                  y : -0.433293063780011
                  },
                  position : {
                  'x' : 65.5536455644918,
                  'y' : -4.33293063780012
                  },
  },
{
                  data: {
                  id: 'CAGL0J04004g',
                  name: 'CAGL0J04004g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J04004g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in lipid homeostasis, mitochondrion organization and integral component of mitochondrial membrane, mitochondrial outer membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04004g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04004g'  target='_blank'> Link to GRYC</a>",
                  x : 8.03813234996483,
                  y : 5.30669058359065
                  },
                  position : {
                  'x' : 80.3813234996483,
                  'y' : 53.0669058359065
                  },
  },
{
                  data: {
                  id: 'CAGL0J04202g',
                  name: 'CAGL0J04202g',
                  gene: 'HSP12',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J04202g</h2><hr><p><b>Gene name</b> : HSP12</p><p><b>Description</b> : Heat shock protein; gene is upregulated in azole-resistant strain; expression upregulated in biofilm vs planktonic cell culture</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04202g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04202g'  target='_blank'> Link to GRYC</a>",
                  x : 8.83915031226472,
                  y : -5.79683419021088
                  },
                  position : {
                  'x' : 88.3915031226472,
                  'y' : -57.9683419021088
                  },
  },
{
                  data: {
                  id: 'CAGL0J04224g',
                  name: 'CAGL0J04224g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J04224g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATPase activator activity, unfolded protein binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04224g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04224g'  target='_blank'> Link to GRYC</a>",
                  x : 1.13609871026449,
                  y : 4.80401824639169
                  },
                  position : {
                  'x' : 11.3609871026449,
                  'y' : 48.0401824639169
                  },
  },
{
                  data: {
                  id: 'CAGL0J04466g',
                  name: 'CAGL0J04466g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0J04466g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in fungal-type cell wall organization, protein complex oligomerization and cell cortex of cell tip, membrane raft, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04466g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04466g'  target='_blank'> Link to GRYC</a>",
                  x : -6.31750713710978,
                  y : 2.18792723010433
                  },
                  position : {
                  'x' : -63.1750713710979,
                  'y' : 21.8792723010433
                  },
  },
{
                  data: {
                  id: 'CAGL0J05390g',
                  name: 'CAGL0J05390g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0J05390g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J05390g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J05390g'  target='_blank'> Link to GRYC</a>",
                  x : -2.73173532846202,
                  y : 3.22621552734093
                  },
                  position : {
                  'x' : -27.3173532846202,
                  'y' : 32.2621552734093
                  },
  },
{
                  data: {
                  id: 'CAGL0J06380g',
                  name: 'CAGL0J06380g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J06380g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATPase inhibitor activity, enzyme inhibitor activity, role in negative regulation of ATPase activity and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J06380g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J06380g'  target='_blank'> Link to GRYC</a>",
                  x : 0.161495113557896,
                  y : 5.23677750015065
                  },
                  position : {
                  'x' : 1.61495113557896,
                  'y' : 52.3677750015065
                  },
  },
{
                  data: {
                  id: 'CAGL0J06666g',
                  name: 'CAGL0J06666g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J06666g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YML108W, C. albicans SC5314 : CR_06330C_A, C. dubliniensis CD36 : Cd36_31830, C. parapsilosis CDC317 : CPAR2_204870 and C. auris B8441 : B9J08_000809</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J06666g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J06666g'  target='_blank'> Link to GRYC</a>",
                  x : -0.582486734602833,
                  y : 4.87730567271951
                  },
                  position : {
                  'x' : -5.82486734602833,
                  'y' : 48.7730567271951
                  },
  },
{
                  data: {
                  id: 'CAGL0J07568g',
                  name: 'CAGL0J07568g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J07568g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase II proximal promoter sequence-specific DNA binding, cysteine-type peptidase activity, double-stranded DNA binding, mRNA binding, single-stranded DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J07568g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J07568g'  target='_blank'> Link to GRYC</a>",
                  x : 4.16878834942004,
                  y : -0.272548910814273
                  },
                  position : {
                  'x' : 41.6878834942004,
                  'y' : -2.72548910814273
                  },
  },
{
                  data: {
                  id: 'CAGL0J09262g',
                  name: 'CAGL0J09262g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J09262g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATPase binding activity, role in negative regulation of ATPase activity and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09262g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09262g'  target='_blank'> Link to GRYC</a>",
                  x : 4.76466048042469,
                  y : 0.243696987205601
                  },
                  position : {
                  'x' : 47.6466048042469,
                  'y' : 2.43696987205601
                  },
  },
{
                  data: {
                  id: 'CAGL0J10362g',
                  name: 'CAGL0J10362g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J10362g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 5'-deoxynucleotidase activity, GMP 5'-nucleotidase activity and role in deoxyribonucleoside monophosphate catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J10362g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J10362g'  target='_blank'> Link to GRYC</a>",
                  x : 6.69784743911419,
                  y : 9.17744003468292
                  },
                  position : {
                  'x' : 66.9784743911419,
                  'y' : 91.7744003468292
                  },
  },
{
                  data: {
                  id: 'CAGL0K00110g',
                  name: 'CAGL0K00110g',
                  gene: 'AWP2',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K00110g</h2><hr><p><b>Gene name</b> : AWP2</p><p><b>Description</b> : Putative adhesin; identified in cell wall extracts by mass spectrometry; belongs to adhesin cluster V; predicted GPI-anchor</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K00110g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K00110g'  target='_blank'> Link to GRYC</a>",
                  x : 1.52642907235987,
                  y : 0.636255276888174
                  },
                  position : {
                  'x' : 15.2642907235987,
                  'y' : 6.36255276888174
                  },
  },
{
                  data: {
                  id: 'CAGL0K01177g',
                  name: 'CAGL0K01177g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K01177g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have tubulin binding activity, role in tubulin complex assembly and cytoplasm, polysome, prefoldin complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K01177g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K01177g'  target='_blank'> Link to GRYC</a>",
                  x : 10.2033793748494,
                  y : 6.48281271135734
                  },
                  position : {
                  'x' : 102.033793748494,
                  'y' : 64.8281271135734
                  },
  },
{
                  data: {
                  id: 'CAGL0K01771g',
                  name: 'CAGL0K01771g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0K01771g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted transferase activity, transferring acyl groups activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K01771g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K01771g'  target='_blank'> Link to GRYC</a>",
                  x : 6.67897936634318,
                  y : 12.1963411466985
                  },
                  position : {
                  'x' : 66.7897936634318,
                  'y' : 121.963411466985
                  },
  },
{
                  data: {
                  id: 'CAGL0K02409g',
                  name: 'CAGL0K02409g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0K02409g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have proton-transporting ATP synthase activity, rotational mechanism activity and role in ATP synthesis coupled proton transport, cristae formation, protein complex oligomerization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K02409g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K02409g'  target='_blank'> Link to GRYC</a>",
                  x : -0.443985533644702,
                  y : 6.30106462304081
                  },
                  position : {
                  'x' : -4.43985533644702,
                  'y' : 63.0106462304081
                  },
  },
{
                  data: {
                  id: 'CAGL0K03091g',
                  name: 'CAGL0K03091g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K03091g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in hydrogen peroxide-mediated programmed cell death</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K03091g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K03091g'  target='_blank'> Link to GRYC</a>",
                  x : 8.73720878653684,
                  y : 6.22571414916577
                  },
                  position : {
                  'x' : 87.3720878653684,
                  'y' : 62.2571414916577
                  },
  },
{
                  data: {
                  id: 'CAGL0K03459g',
                  name: 'CAGL0K03459g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K03459g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : SPG4 and Saccharomyces cerevisiae S288C : YMR107W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K03459g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K03459g'  target='_blank'> Link to GRYC</a>",
                  x : 2.12046899485434,
                  y : -5.00891631818338
                  },
                  position : {
                  'x' : 21.2046899485434,
                  'y' : -50.0891631818338
                  },
  },
{
                  data: {
                  id: 'CAGL0K04719g',
                  name: 'CAGL0K04719g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K04719g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YNL208W, C. albicans SC5314 : C3_05710W_A/RCT1, C. dubliniensis CD36 : Cd36_85650, C. parapsilosis CDC317 : CPAR2_807040 and C. auris B8441 : B9J08_002643</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04719g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04719g'  target='_blank'> Link to GRYC</a>",
                  x : 0.232242540119968,
                  y : 0.967385998964204
                  },
                  position : {
                  'x' : 2.32242540119968,
                  'y' : 9.67385998964204
                  },
  },
{
                  data: {
                  id: 'CAGL0K06105g',
                  name: 'CAGL0K06105g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K06105g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : BOP2 and Saccharomyces cerevisiae S288C : YLR267W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K06105g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K06105g'  target='_blank'> Link to GRYC</a>",
                  x : 13.5024341403688,
                  y : 2.81773326600912
                  },
                  position : {
                  'x' : 135.024341403688,
                  'y' : 28.1773326600912
                  },
  },
{
                  data: {
                  id: 'CAGL0K06633g',
                  name: 'CAGL0K06633g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K06633g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in attachment of spindle microtubules to kinetochore, protein localization to kinetochore and COMA complex, kinetochore localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K06633g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K06633g'  target='_blank'> Link to GRYC</a>",
                  x : 9.78895574510606,
                  y : 6.93862541860289
                  },
                  position : {
                  'x' : 97.8895574510606,
                  'y' : 69.3862541860289
                  },
  },
{
                  data: {
                  id: 'CAGL0K07183g',
                  name: 'CAGL0K07183g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K07183g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07183g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07183g'  target='_blank'> Link to GRYC</a>",
                  x : -3.55217008193915,
                  y : 0.418429421903172
                  },
                  position : {
                  'x' : -35.5217008193915,
                  'y' : 4.18429421903172
                  },
  },
{
                  data: {
                  id: 'CAGL0K07205g',
                  name: 'CAGL0K07205g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K07205g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07205g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07205g'  target='_blank'> Link to GRYC</a>",
                  x : 6.29641687454591,
                  y : 10.1964306145108
                  },
                  position : {
                  'x' : 62.9641687454591,
                  'y' : 101.964306145108
                  },
  },
{
                  data: {
                  id: 'CAGL0K07546g',
                  name: 'CAGL0K07546g',
                  gene: 'PMU2',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K07546g</h2><hr><p><b>Gene name</b> : PMU2</p><p><b>Description</b> : Phosphate starvation inducible acid phosphatase; contains a phosphomutase-like domain; functionally complements a S. cerevisiae pho5 mutant; transcript abundance during phosphate starvation regulated by Pho4p</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07546g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07546g'  target='_blank'> Link to GRYC</a>",
                  x : 13.1443631782499,
                  y : 0.489266580068221
                  },
                  position : {
                  'x' : 131.443631782499,
                  'y' : 4.89266580068221
                  },
  },
{
                  data: {
                  id: 'CAGL0K07678g',
                  name: 'CAGL0K07678g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K07678g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07678g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07678g'  target='_blank'> Link to GRYC</a>",
                  x : 6.64459281680484,
                  y : -6.73088906657983
                  },
                  position : {
                  'x' : 66.4459281680484,
                  'y' : -67.3088906657983
                  },
  },
{
                  data: {
                  id: 'CAGL0K08338g',
                  name: 'CAGL0K08338g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0K08338g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08338g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08338g'  target='_blank'> Link to GRYC</a>",
                  x : -4.85012479736148,
                  y : 1.88334242490476
                  },
                  position : {
                  'x' : -48.5012479736148,
                  'y' : 18.8334242490476
                  },
  },
{
                  data: {
                  id: 'CAGL0K09042g',
                  name: 'CAGL0K09042g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K09042g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : TMA16, C. albicans SC5314 : C1_09330W_A, C. dubliniensis CD36 : Cd36_08800, C. parapsilosis CDC317 : CPAR2_207530 and C. auris B8441 : B9J08_002306</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K09042g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K09042g'  target='_blank'> Link to GRYC</a>",
                  x : 7.34530722138765,
                  y : 8.78437970286843
                  },
                  position : {
                  'x' : 73.4530722138765,
                  'y' : 87.8437970286843
                  },
  },
{
                  data: {
                  id: 'CAGL0K10824g',
                  name: 'CAGL0K10824g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0K10824g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YLR149C, C. albicans SC5314 : C7_03280C_A, C. dubliniensis CD36 : Cd36_72930, C. parapsilosis CDC317 : CPAR2_704080 and C. auris B8441 : B9J08_004261</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10824g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10824g'  target='_blank'> Link to GRYC</a>",
                  x : 6.88868830358587,
                  y : 2.66767960994711
                  },
                  position : {
                  'x' : 68.8868830358587,
                  'y' : 26.6767960994711
                  },
  },
{
                  data: {
                  id: 'CAGL0K11231g',
                  name: 'CAGL0K11231g',
                  gene: 'MNN10',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K11231g</h2><hr><p><b>Gene name</b> : MNN10</p><p><b>Description</b> : Ortholog(s) have alpha-1,6-mannosyltransferase activity, role in cell wall mannoprotein biosynthetic process, division septum assembly, protein N-linked glycosylation and alpha-1,6-mannosyltransferase complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K11231g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K11231g'  target='_blank'> Link to GRYC</a>",
                  x : 9.28584249156184,
                  y : 7.32123238055815
                  },
                  position : {
                  'x' : 92.8584249156184,
                  'y' : 73.2123238055815
                  },
  },
{
                  data: {
                  id: 'CAGL0K12980g',
                  name: 'CAGL0K12980g',
                  gene: 'BMT7',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K12980g</h2><hr><p><b>Gene name</b> : BMT7</p><p><b>Description</b> : Beta mannosyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K12980g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K12980g'  target='_blank'> Link to GRYC</a>",
                  x : 2.33502787635891,
                  y : 7.16149201574318
                  },
                  position : {
                  'x' : 23.3502787635891,
                  'y' : 71.6149201574318
                  },
  },
{
                  data: {
                  id: 'CAGL0L00473g',
                  name: 'CAGL0L00473g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L00473g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YMR187C and Saccharomyces cerevisiae S288C : YMR187C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L00473g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L00473g'  target='_blank'> Link to GRYC</a>",
                  x : 2.73964903478466,
                  y : -0.415377130924318
                  },
                  position : {
                  'x' : 27.3964903478466,
                  'y' : -4.15377130924318
                  },
  },
{
                  data: {
                  id: 'CAGL0L00957g',
                  name: 'CAGL0L00957g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L00957g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L00957g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L00957g'  target='_blank'> Link to GRYC</a>",
                  x : 2.58420967015553,
                  y : 0.572481881634739
                  },
                  position : {
                  'x' : 25.8420967015553,
                  'y' : 5.72481881634739
                  },
  },
{
                  data: {
                  id: 'CAGL0L01551g',
                  name: 'CAGL0L01551g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L01551g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ascospore formation, cellular response to biotic stimulus, cellular response to chemical stimulus, cellular response to glucose starvation and cellular response to neutral pH, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L01551g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L01551g'  target='_blank'> Link to GRYC</a>",
                  x : 8.50154352102031,
                  y : 8.13608880418205
                  },
                  position : {
                  'x' : 85.0154352102031,
                  'y' : 81.3608880418205
                  },
  },
{
                  data: {
                  id: 'CAGL0L03696g',
                  name: 'CAGL0L03696g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L03696g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in transmembrane transport and integral component of membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03696g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03696g'  target='_blank'> Link to GRYC</a>",
                  x : 9.18546776622235,
                  y : 5.1905112453926
                  },
                  position : {
                  'x' : 91.8546776622235,
                  'y' : 51.905112453926
                  },
  },
{
                  data: {
                  id: 'CAGL0L05786g',
                  name: 'CAGL0L05786g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L05786g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted nucleic acid binding, zinc ion binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L05786g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L05786g'  target='_blank'> Link to GRYC</a>",
                  x : -2.09283804704681,
                  y : 1.78290760420997
                  },
                  position : {
                  'x' : -20.9283804704681,
                  'y' : 17.8290760420997
                  },
  },
{
                  data: {
                  id: 'CAGL0L06512g',
                  name: 'CAGL0L06512g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L06512g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in meiotic cell cycle</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06512g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06512g'  target='_blank'> Link to GRYC</a>",
                  x : 1.74739321061218,
                  y : 1.01101492644987
                  },
                  position : {
                  'x' : 17.4739321061218,
                  'y' : 10.1101492644987
                  },
  },
{
                  data: {
                  id: 'CAGL0L06864g',
                  name: 'CAGL0L06864g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L06864g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein related to ECM3; gene is downregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06864g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06864g'  target='_blank'> Link to GRYC</a>",
                  x : 2.69467393894369,
                  y : -4.0551789428781
                  },
                  position : {
                  'x' : 26.9467393894369,
                  'y' : -40.5517894287809
                  },
  },
{
                  data: {
                  id: 'CAGL0L07502g',
                  name: 'CAGL0L07502g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0L07502g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative GPI-linked cell wall protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L07502g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L07502g'  target='_blank'> Link to GRYC</a>",
                  x : -3.11622258045231,
                  y : 4.7011641522622
                  },
                  position : {
                  'x' : -31.1622258045231,
                  'y' : 47.011641522622
                  },
  },
{
                  data: {
                  id: 'CAGL0L08294g',
                  name: 'CAGL0L08294g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L08294g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in axial cellular bud site selection and cell division site, cellular bud neck, cellular bud neck septin ring, incipient cellular bud site, integral component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L08294g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L08294g'  target='_blank'> Link to GRYC</a>",
                  x : 0.841722348944185,
                  y : 5.06180497184979
                  },
                  position : {
                  'x' : 8.41722348944185,
                  'y' : 50.6180497184979
                  },
  },
{
                  data: {
                  id: 'CAGL0L10142g',
                  name: 'CAGL0L10142g',
                  gene: 'RSB1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L10142g</h2><hr><p><b>Gene name</b> : RSB1</p><p><b>Description</b> : Putative sphingolipid flippase; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10142g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10142g'  target='_blank'> Link to GRYC</a>",
                  x : 7.43181703470248,
                  y : 7.55587691826848
                  },
                  position : {
                  'x' : 74.3181703470248,
                  'y' : 75.5587691826848
                  },
  },
{
                  data: {
                  id: 'CAGL0L10780g',
                  name: 'CAGL0L10780g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L10780g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have acetyl-CoA carboxylase activity, role in long-chain fatty acid biosynthetic process and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10780g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10780g'  target='_blank'> Link to GRYC</a>",
                  x : 7.71888614710942,
                  y : 3.59636701162913
                  },
                  position : {
                  'x' : 77.1888614710942,
                  'y' : 35.9636701162913
                  },
  },
{
                  data: {
                  id: 'CAGL0L11814g',
                  name: 'CAGL0L11814g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L11814g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycolipid floppase activity, ion transmembrane transporter activity, phosphorylative mechanism, phosphatidylcholine flippase activity, phosphatidylethanolamine flippase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L11814g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L11814g'  target='_blank'> Link to GRYC</a>",
                  x : -0.0857958188870315,
                  y : 3.64286248109143
                  },
                  position : {
                  'x' : -0.857958188870315,
                  'y' : 36.4286248109143
                  },
  },
{
                  data: {
                  id: 'CAGL0L12914g',
                  name: 'CAGL0L12914g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L12914g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YKL050C and Saccharomyces cerevisiae S288C : YKL050C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L12914g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L12914g'  target='_blank'> Link to GRYC</a>",
                  x : -0.706920417001262,
                  y : 2.99849832488184
                  },
                  position : {
                  'x' : -7.06920417001262,
                  'y' : 29.9849832488184
                  },
  },
{
                  data: {
                  id: 'CAGL0M00418g',
                  name: 'CAGL0M00418g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M00418g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have protein carrier activity, role in protein insertion into mitochondrial inner membrane and mitochondrial intermembrane space protein transporter complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M00418g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M00418g'  target='_blank'> Link to GRYC</a>",
                  x : 0.537621799522512,
                  y : 4.50723040153447
                  },
                  position : {
                  'x' : 5.37621799522512,
                  'y' : 45.0723040153447
                  },
  },
{
                  data: {
                  id: 'CAGL0M01562g',
                  name: 'CAGL0M01562g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M01562g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YDR391C, Debaryomyces hansenii CBS767 : DEHA2D01298g and Saccharomyces cerevisiae S288C : YDR391C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M01562g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M01562g'  target='_blank'> Link to GRYC</a>",
                  x : 5.14751313857658,
                  y : -0.626400925143952
                  },
                  position : {
                  'x' : 51.4751313857658,
                  'y' : -6.26400925143952
                  },
  },
{
                  data: {
                  id: 'CAGL0M02211g',
                  name: 'CAGL0M02211g',
                  gene: 'PEP4',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M02211g</h2><hr><p><b>Gene name</b> : PEP4</p><p><b>Description</b> : Putative aspartyl protease Saccharopepsin precursor; expression upregulated in biofilm vs planktonic cell culture</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M02211g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M02211g'  target='_blank'> Link to GRYC</a>",
                  x : 3.2624961576969,
                  y : -0.824528972961632
                  },
                  position : {
                  'x' : 32.624961576969,
                  'y' : -8.24528972961632
                  },
  },
{
                  data: {
                  id: 'CAGL0M04675g',
                  name: 'CAGL0M04675g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M04675g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have thiosulfate sulfurtransferase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M04675g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M04675g'  target='_blank'> Link to GRYC</a>",
                  x : 2.74401103761388,
                  y : 0.0590369826745319
                  },
                  position : {
                  'x' : 27.4401103761388,
                  'y' : 0.590369826745319
                  },
  },
{
                  data: {
                  id: 'CAGL0M05401g',
                  name: 'CAGL0M05401g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M05401g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YBR201C-A and Saccharomyces cerevisiae S288C : YBR201C-A</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M05401g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M05401g'  target='_blank'> Link to GRYC</a>",
                  x : 2.67061787289068,
                  y : -2.42919289136268
                  },
                  position : {
                  'x' : 26.7061787289068,
                  'y' : -24.2919289136268
                  },
  },
{
                  data: {
                  id: 'CAGL0M06633g',
                  name: 'CAGL0M06633g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M06633g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M06633g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M06633g'  target='_blank'> Link to GRYC</a>",
                  x : 0.943112816371517,
                  y : -0.542459697630969
                  },
                  position : {
                  'x' : 9.43112816371517,
                  'y' : -5.42459697630969
                  },
  },
{
                  data: {
                  id: 'CAGL0M07001g',
                  name: 'CAGL0M07001g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M07001g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in TORC1 signaling, protein localization to vacuole and EGO complex, fungal-type vacuole membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M07001g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M07001g'  target='_blank'> Link to GRYC</a>",
                  x : 1.58598270337222,
                  y : 3.70791836840776
                  },
                  position : {
                  'x' : 15.8598270337222,
                  'y' : 37.0791836840776
                  },
  },
{
                  data: {
                  id: 'CAGL0M09229g',
                  name: 'CAGL0M09229g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M09229g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M09229g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M09229g'  target='_blank'> Link to GRYC</a>",
                  x : 0.825729358228237,
                  y : 0.565259525308092
                  },
                  position : {
                  'x' : 8.25729358228237,
                  'y' : 5.65259525308092
                  },
  },
{
                  data: {
                  id: 'CAGL0M09713g',
                  name: 'CAGL0M09713g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M09713g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein involved in DNA damage response; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M09713g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M09713g'  target='_blank'> Link to GRYC</a>",
                  x : -1.9036990171309,
                  y : 3.69302533726233
                  },
                  position : {
                  'x' : -19.036990171309,
                  'y' : 36.9302533726233
                  },
  },
{
                  data: {
                  id: 'CAGL0M11000g',
                  name: 'CAGL0M11000g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M11000g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytosol localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M11000g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M11000g'  target='_blank'> Link to GRYC</a>",
                  x : -0.420395337089613,
                  y : -2.98737975897259
                  },
                  position : {
                  'x' : -4.20395337089613,
                  'y' : -29.8737975897259
                  },
  },
{
                  data: {
                  id: 'CAGL0M12947g',
                  name: 'CAGL0M12947g',
                  gene: 'PUP1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M12947g</h2><hr><p><b>Gene name</b> : PUP1</p><p><b>Description</b> : Mitochondria-localized protein; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M12947g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M12947g'  target='_blank'> Link to GRYC</a>",
                  x : -0.631857888349873,
                  y : 1.3685792376316
                  },
                  position : {
                  'x' : -6.31857888349873,
                  'y' : 13.685792376316
                  },
  },
{
                  data: {
                  id: 'CAGL0M14069g',
                  name: 'CAGL0M14069g',
                  gene: 'PWP6',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M14069g</h2><hr><p><b>Gene name</b> : PWP6</p><p><b>Description</b> : Adhesin-like protein with similarity to S. cerevisiae flocculins, cell wall proteins that mediate adhesion; predicted GPI anchor; belongs to adhesin cluster II</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M14069g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M14069g'  target='_blank'> Link to GRYC</a>",
                  x : 5.80317715908269,
                  y : -5.00430878175958
                  },
                  position : {
                  'x' : 58.0317715908269,
                  'y' : -50.0430878175958
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
                  content: "<h2>CAGL0B02904g</h2><hr><p><b>Gene name</b> : BMT6</p><p><b>Description</b> : Beta mannosyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02904g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02904g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0B02970g</h2><hr><p><b>Gene name</b> : BMT5</p><p><b>Description</b> : Beta mannosyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02970g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02970g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0C00110g</h2><hr><p><b>Gene name</b> : EPA6</p><p><b>Description</b> : Sub-telomerically encoded adhesin with a role in cell adhesion; binds to ligands containing a terminal galactose residue; expressed during murine urinary tract infection, biofilm-upregulated; belongs to adhesin cluster I</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C00110g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C00110g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0C00275g</h2><hr><p><b>Gene name</b> : HSP31</p><p><b>Description</b> : Putative cysteine protease; protein differentially expressed in azole resistant strain; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C00275g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C00275g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0C03608g</h2><hr><p><b>Gene name</b> : TUP1</p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03608g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03608g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0C03872g</h2><hr><p><b>Gene name</b> : TIR3</p><p><b>Description</b> : Putative GPI-linked cell wall protein involved in sterol uptake</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03872g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03872g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0D00264g</h2><hr><p><b>Gene name</b> : NUD1</p><p><b>Description</b> : Putative nuclear phosphatase regulatory subunit; gene is downregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00264g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00264g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0D01265g</h2><hr><p><b>Gene name</b> : MT-I</p><p><b>Description</b> : Copper-binding metallothionein, involved in sequestration of metal ions; inducible by copper and silver; gene used for molecular typing of C. glabrata strain isolates</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D01265g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D01265g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0D05434g</h2><hr><p><b>Gene name</b> : ROX1</p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D05434g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D05434g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0E01881g</h2><hr><p><b>Gene name</b> : YPS11</p><p><b>Description</b> : Putative aspartic protease; member of a YPS gene cluster that is required for virulence in mice; induced in response to low pH and high temperature</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01881g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01881g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0F01463g</h2><hr><p><b>Gene name</b> : TIR1</p><p><b>Description</b> : Putative GPI-linked cell wall mannoprotein of the Srp1p/Tip1p family</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01463g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01463g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0F01485g</h2><hr><p><b>Gene name</b> : TIR2</p><p><b>Description</b> : Putative GPI-linked cell wall mannoprotein of the Srp1p/Tip1p family</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01485g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01485g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0F02145g</h2><hr><p><b>Gene name</b> : PHM1</p><p><b>Description</b> : Ortholog(s) have calmodulin binding activity and role in lysosomal microautophagy, polyphosphate metabolic process, protein localization, vacuolar transport, vacuole fusion, non-autophagic</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F02145g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F02145g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0G03289g</h2><hr><p><b>Gene name</b> : SSA3</p><p><b>Description</b> : Heat shock protein of the HSP70 family</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G03289g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G03289g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0G06952g</h2><hr><p><b>Gene name</b> : PHM3</p><p><b>Description</b> : Ortholog(s) have calmodulin binding, inositol hexakisphosphate binding, polyphosphate kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06952g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06952g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0G10175g</h2><hr><p><b>Gene name</b> : AWP6</p><p><b>Description</b> : Adhesin-like protein; identified in cell wall extracts by mass spectrometry; belongs to adhesin cluster IV; predicted GPI anchor</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G10175g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G10175g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0H08624g</h2><hr><p><b>Gene name</b> : MCM16</p><p><b>Description</b> : Ortholog(s) have role in chromosome segregation, establishment of mitotic sister chromatid cohesion and condensed nuclear chromosome kinetochore localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H08624g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H08624g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0I06182g</h2><hr><p><b>Gene name</b> : PIR2</p><p><b>Description</b> : Pir protein family member, putative cell wall component</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I06182g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I06182g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0I10147g</h2><hr><p><b>Gene name</b> : PWP1</p><p><b>Description</b> : Protein with 32 tandem repeats; putative adhesin-like protein; belongs to adhesin cluster II</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10147g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10147g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0J04202g</h2><hr><p><b>Gene name</b> : HSP12</p><p><b>Description</b> : Heat shock protein; gene is upregulated in azole-resistant strain; expression upregulated in biofilm vs planktonic cell culture</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04202g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04202g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0K00110g</h2><hr><p><b>Gene name</b> : AWP2</p><p><b>Description</b> : Putative adhesin; identified in cell wall extracts by mass spectrometry; belongs to adhesin cluster V; predicted GPI-anchor</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K00110g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K00110g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0K07546g</h2><hr><p><b>Gene name</b> : PMU2</p><p><b>Description</b> : Phosphate starvation inducible acid phosphatase; contains a phosphomutase-like domain; functionally complements a S. cerevisiae pho5 mutant; transcript abundance during phosphate starvation regulated by Pho4p</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07546g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07546g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0K11231g</h2><hr><p><b>Gene name</b> : MNN10</p><p><b>Description</b> : Ortholog(s) have alpha-1,6-mannosyltransferase activity, role in cell wall mannoprotein biosynthetic process, division septum assembly, protein N-linked glycosylation and alpha-1,6-mannosyltransferase complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K11231g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K11231g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0K12980g</h2><hr><p><b>Gene name</b> : BMT7</p><p><b>Description</b> : Beta mannosyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K12980g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K12980g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0L10142g</h2><hr><p><b>Gene name</b> : RSB1</p><p><b>Description</b> : Putative sphingolipid flippase; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10142g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10142g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0M02211g</h2><hr><p><b>Gene name</b> : PEP4</p><p><b>Description</b> : Putative aspartyl protease Saccharopepsin precursor; expression upregulated in biofilm vs planktonic cell culture</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M02211g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M02211g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0M12947g</h2><hr><p><b>Gene name</b> : PUP1</p><p><b>Description</b> : Mitochondria-localized protein; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M12947g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M12947g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0M14069g</h2><hr><p><b>Gene name</b> : PWP6</p><p><b>Description</b> : Adhesin-like protein with similarity to S. cerevisiae flocculins, cell wall proteins that mediate adhesion; predicted GPI anchor; belongs to adhesin cluster II</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M14069g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M14069g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
