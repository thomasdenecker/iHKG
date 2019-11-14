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
                  x : -3.64263468378133,
                  y : 4.57276299452844
                  },
                  position : {
                  'x' : -36.4263468378133,
                  'y' : 45.7276299452844
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
                  x : 0.857472273437877,
                  y : -4.53597003417056
                  },
                  position : {
                  'x' : 8.57472273437877,
                  'y' : -45.3597003417056
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
                  content: "<h2>CAGL0A03542g</h2><hr><p><b>Gene name</b> : COX12</p><p><b>Description</b> : Cytochrome c oxidase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03542g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03542g'  target='_blank'> Link to GRYC</a>",
                  x : 7.3914541988489,
                  y : 3.66441256503533
                  },
                  position : {
                  'x' : 73.914541988489,
                  'y' : 36.6441256503533
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
                  x : 10.2548059629269,
                  y : -2.4858626092111
                  },
                  position : {
                  'x' : 102.548059629269,
                  'y' : -24.858626092111
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
                  content: "<h2>CAGL0A03905g</h2><hr><p><b>Gene name</b> : HMX1</p><p><b>Description</b> : Ortholog(s) have heme oxygenase (decyclizing) activity and role in cellular iron ion homeostasis, heme catabolic process, response to carbon monoxide, response to oxidative stress</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03905g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03905g'  target='_blank'> Link to GRYC</a>",
                  x : -3.27103938088961,
                  y : 6.97405004377969
                  },
                  position : {
                  'x' : -32.7103938088961,
                  'y' : 69.7405004377969
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
                  content: "<h2>CAGL0B00990g</h2><hr><p><b>Gene name</b> : HBN1</p><p><b>Description</b> : Ortholog(s) have oxidoreductase activity, acting on NAD(P)H, nitrogenous group as acceptor activity and role in cellular response to oxidative stress, negative regulation of fatty acid metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B00990g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B00990g'  target='_blank'> Link to GRYC</a>",
                  x : -3.6946690314781,
                  y : -1.22378444045217
                  },
                  position : {
                  'x' : -36.946690314781,
                  'y' : -12.2378444045217
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
                  x : 7.95802257418524,
                  y : 4.68946705258528
                  },
                  position : {
                  'x' : 79.5802257418524,
                  'y' : 46.8946705258528
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
                  x : 2.59342071002011,
                  y : 7.66200921101006
                  },
                  position : {
                  'x' : 25.9342071002011,
                  'y' : 76.6200921101006
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
                  x : -0.480086421329712,
                  y : 3.21335388400292
                  },
                  position : {
                  'x' : -4.80086421329712,
                  'y' : 32.1335388400292
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
                  x : -1.81793921796303,
                  y : 8.29279846894562
                  },
                  position : {
                  'x' : -18.1793921796303,
                  'y' : 82.9279846894562
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
                  content: "<h2>CAGL0C03443g</h2><hr><p><b>Gene name</b> : LYS9</p><p><b>Description</b> : Putative saccharopine dehydrogenase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03443g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03443g'  target='_blank'> Link to GRYC</a>",
                  x : 7.34228079110542,
                  y : 4.90199511687016
                  },
                  position : {
                  'x' : 73.4228079110542,
                  'y' : 49.0199511687016
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
                  x : -2.3377951954439,
                  y : 3.09314681472337
                  },
                  position : {
                  'x' : -23.377951954439,
                  'y' : 30.9314681472337
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
                  x : -0.697222100854602,
                  y : 0.137842764841474
                  },
                  position : {
                  'x' : -6.97222100854602,
                  'y' : 1.37842764841474
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
                  x : -0.709687242416124,
                  y : 8.46483667251329
                  },
                  position : {
                  'x' : -7.09687242416124,
                  'y' : 84.6483667251329
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
                  x : 1.88599113803711,
                  y : 8.7290442976195
                  },
                  position : {
                  'x' : 18.8599113803711,
                  'y' : 87.290442976195
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
                  x : 7.02967041728489,
                  y : 4.89102618602066
                  },
                  position : {
                  'x' : 70.2967041728489,
                  'y' : 48.9102618602066
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
                  content: "<h2>CAGL0D00770g</h2><hr><p><b>Gene name</b> : IDP1</p><p><b>Description</b> : Ortholog(s) have isocitrate dehydrogenase (NADP+) activity, role in glutamate biosynthetic process and cytoplasm, extracellular region, mitochondrial nucleoid, mitochondrion, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D00770g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D00770g'  target='_blank'> Link to GRYC</a>",
                  x : 0.617029913545584,
                  y : 0.963804681142162
                  },
                  position : {
                  'x' : 6.17029913545584,
                  'y' : 9.63804681142162
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
                  x : 7.3146239550847,
                  y : 3.13676961350167
                  },
                  position : {
                  'x' : 73.146239550847,
                  'y' : 31.3676961350167
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
                  x : 0.593122069288092,
                  y : -1.15633286610404
                  },
                  position : {
                  'x' : 5.93122069288092,
                  'y' : -11.5633286610404
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
                  x : 1.23501840760034,
                  y : -0.831924039805603
                  },
                  position : {
                  'x' : 12.3501840760034,
                  'y' : -8.31924039805603
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
                  x : 8.87609473518813,
                  y : 4.23030355654423
                  },
                  position : {
                  'x' : 88.7609473518813,
                  'y' : 42.3030355654423
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
                  content: "<h2>CAGL0D05940g</h2><hr><p><b>Gene name</b> : ERG1</p><p><b>Description</b> : Squalene epoxidase with a role in ergosterol synthesis; involved in growth under conditions of low oxygen tension</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D05940g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D05940g'  target='_blank'> Link to GRYC</a>",
                  x : 2.7813081050381,
                  y : 10.1588468698335
                  },
                  position : {
                  'x' : 27.813081050381,
                  'y' : 101.588468698335
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
                  x : 2.45201721449436,
                  y : -1.73549220092192
                  },
                  position : {
                  'x' : 24.5201721449436,
                  'y' : -17.3549220092192
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
                  x : 9.82216099599366,
                  y : 2.8589792647366
                  },
                  position : {
                  'x' : 98.2216099599366,
                  'y' : 28.589792647366
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
                  content: "<h2>CAGL0E04334g</h2><hr><p><b>Gene name</b> : ERG11</p><p><b>Description</b> : Putative cytochrome P-450 lanosterol 14-alpha-demethylase; target enzyme of azole antifungal drugs; increased protein abundance in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04334g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04334g'  target='_blank'> Link to GRYC</a>",
                  x : 5.60345847242453,
                  y : 8.63668943969792
                  },
                  position : {
                  'x' : 56.0345847242453,
                  'y' : 86.3668943969792
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
                  content: "<h2>CAGL0E05170g</h2><hr><p><b>Gene name</b> : GRE2(A)</p><p><b>Description</b> : Putative methylglyoxal reductase (NADPH-dependent)</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05170g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05170g'  target='_blank'> Link to GRYC</a>",
                  x : 0.476555714406184,
                  y : -0.778325590360771
                  },
                  position : {
                  'x' : 4.76555714406184,
                  'y' : -7.78325590360771
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
                  x : -4.92689699667194,
                  y : 6.05383579376607
                  },
                  position : {
                  'x' : -49.2689699667194,
                  'y' : 60.5383579376607
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
                  x : 1.27098058141437,
                  y : -2.05866371144283
                  },
                  position : {
                  'x' : 12.7098058141437,
                  'y' : -20.5866371144283
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
                  x : 8.03736407753184,
                  y : 7.77168878051499
                  },
                  position : {
                  'x' : 80.3736407753183,
                  'y' : 77.7168878051499
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
                  content: "<h2>CAGL0F03399g</h2><hr><p><b>Gene name</b> : SCS7</p><p><b>Description</b> : Ortholog(s) have fatty acid alpha-hydroxylase activity, role in inositol phosphoceramide metabolic process, mannosyl-inositol phosphorylceramide metabolic process and membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F03399g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F03399g'  target='_blank'> Link to GRYC</a>",
                  x : 6.64801335562201,
                  y : 4.62181078223262
                  },
                  position : {
                  'x' : 66.4801335562201,
                  'y' : 46.2181078223262
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
                  x : 6.29181498217358,
                  y : 0.652569039979658
                  },
                  position : {
                  'x' : 62.9181498217358,
                  'y' : 6.52569039979658
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
                  x : 8.59271922606779,
                  y : 3.34031815370759
                  },
                  position : {
                  'x' : 85.9271922606779,
                  'y' : 33.4031815370759
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
                  x : -2.50119814175468,
                  y : 0.316862020723855
                  },
                  position : {
                  'x' : -25.0119814175468,
                  'y' : 3.16862020723855
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
                  x : -1.64669085095067,
                  y : -1.31147333264845
                  },
                  position : {
                  'x' : -16.4669085095067,
                  'y' : -13.1147333264845
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
                  x : 0.805496666275059,
                  y : -1.7972049061962
                  },
                  position : {
                  'x' : 8.05496666275059,
                  'y' : -17.972049061962
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
                  x : 7.85184690013085,
                  y : 3.3913845198948
                  },
                  position : {
                  'x' : 78.5184690013085,
                  'y' : 33.913845198948
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
                  content: "<h2>CAGL0F06413g</h2><hr><p><b>Gene name</b> : FET3</p><p><b>Description</b> : Putative copper ferroxidase involved in iron uptake</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F06413g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F06413g'  target='_blank'> Link to GRYC</a>",
                  x : 8.98701935527325,
                  y : 10.7784252413221
                  },
                  position : {
                  'x' : 89.8701935527325,
                  'y' : 107.784252413221
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
                  x : 3.61563833360297,
                  y : 0.124055133960073
                  },
                  position : {
                  'x' : 36.1563833360297,
                  'y' : 1.24055133960073
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
                  x : -0.788209064412475,
                  y : -2.51229264197906
                  },
                  position : {
                  'x' : -7.88209064412475,
                  'y' : -25.1229264197906
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
                  content: "<h2>CAGL0G01540g</h2><hr><p><b>Gene name</b> : NCE103</p><p><b>Description</b> : Beta carbonic anhydrase with a predicted role in non-classical protein export; upregulated in azole-resistant strain; enzyme activity increased by amines and amino acids; protein abundance decreased in ace2 cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G01540g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G01540g'  target='_blank'> Link to GRYC</a>",
                  x : -1.40307633530554,
                  y : 4.6146517533237
                  },
                  position : {
                  'x' : -14.0307633530554,
                  'y' : 46.146517533237
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
                  content: "<h2>CAGL0G02585g</h2><hr><p><b>Gene name</b> : LYS12</p><p><b>Description</b> : Homo-isocitrate dehydrogenase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G02585g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G02585g'  target='_blank'> Link to GRYC</a>",
                  x : 3.90254233733791,
                  y : 7.45456501483498
                  },
                  position : {
                  'x' : 39.0254233733791,
                  'y' : 74.5456501483498
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
                  content: "<h2>CAGL0G05698g</h2><hr><p><b>Gene name</b> : GDH2</p><p><b>Description</b> : Ortholog(s) have glutamate dehydrogenase (NAD+) activity and role in nitrogen compound metabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G05698g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G05698g'  target='_blank'> Link to GRYC</a>",
                  x : 0.794292545917417,
                  y : -1.38578598222554
                  },
                  position : {
                  'x' : 7.94292545917417,
                  'y' : -13.8578598222554
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
                  x : 7.28880936239419,
                  y : 4.33535020429041
                  },
                  position : {
                  'x' : 72.8880936239419,
                  'y' : 43.3535020429041
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
                  x : 5.25583661159339,
                  y : 0.364615425995631
                  },
                  position : {
                  'x' : 52.5583661159339,
                  'y' : 3.64615425995631
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
                  content: "<h2>CAGL0G09383g</h2><hr><p><b>Gene name</b> : TDH3</p><p><b>Description</b> : Putative glyceraldehyde-3-phosphate dehydrogenase; increased protein abundance in azole resistant strain; expression upregulated in biofilm vs planktonic cell culture; upregulated in hypoxia</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G09383g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G09383g'  target='_blank'> Link to GRYC</a>",
                  x : 1.61944219579015,
                  y : -0.17927927890271
                  },
                  position : {
                  'x' : 16.1944219579015,
                  'y' : -1.7927927890271
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
                  content: "<h2>CAGL0G09977g</h2><hr><p><b>Gene name</b> : GDB1</p><p><b>Description</b> : Ortholog(s) have 4-alpha-glucanotransferase activity, amylo-alpha-1,6-glucosidase activity and role in glycogen catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G09977g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G09977g'  target='_blank'> Link to GRYC</a>",
                  x : -0.538490416782819,
                  y : -1.91604410793553
                  },
                  position : {
                  'x' : -5.38490416782819,
                  'y' : -19.1604410793553
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
                  x : 7.63422872795516,
                  y : 4.6256616581586
                  },
                  position : {
                  'x' : 76.3422872795516,
                  'y' : 46.256616581586
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
                  x : 8.22825949829887,
                  y : 5.11327502194584
                  },
                  position : {
                  'x' : 82.2825949829887,
                  'y' : 51.1327502194584
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
                  x : 8.25723901765585,
                  y : 4.1754810819781
                  },
                  position : {
                  'x' : 82.5723901765585,
                  'y' : 41.754810819781
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
                  content: "<h2>CAGL0H03795g</h2><hr><p><b>Gene name</b> : LEU2</p><p><b>Description</b> : 3-isopropylmalate dehydrogenase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H03795g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H03795g'  target='_blank'> Link to GRYC</a>",
                  x : -5.37523891391881,
                  y : 0.249980971792542
                  },
                  position : {
                  'x' : -53.7523891391881,
                  'y' : 2.49980971792542
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
                  x : -1.64867576044541,
                  y : 0.090962900258913
                  },
                  position : {
                  'x' : -16.4867576044541,
                  'y' : 0.90962900258913
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
                  x : 2.53324373676096,
                  y : -0.697029876140292
                  },
                  position : {
                  'x' : 25.3324373676096,
                  'y' : -6.97029876140292
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
                  x : 2.21308171263641,
                  y : -0.987023489232307
                  },
                  position : {
                  'x' : 22.1308171263641,
                  'y' : -9.87023489232307
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
                  x : 1.02750924987371,
                  y : 9.04803876489506
                  },
                  position : {
                  'x' : 10.2750924987371,
                  'y' : 90.4803876489506
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
                  x : 4.14243794018136,
                  y : -0.338493391084181
                  },
                  position : {
                  'x' : 41.4243794018136,
                  'y' : -3.38493391084181
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
                  x : 9.5160570872477,
                  y : -3.23128150676159
                  },
                  position : {
                  'x' : 95.160570872477,
                  'y' : -32.3128150676159
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
                  x : 0.0626732411630038,
                  y : -2.07650614482894
                  },
                  position : {
                  'x' : 0.626732411630038,
                  'y' : -20.7650614482894
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
                  x : -2.87633281265082,
                  y : 3.09849836077238
                  },
                  position : {
                  'x' : -28.7633281265082,
                  'y' : 30.9849836077238
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
                  x : 7.47470710421383,
                  y : 5.25400138523171
                  },
                  position : {
                  'x' : 74.7470710421383,
                  'y' : 52.5400138523171
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
                  content: "<h2>CAGL0I01100g</h2><hr><p><b>Gene name</b> : GCY1</p><p><b>Description</b> : Ortholog(s) have alditol:NADP+ 1-oxidoreductase activity, aldo-keto reductase (NADP) activity, glycerol dehydrogenase [NAD(P)+] activity, mRNA binding, oxidoreductase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01100g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01100g'  target='_blank'> Link to GRYC</a>",
                  x : -1.52288247635417,
                  y : 1.62835907399674
                  },
                  position : {
                  'x' : -15.2288247635417,
                  'y' : 16.2835907399674
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
                  content: "<h2>CAGL0I01166g</h2><hr><p><b>Gene name</b> : TRR1</p><p><b>Description</b> : Thioredoxin reductase (NADPH)</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01166g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01166g'  target='_blank'> Link to GRYC</a>",
                  x : -3.93654468433767,
                  y : 4.15992932991336
                  },
                  position : {
                  'x' : -39.3654468433767,
                  'y' : 41.5992932991336
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
                  content: "<h2>CAGL0I01408g</h2><hr><p><b>Gene name</b> : CYC1</p><p><b>Description</b> : Ortholog(s) have electron transfer activity and role in mitochondrial ATP synthesis coupled electron transport, mitochondrial electron transport, cytochrome c to oxygen, mitochondrial electron transport, ubiquinol to cytochrome c</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I01408g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I01408g'  target='_blank'> Link to GRYC</a>",
                  x : 7.56116332989382,
                  y : 9.12796093539209
                  },
                  position : {
                  'x' : 75.6116332989382,
                  'y' : 91.2796093539209
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
                  content: "<h2>CAGL0I02024g</h2><hr><p><b>Gene name</b> : OYE2</p><p><b>Description</b> : Putative NADPH dehydrogenase; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02024g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02024g'  target='_blank'> Link to GRYC</a>",
                  x : -1.70679065880468,
                  y : 1.08219937615988
                  },
                  position : {
                  'x' : -17.0679065880468,
                  'y' : 10.8219937615988
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
                  x : -1.41350803101795,
                  y : -0.751008158029562
                  },
                  position : {
                  'x' : -14.1350803101795,
                  'y' : -7.51008158029562
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
                  content: "<h2>CAGL0I03190g</h2><hr><p><b>Gene name</b> : RIP1</p><p><b>Description</b> : Putative ubiquinol-Cytochrome c reductase iron-sulfur protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I03190g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I03190g'  target='_blank'> Link to GRYC</a>",
                  x : 8.31941883993965,
                  y : 3.80204305417401
                  },
                  position : {
                  'x' : 83.1941883993965,
                  'y' : 38.0204305417401
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
                  x : -1.06318489996806,
                  y : -3.99596817471176
                  },
                  position : {
                  'x' : -10.6318489996806,
                  'y' : -39.9596817471176
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
                  x : 7.66603535466837,
                  y : 5.00894195045468
                  },
                  position : {
                  'x' : 76.6603535466837,
                  'y' : 50.0894195045468
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
                  content: "<h2>CAGL0I07843g</h2><hr><p><b>Gene name</b> : ADH1</p><p><b>Description</b> : Putative alcohol dehydrogenase isoenzyme III; increased protein abundance in azole resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I07843g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I07843g'  target='_blank'> Link to GRYC</a>",
                  x : 2.50044082586529,
                  y : 0.812724858319618
                  },
                  position : {
                  'x' : 25.0044082586529,
                  'y' : 8.12724858319618
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
                  x : 0.864578153611516,
                  y : 7.24108706944083
                  },
                  position : {
                  'x' : 8.64578153611516,
                  'y' : 72.4108706944083
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
                  content: "<h2>CAGL0J00429g</h2><hr><p><b>Gene name</b> : COX6</p><p><b>Description</b> : Cytochrome c oxidase subunit VI</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J00429g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J00429g'  target='_blank'> Link to GRYC</a>",
                  x : 7.00700564186443,
                  y : 4.20746655041171
                  },
                  position : {
                  'x' : 70.0700564186443,
                  'y' : 42.0746655041171
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
                  x : 0.769537571116863,
                  y : 12.6815884563762
                  },
                  position : {
                  'x' : 7.69537571116863,
                  'y' : 126.815884563762
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
                  x : 7.14012279466443,
                  y : 1.78223774810892
                  },
                  position : {
                  'x' : 71.4012279466443,
                  'y' : 17.8223774810892
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
                  x : 0.214898281223991,
                  y : 8.34790669882572
                  },
                  position : {
                  'x' : 2.14898281223991,
                  'y' : 83.4790669882572
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
                  x : -0.920705754822364,
                  y : -0.13422467810641
                  },
                  position : {
                  'x' : -9.20705754822364,
                  'y' : -1.3422467810641
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
                  x : -1.65763355422848,
                  y : 11.4271800919807
                  },
                  position : {
                  'x' : -16.5763355422848,
                  'y' : 114.271800919807
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
                  content: "<h2>CAGL0J03212g</h2><hr><p><b>Gene name</b> : ALD5</p><p><b>Description</b> : Putative mitochondrial aldehyde dehydrogenase (NAD+); protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03212g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03212g'  target='_blank'> Link to GRYC</a>",
                  x : -2.83787923636771,
                  y : 4.69913499766511
                  },
                  position : {
                  'x' : -28.3787923636771,
                  'y' : 46.9913499766511
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
                  x : 7.18202135185709,
                  y : 6.47904645112138
                  },
                  position : {
                  'x' : 71.8202135185709,
                  'y' : 64.7904645112138
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
                  x : 2.8813500874516,
                  y : -0.422630311780075
                  },
                  position : {
                  'x' : 28.813500874516,
                  'y' : -4.22630311780075
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
                  content: "<h2>CAGL0J09812g</h2><hr><p><b>Gene name</b> : TPS1</p><p><b>Description</b> : Ortholog(s) have alpha,alpha-trehalose-phosphate synthase (UDP-forming) activity, trehalose-phosphatase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09812g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09812g'  target='_blank'> Link to GRYC</a>",
                  x : -1.96958507418183,
                  y : 1.00040519053764
                  },
                  position : {
                  'x' : -19.6958507418183,
                  'y' : 10.0040519053764
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
                  x : 7.99368519375675,
                  y : 3.94615533165356
                  },
                  position : {
                  'x' : 79.9368519375675,
                  'y' : 39.4615533165356
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
                  content: "<h2>CAGL0K00847g</h2><hr><p><b>Gene name</b> : CIR1</p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K00847g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K00847g'  target='_blank'> Link to GRYC</a>",
                  x : 2.58226295690402,
                  y : 0.134558391395583
                  },
                  position : {
                  'x' : 25.8226295690402,
                  'y' : 1.34558391395583
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
                  x : -0.257770985040349,
                  y : -1.45300471137987
                  },
                  position : {
                  'x' : -2.57770985040349,
                  'y' : -14.5300471137987
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
                  x : 7.05108929627307,
                  y : 2.38566143741123
                  },
                  position : {
                  'x' : 70.5108929627307,
                  'y' : 23.8566143741123
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
                  x : -5.24435512305184,
                  y : 2.16537839760772
                  },
                  position : {
                  'x' : -52.4435512305184,
                  'y' : 21.6537839760772
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
                  x : 5.6683797298613,
                  y : 12.3585480641133
                  },
                  position : {
                  'x' : 56.683797298613,
                  'y' : 123.585480641133
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
                  x : 0.0874200585100141,
                  y : -0.82454380963402
                  },
                  position : {
                  'x' : 0.874200585100141,
                  'y' : -8.2454380963402
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
                  x : -1.7758393791202,
                  y : -0.326223445990871
                  },
                  position : {
                  'x' : -17.758393791202,
                  'y' : -3.26223445990871
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
                  content: "<h2>CAGL0K06259g</h2><hr><p><b>Gene name</b> : TSA1</p><p><b>Description</b> : Thiol-specific antioxidant protein; predicted thioredoxin peroxidase involved in oxidative stress response; protein abundance decreased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K06259g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K06259g'  target='_blank'> Link to GRYC</a>",
                  x : -4.4986400458012,
                  y : 9.32467099601036
                  },
                  position : {
                  'x' : -44.986400458012,
                  'y' : 93.2467099601036
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
                  content: "<h2>CAGL0K07480g</h2><hr><p><b>Gene name</b> : PGM1</p><p><b>Description</b> : Putative phosphoglucomutase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07480g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07480g'  target='_blank'> Link to GRYC</a>",
                  x : -2.90685291179975,
                  y : 0.894342677576127
                  },
                  position : {
                  'x' : -29.0685291179975,
                  'y' : 8.94342677576127
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
                  content: "<h2>CAGL0K08184g</h2><hr><p><b>Gene name</b> : CCP1</p><p><b>Description</b> : Cytochrome C peroxidase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08184g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08184g'  target='_blank'> Link to GRYC</a>",
                  x : 8.8885337507631,
                  y : 4.67753210671932
                  },
                  position : {
                  'x' : 88.885337507631,
                  'y' : 46.7753210671932
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
                  x : -3.11822861643207,
                  y : 0.434721721265252
                  },
                  position : {
                  'x' : -31.1822861643207,
                  'y' : 4.34721721265252
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
                  content: "<h2>CAGL0K10736g</h2><hr><p><b>Gene name</b> : CYB2</p><p><b>Description</b> : Ortholog(s) have L-lactate dehydrogenase (cytochrome) activity and mitochondrial intermembrane space, mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10736g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10736g'  target='_blank'> Link to GRYC</a>",
                  x : -2.26872630175752,
                  y : 1.15084271204232
                  },
                  position : {
                  'x' : -22.6872630175752,
                  'y' : 11.5084271204232
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
                  x : 6.01631933292318,
                  y : 6.19553620297049
                  },
                  position : {
                  'x' : 60.1631933292318,
                  'y' : 61.9553620297049
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
                  content: "<h2>CAGL0K10868g</h2><hr><p><b>Gene name</b> : CTA1</p><p><b>Description</b> : Putative catalase A; gene is downregulated in azole-resistant strain; regulated by oxidative stress and glucose starvation; protein abundance increased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K10868g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K10868g'  target='_blank'> Link to GRYC</a>",
                  x : 4.6837630727757,
                  y : 10.5528786083617
                  },
                  position : {
                  'x' : 46.837630727757,
                  'y' : 105.528786083617
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
                  x : -0.487999598880063,
                  y : -0.189644928401607
                  },
                  position : {
                  'x' : -4.87999598880062,
                  'y' : -1.89644928401607
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
                  x : 6.85876473933059,
                  y : 9.12864035226779
                  },
                  position : {
                  'x' : 68.5876473933059,
                  'y' : 91.2864035226779
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
                  x : 0.342152330743139,
                  y : -1.65794461582999
                  },
                  position : {
                  'x' : 3.42152330743139,
                  'y' : -16.5794461582999
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
                  content: "<h2>CAGL0L01089g</h2><hr><p><b>Gene name</b> : GLT1</p><p><b>Description</b> : Ortholog(s) have glutamate synthase (NADH) activity and role in L-glutamate biosynthetic process, ammonia assimilation cycle, invasive filamentous growth</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L01089g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L01089g'  target='_blank'> Link to GRYC</a>",
                  x : 7.79680991879227,
                  y : 3.68449266136407
                  },
                  position : {
                  'x' : 77.9680991879227,
                  'y' : 36.8449266136407
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
                  content: "<h2>CAGL0L01177g</h2><hr><p><b>Gene name</b> : FRDS1</p><p><b>Description</b> : Putative soluble fumarate reductase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L01177g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L01177g'  target='_blank'> Link to GRYC</a>",
                  x : -2.82555129889342,
                  y : 2.52317927055091
                  },
                  position : {
                  'x' : -28.2555129889342,
                  'y' : 25.2317927055091
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
                  x : 8.60231702332383,
                  y : -4.00885589355287
                  },
                  position : {
                  'x' : 86.0231702332383,
                  'y' : -40.0885589355287
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
                  x : 2.21663872986063,
                  y : 12.0296510787932
                  },
                  position : {
                  'x' : 22.1663872986063,
                  'y' : 120.296510787932
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
                  content: "<h2>CAGL0L05236g</h2><hr><p><b>Gene name</b> : MDH1</p><p><b>Description</b> : Malate dehydrogenase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L05236g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L05236g'  target='_blank'> Link to GRYC</a>",
                  x : 6.98960269499041,
                  y : 0.998846638244673
                  },
                  position : {
                  'x' : 69.8960269499041,
                  'y' : 9.98846638244673
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
                  x : 3.28632265486823,
                  y : 13.0237183172119
                  },
                  position : {
                  'x' : 32.8632265486823,
                  'y' : 130.237183172119
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
                  x : 8.36552134176625,
                  y : 4.49644897502981
                  },
                  position : {
                  'x' : 83.6552134176625,
                  'y' : 44.9644897502981
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
                  content: "<h2>CAGL0L06666g</h2><hr><p><b>Gene name</b> : YHB1</p><p><b>Description</b> : Putative flavohemoglobin, involved in nitric oxide detoxification</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06666g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06666g'  target='_blank'> Link to GRYC</a>",
                  x : 3.4653502838585,
                  y : 11.5938901844541
                  },
                  position : {
                  'x' : 34.653502838585,
                  'y' : 115.938901844541
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
                  x : 0.766048229065544,
                  y : -0.833594222521077
                  },
                  position : {
                  'x' : 7.66048229065544,
                  'y' : -8.33594222521077
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
                  content: "<h2>CAGL0L10406g</h2><hr><p><b>Gene name</b> : CYT1</p><p><b>Description</b> : Ortholog(s) have electron transporter, transferring electrons within CoQH2-cytochrome c reductase complex activity and role in mitochondrial electron transport, ubiquinol to cytochrome c</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10406g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10406g'  target='_blank'> Link to GRYC</a>",
                  x : 7.12072168339749,
                  y : 3.27838985741361
                  },
                  position : {
                  'x' : 71.2072168339749,
                  'y' : 32.7838985741361
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
                  x : 5.79538846523824,
                  y : 6.92620142563874
                  },
                  position : {
                  'x' : 57.9538846523824,
                  'y' : 69.2620142563874
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
                  content: "<h2>CAGL0L12364g</h2><hr><p><b>Gene name</b> : ERG10</p><p><b>Description</b> : Ortholog(s) have acetyl-CoA C-acetyltransferase activity, role in ergosterol biosynthetic process and cytoplasm, intracellular localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L12364g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L12364g'  target='_blank'> Link to GRYC</a>",
                  x : 3.66666637305183,
                  y : 8.65214332921017
                  },
                  position : {
                  'x' : 36.6666637305183,
                  'y' : 86.5214332921017
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
                  x : -3.26861840810815,
                  y : 1.87143788792789
                  },
                  position : {
                  'x' : -32.6861840810815,
                  'y' : 18.7143788792789
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
                  x : 7.76935183877503,
                  y : -4.62758132680639
                  },
                  position : {
                  'x' : 77.6935183877503,
                  'y' : -46.2758132680639
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
                  x : -0.835075727939243,
                  y : -0.769300561849036
                  },
                  position : {
                  'x' : -8.35075727939243,
                  'y' : -7.69300561849036
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
                  x : 5.84066336537074,
                  y : 1.43751442740542
                  },
                  position : {
                  'x' : 58.4066336537074,
                  'y' : 14.3751442740542
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
                  x : 7.71460273097197,
                  y : 4.12142202427843
                  },
                  position : {
                  'x' : 77.1460273097197,
                  'y' : 41.2142202427843
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
                  content: "<h2>CAGL0M07656g</h2><hr><p><b>Gene name</b> : ERG5</p><p><b>Description</b> : Putative C22 sterol desaturase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M07656g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M07656g'  target='_blank'> Link to GRYC</a>",
                  x : 6.07198809408168,
                  y : 7.98523954610995
                  },
                  position : {
                  'x' : 60.7198809408168,
                  'y' : 79.8523954610995
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
                  content: "<h2>CAGL0M11704g</h2><hr><p><b>Gene name</b> : AHP1</p><p><b>Description</b> : Putative thiol-specific peroxiredoxin; alkyl hydroperoxide reductase; protein differentially expressed in azole resistant strain; expression upregulated in biofilm vs planktonic cell culture; protein abundance decreased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M11704g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M11704g'  target='_blank'> Link to GRYC</a>",
                  x : -4.07534940010591,
                  y : 1.03304743786636
                  },
                  position : {
                  'x' : -40.7534940010591,
                  'y' : 10.3304743786635
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
                  x : -3.1281834046239,
                  y : 10.5377323663982
                  },
                  position : {
                  'x' : -31.281834046239,
                  'y' : 105.377323663982
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
                  x : 6.20549026208504,
                  y : -0.140438366871179
                  },
                  position : {
                  'x' : 62.0549026208504,
                  'y' : -1.40438366871179
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
