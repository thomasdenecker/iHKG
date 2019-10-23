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
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#66ff66',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0A02816g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative 2-methylbutyraldehyde reductase; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02816g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02816g'  target='_blank'> Link to GRYC</a>",
                  x : -2.00621311827683,
                  y : -2.68021159431709
                  },
                  position : {
                  'x' : -20.0621311827683,
                  'y' : -26.8021159431709
                  },
  },
{
                  data: {
                  id: 'CAGL0A03366g',
                  name: 'CAGL0A03366g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A03366g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have IMP cyclohydrolase activity, phosphoribosylaminoimidazolecarboxamide formyltransferase activity and role in 'de novo' IMP biosynthetic process, IMP biosynthetic process, purine nucleotide biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03366g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03366g'  target='_blank'> Link to GRYC</a>",
                  x : 7.68724875769111,
                  y : -4.77411511449756
                  },
                  position : {
                  'x' : 76.8724875769111,
                  'y' : -47.7411511449756
                  },
  },
{
                  data: {
                  id: 'CAGL0A03542g',
                  name: 'CAGL0A03542g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0A03542g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Cytochrome c oxidase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03542g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03542g'  target='_blank'> Link to GRYC</a>",
                  x : 4.78972284947703,
                  y : 6.0100122799553
                  },
                  position : {
                  'x' : 47.8972284947703,
                  'y' : 60.100122799553
                  },
  },
{
                  data: {
                  id: 'CAGL0A03740g',
                  name: 'CAGL0A03740g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A03740g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in fatty acid beta-oxidation, long-chain fatty acid catabolic process and peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03740g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03740g'  target='_blank'> Link to GRYC</a>",
                  x : 11.870261178474,
                  y : -2.58990539140167
                  },
                  position : {
                  'x' : 118.70261178474,
                  'y' : -25.8990539140167
                  },
  },
{
                  data: {
                  id: 'CAGL0A03905g',
                  name: 'CAGL0A03905g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#66ff66',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0A03905g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have heme oxygenase (decyclizing) activity and role in cellular iron ion homeostasis, heme catabolic process, response to carbon monoxide, response to oxidative stress</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03905g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03905g'  target='_blank'> Link to GRYC</a>",
                  x : -3.71018336328424,
                  y : -0.834123909637963
                  },
                  position : {
                  'x' : -37.1018336328424,
                  'y' : -8.34123909637963
                  },
  },
{
                  data: {
                  id: 'CAGL0B00990g',
                  name: 'CAGL0B00990g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B00990g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have oxidoreductase activity, acting on NAD(P)H, nitrogenous group as acceptor activity and role in cellular response to oxidative stress, negative regulation of fatty acid metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B00990g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B00990g'  target='_blank'> Link to GRYC</a>",
                  x : 2.8618713862815,
                  y : -6.06584996403467
                  },
                  position : {
                  'x' : 28.618713862815,
                  'y' : -60.6584996403467
                  },
  },
{
                  data: {
                  id: 'CAGL0C01325g',
                  name: 'CAGL0C01325g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C01325g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytochrome-c oxidase activity, nitrite reductase (NO-forming) activity, role in mitochondrial electron transport, cytochrome c to oxygen and mitochondrial respiratory chain complex IV localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C01325g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C01325g'  target='_blank'> Link to GRYC</a>",
                  x : 4.22196307273497,
                  y : 6.75566510006453
                  },
                  position : {
                  'x' : 42.2196307273497,
                  'y' : 67.5566510006453
                  },
  },
{
                  data: {
                  id: 'CAGL0C01727g',
                  name: 'CAGL0C01727g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C01727g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have UDP-N-acetylglucosamine-dolichyl-phosphate N-acetylglucosaminephosphotransferase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C01727g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C01727g'  target='_blank'> Link to GRYC</a>",
                  x : -1.15213674899297,
                  y : 4.41225269200268
                  },
                  position : {
                  'x' : -11.5213674899297,
                  'y' : 44.1225269200268
                  },
  },
{
                  data: {
                  id: 'CAGL0C02233g',
                  name: 'CAGL0C02233g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C02233g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-methionine-(S)-S-oxide reductase activity, peptide-methionine (S)-S-oxide reductase activity, role in L-methionine salvage from methionine sulphoxide, cellular response to oxidative stress and cytoplasm localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C02233g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C02233g'  target='_blank'> Link to GRYC</a>",
                  x : 1.03523069286642,
                  y : -0.663013081403374
                  },
                  position : {
                  'x' : 10.3523069286642,
                  'y' : -6.63013081403374
                  },
  },
{
                  data: {
                  id: 'CAGL0C03333g',
                  name: 'CAGL0C03333g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0C03333g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ferric-chelate reductase activity, role in cellular response to iron ion starvation, copper ion import, intracellular sequestering of iron ion, reductive iron assimilation and fungal-type vacuole membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03333g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03333g'  target='_blank'> Link to GRYC</a>",
                  x : -4.07820770450169,
                  y : 1.15491313801331
                  },
                  position : {
                  'x' : -40.7820770450169,
                  'y' : 11.5491313801331
                  },
  },
{
                  data: {
                  id: 'CAGL0C03443g',
                  name: 'CAGL0C03443g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C03443g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative saccharopine dehydrogenase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03443g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03443g'  target='_blank'> Link to GRYC</a>",
                  x : 3.79650109191216,
                  y : 6.81291102632024
                  },
                  position : {
                  'x' : 37.9650109191216,
                  'y' : 68.1291102632024
                  },
  },
{
                  data: {
                  id: 'CAGL0C03850g',
                  name: 'CAGL0C03850g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C03850g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have thioredoxin peroxidase activity, role in cell redox homeostasis, cellular response to oxidative stress and nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03850g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03850g'  target='_blank'> Link to GRYC</a>",
                  x : -0.0375772520806539,
                  y : -2.17141582538982
                  },
                  position : {
                  'x' : -0.375772520806539,
                  'y' : -21.7141582538982
                  },
  },
{
                  data: {
                  id: 'CAGL0C04191g',
                  name: 'CAGL0C04191g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C04191g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have succinate-semialdehyde dehydrogenase [NAD(P)+] activity and role in cellular response to oxidative stress, gamma-aminobutyric acid catabolic process, glutamate decarboxylation to succinate</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C04191g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C04191g'  target='_blank'> Link to GRYC</a>",
                  x : 3.35343528638482,
                  y : -2.89998956112006
                  },
                  position : {
                  'x' : 33.5343528638482,
                  'y' : -28.9998956112006
                  },
  },
{
                  data: {
                  id: 'CAGL0D00198g',
                  name: 'CAGL0D00198g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0D00198g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have (R,R)-butanediol dehydrogenase activity and role in alcohol metabolic process, butanediol biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00198g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00198g'  target='_blank'> Link to GRYC</a>",
                  x : -3.60985588023848,
                  y : 2.16895985716323
                  },
                  position : {
                  'x' : -36.0985588023848,
                  'y' : 21.6895985716323
                  },
  },
{
                  data: {
                  id: 'CAGL0D00528g',
                  name: 'CAGL0D00528g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D00528g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 3-hydroxyacyl-[acyl-carrier-protein] dehydratase activity, [acyl-carrier-protein] S-acetyltransferase activity and [acyl-carrier-protein] S-malonyltransferase activity, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00528g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00528g'  target='_blank'> Link to GRYC</a>",
                  x : -2.40462423985084,
                  y : 4.34720951731965
                  },
                  position : {
                  'x' : -24.0462423985084,
                  'y' : 43.4720951731965
                  },
  },
{
                  data: {
                  id: 'CAGL0D00748g',
                  name: 'CAGL0D00748g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D00748g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytochrome-c oxidase activity, role in mitochondrial electron transport, cytochrome c to oxygen and mitochondrial respiratory chain complex IV, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00748g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00748g'  target='_blank'> Link to GRYC</a>",
                  x : 3.57960792366229,
                  y : 6.55267513281218
                  },
                  position : {
                  'x' : 35.7960792366229,
                  'y' : 65.5267513281218
                  },
  },
{
                  data: {
                  id: 'CAGL0D00770g',
                  name: 'CAGL0D00770g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D00770g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have isocitrate dehydrogenase (NADP+) activity, role in glutamate biosynthetic process and cytoplasm, extracellular region, mitochondrial nucleoid, mitochondrion, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00770g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00770g'  target='_blank'> Link to GRYC</a>",
                  x : 3.3924835530294,
                  y : -1.24665641725379
                  },
                  position : {
                  'x' : 33.924835530294,
                  'y' : -12.4665641725379
                  },
  },
{
                  data: {
                  id: 'CAGL0D01958g',
                  name: 'CAGL0D01958g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0D01958g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have succinate dehydrogenase (ubiquinone) activity and role in cellular respiration, protein insertion into mitochondrial inner membrane</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D01958g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D01958g'  target='_blank'> Link to GRYC</a>",
                  x : 4.96185633131661,
                  y : 5.49875093569259
                  },
                  position : {
                  'x' : 49.6185633131661,
                  'y' : 54.9875093569259
                  },
  },
{
                  data: {
                  id: 'CAGL0D03982g',
                  name: 'CAGL0D03982g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D03982g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 1-pyrroline-5-carboxylate dehydrogenase activity, role in glutamate biosynthetic process, proline catabolic process to glutamate and mitochondrial matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D03982g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D03982g'  target='_blank'> Link to GRYC</a>",
                  x : 5.1682514317157,
                  y : -2.40862279862725
                  },
                  position : {
                  'x' : 51.682514317157,
                  'y' : -24.0862279862725
                  },
  },
{
                  data: {
                  id: 'CAGL0D04356g',
                  name: 'CAGL0D04356g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D04356g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycine dehydrogenase (decarboxylating) activity and role in glycine metabolic process, one-carbon metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D04356g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D04356g'  target='_blank'> Link to GRYC</a>",
                  x : 5.15232703102292,
                  y : -1.85176517999683
                  },
                  position : {
                  'x' : 51.5232703102292,
                  'y' : -18.5176517999683
                  },
  },
{
                  data: {
                  id: 'CAGL0D05192g',
                  name: 'CAGL0D05192g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D05192g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ubiquinol-cytochrome-c reductase activity and role in aerobic respiration, mitochondrial electron transport, ubiquinol to cytochrome c</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D05192g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D05192g'  target='_blank'> Link to GRYC</a>",
                  x : 5.13656836213928,
                  y : 7.62478383838291
                  },
                  position : {
                  'x' : 51.3656836213928,
                  'y' : 76.2478383838291
                  },
  },
{
                  data: {
                  id: 'CAGL0D05940g',
                  name: 'CAGL0D05940g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D05940g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Squalene epoxidase with a role in ergosterol synthesis; involved in growth under conditions of low oxygen tension</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D05940g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D05940g'  target='_blank'> Link to GRYC</a>",
                  x : -3.10621215705838,
                  y : 5.83491296202915
                  },
                  position : {
                  'x' : -31.0621215705838,
                  'y' : 58.3491296202915
                  },
  },
{
                  data: {
                  id: 'CAGL0E01705g',
                  name: 'CAGL0E01705g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E01705g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-malate dehydrogenase activity, role in gluconeogenesis, protein import into peroxisome matrix and cytosol, nuclear periphery localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01705g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01705g'  target='_blank'> Link to GRYC</a>",
                  x : 6.55928661659674,
                  y : -1.35784830586284
                  },
                  position : {
                  'x' : 65.5928661659674,
                  'y' : -13.5784830586284
                  },
  },
{
                  data: {
                  id: 'CAGL0E03850g',
                  name: 'CAGL0E03850g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0E03850g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted electron transfer activity, iron-sulfur cluster binding, oxidoreductase activity and role in oxidation-reduction process, tricarboxylic acid cycle</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E03850g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E03850g'  target='_blank'> Link to GRYC</a>",
                  x : 6.78724880448578,
                  y : 7.64069898542309
                  },
                  position : {
                  'x' : 67.8724880448578,
                  'y' : 76.4069898542309
                  },
  },
{
                  data: {
                  id: 'CAGL0E04334g',
                  name: 'CAGL0E04334g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E04334g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative cytochrome P-450 lanosterol 14-alpha-demethylase; target enzyme of azole antifungal drugs; increased protein abundance in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04334g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04334g'  target='_blank'> Link to GRYC</a>",
                  x : -0.262717942938948,
                  y : 7.42311410153415
                  },
                  position : {
                  'x' : -2.62717942938948,
                  'y' : 74.2311410153415
                  },
  },
{
                  data: {
                  id: 'CAGL0E05170g',
                  name: 'CAGL0E05170g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E05170g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative methylglyoxal reductase (NADPH-dependent)</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05170g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05170g'  target='_blank'> Link to GRYC</a>",
                  x : 4.60690257323859,
                  y : -2.41448615427628
                  },
                  position : {
                  'x' : 46.0690257323859,
                  'y' : -24.1448615427628
                  },
  },
{
                  data: {
                  id: 'CAGL0E06138g',
                  name: 'CAGL0E06138g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E06138g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have fatty acid synthase activity, role in fatty acid biosynthetic process, long-chain fatty acid biosynthetic process, palmitic acid biosynthetic process and fatty acid synthase complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E06138g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E06138g'  target='_blank'> Link to GRYC</a>",
                  x : -3.84300465462759,
                  y : -2.69192364797827
                  },
                  position : {
                  'x' : -38.4300465462759,
                  'y' : -26.9192364797827
                  },
  },
{
                  data: {
                  id: 'CAGL0E06424g',
                  name: 'CAGL0E06424g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E06424g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytochrome-b5 reductase activity, acting on NAD(P)H activity and role in cellular response to oxidative stress, ergosterol biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E06424g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E06424g'  target='_blank'> Link to GRYC</a>",
                  x : 6.12487265771033,
                  y : -2.57310381331743
                  },
                  position : {
                  'x' : 61.2487265771033,
                  'y' : -25.7310381331743
                  },
  },
{
                  data: {
                  id: 'CAGL0F00407g',
                  name: 'CAGL0F00407g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F00407g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have deoxyhypusine monooxygenase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00407g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00407g'  target='_blank'> Link to GRYC</a>",
                  x : 1.78341787467054,
                  y : 8.88775208147081
                  },
                  position : {
                  'x' : 17.8341787467054,
                  'y' : 88.8775208147081
                  },
  },
{
                  data: {
                  id: 'CAGL0F03399g',
                  name: 'CAGL0F03399g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F03399g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have fatty acid alpha-hydroxylase activity, role in inositol phosphoceramide metabolic process, mannosyl-inositol phosphorylceramide metabolic process and membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F03399g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F03399g'  target='_blank'> Link to GRYC</a>",
                  x : 3.48873510319876,
                  y : 5.94503761809407
                  },
                  position : {
                  'x' : 34.8873510319876,
                  'y' : 59.4503761809407
                  },
  },
{
                  data: {
                  id: 'CAGL0F04213g',
                  name: 'CAGL0F04213g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F04213g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATP:ADP antiporter activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04213g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04213g'  target='_blank'> Link to GRYC</a>",
                  x : 6.55304826100336,
                  y : 3.36036541702889
                  },
                  position : {
                  'x' : 65.5304826100336,
                  'y' : 33.6036541702889
                  },
  },
{
                  data: {
                  id: 'CAGL0F04565g',
                  name: 'CAGL0F04565g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F04565g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ubiquinol-cytochrome-c reductase activity, role in aerobic respiration and mitochondrial respiratory chain complex III, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04565g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04565g'  target='_blank'> Link to GRYC</a>",
                  x : 5.72826389888348,
                  y : 6.85367629696814
                  },
                  position : {
                  'x' : 57.2826389888348,
                  'y' : 68.5367629696814
                  },
  },
{
                  data: {
                  id: 'CAGL0F04719g',
                  name: 'CAGL0F04719g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F04719g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycogen (starch) synthase activity, role in glycogen biosynthetic process and cytoplasm localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04719g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04719g'  target='_blank'> Link to GRYC</a>",
                  x : 1.78429060449001,
                  y : -3.94457824972609
                  },
                  position : {
                  'x' : 17.8429060449001,
                  'y' : -39.4457824972609
                  },
  },
{
                  data: {
                  id: 'CAGL0F04895g',
                  name: 'CAGL0F04895g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F04895g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycogen phosphorylase activity, role in glycogen catabolic process and cell surface, cytoplasm, hyphal cell wall localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F04895g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F04895g'  target='_blank'> Link to GRYC</a>",
                  x : 3.72542822497083,
                  y : -4.43856912098708
                  },
                  position : {
                  'x' : 37.2542822497083,
                  'y' : -44.3856912098708
                  },
  },
{
                  data: {
                  id: 'CAGL0F05071g',
                  name: 'CAGL0F05071g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F05071g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have dodecenoyl-CoA delta-isomerase activity, role in fatty acid beta-oxidation, filamentous growth and peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F05071g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F05071g'  target='_blank'> Link to GRYC</a>",
                  x : 5.56426317691609,
                  y : -2.69956915029956
                  },
                  position : {
                  'x' : 55.6426317691609,
                  'y' : -26.9956915029956
                  },
  },
{
                  data: {
                  id: 'CAGL0F05863g',
                  name: 'CAGL0F05863g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F05863g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have succinate dehydrogenase (ubiquinone) activity, role in cellular respiration and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F05863g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F05863g'  target='_blank'> Link to GRYC</a>",
                  x : 5.21351900691971,
                  y : 6.21140410129469
                  },
                  position : {
                  'x' : 52.1351900691971,
                  'y' : 62.1140410129469
                  },
  },
{
                  data: {
                  id: 'CAGL0F06413g',
                  name: 'CAGL0F06413g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#66ff66',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F06413g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative copper ferroxidase involved in iron uptake</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F06413g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F06413g'  target='_blank'> Link to GRYC</a>",
                  x : 12.2450768981694,
                  y : 5.07317383710142
                  },
                  position : {
                  'x' : 122.450768981694,
                  'y' : 50.7317383710142
                  },
  },
{
                  data: {
                  id: 'CAGL0F07513g',
                  name: 'CAGL0F07513g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F07513g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in aerobic respiration</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F07513g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F07513g'  target='_blank'> Link to GRYC</a>",
                  x : 5.69014480425082,
                  y : 0.706725527817452
                  },
                  position : {
                  'x' : 56.9014480425082,
                  'y' : 7.06725527817452
                  },
  },
{
                  data: {
                  id: 'CAGL0F08745g',
                  name: 'CAGL0F08745g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F08745g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cellular response to desiccation and cytoplasm localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F08745g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F08745g'  target='_blank'> Link to GRYC</a>",
                  x : 5.18973322052004,
                  y : -4.55135505151943
                  },
                  position : {
                  'x' : 51.8973322052004,
                  'y' : -45.5135505151943
                  },
  },
{
                  data: {
                  id: 'CAGL0G01540g',
                  name: 'CAGL0G01540g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G01540g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Beta carbonic anhydrase with a predicted role in non-classical protein export; upregulated in azole-resistant strain; enzyme activity increased by amines and amino acids; protein abundance decreased in ace2 cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G01540g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G01540g'  target='_blank'> Link to GRYC</a>",
                  x : -0.660718658803395,
                  y : -0.499155281460332
                  },
                  position : {
                  'x' : -6.60718658803395,
                  'y' : -4.99155281460332
                  },
  },
{
                  data: {
                  id: 'CAGL0G02585g',
                  name: 'CAGL0G02585g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G02585g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Homo-isocitrate dehydrogenase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G02585g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G02585g'  target='_blank'> Link to GRYC</a>",
                  x : -0.250173385130396,
                  y : 5.40591994209759
                  },
                  position : {
                  'x' : -2.50173385130396,
                  'y' : 54.0591994209759
                  },
  },
{
                  data: {
                  id: 'CAGL0G05698g',
                  name: 'CAGL0G05698g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G05698g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glutamate dehydrogenase (NAD+) activity and role in nitrogen compound metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G05698g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G05698g'  target='_blank'> Link to GRYC</a>",
                  x : 5.10801699658809,
                  y : -2.72941679717965
                  },
                  position : {
                  'x' : 51.0801699658809,
                  'y' : -27.2941679717965
                  },
  },
{
                  data: {
                  id: 'CAGL0G06402g',
                  name: 'CAGL0G06402g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G06402g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G06402g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G06402g'  target='_blank'> Link to GRYC</a>",
                  x : 4.10918237791835,
                  y : 5.92626732163028
                  },
                  position : {
                  'x' : 41.0918237791835,
                  'y' : 59.2626732163028
                  },
  },
{
                  data: {
                  id: 'CAGL0G08712g',
                  name: 'CAGL0G08712g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G08712g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have mitochondrial nucleoid, mitochondrial oxoglutarate dehydrogenase complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G08712g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G08712g'  target='_blank'> Link to GRYC</a>",
                  x : 6.27384981517418,
                  y : 2.28972400204347
                  },
                  position : {
                  'x' : 62.7384981517418,
                  'y' : 22.8972400204347
                  },
  },
{
                  data: {
                  id: 'CAGL0G09383g',
                  name: 'CAGL0G09383g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G09383g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative glyceraldehyde-3-phosphate dehydrogenase; increased protein abundance in azole resistant strain; expression upregulated in biofilm vs planktonic cell culture; upregulated in hypoxia</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G09383g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G09383g'  target='_blank'> Link to GRYC</a>",
                  x : 4.82142111662835,
                  y : -1.15631067520263
                  },
                  position : {
                  'x' : 48.2142111662835,
                  'y' : -11.5631067520263
                  },
  },
{
                  data: {
                  id: 'CAGL0G09977g',
                  name: 'CAGL0G09977g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G09977g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 4-alpha-glucanotransferase activity, amylo-alpha-1,6-glucosidase activity and role in glycogen catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G09977g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G09977g'  target='_blank'> Link to GRYC</a>",
                  x : 4.86621685707081,
                  y : -3.96597775725304
                  },
                  position : {
                  'x' : 48.6621685707081,
                  'y' : -39.6597775725304
                  },
  },
{
                  data: {
                  id: 'CAGL0G10131g',
                  name: 'CAGL0G10131g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G10131g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ubiquinol-cytochrome-c reductase activity and role in aerobic respiration, mitochondrial electron transport, ubiquinol to cytochrome c</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G10131g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G10131g'  target='_blank'> Link to GRYC</a>",
                  x : 4.15330941213955,
                  y : 7.01621905619948
                  },
                  position : {
                  'x' : 41.5330941213955,
                  'y' : 70.1621905619948
                  },
  },
{
                  data: {
                  id: 'CAGL0G10153g',
                  name: 'CAGL0G10153g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G10153g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in mitochondrial electron transport, ubiquinol to cytochrome c and mitochondrial respiratory chain complex III localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G10153g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G10153g'  target='_blank'> Link to GRYC</a>",
                  x : 4.03532378388531,
                  y : 7.50540623568389
                  },
                  position : {
                  'x' : 40.3532378388531,
                  'y' : 75.0540623568389
                  },
  },
{
                  data: {
                  id: 'CAGL0H02491g',
                  name: 'CAGL0H02491g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0H02491g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytochrome-c oxidase activity, role in mitochondrial electron transport, cytochrome c to oxygen and mitochondrial respiratory chain complex IV, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02491g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02491g'  target='_blank'> Link to GRYC</a>",
                  x : 4.85308415503223,
                  y : 7.0044216290386
                  },
                  position : {
                  'x' : 48.5308415503223,
                  'y' : 70.044216290386
                  },
  },
{
                  data: {
                  id: 'CAGL0H03795g',
                  name: 'CAGL0H03795g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H03795g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : 3-isopropylmalate dehydrogenase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H03795g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H03795g'  target='_blank'> Link to GRYC</a>",
                  x : 1.0029721410409,
                  y : -6.68886900994851
                  },
                  position : {
                  'x' : 10.029721410409,
                  'y' : -66.8886900994851
                  },
  },
{
                  data: {
                  id: 'CAGL0H04037g',
                  name: 'CAGL0H04037g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H04037g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have heat shock protein binding, protein phosphatase regulator activity and role in glycogen metabolic process, meiotic cell cycle, mitotic spindle assembly checkpoint, response to heat</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H04037g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H04037g'  target='_blank'> Link to GRYC</a>",
                  x : 2.66446198397641,
                  y : -3.61738460062361
                  },
                  position : {
                  'x' : 26.6446198397641,
                  'y' : -36.1738460062361
                  },
  },
{
                  data: {
                  id: 'CAGL0H04125g',
                  name: 'CAGL0H04125g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H04125g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have D-arabinono-1,4-lactone oxidase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H04125g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H04125g'  target='_blank'> Link to GRYC</a>",
                  x : 5.91985486238867,
                  y : -0.663521282921622
                  },
                  position : {
                  'x' : 59.1985486238867,
                  'y' : -6.63521282921622
                  },
  },
{
                  data: {
                  id: 'CAGL0H04939g',
                  name: 'CAGL0H04939g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H04939g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have fructose 1,6-bisphosphate 1-phosphatase activity, role in gluconeogenesis, reactive oxygen species metabolic process and cytosol, periplasmic space localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H04939g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H04939g'  target='_blank'> Link to GRYC</a>",
                  x : 5.73731801517555,
                  y : -1.0926389714813
                  },
                  position : {
                  'x' : 57.3731801517555,
                  'y' : -10.926389714813
                  },
  },
{
                  data: {
                  id: 'CAGL0H05137g',
                  name: 'CAGL0H05137g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H05137g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have aldehyde dehydrogenase [NAD(P)+] activity, role in NADPH regeneration, acetate biosynthetic process, response to salt stress and cytosol, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H05137g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H05137g'  target='_blank'> Link to GRYC</a>",
                  x : -3.22357614611053,
                  y : 3.9330923810411
                  },
                  position : {
                  'x' : -32.2357614611053,
                  'y' : 39.330923810411
                  },
  },
{
                  data: {
                  id: 'CAGL0H06699g',
                  name: 'CAGL0H06699g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H06699g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycerol-3-phosphate dehydrogenase (quinone) activity and role in NADH oxidation, glycerol metabolic process, replicative cell aging</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H06699g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H06699g'  target='_blank'> Link to GRYC</a>",
                  x : 6.27952790092764,
                  y : 0.914617990426033
                  },
                  position : {
                  'x' : 62.7952790092764,
                  'y' : 9.14617990426033
                  },
  },
{
                  data: {
                  id: 'CAGL0H06787g',
                  name: 'CAGL0H06787g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H06787g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have acetyl-CoA C-acyltransferase activity, mRNA binding activity, role in fatty acid beta-oxidation, icosanoid biosynthetic process and mitochondrial intermembrane space, peroxisomal matrix, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H06787g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H06787g'  target='_blank'> Link to GRYC</a>",
                  x : 12.0556501224126,
                  y : -1.64867811112874
                  },
                  position : {
                  'x' : 120.556501224126,
                  'y' : -16.4867811112874
                  },
  },
{
                  data: {
                  id: 'CAGL0H08063g',
                  name: 'CAGL0H08063g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H08063g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 2,4-dienoyl-CoA reductase (NADPH) activity, role in ascospore formation, fatty acid catabolic process and peroxisomal matrix localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H08063g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H08063g'  target='_blank'> Link to GRYC</a>",
                  x : 5.39393409125422,
                  y : -3.60817321874222
                  },
                  position : {
                  'x' : 53.9393409125422,
                  'y' : -36.0817321874222
                  },
  },
{
                  data: {
                  id: 'CAGL0H09944g',
                  name: 'CAGL0H09944g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0H09944g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 2-alkenal reductase [NAD(P)] activity, NADPH:quinone reductase activity, mRNA 3'-UTR AU-rich region binding activity and role in cellular response to oxidative stress</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H09944g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H09944g'  target='_blank'> Link to GRYC</a>",
                  x : -0.281999923270252,
                  y : -2.57562765905095
                  },
                  position : {
                  'x' : -2.81999923270252,
                  'y' : -25.7562765905095
                  },
  },
{
                  data: {
                  id: 'CAGL0I00748g',
                  name: 'CAGL0I00748g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I00748g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have NADH dehydrogenase activity, role in NADH oxidation, chronological cell aging, glycolytic fermentation to ethanol and mitochondrion, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I00748g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I00748g'  target='_blank'> Link to GRYC</a>",
                  x : 3.60245438205563,
                  y : 7.05501935973348
                  },
                  position : {
                  'x' : 36.0245438205563,
                  'y' : 70.5501935973348
                  },
  },
{
                  data: {
                  id: 'CAGL0I01100g',
                  name: 'CAGL0I01100g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I01100g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have alditol:NADP+ 1-oxidoreductase activity, aldo-keto reductase (NADP) activity, glycerol dehydrogenase [NAD(P)+] activity, mRNA binding, oxidoreductase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01100g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01100g'  target='_blank'> Link to GRYC</a>",
                  x : 1.62482510788921,
                  y : -2.51116739273656
                  },
                  position : {
                  'x' : 16.2482510788921,
                  'y' : -25.1116739273656
                  },
  },
{
                  data: {
                  id: 'CAGL0I01166g',
                  name: 'CAGL0I01166g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0I01166g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Thioredoxin reductase (NADPH)</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01166g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01166g'  target='_blank'> Link to GRYC</a>",
                  x : -1.85674104135608,
                  y : -2.03046004685832
                  },
                  position : {
                  'x' : -18.5674104135608,
                  'y' : -20.3046004685832
                  },
  },
{
                  data: {
                  id: 'CAGL0I01408g',
                  name: 'CAGL0I01408g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I01408g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have electron transfer activity and role in mitochondrial ATP synthesis coupled electron transport, mitochondrial electron transport, cytochrome c to oxygen, mitochondrial electron transport, ubiquinol to cytochrome c</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01408g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01408g'  target='_blank'> Link to GRYC</a>",
                  x : 0.396479742879181,
                  y : 9.32310003572885
                  },
                  position : {
                  'x' : 3.96479742879181,
                  'y' : 93.2310003572885
                  },
  },
{
                  data: {
                  id: 'CAGL0I02024g',
                  name: 'CAGL0I02024g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I02024g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative NADPH dehydrogenase; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02024g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02024g'  target='_blank'> Link to GRYC</a>",
                  x : 1.7366272332384,
                  y : -3.0286680359941
                  },
                  position : {
                  'x' : 17.366272332384,
                  'y' : -30.286680359941
                  },
  },
{
                  data: {
                  id: 'CAGL0I02530g',
                  name: 'CAGL0I02530g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I02530g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have N,N-dimethylaniline monooxygenase activity, role in protein folding and endoplasmic reticulum membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02530g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02530g'  target='_blank'> Link to GRYC</a>",
                  x : 3.63886067079686,
                  y : -3.89903921462287
                  },
                  position : {
                  'x' : 36.3886067079686,
                  'y' : -38.9903921462287
                  },
  },
{
                  data: {
                  id: 'CAGL0I03190g',
                  name: 'CAGL0I03190g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I03190g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative ubiquinol-Cytochrome c reductase iron-sulfur protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I03190g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I03190g'  target='_blank'> Link to GRYC</a>",
                  x : 5.20088386949074,
                  y : 6.95757801686411
                  },
                  position : {
                  'x' : 52.0088386949074,
                  'y' : 69.5757801686411
                  },
  },
{
                  data: {
                  id: 'CAGL0I05934g',
                  name: 'CAGL0I05934g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I05934g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ubiquitin-protein transferase regulator activity and role in cellular response to water deprivation, stress-induced homeostatically regulated protein degradation pathway</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I05934g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I05934g'  target='_blank'> Link to GRYC</a>",
                  x : 6.16774551682013,
                  y : -5.76467112757294
                  },
                  position : {
                  'x' : 61.6774551682013,
                  'y' : -57.6467112757295
                  },
  },
{
                  data: {
                  id: 'CAGL0I06831g',
                  name: 'CAGL0I06831g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I06831g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 2 iron, 2 sulfur cluster binding, electron transfer activity, iron-sulfur cluster binding, oxidoreductase activity, acting on NAD(P)H, oxidoreductase activity, acting on NAD(P)H, heme protein as acceptor activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I06831g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I06831g'  target='_blank'> Link to GRYC</a>",
                  x : 3.78980169414837,
                  y : 6.28696821518295
                  },
                  position : {
                  'x' : 37.8980169414837,
                  'y' : 62.8696821518295
                  },
  },
{
                  data: {
                  id: 'CAGL0I07843g',
                  name: 'CAGL0I07843g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I07843g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative alcohol dehydrogenase isoenzyme III; increased protein abundance in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I07843g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I07843g'  target='_blank'> Link to GRYC</a>",
                  x : 4.60271265614853,
                  y : 0.16240482559836
                  },
                  position : {
                  'x' : 46.0271265614853,
                  'y' : 1.6240482559836
                  },
  },
{
                  data: {
                  id: 'CAGL0I09328g',
                  name: 'CAGL0I09328g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I09328g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 3-dehydrosphinganine reductase activity, role in 3-keto-sphinganine metabolic process, sphingolipid biosynthetic process and lipid droplet localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09328g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09328g'  target='_blank'> Link to GRYC</a>",
                  x : -1.71106239692572,
                  y : 2.79203185006841
                  },
                  position : {
                  'x' : -17.1106239692572,
                  'y' : 27.9203185006841
                  },
  },
{
                  data: {
                  id: 'CAGL0J00429g',
                  name: 'CAGL0J00429g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J00429g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Cytochrome c oxidase subunit VI</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J00429g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J00429g'  target='_blank'> Link to GRYC</a>",
                  x : 4.24687701113141,
                  y : 6.18666282108443
                  },
                  position : {
                  'x' : 42.4687701113141,
                  'y' : 61.8666282108443
                  },
  },
{
                  data: {
                  id: 'CAGL0J00451g',
                  name: 'CAGL0J00451g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0J00451g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative glyceraldehyde-3-phosphate dehydrogenase; protein differentially expressed in azole resistant strain; expression downregulated in biofilm vs planktonic cell culture</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J00451g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J00451g'  target='_blank'> Link to GRYC</a>",
                  x : 11.5421378322196,
                  y : 6.30957266253877
                  },
                  position : {
                  'x' : 115.421378322196,
                  'y' : 63.0957266253877
                  },
  },
{
                  data: {
                  id: 'CAGL0J00847g',
                  name: 'CAGL0J00847g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0J00847g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have succinate dehydrogenase (ubiquinone) activity and role in cellular respiration</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J00847g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J00847g'  target='_blank'> Link to GRYC</a>",
                  x : 6.17932400341175,
                  y : 4.70654077350853
                  },
                  position : {
                  'x' : 61.7932400341175,
                  'y' : 47.0654077350854
                  },
  },
{
                  data: {
                  id: 'CAGL0J01441g',
                  name: 'CAGL0J01441g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J01441g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have alcohol dehydrogenase (NAD) activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J01441g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J01441g'  target='_blank'> Link to GRYC</a>",
                  x : -3.01624622370701,
                  y : 2.88048413235678
                  },
                  position : {
                  'x' : -30.1624622370701,
                  'y' : 28.8048413235678
                  },
  },
{
                  data: {
                  id: 'CAGL0J02904g',
                  name: 'CAGL0J02904g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J02904g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have protein phosphatase regulator activity, role in glycogen metabolic process, protein dephosphorylation and protein phosphatase type 1 complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J02904g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J02904g'  target='_blank'> Link to GRYC</a>",
                  x : 3.21667915848664,
                  y : -3.12582775413512
                  },
                  position : {
                  'x' : 32.1667915848664,
                  'y' : -31.2582775413512
                  },
  },
{
                  data: {
                  id: 'CAGL0J03080g',
                  name: 'CAGL0J03080g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J03080g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in energy reserve metabolic process and cell periphery localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03080g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03080g'  target='_blank'> Link to GRYC</a>",
                  x : 11.8488467350055,
                  y : 1.54813326837331
                  },
                  position : {
                  'x' : 118.488467350055,
                  'y' : 15.4813326837331
                  },
  },
{
                  data: {
                  id: 'CAGL0J03212g',
                  name: 'CAGL0J03212g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0J03212g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative mitochondrial aldehyde dehydrogenase (NAD+); protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03212g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03212g'  target='_blank'> Link to GRYC</a>",
                  x : -1.50412215456502,
                  y : -1.39068834410035
                  },
                  position : {
                  'x' : -15.0412215456502,
                  'y' : -13.9068834410035
                  },
  },
{
                  data: {
                  id: 'CAGL0J03894g',
                  name: 'CAGL0J03894g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J03894g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have dihydrofolate reductase activity, drug binding, mRNA binding activity and role in dihydrofolate metabolic process, tetrahydrofolate biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03894g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03894g'  target='_blank'> Link to GRYC</a>",
                  x : 2.3642544675858,
                  y : 7.55867548993819
                  },
                  position : {
                  'x' : 23.642544675858,
                  'y' : 75.5867548993819
                  },
  },
{
                  data: {
                  id: 'CAGL0J05852g',
                  name: 'CAGL0J05852g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J05852g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in secondary metabolite biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J05852g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J05852g'  target='_blank'> Link to GRYC</a>",
                  x : 5.62484963106004,
                  y : -0.217546973743753
                  },
                  position : {
                  'x' : 56.2484963106004,
                  'y' : -2.17546973743753
                  },
  },
{
                  data: {
                  id: 'CAGL0J09812g',
                  name: 'CAGL0J09812g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J09812g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have alpha,alpha-trehalose-phosphate synthase (UDP-forming) activity, trehalose-phosphatase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09812g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09812g'  target='_blank'> Link to GRYC</a>",
                  x : 1.87554853604482,
                  y : -3.28680900865092
                  },
                  position : {
                  'x' : 18.7554853604482,
                  'y' : -32.8680900865092
                  },
  },
{
                  data: {
                  id: 'CAGL0J11682g',
                  name: 'CAGL0J11682g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J11682g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in aerobic respiration, development of symbiont in host and mitochondrial intermembrane space localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J11682g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J11682g'  target='_blank'> Link to GRYC</a>",
                  x : 4.87741191969171,
                  y : 6.56323697519334
                  },
                  position : {
                  'x' : 48.7741191969171,
                  'y' : 65.6323697519334
                  },
  },
{
                  data: {
                  id: 'CAGL0K00847g',
                  name: 'CAGL0K00847g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K00847g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K00847g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K00847g'  target='_blank'> Link to GRYC</a>",
                  x : 5.1395959565438,
                  y : -0.180956077123172
                  },
                  position : {
                  'x' : 51.395959565438,
                  'y' : -1.80956077123172
                  },
  },
{
                  data: {
                  id: 'CAGL0K02629g',
                  name: 'CAGL0K02629g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K02629g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have intracellular localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K02629g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K02629g'  target='_blank'> Link to GRYC</a>",
                  x : 4.80761279203837,
                  y : -3.44815376475448
                  },
                  position : {
                  'x' : 48.0761279203837,
                  'y' : -34.4815376475448
                  },
  },
{
                  data: {
                  id: 'CAGL0K02893g',
                  name: 'CAGL0K02893g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0K02893g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ubiquinol-cytochrome-c reductase activity, role in aerobic respiration, mitochondrial electron transport, ubiquinol to cytochrome c and mitochondrial respiratory chain complex III localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K02893g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K02893g'  target='_blank'> Link to GRYC</a>",
                  x : 5.6872558864205,
                  y : 5.03184187702459
                  },
                  position : {
                  'x' : 56.872558864205,
                  'y' : 50.3184187702459
                  },
  },
{
                  data: {
                  id: 'CAGL0K03421g',
                  name: 'CAGL0K03421g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0K03421g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have phosphoglucomutase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K03421g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K03421g'  target='_blank'> Link to GRYC</a>",
                  x : -1.06534067784938,
                  y : -5.17170341886012
                  },
                  position : {
                  'x' : -10.6534067784938,
                  'y' : -51.7170341886012
                  },
  },
{
                  data: {
                  id: 'CAGL0K05137g',
                  name: 'CAGL0K05137g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K05137g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have alpha,alpha-trehalase activity and role in cellular response to desiccation, cellular response to ethanol, cellular response to freezing, pathogenesis, trehalose catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K05137g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K05137g'  target='_blank'> Link to GRYC</a>",
                  x : 12.9465620620033,
                  y : 3.33529678509458
                  },
                  position : {
                  'x' : 129.465620620033,
                  'y' : 33.3529678509458
                  },
  },
{
                  data: {
                  id: 'CAGL0K05687g',
                  name: 'CAGL0K05687g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K05687g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted FMN binding, catalytic activity, oxidoreductase activity and role in oxidation-reduction process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K05687g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K05687g'  target='_blank'> Link to GRYC</a>",
                  x : 4.45279667273498,
                  y : -2.75793903134457
                  },
                  position : {
                  'x' : 44.5279667273498,
                  'y' : -27.5793903134457
                  },
  },
{
                  data: {
                  id: 'CAGL0K05813g',
                  name: 'CAGL0K05813g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K05813g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have disulfide oxidoreductase activity, glutathione disulfide oxidoreductase activity, glutathione peroxidase activity, glutathione transferase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K05813g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K05813g'  target='_blank'> Link to GRYC</a>",
                  x : 2.94422277713737,
                  y : -3.94374576689506
                  },
                  position : {
                  'x' : 29.4422277713737,
                  'y' : -39.4374576689506
                  },
  },
{
                  data: {
                  id: 'CAGL0K06259g',
                  name: 'CAGL0K06259g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0K06259g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Thiol-specific antioxidant protein; predicted thioredoxin peroxidase involved in oxidative stress response; protein abundance decreased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K06259g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K06259g'  target='_blank'> Link to GRYC</a>",
                  x : 11.7386930784594,
                  y : 3.74467118889021
                  },
                  position : {
                  'x' : 117.386930784594,
                  'y' : 37.4467118889021
                  },
  },
{
                  data: {
                  id: 'CAGL0K07480g',
                  name: 'CAGL0K07480g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K07480g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative phosphoglucomutase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07480g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07480g'  target='_blank'> Link to GRYC</a>",
                  x : 1.24869390956428,
                  y : -4.19848904967465
                  },
                  position : {
                  'x' : 12.4869390956428,
                  'y' : -41.9848904967465
                  },
  },
{
                  data: {
                  id: 'CAGL0K08184g',
                  name: 'CAGL0K08184g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K08184g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Cytochrome C peroxidase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08184g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08184g'  target='_blank'> Link to GRYC</a>",
                  x : 4.75874481510055,
                  y : 7.87045497854211
                  },
                  position : {
                  'x' : 47.5874481510055,
                  'y' : 78.7045497854211
                  },
  },
{
                  data: {
                  id: 'CAGL0K09702g',
                  name: 'CAGL0K09702g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K09702g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative stress-induced alcohol dehydrogenase; gene is upregulated in azole-resistant strain; protein differentially expressed in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K09702g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K09702g'  target='_blank'> Link to GRYC</a>",
                  x : 1.79224712062407,
                  y : -4.57175193915401
                  },
                  position : {
                  'x' : 17.9224712062407,
                  'y' : -45.7175193915401
                  },
  },
{
                  data: {
                  id: 'CAGL0K10736g',
                  name: 'CAGL0K10736g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K10736g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-lactate dehydrogenase (cytochrome) activity and mitochondrial intermembrane space, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10736g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10736g'  target='_blank'> Link to GRYC</a>",
                  x : 1.49966177758149,
                  y : -3.40275712936094
                  },
                  position : {
                  'x' : 14.9966177758149,
                  'y' : -34.0275712936094
                  },
  },
{
                  data: {
                  id: 'CAGL0K10780g',
                  name: 'CAGL0K10780g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K10780g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have IMP dehydrogenase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10780g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10780g'  target='_blank'> Link to GRYC</a>",
                  x : 1.94315209722659,
                  y : 6.34883831004053
                  },
                  position : {
                  'x' : 19.4315209722659,
                  'y' : 63.4883831004053
                  },
  },
{
                  data: {
                  id: 'CAGL0K10868g',
                  name: 'CAGL0K10868g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K10868g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative catalase A; gene is downregulated in azole-resistant strain; regulated by oxidative stress and glucose starvation; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10868g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10868g'  target='_blank'> Link to GRYC</a>",
                  x : -2.24830938104058,
                  y : 7.7998619295231
                  },
                  position : {
                  'x' : -22.4830938104058,
                  'y' : 77.998619295231
                  },
  },
{
                  data: {
                  id: 'CAGL0K11858g',
                  name: 'CAGL0K11858g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K11858g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative flavodoxin</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K11858g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K11858g'  target='_blank'> Link to GRYC</a>",
                  x : 3.59514209509972,
                  y : -2.75422730973579
                  },
                  position : {
                  'x' : 35.9514209509972,
                  'y' : -27.5422730973579
                  },
  },
{
                  data: {
                  id: 'CAGL0K12100g',
                  name: 'CAGL0K12100g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K12100g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative coproporphyrinogen III oxidase; protein differentially expressed in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K12100g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K12100g'  target='_blank'> Link to GRYC</a>",
                  x : 0.0317917482307267,
                  y : 8.70096362881579
                  },
                  position : {
                  'x' : 0.317917482307267,
                  'y' : 87.0096362881579
                  },
  },
{
                  data: {
                  id: 'CAGL0L00429g',
                  name: 'CAGL0L00429g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L00429g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glycine dehydrogenase (decarboxylating) activity and role in glycine decarboxylation via glycine cleavage system, one-carbon metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L00429g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L00429g'  target='_blank'> Link to GRYC</a>",
                  x : 5.4923096757424,
                  y : -3.11859129777025
                  },
                  position : {
                  'x' : 54.923096757424,
                  'y' : -31.1859129777025
                  },
  },
{
                  data: {
                  id: 'CAGL0L01089g',
                  name: 'CAGL0L01089g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L01089g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glutamate synthase (NADH) activity and role in L-glutamate biosynthetic process, ammonia assimilation cycle, invasive filamentous growth</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L01089g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L01089g'  target='_blank'> Link to GRYC</a>",
                  x : 5.1623754527752,
                  y : 6.4827975598859
                  },
                  position : {
                  'x' : 51.623754527752,
                  'y' : 64.827975598859
                  },
  },
{
                  data: {
                  id: 'CAGL0L01177g',
                  name: 'CAGL0L01177g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L01177g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative soluble fumarate reductase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L01177g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L01177g'  target='_blank'> Link to GRYC</a>",
                  x : 0.04039579525854,
                  y : -3.08349776460541
                  },
                  position : {
                  'x' : 0.4039579525854,
                  'y' : -30.8349776460541
                  },
  },
{
                  data: {
                  id: 'CAGL0L02167g',
                  name: 'CAGL0L02167g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L02167g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 3-hydroxyacyl-CoA dehydrogenase activity, enoyl-CoA hydratase activity and role in fatty acid beta-oxidation, fatty acid catabolic process, glyoxylate cycle, pathogenesis, very long-chain fatty acid catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L02167g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L02167g'  target='_blank'> Link to GRYC</a>",
                  x : 12.2965659350081,
                  y : -0.669470943937945
                  },
                  position : {
                  'x' : 122.965659350081,
                  'y' : -6.69470943937945
                  },
  },
{
                  data: {
                  id: 'CAGL0L03828g',
                  name: 'CAGL0L03828g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L03828g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have electron transfer activity, role in ergosterol biosynthetic process, sterol biosynthetic process and endoplasmic reticulum membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03828g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03828g'  target='_blank'> Link to GRYC</a>",
                  x : -4.63038664347819,
                  y : 6.60159339456592
                  },
                  position : {
                  'x' : -46.3038664347819,
                  'y' : 66.0159339456592
                  },
  },
{
                  data: {
                  id: 'CAGL0L05236g',
                  name: 'CAGL0L05236g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0L05236g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Malate dehydrogenase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L05236g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L05236g'  target='_blank'> Link to GRYC</a>",
                  x : 6.84478633930821,
                  y : 4.15604376962142
                  },
                  position : {
                  'x' : 68.4478633930821,
                  'y' : 41.5604376962142
                  },
  },
{
                  data: {
                  id: 'CAGL0L05258g',
                  name: 'CAGL0L05258g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0L05258g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have sulfiredoxin activity and role in cellular protein localization, cellular response to oxidative stress</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L05258g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L05258g'  target='_blank'> Link to GRYC</a>",
                  x : 10.8108920646327,
                  y : 7.72766265476719
                  },
                  position : {
                  'x' : 108.108920646327,
                  'y' : 77.2766265476719
                  },
  },
{
                  data: {
                  id: 'CAGL0L06160g',
                  name: 'CAGL0L06160g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L06160g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytochrome-c oxidase activity, zinc ion binding activity and role in mitochondrial electron transport, cytochrome c to oxygen</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06160g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06160g'  target='_blank'> Link to GRYC</a>",
                  x : 4.64287770482538,
                  y : 7.29370208165876
                  },
                  position : {
                  'x' : 46.4287770482538,
                  'y' : 72.9370208165876
                  },
  },
{
                  data: {
                  id: 'CAGL0L06666g',
                  name: 'CAGL0L06666g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L06666g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative flavohemoglobin, involved in nitric oxide detoxification</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06666g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06666g'  target='_blank'> Link to GRYC</a>",
                  x : -3.68366891311983,
                  y : 7.40569129603748
                  },
                  position : {
                  'x' : -36.8366891311983,
                  'y' : 74.0569129603748
                  },
  },
{
                  data: {
                  id: 'CAGL0L09537g',
                  name: 'CAGL0L09537g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L09537g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted FMN binding, catalytic activity, oxidoreductase activity and role in oxidation-reduction process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L09537g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L09537g'  target='_blank'> Link to GRYC</a>",
                  x : 4.8673996157844,
                  y : -2.37471745453798
                  },
                  position : {
                  'x' : 48.673996157844,
                  'y' : -23.7471745453798
                  },
  },
{
                  data: {
                  id: 'CAGL0L10406g',
                  name: 'CAGL0L10406g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0L10406g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have electron transporter, transferring electrons within CoQH2-cytochrome c reductase complex activity and role in mitochondrial electron transport, ubiquinol to cytochrome c</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10406g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10406g'  target='_blank'> Link to GRYC</a>",
                  x : 5.35806259591266,
                  y : 5.7807529688743
                  },
                  position : {
                  'x' : 53.5806259591266,
                  'y' : 57.807529688743
                  },
  },
{
                  data: {
                  id: 'CAGL0L11506g',
                  name: 'CAGL0L11506g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L11506g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have hydroxymethylglutaryl-CoA reductase (NADPH) activity and role in cellular response to drug, ergosterol biosynthetic process, isopentenyl diphosphate biosynthetic process, mevalonate pathway</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L11506g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L11506g'  target='_blank'> Link to GRYC</a>",
                  x : 1.24942873687136,
                  y : 6.65362915756275
                  },
                  position : {
                  'x' : 12.4942873687136,
                  'y' : 66.5362915756275
                  },
  },
{
                  data: {
                  id: 'CAGL0L12364g',
                  name: 'CAGL0L12364g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L12364g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have acetyl-CoA C-acetyltransferase activity, role in ergosterol biosynthetic process and cytoplasm, intracellular localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L12364g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L12364g'  target='_blank'> Link to GRYC</a>",
                  x : -1.40137771866206,
                  y : 5.79773325160915
                  },
                  position : {
                  'x' : -14.0137771866206,
                  'y' : 57.9773325160915
                  },
  },
{
                  data: {
                  id: 'CAGL0M03377g',
                  name: 'CAGL0M03377g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M03377g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 1,4-alpha-glucan branching enzyme activity and role in glycogen biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M03377g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M03377g'  target='_blank'> Link to GRYC</a>",
                  x : 0.285346008714567,
                  y : -3.81149106031373
                  },
                  position : {
                  'x' : 2.85346008714567,
                  'y' : -38.1149106031373
                  },
  },
{
                  data: {
                  id: 'CAGL0M04499g',
                  name: 'CAGL0M04499g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M04499g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have proline dehydrogenase activity, role in proline catabolic process to glutamate and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M04499g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M04499g'  target='_blank'> Link to GRYC</a>",
                  x : 12.8385575962945,
                  y : 0.0422493019011047
                  },
                  position : {
                  'x' : 128.385575962945,
                  'y' : 0.422493019011047
                  },
  },
{
                  data: {
                  id: 'CAGL0M05951g',
                  name: 'CAGL0M05951g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M05951g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted oxidoreductase activity, role in oxidation-reduction process and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M05951g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M05951g'  target='_blank'> Link to GRYC</a>",
                  x : 3.82045032436499,
                  y : -3.46234303332729
                  },
                  position : {
                  'x' : 38.2045032436499,
                  'y' : -34.6234303332729
                  },
  },
{
                  data: {
                  id: 'CAGL0M05995g',
                  name: 'CAGL0M05995g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0M05995g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have lipid droplet localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M05995g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M05995g'  target='_blank'> Link to GRYC</a>",
                  x : 5.77821752161263,
                  y : 3.41229933988477
                  },
                  position : {
                  'x' : 57.7821752161263,
                  'y' : 34.1229933988477
                  },
  },
{
                  data: {
                  id: 'CAGL0M07271g',
                  name: 'CAGL0M07271g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M07271g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 2 iron, 2 sulfur cluster binding, glutathione disulfide oxidoreductase activity, role in [2Fe-2S] cluster assembly, protein maturation by [2Fe-2S] cluster transfer and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M07271g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M07271g'  target='_blank'> Link to GRYC</a>",
                  x : 4.62184436056846,
                  y : 6.57716234785602
                  },
                  position : {
                  'x' : 46.2184436056846,
                  'y' : 65.7716234785602
                  },
  },
{
                  data: {
                  id: 'CAGL0M07656g',
                  name: 'CAGL0M07656g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M07656g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative C22 sterol desaturase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M07656g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M07656g'  target='_blank'> Link to GRYC</a>",
                  x : 0.499010871079149,
                  y : 7.46605777907161
                  },
                  position : {
                  'x' : 4.99010871079149,
                  'y' : 74.6605777907161
                  },
  },
{
                  data: {
                  id: 'CAGL0M11704g',
                  name: 'CAGL0M11704g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M11704g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative thiol-specific peroxiredoxin; alkyl hydroperoxide reductase; protein differentially expressed in azole resistant strain; expression upregulated in biofilm vs planktonic cell culture; protein abundance decreased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M11704g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M11704g'  target='_blank'> Link to GRYC</a>",
                  x : 0.491772590401603,
                  y : -4.93675446808937
                  },
                  position : {
                  'x' : 4.91772590401603,
                  'y' : -49.3675446808937
                  },
  },
{
                  data: {
                  id: 'CAGL0M12551g',
                  name: 'CAGL0M12551g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M12551g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in energy reserve metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M12551g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M12551g'  target='_blank'> Link to GRYC</a>",
                  x : 13.1046487998172,
                  y : 1.79142319657613
                  },
                  position : {
                  'x' : 131.046487998172,
                  'y' : 17.9142319657613
                  },
  },
{
                  data: {
                  id: 'CAGL0M12881g',
                  name: 'CAGL0M12881g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M12881g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have dihydroorotate dehydrogenase activity, role in 'de novo' UMP biosynthetic process and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M12881g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M12881g'  target='_blank'> Link to GRYC</a>",
                  x : 7.21669462056216,
                  y : 2.8106268506396
                  },
                  position : {
                  'x' : 72.1669462056216,
                  'y' : 28.106268506396
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
                  content: "<h2>CAGL0A03542g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Cytochrome c oxidase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03542g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03542g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0A03905g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have heme oxygenase (decyclizing) activity and role in cellular iron ion homeostasis, heme catabolic process, response to carbon monoxide, response to oxidative stress</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03905g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03905g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0B00990g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have oxidoreductase activity, acting on NAD(P)H, nitrogenous group as acceptor activity and role in cellular response to oxidative stress, negative regulation of fatty acid metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B00990g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B00990g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0C03443g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative saccharopine dehydrogenase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03443g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03443g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0D00770g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have isocitrate dehydrogenase (NADP+) activity, role in glutamate biosynthetic process and cytoplasm, extracellular region, mitochondrial nucleoid, mitochondrion, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00770g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00770g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0D05940g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Squalene epoxidase with a role in ergosterol synthesis; involved in growth under conditions of low oxygen tension</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D05940g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D05940g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0E04334g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative cytochrome P-450 lanosterol 14-alpha-demethylase; target enzyme of azole antifungal drugs; increased protein abundance in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04334g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04334g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0E05170g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative methylglyoxal reductase (NADPH-dependent)</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05170g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05170g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0F03399g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have fatty acid alpha-hydroxylase activity, role in inositol phosphoceramide metabolic process, mannosyl-inositol phosphorylceramide metabolic process and membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F03399g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F03399g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0F06413g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative copper ferroxidase involved in iron uptake</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F06413g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F06413g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0G01540g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Beta carbonic anhydrase with a predicted role in non-classical protein export; upregulated in azole-resistant strain; enzyme activity increased by amines and amino acids; protein abundance decreased in ace2 cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G01540g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G01540g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0G02585g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Homo-isocitrate dehydrogenase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G02585g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G02585g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0G05698g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glutamate dehydrogenase (NAD+) activity and role in nitrogen compound metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G05698g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G05698g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0G09383g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative glyceraldehyde-3-phosphate dehydrogenase; increased protein abundance in azole resistant strain; expression upregulated in biofilm vs planktonic cell culture; upregulated in hypoxia</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G09383g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G09383g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0G09977g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have 4-alpha-glucanotransferase activity, amylo-alpha-1,6-glucosidase activity and role in glycogen catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G09977g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G09977g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0H03795g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : 3-isopropylmalate dehydrogenase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H03795g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H03795g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0I01100g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have alditol:NADP+ 1-oxidoreductase activity, aldo-keto reductase (NADP) activity, glycerol dehydrogenase [NAD(P)+] activity, mRNA binding, oxidoreductase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01100g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01100g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0I01166g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Thioredoxin reductase (NADPH)</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01166g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01166g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0I01408g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have electron transfer activity and role in mitochondrial ATP synthesis coupled electron transport, mitochondrial electron transport, cytochrome c to oxygen, mitochondrial electron transport, ubiquinol to cytochrome c</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01408g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01408g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0I02024g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative NADPH dehydrogenase; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02024g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02024g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0I03190g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative ubiquinol-Cytochrome c reductase iron-sulfur protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I03190g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I03190g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0I07843g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative alcohol dehydrogenase isoenzyme III; increased protein abundance in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I07843g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I07843g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0J00429g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Cytochrome c oxidase subunit VI</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J00429g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J00429g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0J03212g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative mitochondrial aldehyde dehydrogenase (NAD+); protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03212g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03212g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0J09812g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have alpha,alpha-trehalose-phosphate synthase (UDP-forming) activity, trehalose-phosphatase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09812g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09812g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0K00847g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K00847g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K00847g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0K06259g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Thiol-specific antioxidant protein; predicted thioredoxin peroxidase involved in oxidative stress response; protein abundance decreased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K06259g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K06259g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0K07480g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative phosphoglucomutase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07480g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07480g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0K08184g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Cytochrome C peroxidase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08184g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08184g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0K10736g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-lactate dehydrogenase (cytochrome) activity and mitochondrial intermembrane space, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10736g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10736g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0K10868g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative catalase A; gene is downregulated in azole-resistant strain; regulated by oxidative stress and glucose starvation; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10868g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10868g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0L01089g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glutamate synthase (NADH) activity and role in L-glutamate biosynthetic process, ammonia assimilation cycle, invasive filamentous growth</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L01089g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L01089g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0L01177g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative soluble fumarate reductase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L01177g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L01177g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0L05236g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Malate dehydrogenase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L05236g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L05236g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0L06666g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative flavohemoglobin, involved in nitric oxide detoxification</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06666g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06666g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0L10406g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have electron transporter, transferring electrons within CoQH2-cytochrome c reductase complex activity and role in mitochondrial electron transport, ubiquinol to cytochrome c</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10406g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10406g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0L12364g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have acetyl-CoA C-acetyltransferase activity, role in ergosterol biosynthetic process and cytoplasm, intracellular localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L12364g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L12364g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0M07656g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative C22 sterol desaturase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M07656g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M07656g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0M11704g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative thiol-specific peroxiredoxin; alkyl hydroperoxide reductase; protein differentially expressed in azole resistant strain; expression upregulated in biofilm vs planktonic cell culture; protein abundance decreased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M11704g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M11704g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
