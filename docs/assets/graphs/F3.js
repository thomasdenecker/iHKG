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
                  id: 'CAGL0A02816g',
                  name: 'CAGL0A02816g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#66ff66',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0A02816g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative 2-methylbutyraldehyde reductase; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02816g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02816g'  target='_blank'> Link to GRYC</a>",
                  x : -5.36711118744163,
                  y : 6.45900420763615
                  },
                  position : {
                  'x' : -53.6711118744163,
                  'y' : 64.5900420763615
                  },
  },
{
                  data: {
                  id: 'CAGL0A03366g',
                  name: 'CAGL0A03366g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A03366g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have IMP cyclohydrolase activity, phosphoribosylaminoimidazolecarboxamide formyltransferase activity and role in 'de novo' IMP biosynthetic process, IMP biosynthetic process, purine nucleotide biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03366g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03366g'  target='_blank'> Link to GRYC</a>",
                  x : 3.95326544901342,
                  y : 9.49679816463725
                  },
                  position : {
                  'x' : 39.5326544901342,
                  'y' : 94.9679816463725
                  },
  },
{
                  data: {
                  id: 'CAGL0A03542g',
                  name: 'CAGL0A03542g',
                  gene: 'COX12',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0A03542g</h2><hr><p><b>Gene name</b> : COX12</p><p><b>Description</b> : Cytochrome c oxidase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03542g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03542g'  target='_blank'> Link to GRYC</a>",
                  x : 2.24487743876699,
                  y : -1.56419630814363
                  },
                  position : {
                  'x' : 22.4487743876699,
                  'y' : -15.6419630814363
                  },
  },
{
                  data: {
                  id: 'CAGL0A03740g',
                  name: 'CAGL0A03740g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A03740g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in fatty acid beta-oxidation, long-chain fatty acid catabolic process and peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03740g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03740g'  target='_blank'> Link to GRYC</a>",
                  x : 9.25930011053595,
                  y : 1.87604296920835
                  },
                  position : {
                  'x' : 92.5930011053595,
                  'y' : 18.7604296920835
                  },
  },
{
                  data: {
                  id: 'CAGL0A03905g',
                  name: 'CAGL0A03905g',
                  gene: 'HMX1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#66ff66',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0A03905g</h2><hr><p><b>Gene name</b> : HMX1</p><p><b>Description</b> : Ortholog(s) have heme oxygenase (decyclizing) activity and role in cellular iron ion homeostasis, heme catabolic process, response to carbon monoxide, response to oxidative stress</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03905g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03905g'  target='_blank'> Link to GRYC</a>",
                  x : -6.88796535430014,
                  y : 4.3951409957213
                  },
                  position : {
                  'x' : -68.8796535430014,
                  'y' : 43.951409957213
                  },
  },
{
                  data: {
                  id: 'CAGL0B00990g',
                  name: 'CAGL0B00990g',
                  gene: 'HBN1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B00990g</h2><hr><p><b>Gene name</b> : HBN1</p><p><b>Description</b> : Ortholog(s) have oxidoreductase activity, acting on NAD(P)H, nitrogenous group as acceptor activity and role in cellular response to oxidative stress, negative regulation of fatty acid metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B00990g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B00990g'  target='_blank'> Link to GRYC</a>",
                  x : -1.4782816279835,
                  y : 10.062623107786
                  },
                  position : {
                  'x' : -14.782816279835,
                  'y' : 100.62623107786
                  },
  },
{
                  data: {
                  id: 'CAGL0C01325g',
                  name: 'CAGL0C01325g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C01325g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytochrome-c oxidase activity, nitrite reductase (NO-forming) activity, role in mitochondrial electron transport, cytochrome c to oxygen and mitochondrial respiratory chain complex IV localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C01325g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C01325g'  target='_blank'> Link to GRYC</a>",
                  x : 1.82033806215338,
                  y : -2.31478614822865
                  },
                  position : {
                  'x' : 18.2033806215338,
                  'y' : -23.1478614822865
                  },
  },
{
                  data: {
                  id: 'CAGL0C01727g',
                  name: 'CAGL0C01727g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C01727g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have UDP-N-acetylglucosamine-dolichyl-phosphate N-acetylglucosaminephosphotransferase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C01727g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C01727g'  target='_blank'> Link to GRYC</a>",
                  x : -3.68880944020728,
                  y : -0.539239740837933
                  },
                  position : {
                  'x' : -36.8880944020728,
                  'y' : -5.39239740837933
                  },
  },
{
                  data: {
                  id: 'CAGL0C02233g',
                  name: 'CAGL0C02233g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C02233g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-methionine-(S)-S-oxide reductase activity, peptide-methionine (S)-S-oxide reductase activity, role in L-methionine salvage from methionine sulphoxide, cellular response to oxidative stress and cytoplasm localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C02233g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C02233g'  target='_blank'> Link to GRYC</a>",
                  x : -2.26416977846805,
                  y : 4.71795996314539
                  },
                  position : {
                  'x' : -22.6416977846805,
                  'y' : 47.1795996314539
                  },
  },
{
                  data: {
                  id: 'CAGL0C03333g',
                  name: 'CAGL0C03333g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0C03333g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ferric-chelate reductase activity, role in cellular response to iron ion starvation, copper ion import, intracellular sequestering of iron ion, reductive iron assimilation and fungal-type vacuole membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03333g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03333g'  target='_blank'> Link to GRYC</a>",
                  x : -6.98757797302977,
                  y : 2.38524219678611
                  },
                  position : {
                  'x' : -69.8757797302977,
                  'y' : 23.8524219678611
                  },
  },
{
                  data: {
                  id: 'CAGL0C03443g',
                  name: 'CAGL0C03443g',
                  gene: 'LYS9',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C03443g</h2><hr><p><b>Gene name</b> : LYS9</p><p><b>Description</b> : Putative saccharopine dehydrogenase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03443g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03443g'  target='_blank'> Link to GRYC</a>",
                  x : 1.34532341047032,
                  y : -2.43717929485283
                  },
                  position : {
                  'x' : 13.4532341047032,
                  'y' : -24.3717929485283
                  },
  },
{
                  data: {
                  id: 'CAGL0C03850g',
                  name: 'CAGL0C03850g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C03850g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have thioredoxin peroxidase activity, role in cell redox homeostasis, cellular response to oxidative stress and nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03850g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03850g'  target='_blank'> Link to GRYC</a>",
                  x : -3.39098752682791,
                  y : 6.16325088824117
                  },
                  position : {
                  'x' : -33.9098752682791,
                  'y' : 61.6325088824117
                  },
  },
{
                  data: {
                  id: 'CAGL0C04191g',
                  name: 'CAGL0C04191g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C04191g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have succinate-semialdehyde dehydrogenase [NAD(P)+] activity and role in cellular response to oxidative stress, gamma-aminobutyric acid catabolic process, glutamate decarboxylation to succinate</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C04191g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C04191g'  target='_blank'> Link to GRYC</a>",
                  x : -0.264496386593623,
                  y : 7.00889383937725
                  },
                  position : {
                  'x' : -2.64496386593623,
                  'y' : 70.0889383937725
                  },
  },
{
                  data: {
                  id: 'CAGL0D00198g',
                  name: 'CAGL0D00198g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0D00198g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have (R,R)-butanediol dehydrogenase activity and role in alcohol metabolic process, butanediol biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00198g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00198g'  target='_blank'> Link to GRYC</a>",
                  x : -6.42317635266167,
                  y : 1.3823032090719
                  },
                  position : {
                  'x' : -64.2317635266167,
                  'y' : 13.823032090719
                  },
  },
{
                  data: {
                  id: 'CAGL0D00528g',
                  name: 'CAGL0D00528g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D00528g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 3-hydroxyacyl-[acyl-carrier-protein] dehydratase activity, [acyl-carrier-protein] S-acetyltransferase activity and [acyl-carrier-protein] S-malonyltransferase activity, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00528g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00528g'  target='_blank'> Link to GRYC</a>",
                  x : -4.9433607922305,
                  y : -0.733138087372945
                  },
                  position : {
                  'x' : -49.433607922305,
                  'y' : -7.33138087372945
                  },
  },
{
                  data: {
                  id: 'CAGL0D00748g',
                  name: 'CAGL0D00748g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D00748g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytochrome-c oxidase activity, role in mitochondrial electron transport, cytochrome c to oxygen and mitochondrial respiratory chain complex IV, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00748g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00748g'  target='_blank'> Link to GRYC</a>",
                  x : 1.12105043352646,
                  y : -2.20591576781347
                  },
                  position : {
                  'x' : 11.2105043352646,
                  'y' : -22.0591576781347
                  },
  },
{
                  data: {
                  id: 'CAGL0D00770g',
                  name: 'CAGL0D00770g',
                  gene: 'IDP1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D00770g</h2><hr><p><b>Gene name</b> : IDP1</p><p><b>Description</b> : Ortholog(s) have isocitrate dehydrogenase (NADP+) activity, role in glutamate biosynthetic process and cytoplasm, extracellular region, mitochondrial nucleoid, mitochondrion, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00770g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00770g'  target='_blank'> Link to GRYC</a>",
                  x : 0.0303220241066577,
                  y : 5.46853907160102
                  },
                  position : {
                  'x' : 0.303220241066577,
                  'y' : 54.6853907160102
                  },
  },
{
                  data: {
                  id: 'CAGL0D01958g',
                  name: 'CAGL0D01958g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0D01958g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have succinate dehydrogenase (ubiquinone) activity and role in cellular respiration, protein insertion into mitochondrial inner membrane</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D01958g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D01958g'  target='_blank'> Link to GRYC</a>",
                  x : 2.37286545726746,
                  y : -1.06368564376155
                  },
                  position : {
                  'x' : 23.7286545726746,
                  'y' : -10.6368564376155
                  },
  },
{
                  data: {
                  id: 'CAGL0D03982g',
                  name: 'CAGL0D03982g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D03982g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 1-pyrroline-5-carboxylate dehydrogenase activity, role in glutamate biosynthetic process, proline catabolic process to glutamate and mitochondrial matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D03982g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D03982g'  target='_blank'> Link to GRYC</a>",
                  x : 1.59645989526207,
                  y : 6.81474484043784
                  },
                  position : {
                  'x' : 15.9645989526207,
                  'y' : 68.1474484043785
                  },
  },
{
                  data: {
                  id: 'CAGL0D04356g',
                  name: 'CAGL0D04356g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D04356g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycine dehydrogenase (decarboxylating) activity and role in glycine metabolic process, one-carbon metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D04356g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D04356g'  target='_blank'> Link to GRYC</a>",
                  x : 1.73529863063411,
                  y : 6.20392967882201
                  },
                  position : {
                  'x' : 17.3529863063411,
                  'y' : 62.0392967882201
                  },
  },
{
                  data: {
                  id: 'CAGL0D05192g',
                  name: 'CAGL0D05192g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D05192g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ubiquinol-cytochrome-c reductase activity and role in aerobic respiration, mitochondrial electron transport, ubiquinol to cytochrome c</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D05192g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D05192g'  target='_blank'> Link to GRYC</a>",
                  x : 2.84695131735523,
                  y : -3.05771798464581
                  },
                  position : {
                  'x' : 28.4695131735523,
                  'y' : -30.5771798464581
                  },
  },
{
                  data: {
                  id: 'CAGL0D05940g',
                  name: 'CAGL0D05940g',
                  gene: 'ERG1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D05940g</h2><hr><p><b>Gene name</b> : ERG1</p><p><b>Description</b> : Squalene epoxidase with a role in ergosterol synthesis; involved in growth under conditions of low oxygen tension</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D05940g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D05940g'  target='_blank'> Link to GRYC</a>",
                  x : -5.4182306138231,
                  y : -2.27936911530646
                  },
                  position : {
                  'x' : -54.182306138231,
                  'y' : -22.7936911530646
                  },
  },
{
                  data: {
                  id: 'CAGL0E01705g',
                  name: 'CAGL0E01705g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E01705g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-malate dehydrogenase activity, role in gluconeogenesis, protein import into peroxisome matrix and cytosol, nuclear periphery localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01705g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01705g'  target='_blank'> Link to GRYC</a>",
                  x : 3.1943465490679,
                  y : 5.9017931157458
                  },
                  position : {
                  'x' : 31.943465490679,
                  'y' : 59.017931157458
                  },
  },
{
                  data: {
                  id: 'CAGL0E03850g',
                  name: 'CAGL0E03850g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0E03850g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted electron transfer activity, iron-sulfur cluster binding, oxidoreductase activity and role in oxidation-reduction process, tricarboxylic acid cycle</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E03850g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E03850g'  target='_blank'> Link to GRYC</a>",
                  x : 4.57324233935303,
                  y : -2.90118265519115
                  },
                  position : {
                  'x' : 45.7324233935303,
                  'y' : -29.0118265519115
                  },
  },
{
                  data: {
                  id: 'CAGL0E04334g',
                  name: 'CAGL0E04334g',
                  gene: 'ERG11',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E04334g</h2><hr><p><b>Gene name</b> : ERG11</p><p><b>Description</b> : Putative cytochrome P-450 lanosterol 14-alpha-demethylase; target enzyme of azole antifungal drugs; increased protein abundance in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04334g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04334g'  target='_blank'> Link to GRYC</a>",
                  x : -2.63159509347545,
                  y : -3.41823770191503
                  },
                  position : {
                  'x' : -26.3159509347545,
                  'y' : -34.1823770191503
                  },
  },
{
                  data: {
                  id: 'CAGL0E05170g',
                  name: 'CAGL0E05170g',
                  gene: 'GRE2(A)',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E05170g</h2><hr><p><b>Gene name</b> : GRE2(A)</p><p><b>Description</b> : Putative methylglyoxal reductase (NADPH-dependent)</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05170g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05170g'  target='_blank'> Link to GRYC</a>",
                  x : 1.23962058812923,
                  y : 6.86132029628471
                  },
                  position : {
                  'x' : 12.3962058812923,
                  'y' : 68.6132029628471
                  },
  },
{
                  data: {
                  id: 'CAGL0E06138g',
                  name: 'CAGL0E06138g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E06138g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have fatty acid synthase activity, role in fatty acid biosynthetic process, long-chain fatty acid biosynthetic process, palmitic acid biosynthetic process and fatty acid synthase complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E06138g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E06138g'  target='_blank'> Link to GRYC</a>",
                  x : -7.19306868302601,
                  y : 6.37407945663224
                  },
                  position : {
                  'x' : -71.9306868302601,
                  'y' : 63.7407945663224
                  },
  },
{
                  data: {
                  id: 'CAGL0E06424g',
                  name: 'CAGL0E06424g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E06424g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytochrome-b5 reductase activity, acting on NAD(P)H activity and role in cellular response to oxidative stress, ergosterol biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E06424g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E06424g'  target='_blank'> Link to GRYC</a>",
                  x : 2.61920567890552,
                  y : 7.02198834972594
                  },
                  position : {
                  'x' : 26.1920567890552,
                  'y' : 70.2198834972594
                  },
  },
{
                  data: {
                  id: 'CAGL0F00407g',
                  name: 'CAGL0F00407g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F00407g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have deoxyhypusine monooxygenase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00407g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00407g'  target='_blank'> Link to GRYC</a>",
                  x : -0.470259939198458,
                  y : -4.76096471332785
                  },
                  position : {
                  'x' : -4.70259939198458,
                  'y' : -47.6096471332785
                  },
  },
{
                  data: {
                  id: 'CAGL0F03399g',
                  name: 'CAGL0F03399g',
                  gene: 'SCS7',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F03399g</h2><hr><p><b>Gene name</b> : SCS7</p><p><b>Description</b> : Ortholog(s) have fatty acid alpha-hydroxylase activity, role in inositol phosphoceramide metabolic process, mannosyl-inositol phosphorylceramide metabolic process and membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F03399g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F03399g'  target='_blank'> Link to GRYC</a>",
                  x : 1.05004095700049,
                  y : -1.67768991755832
                  },
                  position : {
                  'x' : 10.5004095700049,
                  'y' : -16.7768991755832
                  },
  },
{
                  data: {
                  id: 'CAGL0F04213g',
                  name: 'CAGL0F04213g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F04213g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATP:ADP antiporter activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04213g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04213g'  target='_blank'> Link to GRYC</a>",
                  x : 3.7006487155204,
                  y : 1.2428339267715
                  },
                  position : {
                  'x' : 37.006487155204,
                  'y' : 12.428339267715
                  },
  },
{
                  data: {
                  id: 'CAGL0F04565g',
                  name: 'CAGL0F04565g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F04565g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ubiquinol-cytochrome-c reductase activity, role in aerobic respiration and mitochondrial respiratory chain complex III, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04565g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04565g'  target='_blank'> Link to GRYC</a>",
                  x : 3.32530701410104,
                  y : -2.26136848954953
                  },
                  position : {
                  'x' : 33.2530701410104,
                  'y' : -22.6136848954953
                  },
  },
{
                  data: {
                  id: 'CAGL0F04719g',
                  name: 'CAGL0F04719g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F04719g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycogen (starch) synthase activity, role in glycogen biosynthetic process and cytoplasm localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04719g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04719g'  target='_blank'> Link to GRYC</a>",
                  x : -1.50592351080447,
                  y : 8.34496281859673
                  },
                  position : {
                  'x' : -15.0592351080447,
                  'y' : 83.4496281859673
                  },
  },
{
                  data: {
                  id: 'CAGL0F04895g',
                  name: 'CAGL0F04895g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F04895g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycogen phosphorylase activity, role in glycogen catabolic process and cell surface, cytoplasm, hyphal cell wall localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04895g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04895g'  target='_blank'> Link to GRYC</a>",
                  x : 0.187860264547923,
                  y : 8.73616768595522
                  },
                  position : {
                  'x' : 1.87860264547923,
                  'y' : 87.3616768595522
                  },
  },
{
                  data: {
                  id: 'CAGL0F05071g',
                  name: 'CAGL0F05071g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F05071g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have dodecenoyl-CoA delta-isomerase activity, role in fatty acid beta-oxidation, filamentous growth and peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F05071g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F05071g'  target='_blank'> Link to GRYC</a>",
                  x : 2.118260147266,
                  y : 7.23120042115833
                  },
                  position : {
                  'x' : 21.18260147266,
                  'y' : 72.3120042115833
                  },
  },
{
                  data: {
                  id: 'CAGL0F05863g',
                  name: 'CAGL0F05863g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F05863g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have succinate dehydrogenase (ubiquinone) activity, role in cellular respiration and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F05863g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F05863g'  target='_blank'> Link to GRYC</a>",
                  x : 2.80788913778125,
                  y : -1.79542027859758
                  },
                  position : {
                  'x' : 28.0788913778125,
                  'y' : -17.9542027859758
                  },
  },
{
                  data: {
                  id: 'CAGL0F06413g',
                  name: 'CAGL0F06413g',
                  gene: 'FET3',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#66ff66',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F06413g</h2><hr><p><b>Gene name</b> : FET3</p><p><b>Description</b> : Putative copper ferroxidase involved in iron uptake</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F06413g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F06413g'  target='_blank'> Link to GRYC</a>",
                  x : 8.64310331240161,
                  y : 4.52895461224644
                  },
                  position : {
                  'x' : 86.4310331240161,
                  'y' : 45.2895461224644
                  },
  },
{
                  data: {
                  id: 'CAGL0F07513g',
                  name: 'CAGL0F07513g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F07513g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in aerobic respiration</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F07513g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F07513g'  target='_blank'> Link to GRYC</a>",
                  x : 2.5604686416335,
                  y : 3.72289056263297
                  },
                  position : {
                  'x' : 25.604686416335,
                  'y' : 37.2289056263297
                  },
  },
{
                  data: {
                  id: 'CAGL0F08745g',
                  name: 'CAGL0F08745g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F08745g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cellular response to desiccation and cytoplasm localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F08745g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F08745g'  target='_blank'> Link to GRYC</a>",
                  x : 1.56822611266918,
                  y : 8.95576734482194
                  },
                  position : {
                  'x' : 15.6822611266918,
                  'y' : 89.5576734482194
                  },
  },
{
                  data: {
                  id: 'CAGL0G01540g',
                  name: 'CAGL0G01540g',
                  gene: 'NCE103',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G01540g</h2><hr><p><b>Gene name</b> : NCE103</p><p><b>Description</b> : Beta carbonic anhydrase with a predicted role in non-classical protein export; upregulated in azole-resistant strain; enzyme activity increased by amines and amino acids; protein abundance decreased in ace2 cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G01540g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G01540g'  target='_blank'> Link to GRYC</a>",
                  x : -3.90073884461443,
                  y : 4.33953590562997
                  },
                  position : {
                  'x' : -39.0073884461443,
                  'y' : 43.3953590562997
                  },
  },
{
                  data: {
                  id: 'CAGL0G02585g',
                  name: 'CAGL0G02585g',
                  gene: 'LYS12',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G02585g</h2><hr><p><b>Gene name</b> : LYS12</p><p><b>Description</b> : Homo-isocitrate dehydrogenase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G02585g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G02585g'  target='_blank'> Link to GRYC</a>",
                  x : -2.73544231918372,
                  y : -1.47041880337685
                  },
                  position : {
                  'x' : -27.3544231918372,
                  'y' : -14.7041880337685
                  },
  },
{
                  data: {
                  id: 'CAGL0G05698g',
                  name: 'CAGL0G05698g',
                  gene: 'GDH2',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G05698g</h2><hr><p><b>Gene name</b> : GDH2</p><p><b>Description</b> : Ortholog(s) have glutamate dehydrogenase (NAD+) activity and role in nitrogen compound metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G05698g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G05698g'  target='_blank'> Link to GRYC</a>",
                  x : 1.81114144551858,
                  y : 6.99160354873662
                  },
                  position : {
                  'x' : 18.1114144551858,
                  'y' : 69.9160354873662
                  },
  },
{
                  data: {
                  id: 'CAGL0G06402g',
                  name: 'CAGL0G06402g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G06402g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06402g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06402g'  target='_blank'> Link to GRYC</a>",
                  x : 1.93675061608364,
                  y : -2.82141039208482
                  },
                  position : {
                  'x' : 19.3675061608364,
                  'y' : -28.2141039208481
                  },
  },
{
                  data: {
                  id: 'CAGL0G08712g',
                  name: 'CAGL0G08712g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G08712g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have mitochondrial nucleoid, mitochondrial oxoglutarate dehydrogenase complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G08712g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G08712g'  target='_blank'> Link to GRYC</a>",
                  x : 3.33511965415593,
                  y : 2.27306372140237
                  },
                  position : {
                  'x' : 33.3511965415593,
                  'y' : 22.7306372140237
                  },
  },
{
                  data: {
                  id: 'CAGL0G09383g',
                  name: 'CAGL0G09383g',
                  gene: 'TDH3',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G09383g</h2><hr><p><b>Gene name</b> : TDH3</p><p><b>Description</b> : Putative glyceraldehyde-3-phosphate dehydrogenase; increased protein abundance in azole resistant strain; expression upregulated in biofilm vs planktonic cell culture; upregulated in hypoxia</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G09383g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G09383g'  target='_blank'> Link to GRYC</a>",
                  x : 1.51272635403394,
                  y : 5.52053541029246
                  },
                  position : {
                  'x' : 15.1272635403394,
                  'y' : 55.2053541029246
                  },
  },
{
                  data: {
                  id: 'CAGL0G09977g',
                  name: 'CAGL0G09977g',
                  gene: 'GDB1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G09977g</h2><hr><p><b>Gene name</b> : GDB1</p><p><b>Description</b> : Ortholog(s) have 4-alpha-glucanotransferase activity, amylo-alpha-1,6-glucosidase activity and role in glycogen catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G09977g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G09977g'  target='_blank'> Link to GRYC</a>",
                  x : 1.3391719135347,
                  y : 8.32148308963736
                  },
                  position : {
                  'x' : 13.391719135347,
                  'y' : 83.2148308963736
                  },
  },
{
                  data: {
                  id: 'CAGL0G10131g',
                  name: 'CAGL0G10131g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G10131g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ubiquinol-cytochrome-c reductase activity and role in aerobic respiration, mitochondrial electron transport, ubiquinol to cytochrome c</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G10131g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G10131g'  target='_blank'> Link to GRYC</a>",
                  x : 1.69663358098715,
                  y : -2.57200474602988
                  },
                  position : {
                  'x' : 16.9663358098715,
                  'y' : -25.7200474602988
                  },
  },
{
                  data: {
                  id: 'CAGL0G10153g',
                  name: 'CAGL0G10153g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G10153g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in mitochondrial electron transport, ubiquinol to cytochrome c and mitochondrial respiratory chain complex III localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G10153g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G10153g'  target='_blank'> Link to GRYC</a>",
                  x : 1.68691586495547,
                  y : -3.19407709491307
                  },
                  position : {
                  'x' : 16.8691586495547,
                  'y' : -31.9407709491307
                  },
  },
{
                  data: {
                  id: 'CAGL0H02491g',
                  name: 'CAGL0H02491g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0H02491g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytochrome-c oxidase activity, role in mitochondrial electron transport, cytochrome c to oxygen and mitochondrial respiratory chain complex IV, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02491g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02491g'  target='_blank'> Link to GRYC</a>",
                  x : 2.57971880052165,
                  y : -2.58021326809788
                  },
                  position : {
                  'x' : 25.7971880052165,
                  'y' : -25.8021326809788
                  },
  },
{
                  data: {
                  id: 'CAGL0H03795g',
                  name: 'CAGL0H03795g',
                  gene: 'LEU2',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H03795g</h2><hr><p><b>Gene name</b> : LEU2</p><p><b>Description</b> : 3-isopropylmalate dehydrogenase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H03795g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H03795g'  target='_blank'> Link to GRYC</a>",
                  x : -3.76424462122061,
                  y : 10.1469645791246
                  },
                  position : {
                  'x' : -37.6424462122061,
                  'y' : 101.469645791246
                  },
  },
{
                  data: {
                  id: 'CAGL0H04037g',
                  name: 'CAGL0H04037g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H04037g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have heat shock protein binding, protein phosphatase regulator activity and role in glycogen metabolic process, meiotic cell cycle, mitotic spindle assembly checkpoint, response to heat</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H04037g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H04037g'  target='_blank'> Link to GRYC</a>",
                  x : -0.819091810101252,
                  y : 7.81288731555796
                  },
                  position : {
                  'x' : -8.19091810101252,
                  'y' : 78.1288731555796
                  },
  },
{
                  data: {
                  id: 'CAGL0H04125g',
                  name: 'CAGL0H04125g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H04125g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have D-arabinono-1,4-lactone oxidase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H04125g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H04125g'  target='_blank'> Link to GRYC</a>",
                  x : 2.62878294793539,
                  y : 5.16841244841764
                  },
                  position : {
                  'x' : 26.2878294793539,
                  'y' : 51.6841244841764
                  },
  },
{
                  data: {
                  id: 'CAGL0H04939g',
                  name: 'CAGL0H04939g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H04939g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have fructose 1,6-bisphosphate 1-phosphatase activity, role in gluconeogenesis, reactive oxygen species metabolic process and cytosol, periplasmic space localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H04939g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H04939g'  target='_blank'> Link to GRYC</a>",
                  x : 2.39694687073203,
                  y : 5.56491126800571
                  },
                  position : {
                  'x' : 23.9694687073203,
                  'y' : 55.6491126800571
                  },
  },
{
                  data: {
                  id: 'CAGL0H05137g',
                  name: 'CAGL0H05137g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H05137g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have aldehyde dehydrogenase [NAD(P)+] activity, role in NADPH regeneration, acetate biosynthetic process, response to salt stress and cytosol, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H05137g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H05137g'  target='_blank'> Link to GRYC</a>",
                  x : -5.72183368737051,
                  y : -0.24307569325434
                  },
                  position : {
                  'x' : -57.2183368737051,
                  'y' : -2.4307569325434
                  },
  },
{
                  data: {
                  id: 'CAGL0H06699g',
                  name: 'CAGL0H06699g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H06699g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycerol-3-phosphate dehydrogenase (quinone) activity and role in NADH oxidation, glycerol metabolic process, replicative cell aging</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H06699g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H06699g'  target='_blank'> Link to GRYC</a>",
                  x : 3.20182412875206,
                  y : 3.60709700005865
                  },
                  position : {
                  'x' : 32.0182412875206,
                  'y' : 36.0709700005865
                  },
  },
{
                  data: {
                  id: 'CAGL0H06787g',
                  name: 'CAGL0H06787g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H06787g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have acetyl-CoA C-acyltransferase activity, mRNA binding activity, role in fatty acid beta-oxidation, icosanoid biosynthetic process and mitochondrial intermembrane space, peroxisomal matrix, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H06787g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H06787g'  target='_blank'> Link to GRYC</a>",
                  x : 9.61605679430761,
                  y : 1.06130530745015
                  },
                  position : {
                  'x' : 96.1605679430761,
                  'y' : 10.6130530745015
                  },
  },
{
                  data: {
                  id: 'CAGL0H08063g',
                  name: 'CAGL0H08063g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H08063g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 2,4-dienoyl-CoA reductase (NADPH) activity, role in ascospore formation, fatty acid catabolic process and peroxisomal matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H08063g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H08063g'  target='_blank'> Link to GRYC</a>",
                  x : 1.86299119453694,
                  y : 8.00311686365492
                  },
                  position : {
                  'x' : 18.6299119453694,
                  'y' : 80.0311686365492
                  },
  },
{
                  data: {
                  id: 'CAGL0H09944g',
                  name: 'CAGL0H09944g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0H09944g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 2-alkenal reductase [NAD(P)] activity, NADPH:quinone reductase activity, mRNA 3'-UTR AU-rich region binding activity and role in cellular response to oxidative stress</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H09944g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H09944g'  target='_blank'> Link to GRYC</a>",
                  x : -3.81307292043248,
                  y : 6.32743147724966
                  },
                  position : {
                  'x' : -38.1307292043248,
                  'y' : 63.2743147724966
                  },
  },
{
                  data: {
                  id: 'CAGL0I00748g',
                  name: 'CAGL0I00748g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I00748g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have NADH dehydrogenase activity, role in NADH oxidation, chronological cell aging, glycolytic fermentation to ethanol and mitochondrion, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I00748g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I00748g'  target='_blank'> Link to GRYC</a>",
                  x : 1.2282391751357,
                  y : -2.73090550469692
                  },
                  position : {
                  'x' : 12.282391751357,
                  'y' : -27.3090550469692
                  },
  },
{
                  data: {
                  id: 'CAGL0I01100g',
                  name: 'CAGL0I01100g',
                  gene: 'GCY1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I01100g</h2><hr><p><b>Gene name</b> : GCY1</p><p><b>Description</b> : Ortholog(s) have alditol:NADP+ 1-oxidoreductase activity, aldo-keto reductase (NADP) activity, glycerol dehydrogenase [NAD(P)+] activity, mRNA binding, oxidoreductase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01100g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01100g'  target='_blank'> Link to GRYC</a>",
                  x : -1.87417908852783,
                  y : 6.57447403839746
                  },
                  position : {
                  'x' : -18.7417908852783,
                  'y' : 65.7447403839746
                  },
  },
{
                  data: {
                  id: 'CAGL0I01166g',
                  name: 'CAGL0I01166g',
                  gene: 'TRR1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0I01166g</h2><hr><p><b>Gene name</b> : TRR1</p><p><b>Description</b> : Thioredoxin reductase (NADPH)</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01166g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01166g'  target='_blank'> Link to GRYC</a>",
                  x : -5.24525379445768,
                  y : 5.7276755339001
                  },
                  position : {
                  'x' : -52.4525379445768,
                  'y' : 57.276755339001
                  },
  },
{
                  data: {
                  id: 'CAGL0I01408g',
                  name: 'CAGL0I01408g',
                  gene: 'CYC1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I01408g</h2><hr><p><b>Gene name</b> : CYC1</p><p><b>Description</b> : Ortholog(s) have electron transfer activity and role in mitochondrial ATP synthesis coupled electron transport, mitochondrial electron transport, cytochrome c to oxygen, mitochondrial electron transport, ubiquinol to cytochrome c</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01408g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01408g'  target='_blank'> Link to GRYC</a>",
                  x : -1.79566643769808,
                  y : -5.29869244310359
                  },
                  position : {
                  'x' : -17.9566643769808,
                  'y' : -52.9869244310359
                  },
  },
{
                  data: {
                  id: 'CAGL0I02024g',
                  name: 'CAGL0I02024g',
                  gene: 'OYE2',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I02024g</h2><hr><p><b>Gene name</b> : OYE2</p><p><b>Description</b> : Putative NADPH dehydrogenase; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02024g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02024g'  target='_blank'> Link to GRYC</a>",
                  x : -1.61417361047245,
                  y : 7.2342088801428
                  },
                  position : {
                  'x' : -16.1417361047245,
                  'y' : 72.342088801428
                  },
  },
{
                  data: {
                  id: 'CAGL0I02530g',
                  name: 'CAGL0I02530g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I02530g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have N,N-dimethylaniline monooxygenase activity, role in protein folding and endoplasmic reticulum membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02530g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02530g'  target='_blank'> Link to GRYC</a>",
                  x : -0.138445828104176,
                  y : 8.0806989212458
                  },
                  position : {
                  'x' : -1.38445828104176,
                  'y' : 80.806989212458
                  },
  },
{
                  data: {
                  id: 'CAGL0I03190g',
                  name: 'CAGL0I03190g',
                  gene: 'RIP1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I03190g</h2><hr><p><b>Gene name</b> : RIP1</p><p><b>Description</b> : Putative ubiquinol-Cytochrome c reductase iron-sulfur protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I03190g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I03190g'  target='_blank'> Link to GRYC</a>",
                  x : 2.7766766759666,
                  y : -2.30869934578368
                  },
                  position : {
                  'x' : 27.766766759666,
                  'y' : -23.0869934578368
                  },
  },
{
                  data: {
                  id: 'CAGL0I05934g',
                  name: 'CAGL0I05934g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I05934g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ubiquitin-protein transferase regulator activity and role in cellular response to water deprivation, stress-induced homeostatically regulated protein degradation pathway</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I05934g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I05934g'  target='_blank'> Link to GRYC</a>",
                  x : 2.36413304934381,
                  y : 10.2795838929378
                  },
                  position : {
                  'x' : 23.6413304934381,
                  'y' : 102.795838929378
                  },
  },
{
                  data: {
                  id: 'CAGL0I06831g',
                  name: 'CAGL0I06831g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I06831g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 2 iron, 2 sulfur cluster binding, electron transfer activity, iron-sulfur cluster binding, oxidoreductase activity, acting on NAD(P)H, oxidoreductase activity, acting on NAD(P)H, heme protein as acceptor activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I06831g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I06831g'  target='_blank'> Link to GRYC</a>",
                  x : 1.37501661503853,
                  y : -1.93362755440878
                  },
                  position : {
                  'x' : 13.7501661503853,
                  'y' : -19.3362755440878
                  },
  },
{
                  data: {
                  id: 'CAGL0I07843g',
                  name: 'CAGL0I07843g',
                  gene: 'ADH1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I07843g</h2><hr><p><b>Gene name</b> : ADH1</p><p><b>Description</b> : Putative alcohol dehydrogenase isoenzyme III; increased protein abundance in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I07843g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I07843g'  target='_blank'> Link to GRYC</a>",
                  x : 1.42179361338387,
                  y : 4.18835690739028
                  },
                  position : {
                  'x' : 14.2179361338387,
                  'y' : 41.8835690739028
                  },
  },
{
                  data: {
                  id: 'CAGL0I09328g',
                  name: 'CAGL0I09328g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I09328g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 3-dehydrosphinganine reductase activity, role in 3-keto-sphinganine metabolic process, sphingolipid biosynthetic process and lipid droplet localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09328g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09328g'  target='_blank'> Link to GRYC</a>",
                  x : -4.45544751874441,
                  y : 0.96335942300562
                  },
                  position : {
                  'x' : -44.5544751874441,
                  'y' : 9.6335942300562
                  },
  },
{
                  data: {
                  id: 'CAGL0J00429g',
                  name: 'CAGL0J00429g',
                  gene: 'COX6',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J00429g</h2><hr><p><b>Gene name</b> : COX6</p><p><b>Description</b> : Cytochrome c oxidase subunit VI</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J00429g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J00429g'  target='_blank'> Link to GRYC</a>",
                  x : 1.68015276804989,
                  y : -1.67510844409005
                  },
                  position : {
                  'x' : 16.8015276804989,
                  'y' : -16.7510844409005
                  },
  },
{
                  data: {
                  id: 'CAGL0J00451g',
                  name: 'CAGL0J00451g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0J00451g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative glyceraldehyde-3-phosphate dehydrogenase; protein differentially expressed in azole resistant strain; expression downregulated in biofilm vs planktonic cell culture</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J00451g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J00451g'  target='_blank'> Link to GRYC</a>",
                  x : 8.36763331797639,
                  y : 8.11630571827464
                  },
                  position : {
                  'x' : 83.6763331797639,
                  'y' : 81.1630571827464
                  },
  },
{
                  data: {
                  id: 'CAGL0J00847g',
                  name: 'CAGL0J00847g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0J00847g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have succinate dehydrogenase (ubiquinone) activity and role in cellular respiration</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J00847g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J00847g'  target='_blank'> Link to GRYC</a>",
                  x : 3.47965407143613,
                  y : -0.137711110992694
                  },
                  position : {
                  'x' : 34.7965407143613,
                  'y' : -1.37711110992694
                  },
  },
{
                  data: {
                  id: 'CAGL0J01441g',
                  name: 'CAGL0J01441g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J01441g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have alcohol dehydrogenase (NAD) activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J01441g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J01441g'  target='_blank'> Link to GRYC</a>",
                  x : -5.71284655902151,
                  y : 0.799403210710625
                  },
                  position : {
                  'x' : -57.1284655902151,
                  'y' : 7.99403210710625
                  },
  },
{
                  data: {
                  id: 'CAGL0J02904g',
                  name: 'CAGL0J02904g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J02904g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have protein phosphatase regulator activity, role in glycogen metabolic process, protein dephosphorylation and protein phosphatase type 1 complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J02904g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J02904g'  target='_blank'> Link to GRYC</a>",
                  x : -0.200559072244081,
                  y : 7.39783219612558
                  },
                  position : {
                  'x' : -2.00559072244081,
                  'y' : 73.9783219612558
                  },
  },
{
                  data: {
                  id: 'CAGL0J03080g',
                  name: 'CAGL0J03080g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J03080g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in energy reserve metabolic process and cell periphery localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03080g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03080g'  target='_blank'> Link to GRYC</a>",
                  x : 9.47149151864434,
                  y : 5.94516938047121
                  },
                  position : {
                  'x' : 94.7149151864434,
                  'y' : 59.4516938047121
                  },
  },
{
                  data: {
                  id: 'CAGL0J03212g',
                  name: 'CAGL0J03212g',
                  gene: 'ALD5',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0J03212g</h2><hr><p><b>Gene name</b> : ALD5</p><p><b>Description</b> : Putative mitochondrial aldehyde dehydrogenase (NAD+); protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03212g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03212g'  target='_blank'> Link to GRYC</a>",
                  x : -4.81908533201462,
                  y : 5.11211554046098
                  },
                  position : {
                  'x' : -48.1908533201462,
                  'y' : 51.1211554046098
                  },
  },
{
                  data: {
                  id: 'CAGL0J03894g',
                  name: 'CAGL0J03894g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J03894g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have dihydrofolate reductase activity, drug binding, mRNA binding activity and role in dihydrofolate metabolic process, tetrahydrofolate biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03894g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03894g'  target='_blank'> Link to GRYC</a>",
                  x : 0.00885242477116039,
                  y : -3.33950773282033
                  },
                  position : {
                  'x' : 0.0885242477116039,
                  'y' : -33.3950773282033
                  },
  },
{
                  data: {
                  id: 'CAGL0J05852g',
                  name: 'CAGL0J05852g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J05852g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in secondary metabolite biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J05852g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J05852g'  target='_blank'> Link to GRYC</a>",
                  x : 2.46537933608042,
                  y : 4.6633922084244
                  },
                  position : {
                  'x' : 24.6537933608042,
                  'y' : 46.633922084244
                  },
  },
{
                  data: {
                  id: 'CAGL0J09812g',
                  name: 'CAGL0J09812g',
                  gene: 'TPS1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J09812g</h2><hr><p><b>Gene name</b> : TPS1</p><p><b>Description</b> : Ortholog(s) have alpha,alpha-trehalose-phosphate synthase (UDP-forming) activity, trehalose-phosphatase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09812g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09812g'  target='_blank'> Link to GRYC</a>",
                  x : -1.67836554423913,
                  y : 7.56630865094491
                  },
                  position : {
                  'x' : -16.7836554423913,
                  'y' : 75.6630865094491
                  },
  },
{
                  data: {
                  id: 'CAGL0J11682g',
                  name: 'CAGL0J11682g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J11682g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in aerobic respiration, development of symbiont in host and mitochondrial intermembrane space localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J11682g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J11682g'  target='_blank'> Link to GRYC</a>",
                  x : 2.4625710770961,
                  y : -2.17526353653437
                  },
                  position : {
                  'x' : 24.625710770961,
                  'y' : -21.7526353653437
                  },
  },
{
                  data: {
                  id: 'CAGL0K00847g',
                  name: 'CAGL0K00847g',
                  gene: 'CIR1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K00847g</h2><hr><p><b>Gene name</b> : CIR1</p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K00847g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K00847g'  target='_blank'> Link to GRYC</a>",
                  x : 1.90933070109019,
                  y : 4.56304546978526
                  },
                  position : {
                  'x' : 19.0933070109019,
                  'y' : 45.6304546978526
                  },
  },
{
                  data: {
                  id: 'CAGL0K02629g',
                  name: 'CAGL0K02629g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K02629g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have intracellular localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K02629g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K02629g'  target='_blank'> Link to GRYC</a>",
                  x : 1.2041870001514,
                  y : 7.7831852182708
                  },
                  position : {
                  'x' : 12.041870001514,
                  'y' : 77.831852182708
                  },
  },
{
                  data: {
                  id: 'CAGL0K02893g',
                  name: 'CAGL0K02893g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0K02893g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ubiquinol-cytochrome-c reductase activity, role in aerobic respiration, mitochondrial electron transport, ubiquinol to cytochrome c and mitochondrial respiratory chain complex III localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K02893g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K02893g'  target='_blank'> Link to GRYC</a>",
                  x : 2.94165356069347,
                  y : -0.431527655365408
                  },
                  position : {
                  'x' : 29.4165356069347,
                  'y' : -4.31527655365408
                  },
  },
{
                  data: {
                  id: 'CAGL0K03421g',
                  name: 'CAGL0K03421g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0K03421g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphoglucomutase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K03421g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K03421g'  target='_blank'> Link to GRYC</a>",
                  x : -4.78115608183514,
                  y : 8.91634624091952
                  },
                  position : {
                  'x' : -47.8115608183514,
                  'y' : 89.1634624091952
                  },
  },
{
                  data: {
                  id: 'CAGL0K05137g',
                  name: 'CAGL0K05137g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K05137g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have alpha,alpha-trehalase activity and role in cellular response to desiccation, cellular response to ethanol, cellular response to freezing, pathogenesis, trehalose catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K05137g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K05137g'  target='_blank'> Link to GRYC</a>",
                  x : 8.49408208983319,
                  y : 6.77683488768162
                  },
                  position : {
                  'x' : 84.9408208983319,
                  'y' : 67.7683488768162
                  },
  },
{
                  data: {
                  id: 'CAGL0K05687g',
                  name: 'CAGL0K05687g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K05687g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted FMN binding, catalytic activity, oxidoreductase activity and role in oxidation-reduction process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K05687g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K05687g'  target='_blank'> Link to GRYC</a>",
                  x : 0.939642957750258,
                  y : 7.08390118828874
                  },
                  position : {
                  'x' : 9.39642957750258,
                  'y' : 70.8390118828874
                  },
  },
{
                  data: {
                  id: 'CAGL0K05813g',
                  name: 'CAGL0K05813g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K05813g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have disulfide oxidoreductase activity, glutathione disulfide oxidoreductase activity, glutathione peroxidase activity, glutathione transferase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K05813g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K05813g'  target='_blank'> Link to GRYC</a>",
                  x : -0.652461587949094,
                  y : 8.14568152023854
                  },
                  position : {
                  'x' : -6.52461587949094,
                  'y' : 81.4568152023854
                  },
  },
{
                  data: {
                  id: 'CAGL0K06259g',
                  name: 'CAGL0K06259g',
                  gene: 'TSA1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0K06259g</h2><hr><p><b>Gene name</b> : TSA1</p><p><b>Description</b> : Thiol-specific antioxidant protein; predicted thioredoxin peroxidase involved in oxidative stress response; protein abundance decreased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K06259g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K06259g'  target='_blank'> Link to GRYC</a>",
                  x : 10.0154835572535,
                  y : 4.41795855245016
                  },
                  position : {
                  'x' : 100.154835572535,
                  'y' : 44.1795855245016
                  },
  },
{
                  data: {
                  id: 'CAGL0K07480g',
                  name: 'CAGL0K07480g',
                  gene: 'PGM1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K07480g</h2><hr><p><b>Gene name</b> : PGM1</p><p><b>Description</b> : Putative phosphoglucomutase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07480g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07480g'  target='_blank'> Link to GRYC</a>",
                  x : -1.95131244505561,
                  y : 8.67622103039163
                  },
                  position : {
                  'x' : -19.5131244505561,
                  'y' : 86.7622103039163
                  },
  },
{
                  data: {
                  id: 'CAGL0K08184g',
                  name: 'CAGL0K08184g',
                  gene: 'CCP1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K08184g</h2><hr><p><b>Gene name</b> : CCP1</p><p><b>Description</b> : Cytochrome C peroxidase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08184g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08184g'  target='_blank'> Link to GRYC</a>",
                  x : 2.53366879343433,
                  y : -3.36995253687688
                  },
                  position : {
                  'x' : 25.3366879343433,
                  'y' : -33.6995253687688
                  },
  },
{
                  data: {
                  id: 'CAGL0K09702g',
                  name: 'CAGL0K09702g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K09702g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative stress-induced alcohol dehydrogenase; gene is upregulated in azole-resistant strain; protein differentially expressed in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K09702g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K09702g'  target='_blank'> Link to GRYC</a>",
                  x : -2.30249645199188,
                  y : 8.29151472420964
                  },
                  position : {
                  'x' : -23.0249645199188,
                  'y' : 82.9151472420964
                  },
  },
{
                  data: {
                  id: 'CAGL0K10736g',
                  name: 'CAGL0K10736g',
                  gene: 'CYB2',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K10736g</h2><hr><p><b>Gene name</b> : CYB2</p><p><b>Description</b> : Ortholog(s) have L-lactate dehydrogenase (cytochrome) activity and mitochondrial intermembrane space, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10736g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10736g'  target='_blank'> Link to GRYC</a>",
                  x : -2.03977061674829,
                  y : 7.35687055440875
                  },
                  position : {
                  'x' : -20.3977061674829,
                  'y' : 73.5687055440875
                  },
  },
{
                  data: {
                  id: 'CAGL0K10780g',
                  name: 'CAGL0K10780g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K10780g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have IMP dehydrogenase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10780g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10780g'  target='_blank'> Link to GRYC</a>",
                  x : -0.50233891543305,
                  y : -2.158723839101
                  },
                  position : {
                  'x' : -5.0233891543305,
                  'y' : -21.58723839101
                  },
  },
{
                  data: {
                  id: 'CAGL0K10868g',
                  name: 'CAGL0K10868g',
                  gene: 'CTA1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K10868g</h2><hr><p><b>Gene name</b> : CTA1</p><p><b>Description</b> : Putative catalase A; gene is downregulated in azole-resistant strain; regulated by oxidative stress and glucose starvation; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10868g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10868g'  target='_blank'> Link to GRYC</a>",
                  x : -4.68996525184623,
                  y : -3.85406464823807
                  },
                  position : {
                  'x' : -46.8996525184623,
                  'y' : -38.5406464823807
                  },
  },
{
                  data: {
                  id: 'CAGL0K11858g',
                  name: 'CAGL0K11858g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K11858g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative flavodoxin</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K11858g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K11858g'  target='_blank'> Link to GRYC</a>",
                  x : 0.139373711908012,
                  y : 7.08790700738275
                  },
                  position : {
                  'x' : 1.39373711908012,
                  'y' : 70.8790700738275
                  },
  },
{
                  data: {
                  id: 'CAGL0K12100g',
                  name: 'CAGL0K12100g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K12100g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative coproporphyrinogen III oxidase; protein differentially expressed in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K12100g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K12100g'  target='_blank'> Link to GRYC</a>",
                  x : -2.2371111709145,
                  y : -4.71523651284445
                  },
                  position : {
                  'x' : -22.371111709145,
                  'y' : -47.1523651284445
                  },
  },
{
                  data: {
                  id: 'CAGL0L00429g',
                  name: 'CAGL0L00429g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L00429g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycine dehydrogenase (decarboxylating) activity and role in glycine decarboxylation via glycine cleavage system, one-carbon metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L00429g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L00429g'  target='_blank'> Link to GRYC</a>",
                  x : 1.70198166304586,
                  y : 7.43918578392639
                  },
                  position : {
                  'x' : 17.0198166304586,
                  'y' : 74.3918578392639
                  },
  },
{
                  data: {
                  id: 'CAGL0L01089g',
                  name: 'CAGL0L01089g',
                  gene: 'GLT1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L01089g</h2><hr><p><b>Gene name</b> : GLT1</p><p><b>Description</b> : Ortholog(s) have glutamate synthase (NADH) activity and role in L-glutamate biosynthetic process, ammonia assimilation cycle, invasive filamentous growth</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L01089g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L01089g'  target='_blank'> Link to GRYC</a>",
                  x : 2.46795880928433,
                  y : -1.80933281980681
                  },
                  position : {
                  'x' : 24.6795880928433,
                  'y' : -18.0933281980681
                  },
  },
{
                  data: {
                  id: 'CAGL0L01177g',
                  name: 'CAGL0L01177g',
                  gene: 'FRDS1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L01177g</h2><hr><p><b>Gene name</b> : FRDS1</p><p><b>Description</b> : Putative soluble fumarate reductase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L01177g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L01177g'  target='_blank'> Link to GRYC</a>",
                  x : -3.43064726001082,
                  y : 7.04099669552109
                  },
                  position : {
                  'x' : -34.3064726001082,
                  'y' : 70.4099669552109
                  },
  },
{
                  data: {
                  id: 'CAGL0L02167g',
                  name: 'CAGL0L02167g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L02167g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 3-hydroxyacyl-CoA dehydrogenase activity, enoyl-CoA hydratase activity and role in fatty acid beta-oxidation, fatty acid catabolic process, glyoxylate cycle, pathogenesis, very long-chain fatty acid catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L02167g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L02167g'  target='_blank'> Link to GRYC</a>",
                  x : 9.38858687290913,
                  y : 0.133478246179951
                  },
                  position : {
                  'x' : 93.8858687290913,
                  'y' : 1.33478246179951
                  },
  },
{
                  data: {
                  id: 'CAGL0L03828g',
                  name: 'CAGL0L03828g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L03828g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have electron transfer activity, role in ergosterol biosynthetic process, sterol biosynthetic process and endoplasmic reticulum membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03828g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03828g'  target='_blank'> Link to GRYC</a>",
                  x : -7.3122832458719,
                  y : -2.55813845985304
                  },
                  position : {
                  'x' : -73.122832458719,
                  'y' : -25.5813845985304
                  },
  },
{
                  data: {
                  id: 'CAGL0L05236g',
                  name: 'CAGL0L05236g',
                  gene: 'MDH1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0L05236g</h2><hr><p><b>Gene name</b> : MDH1</p><p><b>Description</b> : Malate dehydrogenase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L05236g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L05236g'  target='_blank'> Link to GRYC</a>",
                  x : 4.08657516528616,
                  y : 0.498190649387917
                  },
                  position : {
                  'x' : 40.8657516528616,
                  'y' : 4.98190649387917
                  },
  },
{
                  data: {
                  id: 'CAGL0L05258g',
                  name: 'CAGL0L05258g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0L05258g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have sulfiredoxin activity and role in cellular protein localization, cellular response to oxidative stress</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L05258g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L05258g'  target='_blank'> Link to GRYC</a>",
                  x : 7.41211631006651,
                  y : 9.39216322444429
                  },
                  position : {
                  'x' : 74.1211631006651,
                  'y' : 93.9216322444429
                  },
  },
{
                  data: {
                  id: 'CAGL0L06160g',
                  name: 'CAGL0L06160g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L06160g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytochrome-c oxidase activity, zinc ion binding activity and role in mitochondrial electron transport, cytochrome c to oxygen</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06160g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06160g'  target='_blank'> Link to GRYC</a>",
                  x : 2.32576838211328,
                  y : -2.80177966611575
                  },
                  position : {
                  'x' : 23.2576838211328,
                  'y' : -28.0177966611575
                  },
  },
{
                  data: {
                  id: 'CAGL0L06666g',
                  name: 'CAGL0L06666g',
                  gene: 'YHB1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L06666g</h2><hr><p><b>Gene name</b> : YHB1</p><p><b>Description</b> : Putative flavohemoglobin, involved in nitric oxide detoxification</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06666g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06666g'  target='_blank'> Link to GRYC</a>",
                  x : -6.29219653336529,
                  y : -3.41812998262601
                  },
                  position : {
                  'x' : -62.9219653336529,
                  'y' : -34.1812998262601
                  },
  },
{
                  data: {
                  id: 'CAGL0L09537g',
                  name: 'CAGL0L09537g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L09537g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted FMN binding, catalytic activity, oxidoreductase activity and role in oxidation-reduction process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L09537g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L09537g'  target='_blank'> Link to GRYC</a>",
                  x : 1.34351635155379,
                  y : 6.57239693910146
                  },
                  position : {
                  'x' : 13.4351635155379,
                  'y' : 65.7239693910146
                  },
  },
{
                  data: {
                  id: 'CAGL0L10406g',
                  name: 'CAGL0L10406g',
                  gene: 'CYT1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0L10406g</h2><hr><p><b>Gene name</b> : CYT1</p><p><b>Description</b> : Ortholog(s) have electron transporter, transferring electrons within CoQH2-cytochrome c reductase complex activity and role in mitochondrial electron transport, ubiquinol to cytochrome c</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10406g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10406g'  target='_blank'> Link to GRYC</a>",
                  x : 2.77038028263726,
                  y : -1.25798496268069
                  },
                  position : {
                  'x' : 27.7038028263726,
                  'y' : -12.5798496268069
                  },
  },
{
                  data: {
                  id: 'CAGL0L11506g',
                  name: 'CAGL0L11506g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L11506g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have hydroxymethylglutaryl-CoA reductase (NADPH) activity and role in cellular response to drug, ergosterol biosynthetic process, isopentenyl diphosphate biosynthetic process, mevalonate pathway</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L11506g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L11506g'  target='_blank'> Link to GRYC</a>",
                  x : -1.14833933529353,
                  y : -2.56170014968978
                  },
                  position : {
                  'x' : -11.4833933529353,
                  'y' : -25.6170014968978
                  },
  },
{
                  data: {
                  id: 'CAGL0L12364g',
                  name: 'CAGL0L12364g',
                  gene: 'ERG10',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L12364g</h2><hr><p><b>Gene name</b> : ERG10</p><p><b>Description</b> : Ortholog(s) have acetyl-CoA C-acetyltransferase activity, role in ergosterol biosynthetic process and cytoplasm, intracellular localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L12364g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L12364g'  target='_blank'> Link to GRYC</a>",
                  x : -3.76271742891395,
                  y : -2.02690670669686
                  },
                  position : {
                  'x' : -37.6271742891395,
                  'y' : -20.2690670669686
                  },
  },
{
                  data: {
                  id: 'CAGL0M03377g',
                  name: 'CAGL0M03377g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M03377g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 1,4-alpha-glucan branching enzyme activity and role in glycogen biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M03377g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M03377g'  target='_blank'> Link to GRYC</a>",
                  x : -3.17345335594078,
                  y : 7.8228079108141
                  },
                  position : {
                  'x' : -31.7345335594078,
                  'y' : 78.228079108141
                  },
  },
{
                  data: {
                  id: 'CAGL0M04499g',
                  name: 'CAGL0M04499g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M04499g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have proline dehydrogenase activity, role in proline catabolic process to glutamate and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M04499g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M04499g'  target='_blank'> Link to GRYC</a>",
                  x : 9.10366865524657,
                  y : -0.814147695129554
                  },
                  position : {
                  'x' : 91.0366865524657,
                  'y' : -8.14147695129554
                  },
  },
{
                  data: {
                  id: 'CAGL0M05951g',
                  name: 'CAGL0M05951g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M05951g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted oxidoreductase activity, role in oxidation-reduction process and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M05951g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M05951g'  target='_blank'> Link to GRYC</a>",
                  x : 0.320981757625237,
                  y : 7.78916008717234
                  },
                  position : {
                  'x' : 3.20981757625237,
                  'y' : 77.8916008717234
                  },
  },
{
                  data: {
                  id: 'CAGL0M05995g',
                  name: 'CAGL0M05995g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0M05995g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have lipid droplet localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M05995g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M05995g'  target='_blank'> Link to GRYC</a>",
                  x : 2.94917604926961,
                  y : 1.09158042825804
                  },
                  position : {
                  'x' : 29.4917604926961,
                  'y' : 10.9158042825804
                  },
  },
{
                  data: {
                  id: 'CAGL0M07271g',
                  name: 'CAGL0M07271g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M07271g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 2 iron, 2 sulfur cluster binding, glutathione disulfide oxidoreductase activity, role in [2Fe-2S] cluster assembly, protein maturation by [2Fe-2S] cluster transfer and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M07271g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M07271g'  target='_blank'> Link to GRYC</a>",
                  x : 2.14847055308009,
                  y : -2.10017087349859
                  },
                  position : {
                  'x' : 21.4847055308009,
                  'y' : -21.0017087349859
                  },
  },
{
                  data: {
                  id: 'CAGL0M07656g',
                  name: 'CAGL0M07656g',
                  gene: 'ERG5',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M07656g</h2><hr><p><b>Gene name</b> : ERG5</p><p><b>Description</b> : Putative C22 sterol desaturase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M07656g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M07656g'  target='_blank'> Link to GRYC</a>",
                  x : -1.80919834266209,
                  y : -3.44216523690325
                  },
                  position : {
                  'x' : -18.0919834266209,
                  'y' : -34.4216523690325
                  },
  },
{
                  data: {
                  id: 'CAGL0M11704g',
                  name: 'CAGL0M11704g',
                  gene: 'AHP1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M11704g</h2><hr><p><b>Gene name</b> : AHP1</p><p><b>Description</b> : Putative thiol-specific peroxiredoxin; alkyl hydroperoxide reductase; protein differentially expressed in azole resistant strain; expression upregulated in biofilm vs planktonic cell culture; protein abundance decreased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M11704g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M11704g'  target='_blank'> Link to GRYC</a>",
                  x : -3.20992872562079,
                  y : 8.858056947312
                  },
                  position : {
                  'x' : -32.0992872562079,
                  'y' : 88.58056947312
                  },
  },
{
                  data: {
                  id: 'CAGL0M12551g',
                  name: 'CAGL0M12551g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M12551g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in energy reserve metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M12551g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M12551g'  target='_blank'> Link to GRYC</a>",
                  x : 9.7355276259906,
                  y : 3.09529786151485
                  },
                  position : {
                  'x' : 97.355276259906,
                  'y' : 30.9529786151485
                  },
  },
{
                  data: {
                  id: 'CAGL0M12881g',
                  name: 'CAGL0M12881g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M12881g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have dihydroorotate dehydrogenase activity, role in 'de novo' UMP biosynthetic process and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M12881g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M12881g'  target='_blank'> Link to GRYC</a>",
                  x : 4.31098488157581,
                  y : 1.84145661075883
                  },
                  position : {
                  'x' : 43.1098488157581,
                  'y' : 18.4145661075883
                  },
  },
{
                  data: {
                  source: 'CAGL0A03905g',
                  target: 'CAGL0A02816g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C03850g',
                  target: 'CAGL0A02816g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E06138g',
                  target: 'CAGL0A02816g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01177g',
                  target: 'CAGL0A02816g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03377g',
                  target: 'CAGL0A02816g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08063g',
                  target: 'CAGL0A03366g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C01325g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C03443g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D00748g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D01958g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D05192g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03399g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04565g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F05863g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06402g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G10131g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G10153g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02491g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00748g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03190g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06831g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00429g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00847g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11682g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02893g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08184g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01089g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06160g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10406g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05995g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0A03542g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H06787g',
                  target: 'CAGL0A03740g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C03333g',
                  target: 'CAGL0A03905g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02530g',
                  target: 'CAGL0B00990g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09702g',
                  target: 'CAGL0B00990g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C03443g',
                  target: 'CAGL0C01325g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D00748g',
                  target: 'CAGL0C01325g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D01958g',
                  target: 'CAGL0C01325g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D05192g',
                  target: 'CAGL0C01325g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03399g',
                  target: 'CAGL0C01325g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04565g',
                  target: 'CAGL0C01325g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F05863g',
                  target: 'CAGL0C01325g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06402g',
                  target: 'CAGL0C01325g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G10131g',
                  target: 'CAGL0C01325g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G10153g',
                  target: 'CAGL0C01325g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02491g',
                  target: 'CAGL0C01325g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00748g',
                  target: 'CAGL0C01325g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03190g',
                  target: 'CAGL0C01325g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06831g',
                  target: 'CAGL0C01325g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00429g',
                  target: 'CAGL0C01325g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11682g',
                  target: 'CAGL0C01325g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08184g',
                  target: 'CAGL0C01325g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10780g',
                  target: 'CAGL0C01325g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01089g',
                  target: 'CAGL0C01325g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06160g',
                  target: 'CAGL0C01325g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0C01325g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G02585g',
                  target: 'CAGL0C01727g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H05137g',
                  target: 'CAGL0C01727g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09328g',
                  target: 'CAGL0C01727g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01441g',
                  target: 'CAGL0C01727g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10780g',
                  target: 'CAGL0C01727g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C03850g',
                  target: 'CAGL0C02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D00770g',
                  target: 'CAGL0C02233g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D00198g',
                  target: 'CAGL0C03333g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01441g',
                  target: 'CAGL0C03333g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D00748g',
                  target: 'CAGL0C03443g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D01958g',
                  target: 'CAGL0C03443g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D05192g',
                  target: 'CAGL0C03443g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03399g',
                  target: 'CAGL0C03443g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F05863g',
                  target: 'CAGL0C03443g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06402g',
                  target: 'CAGL0C03443g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G10131g',
                  target: 'CAGL0C03443g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G10153g',
                  target: 'CAGL0C03443g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02491g',
                  target: 'CAGL0C03443g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00748g',
                  target: 'CAGL0C03443g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03190g',
                  target: 'CAGL0C03443g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06831g',
                  target: 'CAGL0C03443g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00429g',
                  target: 'CAGL0C03443g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03894g',
                  target: 'CAGL0C03443g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11682g',
                  target: 'CAGL0C03443g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08184g',
                  target: 'CAGL0C03443g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10780g',
                  target: 'CAGL0C03443g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01089g',
                  target: 'CAGL0C03443g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06160g',
                  target: 'CAGL0C03443g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10406g',
                  target: 'CAGL0C03443g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11506g',
                  target: 'CAGL0C03443g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0C03443g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G01540g',
                  target: 'CAGL0C03850g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H09944g',
                  target: 'CAGL0C03850g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01100g',
                  target: 'CAGL0C03850g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01166g',
                  target: 'CAGL0C03850g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02024g',
                  target: 'CAGL0C03850g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03212g',
                  target: 'CAGL0C03850g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09812g',
                  target: 'CAGL0C03850g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10736g',
                  target: 'CAGL0C03850g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01177g',
                  target: 'CAGL0C03850g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03377g',
                  target: 'CAGL0C03850g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D00770g',
                  target: 'CAGL0C04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D03982g',
                  target: 'CAGL0C04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D04356g',
                  target: 'CAGL0C04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05170g',
                  target: 'CAGL0C04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04037g',
                  target: 'CAGL0C04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01100g',
                  target: 'CAGL0C04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02024g',
                  target: 'CAGL0C04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02530g',
                  target: 'CAGL0C04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J02904g',
                  target: 'CAGL0C04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09812g',
                  target: 'CAGL0C04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02629g',
                  target: 'CAGL0C04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05687g',
                  target: 'CAGL0C04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05813g',
                  target: 'CAGL0C04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09702g',
                  target: 'CAGL0C04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10736g',
                  target: 'CAGL0C04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11858g',
                  target: 'CAGL0C04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00429g',
                  target: 'CAGL0C04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09537g',
                  target: 'CAGL0C04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05951g',
                  target: 'CAGL0C04191g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09328g',
                  target: 'CAGL0D00198g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01441g',
                  target: 'CAGL0D00198g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09328g',
                  target: 'CAGL0D00528g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12364g',
                  target: 'CAGL0D00528g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D01958g',
                  target: 'CAGL0D00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03399g',
                  target: 'CAGL0D00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F05863g',
                  target: 'CAGL0D00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06402g',
                  target: 'CAGL0D00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G10131g',
                  target: 'CAGL0D00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G10153g',
                  target: 'CAGL0D00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02491g',
                  target: 'CAGL0D00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00748g',
                  target: 'CAGL0D00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03190g',
                  target: 'CAGL0D00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06831g',
                  target: 'CAGL0D00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00429g',
                  target: 'CAGL0D00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03894g',
                  target: 'CAGL0D00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11682g',
                  target: 'CAGL0D00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10780g',
                  target: 'CAGL0D00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01089g',
                  target: 'CAGL0D00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06160g',
                  target: 'CAGL0D00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10406g',
                  target: 'CAGL0D00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11506g',
                  target: 'CAGL0D00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0D00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D04356g',
                  target: 'CAGL0D00770g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09383g',
                  target: 'CAGL0D00770g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01100g',
                  target: 'CAGL0D00770g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07843g',
                  target: 'CAGL0D00770g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00847g',
                  target: 'CAGL0D00770g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05687g',
                  target: 'CAGL0D00770g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11858g',
                  target: 'CAGL0D00770g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03399g',
                  target: 'CAGL0D01958g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04213g',
                  target: 'CAGL0D01958g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04565g',
                  target: 'CAGL0D01958g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F05863g',
                  target: 'CAGL0D01958g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06402g',
                  target: 'CAGL0D01958g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G10131g',
                  target: 'CAGL0D01958g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02491g',
                  target: 'CAGL0D01958g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03190g',
                  target: 'CAGL0D01958g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06831g',
                  target: 'CAGL0D01958g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00429g',
                  target: 'CAGL0D01958g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00847g',
                  target: 'CAGL0D01958g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11682g',
                  target: 'CAGL0D01958g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02893g',
                  target: 'CAGL0D01958g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01089g',
                  target: 'CAGL0D01958g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10406g',
                  target: 'CAGL0D01958g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05995g',
                  target: 'CAGL0D01958g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0D01958g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D04356g',
                  target: 'CAGL0D03982g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01705g',
                  target: 'CAGL0D03982g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05170g',
                  target: 'CAGL0D03982g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E06424g',
                  target: 'CAGL0D03982g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F05071g',
                  target: 'CAGL0D03982g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05698g',
                  target: 'CAGL0D03982g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09383g',
                  target: 'CAGL0D03982g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09977g',
                  target: 'CAGL0D03982g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04125g',
                  target: 'CAGL0D03982g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04939g',
                  target: 'CAGL0D03982g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08063g',
                  target: 'CAGL0D03982g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02530g',
                  target: 'CAGL0D03982g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J02904g',
                  target: 'CAGL0D03982g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02629g',
                  target: 'CAGL0D03982g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05687g',
                  target: 'CAGL0D03982g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11858g',
                  target: 'CAGL0D03982g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00429g',
                  target: 'CAGL0D03982g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09537g',
                  target: 'CAGL0D03982g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01705g',
                  target: 'CAGL0D04356g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05170g',
                  target: 'CAGL0D04356g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E06424g',
                  target: 'CAGL0D04356g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F05071g',
                  target: 'CAGL0D04356g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05698g',
                  target: 'CAGL0D04356g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09383g',
                  target: 'CAGL0D04356g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04125g',
                  target: 'CAGL0D04356g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04939g',
                  target: 'CAGL0D04356g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08063g',
                  target: 'CAGL0D04356g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05852g',
                  target: 'CAGL0D04356g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00847g',
                  target: 'CAGL0D04356g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02629g',
                  target: 'CAGL0D04356g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05687g',
                  target: 'CAGL0D04356g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11858g',
                  target: 'CAGL0D04356g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00429g',
                  target: 'CAGL0D04356g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09537g',
                  target: 'CAGL0D04356g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04565g',
                  target: 'CAGL0D05192g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F05863g',
                  target: 'CAGL0D05192g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G10131g',
                  target: 'CAGL0D05192g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G10153g',
                  target: 'CAGL0D05192g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02491g',
                  target: 'CAGL0D05192g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00748g',
                  target: 'CAGL0D05192g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03190g',
                  target: 'CAGL0D05192g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11682g',
                  target: 'CAGL0D05192g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08184g',
                  target: 'CAGL0D05192g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01089g',
                  target: 'CAGL0D05192g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06160g',
                  target: 'CAGL0D05192g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0D05192g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12364g',
                  target: 'CAGL0D05940g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05170g',
                  target: 'CAGL0E01705g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E06424g',
                  target: 'CAGL0E01705g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04125g',
                  target: 'CAGL0E01705g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04939g',
                  target: 'CAGL0E01705g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H06699g',
                  target: 'CAGL0E01705g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04565g',
                  target: 'CAGL0E03850g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F05863g',
                  target: 'CAGL0E03850g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02491g',
                  target: 'CAGL0E03850g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10780g',
                  target: 'CAGL0E04334g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10868g',
                  target: 'CAGL0E04334g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12100g',
                  target: 'CAGL0E04334g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11506g',
                  target: 'CAGL0E04334g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07656g',
                  target: 'CAGL0E04334g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E06424g',
                  target: 'CAGL0E05170g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F04895g',
                  target: 'CAGL0E05170g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F05071g',
                  target: 'CAGL0E05170g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05698g',
                  target: 'CAGL0E05170g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09383g',
                  target: 'CAGL0E05170g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09977g',
                  target: 'CAGL0E05170g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04037g',
                  target: 'CAGL0E05170g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04125g',
                  target: 'CAGL0E05170g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04939g',
                  target: 'CAGL0E05170g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08063g',
                  target: 'CAGL0E05170g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02530g',
                  target: 'CAGL0E05170g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J02904g',
                  target: 'CAGL0E05170g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05852g',
                  target: 'CAGL0E05170g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02629g',
                  target: 'CAGL0E05170g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05687g',
                  target: 'CAGL0E05170g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11858g',
                  target: 'CAGL0E05170g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00429g',
                  target: 'CAGL0E05170g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09537g',
                  target: 'CAGL0E05170g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05951g',
                  target: 'CAGL0E05170g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F05071g',
                  target: 'CAGL0E06424g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05698g',
                  target: 'CAGL0E06424g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04939g',
                  target: 'CAGL0E06424g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08063g',
                  target: 'CAGL0E06424g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02629g',
                  target: 'CAGL0E06424g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05687g',
                  target: 'CAGL0E06424g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00429g',
                  target: 'CAGL0E06424g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09537g',
                  target: 'CAGL0E06424g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G10153g',
                  target: 'CAGL0F00407g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01408g',
                  target: 'CAGL0F00407g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03894g',
                  target: 'CAGL0F00407g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12100g',
                  target: 'CAGL0F00407g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F05863g',
                  target: 'CAGL0F03399g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06402g',
                  target: 'CAGL0F03399g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G10131g',
                  target: 'CAGL0F03399g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02491g',
                  target: 'CAGL0F03399g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00748g',
                  target: 'CAGL0F03399g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06831g',
                  target: 'CAGL0F03399g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00429g',
                  target: 'CAGL0F03399g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10780g',
                  target: 'CAGL0F03399g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0F03399g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G08712g',
                  target: 'CAGL0F04213g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H06699g',
                  target: 'CAGL0F04213g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00847g',
                  target: 'CAGL0F04213g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05236g',
                  target: 'CAGL0F04213g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05995g',
                  target: 'CAGL0F04213g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M12881g',
                  target: 'CAGL0F04213g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F05863g',
                  target: 'CAGL0F04565g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G10131g',
                  target: 'CAGL0F04565g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G10153g',
                  target: 'CAGL0F04565g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02491g',
                  target: 'CAGL0F04565g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03190g',
                  target: 'CAGL0F04565g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00847g',
                  target: 'CAGL0F04565g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11682g',
                  target: 'CAGL0F04565g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08184g',
                  target: 'CAGL0F04565g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01089g',
                  target: 'CAGL0F04565g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06160g',
                  target: 'CAGL0F04565g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10406g',
                  target: 'CAGL0F04565g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0F04565g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04037g',
                  target: 'CAGL0F04719g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02024g',
                  target: 'CAGL0F04719g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J02904g',
                  target: 'CAGL0F04719g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09812g',
                  target: 'CAGL0F04719g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07480g',
                  target: 'CAGL0F04719g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11858g',
                  target: 'CAGL0F04719g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03377g',
                  target: 'CAGL0F04719g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04037g',
                  target: 'CAGL0F04895g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02530g',
                  target: 'CAGL0F04895g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J02904g',
                  target: 'CAGL0F04895g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05813g',
                  target: 'CAGL0F04895g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11858g',
                  target: 'CAGL0F04895g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05951g',
                  target: 'CAGL0F04895g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F08745g',
                  target: 'CAGL0F05071g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05698g',
                  target: 'CAGL0F05071g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09977g',
                  target: 'CAGL0F05071g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04939g',
                  target: 'CAGL0F05071g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08063g',
                  target: 'CAGL0F05071g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05852g',
                  target: 'CAGL0F05071g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02629g',
                  target: 'CAGL0F05071g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05687g',
                  target: 'CAGL0F05071g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11858g',
                  target: 'CAGL0F05071g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00429g',
                  target: 'CAGL0F05071g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09537g',
                  target: 'CAGL0F05071g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05951g',
                  target: 'CAGL0F05071g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G06402g',
                  target: 'CAGL0F05863g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G10131g',
                  target: 'CAGL0F05863g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G10153g',
                  target: 'CAGL0F05863g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02491g',
                  target: 'CAGL0F05863g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03190g',
                  target: 'CAGL0F05863g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06831g',
                  target: 'CAGL0F05863g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00429g',
                  target: 'CAGL0F05863g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00847g',
                  target: 'CAGL0F05863g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11682g',
                  target: 'CAGL0F05863g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08184g',
                  target: 'CAGL0F05863g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01089g',
                  target: 'CAGL0F05863g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06160g',
                  target: 'CAGL0F05863g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10406g',
                  target: 'CAGL0F05863g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05995g',
                  target: 'CAGL0F05863g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0F05863g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09383g',
                  target: 'CAGL0F07513g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04125g',
                  target: 'CAGL0F07513g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04939g',
                  target: 'CAGL0F07513g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H06699g',
                  target: 'CAGL0F07513g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07843g',
                  target: 'CAGL0F07513g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05852g',
                  target: 'CAGL0F07513g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00847g',
                  target: 'CAGL0F07513g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05995g',
                  target: 'CAGL0F07513g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05698g',
                  target: 'CAGL0F08745g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09977g',
                  target: 'CAGL0F08745g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08063g',
                  target: 'CAGL0F08745g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05934g',
                  target: 'CAGL0F08745g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02629g',
                  target: 'CAGL0F08745g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05813g',
                  target: 'CAGL0F08745g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05951g',
                  target: 'CAGL0F08745g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H09944g',
                  target: 'CAGL0G01540g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01100g',
                  target: 'CAGL0G01540g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09328g',
                  target: 'CAGL0G01540g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03212g',
                  target: 'CAGL0G01540g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09328g',
                  target: 'CAGL0G02585g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10780g',
                  target: 'CAGL0G02585g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11506g',
                  target: 'CAGL0G02585g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12364g',
                  target: 'CAGL0G02585g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07656g',
                  target: 'CAGL0G02585g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09383g',
                  target: 'CAGL0G05698g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G09977g',
                  target: 'CAGL0G05698g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04939g',
                  target: 'CAGL0G05698g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08063g',
                  target: 'CAGL0G05698g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J02904g',
                  target: 'CAGL0G05698g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05852g',
                  target: 'CAGL0G05698g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02629g',
                  target: 'CAGL0G05698g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05687g',
                  target: 'CAGL0G05698g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11858g',
                  target: 'CAGL0G05698g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00429g',
                  target: 'CAGL0G05698g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09537g',
                  target: 'CAGL0G05698g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05951g',
                  target: 'CAGL0G05698g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G10131g',
                  target: 'CAGL0G06402g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G10153g',
                  target: 'CAGL0G06402g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02491g',
                  target: 'CAGL0G06402g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00748g',
                  target: 'CAGL0G06402g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06831g',
                  target: 'CAGL0G06402g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00429g',
                  target: 'CAGL0G06402g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11682g',
                  target: 'CAGL0G06402g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01089g',
                  target: 'CAGL0G06402g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06160g',
                  target: 'CAGL0G06402g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0G06402g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04939g',
                  target: 'CAGL0G08712g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H06699g',
                  target: 'CAGL0G08712g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00847g',
                  target: 'CAGL0G08712g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05852g',
                  target: 'CAGL0G08712g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02893g',
                  target: 'CAGL0G08712g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05236g',
                  target: 'CAGL0G08712g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05995g',
                  target: 'CAGL0G08712g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M12881g',
                  target: 'CAGL0G08712g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04125g',
                  target: 'CAGL0G09383g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04939g',
                  target: 'CAGL0G09383g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H06699g',
                  target: 'CAGL0G09383g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07843g',
                  target: 'CAGL0G09383g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J02904g',
                  target: 'CAGL0G09383g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05852g',
                  target: 'CAGL0G09383g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00847g',
                  target: 'CAGL0G09383g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05687g',
                  target: 'CAGL0G09383g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11858g',
                  target: 'CAGL0G09383g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09537g',
                  target: 'CAGL0G09383g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08063g',
                  target: 'CAGL0G09977g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05934g',
                  target: 'CAGL0G09977g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J02904g',
                  target: 'CAGL0G09977g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02629g',
                  target: 'CAGL0G09977g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05687g',
                  target: 'CAGL0G09977g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05813g',
                  target: 'CAGL0G09977g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09537g',
                  target: 'CAGL0G09977g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05951g',
                  target: 'CAGL0G09977g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G10153g',
                  target: 'CAGL0G10131g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02491g',
                  target: 'CAGL0G10131g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00748g',
                  target: 'CAGL0G10131g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03190g',
                  target: 'CAGL0G10131g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06831g',
                  target: 'CAGL0G10131g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00429g',
                  target: 'CAGL0G10131g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03894g',
                  target: 'CAGL0G10131g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11682g',
                  target: 'CAGL0G10131g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08184g',
                  target: 'CAGL0G10131g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10780g',
                  target: 'CAGL0G10131g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01089g',
                  target: 'CAGL0G10131g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06160g',
                  target: 'CAGL0G10131g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10406g',
                  target: 'CAGL0G10131g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0G10131g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02491g',
                  target: 'CAGL0G10153g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00748g',
                  target: 'CAGL0G10153g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03190g',
                  target: 'CAGL0G10153g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06831g',
                  target: 'CAGL0G10153g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00429g',
                  target: 'CAGL0G10153g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03894g',
                  target: 'CAGL0G10153g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11682g',
                  target: 'CAGL0G10153g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08184g',
                  target: 'CAGL0G10153g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01089g',
                  target: 'CAGL0G10153g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06160g',
                  target: 'CAGL0G10153g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0G10153g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00748g',
                  target: 'CAGL0H02491g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03190g',
                  target: 'CAGL0H02491g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06831g',
                  target: 'CAGL0H02491g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00429g',
                  target: 'CAGL0H02491g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11682g',
                  target: 'CAGL0H02491g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08184g',
                  target: 'CAGL0H02491g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01089g',
                  target: 'CAGL0H02491g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06160g',
                  target: 'CAGL0H02491g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10406g',
                  target: 'CAGL0H02491g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0H02491g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09702g',
                  target: 'CAGL0H03795g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02024g',
                  target: 'CAGL0H04037g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02530g',
                  target: 'CAGL0H04037g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J02904g',
                  target: 'CAGL0H04037g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09812g',
                  target: 'CAGL0H04037g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05813g',
                  target: 'CAGL0H04037g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07480g',
                  target: 'CAGL0H04037g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10736g',
                  target: 'CAGL0H04037g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11858g',
                  target: 'CAGL0H04037g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05951g',
                  target: 'CAGL0H04037g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H04939g',
                  target: 'CAGL0H04125g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H06699g',
                  target: 'CAGL0H04125g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I07843g',
                  target: 'CAGL0H04125g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05852g',
                  target: 'CAGL0H04125g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00847g',
                  target: 'CAGL0H04125g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H06699g',
                  target: 'CAGL0H04939g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05852g',
                  target: 'CAGL0H04939g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00847g',
                  target: 'CAGL0H04939g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05687g',
                  target: 'CAGL0H04939g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00429g',
                  target: 'CAGL0H04939g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09537g',
                  target: 'CAGL0H04939g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01441g',
                  target: 'CAGL0H05137g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05852g',
                  target: 'CAGL0H06699g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00847g',
                  target: 'CAGL0H06699g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05995g',
                  target: 'CAGL0H06699g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M12881g',
                  target: 'CAGL0H06699g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L02167g',
                  target: 'CAGL0H06787g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02629g',
                  target: 'CAGL0H08063g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05687g',
                  target: 'CAGL0H08063g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05813g',
                  target: 'CAGL0H08063g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11858g',
                  target: 'CAGL0H08063g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00429g',
                  target: 'CAGL0H08063g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09537g',
                  target: 'CAGL0H08063g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05951g',
                  target: 'CAGL0H08063g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01100g',
                  target: 'CAGL0H09944g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I01166g',
                  target: 'CAGL0H09944g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03212g',
                  target: 'CAGL0H09944g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09702g',
                  target: 'CAGL0H09944g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10736g',
                  target: 'CAGL0H09944g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01177g',
                  target: 'CAGL0H09944g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03190g',
                  target: 'CAGL0I00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I06831g',
                  target: 'CAGL0I00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00429g',
                  target: 'CAGL0I00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03894g',
                  target: 'CAGL0I00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11682g',
                  target: 'CAGL0I00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08184g',
                  target: 'CAGL0I00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10780g',
                  target: 'CAGL0I00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01089g',
                  target: 'CAGL0I00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06160g',
                  target: 'CAGL0I00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10406g',
                  target: 'CAGL0I00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11506g',
                  target: 'CAGL0I00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0I00748g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02024g',
                  target: 'CAGL0I01100g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02530g',
                  target: 'CAGL0I01100g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J02904g',
                  target: 'CAGL0I01100g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09812g',
                  target: 'CAGL0I01100g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05813g',
                  target: 'CAGL0I01100g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09702g',
                  target: 'CAGL0I01100g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10736g',
                  target: 'CAGL0I01100g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11858g',
                  target: 'CAGL0I01100g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01177g',
                  target: 'CAGL0I01100g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03212g',
                  target: 'CAGL0I01166g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12100g',
                  target: 'CAGL0I01408g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07656g',
                  target: 'CAGL0I01408g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J02904g',
                  target: 'CAGL0I02024g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09812g',
                  target: 'CAGL0I02024g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05813g',
                  target: 'CAGL0I02024g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07480g',
                  target: 'CAGL0I02024g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10736g',
                  target: 'CAGL0I02024g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11858g',
                  target: 'CAGL0I02024g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01177g',
                  target: 'CAGL0I02024g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03377g',
                  target: 'CAGL0I02024g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05951g',
                  target: 'CAGL0I02024g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02629g',
                  target: 'CAGL0I02530g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05687g',
                  target: 'CAGL0I02530g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05813g',
                  target: 'CAGL0I02530g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09702g',
                  target: 'CAGL0I02530g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11858g',
                  target: 'CAGL0I02530g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00429g',
                  target: 'CAGL0I02530g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00429g',
                  target: 'CAGL0I03190g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11682g',
                  target: 'CAGL0I03190g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02893g',
                  target: 'CAGL0I03190g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08184g',
                  target: 'CAGL0I03190g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01089g',
                  target: 'CAGL0I03190g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06160g',
                  target: 'CAGL0I03190g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10406g',
                  target: 'CAGL0I03190g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0I03190g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J00429g',
                  target: 'CAGL0I06831g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11682g',
                  target: 'CAGL0I06831g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10780g',
                  target: 'CAGL0I06831g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01089g',
                  target: 'CAGL0I06831g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06160g',
                  target: 'CAGL0I06831g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0I06831g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J05852g',
                  target: 'CAGL0I07843g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00847g',
                  target: 'CAGL0I07843g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J01441g',
                  target: 'CAGL0I09328g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11682g',
                  target: 'CAGL0J00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02893g',
                  target: 'CAGL0J00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10780g',
                  target: 'CAGL0J00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01089g',
                  target: 'CAGL0J00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06160g',
                  target: 'CAGL0J00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10406g',
                  target: 'CAGL0J00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0J00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02893g',
                  target: 'CAGL0J00847g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01089g',
                  target: 'CAGL0J00847g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05236g',
                  target: 'CAGL0J00847g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10406g',
                  target: 'CAGL0J00847g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05995g',
                  target: 'CAGL0J00847g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M12881g',
                  target: 'CAGL0J00847g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09812g',
                  target: 'CAGL0J02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05687g',
                  target: 'CAGL0J02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05813g',
                  target: 'CAGL0J02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07480g',
                  target: 'CAGL0J02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10736g',
                  target: 'CAGL0J02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11858g',
                  target: 'CAGL0J02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09537g',
                  target: 'CAGL0J02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05951g',
                  target: 'CAGL0J02904g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10780g',
                  target: 'CAGL0J03894g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11506g',
                  target: 'CAGL0J03894g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07656g',
                  target: 'CAGL0J03894g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00847g',
                  target: 'CAGL0J05852g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09537g',
                  target: 'CAGL0J05852g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05995g',
                  target: 'CAGL0J05852g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05813g',
                  target: 'CAGL0J09812g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07480g',
                  target: 'CAGL0J09812g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10736g',
                  target: 'CAGL0J09812g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11858g',
                  target: 'CAGL0J09812g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01177g',
                  target: 'CAGL0J09812g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03377g',
                  target: 'CAGL0J09812g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05951g',
                  target: 'CAGL0J09812g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K02893g',
                  target: 'CAGL0J11682g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01089g',
                  target: 'CAGL0J11682g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06160g',
                  target: 'CAGL0J11682g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10406g',
                  target: 'CAGL0J11682g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0J11682g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05687g',
                  target: 'CAGL0K02629g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05813g',
                  target: 'CAGL0K02629g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00429g',
                  target: 'CAGL0K02629g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09537g',
                  target: 'CAGL0K02629g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05951g',
                  target: 'CAGL0K02629g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01089g',
                  target: 'CAGL0K02893g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L05236g',
                  target: 'CAGL0K02893g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10406g',
                  target: 'CAGL0K02893g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05995g',
                  target: 'CAGL0K02893g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0K02893g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03377g',
                  target: 'CAGL0K03421g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11704g',
                  target: 'CAGL0K03421g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05813g',
                  target: 'CAGL0K05687g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11858g',
                  target: 'CAGL0K05687g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00429g',
                  target: 'CAGL0K05687g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09537g',
                  target: 'CAGL0K05687g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05951g',
                  target: 'CAGL0K05687g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09702g',
                  target: 'CAGL0K05813g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10736g',
                  target: 'CAGL0K05813g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11858g',
                  target: 'CAGL0K05813g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03377g',
                  target: 'CAGL0K05813g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05951g',
                  target: 'CAGL0K05813g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11704g',
                  target: 'CAGL0K05813g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03377g',
                  target: 'CAGL0K07480g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06160g',
                  target: 'CAGL0K08184g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0K08184g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K10736g',
                  target: 'CAGL0K09702g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K11858g',
                  target: 'CAGL0K10736g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01177g',
                  target: 'CAGL0K10736g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03377g',
                  target: 'CAGL0K10736g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05951g',
                  target: 'CAGL0K10736g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11704g',
                  target: 'CAGL0K10736g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L11506g',
                  target: 'CAGL0K10780g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07656g',
                  target: 'CAGL0K10780g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06666g',
                  target: 'CAGL0K10868g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09537g',
                  target: 'CAGL0K11858g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05951g',
                  target: 'CAGL0K11858g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07656g',
                  target: 'CAGL0K12100g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09537g',
                  target: 'CAGL0L00429g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06160g',
                  target: 'CAGL0L01089g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10406g',
                  target: 'CAGL0L01089g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0L01089g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03377g',
                  target: 'CAGL0L01177g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04499g',
                  target: 'CAGL0L02167g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06666g',
                  target: 'CAGL0L03828g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10406g',
                  target: 'CAGL0L05236g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05995g',
                  target: 'CAGL0L05236g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10406g',
                  target: 'CAGL0L06160g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0L06160g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05951g',
                  target: 'CAGL0L09537g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05995g',
                  target: 'CAGL0L10406g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07271g',
                  target: 'CAGL0L10406g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12364g',
                  target: 'CAGL0L11506g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07656g',
                  target: 'CAGL0L11506g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11704g',
                  target: 'CAGL0M03377g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M12881g',
                  target: 'CAGL0M05995g',
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
cy.$('#CAGL0A02816g').qtip({
                  content: "<h2>CAGL0A02816g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative 2-methylbutyraldehyde reductase; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02816g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02816g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0A03366g').qtip({
                  content: "<h2>CAGL0A03366g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have IMP cyclohydrolase activity, phosphoribosylaminoimidazolecarboxamide formyltransferase activity and role in 'de novo' IMP biosynthetic process, IMP biosynthetic process, purine nucleotide biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03366g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03366g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0A03542g').qtip({
                  content: "<h2>CAGL0A03542g</h2><hr><p><b>Gene name</b> : COX12</p><p><b>Description</b> : Cytochrome c oxidase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03542g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03542g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0A03740g').qtip({
                  content: "<h2>CAGL0A03740g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in fatty acid beta-oxidation, long-chain fatty acid catabolic process and peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03740g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03740g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0A03905g').qtip({
                  content: "<h2>CAGL0A03905g</h2><hr><p><b>Gene name</b> : HMX1</p><p><b>Description</b> : Ortholog(s) have heme oxygenase (decyclizing) activity and role in cellular iron ion homeostasis, heme catabolic process, response to carbon monoxide, response to oxidative stress</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03905g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03905g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0B00990g').qtip({
                  content: "<h2>CAGL0B00990g</h2><hr><p><b>Gene name</b> : HBN1</p><p><b>Description</b> : Ortholog(s) have oxidoreductase activity, acting on NAD(P)H, nitrogenous group as acceptor activity and role in cellular response to oxidative stress, negative regulation of fatty acid metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B00990g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B00990g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C01325g').qtip({
                  content: "<h2>CAGL0C01325g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytochrome-c oxidase activity, nitrite reductase (NO-forming) activity, role in mitochondrial electron transport, cytochrome c to oxygen and mitochondrial respiratory chain complex IV localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C01325g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C01325g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C01727g').qtip({
                  content: "<h2>CAGL0C01727g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have UDP-N-acetylglucosamine-dolichyl-phosphate N-acetylglucosaminephosphotransferase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C01727g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C01727g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C02233g').qtip({
                  content: "<h2>CAGL0C02233g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-methionine-(S)-S-oxide reductase activity, peptide-methionine (S)-S-oxide reductase activity, role in L-methionine salvage from methionine sulphoxide, cellular response to oxidative stress and cytoplasm localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C02233g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C02233g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C03333g').qtip({
                  content: "<h2>CAGL0C03333g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ferric-chelate reductase activity, role in cellular response to iron ion starvation, copper ion import, intracellular sequestering of iron ion, reductive iron assimilation and fungal-type vacuole membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03333g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03333g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C03443g').qtip({
                  content: "<h2>CAGL0C03443g</h2><hr><p><b>Gene name</b> : LYS9</p><p><b>Description</b> : Putative saccharopine dehydrogenase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03443g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03443g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C03850g').qtip({
                  content: "<h2>CAGL0C03850g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have thioredoxin peroxidase activity, role in cell redox homeostasis, cellular response to oxidative stress and nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03850g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03850g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C04191g').qtip({
                  content: "<h2>CAGL0C04191g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have succinate-semialdehyde dehydrogenase [NAD(P)+] activity and role in cellular response to oxidative stress, gamma-aminobutyric acid catabolic process, glutamate decarboxylation to succinate</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C04191g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C04191g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D00198g').qtip({
                  content: "<h2>CAGL0D00198g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have (R,R)-butanediol dehydrogenase activity and role in alcohol metabolic process, butanediol biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00198g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00198g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D00528g').qtip({
                  content: "<h2>CAGL0D00528g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 3-hydroxyacyl-[acyl-carrier-protein] dehydratase activity, [acyl-carrier-protein] S-acetyltransferase activity and [acyl-carrier-protein] S-malonyltransferase activity, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00528g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00528g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D00748g').qtip({
                  content: "<h2>CAGL0D00748g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytochrome-c oxidase activity, role in mitochondrial electron transport, cytochrome c to oxygen and mitochondrial respiratory chain complex IV, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00748g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00748g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D00770g').qtip({
                  content: "<h2>CAGL0D00770g</h2><hr><p><b>Gene name</b> : IDP1</p><p><b>Description</b> : Ortholog(s) have isocitrate dehydrogenase (NADP+) activity, role in glutamate biosynthetic process and cytoplasm, extracellular region, mitochondrial nucleoid, mitochondrion, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00770g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00770g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D01958g').qtip({
                  content: "<h2>CAGL0D01958g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have succinate dehydrogenase (ubiquinone) activity and role in cellular respiration, protein insertion into mitochondrial inner membrane</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D01958g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D01958g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D03982g').qtip({
                  content: "<h2>CAGL0D03982g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 1-pyrroline-5-carboxylate dehydrogenase activity, role in glutamate biosynthetic process, proline catabolic process to glutamate and mitochondrial matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D03982g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D03982g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D04356g').qtip({
                  content: "<h2>CAGL0D04356g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycine dehydrogenase (decarboxylating) activity and role in glycine metabolic process, one-carbon metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D04356g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D04356g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D05192g').qtip({
                  content: "<h2>CAGL0D05192g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ubiquinol-cytochrome-c reductase activity and role in aerobic respiration, mitochondrial electron transport, ubiquinol to cytochrome c</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D05192g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D05192g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D05940g').qtip({
                  content: "<h2>CAGL0D05940g</h2><hr><p><b>Gene name</b> : ERG1</p><p><b>Description</b> : Squalene epoxidase with a role in ergosterol synthesis; involved in growth under conditions of low oxygen tension</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D05940g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D05940g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E01705g').qtip({
                  content: "<h2>CAGL0E01705g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-malate dehydrogenase activity, role in gluconeogenesis, protein import into peroxisome matrix and cytosol, nuclear periphery localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01705g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01705g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E03850g').qtip({
                  content: "<h2>CAGL0E03850g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted electron transfer activity, iron-sulfur cluster binding, oxidoreductase activity and role in oxidation-reduction process, tricarboxylic acid cycle</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E03850g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E03850g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E04334g').qtip({
                  content: "<h2>CAGL0E04334g</h2><hr><p><b>Gene name</b> : ERG11</p><p><b>Description</b> : Putative cytochrome P-450 lanosterol 14-alpha-demethylase; target enzyme of azole antifungal drugs; increased protein abundance in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04334g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04334g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E05170g').qtip({
                  content: "<h2>CAGL0E05170g</h2><hr><p><b>Gene name</b> : GRE2(A)</p><p><b>Description</b> : Putative methylglyoxal reductase (NADPH-dependent)</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05170g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05170g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E06138g').qtip({
                  content: "<h2>CAGL0E06138g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have fatty acid synthase activity, role in fatty acid biosynthetic process, long-chain fatty acid biosynthetic process, palmitic acid biosynthetic process and fatty acid synthase complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E06138g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E06138g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E06424g').qtip({
                  content: "<h2>CAGL0E06424g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytochrome-b5 reductase activity, acting on NAD(P)H activity and role in cellular response to oxidative stress, ergosterol biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E06424g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E06424g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F00407g').qtip({
                  content: "<h2>CAGL0F00407g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have deoxyhypusine monooxygenase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00407g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00407g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F03399g').qtip({
                  content: "<h2>CAGL0F03399g</h2><hr><p><b>Gene name</b> : SCS7</p><p><b>Description</b> : Ortholog(s) have fatty acid alpha-hydroxylase activity, role in inositol phosphoceramide metabolic process, mannosyl-inositol phosphorylceramide metabolic process and membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F03399g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F03399g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F04213g').qtip({
                  content: "<h2>CAGL0F04213g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATP:ADP antiporter activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04213g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04213g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F04565g').qtip({
                  content: "<h2>CAGL0F04565g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ubiquinol-cytochrome-c reductase activity, role in aerobic respiration and mitochondrial respiratory chain complex III, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04565g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04565g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F04719g').qtip({
                  content: "<h2>CAGL0F04719g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycogen (starch) synthase activity, role in glycogen biosynthetic process and cytoplasm localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04719g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04719g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F04895g').qtip({
                  content: "<h2>CAGL0F04895g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycogen phosphorylase activity, role in glycogen catabolic process and cell surface, cytoplasm, hyphal cell wall localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04895g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04895g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F05071g').qtip({
                  content: "<h2>CAGL0F05071g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have dodecenoyl-CoA delta-isomerase activity, role in fatty acid beta-oxidation, filamentous growth and peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F05071g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F05071g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F05863g').qtip({
                  content: "<h2>CAGL0F05863g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have succinate dehydrogenase (ubiquinone) activity, role in cellular respiration and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F05863g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F05863g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F06413g').qtip({
                  content: "<h2>CAGL0F06413g</h2><hr><p><b>Gene name</b> : FET3</p><p><b>Description</b> : Putative copper ferroxidase involved in iron uptake</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F06413g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F06413g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F07513g').qtip({
                  content: "<h2>CAGL0F07513g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in aerobic respiration</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F07513g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F07513g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F08745g').qtip({
                  content: "<h2>CAGL0F08745g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cellular response to desiccation and cytoplasm localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F08745g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F08745g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G01540g').qtip({
                  content: "<h2>CAGL0G01540g</h2><hr><p><b>Gene name</b> : NCE103</p><p><b>Description</b> : Beta carbonic anhydrase with a predicted role in non-classical protein export; upregulated in azole-resistant strain; enzyme activity increased by amines and amino acids; protein abundance decreased in ace2 cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G01540g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G01540g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G02585g').qtip({
                  content: "<h2>CAGL0G02585g</h2><hr><p><b>Gene name</b> : LYS12</p><p><b>Description</b> : Homo-isocitrate dehydrogenase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G02585g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G02585g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G05698g').qtip({
                  content: "<h2>CAGL0G05698g</h2><hr><p><b>Gene name</b> : GDH2</p><p><b>Description</b> : Ortholog(s) have glutamate dehydrogenase (NAD+) activity and role in nitrogen compound metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G05698g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G05698g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G06402g').qtip({
                  content: "<h2>CAGL0G06402g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06402g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06402g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G08712g').qtip({
                  content: "<h2>CAGL0G08712g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have mitochondrial nucleoid, mitochondrial oxoglutarate dehydrogenase complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G08712g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G08712g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G09383g').qtip({
                  content: "<h2>CAGL0G09383g</h2><hr><p><b>Gene name</b> : TDH3</p><p><b>Description</b> : Putative glyceraldehyde-3-phosphate dehydrogenase; increased protein abundance in azole resistant strain; expression upregulated in biofilm vs planktonic cell culture; upregulated in hypoxia</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G09383g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G09383g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G09977g').qtip({
                  content: "<h2>CAGL0G09977g</h2><hr><p><b>Gene name</b> : GDB1</p><p><b>Description</b> : Ortholog(s) have 4-alpha-glucanotransferase activity, amylo-alpha-1,6-glucosidase activity and role in glycogen catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G09977g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G09977g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G10131g').qtip({
                  content: "<h2>CAGL0G10131g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ubiquinol-cytochrome-c reductase activity and role in aerobic respiration, mitochondrial electron transport, ubiquinol to cytochrome c</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G10131g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G10131g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G10153g').qtip({
                  content: "<h2>CAGL0G10153g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in mitochondrial electron transport, ubiquinol to cytochrome c and mitochondrial respiratory chain complex III localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G10153g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G10153g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H02491g').qtip({
                  content: "<h2>CAGL0H02491g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytochrome-c oxidase activity, role in mitochondrial electron transport, cytochrome c to oxygen and mitochondrial respiratory chain complex IV, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02491g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02491g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H03795g').qtip({
                  content: "<h2>CAGL0H03795g</h2><hr><p><b>Gene name</b> : LEU2</p><p><b>Description</b> : 3-isopropylmalate dehydrogenase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H03795g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H03795g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H04037g').qtip({
                  content: "<h2>CAGL0H04037g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have heat shock protein binding, protein phosphatase regulator activity and role in glycogen metabolic process, meiotic cell cycle, mitotic spindle assembly checkpoint, response to heat</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H04037g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H04037g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H04125g').qtip({
                  content: "<h2>CAGL0H04125g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have D-arabinono-1,4-lactone oxidase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H04125g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H04125g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H04939g').qtip({
                  content: "<h2>CAGL0H04939g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have fructose 1,6-bisphosphate 1-phosphatase activity, role in gluconeogenesis, reactive oxygen species metabolic process and cytosol, periplasmic space localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H04939g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H04939g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H05137g').qtip({
                  content: "<h2>CAGL0H05137g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have aldehyde dehydrogenase [NAD(P)+] activity, role in NADPH regeneration, acetate biosynthetic process, response to salt stress and cytosol, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H05137g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H05137g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H06699g').qtip({
                  content: "<h2>CAGL0H06699g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycerol-3-phosphate dehydrogenase (quinone) activity and role in NADH oxidation, glycerol metabolic process, replicative cell aging</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H06699g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H06699g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H06787g').qtip({
                  content: "<h2>CAGL0H06787g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have acetyl-CoA C-acyltransferase activity, mRNA binding activity, role in fatty acid beta-oxidation, icosanoid biosynthetic process and mitochondrial intermembrane space, peroxisomal matrix, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H06787g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H06787g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H08063g').qtip({
                  content: "<h2>CAGL0H08063g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 2,4-dienoyl-CoA reductase (NADPH) activity, role in ascospore formation, fatty acid catabolic process and peroxisomal matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H08063g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H08063g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H09944g').qtip({
                  content: "<h2>CAGL0H09944g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 2-alkenal reductase [NAD(P)] activity, NADPH:quinone reductase activity, mRNA 3'-UTR AU-rich region binding activity and role in cellular response to oxidative stress</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H09944g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H09944g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I00748g').qtip({
                  content: "<h2>CAGL0I00748g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have NADH dehydrogenase activity, role in NADH oxidation, chronological cell aging, glycolytic fermentation to ethanol and mitochondrion, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I00748g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I00748g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I01100g').qtip({
                  content: "<h2>CAGL0I01100g</h2><hr><p><b>Gene name</b> : GCY1</p><p><b>Description</b> : Ortholog(s) have alditol:NADP+ 1-oxidoreductase activity, aldo-keto reductase (NADP) activity, glycerol dehydrogenase [NAD(P)+] activity, mRNA binding, oxidoreductase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01100g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01100g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I01166g').qtip({
                  content: "<h2>CAGL0I01166g</h2><hr><p><b>Gene name</b> : TRR1</p><p><b>Description</b> : Thioredoxin reductase (NADPH)</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01166g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01166g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I01408g').qtip({
                  content: "<h2>CAGL0I01408g</h2><hr><p><b>Gene name</b> : CYC1</p><p><b>Description</b> : Ortholog(s) have electron transfer activity and role in mitochondrial ATP synthesis coupled electron transport, mitochondrial electron transport, cytochrome c to oxygen, mitochondrial electron transport, ubiquinol to cytochrome c</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01408g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01408g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I02024g').qtip({
                  content: "<h2>CAGL0I02024g</h2><hr><p><b>Gene name</b> : OYE2</p><p><b>Description</b> : Putative NADPH dehydrogenase; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02024g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02024g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I02530g').qtip({
                  content: "<h2>CAGL0I02530g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have N,N-dimethylaniline monooxygenase activity, role in protein folding and endoplasmic reticulum membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02530g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02530g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I03190g').qtip({
                  content: "<h2>CAGL0I03190g</h2><hr><p><b>Gene name</b> : RIP1</p><p><b>Description</b> : Putative ubiquinol-Cytochrome c reductase iron-sulfur protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I03190g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I03190g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I05934g').qtip({
                  content: "<h2>CAGL0I05934g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ubiquitin-protein transferase regulator activity and role in cellular response to water deprivation, stress-induced homeostatically regulated protein degradation pathway</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I05934g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I05934g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I06831g').qtip({
                  content: "<h2>CAGL0I06831g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 2 iron, 2 sulfur cluster binding, electron transfer activity, iron-sulfur cluster binding, oxidoreductase activity, acting on NAD(P)H, oxidoreductase activity, acting on NAD(P)H, heme protein as acceptor activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I06831g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I06831g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I07843g').qtip({
                  content: "<h2>CAGL0I07843g</h2><hr><p><b>Gene name</b> : ADH1</p><p><b>Description</b> : Putative alcohol dehydrogenase isoenzyme III; increased protein abundance in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I07843g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I07843g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I09328g').qtip({
                  content: "<h2>CAGL0I09328g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 3-dehydrosphinganine reductase activity, role in 3-keto-sphinganine metabolic process, sphingolipid biosynthetic process and lipid droplet localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09328g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09328g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J00429g').qtip({
                  content: "<h2>CAGL0J00429g</h2><hr><p><b>Gene name</b> : COX6</p><p><b>Description</b> : Cytochrome c oxidase subunit VI</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J00429g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J00429g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J00451g').qtip({
                  content: "<h2>CAGL0J00451g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative glyceraldehyde-3-phosphate dehydrogenase; protein differentially expressed in azole resistant strain; expression downregulated in biofilm vs planktonic cell culture</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J00451g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J00451g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J00847g').qtip({
                  content: "<h2>CAGL0J00847g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have succinate dehydrogenase (ubiquinone) activity and role in cellular respiration</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J00847g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J00847g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J01441g').qtip({
                  content: "<h2>CAGL0J01441g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have alcohol dehydrogenase (NAD) activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J01441g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J01441g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J02904g').qtip({
                  content: "<h2>CAGL0J02904g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have protein phosphatase regulator activity, role in glycogen metabolic process, protein dephosphorylation and protein phosphatase type 1 complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J02904g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J02904g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J03080g').qtip({
                  content: "<h2>CAGL0J03080g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in energy reserve metabolic process and cell periphery localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03080g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03080g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J03212g').qtip({
                  content: "<h2>CAGL0J03212g</h2><hr><p><b>Gene name</b> : ALD5</p><p><b>Description</b> : Putative mitochondrial aldehyde dehydrogenase (NAD+); protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03212g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03212g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J03894g').qtip({
                  content: "<h2>CAGL0J03894g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have dihydrofolate reductase activity, drug binding, mRNA binding activity and role in dihydrofolate metabolic process, tetrahydrofolate biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03894g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03894g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J05852g').qtip({
                  content: "<h2>CAGL0J05852g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in secondary metabolite biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J05852g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J05852g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J09812g').qtip({
                  content: "<h2>CAGL0J09812g</h2><hr><p><b>Gene name</b> : TPS1</p><p><b>Description</b> : Ortholog(s) have alpha,alpha-trehalose-phosphate synthase (UDP-forming) activity, trehalose-phosphatase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09812g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09812g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J11682g').qtip({
                  content: "<h2>CAGL0J11682g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in aerobic respiration, development of symbiont in host and mitochondrial intermembrane space localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J11682g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J11682g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K00847g').qtip({
                  content: "<h2>CAGL0K00847g</h2><hr><p><b>Gene name</b> : CIR1</p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K00847g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K00847g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K02629g').qtip({
                  content: "<h2>CAGL0K02629g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have intracellular localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K02629g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K02629g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K02893g').qtip({
                  content: "<h2>CAGL0K02893g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ubiquinol-cytochrome-c reductase activity, role in aerobic respiration, mitochondrial electron transport, ubiquinol to cytochrome c and mitochondrial respiratory chain complex III localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K02893g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K02893g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K03421g').qtip({
                  content: "<h2>CAGL0K03421g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphoglucomutase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K03421g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K03421g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K05137g').qtip({
                  content: "<h2>CAGL0K05137g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have alpha,alpha-trehalase activity and role in cellular response to desiccation, cellular response to ethanol, cellular response to freezing, pathogenesis, trehalose catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K05137g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K05137g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K05687g').qtip({
                  content: "<h2>CAGL0K05687g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted FMN binding, catalytic activity, oxidoreductase activity and role in oxidation-reduction process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K05687g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K05687g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K05813g').qtip({
                  content: "<h2>CAGL0K05813g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have disulfide oxidoreductase activity, glutathione disulfide oxidoreductase activity, glutathione peroxidase activity, glutathione transferase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K05813g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K05813g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K06259g').qtip({
                  content: "<h2>CAGL0K06259g</h2><hr><p><b>Gene name</b> : TSA1</p><p><b>Description</b> : Thiol-specific antioxidant protein; predicted thioredoxin peroxidase involved in oxidative stress response; protein abundance decreased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K06259g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K06259g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K07480g').qtip({
                  content: "<h2>CAGL0K07480g</h2><hr><p><b>Gene name</b> : PGM1</p><p><b>Description</b> : Putative phosphoglucomutase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07480g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07480g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K08184g').qtip({
                  content: "<h2>CAGL0K08184g</h2><hr><p><b>Gene name</b> : CCP1</p><p><b>Description</b> : Cytochrome C peroxidase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08184g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08184g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K09702g').qtip({
                  content: "<h2>CAGL0K09702g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative stress-induced alcohol dehydrogenase; gene is upregulated in azole-resistant strain; protein differentially expressed in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K09702g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K09702g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K10736g').qtip({
                  content: "<h2>CAGL0K10736g</h2><hr><p><b>Gene name</b> : CYB2</p><p><b>Description</b> : Ortholog(s) have L-lactate dehydrogenase (cytochrome) activity and mitochondrial intermembrane space, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10736g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10736g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K10780g').qtip({
                  content: "<h2>CAGL0K10780g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have IMP dehydrogenase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10780g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10780g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K10868g').qtip({
                  content: "<h2>CAGL0K10868g</h2><hr><p><b>Gene name</b> : CTA1</p><p><b>Description</b> : Putative catalase A; gene is downregulated in azole-resistant strain; regulated by oxidative stress and glucose starvation; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10868g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10868g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K11858g').qtip({
                  content: "<h2>CAGL0K11858g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative flavodoxin</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K11858g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K11858g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K12100g').qtip({
                  content: "<h2>CAGL0K12100g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative coproporphyrinogen III oxidase; protein differentially expressed in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K12100g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K12100g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L00429g').qtip({
                  content: "<h2>CAGL0L00429g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycine dehydrogenase (decarboxylating) activity and role in glycine decarboxylation via glycine cleavage system, one-carbon metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L00429g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L00429g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L01089g').qtip({
                  content: "<h2>CAGL0L01089g</h2><hr><p><b>Gene name</b> : GLT1</p><p><b>Description</b> : Ortholog(s) have glutamate synthase (NADH) activity and role in L-glutamate biosynthetic process, ammonia assimilation cycle, invasive filamentous growth</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L01089g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L01089g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L01177g').qtip({
                  content: "<h2>CAGL0L01177g</h2><hr><p><b>Gene name</b> : FRDS1</p><p><b>Description</b> : Putative soluble fumarate reductase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L01177g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L01177g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L02167g').qtip({
                  content: "<h2>CAGL0L02167g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 3-hydroxyacyl-CoA dehydrogenase activity, enoyl-CoA hydratase activity and role in fatty acid beta-oxidation, fatty acid catabolic process, glyoxylate cycle, pathogenesis, very long-chain fatty acid catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L02167g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L02167g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L03828g').qtip({
                  content: "<h2>CAGL0L03828g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have electron transfer activity, role in ergosterol biosynthetic process, sterol biosynthetic process and endoplasmic reticulum membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03828g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03828g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L05236g').qtip({
                  content: "<h2>CAGL0L05236g</h2><hr><p><b>Gene name</b> : MDH1</p><p><b>Description</b> : Malate dehydrogenase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L05236g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L05236g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L05258g').qtip({
                  content: "<h2>CAGL0L05258g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have sulfiredoxin activity and role in cellular protein localization, cellular response to oxidative stress</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L05258g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L05258g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L06160g').qtip({
                  content: "<h2>CAGL0L06160g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytochrome-c oxidase activity, zinc ion binding activity and role in mitochondrial electron transport, cytochrome c to oxygen</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06160g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06160g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L06666g').qtip({
                  content: "<h2>CAGL0L06666g</h2><hr><p><b>Gene name</b> : YHB1</p><p><b>Description</b> : Putative flavohemoglobin, involved in nitric oxide detoxification</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06666g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06666g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L09537g').qtip({
                  content: "<h2>CAGL0L09537g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted FMN binding, catalytic activity, oxidoreductase activity and role in oxidation-reduction process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L09537g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L09537g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L10406g').qtip({
                  content: "<h2>CAGL0L10406g</h2><hr><p><b>Gene name</b> : CYT1</p><p><b>Description</b> : Ortholog(s) have electron transporter, transferring electrons within CoQH2-cytochrome c reductase complex activity and role in mitochondrial electron transport, ubiquinol to cytochrome c</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10406g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10406g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L11506g').qtip({
                  content: "<h2>CAGL0L11506g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have hydroxymethylglutaryl-CoA reductase (NADPH) activity and role in cellular response to drug, ergosterol biosynthetic process, isopentenyl diphosphate biosynthetic process, mevalonate pathway</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L11506g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L11506g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L12364g').qtip({
                  content: "<h2>CAGL0L12364g</h2><hr><p><b>Gene name</b> : ERG10</p><p><b>Description</b> : Ortholog(s) have acetyl-CoA C-acetyltransferase activity, role in ergosterol biosynthetic process and cytoplasm, intracellular localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L12364g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L12364g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M03377g').qtip({
                  content: "<h2>CAGL0M03377g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 1,4-alpha-glucan branching enzyme activity and role in glycogen biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M03377g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M03377g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M04499g').qtip({
                  content: "<h2>CAGL0M04499g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have proline dehydrogenase activity, role in proline catabolic process to glutamate and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M04499g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M04499g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M05951g').qtip({
                  content: "<h2>CAGL0M05951g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted oxidoreductase activity, role in oxidation-reduction process and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M05951g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M05951g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M05995g').qtip({
                  content: "<h2>CAGL0M05995g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have lipid droplet localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M05995g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M05995g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M07271g').qtip({
                  content: "<h2>CAGL0M07271g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 2 iron, 2 sulfur cluster binding, glutathione disulfide oxidoreductase activity, role in [2Fe-2S] cluster assembly, protein maturation by [2Fe-2S] cluster transfer and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M07271g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M07271g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M07656g').qtip({
                  content: "<h2>CAGL0M07656g</h2><hr><p><b>Gene name</b> : ERG5</p><p><b>Description</b> : Putative C22 sterol desaturase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M07656g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M07656g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M11704g').qtip({
                  content: "<h2>CAGL0M11704g</h2><hr><p><b>Gene name</b> : AHP1</p><p><b>Description</b> : Putative thiol-specific peroxiredoxin; alkyl hydroperoxide reductase; protein differentially expressed in azole resistant strain; expression upregulated in biofilm vs planktonic cell culture; protein abundance decreased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M11704g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M11704g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M12551g').qtip({
                  content: "<h2>CAGL0M12551g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in energy reserve metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M12551g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M12551g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M12881g').qtip({
                  content: "<h2>CAGL0M12881g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have dihydroorotate dehydrogenase activity, role in 'de novo' UMP biosynthetic process and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M12881g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M12881g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
