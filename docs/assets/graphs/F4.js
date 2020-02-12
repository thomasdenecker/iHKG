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
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A00737g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted transmembrane transporter activity, role in transmembrane transport and integral component of membrane, membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A00737g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A00737g'  target='_blank'> Link to GRYC</a>",
                  x : 2.33453287604255,
                  y : 4.4819429907054
                  },
                  position : {
                  'x' : 23.3453287604255,
                  'y' : 44.819429907054
                  },
  },
{
                  data: {
                  id: 'CAGL0A01199g',
                  name: 'CAGL0A01199g',
                  gene: 'DIP5',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0A01199g</h2><hr><p><b>Gene name</b> : DIP5</p><p><b>Description</b> : Putative dicarboxylic amino acid permease</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01199g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01199g'  target='_blank'> Link to GRYC</a>",
                  x : 7.38130490735778,
                  y : 2.18300569671459
                  },
                  position : {
                  'x' : 73.8130490735778,
                  'y' : 21.8300569671459
                  },
  },
{
                  data: {
                  id: 'CAGL0A01221g',
                  name: 'CAGL0A01221g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A01221g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted channel activity, role in transmembrane transport and membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01221g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01221g'  target='_blank'> Link to GRYC</a>",
                  x : 9.94859928097214,
                  y : 6.56214730269399
                  },
                  position : {
                  'x' : 99.4859928097214,
                  'y' : 65.6214730269399
                  },
  },
{
                  data: {
                  id: 'CAGL0A01243g',
                  name: 'CAGL0A01243g',
                  gene: 'GIT1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A01243g</h2><hr><p><b>Gene name</b> : GIT1</p><p><b>Description</b> : Has domain(s) with predicted transmembrane transporter activity, role in transmembrane transport and integral component of membrane, integral component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01243g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01243g'  target='_blank'> Link to GRYC</a>",
                  x : 11.2612363534413,
                  y : 6.45455190903379
                  },
                  position : {
                  'x' : 112.612363534413,
                  'y' : 64.5455190903378
                  },
  },
{
                  data: {
                  id: 'CAGL0A01782g',
                  name: 'CAGL0A01782g',
                  gene: 'HXT4',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A01782g</h2><hr><p><b>Gene name</b> : HXT4</p><p><b>Description</b> : Ortholog(s) have glucose transmembrane transporter activity, pentose transmembrane transporter activity and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01782g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01782g'  target='_blank'> Link to GRYC</a>",
                  x : 2.55164392632663,
                  y : 4.02830324119524
                  },
                  position : {
                  'x' : 25.5164392632662,
                  'y' : 40.2830324119524
                  },
  },
{
                  data: {
                  id: 'CAGL0A01826g',
                  name: 'CAGL0A01826g',
                  gene: 'HXT5',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A01826g</h2><hr><p><b>Gene name</b> : HXT5</p><p><b>Description</b> : Ortholog(s) have glucose transmembrane transporter activity, role in glucose transmembrane transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01826g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01826g'  target='_blank'> Link to GRYC</a>",
                  x : 2.62313865009792,
                  y : 5.19743491288673
                  },
                  position : {
                  'x' : 26.2313865009792,
                  'y' : 51.9743491288673
                  },
  },
{
                  data: {
                  id: 'CAGL0A02211g',
                  name: 'CAGL0A02211g',
                  gene: 'HXT6/7',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A02211g</h2><hr><p><b>Gene name</b> : HXT6/7</p><p><b>Description</b> : Ortholog(s) have glucose transmembrane transporter activity, pentose transmembrane transporter activity, role in glucose transmembrane transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02211g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02211g'  target='_blank'> Link to GRYC</a>",
                  x : 3.10372519884629,
                  y : 3.8624725423019
                  },
                  position : {
                  'x' : 31.0372519884629,
                  'y' : 38.624725423019
                  },
  },
{
                  data: {
                  id: 'CAGL0A02233g',
                  name: 'CAGL0A02233g',
                  gene: 'HXT4/6/7',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A02233g</h2><hr><p><b>Gene name</b> : HXT4/6/7</p><p><b>Description</b> : Ortholog(s) have glucose transmembrane transporter activity and membrane, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02233g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02233g'  target='_blank'> Link to GRYC</a>",
                  x : 3.36480940109328,
                  y : 3.83393163191008
                  },
                  position : {
                  'x' : 33.6480940109329,
                  'y' : 38.3393163191008
                  },
  },
{
                  data: {
                  id: 'CAGL0A03476g',
                  name: 'CAGL0A03476g',
                  gene: 'SMF3',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A03476g</h2><hr><p><b>Gene name</b> : SMF3</p><p><b>Description</b> : Ortholog(s) have role in cellular iron ion homeostasis, iron ion transport and fungal-type vacuole membrane, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03476g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03476g'  target='_blank'> Link to GRYC</a>",
                  x : 4.42195063435321,
                  y : 3.86352253029812
                  },
                  position : {
                  'x' : 44.2195063435321,
                  'y' : 38.6352253029812
                  },
  },
{
                  data: {
                  id: 'CAGL0B00814g',
                  name: 'CAGL0B00814g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B00814g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in actin cortical patch localization, actin cytoskeleton organization, actin filament organization, endocytosis and actin cortical patch, cell cortex, cytoplasm localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B00814g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B00814g'  target='_blank'> Link to GRYC</a>",
                  x : 3.16400679012603,
                  y : 4.3424368371975
                  },
                  position : {
                  'x' : 31.6400679012603,
                  'y' : 43.424368371975
                  },
  },
{
                  data: {
                  id: 'CAGL0B01012g',
                  name: 'CAGL0B01012g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B01012g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-proline transmembrane transporter activity, amino acid transmembrane transporter activity, role in amino acid transport, transmembrane transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B01012g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B01012g'  target='_blank'> Link to GRYC</a>",
                  x : 8.76295625659824,
                  y : 1.17772060271486
                  },
                  position : {
                  'x' : 87.6295625659824,
                  'y' : 11.7772060271486
                  },
  },
{
                  data: {
                  id: 'CAGL0B01639g',
                  name: 'CAGL0B01639g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B01639g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have guanyl-nucleotide exchange factor activity and role in retrograde transport, endosome to Golgi</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B01639g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B01639g'  target='_blank'> Link to GRYC</a>",
                  x : 0.653576072876701,
                  y : 0.488702122459652
                  },
                  position : {
                  'x' : 6.53576072876701,
                  'y' : 4.88702122459652
                  },
  },
{
                  data: {
                  id: 'CAGL0B02838g',
                  name: 'CAGL0B02838g',
                  gene: 'MUP1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B02838g</h2><hr><p><b>Gene name</b> : MUP1</p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02838g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02838g'  target='_blank'> Link to GRYC</a>",
                  x : 1.8477011245497,
                  y : 4.380494669612
                  },
                  position : {
                  'x' : 18.477011245497,
                  'y' : 43.80494669612
                  },
  },
{
                  data: {
                  id: 'CAGL0B04433g',
                  name: 'CAGL0B04433g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B04433g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted nucleobase transmembrane transporter activity, transmembrane transporter activity, role in nucleobase transport, transmembrane transport and membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B04433g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B04433g'  target='_blank'> Link to GRYC</a>",
                  x : -0.199583912535499,
                  y : -0.54889939868596
                  },
                  position : {
                  'x' : -1.99583912535499,
                  'y' : -5.4889939868596
                  },
  },
{
                  data: {
                  id: 'CAGL0C01771g',
                  name: 'CAGL0C01771g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C01771g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have fungal-type vacuole membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C01771g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C01771g'  target='_blank'> Link to GRYC</a>",
                  x : 3.20032905164734,
                  y : 5.50344013890569
                  },
                  position : {
                  'x' : 32.0032905164734,
                  'y' : 55.0344013890569
                  },
  },
{
                  data: {
                  id: 'CAGL0C03267g',
                  name: 'CAGL0C03267g',
                  gene: 'FPS1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C03267g</h2><hr><p><b>Gene name</b> : FPS1</p><p><b>Description</b> : Glycerol transporter; involved in flucytosine resistance; double fps1/fps2 mutant accumulates glycerol, has constitutive cell wall stress, is hypersensitive to caspofungin in vitro and in vivo</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03267g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03267g'  target='_blank'> Link to GRYC</a>",
                  x : -0.450439205658266,
                  y : 1.09109110552273
                  },
                  position : {
                  'x' : -4.50439205658266,
                  'y' : 10.9109110552273
                  },
  },
{
                  data: {
                  id: 'CAGL0C05445g',
                  name: 'CAGL0C05445g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C05445g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in endocytosis</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C05445g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C05445g'  target='_blank'> Link to GRYC</a>",
                  x : 1.68561330409964,
                  y : 2.15148393660311
                  },
                  position : {
                  'x' : 16.8561330409964,
                  'y' : 21.5148393660311
                  },
  },
{
                  data: {
                  id: 'CAGL0D00352g',
                  name: 'CAGL0D00352g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D00352g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATPase-coupled transmembrane transporter activity, role in fatty acid transmembrane transport and integral component of peroxisomal membrane, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00352g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00352g'  target='_blank'> Link to GRYC</a>",
                  x : -0.155747361572912,
                  y : 3.66128927015185
                  },
                  position : {
                  'x' : -1.55747361572912,
                  'y' : 36.6128927015185
                  },
  },
{
                  data: {
                  id: 'CAGL0D00418g',
                  name: 'CAGL0D00418g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D00418g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in long-chain fatty acid transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00418g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00418g'  target='_blank'> Link to GRYC</a>",
                  x : 8.88787520051306,
                  y : 0.181167174050385
                  },
                  position : {
                  'x' : 88.8787520051306,
                  'y' : 1.81167174050385
                  },
  },
{
                  data: {
                  id: 'CAGL0D00704g',
                  name: 'CAGL0D00704g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D00704g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have endoplasmic reticulum, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00704g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00704g'  target='_blank'> Link to GRYC</a>",
                  x : 3.4506736769867,
                  y : 3.33019576269224
                  },
                  position : {
                  'x' : 34.506736769867,
                  'y' : 33.3019576269224
                  },
  },
{
                  data: {
                  id: 'CAGL0D02640g',
                  name: 'CAGL0D02640g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0D02640g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted transmembrane transporter activity, role in transmembrane transport and integral component of membrane, membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D02640g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D02640g'  target='_blank'> Link to GRYC</a>",
                  x : 7.12462662970974,
                  y : 3.52414968004642
                  },
                  position : {
                  'x' : 71.2462662970974,
                  'y' : 35.2414968004642
                  },
  },
{
                  data: {
                  id: 'CAGL0D02662g',
                  name: 'CAGL0D02662g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D02662g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted transmembrane transporter activity, role in transmembrane transport and integral component of membrane, membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D02662g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D02662g'  target='_blank'> Link to GRYC</a>",
                  x : 9.90554077938624,
                  y : 2.32124754435725
                  },
                  position : {
                  'x' : 99.0554077938624,
                  'y' : 23.2124754435725
                  },
  },
{
                  data: {
                  id: 'CAGL0D04708g',
                  name: 'CAGL0D04708g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffffff',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D04708g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have copper ion transmembrane transporter activity, role in copper ion import, copper ion transport, iron ion transmembrane transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D04708g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D04708g'  target='_blank'> Link to GRYC</a>",
                  x : 5.62627761863138,
                  y : 1.09571040196416
                  },
                  position : {
                  'x' : 56.2627761863138,
                  'y' : 10.9571040196416
                  },
  },
{
                  data: {
                  id: 'CAGL0E04092g',
                  name: 'CAGL0E04092g',
                  gene: 'SIT1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0E04092g</h2><hr><p><b>Gene name</b> : SIT1</p><p><b>Description</b> : Putative siderophore-iron transporter with 14 transmembrane domains; required for iron-dependent survival in macrophages; mRNA levels elevated under iron deficiency conditions; plasma membrane localized</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04092g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04092g'  target='_blank'> Link to GRYC</a>",
                  x : 1.93555704786294,
                  y : 10.2247508097703
                  },
                  position : {
                  'x' : 19.3555704786294,
                  'y' : 102.247508097703
                  },
  },
{
                  data: {
                  id: 'CAGL0E05346g',
                  name: 'CAGL0E05346g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E05346g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have fungal-type vacuole membrane, vacuolar proton-transporting V-type ATPase, V1 domain localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05346g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05346g'  target='_blank'> Link to GRYC</a>",
                  x : 4.01150986196974,
                  y : 2.09201398185219
                  },
                  position : {
                  'x' : 40.1150986196974,
                  'y' : 20.9201398185219
                  },
  },
{
                  data: {
                  id: 'CAGL0F00187g',
                  name: 'CAGL0F00187g',
                  gene: 'FET4',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#66ff66',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F00187g</h2><hr><p><b>Gene name</b> : FET4</p><p><b>Description</b> : Has domain(s) with predicted role in transmembrane transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00187g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00187g'  target='_blank'> Link to GRYC</a>",
                  x : 8.76652960329959,
                  y : 8.08435819715896
                  },
                  position : {
                  'x' : 87.6652960329959,
                  'y' : 80.8435819715896
                  },
  },
{
                  data: {
                  id: 'CAGL0F00209g',
                  name: 'CAGL0F00209g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F00209g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in transmembrane transport and integral component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00209g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00209g'  target='_blank'> Link to GRYC</a>",
                  x : 4.90079305155963,
                  y : 10.3493393310108
                  },
                  position : {
                  'x' : 49.0079305155963,
                  'y' : 103.493393310108
                  },
  },
{
                  data: {
                  id: 'CAGL0F00231g',
                  name: 'CAGL0F00231g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F00231g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have inorganic phosphate transmembrane transporter activity, role in phosphate ion transmembrane transport and integral component of mitochondrial inner membrane, mitochondrion, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00231g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00231g'  target='_blank'> Link to GRYC</a>",
                  x : 0.114950419978276,
                  y : -2.1321990490195
                  },
                  position : {
                  'x' : 1.14950419978276,
                  'y' : -21.321990490195
                  },
  },
{
                  data: {
                  id: 'CAGL0F01419g',
                  name: 'CAGL0F01419g',
                  gene: 'AUS1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#66ff66',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F01419g</h2><hr><p><b>Gene name</b> : AUS1</p><p><b>Description</b> : ATP-binding cassette transporter involved in sterol uptake</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01419g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01419g'  target='_blank'> Link to GRYC</a>",
                  x : 7.17800224888401,
                  y : 9.21907150685292
                  },
                  position : {
                  'x' : 71.7800224888401,
                  'y' : 92.1907150685292
                  },
  },
{
                  data: {
                  id: 'CAGL0F02513g',
                  name: 'CAGL0F02513g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F02513g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in protein secretion</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F02513g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F02513g'  target='_blank'> Link to GRYC</a>",
                  x : 0.346268319843504,
                  y : 0.954140368669643
                  },
                  position : {
                  'x' : 3.46268319843504,
                  'y' : 9.54140368669643
                  },
  },
{
                  data: {
                  id: 'CAGL0F05687g',
                  name: 'CAGL0F05687g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F05687g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YDR186C and Saccharomyces cerevisiae S288C : YDR186C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F05687g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F05687g'  target='_blank'> Link to GRYC</a>",
                  x : 5.10388417813613,
                  y : 6.04260252869681
                  },
                  position : {
                  'x' : 51.0388417813613,
                  'y' : 60.4260252869681
                  },
  },
{
                  data: {
                  id: 'CAGL0F08019g',
                  name: 'CAGL0F08019g',
                  gene: 'PEX21',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F08019g</h2><hr><p><b>Gene name</b> : PEX21</p><p><b>Description</b> : Ortholog(s) have role in positive regulation of binding, protein import into peroxisome matrix and cytosol, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F08019g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F08019g'  target='_blank'> Link to GRYC</a>",
                  x : 0.331667146070543,
                  y : 4.29132407018575
                  },
                  position : {
                  'x' : 3.31667146070543,
                  'y' : 42.9132407018575
                  },
  },
{
                  data: {
                  id: 'CAGL0F08085g',
                  name: 'CAGL0F08085g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F08085g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have pyruvate transmembrane transporter activity, role in mitochondrial pyruvate transmembrane transport and mitochondrial membrane, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F08085g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F08085g'  target='_blank'> Link to GRYC</a>",
                  x : 3.18198844088959,
                  y : 4.99063047343046
                  },
                  position : {
                  'x' : 31.8198844088959,
                  'y' : 49.9063047343046
                  },
  },
{
                  data: {
                  id: 'CAGL0G01166g',
                  name: 'CAGL0G01166g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G01166g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G01166g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G01166g'  target='_blank'> Link to GRYC</a>",
                  x : 7.9831084527871,
                  y : -3.60265339453048
                  },
                  position : {
                  'x' : 79.831084527871,
                  'y' : -36.0265339453048
                  },
  },
{
                  data: {
                  id: 'CAGL0G02409g',
                  name: 'CAGL0G02409g',
                  gene: 'SRP40',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G02409g</h2><hr><p><b>Gene name</b> : SRP40</p><p><b>Description</b> : Ortholog(s) have nucleolus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G02409g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G02409g'  target='_blank'> Link to GRYC</a>",
                  x : 10.2580920242446,
                  y : -1.84714164298513
                  },
                  position : {
                  'x' : 102.580920242446,
                  'y' : -18.4714164298513
                  },
  },
{
                  data: {
                  id: 'CAGL0G06468g',
                  name: 'CAGL0G06468g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G06468g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein; gene is downregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06468g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06468g'  target='_blank'> Link to GRYC</a>",
                  x : 7.33316576861704,
                  y : -2.2597839174174
                  },
                  position : {
                  'x' : 73.3316576861704,
                  'y' : -22.597839174174
                  },
  },
{
                  data: {
                  id: 'CAGL0G08019g',
                  name: 'CAGL0G08019g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G08019g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cellular response to biotic stimulus, cellular response to starvation and filamentous growth of a population of unicellular organisms in response to biotic stimulus, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G08019g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G08019g'  target='_blank'> Link to GRYC</a>",
                  x : 1.11099741928352,
                  y : 4.14918243075113
                  },
                  position : {
                  'x' : 11.1099741928352,
                  'y' : 41.4918243075113
                  },
  },
{
                  data: {
                  id: 'CAGL0H00440g',
                  name: 'CAGL0H00440g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H00440g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in transmembrane transport and integral component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00440g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00440g'  target='_blank'> Link to GRYC</a>",
                  x : 8.93890166381012,
                  y : -1.60901924068741
                  },
                  position : {
                  'x' : 89.3890166381012,
                  'y' : -16.0901924068741
                  },
  },
{
                  data: {
                  id: 'CAGL0H00506g',
                  name: 'CAGL0H00506g',
                  gene: 'ATP2',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H00506g</h2><hr><p><b>Gene name</b> : ATP2</p><p><b>Description</b> : F1F0-ATPase complex, F1 beta subunit; expression upregulated in biofilm vs planktonic cell culture; protein abundance decreased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00506g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00506g'  target='_blank'> Link to GRYC</a>",
                  x : 0.247168526798353,
                  y : -0.561870445253732
                  },
                  position : {
                  'x' : 2.47168526798353,
                  'y' : -5.61870445253732
                  },
  },
{
                  data: {
                  id: 'CAGL0H04191g',
                  name: 'CAGL0H04191g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H04191g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have proton-transporting ATP synthase activity, rotational mechanism activity and role in ATP synthesis coupled proton transport, mitochondrial proton-transporting ATP synthase complex assembly, protein complex oligomerization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H04191g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H04191g'  target='_blank'> Link to GRYC</a>",
                  x : -0.347143399201958,
                  y : 2.51631267821628
                  },
                  position : {
                  'x' : -3.47143399201958,
                  'y' : 25.1631267821628
                  },
  },
{
                  data: {
                  id: 'CAGL0H08822g',
                  name: 'CAGL0H08822g',
                  gene: 'MMT2',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H08822g</h2><hr><p><b>Gene name</b> : MMT2</p><p><b>Description</b> : Ortholog(s) have role in cellular iron ion homeostasis and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H08822g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H08822g'  target='_blank'> Link to GRYC</a>",
                  x : 10.5946421098977,
                  y : -0.592561098279833
                  },
                  position : {
                  'x' : 105.946421098977,
                  'y' : -5.92561098279833
                  },
  },
{
                  data: {
                  id: 'CAGL0H10076g',
                  name: 'CAGL0H10076g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#ffffff',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H10076g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H10076g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H10076g'  target='_blank'> Link to GRYC</a>",
                  x : 8.59340720178482,
                  y : 9.48734651910451
                  },
                  position : {
                  'x' : 85.9340720178482,
                  'y' : 94.8734651910451
                  },
  },
{
                  data: {
                  id: 'CAGL0I00286g',
                  name: 'CAGL0I00286g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0I00286g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted transmembrane transporter activity, role in transmembrane transport and integral component of membrane, membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I00286g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I00286g'  target='_blank'> Link to GRYC</a>",
                  x : 6.12536053743864,
                  y : 2.56572397533565
                  },
                  position : {
                  'x' : 61.2536053743864,
                  'y' : 25.6572397533565
                  },
  },
{
                  data: {
                  id: 'CAGL0I00462g',
                  name: 'CAGL0I00462g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I00462g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cotranslational protein targeting to membrane and endoplasmic reticulum membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I00462g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I00462g'  target='_blank'> Link to GRYC</a>",
                  x : -0.0432767314762955,
                  y : 1.02509386596038
                  },
                  position : {
                  'x' : -0.432767314762955,
                  'y' : 10.2509386596038
                  },
  },
{
                  data: {
                  id: 'CAGL0I01980g',
                  name: 'CAGL0I01980g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I01980g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative activator of transcription; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01980g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01980g'  target='_blank'> Link to GRYC</a>",
                  x : -0.794193455768601,
                  y : 2.67363207850303
                  },
                  position : {
                  'x' : -7.94193455768601,
                  'y' : 26.7363207850303
                  },
  },
{
                  data: {
                  id: 'CAGL0I02134g',
                  name: 'CAGL0I02134g',
                  gene: 'PEX21B',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I02134g</h2><hr><p><b>Gene name</b> : PEX21B</p><p><b>Description</b> : Ortholog(s) have role in protein import into peroxisome matrix and cytosol, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02134g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02134g'  target='_blank'> Link to GRYC</a>",
                  x : 6.53400227827994,
                  y : 10.3471862769016
                  },
                  position : {
                  'x' : 65.3400227827994,
                  'y' : 103.471862769016
                  },
  },
{
                  data: {
                  id: 'CAGL0I02508g',
                  name: 'CAGL0I02508g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0I02508g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have copper ion transmembrane transporter activity and role in cellular copper ion homeostasis, copper ion import, protein maturation by copper ion transfer</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02508g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02508g'  target='_blank'> Link to GRYC</a>",
                  x : 5.7823907812308,
                  y : 4.36725827958678
                  },
                  position : {
                  'x' : 57.823907812308,
                  'y' : 43.6725827958678
                  },
  },
{
                  data: {
                  id: 'CAGL0I04004g',
                  name: 'CAGL0I04004g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I04004g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04004g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04004g'  target='_blank'> Link to GRYC</a>",
                  x : 8.22361768447394,
                  y : -2.21924611272629
                  },
                  position : {
                  'x' : 82.2361768447394,
                  'y' : -22.1924611272629
                  },
  },
{
                  data: {
                  id: 'CAGL0I04686g',
                  name: 'CAGL0I04686g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I04686g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATPase activity, proton-transporting ATP synthase activity, rotational mechanism, proton-transporting ATPase activity, rotational mechanism activity and role in ATP synthesis coupled proton transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04686g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04686g'  target='_blank'> Link to GRYC</a>",
                  x : 0.593032763293025,
                  y : -0.56525432115034
                  },
                  position : {
                  'x' : 5.93032763293025,
                  'y' : -5.6525432115034
                  },
  },
{
                  data: {
                  id: 'CAGL0I06743g',
                  name: 'CAGL0I06743g',
                  gene: 'FTR1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#66ff66',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0I06743g</h2><hr><p><b>Gene name</b> : FTR1</p><p><b>Description</b> : Putative ferrous iron transmembrane transporter involved in iron uptake</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I06743g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I06743g'  target='_blank'> Link to GRYC</a>",
                  x : 11.5788549836777,
                  y : 5.01208343655551
                  },
                  position : {
                  'x' : 115.788549836777,
                  'y' : 50.1208343655551
                  },
  },
{
                  data: {
                  id: 'CAGL0I07969g',
                  name: 'CAGL0I07969g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0I07969g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ATP synthesis coupled proton transport, protein complex oligomerization and mitochondrial proton-transporting ATP synthase complex, coupling factor F(o), plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I07969g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I07969g'  target='_blank'> Link to GRYC</a>",
                  x : -0.268414155973865,
                  y : -1.75245372963597
                  },
                  position : {
                  'x' : -2.68414155973865,
                  'y' : -17.5245372963597
                  },
  },
{
                  data: {
                  id: 'CAGL0I09086g',
                  name: 'CAGL0I09086g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I09086g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in transmembrane transport and integral component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09086g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09086g'  target='_blank'> Link to GRYC</a>",
                  x : 4.11561898253472,
                  y : 4.94060844312162
                  },
                  position : {
                  'x' : 41.1561898253472,
                  'y' : 49.4060844312162
                  },
  },
{
                  data: {
                  id: 'CAGL0I09702g',
                  name: 'CAGL0I09702g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I09702g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have riboflavin transmembrane transporter activity, role in riboflavin transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09702g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09702g'  target='_blank'> Link to GRYC</a>",
                  x : 1.02914220948168,
                  y : 5.8954993245784
                  },
                  position : {
                  'x' : 10.2914220948168,
                  'y' : 58.954993245784
                  },
  },
{
                  data: {
                  id: 'CAGL0I09724g',
                  name: 'CAGL0I09724g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I09724g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in transmembrane transport and integral component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09724g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09724g'  target='_blank'> Link to GRYC</a>",
                  x : 1.76796494002275,
                  y : 6.58721711849226
                  },
                  position : {
                  'x' : 17.6796494002275,
                  'y' : 65.8721711849226
                  },
  },
{
                  data: {
                  id: 'CAGL0I10010g',
                  name: 'CAGL0I10010g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I10010g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have SNARE binding, chaperone binding activity and role in amino acid transport, intracellular protein transport, protein folding, protein localization to nucleus, regulation of pH, retrograde transport, endosome to Golgi</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10010g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10010g'  target='_blank'> Link to GRYC</a>",
                  x : -1.47057014685271,
                  y : 4.02217757316296
                  },
                  position : {
                  'x' : -14.7057014685271,
                  'y' : 40.2217757316296
                  },
  },
{
                  data: {
                  id: 'CAGL0I10384g',
                  name: 'CAGL0I10384g',
                  gene: 'TPO3',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffffff',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I10384g</h2><hr><p><b>Gene name</b> : TPO3</p><p><b>Description</b> : Predicted polyamine transporter of the major facilitator superfamily; required for azole resistance</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10384g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10384g'  target='_blank'> Link to GRYC</a>",
                  x : 6.33105913356687,
                  y : -3.60004549538221
                  },
                  position : {
                  'x' : 63.3105913356687,
                  'y' : -36.0004549538221
                  },
  },
{
                  data: {
                  id: 'CAGL0I10747g',
                  name: 'CAGL0I10747g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I10747g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ammonium transmembrane transporter activity, role in ammonium transport, nitrogen utilization and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10747g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10747g'  target='_blank'> Link to GRYC</a>",
                  x : 8.67401819578085,
                  y : -2.52393753894358
                  },
                  position : {
                  'x' : 86.7401819578085,
                  'y' : -25.2393753894358
                  },
  },
{
                  data: {
                  id: 'CAGL0J00363g',
                  name: 'CAGL0J00363g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J00363g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein of major facilitator superfamily; gene is downregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J00363g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J00363g'  target='_blank'> Link to GRYC</a>",
                  x : 9.46593939507917,
                  y : -1.68572711979859
                  },
                  position : {
                  'x' : 94.6593939507917,
                  'y' : -16.8572711979859
                  },
  },
{
                  data: {
                  id: 'CAGL0J07980g',
                  name: 'CAGL0J07980g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J07980g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have copper chaperone activity and role in cellular copper ion homeostasis, cellular iron ion homeostasis, cellular response to oxidative stress, copper ion transport, regulation of iron ion transmembrane transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J07980g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J07980g'  target='_blank'> Link to GRYC</a>",
                  x : 3.46822973451684,
                  y : 4.64085236193659
                  },
                  position : {
                  'x' : 34.6822973451684,
                  'y' : 46.4085236193659
                  },
  },
{
                  data: {
                  id: 'CAGL0J09944g',
                  name: 'CAGL0J09944g',
                  gene: 'AQR1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J09944g</h2><hr><p><b>Gene name</b> : AQR1</p><p><b>Description</b> : Plasma membrane drug:H+ antiporter involved in resistance to drugs and acetic acid</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09944g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09944g'  target='_blank'> Link to GRYC</a>",
                  x : -1.37010396313567,
                  y : -1.7888859142984
                  },
                  position : {
                  'x' : -13.7010396313567,
                  'y' : -17.888859142984
                  },
  },
{
                  data: {
                  id: 'CAGL0K00715g',
                  name: 'CAGL0K00715g',
                  gene: 'RTA1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0K00715g</h2><hr><p><b>Gene name</b> : RTA1</p><p><b>Description</b> : Putative protein involved in 7-aminocholesterol resistance; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K00715g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K00715g'  target='_blank'> Link to GRYC</a>",
                  x : 11.9019174361565,
                  y : 2.51974857772557
                  },
                  position : {
                  'x' : 119.019174361565,
                  'y' : 25.1974857772557
                  },
  },
{
                  data: {
                  id: 'CAGL0K01749g',
                  name: 'CAGL0K01749g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K01749g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have lipid binding, sterol transfer activity and role in ER to Golgi ceramide transport, endocytosis, exocytosis, maintenance of cell polarity, piecemeal microautophagy of the nucleus, sterol transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K01749g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K01749g'  target='_blank'> Link to GRYC</a>",
                  x : -0.599757458131611,
                  y : 1.99182555732539
                  },
                  position : {
                  'x' : -5.99757458131611,
                  'y' : 19.9182555732539
                  },
  },
{
                  data: {
                  id: 'CAGL0K04367g',
                  name: 'CAGL0K04367g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K04367g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-methionine secondary active transmembrane transporter activity, role in methionine import across plasma membrane, sulfur amino acid transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04367g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04367g'  target='_blank'> Link to GRYC</a>",
                  x : 4.08938871712858,
                  y : 5.67801882797069
                  },
                  position : {
                  'x' : 40.8938871712858,
                  'y' : 56.7801882797069
                  },
  },
{
                  data: {
                  id: 'CAGL0K04851g',
                  name: 'CAGL0K04851g',
                  gene: 'PEX17',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K04851g</h2><hr><p><b>Gene name</b> : PEX17</p><p><b>Description</b> : Ortholog(s) have role in protein import into peroxisome matrix, docking and Pex17p-Pex14p docking complex, peroxisomal importomer complex, peroxisomal membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04851g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04851g'  target='_blank'> Link to GRYC</a>",
                  x : -0.158431245863885,
                  y : 0.517691930010449
                  },
                  position : {
                  'x' : -1.58431245863885,
                  'y' : 5.17691930010449
                  },
  },
{
                  data: {
                  id: 'CAGL0K05753g',
                  name: 'CAGL0K05753g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K05753g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-proline transmembrane transporter activity, amino acid transmembrane transporter activity and role in amino acid transport, transmembrane transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K05753g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K05753g'  target='_blank'> Link to GRYC</a>",
                  x : 1.68794267205831,
                  y : -1.09546353498032
                  },
                  position : {
                  'x' : 16.8794267205831,
                  'y' : -10.9546353498032
                  },
  },
{
                  data: {
                  id: 'CAGL0K07436g',
                  name: 'CAGL0K07436g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K07436g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA binding, tricarboxylate secondary active transmembrane transporter activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07436g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07436g'  target='_blank'> Link to GRYC</a>",
                  x : 1.21094953434985,
                  y : 0.110494233825501
                  },
                  position : {
                  'x' : 12.1094953434985,
                  'y' : 1.10494233825501
                  },
  },
{
                  data: {
                  id: 'CAGL0K08206g',
                  name: 'CAGL0K08206g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K08206g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08206g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08206g'  target='_blank'> Link to GRYC</a>",
                  x : 0.185676734558729,
                  y : 0.55263625650279
                  },
                  position : {
                  'x' : 1.85676734558729,
                  'y' : 5.5263625650279
                  },
  },
{
                  data: {
                  id: 'CAGL0K09988g',
                  name: 'CAGL0K09988g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K09988g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in vesicle-mediated transport and integral component of Golgi membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K09988g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K09988g'  target='_blank'> Link to GRYC</a>",
                  x : 8.24635317238153,
                  y : -0.643590665067648
                  },
                  position : {
                  'x' : 82.4635317238153,
                  'y' : -6.43590665067648
                  },
  },
{
                  data: {
                  id: 'CAGL0K10362g',
                  name: 'CAGL0K10362g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K10362g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-ornithine transmembrane transporter activity, role in arginine biosynthetic process, mitochondrial L-ornithine transmembrane transport and mitochondrial envelope localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10362g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10362g'  target='_blank'> Link to GRYC</a>",
                  x : 11.6440613800968,
                  y : -0.544724857884314
                  },
                  position : {
                  'x' : 116.440613800968,
                  'y' : -5.44724857884314
                  },
  },
{
                  data: {
                  id: 'CAGL0K11616g',
                  name: 'CAGL0K11616g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffffff',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K11616g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative mitochondrial inner membrane transporter; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K11616g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K11616g'  target='_blank'> Link to GRYC</a>",
                  x : 8.15751783342929,
                  y : 3.27889130227909
                  },
                  position : {
                  'x' : 81.5751783342929,
                  'y' : 32.7889130227909
                  },
  },
{
                  data: {
                  id: 'CAGL0L02079g',
                  name: 'CAGL0L02079g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L02079g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have tricarboxylate secondary active transmembrane transporter activity, role in mitochondrial citrate transmembrane transport, transmembrane transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L02079g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L02079g'  target='_blank'> Link to GRYC</a>",
                  x : 11.1326425071061,
                  y : 0.346257187261985
                  },
                  position : {
                  'x' : 111.326425071061,
                  'y' : 3.46257187261985
                  },
  },
{
                  data: {
                  id: 'CAGL0L03267g',
                  name: 'CAGL0L03267g',
                  gene: 'GAP1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L03267g</h2><hr><p><b>Gene name</b> : GAP1</p><p><b>Description</b> : Ortholog(s) have L-proline transmembrane transporter activity, amino acid transmembrane transporter activity, beta-alanine transmembrane transporter activity, polyamine transmembrane transporter activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03267g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03267g'  target='_blank'> Link to GRYC</a>",
                  x : 0.53016361479585,
                  y : 3.51667774442393
                  },
                  position : {
                  'x' : 5.3016361479585,
                  'y' : 35.1667774442393
                  },
  },
{
                  data: {
                  id: 'CAGL0L05742g',
                  name: 'CAGL0L05742g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L05742g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have iron ion transmembrane transporter activity, role in iron import into the mitochondrion and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L05742g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L05742g'  target='_blank'> Link to GRYC</a>",
                  x : 4.60361062960764,
                  y : 4.55381031207894
                  },
                  position : {
                  'x' : 46.0361062960764,
                  'y' : 45.5381031207894
                  },
  },
{
                  data: {
                  id: 'CAGL0L07546g',
                  name: 'CAGL0L07546g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L07546g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have amino acid transmembrane transporter activity and role in amino acid transport, transmembrane transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L07546g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L07546g'  target='_blank'> Link to GRYC</a>",
                  x : 2.67175982361645,
                  y : 0.262340119828355
                  },
                  position : {
                  'x' : 26.7175982361645,
                  'y' : 2.62340119828355
                  },
  },
{
                  data: {
                  id: 'CAGL0L10868g',
                  name: 'CAGL0L10868g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L10868g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10868g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10868g'  target='_blank'> Link to GRYC</a>",
                  x : 11.4575703783192,
                  y : 1.14689204510997
                  },
                  position : {
                  'x' : 114.575703783192,
                  'y' : 11.4689204510997
                  },
  },
{
                  data: {
                  id: 'CAGL0L12936g',
                  name: 'CAGL0L12936g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L12936g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in protein targeting to mitochondrion and integral component of mitochondrial outer membrane, mitochondrial outer membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L12936g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L12936g'  target='_blank'> Link to GRYC</a>",
                  x : 1.54150221242381,
                  y : -0.548763009969065
                  },
                  position : {
                  'x' : 15.4150221242381,
                  'y' : -5.48763009969065
                  },
  },
{
                  data: {
                  id: 'CAGL0L13354g',
                  name: 'CAGL0L13354g',
                  gene: 'TNR1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L13354g</h2><hr><p><b>Gene name</b> : TNR1</p><p><b>Description</b> : Putative nicotinamide transporter; strongly induced under niacin-limiting conditions</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L13354g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L13354g'  target='_blank'> Link to GRYC</a>",
                  x : 4.06853576460894,
                  y : 10.4828517537859
                  },
                  position : {
                  'x' : 40.6853576460895,
                  'y' : 104.828517537859
                  },
  },
{
                  data: {
                  id: 'CAGL0M02387g',
                  name: 'CAGL0M02387g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M02387g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATPase-coupled transmembrane transporter activity, role in fatty acid transport and integral component of peroxisomal membrane, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M02387g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M02387g'  target='_blank'> Link to GRYC</a>",
                  x : 0.180244607346769,
                  y : 2.27790918048169
                  },
                  position : {
                  'x' : 1.80244607346769,
                  'y' : 22.7790918048169
                  },
  },
{
                  data: {
                  id: 'CAGL0M03003g',
                  name: 'CAGL0M03003g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M03003g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in borate transmembrane transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M03003g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M03003g'  target='_blank'> Link to GRYC</a>",
                  x : 10.2071883844955,
                  y : 8.06740447477343
                  },
                  position : {
                  'x' : 102.071883844955,
                  'y' : 80.6740447477343
                  },
  },
{
                  data: {
                  id: 'CAGL0M05511g',
                  name: 'CAGL0M05511g',
                  gene: 'FTH1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M05511g</h2><hr><p><b>Gene name</b> : FTH1</p><p><b>Description</b> : Has domain(s) with predicted iron ion transmembrane transporter activity, role in iron ion transmembrane transport and high-affinity iron permease complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M05511g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M05511g'  target='_blank'> Link to GRYC</a>",
                  x : 4.10910605284575,
                  y : 4.59507389759139
                  },
                  position : {
                  'x' : 41.0910605284575,
                  'y' : 45.9507389759139
                  },
  },
{
                  data: {
                  id: 'CAGL0M06457g',
                  name: 'CAGL0M06457g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M06457g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have calcium ion transmembrane transporter activity, manganese ion transmembrane transporter activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M06457g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M06457g'  target='_blank'> Link to GRYC</a>",
                  x : 11.7978448418502,
                  y : 0.269073529619348
                  },
                  position : {
                  'x' : 117.978448418502,
                  'y' : 2.69073529619348
                  },
  },
{
                  data: {
                  id: 'CAGL0M08602g',
                  name: 'CAGL0M08602g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0M08602g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATPase-coupled cation transmembrane transporter activity, copper ion binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M08602g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M08602g'  target='_blank'> Link to GRYC</a>",
                  x : 5.89321886634326,
                  y : 3.85610766963302
                  },
                  position : {
                  'x' : 58.9321886634326,
                  'y' : 38.5610766963302
                  },
  },
{
                  data: {
                  id: 'CAGL0M09020g',
                  name: 'CAGL0M09020g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M09020g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have succinate:fumarate antiporter activity, role in acetate catabolic process, carbon utilization, fatty acid catabolic process, fumarate transport, succinate transport and mitochondrion, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M09020g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M09020g'  target='_blank'> Link to GRYC</a>",
                  x : -0.915315215695428,
                  y : 3.46002868571986
                  },
                  position : {
                  'x' : -9.15315215695428,
                  'y' : 34.6002868571986
                  },
  },
{
                  data: {
                  id: 'CAGL0M09581g',
                  name: 'CAGL0M09581g',
                  gene: 'ATP1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M09581g</h2><hr><p><b>Gene name</b> : ATP1</p><p><b>Description</b> : F1F0-ATPase complex, F1 alpha subunit</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M09581g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M09581g'  target='_blank'> Link to GRYC</a>",
                  x : -0.569826510111484,
                  y : -0.503025769699002
                  },
                  position : {
                  'x' : -5.69826510111484,
                  'y' : -5.03025769699002
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
