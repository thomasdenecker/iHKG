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
                  x : 8.96463255599624,
                  y : 7.30608901793527
                  },
                  position : {
                  'x' : 89.6463255599623,
                  'y' : 73.0608901793527
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
                  x : 3.95927522059939,
                  y : -1.41004398763948
                  },
                  position : {
                  'x' : 39.5927522059939,
                  'y' : -14.1004398763948
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
                  x : 1.13376806382474,
                  y : 1.66549458032763
                  },
                  position : {
                  'x' : 11.3376806382474,
                  'y' : 16.6549458032763
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
                  x : 10.5258340449298,
                  y : 11.9824566920829
                  },
                  position : {
                  'x' : 105.258340449298,
                  'y' : 119.824566920829
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
                  x : 0.74009470333161,
                  y : 2.58762733384025
                  },
                  position : {
                  'x' : 7.4009470333161,
                  'y' : 25.8762733384025
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
                  x : 9.21445762059028,
                  y : 5.88869145665959
                  },
                  position : {
                  'x' : 92.1445762059028,
                  'y' : 58.8869145665959
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
                  x : 2.55148882040068,
                  y : 1.3167947930416
                  },
                  position : {
                  'x' : 25.5148882040068,
                  'y' : 13.167947930416
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
                  x : 5.23922317651314,
                  y : 7.8735811008666
                  },
                  position : {
                  'x' : 52.3922317651314,
                  'y' : 78.735811008666
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
                  content: "<h2>CAGL0B02904g</h2><hr><p><b>Gene name</b> : BMT6</p><p><b>Description</b> : Beta mannosyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02904g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02904g'  target='_blank'> Link to GRYC</a>",
                  x : 2.1871707364414,
                  y : 4.95145572990031
                  },
                  position : {
                  'x' : 21.871707364414,
                  'y' : 49.5145572990031
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
                  content: "<h2>CAGL0B02970g</h2><hr><p><b>Gene name</b> : BMT5</p><p><b>Description</b> : Beta mannosyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02970g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02970g'  target='_blank'> Link to GRYC</a>",
                  x : 0.0881859078184951,
                  y : 8.84607946202658
                  },
                  position : {
                  'x' : 0.881859078184951,
                  'y' : 88.4607946202658
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
                  content: "<h2>CAGL0C00110g</h2><hr><p><b>Gene name</b> : EPA6</p><p><b>Description</b> : Sub-telomerically encoded adhesin with a role in cell adhesion; binds to ligands containing a terminal galactose residue; expressed during murine urinary tract infection, biofilm-upregulated; belongs to adhesin cluster I</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C00110g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C00110g'  target='_blank'> Link to GRYC</a>",
                  x : 1.80189887633873,
                  y : 8.92970433332104
                  },
                  position : {
                  'x' : 18.0189887633873,
                  'y' : 89.2970433332104
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
                  content: "<h2>CAGL0C00275g</h2><hr><p><b>Gene name</b> : HSP31</p><p><b>Description</b> : Putative cysteine protease; protein differentially expressed in azole resistant strain; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C00275g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C00275g'  target='_blank'> Link to GRYC</a>",
                  x : -2.93618285186251,
                  y : 3.30795851132593
                  },
                  position : {
                  'x' : -29.3618285186251,
                  'y' : 33.0795851132593
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
                  x : 0.543066606378128,
                  y : 8.05459053309847
                  },
                  position : {
                  'x' : 5.43066606378128,
                  'y' : 80.5459053309847
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
                  x : 0.51507621827131,
                  y : 8.37069924832658
                  },
                  position : {
                  'x' : 5.1507621827131,
                  'y' : 83.7069924832658
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
                  x : 11.0857530082542,
                  y : 2.86171045236486
                  },
                  position : {
                  'x' : 110.857530082542,
                  'y' : 28.6171045236486
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
                  x : 2.76938063380361,
                  y : 2.52839215930997
                  },
                  position : {
                  'x' : 27.6938063380361,
                  'y' : 25.2839215930997
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
                  x : 11.6533564989338,
                  y : 1.97348553351896
                  },
                  position : {
                  'x' : 116.533564989338,
                  'y' : 19.7348553351896
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
                  content: "<h2>CAGL0C03608g</h2><hr><p><b>Gene name</b> : TUP1</p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03608g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03608g'  target='_blank'> Link to GRYC</a>",
                  x : 1.58789956243013,
                  y : 8.55726119384958
                  },
                  position : {
                  'x' : 15.8789956243013,
                  'y' : 85.5726119384958
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
                  content: "<h2>CAGL0C03872g</h2><hr><p><b>Gene name</b> : TIR3</p><p><b>Description</b> : Putative GPI-linked cell wall protein involved in sterol uptake</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03872g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03872g'  target='_blank'> Link to GRYC</a>",
                  x : 3.14818109655166,
                  y : -2.91705103809329
                  },
                  position : {
                  'x' : 31.4818109655166,
                  'y' : -29.1705103809329
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
                  content: "<h2>CAGL0D00264g</h2><hr><p><b>Gene name</b> : NUD1</p><p><b>Description</b> : Putative nuclear phosphatase regulatory subunit; gene is downregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00264g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00264g'  target='_blank'> Link to GRYC</a>",
                  x : 5.52262126313055,
                  y : 1.57126280828462
                  },
                  position : {
                  'x' : 55.2262126313055,
                  'y' : 15.7126280828462
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
                  content: "<h2>CAGL0D01265g</h2><hr><p><b>Gene name</b> : MT-I</p><p><b>Description</b> : Copper-binding metallothionein, involved in sequestration of metal ions; inducible by copper and silver; gene used for molecular typing of C. glabrata strain isolates</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D01265g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D01265g'  target='_blank'> Link to GRYC</a>",
                  x : 13.2552309994578,
                  y : 9.50007715882963
                  },
                  position : {
                  'x' : 132.552309994578,
                  'y' : 95.0007715882963
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
                  x : 2.74362643340547,
                  y : 2.07853298183075
                  },
                  position : {
                  'x' : 27.4362643340547,
                  'y' : 20.7853298183075
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
                  content: "<h2>CAGL0D05434g</h2><hr><p><b>Gene name</b> : ROX1</p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D05434g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D05434g'  target='_blank'> Link to GRYC</a>",
                  x : 12.3111185400273,
                  y : 0.466327583545196
                  },
                  position : {
                  'x' : 123.111185400273,
                  'y' : 4.66327583545197
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
                  x : 3.2745901524009,
                  y : 2.87002370939797
                  },
                  position : {
                  'x' : 32.745901524009,
                  'y' : 28.7002370939797
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
                  content: "<h2>CAGL0E01881g</h2><hr><p><b>Gene name</b> : YPS11</p><p><b>Description</b> : Putative aspartic protease; member of a YPS gene cluster that is required for virulence in mice; induced in response to low pH and high temperature</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01881g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01881g'  target='_blank'> Link to GRYC</a>",
                  x : 2.3633169785842,
                  y : 5.79669579792506
                  },
                  position : {
                  'x' : 23.633169785842,
                  'y' : 57.9669579792506
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
                  x : 4.14259570629241,
                  y : 15.1734791905303
                  },
                  position : {
                  'x' : 41.4259570629241,
                  'y' : 151.734791905303
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
                  x : 3.3124137008645,
                  y : 0.535702896127308
                  },
                  position : {
                  'x' : 33.1241370086451,
                  'y' : 5.35702896127308
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
                  x : 1.3525602153801,
                  y : 7.63732690983295
                  },
                  position : {
                  'x' : 13.525602153801,
                  'y' : 76.3732690983295
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
                  x : -0.475662138996834,
                  y : 1.35906156882334
                  },
                  position : {
                  'x' : -4.75662138996834,
                  'y' : 13.5906156882334
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
                  x : 5.03580555993725,
                  y : 6.28921526091507
                  },
                  position : {
                  'x' : 50.3580555993725,
                  'y' : 62.8921526091507
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
                  x : 3.73403849911519,
                  y : 1.24776485061948
                  },
                  position : {
                  'x' : 37.3403849911519,
                  'y' : 12.4776485061948
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
                  x : 1.35810750895466,
                  y : 3.59388877519327
                  },
                  position : {
                  'x' : 13.5810750895466,
                  'y' : 35.9388877519327
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
                  content: "<h2>CAGL0F01463g</h2><hr><p><b>Gene name</b> : TIR1</p><p><b>Description</b> : Putative GPI-linked cell wall mannoprotein of the Srp1p/Tip1p family</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01463g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01463g'  target='_blank'> Link to GRYC</a>",
                  x : 5.13184489711332,
                  y : 1.95004221480403
                  },
                  position : {
                  'x' : 51.3184489711332,
                  'y' : 19.5004221480403
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
                  content: "<h2>CAGL0F01485g</h2><hr><p><b>Gene name</b> : TIR2</p><p><b>Description</b> : Putative GPI-linked cell wall mannoprotein of the Srp1p/Tip1p family</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01485g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01485g'  target='_blank'> Link to GRYC</a>",
                  x : 2.42689572085225,
                  y : 2.38361143369723
                  },
                  position : {
                  'x' : 24.2689572085225,
                  'y' : 23.8361143369723
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
                  content: "<h2>CAGL0F02145g</h2><hr><p><b>Gene name</b> : PHM1</p><p><b>Description</b> : Ortholog(s) have calmodulin binding activity and role in lysosomal microautophagy, polyphosphate metabolic process, protein localization, vacuolar transport, vacuole fusion, non-autophagic</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F02145g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F02145g'  target='_blank'> Link to GRYC</a>",
                  x : 1.36286787975854,
                  y : 6.76584181042833
                  },
                  position : {
                  'x' : 13.6286787975854,
                  'y' : 67.6584181042833
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
                  x : 2.05558784818112,
                  y : 5.94884077104859
                  },
                  position : {
                  'x' : 20.5558784818112,
                  'y' : 59.4884077104859
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
                  x : -1.15289140237831,
                  y : -0.91226141591655
                  },
                  position : {
                  'x' : -11.5289140237831,
                  'y' : -9.1226141591655
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
                  x : 1.76977723163726,
                  y : 3.53752073683133
                  },
                  position : {
                  'x' : 17.6977723163726,
                  'y' : 35.3752073683132
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
                  x : 3.7695922140987,
                  y : 8.03347347884615
                  },
                  position : {
                  'x' : 37.695922140987,
                  'y' : 80.3347347884615
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
                  x : 4.75699592144194,
                  y : 10.4192620173786
                  },
                  position : {
                  'x' : 47.5699592144194,
                  'y' : 104.192620173786
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
                  x : -1.85811335599105,
                  y : 1.30411059596902
                  },
                  position : {
                  'x' : -18.5811335599105,
                  'y' : 13.0411059596902
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
                  x : 1.5996514382491,
                  y : 3.89231202182477
                  },
                  position : {
                  'x' : 15.996514382491,
                  'y' : 38.9231202182477
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
                  x : -0.141257369909171,
                  y : 2.36938986402159
                  },
                  position : {
                  'x' : -1.41257369909171,
                  'y' : 23.6938986402159
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
                  x : -0.16520453878356,
                  y : 2.83583045868274
                  },
                  position : {
                  'x' : -1.6520453878356,
                  'y' : 28.3583045868274
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
                  content: "<h2>CAGL0G03289g</h2><hr><p><b>Gene name</b> : SSA3</p><p><b>Description</b> : Heat shock protein of the HSP70 family</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G03289g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G03289g'  target='_blank'> Link to GRYC</a>",
                  x : 1.89290953664483,
                  y : -3.06421188171381
                  },
                  position : {
                  'x' : 18.9290953664483,
                  'y' : -30.6421188171381
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
                  x : 3.9948921905087,
                  y : 1.08178556510716
                  },
                  position : {
                  'x' : 39.948921905087,
                  'y' : 10.8178556510716
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
                  x : 8.30226326071927,
                  y : 6.77967022612489
                  },
                  position : {
                  'x' : 83.0226326071927,
                  'y' : 67.7967022612489
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
                  x : 1.58844237502284,
                  y : 4.33845177984095
                  },
                  position : {
                  'x' : 15.8844237502284,
                  'y' : 43.3845177984095
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
                  x : 2.55574769515271,
                  y : 3.62381448753053
                  },
                  position : {
                  'x' : 25.5574769515271,
                  'y' : 36.2381448753053
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
                  x : -0.0296467196931179,
                  y : 3.93804800616093
                  },
                  position : {
                  'x' : -0.296467196931179,
                  'y' : 39.3804800616093
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
                  x : 13.9213710569294,
                  y : 8.03414020568902
                  },
                  position : {
                  'x' : 139.213710569294,
                  'y' : 80.3414020568902
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
                  x : 12.23198271095,
                  y : 10.4119668748103
                  },
                  position : {
                  'x' : 122.3198271095,
                  'y' : 104.119668748103
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
                  content: "<h2>CAGL0G06952g</h2><hr><p><b>Gene name</b> : PHM3</p><p><b>Description</b> : Ortholog(s) have calmodulin binding, inositol hexakisphosphate binding, polyphosphate kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06952g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06952g'  target='_blank'> Link to GRYC</a>",
                  x : 1.61757817402774,
                  y : 6.50273662903043
                  },
                  position : {
                  'x' : 16.1757817402774,
                  'y' : 65.0273662903043
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
                  x : 1.35545503954098,
                  y : 8.81824146428949
                  },
                  position : {
                  'x' : 13.5545503954098,
                  'y' : 88.1824146428949
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
                  content: "<h2>CAGL0G10175g</h2><hr><p><b>Gene name</b> : AWP6</p><p><b>Description</b> : Adhesin-like protein; identified in cell wall extracts by mass spectrometry; belongs to adhesin cluster IV; predicted GPI anchor</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G10175g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G10175g'  target='_blank'> Link to GRYC</a>",
                  x : 5.96468620744037,
                  y : -3.30473151135426
                  },
                  position : {
                  'x' : 59.6468620744037,
                  'y' : -33.0473151135426
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
                  x : 11.9322705180191,
                  y : 1.51007685771892
                  },
                  position : {
                  'x' : 119.322705180191,
                  'y' : 15.1007685771892
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
                  x : 12.3460488707253,
                  y : 1.95526534655823
                  },
                  position : {
                  'x' : 123.460488707253,
                  'y' : 19.5526534655823
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
                  x : 4.11613337167384,
                  y : -0.423754173640322
                  },
                  position : {
                  'x' : 41.1613337167384,
                  'y' : -4.23754173640322
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
                  x : 0.00796602269686694,
                  y : 6.969342666549
                  },
                  position : {
                  'x' : 0.0796602269686694,
                  'y' : 69.69342666549
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
                  x : 2.29978459905127,
                  y : 3.8835200512479
                  },
                  position : {
                  'x' : 22.9978459905127,
                  'y' : 38.835200512479
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
                  x : 8.5930907119918,
                  y : 13.9456906249982
                  },
                  position : {
                  'x' : 85.9309071199179,
                  'y' : 139.456906249982
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
                  content: "<h2>CAGL0H08624g</h2><hr><p><b>Gene name</b> : MCM16</p><p><b>Description</b> : Ortholog(s) have role in chromosome segregation, establishment of mitotic sister chromatid cohesion and condensed nuclear chromosome kinetochore localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H08624g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H08624g'  target='_blank'> Link to GRYC</a>",
                  x : 3.31510131161006,
                  y : 7.19839654874001
                  },
                  position : {
                  'x' : 33.1510131161006,
                  'y' : 71.9839654874002
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
                  x : 0.704613683283484,
                  y : -0.0150316545212554
                  },
                  position : {
                  'x' : 7.04613683283483,
                  'y' : -0.150316545212554
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
                  x : 14.6961413201619,
                  y : 5.13164341903789
                  },
                  position : {
                  'x' : 146.961413201619,
                  'y' : 51.3164341903789
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
                  x : 14.5530423697538,
                  y : 6.06176100172091
                  },
                  position : {
                  'x' : 145.530423697538,
                  'y' : 60.6176100172091
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
                  x : 7.37047757505135,
                  y : -4.13653485151749
                  },
                  position : {
                  'x' : 73.7047757505135,
                  'y' : -41.3653485151749
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
                  x : 1.28296512447406,
                  y : 3.07739006046892
                  },
                  position : {
                  'x' : 12.8296512447406,
                  'y' : 30.7739006046892
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
                  x : 3.48940525266527,
                  y : 2.33626727712977
                  },
                  position : {
                  'x' : 34.8940525266527,
                  'y' : 23.3626727712977
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
                  x : 2.55368522036823,
                  y : 7.29040183952129
                  },
                  position : {
                  'x' : 25.5368522036823,
                  'y' : 72.9040183952129
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
                  x : 0.685084390908836,
                  y : 1.60457352058744
                  },
                  position : {
                  'x' : 6.85084390908836,
                  'y' : 16.0457352058744
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
                  x : 2.39230962542764,
                  y : -0.391878552201436
                  },
                  position : {
                  'x' : 23.9230962542764,
                  'y' : -3.91878552201436
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
                  x : 1.55236720655183,
                  y : 2.79904253846791
                  },
                  position : {
                  'x' : 15.5236720655183,
                  'y' : 27.9904253846791
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
                  content: "<h2>CAGL0I06182g</h2><hr><p><b>Gene name</b> : PIR2</p><p><b>Description</b> : Pir protein family member, putative cell wall component</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I06182g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I06182g'  target='_blank'> Link to GRYC</a>",
                  x : 4.40746818758866,
                  y : 6.66654155248053
                  },
                  position : {
                  'x' : 44.0746818758866,
                  'y' : 66.6654155248054
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
                  x : 10.7227616750096,
                  y : 3.95863124864466
                  },
                  position : {
                  'x' : 107.227616750096,
                  'y' : 39.5863124864466
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
                  x : 3.17054499182736,
                  y : -0.63718806040589
                  },
                  position : {
                  'x' : 31.7054499182736,
                  'y' : -6.3718806040589
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
                  x : 5.11858712647552,
                  y : 15.081099182297
                  },
                  position : {
                  'x' : 51.1858712647552,
                  'y' : 150.81099182297
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
                  content: "<h2>CAGL0I10147g</h2><hr><p><b>Gene name</b> : PWP1</p><p><b>Description</b> : Protein with 32 tandem repeats; putative adhesin-like protein; belongs to adhesin cluster II</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10147g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10147g'  target='_blank'> Link to GRYC</a>",
                  x : 3.26487895413319,
                  y : 13.0859534226272
                  },
                  position : {
                  'x' : 32.6487895413319,
                  'y' : 130.859534226272
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
                  x : 4.3533153526255,
                  y : 0.187003686001831
                  },
                  position : {
                  'x' : 43.533153526255,
                  'y' : 1.87003686001831
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
                  x : 9.48967149079934,
                  y : 2.75832758258757
                  },
                  position : {
                  'x' : 94.8967149079934,
                  'y' : 27.5832758258757
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
                  content: "<h2>CAGL0J04202g</h2><hr><p><b>Gene name</b> : HSP12</p><p><b>Description</b> : Heat shock protein; gene is upregulated in azole-resistant strain; expression upregulated in biofilm vs planktonic cell culture</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04202g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04202g'  target='_blank'> Link to GRYC</a>",
                  x : 2.60278468955713,
                  y : -4.73966730993265
                  },
                  position : {
                  'x' : 26.0278468955713,
                  'y' : -47.3966730993265
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
                  x : 1.64368096084235,
                  y : 8.17057734938445
                  },
                  position : {
                  'x' : 16.4368096084235,
                  'y' : 81.7057734938445
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
                  x : 7.5039511753433,
                  y : 11.9102197240226
                  },
                  position : {
                  'x' : 75.039511753433,
                  'y' : 119.102197240226
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
                  x : 3.9741712684522,
                  y : 9.54049670761043
                  },
                  position : {
                  'x' : 39.741712684522,
                  'y' : 95.4049670761043
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
                  x : 0.794656706826813,
                  y : 9.14693565898843
                  },
                  position : {
                  'x' : 7.94656706826813,
                  'y' : 91.4693565898843
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
                  x : 1.67192553855697,
                  y : 9.4974932772955
                  },
                  position : {
                  'x' : 16.7192553855697,
                  'y' : 94.974932772955
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
                  x : 2.2352194389494,
                  y : 2.03125570290814
                  },
                  position : {
                  'x' : 22.352194389494,
                  'y' : 20.3125570290814
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
                  x : 3.77933224503046,
                  y : 1.92917043347533
                  },
                  position : {
                  'x' : 37.7933224503046,
                  'y' : 19.2917043347533
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
                  x : 10.395110265995,
                  y : 6.57887202671407
                  },
                  position : {
                  'x' : 103.95110265995,
                  'y' : 65.7887202671407
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
                  content: "<h2>CAGL0K00110g</h2><hr><p><b>Gene name</b> : AWP2</p><p><b>Description</b> : Putative adhesin; identified in cell wall extracts by mass spectrometry; belongs to adhesin cluster V; predicted GPI-anchor</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K00110g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K00110g'  target='_blank'> Link to GRYC</a>",
                  x : 1.59819826181265,
                  y : 4.82194111188346
                  },
                  position : {
                  'x' : 15.9819826181265,
                  'y' : 48.2194111188346
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
                  x : 11.3968706628495,
                  y : 1.59804444078816
                  },
                  position : {
                  'x' : 113.968706628495,
                  'y' : 15.9804444078816
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
                  x : 11.777242828527,
                  y : 11.6740477642703
                  },
                  position : {
                  'x' : 117.77242828527,
                  'y' : 116.740477642703
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
                  x : 0.882891035198131,
                  y : 10.3762425611152
                  },
                  position : {
                  'x' : 8.82891035198131,
                  'y' : 103.762425611152
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
                  x : 10.469265594928,
                  y : 2.88642592455546
                  },
                  position : {
                  'x' : 104.69265594928,
                  'y' : 28.8642592455546
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
                  x : -2.37280459250335,
                  y : 1.31566876669788
                  },
                  position : {
                  'x' : -23.7280459250335,
                  'y' : 13.1566876669788
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
                  x : 3.17086613240944,
                  y : 5.68820091349876
                  },
                  position : {
                  'x' : 31.7086613240944,
                  'y' : 56.8820091349876
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
                  x : 9.9212532276654,
                  y : 13.2157644205271
                  },
                  position : {
                  'x' : 99.212532276654,
                  'y' : 132.157644205271
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
                  x : 11.7975767364331,
                  y : 2.60529969439362
                  },
                  position : {
                  'x' : 117.975767364331,
                  'y' : 26.0529969439362
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
                  x : 6.12434429773062,
                  y : 8.28214939345868
                  },
                  position : {
                  'x' : 61.2434429773062,
                  'y' : 82.8214939345868
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
                  x : 10.8694005749174,
                  y : 7.58825854354037
                  },
                  position : {
                  'x' : 108.694005749174,
                  'y' : 75.8825854354037
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
                  content: "<h2>CAGL0K07546g</h2><hr><p><b>Gene name</b> : PMU2</p><p><b>Description</b> : Phosphate starvation inducible acid phosphatase; contains a phosphomutase-like domain; functionally complements a S. cerevisiae pho5 mutant; transcript abundance during phosphate starvation regulated by Pho4p</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07546g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07546g'  target='_blank'> Link to GRYC</a>",
                  x : 7.04728779258159,
                  y : 14.5848056287877
                  },
                  position : {
                  'x' : 70.4728779258159,
                  'y' : 145.848056287877
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
                  x : -0.0177747301608273,
                  y : -3.83062650851085
                  },
                  position : {
                  'x' : -0.177747301608273,
                  'y' : -38.3062650851084
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
                  x : 6.34663631844717,
                  y : 10.4394215980837
                  },
                  position : {
                  'x' : 63.4663631844717,
                  'y' : 104.394215980837
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
                  x : 10.7615486341335,
                  y : 5.84718027359468
                  },
                  position : {
                  'x' : 107.615486341335,
                  'y' : 58.4718027359468
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
                  x : 6.91224266283863,
                  y : 1.87467686674644
                  },
                  position : {
                  'x' : 69.1224266283863,
                  'y' : 18.7467686674644
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
                  content: "<h2>CAGL0K11231g</h2><hr><p><b>Gene name</b> : MNN10</p><p><b>Description</b> : Ortholog(s) have alpha-1,6-mannosyltransferase activity, role in cell wall mannoprotein biosynthetic process, division septum assembly, protein N-linked glycosylation and alpha-1,6-mannosyltransferase complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K11231g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K11231g'  target='_blank'> Link to GRYC</a>",
                  x : 11.4284805579017,
                  y : 3.28379698687929
                  },
                  position : {
                  'x' : 114.284805579017,
                  'y' : 32.8379698687929
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
                  content: "<h2>CAGL0K12980g</h2><hr><p><b>Gene name</b> : BMT7</p><p><b>Description</b> : Beta mannosyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K12980g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K12980g'  target='_blank'> Link to GRYC</a>",
                  x : -2.61621225085169,
                  y : 8.1216328258297
                  },
                  position : {
                  'x' : -26.1621225085169,
                  'y' : 81.216328258297
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
                  x : 2.06674427083338,
                  y : 3.07588358014091
                  },
                  position : {
                  'x' : 20.6674427083338,
                  'y' : 30.7588358014091
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
                  x : 2.90037976715869,
                  y : 3.81508992382624
                  },
                  position : {
                  'x' : 29.0037976715869,
                  'y' : 38.1508992382624
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
                  x : 11.2809327725427,
                  y : 4.49967936468642
                  },
                  position : {
                  'x' : 112.809327725427,
                  'y' : 44.9967936468642
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
                  x : 10.2009553443494,
                  y : 1.78711246872586
                  },
                  position : {
                  'x' : 102.009553443494,
                  'y' : 17.8711246872586
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
                  x : 4.27284020478334,
                  y : 8.00337318605052
                  },
                  position : {
                  'x' : 42.7284020478334,
                  'y' : 80.0337318605052
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
                  x : 2.37584133057175,
                  y : 4.65278373943931
                  },
                  position : {
                  'x' : 23.7584133057175,
                  'y' : 46.5278373943931
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
                  x : -1.03406274645812,
                  y : 0.897606285522542
                  },
                  position : {
                  'x' : -10.3406274645812,
                  'y' : 8.97606285522541
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
                  x : 3.33232646374348,
                  y : 10.9612007038008
                  },
                  position : {
                  'x' : 33.3232646374348,
                  'y' : 109.612007038008
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
                  x : 1.89315514375455,
                  y : 8.58584632845629
                  },
                  position : {
                  'x' : 18.9315514375455,
                  'y' : 85.8584632845629
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
                  content: "<h2>CAGL0L10142g</h2><hr><p><b>Gene name</b> : RSB1</p><p><b>Description</b> : Putative sphingolipid flippase; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10142g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10142g'  target='_blank'> Link to GRYC</a>",
                  x : 10.1158727623536,
                  y : 4.87269413698311
                  },
                  position : {
                  'x' : 101.158727623536,
                  'y' : 48.7269413698311
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
                  x : 8.13652523578537,
                  y : 1.79498398320996
                  },
                  position : {
                  'x' : 81.3652523578536,
                  'y' : 17.9498398320996
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
                  x : 2.01686869849687,
                  y : 7.97275527318643
                  },
                  position : {
                  'x' : 20.1686869849687,
                  'y' : 79.7275527318643
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
                  x : 2.80023821303423,
                  y : 7.89501035479402
                  },
                  position : {
                  'x' : 28.0023821303423,
                  'y' : 78.9501035479402
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
                  x : 0.955532976160979,
                  y : 8.33226298535731
                  },
                  position : {
                  'x' : 9.55532976160979,
                  'y' : 83.3226298535731
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
                  x : 3.3176454773524,
                  y : 1.10453987500981
                  },
                  position : {
                  'x' : 33.176454773524,
                  'y' : 11.0453987500981
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
                  content: "<h2>CAGL0M02211g</h2><hr><p><b>Gene name</b> : PEP4</p><p><b>Description</b> : Putative aspartyl protease Saccharopepsin precursor; expression upregulated in biofilm vs planktonic cell culture</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M02211g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M02211g'  target='_blank'> Link to GRYC</a>",
                  x : 1.53777342557333,
                  y : 2.37060827640803
                  },
                  position : {
                  'x' : 15.3777342557333,
                  'y' : 23.7060827640803
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
                  x : 2.67943648824543,
                  y : 3.28134297888705
                  },
                  position : {
                  'x' : 26.7943648824543,
                  'y' : 32.8134297888705
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
                  x : 0.301711024021616,
                  y : 1.80574648831372
                  },
                  position : {
                  'x' : 3.01711024021616,
                  'y' : 18.0574648831372
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
                  x : 1.21007640817351,
                  y : 4.44172689147994
                  },
                  position : {
                  'x' : 12.1007640817351,
                  'y' : 44.4172689147994
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
                  x : 0.829420617110064,
                  y : 7.15644265736113
                  },
                  position : {
                  'x' : 8.29420617110064,
                  'y' : 71.5644265736113
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
                  x : 2.92238541639029,
                  y : 5.02338545150464
                  },
                  position : {
                  'x' : 29.2238541639029,
                  'y' : 50.2338545150464
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
                  x : 3.12824605416577,
                  y : 9.32573901229161
                  },
                  position : {
                  'x' : 31.2824605416577,
                  'y' : 93.2573901229161
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
                  x : -1.88179862381633,
                  y : 4.11621070482175
                  },
                  position : {
                  'x' : -18.8179862381633,
                  'y' : 41.1621070482175
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
                  content: "<h2>CAGL0M12947g</h2><hr><p><b>Gene name</b> : PUP1</p><p><b>Description</b> : Mitochondria-localized protein; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M12947g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M12947g'  target='_blank'> Link to GRYC</a>",
                  x : 3.01405988615814,
                  y : 6.57817298225381
                  },
                  position : {
                  'x' : 30.1405988615814,
                  'y' : 65.7817298225381
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
                  content: "<h2>CAGL0M14069g</h2><hr><p><b>Gene name</b> : PWP6</p><p><b>Description</b> : Adhesin-like protein with similarity to S. cerevisiae flocculins, cell wall proteins that mediate adhesion; predicted GPI anchor; belongs to adhesin cluster II</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M14069g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M14069g'  target='_blank'> Link to GRYC</a>",
                  x : 0.538894783950994,
                  y : -2.08813106357347
                  },
                  position : {
                  'x' : 5.38894783950994,
                  'y' : -20.8813106357347
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
