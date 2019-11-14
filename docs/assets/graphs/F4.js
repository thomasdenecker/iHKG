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
                  id: 'CAGL0A00737g',
                  name: 'CAGL0A00737g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A00737g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted transmembrane transporter activity, role in transmembrane transport and integral component of membrane, membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A00737g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A00737g'  target='_blank'> Link to GRYC</a>",
                  x : 5.10750544313395,
                  y : 2.53803576749522
                  },
                  position : {
                  'x' : 51.0750544313395,
                  'y' : 25.3803576749522
                  },
  },
{
                  data: {
                  id: 'CAGL0A01199g',
                  name: 'CAGL0A01199g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0A01199g</h2><hr><p><b>Gene name</b> : DIP5</p><p><b>Description</b> : Putative dicarboxylic amino acid permease</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01199g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01199g'  target='_blank'> Link to GRYC</a>",
                  x : 0.809858828032963,
                  y : 6.03031702972537
                  },
                  position : {
                  'x' : 8.09858828032963,
                  'y' : 60.3031702972537
                  },
  },
{
                  data: {
                  id: 'CAGL0A01221g',
                  name: 'CAGL0A01221g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A01221g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted channel activity, role in transmembrane transport and membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01221g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01221g'  target='_blank'> Link to GRYC</a>",
                  x : 13.051982961459,
                  y : 8.83295151718532
                  },
                  position : {
                  'x' : 130.51982961459,
                  'y' : 88.3295151718532
                  },
  },
{
                  data: {
                  id: 'CAGL0A01243g',
                  name: 'CAGL0A01243g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A01243g</h2><hr><p><b>Gene name</b> : GIT1</p><p><b>Description</b> : Has domain(s) with predicted transmembrane transporter activity, role in transmembrane transport and integral component of membrane, integral component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01243g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01243g'  target='_blank'> Link to GRYC</a>",
                  x : 11.3187414837056,
                  y : 11.5189567993266
                  },
                  position : {
                  'x' : 113.187414837056,
                  'y' : 115.189567993266
                  },
  },
{
                  data: {
                  id: 'CAGL0A01782g',
                  name: 'CAGL0A01782g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A01782g</h2><hr><p><b>Gene name</b> : HXT4</p><p><b>Description</b> : Ortholog(s) have glucose transmembrane transporter activity, pentose transmembrane transporter activity and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01782g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01782g'  target='_blank'> Link to GRYC</a>",
                  x : 5.17122989877641,
                  y : 3.03916259227503
                  },
                  position : {
                  'x' : 51.7122989877641,
                  'y' : 30.3916259227503
                  },
  },
{
                  data: {
                  id: 'CAGL0A01826g',
                  name: 'CAGL0A01826g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A01826g</h2><hr><p><b>Gene name</b> : HXT5</p><p><b>Description</b> : Ortholog(s) have glucose transmembrane transporter activity, role in glucose transmembrane transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01826g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01826g'  target='_blank'> Link to GRYC</a>",
                  x : 4.4538365752403,
                  y : 2.13330327271561
                  },
                  position : {
                  'x' : 44.538365752403,
                  'y' : 21.3330327271561
                  },
  },
{
                  data: {
                  id: 'CAGL0A02211g',
                  name: 'CAGL0A02211g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A02211g</h2><hr><p><b>Gene name</b> : HXT6/7</p><p><b>Description</b> : Ortholog(s) have glucose transmembrane transporter activity, pentose transmembrane transporter activity, role in glucose transmembrane transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02211g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02211g'  target='_blank'> Link to GRYC</a>",
                  x : 4.59404876456044,
                  y : 3.61356718346618
                  },
                  position : {
                  'x' : 45.9404876456044,
                  'y' : 36.1356718346618
                  },
  },
{
                  data: {
                  id: 'CAGL0A02233g',
                  name: 'CAGL0A02233g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A02233g</h2><hr><p><b>Gene name</b> : HXT4/6/7</p><p><b>Description</b> : Ortholog(s) have glucose transmembrane transporter activity and membrane, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02233g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02233g'  target='_blank'> Link to GRYC</a>",
                  x : 4.94078260646361,
                  y : 3.52398645894609
                  },
                  position : {
                  'x' : 49.4078260646361,
                  'y' : 35.2398645894609
                  },
  },
{
                  data: {
                  id: 'CAGL0A03476g',
                  name: 'CAGL0A03476g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A03476g</h2><hr><p><b>Gene name</b> : SMF3</p><p><b>Description</b> : Ortholog(s) have role in cellular iron ion homeostasis, iron ion transport and fungal-type vacuole membrane, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03476g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03476g'  target='_blank'> Link to GRYC</a>",
                  x : 3.7377711617155,
                  y : 4.22882234283649
                  },
                  position : {
                  'x' : 37.377711617155,
                  'y' : 42.2882234283649
                  },
  },
{
                  data: {
                  id: 'CAGL0B00814g',
                  name: 'CAGL0B00814g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B00814g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in actin cortical patch localization, actin cytoskeleton organization, actin filament organization, endocytosis and actin cortical patch, cell cortex, cytoplasm localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B00814g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B00814g'  target='_blank'> Link to GRYC</a>",
                  x : 4.51401633248327,
                  y : 3.11890394035659
                  },
                  position : {
                  'x' : 45.1401633248327,
                  'y' : 31.1890394035659
                  },
  },
{
                  data: {
                  id: 'CAGL0B01012g',
                  name: 'CAGL0B01012g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B01012g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-proline transmembrane transporter activity, amino acid transmembrane transporter activity, role in amino acid transport, transmembrane transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B01012g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B01012g'  target='_blank'> Link to GRYC</a>",
                  x : -0.56426893687511,
                  y : 6.7498949543526
                  },
                  position : {
                  'x' : -5.6426893687511,
                  'y' : 67.498949543526
                  },
  },
{
                  data: {
                  id: 'CAGL0B01639g',
                  name: 'CAGL0B01639g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B01639g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have guanyl-nucleotide exchange factor activity and role in retrograde transport, endosome to Golgi</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B01639g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B01639g'  target='_blank'> Link to GRYC</a>",
                  x : 9.08907136789467,
                  y : 4.52035613516896
                  },
                  position : {
                  'x' : 90.8907136789467,
                  'y' : 45.2035613516896
                  },
  },
{
                  data: {
                  id: 'CAGL0B02838g',
                  name: 'CAGL0B02838g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B02838g</h2><hr><p><b>Gene name</b> : MUP1</p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02838g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02838g'  target='_blank'> Link to GRYC</a>",
                  x : 5.56391041445423,
                  y : 2.36543122398404
                  },
                  position : {
                  'x' : 55.6391041445423,
                  'y' : 23.6543122398404
                  },
  },
{
                  data: {
                  id: 'CAGL0B04433g',
                  name: 'CAGL0B04433g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B04433g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted nucleobase transmembrane transporter activity, transmembrane transporter activity, role in nucleobase transport, transmembrane transport and membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B04433g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B04433g'  target='_blank'> Link to GRYC</a>",
                  x : 10.471904839607,
                  y : 4.57938849773385
                  },
                  position : {
                  'x' : 104.71904839607,
                  'y' : 45.7938849773385
                  },
  },
{
                  data: {
                  id: 'CAGL0C01771g',
                  name: 'CAGL0C01771g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C01771g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have fungal-type vacuole membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C01771g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C01771g'  target='_blank'> Link to GRYC</a>",
                  x : 3.84393108296952,
                  y : 2.23004192226052
                  },
                  position : {
                  'x' : 38.4393108296952,
                  'y' : 22.3004192226052
                  },
  },
{
                  data: {
                  id: 'CAGL0C03267g',
                  name: 'CAGL0C03267g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C03267g</h2><hr><p><b>Gene name</b> : FPS1</p><p><b>Description</b> : Glycerol transporter; involved in flucytosine resistance; double fps1/fps2 mutant accumulates glycerol, has constitutive cell wall stress, is hypersensitive to caspofungin in vitro and in vivo</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03267g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03267g'  target='_blank'> Link to GRYC</a>",
                  x : 9.45407576312211,
                  y : 3.3375577068278
                  },
                  position : {
                  'x' : 94.5407576312211,
                  'y' : 33.375577068278
                  },
  },
{
                  data: {
                  id: 'CAGL0C05445g',
                  name: 'CAGL0C05445g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C05445g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in endocytosis</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C05445g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C05445g'  target='_blank'> Link to GRYC</a>",
                  x : 7.12249107526542,
                  y : 3.91174429123027
                  },
                  position : {
                  'x' : 71.2249107526542,
                  'y' : 39.1174429123027
                  },
  },
{
                  data: {
                  id: 'CAGL0D00352g',
                  name: 'CAGL0D00352g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D00352g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATPase-coupled transmembrane transporter activity, role in fatty acid transmembrane transport and integral component of peroxisomal membrane, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00352g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00352g'  target='_blank'> Link to GRYC</a>",
                  x : 7.56091559785279,
                  y : 1.6730420804661
                  },
                  position : {
                  'x' : 75.6091559785279,
                  'y' : 16.730420804661
                  },
  },
{
                  data: {
                  id: 'CAGL0D00418g',
                  name: 'CAGL0D00418g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D00418g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in long-chain fatty acid transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00418g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00418g'  target='_blank'> Link to GRYC</a>",
                  x : -1.00097892335791,
                  y : 7.60879622460247
                  },
                  position : {
                  'x' : -10.0097892335791,
                  'y' : 76.0879622460247
                  },
  },
{
                  data: {
                  id: 'CAGL0D00704g',
                  name: 'CAGL0D00704g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D00704g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have endoplasmic reticulum, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00704g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00704g'  target='_blank'> Link to GRYC</a>",
                  x : 4.80986011705294,
                  y : 4.10339664806114
                  },
                  position : {
                  'x' : 48.0986011705294,
                  'y' : 41.0339664806114
                  },
  },
{
                  data: {
                  id: 'CAGL0D02640g',
                  name: 'CAGL0D02640g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0D02640g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted transmembrane transporter activity, role in transmembrane transport and integral component of membrane, membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D02640g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D02640g'  target='_blank'> Link to GRYC</a>",
                  x : 1.92661794833778,
                  y : 5.82408887117772
                  },
                  position : {
                  'x' : 19.2661794833778,
                  'y' : 58.2408887117772
                  },
  },
{
                  data: {
                  id: 'CAGL0D02662g',
                  name: 'CAGL0D02662g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D02662g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted transmembrane transporter activity, role in transmembrane transport and integral component of membrane, membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D02662g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D02662g'  target='_blank'> Link to GRYC</a>",
                  x : -1.60709600979973,
                  y : 5.76112979880025
                  },
                  position : {
                  'x' : -16.0709600979973,
                  'y' : 57.6112979880025
                  },
  },
{
                  data: {
                  id: 'CAGL0D04708g',
                  name: 'CAGL0D04708g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffffff',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D04708g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have copper ion transmembrane transporter activity, role in copper ion import, copper ion transport, iron ion transmembrane transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D04708g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D04708g'  target='_blank'> Link to GRYC</a>",
                  x : 4.94385913556481,
                  y : 7.27591091859539
                  },
                  position : {
                  'x' : 49.4385913556481,
                  'y' : 72.7591091859539
                  },
  },
{
                  data: {
                  id: 'CAGL0E04092g',
                  name: 'CAGL0E04092g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0E04092g</h2><hr><p><b>Gene name</b> : SIT1</p><p><b>Description</b> : Putative siderophore-iron transporter with 14 transmembrane domains; required for iron-dependent survival in macrophages; mRNA levels elevated under iron deficiency conditions; plasma membrane localized</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04092g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04092g'  target='_blank'> Link to GRYC</a>",
                  x : 12.474808959114,
                  y : 10.3643308984428
                  },
                  position : {
                  'x' : 124.74808959114,
                  'y' : 103.643308984428
                  },
  },
{
                  data: {
                  id: 'CAGL0E05346g',
                  name: 'CAGL0E05346g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E05346g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have fungal-type vacuole membrane, vacuolar proton-transporting V-type ATPase, V1 domain localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05346g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05346g'  target='_blank'> Link to GRYC</a>",
                  x : 5.38022524977841,
                  y : 5.40732820866092
                  },
                  position : {
                  'x' : 53.8022524977841,
                  'y' : 54.0732820866092
                  },
  },
{
                  data: {
                  id: 'CAGL0F00187g',
                  name: 'CAGL0F00187g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#66ff66',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F00187g</h2><hr><p><b>Gene name</b> : FET4</p><p><b>Description</b> : Has domain(s) with predicted role in transmembrane transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00187g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00187g'  target='_blank'> Link to GRYC</a>",
                  x : 9.60639638190974,
                  y : 10.9312808805722
                  },
                  position : {
                  'x' : 96.0639638190974,
                  'y' : 109.312808805722
                  },
  },
{
                  data: {
                  id: 'CAGL0F00209g',
                  name: 'CAGL0F00209g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F00209g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in transmembrane transport and integral component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00209g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00209g'  target='_blank'> Link to GRYC</a>",
                  x : 7.27215527455688,
                  y : 11.9073410390059
                  },
                  position : {
                  'x' : 72.7215527455688,
                  'y' : 119.073410390059
                  },
  },
{
                  data: {
                  id: 'CAGL0F00231g',
                  name: 'CAGL0F00231g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F00231g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have inorganic phosphate transmembrane transporter activity, role in phosphate ion transmembrane transport and integral component of mitochondrial inner membrane, mitochondrion, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00231g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00231g'  target='_blank'> Link to GRYC</a>",
                  x : 11.7577541007323,
                  y : 5.22069369581565
                  },
                  position : {
                  'x' : 117.577541007323,
                  'y' : 52.2069369581565
                  },
  },
{
                  data: {
                  id: 'CAGL0F01419g',
                  name: 'CAGL0F01419g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#66ff66',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F01419g</h2><hr><p><b>Gene name</b> : AUS1</p><p><b>Description</b> : ATP-binding cassette transporter involved in sterol uptake</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01419g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01419g'  target='_blank'> Link to GRYC</a>",
                  x : 10.3112403360266,
                  y : 12.4439965720516
                  },
                  position : {
                  'x' : 103.112403360266,
                  'y' : 124.439965720516
                  },
  },
{
                  data: {
                  id: 'CAGL0F02513g',
                  name: 'CAGL0F02513g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F02513g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in protein secretion</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F02513g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F02513g'  target='_blank'> Link to GRYC</a>",
                  x : 8.98950698675348,
                  y : 3.99204408992786
                  },
                  position : {
                  'x' : 89.8950698675348,
                  'y' : 39.9204408992786
                  },
  },
{
                  data: {
                  id: 'CAGL0F05687g',
                  name: 'CAGL0F05687g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F05687g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YDR186C and Saccharomyces cerevisiae S288C : YDR186C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F05687g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F05687g'  target='_blank'> Link to GRYC</a>",
                  x : 1.91190296546239,
                  y : 2.70099792022065
                  },
                  position : {
                  'x' : 19.1190296546239,
                  'y' : 27.0099792022065
                  },
  },
{
                  data: {
                  id: 'CAGL0F08019g',
                  name: 'CAGL0F08019g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F08019g</h2><hr><p><b>Gene name</b> : PEX21</p><p><b>Description</b> : Ortholog(s) have role in positive regulation of binding, protein import into peroxisome matrix and cytosol, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F08019g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F08019g'  target='_blank'> Link to GRYC</a>",
                  x : 6.83910274200392,
                  y : 1.51514280581265
                  },
                  position : {
                  'x' : 68.3910274200392,
                  'y' : 15.1514280581265
                  },
  },
{
                  data: {
                  id: 'CAGL0F08085g',
                  name: 'CAGL0F08085g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F08085g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have pyruvate transmembrane transporter activity, role in mitochondrial pyruvate transmembrane transport and mitochondrial membrane, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F08085g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F08085g'  target='_blank'> Link to GRYC</a>",
                  x : 4.10979263614459,
                  y : 2.66639012068759
                  },
                  position : {
                  'x' : 41.0979263614459,
                  'y' : 26.6639012068759
                  },
  },
{
                  data: {
                  id: 'CAGL0G01166g',
                  name: 'CAGL0G01166g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G01166g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G01166g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G01166g'  target='_blank'> Link to GRYC</a>",
                  x : -1.24946822340322,
                  y : 9.56334692360673
                  },
                  position : {
                  'x' : -12.4946822340322,
                  'y' : 95.6334692360673
                  },
  },
{
                  data: {
                  id: 'CAGL0G02409g',
                  name: 'CAGL0G02409g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G02409g</h2><hr><p><b>Gene name</b> : SRP40</p><p><b>Description</b> : Ortholog(s) have nucleolus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G02409g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G02409g'  target='_blank'> Link to GRYC</a>",
                  x : 1.1483272034738,
                  y : 11.3246510720144
                  },
                  position : {
                  'x' : 11.483272034738,
                  'y' : 113.246510720144
                  },
  },
{
                  data: {
                  id: 'CAGL0G06468g',
                  name: 'CAGL0G06468g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G06468g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein; gene is downregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06468g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06468g'  target='_blank'> Link to GRYC</a>",
                  x : 1.50171078737486,
                  y : 9.21676785838775
                  },
                  position : {
                  'x' : 15.0171078737486,
                  'y' : 92.1676785838775
                  },
  },
{
                  data: {
                  id: 'CAGL0G08019g',
                  name: 'CAGL0G08019g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G08019g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cellular response to biotic stimulus, cellular response to starvation and filamentous growth of a population of unicellular organisms in response to biotic stimulus, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G08019g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G08019g'  target='_blank'> Link to GRYC</a>",
                  x : 6.30597653587461,
                  y : 2.12353396533069
                  },
                  position : {
                  'x' : 63.0597653587461,
                  'y' : 21.2353396533069
                  },
  },
{
                  data: {
                  id: 'CAGL0H00440g',
                  name: 'CAGL0H00440g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H00440g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in transmembrane transport and integral component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00440g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00440g'  target='_blank'> Link to GRYC</a>",
                  x : 0.952052093624786,
                  y : 10.0467010837621
                  },
                  position : {
                  'x' : 9.52052093624786,
                  'y' : 100.467010837621
                  },
  },
{
                  data: {
                  id: 'CAGL0H00506g',
                  name: 'CAGL0H00506g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H00506g</h2><hr><p><b>Gene name</b> : ATP2</p><p><b>Description</b> : F1F0-ATPase complex, F1 beta subunit; expression upregulated in biofilm vs planktonic cell culture; protein abundance decreased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00506g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00506g'  target='_blank'> Link to GRYC</a>",
                  x : 10.0780150320271,
                  y : 4.92120137412944
                  },
                  position : {
                  'x' : 100.780150320271,
                  'y' : 49.2120137412944
                  },
  },
{
                  data: {
                  id: 'CAGL0H04191g',
                  name: 'CAGL0H04191g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H04191g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have proton-transporting ATP synthase activity, rotational mechanism activity and role in ATP synthesis coupled proton transport, mitochondrial proton-transporting ATP synthase complex assembly, protein complex oligomerization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H04191g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H04191g'  target='_blank'> Link to GRYC</a>",
                  x : 8.46561230233973,
                  y : 2.3951521785109
                  },
                  position : {
                  'x' : 84.6561230233973,
                  'y' : 23.951521785109
                  },
  },
{
                  data: {
                  id: 'CAGL0H08822g',
                  name: 'CAGL0H08822g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H08822g</h2><hr><p><b>Gene name</b> : MMT2</p><p><b>Description</b> : Ortholog(s) have role in cellular iron ion homeostasis and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H08822g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H08822g'  target='_blank'> Link to GRYC</a>",
                  x : 2.23451531276255,
                  y : 11.5627487093187
                  },
                  position : {
                  'x' : 22.3451531276255,
                  'y' : 115.627487093187
                  },
  },
{
                  data: {
                  id: 'CAGL0H10076g',
                  name: 'CAGL0H10076g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#ffffff',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H10076g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H10076g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H10076g'  target='_blank'> Link to GRYC</a>",
                  x : 6.47036833109774,
                  y : 13.8294858568204
                  },
                  position : {
                  'x' : 64.7036833109774,
                  'y' : 138.294858568204
                  },
  },
{
                  data: {
                  id: 'CAGL0I00286g',
                  name: 'CAGL0I00286g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0I00286g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted transmembrane transporter activity, role in transmembrane transport and integral component of membrane, membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I00286g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I00286g'  target='_blank'> Link to GRYC</a>",
                  x : 3.77815493516571,
                  y : 6.53053717407121
                  },
                  position : {
                  'x' : 37.7815493516571,
                  'y' : 65.3053717407121
                  },
  },
{
                  data: {
                  id: 'CAGL0I00462g',
                  name: 'CAGL0I00462g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I00462g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cotranslational protein targeting to membrane and endoplasmic reticulum membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I00462g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I00462g'  target='_blank'> Link to GRYC</a>",
                  x : 9.21947408465589,
                  y : 3.69795559978189
                  },
                  position : {
                  'x' : 92.1947408465589,
                  'y' : 36.9795559978189
                  },
  },
{
                  data: {
                  id: 'CAGL0I01980g',
                  name: 'CAGL0I01980g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I01980g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative activator of transcription; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01980g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01980g'  target='_blank'> Link to GRYC</a>",
                  x : 8.75870220853075,
                  y : 2.01313522564353
                  },
                  position : {
                  'x' : 87.5870220853075,
                  'y' : 20.1313522564353
                  },
  },
{
                  data: {
                  id: 'CAGL0I02134g',
                  name: 'CAGL0I02134g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I02134g</h2><hr><p><b>Gene name</b> : PEX21B</p><p><b>Description</b> : Ortholog(s) have role in protein import into peroxisome matrix and cytosol, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02134g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02134g'  target='_blank'> Link to GRYC</a>",
                  x : 7.862933310917,
                  y : 13.5945087639615
                  },
                  position : {
                  'x' : 78.62933310917,
                  'y' : 135.945087639615
                  },
  },
{
                  data: {
                  id: 'CAGL0I02508g',
                  name: 'CAGL0I02508g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0I02508g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have copper ion transmembrane transporter activity and role in cellular copper ion homeostasis, copper ion import, protein maturation by copper ion transfer</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02508g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02508g'  target='_blank'> Link to GRYC</a>",
                  x : 2.05487104971547,
                  y : 4.14484302154086
                  },
                  position : {
                  'x' : 20.5487104971547,
                  'y' : 41.4484302154086
                  },
  },
{
                  data: {
                  id: 'CAGL0I04004g',
                  name: 'CAGL0I04004g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I04004g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04004g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04004g'  target='_blank'> Link to GRYC</a>",
                  x : -0.279399371273419,
                  y : 9.87883596357195
                  },
                  position : {
                  'x' : -2.79399371273419,
                  'y' : 98.7883596357195
                  },
  },
{
                  data: {
                  id: 'CAGL0I04686g',
                  name: 'CAGL0I04686g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I04686g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATPase activity, proton-transporting ATP synthase activity, rotational mechanism, proton-transporting ATPase activity, rotational mechanism activity and role in ATP synthesis coupled proton transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04686g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04686g'  target='_blank'> Link to GRYC</a>",
                  x : 9.90752467495866,
                  y : 5.27732029776162
                  },
                  position : {
                  'x' : 99.0752467495866,
                  'y' : 52.7732029776162
                  },
  },
{
                  data: {
                  id: 'CAGL0I06743g',
                  name: 'CAGL0I06743g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#66ff66',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0I06743g</h2><hr><p><b>Gene name</b> : FTR1</p><p><b>Description</b> : Putative ferrous iron transmembrane transporter involved in iron uptake</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I06743g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I06743g'  target='_blank'> Link to GRYC</a>",
                  x : 11.1750625436067,
                  y : 9.96066369245749
                  },
                  position : {
                  'x' : 111.750625436067,
                  'y' : 99.6066369245749
                  },
  },
{
                  data: {
                  id: 'CAGL0I07969g',
                  name: 'CAGL0I07969g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0I07969g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ATP synthesis coupled proton transport, protein complex oligomerization and mitochondrial proton-transporting ATP synthase complex, coupling factor F(o), plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I07969g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I07969g'  target='_blank'> Link to GRYC</a>",
                  x : 11.2284064387467,
                  y : 5.65450518356731
                  },
                  position : {
                  'x' : 112.284064387467,
                  'y' : 56.5450518356731
                  },
  },
{
                  data: {
                  id: 'CAGL0I09086g',
                  name: 'CAGL0I09086g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I09086g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in transmembrane transport and integral component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09086g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09086g'  target='_blank'> Link to GRYC</a>",
                  x : 3.34934152373449,
                  y : 3.07003765651365
                  },
                  position : {
                  'x' : 33.4934152373449,
                  'y' : 30.7003765651365
                  },
  },
{
                  data: {
                  id: 'CAGL0I09702g',
                  name: 'CAGL0I09702g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I09702g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have riboflavin transmembrane transporter activity, role in riboflavin transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09702g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09702g'  target='_blank'> Link to GRYC</a>",
                  x : 5.31016361298214,
                  y : 0.713533741488403
                  },
                  position : {
                  'x' : 53.1016361298214,
                  'y' : 7.13533741488403
                  },
  },
{
                  data: {
                  id: 'CAGL0I09724g',
                  name: 'CAGL0I09724g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I09724g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in transmembrane transport and integral component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09724g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09724g'  target='_blank'> Link to GRYC</a>",
                  x : 4.32853297981102,
                  y : 0.546598798527776
                  },
                  position : {
                  'x' : 43.2853297981102,
                  'y' : 5.46598798527776
                  },
  },
{
                  data: {
                  id: 'CAGL0I10010g',
                  name: 'CAGL0I10010g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I10010g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have SNARE binding, chaperone binding activity and role in amino acid transport, intracellular protein transport, protein folding, protein localization to nucleus, regulation of pH, retrograde transport, endosome to Golgi</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10010g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10010g'  target='_blank'> Link to GRYC</a>",
                  x : 8.49610453906003,
                  y : 0.620663887632087
                  },
                  position : {
                  'x' : 84.9610453906003,
                  'y' : 6.20663887632087
                  },
  },
{
                  data: {
                  id: 'CAGL0I10384g',
                  name: 'CAGL0I10384g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffffff',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I10384g</h2><hr><p><b>Gene name</b> : TPO3</p><p><b>Description</b> : Predicted polyamine transporter of the major facilitator superfamily; required for azole resistance</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10384g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10384g'  target='_blank'> Link to GRYC</a>",
                  x : 2.66228747585414,
                  y : 9.89294087320494
                  },
                  position : {
                  'x' : 26.6228747585414,
                  'y' : 98.9294087320494
                  },
  },
{
                  data: {
                  id: 'CAGL0I10747g',
                  name: 'CAGL0I10747g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I10747g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ammonium transmembrane transporter activity, role in ammonium transport, nitrogen utilization and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10747g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10747g'  target='_blank'> Link to GRYC</a>",
                  x : -0.097771110383055,
                  y : 9.39849929600513
                  },
                  position : {
                  'x' : -0.97771110383055,
                  'y' : 93.9849929600513
                  },
  },
{
                  data: {
                  id: 'CAGL0J00363g',
                  name: 'CAGL0J00363g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J00363g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein of major facilitator superfamily; gene is downregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J00363g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J00363g'  target='_blank'> Link to GRYC</a>",
                  x : 0.617236234501672,
                  y : 10.4146415316066
                  },
                  position : {
                  'x' : 6.17236234501672,
                  'y' : 104.146415316066
                  },
  },
{
                  data: {
                  id: 'CAGL0J07980g',
                  name: 'CAGL0J07980g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J07980g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have copper chaperone activity and role in cellular copper ion homeostasis, cellular iron ion homeostasis, cellular response to oxidative stress, copper ion transport, regulation of iron ion transmembrane transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J07980g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J07980g'  target='_blank'> Link to GRYC</a>",
                  x : 4.073435122176,
                  y : 3.15323356968774
                  },
                  position : {
                  'x' : 40.73435122176,
                  'y' : 31.5323356968774
                  },
  },
{
                  data: {
                  id: 'CAGL0J09944g',
                  name: 'CAGL0J09944g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J09944g</h2><hr><p><b>Gene name</b> : AQR1</p><p><b>Description</b> : Plasma membrane drug:H+ antiporter involved in resistance to drugs and acetic acid</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09944g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09944g'  target='_blank'> Link to GRYC</a>",
                  x : 12.2590776572144,
                  y : 4.33145524772517
                  },
                  position : {
                  'x' : 122.590776572144,
                  'y' : 43.3145524772517
                  },
  },
{
                  data: {
                  id: 'CAGL0K00715g',
                  name: 'CAGL0K00715g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0K00715g</h2><hr><p><b>Gene name</b> : RTA1</p><p><b>Description</b> : Putative protein involved in 7-aminocholesterol resistance; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K00715g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K00715g'  target='_blank'> Link to GRYC</a>",
                  x : 5.2186255450795,
                  y : 12.7794373846478
                  },
                  position : {
                  'x' : 52.186255450795,
                  'y' : 127.794373846478
                  },
  },
{
                  data: {
                  id: 'CAGL0K01749g',
                  name: 'CAGL0K01749g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K01749g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have lipid binding, sterol transfer activity and role in ER to Golgi ceramide transport, endocytosis, exocytosis, maintenance of cell polarity, piecemeal microautophagy of the nucleus, sterol transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K01749g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K01749g'  target='_blank'> Link to GRYC</a>",
                  x : 9.02760733075425,
                  y : 2.58806850869896
                  },
                  position : {
                  'x' : 90.2760733075425,
                  'y' : 25.8806850869896
                  },
  },
{
                  data: {
                  id: 'CAGL0K04367g',
                  name: 'CAGL0K04367g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K04367g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-methionine secondary active transmembrane transporter activity, role in methionine import across plasma membrane, sulfur amino acid transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04367g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04367g'  target='_blank'> Link to GRYC</a>",
                  x : 2.92374534224423,
                  y : 2.47208482305925
                  },
                  position : {
                  'x' : 29.2374534224423,
                  'y' : 24.7208482305925
                  },
  },
{
                  data: {
                  id: 'CAGL0K04851g',
                  name: 'CAGL0K04851g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K04851g</h2><hr><p><b>Gene name</b> : PEX17</p><p><b>Description</b> : Ortholog(s) have role in protein import into peroxisome matrix, docking and Pex17p-Pex14p docking complex, peroxisomal importomer complex, peroxisomal membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04851g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04851g'  target='_blank'> Link to GRYC</a>",
                  x : 9.40788887288291,
                  y : 4.20154583169246
                  },
                  position : {
                  'x' : 94.0788887288291,
                  'y' : 42.0154583169246
                  },
  },
{
                  data: {
                  id: 'CAGL0K05753g',
                  name: 'CAGL0K05753g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K05753g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-proline transmembrane transporter activity, amino acid transmembrane transporter activity and role in amino acid transport, transmembrane transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K05753g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K05753g'  target='_blank'> Link to GRYC</a>",
                  x : 9.35417319856149,
                  y : 6.33811546863125
                  },
                  position : {
                  'x' : 93.5417319856149,
                  'y' : 63.3811546863125
                  },
  },
{
                  data: {
                  id: 'CAGL0K07436g',
                  name: 'CAGL0K07436g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K07436g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA binding, tricarboxylate secondary active transmembrane transporter activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07436g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07436g'  target='_blank'> Link to GRYC</a>",
                  x : 8.8997908020205,
                  y : 5.16818404788181
                  },
                  position : {
                  'x' : 88.997908020205,
                  'y' : 51.6818404788181
                  },
  },
{
                  data: {
                  id: 'CAGL0K08206g',
                  name: 'CAGL0K08206g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K08206g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08206g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08206g'  target='_blank'> Link to GRYC</a>",
                  x : 9.70275611850189,
                  y : 3.83312447156081
                  },
                  position : {
                  'x' : 97.0275611850189,
                  'y' : 38.3312447156081
                  },
  },
{
                  data: {
                  id: 'CAGL0K09988g',
                  name: 'CAGL0K09988g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K09988g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in vesicle-mediated transport and integral component of Golgi membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K09988g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K09988g'  target='_blank'> Link to GRYC</a>",
                  x : 0.247979674520271,
                  y : 8.41283450175616
                  },
                  position : {
                  'x' : 2.47979674520271,
                  'y' : 84.1283450175616
                  },
  },
{
                  data: {
                  id: 'CAGL0K10362g',
                  name: 'CAGL0K10362g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K10362g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-ornithine transmembrane transporter activity, role in arginine biosynthetic process, mitochondrial L-ornithine transmembrane transport and mitochondrial envelope localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10362g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10362g'  target='_blank'> Link to GRYC</a>",
                  x : 2.53505752788602,
                  y : 12.6729166823715
                  },
                  position : {
                  'x' : 25.3505752788602,
                  'y' : 126.729166823715
                  },
  },
{
                  data: {
                  id: 'CAGL0K11616g',
                  name: 'CAGL0K11616g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffffff',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K11616g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative mitochondrial inner membrane transporter; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K11616g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K11616g'  target='_blank'> Link to GRYC</a>",
                  x : 4.03440618052779,
                  y : 8.39145547898618
                  },
                  position : {
                  'x' : 40.3440618052779,
                  'y' : 83.9145547898618
                  },
  },
{
                  data: {
                  id: 'CAGL0L02079g',
                  name: 'CAGL0L02079g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L02079g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have tricarboxylate secondary active transmembrane transporter activity, role in mitochondrial citrate transmembrane transport, transmembrane transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L02079g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L02079g'  target='_blank'> Link to GRYC</a>",
                  x : 3.33112749119054,
                  y : 12.0165274565345
                  },
                  position : {
                  'x' : 33.3112749119054,
                  'y' : 120.165274565345
                  },
  },
{
                  data: {
                  id: 'CAGL0L03267g',
                  name: 'CAGL0L03267g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L03267g</h2><hr><p><b>Gene name</b> : GAP1</p><p><b>Description</b> : Ortholog(s) have L-proline transmembrane transporter activity, amino acid transmembrane transporter activity, beta-alanine transmembrane transporter activity, polyamine transmembrane transporter activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03267g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03267g'  target='_blank'> Link to GRYC</a>",
                  x : 7.14750329170293,
                  y : 2.24181043156564
                  },
                  position : {
                  'x' : 71.4750329170293,
                  'y' : 22.4181043156564
                  },
  },
{
                  data: {
                  id: 'CAGL0L05742g',
                  name: 'CAGL0L05742g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L05742g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have iron ion transmembrane transporter activity, role in iron import into the mitochondrion and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L05742g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L05742g'  target='_blank'> Link to GRYC</a>",
                  x : 3.12312665265061,
                  y : 3.67316737448922
                  },
                  position : {
                  'x' : 31.2312665265061,
                  'y' : 36.7316737448922
                  },
  },
{
                  data: {
                  id: 'CAGL0L07546g',
                  name: 'CAGL0L07546g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L07546g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have amino acid transmembrane transporter activity and role in amino acid transport, transmembrane transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L07546g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L07546g'  target='_blank'> Link to GRYC</a>",
                  x : 7.62067296084205,
                  y : 5.95361066664593
                  },
                  position : {
                  'x' : 76.2067296084205,
                  'y' : 59.5361066664593
                  },
  },
{
                  data: {
                  id: 'CAGL0L10868g',
                  name: 'CAGL0L10868g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L10868g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10868g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10868g'  target='_blank'> Link to GRYC</a>",
                  x : 4.0154079220031,
                  y : 12.2939844143169
                  },
                  position : {
                  'x' : 40.154079220031,
                  'y' : 122.939844143169
                  },
  },
{
                  data: {
                  id: 'CAGL0L12936g',
                  name: 'CAGL0L12936g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L12936g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in protein targeting to mitochondrion and integral component of mitochondrial outer membrane, mitochondrial outer membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L12936g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L12936g'  target='_blank'> Link to GRYC</a>",
                  x : 9.08627438423988,
                  y : 5.86955149477652
                  },
                  position : {
                  'x' : 90.8627438423988,
                  'y' : 58.6955149477652
                  },
  },
{
                  data: {
                  id: 'CAGL0L13354g',
                  name: 'CAGL0L13354g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L13354g</h2><hr><p><b>Gene name</b> : TNR1</p><p><b>Description</b> : Putative nicotinamide transporter; strongly induced under niacin-limiting conditions</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L13354g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L13354g'  target='_blank'> Link to GRYC</a>",
                  x : 8.02055076414146,
                  y : 11.4967972143045
                  },
                  position : {
                  'x' : 80.2055076414146,
                  'y' : 114.967972143045
                  },
  },
{
                  data: {
                  id: 'CAGL0M02387g',
                  name: 'CAGL0M02387g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M02387g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATPase-coupled transmembrane transporter activity, role in fatty acid transport and integral component of peroxisomal membrane, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M02387g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M02387g'  target='_blank'> Link to GRYC</a>",
                  x : 8.23941122704314,
                  y : 2.9280432567426
                  },
                  position : {
                  'x' : 82.3941122704314,
                  'y' : 29.280432567426
                  },
  },
{
                  data: {
                  id: 'CAGL0M03003g',
                  name: 'CAGL0M03003g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M03003g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in borate transmembrane transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M03003g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M03003g'  target='_blank'> Link to GRYC</a>",
                  x : 9.11802578674619,
                  y : 12.9950206751523
                  },
                  position : {
                  'x' : 91.1802578674619,
                  'y' : 129.950206751523
                  },
  },
{
                  data: {
                  id: 'CAGL0M05511g',
                  name: 'CAGL0M05511g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M05511g</h2><hr><p><b>Gene name</b> : FTH1</p><p><b>Description</b> : Has domain(s) with predicted iron ion transmembrane transporter activity, role in iron ion transmembrane transport and high-affinity iron permease complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M05511g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M05511g'  target='_blank'> Link to GRYC</a>",
                  x : 3.52555626553383,
                  y : 3.38227404331957
                  },
                  position : {
                  'x' : 35.2555626553383,
                  'y' : 33.8227404331957
                  },
  },
{
                  data: {
                  id: 'CAGL0M06457g',
                  name: 'CAGL0M06457g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M06457g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have calcium ion transmembrane transporter activity, manganese ion transmembrane transporter activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M06457g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M06457g'  target='_blank'> Link to GRYC</a>",
                  x : 3.24782022047737,
                  y : 12.7426696388165
                  },
                  position : {
                  'x' : 32.4782022047737,
                  'y' : 127.426696388165
                  },
  },
{
                  data: {
                  id: 'CAGL0M08602g',
                  name: 'CAGL0M08602g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0M08602g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATPase-coupled cation transmembrane transporter activity, copper ion binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M08602g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M08602g'  target='_blank'> Link to GRYC</a>",
                  x : 2.21549782375507,
                  y : 4.64133314281584
                  },
                  position : {
                  'x' : 22.1549782375507,
                  'y' : 46.4133314281584
                  },
  },
{
                  data: {
                  id: 'CAGL0M09020g',
                  name: 'CAGL0M09020g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M09020g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have succinate:fumarate antiporter activity, role in acetate catabolic process, carbon utilization, fatty acid catabolic process, fumarate transport, succinate transport and mitochondrion, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M09020g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M09020g'  target='_blank'> Link to GRYC</a>",
                  x : 8.30760649154994,
                  y : 1.35435524192781
                  },
                  position : {
                  'x' : 83.0760649154994,
                  'y' : 13.5435524192781
                  },
  },
{
                  data: {
                  id: 'CAGL0M09581g',
                  name: 'CAGL0M09581g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M09581g</h2><hr><p><b>Gene name</b> : ATP1</p><p><b>Description</b> : F1F0-ATPase complex, F1 alpha subunit</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M09581g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M09581g'  target='_blank'> Link to GRYC</a>",
                  x : 10.672583233412,
                  y : 4.27070240222709
                  },
                  position : {
                  'x' : 106.72583233412,
                  'y' : 42.7070240222709
                  },
  },
{
                  data: {
                  source: 'CAGL0A01782g',
                  target: 'CAGL0A00737g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0A02211g',
                  target: 'CAGL0A00737g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0A02233g',
                  target: 'CAGL0A00737g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B00814g',
                  target: 'CAGL0A00737g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B02838g',
                  target: 'CAGL0A00737g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D00704g',
                  target: 'CAGL0A00737g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F08019g',
                  target: 'CAGL0A00737g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F08085g',
                  target: 'CAGL0A00737g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08019g',
                  target: 'CAGL0A00737g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09086g',
                  target: 'CAGL0A00737g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07980g',
                  target: 'CAGL0A00737g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03267g',
                  target: 'CAGL0A00737g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05511g',
                  target: 'CAGL0A00737g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B01012g',
                  target: 'CAGL0A01199g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D02640g',
                  target: 'CAGL0A01199g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02508g',
                  target: 'CAGL0A01199g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09988g',
                  target: 'CAGL0A01199g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M08602g',
                  target: 'CAGL0A01199g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0A01826g',
                  target: 'CAGL0A01782g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0A02211g',
                  target: 'CAGL0A01782g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0A02233g',
                  target: 'CAGL0A01782g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0A03476g',
                  target: 'CAGL0A01782g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B00814g',
                  target: 'CAGL0A01782g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B02838g',
                  target: 'CAGL0A01782g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C05445g',
                  target: 'CAGL0A01782g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D00704g',
                  target: 'CAGL0A01782g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F08019g',
                  target: 'CAGL0A01782g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F08085g',
                  target: 'CAGL0A01782g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08019g',
                  target: 'CAGL0A01782g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09086g',
                  target: 'CAGL0A01782g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07980g',
                  target: 'CAGL0A01782g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03267g',
                  target: 'CAGL0A01782g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05742g',
                  target: 'CAGL0A01782g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05511g',
                  target: 'CAGL0A01782g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0A02211g',
                  target: 'CAGL0A01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0A02233g',
                  target: 'CAGL0A01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B00814g',
                  target: 'CAGL0A01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B02838g',
                  target: 'CAGL0A01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C01771g',
                  target: 'CAGL0A01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F08085g',
                  target: 'CAGL0A01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08019g',
                  target: 'CAGL0A01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09086g',
                  target: 'CAGL0A01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09702g',
                  target: 'CAGL0A01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07980g',
                  target: 'CAGL0A01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04367g',
                  target: 'CAGL0A01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05511g',
                  target: 'CAGL0A01826g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0A02233g',
                  target: 'CAGL0A02211g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0A03476g',
                  target: 'CAGL0A02211g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B00814g',
                  target: 'CAGL0A02211g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B02838g',
                  target: 'CAGL0A02211g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C01771g',
                  target: 'CAGL0A02211g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C05445g',
                  target: 'CAGL0A02211g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D00704g',
                  target: 'CAGL0A02211g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05346g',
                  target: 'CAGL0A02211g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F08085g',
                  target: 'CAGL0A02211g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09086g',
                  target: 'CAGL0A02211g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07980g',
                  target: 'CAGL0A02211g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05742g',
                  target: 'CAGL0A02211g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05511g',
                  target: 'CAGL0A02211g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0A03476g',
                  target: 'CAGL0A02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B00814g',
                  target: 'CAGL0A02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B02838g',
                  target: 'CAGL0A02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C01771g',
                  target: 'CAGL0A02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C05445g',
                  target: 'CAGL0A02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D00704g',
                  target: 'CAGL0A02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05346g',
                  target: 'CAGL0A02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F08085g',
                  target: 'CAGL0A02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09086g',
                  target: 'CAGL0A02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07980g',
                  target: 'CAGL0A02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05511g',
                  target: 'CAGL0A02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B00814g',
                  target: 'CAGL0A03476g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D00704g',
                  target: 'CAGL0A03476g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05346g',
                  target: 'CAGL0A03476g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F08085g',
                  target: 'CAGL0A03476g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00286g',
                  target: 'CAGL0A03476g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02508g',
                  target: 'CAGL0A03476g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09086g',
                  target: 'CAGL0A03476g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07980g',
                  target: 'CAGL0A03476g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04367g',
                  target: 'CAGL0A03476g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05742g',
                  target: 'CAGL0A03476g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05511g',
                  target: 'CAGL0A03476g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M08602g',
                  target: 'CAGL0A03476g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B02838g',
                  target: 'CAGL0B00814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C01771g',
                  target: 'CAGL0B00814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C05445g',
                  target: 'CAGL0B00814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D00704g',
                  target: 'CAGL0B00814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F08085g',
                  target: 'CAGL0B00814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09086g',
                  target: 'CAGL0B00814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07980g',
                  target: 'CAGL0B00814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04367g',
                  target: 'CAGL0B00814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05742g',
                  target: 'CAGL0B00814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05511g',
                  target: 'CAGL0B00814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D00418g',
                  target: 'CAGL0B01012g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D02662g',
                  target: 'CAGL0B01012g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09988g',
                  target: 'CAGL0B01012g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B04433g',
                  target: 'CAGL0B01639g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C03267g',
                  target: 'CAGL0B01639g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C05445g',
                  target: 'CAGL0B01639g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02513g',
                  target: 'CAGL0B01639g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00506g',
                  target: 'CAGL0B01639g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04191g',
                  target: 'CAGL0B01639g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00462g',
                  target: 'CAGL0B01639g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04686g',
                  target: 'CAGL0B01639g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04851g',
                  target: 'CAGL0B01639g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05753g',
                  target: 'CAGL0B01639g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07436g',
                  target: 'CAGL0B01639g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08206g',
                  target: 'CAGL0B01639g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12936g',
                  target: 'CAGL0B01639g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02387g',
                  target: 'CAGL0B01639g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09581g',
                  target: 'CAGL0B01639g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C01771g',
                  target: 'CAGL0B02838g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C05445g',
                  target: 'CAGL0B02838g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D00352g',
                  target: 'CAGL0B02838g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F08085g',
                  target: 'CAGL0B02838g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08019g',
                  target: 'CAGL0B02838g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09702g',
                  target: 'CAGL0B02838g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07980g',
                  target: 'CAGL0B02838g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03267g',
                  target: 'CAGL0B02838g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C03267g',
                  target: 'CAGL0B04433g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F00231g',
                  target: 'CAGL0B04433g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02513g',
                  target: 'CAGL0B04433g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00506g',
                  target: 'CAGL0B04433g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00462g',
                  target: 'CAGL0B04433g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04686g',
                  target: 'CAGL0B04433g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07969g',
                  target: 'CAGL0B04433g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09944g',
                  target: 'CAGL0B04433g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04851g',
                  target: 'CAGL0B04433g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07436g',
                  target: 'CAGL0B04433g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08206g',
                  target: 'CAGL0B04433g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09581g',
                  target: 'CAGL0B04433g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F08085g',
                  target: 'CAGL0C01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09086g',
                  target: 'CAGL0C01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07980g',
                  target: 'CAGL0C01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05511g',
                  target: 'CAGL0C01771g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C05445g',
                  target: 'CAGL0C03267g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02513g',
                  target: 'CAGL0C03267g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00506g',
                  target: 'CAGL0C03267g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04191g',
                  target: 'CAGL0C03267g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00462g',
                  target: 'CAGL0C03267g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01980g',
                  target: 'CAGL0C03267g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K01749g',
                  target: 'CAGL0C03267g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04851g',
                  target: 'CAGL0C03267g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08206g',
                  target: 'CAGL0C03267g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02387g',
                  target: 'CAGL0C03267g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09581g',
                  target: 'CAGL0C03267g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D00704g',
                  target: 'CAGL0C05445g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05346g',
                  target: 'CAGL0C05445g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02513g',
                  target: 'CAGL0C05445g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08019g',
                  target: 'CAGL0C05445g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00462g',
                  target: 'CAGL0C05445g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04851g',
                  target: 'CAGL0C05445g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07436g',
                  target: 'CAGL0C05445g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08206g',
                  target: 'CAGL0C05445g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L07546g',
                  target: 'CAGL0C05445g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02387g',
                  target: 'CAGL0C05445g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08019g',
                  target: 'CAGL0D00352g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04191g',
                  target: 'CAGL0D00352g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K01749g',
                  target: 'CAGL0D00352g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03267g',
                  target: 'CAGL0D00352g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02387g',
                  target: 'CAGL0D00352g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09020g',
                  target: 'CAGL0D00352g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09988g',
                  target: 'CAGL0D00418g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07980g',
                  target: 'CAGL0D00704g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05742g',
                  target: 'CAGL0D00704g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05511g',
                  target: 'CAGL0D00704g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00286g',
                  target: 'CAGL0D02640g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02508g',
                  target: 'CAGL0D02640g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M08602g',
                  target: 'CAGL0D02640g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05346g',
                  target: 'CAGL0D04708g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00286g',
                  target: 'CAGL0D04708g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00286g',
                  target: 'CAGL0E05346g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L07546g',
                  target: 'CAGL0E05346g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L13354g',
                  target: 'CAGL0F00209g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00506g',
                  target: 'CAGL0F00231g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07969g',
                  target: 'CAGL0F00231g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09581g',
                  target: 'CAGL0F00231g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00506g',
                  target: 'CAGL0F02513g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04191g',
                  target: 'CAGL0F02513g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00462g',
                  target: 'CAGL0F02513g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01980g',
                  target: 'CAGL0F02513g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04686g',
                  target: 'CAGL0F02513g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K01749g',
                  target: 'CAGL0F02513g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04851g',
                  target: 'CAGL0F02513g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07436g',
                  target: 'CAGL0F02513g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08206g',
                  target: 'CAGL0F02513g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12936g',
                  target: 'CAGL0F02513g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02387g',
                  target: 'CAGL0F02513g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09581g',
                  target: 'CAGL0F02513g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09086g',
                  target: 'CAGL0F05687g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04367g',
                  target: 'CAGL0F05687g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05742g',
                  target: 'CAGL0F05687g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05511g',
                  target: 'CAGL0F05687g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08019g',
                  target: 'CAGL0F08019g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04191g',
                  target: 'CAGL0F08019g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01980g',
                  target: 'CAGL0F08019g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09724g',
                  target: 'CAGL0F08019g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10010g',
                  target: 'CAGL0F08019g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03267g',
                  target: 'CAGL0F08019g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02387g',
                  target: 'CAGL0F08019g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09020g',
                  target: 'CAGL0F08019g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09086g',
                  target: 'CAGL0F08085g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07980g',
                  target: 'CAGL0F08085g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05511g',
                  target: 'CAGL0F08085g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04004g',
                  target: 'CAGL0G01166g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10747g',
                  target: 'CAGL0G01166g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00440g',
                  target: 'CAGL0G02409g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08822g',
                  target: 'CAGL0G02409g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00363g',
                  target: 'CAGL0G02409g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H00440g',
                  target: 'CAGL0G06468g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10384g',
                  target: 'CAGL0G06468g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09988g',
                  target: 'CAGL0G06468g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09702g',
                  target: 'CAGL0G08019g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03267g',
                  target: 'CAGL0G08019g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02387g',
                  target: 'CAGL0G08019g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08822g',
                  target: 'CAGL0H00440g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04004g',
                  target: 'CAGL0H00440g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10747g',
                  target: 'CAGL0H00440g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00363g',
                  target: 'CAGL0H00440g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09988g',
                  target: 'CAGL0H00440g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00462g',
                  target: 'CAGL0H00506g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04686g',
                  target: 'CAGL0H00506g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07969g',
                  target: 'CAGL0H00506g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04851g',
                  target: 'CAGL0H00506g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05753g',
                  target: 'CAGL0H00506g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07436g',
                  target: 'CAGL0H00506g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08206g',
                  target: 'CAGL0H00506g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12936g',
                  target: 'CAGL0H00506g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09581g',
                  target: 'CAGL0H00506g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00462g',
                  target: 'CAGL0H04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01980g',
                  target: 'CAGL0H04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10010g',
                  target: 'CAGL0H04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K01749g',
                  target: 'CAGL0H04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03267g',
                  target: 'CAGL0H04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02387g',
                  target: 'CAGL0H04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09020g',
                  target: 'CAGL0H04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00363g',
                  target: 'CAGL0H08822g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10362g',
                  target: 'CAGL0H08822g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02079g',
                  target: 'CAGL0H08822g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10868g',
                  target: 'CAGL0H08822g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06457g',
                  target: 'CAGL0H08822g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11616g',
                  target: 'CAGL0I00286g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01980g',
                  target: 'CAGL0I00462g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04686g',
                  target: 'CAGL0I00462g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K01749g',
                  target: 'CAGL0I00462g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04851g',
                  target: 'CAGL0I00462g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07436g',
                  target: 'CAGL0I00462g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08206g',
                  target: 'CAGL0I00462g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02387g',
                  target: 'CAGL0I00462g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09581g',
                  target: 'CAGL0I00462g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10010g',
                  target: 'CAGL0I01980g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K01749g',
                  target: 'CAGL0I01980g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03267g',
                  target: 'CAGL0I01980g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02387g',
                  target: 'CAGL0I01980g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09020g',
                  target: 'CAGL0I01980g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09086g',
                  target: 'CAGL0I02508g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04367g',
                  target: 'CAGL0I02508g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05742g',
                  target: 'CAGL0I02508g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05511g',
                  target: 'CAGL0I02508g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M08602g',
                  target: 'CAGL0I02508g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10747g',
                  target: 'CAGL0I04004g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00363g',
                  target: 'CAGL0I04004g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09988g',
                  target: 'CAGL0I04004g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07969g',
                  target: 'CAGL0I04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04851g',
                  target: 'CAGL0I04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05753g',
                  target: 'CAGL0I04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07436g',
                  target: 'CAGL0I04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08206g',
                  target: 'CAGL0I04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12936g',
                  target: 'CAGL0I04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09581g',
                  target: 'CAGL0I04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09581g',
                  target: 'CAGL0I07969g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07980g',
                  target: 'CAGL0I09086g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04367g',
                  target: 'CAGL0I09086g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05742g',
                  target: 'CAGL0I09086g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05511g',
                  target: 'CAGL0I09086g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M08602g',
                  target: 'CAGL0I09086g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04367g',
                  target: 'CAGL0I09724g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09020g',
                  target: 'CAGL0I10010g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00363g',
                  target: 'CAGL0I10747g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09988g',
                  target: 'CAGL0I10747g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09988g',
                  target: 'CAGL0J00363g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05742g',
                  target: 'CAGL0J07980g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05511g',
                  target: 'CAGL0J07980g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09581g',
                  target: 'CAGL0J09944g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10868g',
                  target: 'CAGL0K00715g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K04851g',
                  target: 'CAGL0K01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08206g',
                  target: 'CAGL0K01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03267g',
                  target: 'CAGL0K01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02387g',
                  target: 'CAGL0K01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09020g',
                  target: 'CAGL0K01749g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05742g',
                  target: 'CAGL0K04367g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05511g',
                  target: 'CAGL0K04367g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07436g',
                  target: 'CAGL0K04851g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08206g',
                  target: 'CAGL0K04851g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02387g',
                  target: 'CAGL0K04851g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09581g',
                  target: 'CAGL0K04851g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07436g',
                  target: 'CAGL0K05753g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L07546g',
                  target: 'CAGL0K05753g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12936g',
                  target: 'CAGL0K05753g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L07546g',
                  target: 'CAGL0K07436g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12936g',
                  target: 'CAGL0K07436g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02387g',
                  target: 'CAGL0K08206g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09581g',
                  target: 'CAGL0K08206g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02079g',
                  target: 'CAGL0K10362g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06457g',
                  target: 'CAGL0K10362g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10868g',
                  target: 'CAGL0L02079g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06457g',
                  target: 'CAGL0L02079g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M02387g',
                  target: 'CAGL0L03267g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09020g',
                  target: 'CAGL0L03267g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05511g',
                  target: 'CAGL0L05742g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M08602g',
                  target: 'CAGL0L05742g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12936g',
                  target: 'CAGL0L07546g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06457g',
                  target: 'CAGL0L10868g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M09020g',
                  target: 'CAGL0M02387g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M08602g',
                  target: 'CAGL0M05511g',
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
cy.$('#CAGL0A00737g').qtip({
                  content: "<h2>CAGL0A00737g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted transmembrane transporter activity, role in transmembrane transport and integral component of membrane, membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A00737g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A00737g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0A01199g').qtip({
                  content: "<h2>CAGL0A01199g</h2><hr><p><b>Gene name</b> : DIP5</p><p><b>Description</b> : Putative dicarboxylic amino acid permease</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01199g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01199g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0A01221g').qtip({
                  content: "<h2>CAGL0A01221g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted channel activity, role in transmembrane transport and membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01221g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01221g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0A01243g').qtip({
                  content: "<h2>CAGL0A01243g</h2><hr><p><b>Gene name</b> : GIT1</p><p><b>Description</b> : Has domain(s) with predicted transmembrane transporter activity, role in transmembrane transport and integral component of membrane, integral component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01243g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01243g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0A01782g').qtip({
                  content: "<h2>CAGL0A01782g</h2><hr><p><b>Gene name</b> : HXT4</p><p><b>Description</b> : Ortholog(s) have glucose transmembrane transporter activity, pentose transmembrane transporter activity and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01782g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01782g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0A01826g').qtip({
                  content: "<h2>CAGL0A01826g</h2><hr><p><b>Gene name</b> : HXT5</p><p><b>Description</b> : Ortholog(s) have glucose transmembrane transporter activity, role in glucose transmembrane transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01826g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01826g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0A02211g').qtip({
                  content: "<h2>CAGL0A02211g</h2><hr><p><b>Gene name</b> : HXT6/7</p><p><b>Description</b> : Ortholog(s) have glucose transmembrane transporter activity, pentose transmembrane transporter activity, role in glucose transmembrane transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02211g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02211g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0A02233g').qtip({
                  content: "<h2>CAGL0A02233g</h2><hr><p><b>Gene name</b> : HXT4/6/7</p><p><b>Description</b> : Ortholog(s) have glucose transmembrane transporter activity and membrane, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02233g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02233g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0A03476g').qtip({
                  content: "<h2>CAGL0A03476g</h2><hr><p><b>Gene name</b> : SMF3</p><p><b>Description</b> : Ortholog(s) have role in cellular iron ion homeostasis, iron ion transport and fungal-type vacuole membrane, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03476g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03476g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0B00814g').qtip({
                  content: "<h2>CAGL0B00814g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in actin cortical patch localization, actin cytoskeleton organization, actin filament organization, endocytosis and actin cortical patch, cell cortex, cytoplasm localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B00814g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B00814g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0B01012g').qtip({
                  content: "<h2>CAGL0B01012g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-proline transmembrane transporter activity, amino acid transmembrane transporter activity, role in amino acid transport, transmembrane transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B01012g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B01012g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0B01639g').qtip({
                  content: "<h2>CAGL0B01639g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have guanyl-nucleotide exchange factor activity and role in retrograde transport, endosome to Golgi</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B01639g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B01639g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0B02838g').qtip({
                  content: "<h2>CAGL0B02838g</h2><hr><p><b>Gene name</b> : MUP1</p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02838g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02838g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0B04433g').qtip({
                  content: "<h2>CAGL0B04433g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted nucleobase transmembrane transporter activity, transmembrane transporter activity, role in nucleobase transport, transmembrane transport and membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B04433g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B04433g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C01771g').qtip({
                  content: "<h2>CAGL0C01771g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have fungal-type vacuole membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C01771g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C01771g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C03267g').qtip({
                  content: "<h2>CAGL0C03267g</h2><hr><p><b>Gene name</b> : FPS1</p><p><b>Description</b> : Glycerol transporter; involved in flucytosine resistance; double fps1/fps2 mutant accumulates glycerol, has constitutive cell wall stress, is hypersensitive to caspofungin in vitro and in vivo</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03267g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03267g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C05445g').qtip({
                  content: "<h2>CAGL0C05445g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in endocytosis</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C05445g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C05445g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D00352g').qtip({
                  content: "<h2>CAGL0D00352g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATPase-coupled transmembrane transporter activity, role in fatty acid transmembrane transport and integral component of peroxisomal membrane, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00352g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00352g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D00418g').qtip({
                  content: "<h2>CAGL0D00418g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in long-chain fatty acid transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00418g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00418g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D00704g').qtip({
                  content: "<h2>CAGL0D00704g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have endoplasmic reticulum, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00704g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00704g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D02640g').qtip({
                  content: "<h2>CAGL0D02640g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted transmembrane transporter activity, role in transmembrane transport and integral component of membrane, membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D02640g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D02640g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D02662g').qtip({
                  content: "<h2>CAGL0D02662g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted transmembrane transporter activity, role in transmembrane transport and integral component of membrane, membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D02662g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D02662g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D04708g').qtip({
                  content: "<h2>CAGL0D04708g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have copper ion transmembrane transporter activity, role in copper ion import, copper ion transport, iron ion transmembrane transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D04708g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D04708g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E04092g').qtip({
                  content: "<h2>CAGL0E04092g</h2><hr><p><b>Gene name</b> : SIT1</p><p><b>Description</b> : Putative siderophore-iron transporter with 14 transmembrane domains; required for iron-dependent survival in macrophages; mRNA levels elevated under iron deficiency conditions; plasma membrane localized</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04092g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04092g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E05346g').qtip({
                  content: "<h2>CAGL0E05346g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have fungal-type vacuole membrane, vacuolar proton-transporting V-type ATPase, V1 domain localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05346g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05346g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F00187g').qtip({
                  content: "<h2>CAGL0F00187g</h2><hr><p><b>Gene name</b> : FET4</p><p><b>Description</b> : Has domain(s) with predicted role in transmembrane transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00187g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00187g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F00209g').qtip({
                  content: "<h2>CAGL0F00209g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in transmembrane transport and integral component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00209g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00209g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F00231g').qtip({
                  content: "<h2>CAGL0F00231g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have inorganic phosphate transmembrane transporter activity, role in phosphate ion transmembrane transport and integral component of mitochondrial inner membrane, mitochondrion, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00231g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00231g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F01419g').qtip({
                  content: "<h2>CAGL0F01419g</h2><hr><p><b>Gene name</b> : AUS1</p><p><b>Description</b> : ATP-binding cassette transporter involved in sterol uptake</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01419g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01419g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F02513g').qtip({
                  content: "<h2>CAGL0F02513g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in protein secretion</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F02513g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F02513g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F05687g').qtip({
                  content: "<h2>CAGL0F05687g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YDR186C and Saccharomyces cerevisiae S288C : YDR186C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F05687g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F05687g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F08019g').qtip({
                  content: "<h2>CAGL0F08019g</h2><hr><p><b>Gene name</b> : PEX21</p><p><b>Description</b> : Ortholog(s) have role in positive regulation of binding, protein import into peroxisome matrix and cytosol, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F08019g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F08019g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F08085g').qtip({
                  content: "<h2>CAGL0F08085g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have pyruvate transmembrane transporter activity, role in mitochondrial pyruvate transmembrane transport and mitochondrial membrane, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F08085g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F08085g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G01166g').qtip({
                  content: "<h2>CAGL0G01166g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G01166g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G01166g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G02409g').qtip({
                  content: "<h2>CAGL0G02409g</h2><hr><p><b>Gene name</b> : SRP40</p><p><b>Description</b> : Ortholog(s) have nucleolus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G02409g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G02409g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G06468g').qtip({
                  content: "<h2>CAGL0G06468g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein; gene is downregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06468g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06468g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G08019g').qtip({
                  content: "<h2>CAGL0G08019g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cellular response to biotic stimulus, cellular response to starvation and filamentous growth of a population of unicellular organisms in response to biotic stimulus, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G08019g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G08019g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H00440g').qtip({
                  content: "<h2>CAGL0H00440g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in transmembrane transport and integral component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00440g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00440g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H00506g').qtip({
                  content: "<h2>CAGL0H00506g</h2><hr><p><b>Gene name</b> : ATP2</p><p><b>Description</b> : F1F0-ATPase complex, F1 beta subunit; expression upregulated in biofilm vs planktonic cell culture; protein abundance decreased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00506g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00506g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H04191g').qtip({
                  content: "<h2>CAGL0H04191g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have proton-transporting ATP synthase activity, rotational mechanism activity and role in ATP synthesis coupled proton transport, mitochondrial proton-transporting ATP synthase complex assembly, protein complex oligomerization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H04191g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H04191g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H08822g').qtip({
                  content: "<h2>CAGL0H08822g</h2><hr><p><b>Gene name</b> : MMT2</p><p><b>Description</b> : Ortholog(s) have role in cellular iron ion homeostasis and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H08822g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H08822g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H10076g').qtip({
                  content: "<h2>CAGL0H10076g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H10076g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H10076g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I00286g').qtip({
                  content: "<h2>CAGL0I00286g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted transmembrane transporter activity, role in transmembrane transport and integral component of membrane, membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I00286g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I00286g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I00462g').qtip({
                  content: "<h2>CAGL0I00462g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cotranslational protein targeting to membrane and endoplasmic reticulum membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I00462g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I00462g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I01980g').qtip({
                  content: "<h2>CAGL0I01980g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative activator of transcription; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01980g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01980g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I02134g').qtip({
                  content: "<h2>CAGL0I02134g</h2><hr><p><b>Gene name</b> : PEX21B</p><p><b>Description</b> : Ortholog(s) have role in protein import into peroxisome matrix and cytosol, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02134g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02134g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I02508g').qtip({
                  content: "<h2>CAGL0I02508g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have copper ion transmembrane transporter activity and role in cellular copper ion homeostasis, copper ion import, protein maturation by copper ion transfer</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02508g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02508g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I04004g').qtip({
                  content: "<h2>CAGL0I04004g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04004g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04004g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I04686g').qtip({
                  content: "<h2>CAGL0I04686g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATPase activity, proton-transporting ATP synthase activity, rotational mechanism, proton-transporting ATPase activity, rotational mechanism activity and role in ATP synthesis coupled proton transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04686g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04686g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I06743g').qtip({
                  content: "<h2>CAGL0I06743g</h2><hr><p><b>Gene name</b> : FTR1</p><p><b>Description</b> : Putative ferrous iron transmembrane transporter involved in iron uptake</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I06743g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I06743g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I07969g').qtip({
                  content: "<h2>CAGL0I07969g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ATP synthesis coupled proton transport, protein complex oligomerization and mitochondrial proton-transporting ATP synthase complex, coupling factor F(o), plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I07969g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I07969g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I09086g').qtip({
                  content: "<h2>CAGL0I09086g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in transmembrane transport and integral component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09086g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09086g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I09702g').qtip({
                  content: "<h2>CAGL0I09702g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have riboflavin transmembrane transporter activity, role in riboflavin transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09702g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09702g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I09724g').qtip({
                  content: "<h2>CAGL0I09724g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in transmembrane transport and integral component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09724g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09724g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I10010g').qtip({
                  content: "<h2>CAGL0I10010g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have SNARE binding, chaperone binding activity and role in amino acid transport, intracellular protein transport, protein folding, protein localization to nucleus, regulation of pH, retrograde transport, endosome to Golgi</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10010g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10010g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I10384g').qtip({
                  content: "<h2>CAGL0I10384g</h2><hr><p><b>Gene name</b> : TPO3</p><p><b>Description</b> : Predicted polyamine transporter of the major facilitator superfamily; required for azole resistance</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10384g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10384g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I10747g').qtip({
                  content: "<h2>CAGL0I10747g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ammonium transmembrane transporter activity, role in ammonium transport, nitrogen utilization and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10747g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10747g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J00363g').qtip({
                  content: "<h2>CAGL0J00363g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein of major facilitator superfamily; gene is downregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J00363g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J00363g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J07980g').qtip({
                  content: "<h2>CAGL0J07980g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have copper chaperone activity and role in cellular copper ion homeostasis, cellular iron ion homeostasis, cellular response to oxidative stress, copper ion transport, regulation of iron ion transmembrane transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J07980g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J07980g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J09944g').qtip({
                  content: "<h2>CAGL0J09944g</h2><hr><p><b>Gene name</b> : AQR1</p><p><b>Description</b> : Plasma membrane drug:H+ antiporter involved in resistance to drugs and acetic acid</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09944g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09944g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K00715g').qtip({
                  content: "<h2>CAGL0K00715g</h2><hr><p><b>Gene name</b> : RTA1</p><p><b>Description</b> : Putative protein involved in 7-aminocholesterol resistance; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K00715g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K00715g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K01749g').qtip({
                  content: "<h2>CAGL0K01749g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have lipid binding, sterol transfer activity and role in ER to Golgi ceramide transport, endocytosis, exocytosis, maintenance of cell polarity, piecemeal microautophagy of the nucleus, sterol transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K01749g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K01749g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K04367g').qtip({
                  content: "<h2>CAGL0K04367g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-methionine secondary active transmembrane transporter activity, role in methionine import across plasma membrane, sulfur amino acid transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04367g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04367g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K04851g').qtip({
                  content: "<h2>CAGL0K04851g</h2><hr><p><b>Gene name</b> : PEX17</p><p><b>Description</b> : Ortholog(s) have role in protein import into peroxisome matrix, docking and Pex17p-Pex14p docking complex, peroxisomal importomer complex, peroxisomal membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04851g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04851g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K05753g').qtip({
                  content: "<h2>CAGL0K05753g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-proline transmembrane transporter activity, amino acid transmembrane transporter activity and role in amino acid transport, transmembrane transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K05753g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K05753g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K07436g').qtip({
                  content: "<h2>CAGL0K07436g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA binding, tricarboxylate secondary active transmembrane transporter activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07436g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07436g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K08206g').qtip({
                  content: "<h2>CAGL0K08206g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08206g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08206g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K09988g').qtip({
                  content: "<h2>CAGL0K09988g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in vesicle-mediated transport and integral component of Golgi membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K09988g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K09988g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K10362g').qtip({
                  content: "<h2>CAGL0K10362g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-ornithine transmembrane transporter activity, role in arginine biosynthetic process, mitochondrial L-ornithine transmembrane transport and mitochondrial envelope localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10362g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10362g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K11616g').qtip({
                  content: "<h2>CAGL0K11616g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative mitochondrial inner membrane transporter; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K11616g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K11616g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L02079g').qtip({
                  content: "<h2>CAGL0L02079g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have tricarboxylate secondary active transmembrane transporter activity, role in mitochondrial citrate transmembrane transport, transmembrane transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L02079g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L02079g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L03267g').qtip({
                  content: "<h2>CAGL0L03267g</h2><hr><p><b>Gene name</b> : GAP1</p><p><b>Description</b> : Ortholog(s) have L-proline transmembrane transporter activity, amino acid transmembrane transporter activity, beta-alanine transmembrane transporter activity, polyamine transmembrane transporter activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03267g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03267g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L05742g').qtip({
                  content: "<h2>CAGL0L05742g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have iron ion transmembrane transporter activity, role in iron import into the mitochondrion and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L05742g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L05742g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L07546g').qtip({
                  content: "<h2>CAGL0L07546g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have amino acid transmembrane transporter activity and role in amino acid transport, transmembrane transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L07546g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L07546g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L10868g').qtip({
                  content: "<h2>CAGL0L10868g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10868g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10868g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L12936g').qtip({
                  content: "<h2>CAGL0L12936g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in protein targeting to mitochondrion and integral component of mitochondrial outer membrane, mitochondrial outer membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L12936g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L12936g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L13354g').qtip({
                  content: "<h2>CAGL0L13354g</h2><hr><p><b>Gene name</b> : TNR1</p><p><b>Description</b> : Putative nicotinamide transporter; strongly induced under niacin-limiting conditions</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L13354g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L13354g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M02387g').qtip({
                  content: "<h2>CAGL0M02387g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATPase-coupled transmembrane transporter activity, role in fatty acid transport and integral component of peroxisomal membrane, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M02387g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M02387g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M03003g').qtip({
                  content: "<h2>CAGL0M03003g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in borate transmembrane transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M03003g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M03003g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M05511g').qtip({
                  content: "<h2>CAGL0M05511g</h2><hr><p><b>Gene name</b> : FTH1</p><p><b>Description</b> : Has domain(s) with predicted iron ion transmembrane transporter activity, role in iron ion transmembrane transport and high-affinity iron permease complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M05511g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M05511g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M06457g').qtip({
                  content: "<h2>CAGL0M06457g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have calcium ion transmembrane transporter activity, manganese ion transmembrane transporter activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M06457g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M06457g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M08602g').qtip({
                  content: "<h2>CAGL0M08602g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATPase-coupled cation transmembrane transporter activity, copper ion binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M08602g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M08602g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M09020g').qtip({
                  content: "<h2>CAGL0M09020g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have succinate:fumarate antiporter activity, role in acetate catabolic process, carbon utilization, fatty acid catabolic process, fumarate transport, succinate transport and mitochondrion, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M09020g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M09020g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M09581g').qtip({
                  content: "<h2>CAGL0M09581g</h2><hr><p><b>Gene name</b> : ATP1</p><p><b>Description</b> : F1F0-ATPase complex, F1 alpha subunit</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M09581g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M09581g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
