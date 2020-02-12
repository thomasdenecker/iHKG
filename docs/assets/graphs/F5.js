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
                  id: 'CAGL0A03102g',
                  name: 'CAGL0A03102g',
                  gene: 'ARO10',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A03102g</h2><hr><p><b>Gene name</b> : ARO10</p><p><b>Description</b> : Ortholog(s) have carboxy-lyase activity, phenylpyruvate decarboxylase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03102g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03102g'  target='_blank'> Link to GRYC</a>",
                  x : 18.8348476726908,
                  y : 17.5110451554532
                  },
                  position : {
                  'x' : 188.348476726908,
                  'y' : 175.110451554532
                  },
  },
{
                  data: {
                  id: 'CAGL0B01122g',
                  name: 'CAGL0B01122g',
                  gene: 'SAM1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B01122g</h2><hr><p><b>Gene name</b> : SAM1</p><p><b>Description</b> : S-adenosylmethionine synthetase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B01122g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B01122g'  target='_blank'> Link to GRYC</a>",
                  x : 15.8112895890891,
                  y : 12.7552571003034
                  },
                  position : {
                  'x' : 158.112895890891,
                  'y' : 127.552571003034
                  },
  },
{
                  data: {
                  id: 'CAGL0B02717g',
                  name: 'CAGL0B02717g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B02717g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in acetate catabolic process, carbon utilization and cytoplasm, extracellular region, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02717g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02717g'  target='_blank'> Link to GRYC</a>",
                  x : 14.8252798932388,
                  y : 12.3040922427845
                  },
                  position : {
                  'x' : 148.252798932388,
                  'y' : 123.040922427845
                  },
  },
{
                  data: {
                  id: 'CAGL0C02035g',
                  name: 'CAGL0C02035g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C02035g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have metallodipeptidase activity, omega peptidase activity, role in glutathione catabolic process and cytoplasm, fungal biofilm matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C02035g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C02035g'  target='_blank'> Link to GRYC</a>",
                  x : 16.0960720851929,
                  y : 13.906779333382
                  },
                  position : {
                  'x' : 160.960720851929,
                  'y' : 139.06779333382
                  },
  },
{
                  data: {
                  id: 'CAGL0C03630g',
                  name: 'CAGL0C03630g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C03630g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have diphosphomevalonate decarboxylase activity and role in isopentenyl diphosphate biosynthetic process, mevalonate pathway, sterol biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03630g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03630g'  target='_blank'> Link to GRYC</a>",
                  x : 15.3801302278748,
                  y : 11.5348121618353
                  },
                  position : {
                  'x' : 153.801302278748,
                  'y' : 115.348121618353
                  },
  },
{
                  data: {
                  id: 'CAGL0D05280g',
                  name: 'CAGL0D05280g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D05280g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have sulfite reductase (NADPH) activity, role in sulfate assimilation and sulfite reductase complex (NADPH) localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D05280g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D05280g'  target='_blank'> Link to GRYC</a>",
                  x : 14.8812706151314,
                  y : 17.365735195085
                  },
                  position : {
                  'x' : 148.812706151314,
                  'y' : 173.65735195085
                  },
  },
{
                  data: {
                  id: 'CAGL0D06402g',
                  name: 'CAGL0D06402g',
                  gene: 'MET15',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D06402g</h2><hr><p><b>Gene name</b> : MET15</p><p><b>Description</b> : O-acetyl homoserine sulfhydrylase (OAHSH), ortholog of S. cerevisiae MET17; required for utilization of inorganic sulfate as sulfur source; able to utilize cystine as a sulfur source while S. cerevisiae met15 mutants are unable to do so</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D06402g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D06402g'  target='_blank'> Link to GRYC</a>",
                  x : 15.143257687887,
                  y : 16.5078096177981
                  },
                  position : {
                  'x' : 151.43257687887,
                  'y' : 165.078096177981
                  },
  },
{
                  data: {
                  id: 'CAGL0E01287g',
                  name: 'CAGL0E01287g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0E01287g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in 2-oxoglutarate metabolic process, mitochondrial genome maintenance and mitochondrial nucleoid, mitochondrial oxoglutarate dehydrogenase complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01287g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01287g'  target='_blank'> Link to GRYC</a>",
                  x : 19.8160352307701,
                  y : 16.1730983816728
                  },
                  position : {
                  'x' : 198.160352307701,
                  'y' : 161.730983816728
                  },
  },
{
                  data: {
                  id: 'CAGL0F03861g',
                  name: 'CAGL0F03861g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F03861g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have mevalonate kinase activity and role in ergosterol biosynthetic process, farnesyl diphosphate biosynthetic process, mevalonate pathway, isopentenyl diphosphate biosynthetic process, mevalonate pathway</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F03861g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F03861g'  target='_blank'> Link to GRYC</a>",
                  x : 16.0855954115313,
                  y : 11.8354004240653
                  },
                  position : {
                  'x' : 160.855954115313,
                  'y' : 118.354004240653
                  },
  },
{
                  data: {
                  id: 'CAGL0F03993g',
                  name: 'CAGL0F03993g',
                  gene: 'ERG8',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F03993g</h2><hr><p><b>Gene name</b> : ERG8</p><p><b>Description</b> : Ortholog(s) have phosphomevalonate kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F03993g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F03993g'  target='_blank'> Link to GRYC</a>",
                  x : 15.3889340833019,
                  y : 12.2779120695637
                  },
                  position : {
                  'x' : 153.889340833019,
                  'y' : 122.779120695637
                  },
  },
{
                  data: {
                  id: 'CAGL0F07029g',
                  name: 'CAGL0F07029g',
                  gene: 'MET13',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F07029g</h2><hr><p><b>Gene name</b> : MET13</p><p><b>Description</b> : Ortholog(s) have methylenetetrahydrofolate reductase (NAD(P)H) activity and role in methionine biosynthetic process, one-carbon metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F07029g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F07029g'  target='_blank'> Link to GRYC</a>",
                  x : 19.2084702049239,
                  y : 12.8177538749541
                  },
                  position : {
                  'x' : 192.084702049239,
                  'y' : 128.177538749541
                  },
  },
{
                  data: {
                  id: 'CAGL0G03905g',
                  name: 'CAGL0G03905g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G03905g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 2 iron, 2 sulfur cluster binding, iron ion binding, iron-sulfur cluster binding, iron-sulfur transferase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G03905g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G03905g'  target='_blank'> Link to GRYC</a>",
                  x : 16.9991981401324,
                  y : 14.5444479599411
                  },
                  position : {
                  'x' : 169.991981401324,
                  'y' : 145.444479599411
                  },
  },
{
                  data: {
                  id: 'CAGL0I01276g',
                  name: 'CAGL0I01276g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I01276g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytoplasm, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01276g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01276g'  target='_blank'> Link to GRYC</a>",
                  x : 14.1845093236338,
                  y : 16.5569541707079
                  },
                  position : {
                  'x' : 141.845093236338,
                  'y' : 165.569541707079
                  },
  },
{
                  data: {
                  id: 'CAGL0I04994g',
                  name: 'CAGL0I04994g',
                  gene: 'MET6',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I04994g</h2><hr><p><b>Gene name</b> : MET6</p><p><b>Description</b> : 5-methyltetrahydropteroyltriglutamate homocysteine methyltransferase; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04994g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04994g'  target='_blank'> Link to GRYC</a>",
                  x : 18.7388059852085,
                  y : 12.0863312131776
                  },
                  position : {
                  'x' : 187.388059852085,
                  'y' : 120.863312131776
                  },
  },
{
                  data: {
                  id: 'CAGL0I08503g',
                  name: 'CAGL0I08503g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I08503g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphoadenylyl-sulfate reductase (thioredoxin) activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I08503g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I08503g'  target='_blank'> Link to GRYC</a>",
                  x : 12.9824018948914,
                  y : 14.8886367362476
                  },
                  position : {
                  'x' : 129.824018948914,
                  'y' : 148.886367362476
                  },
  },
{
                  data: {
                  id: 'CAGL0J00649g',
                  name: 'CAGL0J00649g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J00649g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have homoserine kinase activity and role in homoserine metabolic process, threonine biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J00649g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J00649g'  target='_blank'> Link to GRYC</a>",
                  x : 15.081604920193,
                  y : 13.3246325753513
                  },
                  position : {
                  'x' : 150.81604920193,
                  'y' : 133.246325753513
                  },
  },
{
                  data: {
                  id: 'CAGL0J02112g',
                  name: 'CAGL0J02112g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J02112g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 4 iron, 4 sulfur cluster binding, ATPase activity, role in iron-sulfur cluster assembly, tRNA wobble uridine modification and Nbp35-Cfd1 ATPase complex, cytoplasm localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J02112g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J02112g'  target='_blank'> Link to GRYC</a>",
                  x : 17.3340023092699,
                  y : 18.1702647072338
                  },
                  position : {
                  'x' : 173.340023092699,
                  'y' : 181.702647072338
                  },
  },
{
                  data: {
                  id: 'CAGL0J04268g',
                  name: 'CAGL0J04268g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J04268g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have CoA-transferase activity, acetate CoA-transferase activity, hydrolase activity, acting on ester bonds activity, role in propionate metabolic process, methylcitrate cycle and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04268g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04268g'  target='_blank'> Link to GRYC</a>",
                  x : 18.9374975041643,
                  y : 14.921444432732
                  },
                  position : {
                  'x' : 189.374975041643,
                  'y' : 149.21444432732
                  },
  },
{
                  data: {
                  id: 'CAGL0K06677g',
                  name: 'CAGL0K06677g',
                  gene: 'MET8',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K06677g</h2><hr><p><b>Gene name</b> : MET8</p><p><b>Description</b> : Putative bifunctional dehydrogenase and ferrochelatase; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K06677g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K06677g'  target='_blank'> Link to GRYC</a>",
                  x : 15.5736092113503,
                  y : 18.0815966958052
                  },
                  position : {
                  'x' : 155.736092113503,
                  'y' : 180.815966958052
                  },
  },
{
                  data: {
                  id: 'CAGL0L00649g',
                  name: 'CAGL0L00649g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L00649g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Acetyl-coenzyme A synthetase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L00649g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L00649g'  target='_blank'> Link to GRYC</a>",
                  x : 20.1760537075329,
                  y : 14.2313010608754
                  },
                  position : {
                  'x' : 201.760537075329,
                  'y' : 142.313010608754
                  },
  },
{
                  data: {
                  id: 'CAGL0L02321g',
                  name: 'CAGL0L02321g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L02321g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have adenylylsulfate kinase activity and role in sulfate assimilation, sulfate assimilation, phosphoadenylyl sulfate reduction by phosphoadenylyl-sulfate reductase (thioredoxin), sulfur amino acid metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L02321g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L02321g'  target='_blank'> Link to GRYC</a>",
                  x : 13.4007106085896,
                  y : 15.7771768369755
                  },
                  position : {
                  'x' : 134.007106085896,
                  'y' : 157.771768369755
                  },
  },
{
                  data: {
                  id: 'CAGL0L06094g',
                  name: 'CAGL0L06094g',
                  gene: 'STR3',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L06094g</h2><hr><p><b>Gene name</b> : STR3</p><p><b>Description</b> : Putative cystathionine beta-lyase; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06094g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06094g'  target='_blank'> Link to GRYC</a>",
                  x : 17.7325286926829,
                  y : 16.4802929902066
                  },
                  position : {
                  'x' : 177.325286926829,
                  'y' : 164.802929902066
                  },
  },
{
                  data: {
                  source: 'CAGL0B02717g',
                  target: 'CAGL0B01122g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C02035g',
                  target: 'CAGL0B01122g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C03630g',
                  target: 'CAGL0B01122g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03861g',
                  target: 'CAGL0B01122g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03993g',
                  target: 'CAGL0B01122g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00649g',
                  target: 'CAGL0B01122g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C03630g',
                  target: 'CAGL0B02717g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03861g',
                  target: 'CAGL0B02717g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03993g',
                  target: 'CAGL0B02717g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00649g',
                  target: 'CAGL0B02717g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G03905g',
                  target: 'CAGL0C02035g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00649g',
                  target: 'CAGL0C02035g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03861g',
                  target: 'CAGL0C03630g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03993g',
                  target: 'CAGL0C03630g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D06402g',
                  target: 'CAGL0D05280g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01276g',
                  target: 'CAGL0D05280g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06677g',
                  target: 'CAGL0D05280g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01276g',
                  target: 'CAGL0D06402g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03993g',
                  target: 'CAGL0F03861g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00649g',
                  target: 'CAGL0F03993g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04994g',
                  target: 'CAGL0F07029g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02321g',
                  target: 'CAGL0I01276g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02321g',
                  target: 'CAGL0I08503g',
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
cy.$('#CAGL0A03102g').qtip({
                  content: "<h2>CAGL0A03102g</h2><hr><p><b>Gene name</b> : ARO10</p><p><b>Description</b> : Ortholog(s) have carboxy-lyase activity, phenylpyruvate decarboxylase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03102g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03102g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0B01122g').qtip({
                  content: "<h2>CAGL0B01122g</h2><hr><p><b>Gene name</b> : SAM1</p><p><b>Description</b> : S-adenosylmethionine synthetase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B01122g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B01122g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0B02717g').qtip({
                  content: "<h2>CAGL0B02717g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in acetate catabolic process, carbon utilization and cytoplasm, extracellular region, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02717g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02717g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C02035g').qtip({
                  content: "<h2>CAGL0C02035g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have metallodipeptidase activity, omega peptidase activity, role in glutathione catabolic process and cytoplasm, fungal biofilm matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C02035g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C02035g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C03630g').qtip({
                  content: "<h2>CAGL0C03630g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have diphosphomevalonate decarboxylase activity and role in isopentenyl diphosphate biosynthetic process, mevalonate pathway, sterol biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03630g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03630g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D05280g').qtip({
                  content: "<h2>CAGL0D05280g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have sulfite reductase (NADPH) activity, role in sulfate assimilation and sulfite reductase complex (NADPH) localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D05280g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D05280g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D06402g').qtip({
                  content: "<h2>CAGL0D06402g</h2><hr><p><b>Gene name</b> : MET15</p><p><b>Description</b> : O-acetyl homoserine sulfhydrylase (OAHSH), ortholog of S. cerevisiae MET17; required for utilization of inorganic sulfate as sulfur source; able to utilize cystine as a sulfur source while S. cerevisiae met15 mutants are unable to do so</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D06402g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D06402g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E01287g').qtip({
                  content: "<h2>CAGL0E01287g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in 2-oxoglutarate metabolic process, mitochondrial genome maintenance and mitochondrial nucleoid, mitochondrial oxoglutarate dehydrogenase complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01287g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01287g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F03861g').qtip({
                  content: "<h2>CAGL0F03861g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have mevalonate kinase activity and role in ergosterol biosynthetic process, farnesyl diphosphate biosynthetic process, mevalonate pathway, isopentenyl diphosphate biosynthetic process, mevalonate pathway</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F03861g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F03861g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F03993g').qtip({
                  content: "<h2>CAGL0F03993g</h2><hr><p><b>Gene name</b> : ERG8</p><p><b>Description</b> : Ortholog(s) have phosphomevalonate kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F03993g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F03993g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F07029g').qtip({
                  content: "<h2>CAGL0F07029g</h2><hr><p><b>Gene name</b> : MET13</p><p><b>Description</b> : Ortholog(s) have methylenetetrahydrofolate reductase (NAD(P)H) activity and role in methionine biosynthetic process, one-carbon metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F07029g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F07029g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G03905g').qtip({
                  content: "<h2>CAGL0G03905g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 2 iron, 2 sulfur cluster binding, iron ion binding, iron-sulfur cluster binding, iron-sulfur transferase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G03905g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G03905g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I01276g').qtip({
                  content: "<h2>CAGL0I01276g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytoplasm, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01276g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01276g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I04994g').qtip({
                  content: "<h2>CAGL0I04994g</h2><hr><p><b>Gene name</b> : MET6</p><p><b>Description</b> : 5-methyltetrahydropteroyltriglutamate homocysteine methyltransferase; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04994g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04994g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I08503g').qtip({
                  content: "<h2>CAGL0I08503g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphoadenylyl-sulfate reductase (thioredoxin) activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I08503g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I08503g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J00649g').qtip({
                  content: "<h2>CAGL0J00649g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have homoserine kinase activity and role in homoserine metabolic process, threonine biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J00649g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J00649g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J02112g').qtip({
                  content: "<h2>CAGL0J02112g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 4 iron, 4 sulfur cluster binding, ATPase activity, role in iron-sulfur cluster assembly, tRNA wobble uridine modification and Nbp35-Cfd1 ATPase complex, cytoplasm localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J02112g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J02112g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J04268g').qtip({
                  content: "<h2>CAGL0J04268g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have CoA-transferase activity, acetate CoA-transferase activity, hydrolase activity, acting on ester bonds activity, role in propionate metabolic process, methylcitrate cycle and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04268g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04268g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K06677g').qtip({
                  content: "<h2>CAGL0K06677g</h2><hr><p><b>Gene name</b> : MET8</p><p><b>Description</b> : Putative bifunctional dehydrogenase and ferrochelatase; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K06677g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K06677g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L00649g').qtip({
                  content: "<h2>CAGL0L00649g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Acetyl-coenzyme A synthetase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L00649g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L00649g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L02321g').qtip({
                  content: "<h2>CAGL0L02321g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have adenylylsulfate kinase activity and role in sulfate assimilation, sulfate assimilation, phosphoadenylyl sulfate reduction by phosphoadenylyl-sulfate reductase (thioredoxin), sulfur amino acid metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L02321g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L02321g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L06094g').qtip({
                  content: "<h2>CAGL0L06094g</h2><hr><p><b>Gene name</b> : STR3</p><p><b>Description</b> : Putative cystathionine beta-lyase; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06094g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06094g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
