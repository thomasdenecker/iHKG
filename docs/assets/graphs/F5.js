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
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A03102g</h2><hr><p><b>Gene name</b> : ARO10</p><p><b>Description</b> : Ortholog(s) have carboxy-lyase activity, phenylpyruvate decarboxylase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03102g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03102g'  target='_blank'> Link to GRYC</a>",
                  x : 13.7669380853481,
                  y : 25.323178676244
                  },
                  position : {
                  'x' : 137.669380853481,
                  'y' : 253.23178676244
                  },
  },
{
                  data: {
                  id: 'CAGL0B01122g',
                  name: 'CAGL0B01122g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B01122g</h2><hr><p><b>Gene name</b> : SAM1</p><p><b>Description</b> : S-adenosylmethionine synthetase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B01122g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B01122g'  target='_blank'> Link to GRYC</a>",
                  x : 11.5160660485286,
                  y : 20.3568025556677
                  },
                  position : {
                  'x' : 115.160660485286,
                  'y' : 203.568025556677
                  },
  },
{
                  data: {
                  id: 'CAGL0B02717g',
                  name: 'CAGL0B02717g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B02717g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in acetate catabolic process, carbon utilization and cytoplasm, extracellular region, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02717g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02717g'  target='_blank'> Link to GRYC</a>",
                  x : 10.8285658355219,
                  y : 20.1107869141518
                  },
                  position : {
                  'x' : 108.285658355219,
                  'y' : 201.107869141518
                  },
  },
{
                  data: {
                  id: 'CAGL0C02035g',
                  name: 'CAGL0C02035g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C02035g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have metallodipeptidase activity, omega peptidase activity, role in glutathione catabolic process and cytoplasm, fungal biofilm matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C02035g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C02035g'  target='_blank'> Link to GRYC</a>",
                  x : 12.8182716802784,
                  y : 20.1005035722051
                  },
                  position : {
                  'x' : 128.182716802784,
                  'y' : 201.005035722051
                  },
  },
{
                  data: {
                  id: 'CAGL0C03630g',
                  name: 'CAGL0C03630g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C03630g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have diphosphomevalonate decarboxylase activity and role in isopentenyl diphosphate biosynthetic process, mevalonate pathway, sterol biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03630g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03630g'  target='_blank'> Link to GRYC</a>",
                  x : 10.2093060784499,
                  y : 20.6251753622359
                  },
                  position : {
                  'x' : 102.093060784499,
                  'y' : 206.251753622359
                  },
  },
{
                  data: {
                  id: 'CAGL0D05280g',
                  name: 'CAGL0D05280g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D05280g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have sulfite reductase (NADPH) activity, role in sulfate assimilation and sulfite reductase complex (NADPH) localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D05280g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D05280g'  target='_blank'> Link to GRYC</a>",
                  x : 10.4897130046611,
                  y : 24.7962043701268
                  },
                  position : {
                  'x' : 104.897130046611,
                  'y' : 247.962043701268
                  },
  },
{
                  data: {
                  id: 'CAGL0D06402g',
                  name: 'CAGL0D06402g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D06402g</h2><hr><p><b>Gene name</b> : MET15</p><p><b>Description</b> : O-acetyl homoserine sulfhydrylase (OAHSH), ortholog of S. cerevisiae MET17; required for utilization of inorganic sulfate as sulfur source; able to utilize cystine as a sulfur source while S. cerevisiae met15 mutants are unable to do so</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D06402g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D06402g'  target='_blank'> Link to GRYC</a>",
                  x : 9.58935849049412,
                  y : 24.9166199339133
                  },
                  position : {
                  'x' : 95.8935849049412,
                  'y' : 249.166199339133
                  },
  },
{
                  data: {
                  id: 'CAGL0E01287g',
                  name: 'CAGL0E01287g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0E01287g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in 2-oxoglutarate metabolic process, mitochondrial genome maintenance and mitochondrial nucleoid, mitochondrial oxoglutarate dehydrogenase complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01287g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01287g'  target='_blank'> Link to GRYC</a>",
                  x : 14.9927902235092,
                  y : 24.6537737207059
                  },
                  position : {
                  'x' : 149.927902235092,
                  'y' : 246.537737207059
                  },
  },
{
                  data: {
                  id: 'CAGL0F03861g',
                  name: 'CAGL0F03861g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F03861g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have mevalonate kinase activity and role in ergosterol biosynthetic process, farnesyl diphosphate biosynthetic process, mevalonate pathway, isopentenyl diphosphate biosynthetic process, mevalonate pathway</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F03861g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F03861g'  target='_blank'> Link to GRYC</a>",
                  x : 10.5168606936037,
                  y : 19.6715426244544
                  },
                  position : {
                  'x' : 105.168606936037,
                  'y' : 196.715426244544
                  },
  },
{
                  data: {
                  id: 'CAGL0F03993g',
                  name: 'CAGL0F03993g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F03993g</h2><hr><p><b>Gene name</b> : ERG8</p><p><b>Description</b> : Ortholog(s) have phosphomevalonate kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F03993g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F03993g'  target='_blank'> Link to GRYC</a>",
                  x : 11.0030492322796,
                  y : 20.7805889776863
                  },
                  position : {
                  'x' : 110.030492322796,
                  'y' : 207.805889776863
                  },
  },
{
                  data: {
                  id: 'CAGL0F07029g',
                  name: 'CAGL0F07029g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F07029g</h2><hr><p><b>Gene name</b> : MET13</p><p><b>Description</b> : Ortholog(s) have methylenetetrahydrofolate reductase (NAD(P)H) activity and role in methionine biosynthetic process, one-carbon metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F07029g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F07029g'  target='_blank'> Link to GRYC</a>",
                  x : 12.6399908589405,
                  y : 23.6250069238802
                  },
                  position : {
                  'x' : 126.399908589405,
                  'y' : 236.250069238802
                  },
  },
{
                  data: {
                  id: 'CAGL0G03905g',
                  name: 'CAGL0G03905g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G03905g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 2 iron, 2 sulfur cluster binding, iron ion binding, iron-sulfur cluster binding, iron-sulfur transferase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G03905g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G03905g'  target='_blank'> Link to GRYC</a>",
                  x : 13.8488021319671,
                  y : 19.9428019349688
                  },
                  position : {
                  'x' : 138.488021319671,
                  'y' : 199.428019349688
                  },
  },
{
                  data: {
                  id: 'CAGL0I01276g',
                  name: 'CAGL0I01276g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I01276g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytoplasm, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01276g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01276g'  target='_blank'> Link to GRYC</a>",
                  x : 9.74061758807727,
                  y : 24.001203683553
                  },
                  position : {
                  'x' : 97.4061758807727,
                  'y' : 240.01203683553
                  },
  },
{
                  data: {
                  id: 'CAGL0I04994g',
                  name: 'CAGL0I04994g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I04994g</h2><hr><p><b>Gene name</b> : MET6</p><p><b>Description</b> : 5-methyltetrahydropteroyltriglutamate homocysteine methyltransferase; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04994g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04994g'  target='_blank'> Link to GRYC</a>",
                  x : 13.3146611187394,
                  y : 23.0621752138633
                  },
                  position : {
                  'x' : 133.146611187394,
                  'y' : 230.621752138633
                  },
  },
{
                  data: {
                  id: 'CAGL0I08503g',
                  name: 'CAGL0I08503g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I08503g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphoadenylyl-sulfate reductase (thioredoxin) activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I08503g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I08503g'  target='_blank'> Link to GRYC</a>",
                  x : 8.5379214827231,
                  y : 22.3477951494661
                  },
                  position : {
                  'x' : 85.379214827231,
                  'y' : 223.477951494661
                  },
  },
{
                  data: {
                  id: 'CAGL0J00649g',
                  name: 'CAGL0J00649g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J00649g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have homoserine kinase activity and role in homoserine metabolic process, threonine biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J00649g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J00649g'  target='_blank'> Link to GRYC</a>",
                  x : 11.8947449437913,
                  y : 19.826911106233
                  },
                  position : {
                  'x' : 118.947449437913,
                  'y' : 198.26911106233
                  },
  },
{
                  data: {
                  id: 'CAGL0J02112g',
                  name: 'CAGL0J02112g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J02112g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 4 iron, 4 sulfur cluster binding, ATPase activity, role in iron-sulfur cluster assembly, tRNA wobble uridine modification and Nbp35-Cfd1 ATPase complex, cytoplasm localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J02112g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J02112g'  target='_blank'> Link to GRYC</a>",
                  x : 15.1832822199144,
                  y : 23.3071812390404
                  },
                  position : {
                  'x' : 151.832822199144,
                  'y' : 233.071812390404
                  },
  },
{
                  data: {
                  id: 'CAGL0J04268g',
                  name: 'CAGL0J04268g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J04268g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have CoA-transferase activity, acetate CoA-transferase activity, hydrolase activity, acting on ester bonds activity, role in propionate metabolic process, methylcitrate cycle and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04268g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04268g'  target='_blank'> Link to GRYC</a>",
                  x : 12.5978490137885,
                  y : 26.0948485571184
                  },
                  position : {
                  'x' : 125.978490137885,
                  'y' : 260.948485571184
                  },
  },
{
                  data: {
                  id: 'CAGL0K06677g',
                  name: 'CAGL0K06677g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K06677g</h2><hr><p><b>Gene name</b> : MET8</p><p><b>Description</b> : Putative bifunctional dehydrogenase and ferrochelatase; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K06677g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K06677g'  target='_blank'> Link to GRYC</a>",
                  x : 11.2028640994399,
                  y : 25.4961220818609
                  },
                  position : {
                  'x' : 112.028640994399,
                  'y' : 254.961220818609
                  },
  },
{
                  data: {
                  id: 'CAGL0L00649g',
                  name: 'CAGL0L00649g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L00649g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Acetyl-coenzyme A synthetase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L00649g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L00649g'  target='_blank'> Link to GRYC</a>",
                  x : 15.1375416146676,
                  y : 20.7790464784925
                  },
                  position : {
                  'x' : 151.375416146676,
                  'y' : 207.790464784925
                  },
  },
{
                  data: {
                  id: 'CAGL0L02321g',
                  name: 'CAGL0L02321g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L02321g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have adenylylsulfate kinase activity and role in sulfate assimilation, sulfate assimilation, phosphoadenylyl sulfate reduction by phosphoadenylyl-sulfate reductase (thioredoxin), sulfur amino acid metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L02321g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L02321g'  target='_blank'> Link to GRYC</a>",
                  x : 9.06806636220808,
                  y : 23.1453903606885
                  },
                  position : {
                  'x' : 90.6806636220808,
                  'y' : 231.453903606885
                  },
  },
{
                  data: {
                  id: 'CAGL0L06094g',
                  name: 'CAGL0L06094g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L06094g</h2><hr><p><b>Gene name</b> : STR3</p><p><b>Description</b> : Putative cystathionine beta-lyase; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06094g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06094g'  target='_blank'> Link to GRYC</a>",
                  x : 15.4887970636282,
                  y : 22.0768007350251
                  },
                  position : {
                  'x' : 154.887970636282,
                  'y' : 220.768007350251
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
