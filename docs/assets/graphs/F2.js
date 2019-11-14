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
                  id: 'CAGL0A01716g',
                  name: 'CAGL0A01716g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A01716g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have nicotinamidase activity and role in chromatin silencing at rDNA, chromatin silencing at telomere, negative regulation of DNA amplification, replicative cell aging</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01716g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01716g'  target='_blank'> Link to GRYC</a>",
                  x : 0.67487344895542,
                  y : -0.81363324322401
                  },
                  position : {
                  'x' : 6.7487344895542,
                  'y' : -8.1363324322401
                  },
  },
{
                  data: {
                  id: 'CAGL0A02145g',
                  name: 'CAGL0A02145g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A02145g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have actin filament binding activity, role in actin cortical patch localization, actin cytoskeleton organization, actin filament bundle assembly, actin filament organization, endocytosis and actin cortical patch localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02145g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02145g'  target='_blank'> Link to GRYC</a>",
                  x : -4.15435922123053,
                  y : -0.818094428581879
                  },
                  position : {
                  'x' : -41.5435922123053,
                  'y' : -8.18094428581879
                  },
  },
{
                  data: {
                  id: 'CAGL0A04499g',
                  name: 'CAGL0A04499g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0A04499g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have electron transfer activity, iron ion binding, zinc ion binding activity, role in peptidyl-diphthamide biosynthetic process from peptidyl-histidine, tRNA wobble uridine modification and cytoplasm, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A04499g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A04499g'  target='_blank'> Link to GRYC</a>",
                  x : 2.80857260377492,
                  y : -0.207356517827514
                  },
                  position : {
                  'x' : 28.0857260377492,
                  'y' : -2.07356517827514
                  },
  },
{
                  data: {
                  id: 'CAGL0B02475g',
                  name: 'CAGL0B02475g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0B02475g</h2><hr><p><b>Gene name</b> : PHO84</p><p><b>Description</b> : Ortholog(s) have inorganic phosphate transmembrane transporter activity, manganese ion transmembrane transporter activity, selenite:proton symporter activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02475g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02475g'  target='_blank'> Link to GRYC</a>",
                  x : -5.61125309891918,
                  y : 8.857227011568
                  },
                  position : {
                  'x' : -56.1125309891918,
                  'y' : 88.57227011568
                  },
  },
{
                  data: {
                  id: 'CAGL0B03421g',
                  name: 'CAGL0B03421g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0B03421g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription activator activity, RNA polymerase II-specific, RNA polymerase II proximal promoter sequence-specific DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B03421g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B03421g'  target='_blank'> Link to GRYC</a>",
                  x : 1.93827495246367,
                  y : -1.66735975940862
                  },
                  position : {
                  'x' : 19.3827495246367,
                  'y' : -16.6735975940862
                  },
  },
{
                  data: {
                  id: 'CAGL0B03817g',
                  name: 'CAGL0B03817g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B03817g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytoplasm, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B03817g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B03817g'  target='_blank'> Link to GRYC</a>",
                  x : -1.70743708003618,
                  y : -2.94883451166389
                  },
                  position : {
                  'x' : -17.0743708003618,
                  'y' : -29.4883451166389
                  },
  },
{
                  data: {
                  id: 'CAGL0B04213g',
                  name: 'CAGL0B04213g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B04213g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in positive regulation of glycerol transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B04213g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B04213g'  target='_blank'> Link to GRYC</a>",
                  x : -8.27690703382914,
                  y : 1.60447421380726
                  },
                  position : {
                  'x' : -82.7690703382914,
                  'y' : 16.0447421380726
                  },
  },
{
                  data: {
                  id: 'CAGL0B04675g',
                  name: 'CAGL0B04675g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#66ff66',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0B04675g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA binding, endoribonuclease activity, ribosome binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B04675g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B04675g'  target='_blank'> Link to GRYC</a>",
                  x : 0.0519477212366098,
                  y : 10.8028724367675
                  },
                  position : {
                  'x' : 0.519477212366098,
                  'y' : 108.028724367675
                  },
  },
{
                  data: {
                  id: 'CAGL0C00495g',
                  name: 'CAGL0C00495g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C00495g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cyclin-dependent protein serine/threonine kinase activator activity, histone binding, protein kinase activator activity, protein-containing complex binding, ubiquitin binding, zinc ion binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C00495g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C00495g'  target='_blank'> Link to GRYC</a>",
                  x : 5.32738573920956,
                  y : 2.33879485287863
                  },
                  position : {
                  'x' : 53.2738573920956,
                  'y' : 23.3879485287863
                  },
  },
{
                  data: {
                  id: 'CAGL0C00539g',
                  name: 'CAGL0C00539g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C00539g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in positive regulation of (R)-carnitine transmembrane transport, positive regulation of polyamine transmembrane transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C00539g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C00539g'  target='_blank'> Link to GRYC</a>",
                  x : 5.42347206863644,
                  y : 0.728031024398256
                  },
                  position : {
                  'x' : 54.2347206863644,
                  'y' : 7.28031024398256
                  },
  },
{
                  data: {
                  id: 'CAGL0C00759g',
                  name: 'CAGL0C00759g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C00759g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have transcription coactivator activity and role in chromatin silencing at telomere, positive regulation of ribosomal protein gene transcription by RNA polymerase II</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C00759g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C00759g'  target='_blank'> Link to GRYC</a>",
                  x : 3.12427541922076,
                  y : 2.95654400658414
                  },
                  position : {
                  'x' : 31.2427541922076,
                  'y' : 29.5654400658414
                  },
  },
{
                  data: {
                  id: 'CAGL0C01287g',
                  name: 'CAGL0C01287g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C01287g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in DNA transport, cell redox homeostasis, positive regulation of protein serine/threonine kinase activity and mitochondrial outer membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C01287g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C01287g'  target='_blank'> Link to GRYC</a>",
                  x : 4.24682935685056,
                  y : 4.97667021408282
                  },
                  position : {
                  'x' : 42.4682935685056,
                  'y' : 49.7667021408282
                  },
  },
{
                  data: {
                  id: 'CAGL0C03113g',
                  name: 'CAGL0C03113g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C03113g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA 7-methylguanosine cap binding, exoribonuclease activator activity, hydrolase activity, acting on acid anhydrides, in phosphorus-containing anhydrides, m7G(5')pppN diphosphatase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03113g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03113g'  target='_blank'> Link to GRYC</a>",
                  x : -2.2675187562134,
                  y : -1.54012521840913
                  },
                  position : {
                  'x' : -22.675187562134,
                  'y' : -15.4012521840913
                  },
  },
{
                  data: {
                  id: 'CAGL0D04686g',
                  name: 'CAGL0D04686g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D04686g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have metalloendopeptidase activity and role in axial cellular bud site selection, cytogamy, peptide mating pheromone maturation involved in positive regulation of conjugation with cellular fusion</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D04686g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D04686g'  target='_blank'> Link to GRYC</a>",
                  x : -1.93043947677612,
                  y : -1.38546706163649
                  },
                  position : {
                  'x' : -19.3043947677612,
                  'y' : -13.8546706163649
                  },
  },
{
                  data: {
                  id: 'CAGL0D06600g',
                  name: 'CAGL0D06600g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D06600g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have protein serine/threonine kinase activity, protein tyrosine kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D06600g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D06600g'  target='_blank'> Link to GRYC</a>",
                  x : -2.02997779860603,
                  y : -0.613273517608834
                  },
                  position : {
                  'x' : -20.2997779860603,
                  'y' : -6.13273517608834
                  },
  },
{
                  data: {
                  id: 'CAGL0E00737g',
                  name: 'CAGL0E00737g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E00737g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA binding, bending, double-stranded DNA binding, four-way junction DNA binding, sequence-specific DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E00737g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E00737g'  target='_blank'> Link to GRYC</a>",
                  x : -6.61415492641931,
                  y : 2.33624455943219
                  },
                  position : {
                  'x' : -66.1415492641931,
                  'y' : 23.3624455943219
                  },
  },
{
                  data: {
                  id: 'CAGL0E01243g',
                  name: 'CAGL0E01243g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E01243g</h2><hr><p><b>Gene name</b> : CTH2</p><p><b>Description</b> : Protein involved in cellular iron homeostasis; induced by Aft1p to reduce expression of iron-associated genes under iron starvation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01243g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01243g'  target='_blank'> Link to GRYC</a>",
                  x : -1.28667036989774,
                  y : -1.96686099862993
                  },
                  position : {
                  'x' : -12.8667036989774,
                  'y' : -19.6686099862993
                  },
  },
{
                  data: {
                  id: 'CAGL0E01991g',
                  name: 'CAGL0E01991g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E01991g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity, role in rRNA export from nucleus, ribosomal small subunit biogenesis and cytosolic small ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01991g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01991g'  target='_blank'> Link to GRYC</a>",
                  x : 5.15885914986083,
                  y : 3.48814667255388
                  },
                  position : {
                  'x' : 51.5885914986083,
                  'y' : 34.8814667255388
                  },
  },
{
                  data: {
                  id: 'CAGL0E03289g',
                  name: 'CAGL0E03289g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E03289g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA binding activity and role in ribosomal large subunit biogenesis, stress granule assembly, translational initiation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E03289g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E03289g'  target='_blank'> Link to GRYC</a>",
                  x : 4.59584505586472,
                  y : 5.32828634174994
                  },
                  position : {
                  'x' : 45.9584505586472,
                  'y' : 53.2828634174994
                  },
  },
{
                  data: {
                  id: 'CAGL0E04884g',
                  name: 'CAGL0E04884g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E04884g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription factor activity, RNA polymerase II-specific and RNA polymerase II activating transcription factor binding, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04884g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04884g'  target='_blank'> Link to GRYC</a>",
                  x : -6.87316129328889,
                  y : 0.245504299954166
                  },
                  position : {
                  'x' : -68.7316129328889,
                  'y' : 2.45504299954166
                  },
  },
{
                  data: {
                  id: 'CAGL0E05456g',
                  name: 'CAGL0E05456g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E05456g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YOR338W, C. albicans SC5314 : C2_09880C_A, C. dubliniensis CD36 : Cd36_23960, C. parapsilosis CDC317 : CPAR2_407140 and C. auris B8441 : B9J08_001012</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05456g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05456g'  target='_blank'> Link to GRYC</a>",
                  x : -4.12826272471824,
                  y : -1.31164920498209
                  },
                  position : {
                  'x' : -41.2826272471824,
                  'y' : -13.1164920498209
                  },
  },
{
                  data: {
                  id: 'CAGL0E05830g',
                  name: 'CAGL0E05830g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E05830g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have mRNA binding, ribosome binding activity and role in mitochondrial respiratory chain complex III assembly, positive regulation of mitochondrial translation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05830g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05830g'  target='_blank'> Link to GRYC</a>",
                  x : -6.1316510714191,
                  y : 4.22249639336813
                  },
                  position : {
                  'x' : -61.316510714191,
                  'y' : 42.2249639336814
                  },
  },
{
                  data: {
                  id: 'CAGL0E06116g',
                  name: 'CAGL0E06116g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0E06116g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in positive regulation of transcription by RNA polymerase II and cytosol, nuclear chromatin, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E06116g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E06116g'  target='_blank'> Link to GRYC</a>",
                  x : 3.32214717257821,
                  y : -1.63802183514958
                  },
                  position : {
                  'x' : 33.2214717257821,
                  'y' : -16.3802183514958
                  },
  },
{
                  data: {
                  id: 'CAGL0F00605g',
                  name: 'CAGL0F00605g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F00605g</h2><hr><p><b>Gene name</b> : GLK1</p><p><b>Description</b> : Aldohexose specific glucokinase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00605g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00605g'  target='_blank'> Link to GRYC</a>",
                  x : -3.03230671289242,
                  y : 2.18582719162822
                  },
                  position : {
                  'x' : -30.3230671289242,
                  'y' : 21.8582719162822
                  },
  },
{
                  data: {
                  id: 'CAGL0F01045g',
                  name: 'CAGL0F01045g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F01045g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in rRNA export from nucleus</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01045g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01045g'  target='_blank'> Link to GRYC</a>",
                  x : 4.98830825678462,
                  y : 4.71167535982343
                  },
                  position : {
                  'x' : 49.8830825678462,
                  'y' : 47.1167535982343
                  },
  },
{
                  data: {
                  id: 'CAGL0F01265g',
                  name: 'CAGL0F01265g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F01265g</h2><hr><p><b>Gene name</b> : YAP7</p><p><b>Description</b> : bZIP domain-containing protein involved in regulation of nitric oxide detoxification</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01265g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01265g'  target='_blank'> Link to GRYC</a>",
                  x : 3.95833473684743,
                  y : 0.511981731947213
                  },
                  position : {
                  'x' : 39.5833473684743,
                  'y' : 5.11981731947213
                  },
  },
{
                  data: {
                  id: 'CAGL0F02101g',
                  name: 'CAGL0F02101g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F02101g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have peptidase activator activity, proteasome binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F02101g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F02101g'  target='_blank'> Link to GRYC</a>",
                  x : -1.20281287976588,
                  y : -1.59296972160156
                  },
                  position : {
                  'x' : -12.0281287976588,
                  'y' : -15.9296972160156
                  },
  },
{
                  data: {
                  id: 'CAGL0F03553g',
                  name: 'CAGL0F03553g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F03553g</h2><hr><p><b>Gene name</b> : DAP1</p><p><b>Description</b> : Putative heme-binding protein involved in regulation of cytochrome P450, Erg11p; required for growth under iron starvation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F03553g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F03553g'  target='_blank'> Link to GRYC</a>",
                  x : 3.63933547722598,
                  y : 1.71072964571472
                  },
                  position : {
                  'x' : 36.3933547722598,
                  'y' : 17.1072964571472
                  },
  },
{
                  data: {
                  id: 'CAGL0F06677g',
                  name: 'CAGL0F06677g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F06677g</h2><hr><p><b>Gene name</b> : GPA1</p><p><b>Description</b> : Ortholog(s) have G-protein beta-subunit binding, GTPase activity, guanyl nucleotide binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F06677g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F06677g'  target='_blank'> Link to GRYC</a>",
                  x : 7.74212558167697,
                  y : -2.88580894110421
                  },
                  position : {
                  'x' : 77.4212558167697,
                  'y' : -28.8580894110421
                  },
  },
{
                  data: {
                  id: 'CAGL0F07117g',
                  name: 'CAGL0F07117g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F07117g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative subunit of the heterotrimeric G protein; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F07117g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F07117g'  target='_blank'> Link to GRYC</a>",
                  x : -4.69813059560105,
                  y : -1.68296917803609
                  },
                  position : {
                  'x' : -46.9813059560105,
                  'y' : -16.8296917803609
                  },
  },
{
                  data: {
                  id: 'CAGL0F07865g',
                  name: 'CAGL0F07865g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F07865g</h2><hr><p><b>Gene name</b> : UPC2B</p><p><b>Description</b> : Putative Zn(2)-Cys(6) binuclear cluster transcriptional regulator of ergosterol biosynthesis</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F07865g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F07865g'  target='_blank'> Link to GRYC</a>",
                  x : -0.347263209358752,
                  y : -4.65347783376661
                  },
                  position : {
                  'x' : -3.47263209358752,
                  'y' : -46.5347783376661
                  },
  },
{
                  data: {
                  id: 'CAGL0F08195g',
                  name: 'CAGL0F08195g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffffff',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F08195g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription factor activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F08195g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F08195g'  target='_blank'> Link to GRYC</a>",
                  x : -4.08862622513105,
                  y : 8.77995078301269
                  },
                  position : {
                  'x' : -40.8862622513105,
                  'y' : 87.7995078301269
                  },
  },
{
                  data: {
                  id: 'CAGL0G02255g',
                  name: 'CAGL0G02255g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G02255g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have GTPase activity, ribosome binding activity and role in nonfunctional rRNA decay, nuclear-transcribed mRNA catabolic process, no-go decay, positive regulation of translation, ribosome disassembly</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G02255g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G02255g'  target='_blank'> Link to GRYC</a>",
                  x : 0.195618150894083,
                  y : -2.77376479807038
                  },
                  position : {
                  'x' : 1.95618150894083,
                  'y' : -27.7376479807038
                  },
  },
{
                  data: {
                  id: 'CAGL0G04499g',
                  name: 'CAGL0G04499g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G04499g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : SET4 and Saccharomyces cerevisiae S288C : YJL105W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G04499g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G04499g'  target='_blank'> Link to GRYC</a>",
                  x : 3.07709134489361,
                  y : 1.67693642001676
                  },
                  position : {
                  'x' : 30.770913448936,
                  'y' : 16.7693642001676
                  },
  },
{
                  data: {
                  id: 'CAGL0G04763g',
                  name: 'CAGL0G04763g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G04763g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in termination of G protein-coupled receptor signaling pathway</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G04763g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G04763g'  target='_blank'> Link to GRYC</a>",
                  x : -2.58495762606594,
                  y : -2.13424756848133
                  },
                  position : {
                  'x' : -25.8495762606594,
                  'y' : -21.3424756848133
                  },
  },
{
                  data: {
                  id: 'CAGL0G05764g',
                  name: 'CAGL0G05764g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G05764g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted GTP binding, GTPase activity and role in intracellular protein transport, nucleocytoplasmic transport, protein transport, signal transduction, small GTPase mediated signal transduction</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G05764g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G05764g'  target='_blank'> Link to GRYC</a>",
                  x : -5.46116439632455,
                  y : 0.844186991768312
                  },
                  position : {
                  'x' : -54.6116439632455,
                  'y' : 8.44186991768312
                  },
  },
{
                  data: {
                  id: 'CAGL0G08041g',
                  name: 'CAGL0G08041g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G08041g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have iron ion binding activity and role in positive regulation of translation, ribosomal large subunit biogenesis, ribosomal subunit export from nucleus, ribosome disassembly, translational initiation, translational termination</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G08041g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G08041g'  target='_blank'> Link to GRYC</a>",
                  x : 3.92841661892517,
                  y : 7.55308683135689
                  },
                  position : {
                  'x' : 39.2841661892517,
                  'y' : 75.5308683135689
                  },
  },
{
                  data: {
                  id: 'CAGL0H02959g',
                  name: 'CAGL0H02959g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H02959g</h2><hr><p><b>Gene name</b> : TOS8</p><p><b>Description</b> : Ortholog(s) have chromatin binding activity, role in filamentous growth and nuclear chromatin localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02959g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02959g'  target='_blank'> Link to GRYC</a>",
                  x : 4.36047909334519,
                  y : -0.949605390562346
                  },
                  position : {
                  'x' : 43.6047909334519,
                  'y' : -9.49605390562346
                  },
  },
{
                  data: {
                  id: 'CAGL0H03179g',
                  name: 'CAGL0H03179g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H03179g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have protein-containing complex binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H03179g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H03179g'  target='_blank'> Link to GRYC</a>",
                  x : -4.87682417364681,
                  y : 2.94848574959774
                  },
                  position : {
                  'x' : -48.7682417364681,
                  'y' : 29.4848574959774
                  },
  },
{
                  data: {
                  id: 'CAGL0H03487g',
                  name: 'CAGL0H03487g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0H03487g</h2><hr><p><b>Gene name</b> : AFT1</p><p><b>Description</b> : Putative RNA polymerase II transcription factor, involved in regulation of iron acquisition genes; required for growth under iron depletion</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H03487g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H03487g'  target='_blank'> Link to GRYC</a>",
                  x : 4.42285060051437,
                  y : -2.73046345674089
                  },
                  position : {
                  'x' : 44.2285060051437,
                  'y' : -27.3046345674089
                  },
  },
{
                  data: {
                  id: 'CAGL0H03751g',
                  name: 'CAGL0H03751g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H03751g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription activator activity, RNA polymerase II-specific activity, role in positive regulation of transcription by RNA polymerase II and nuclear chromatin localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H03751g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H03751g'  target='_blank'> Link to GRYC</a>",
                  x : 4.98499541821595,
                  y : 2.64073191990574
                  },
                  position : {
                  'x' : 49.8499541821595,
                  'y' : 26.4073191990574
                  },
  },
{
                  data: {
                  id: 'CAGL0H07579g',
                  name: 'CAGL0H07579g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H07579g</h2><hr><p><b>Gene name</b> : HXK2</p><p><b>Description</b> : Putative hexokinase B</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H07579g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H07579g'  target='_blank'> Link to GRYC</a>",
                  x : 4.58618247262055,
                  y : 6.46171718228537
                  },
                  position : {
                  'x' : 45.8618247262055,
                  'y' : 64.6171718228537
                  },
  },
{
                  data: {
                  id: 'CAGL0H08541g',
                  name: 'CAGL0H08541g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H08541g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA binding, bending activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H08541g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H08541g'  target='_blank'> Link to GRYC</a>",
                  x : -3.01306467052636,
                  y : -0.541174688324297
                  },
                  position : {
                  'x' : -30.1306467052636,
                  'y' : -5.41174688324297
                  },
  },
{
                  data: {
                  id: 'CAGL0I00814g',
                  name: 'CAGL0I00814g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I00814g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted structural constituent of ribosome activity, role in translational elongation and ribosome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I00814g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I00814g'  target='_blank'> Link to GRYC</a>",
                  x : 4.52931854289002,
                  y : 3.75360070711771
                  },
                  position : {
                  'x' : 45.2931854289002,
                  'y' : 37.5360070711771
                  },
  },
{
                  data: {
                  id: 'CAGL0I02486g',
                  name: 'CAGL0I02486g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I02486g</h2><hr><p><b>Gene name</b> : ENO1</p><p><b>Description</b> : Putative enolase I; protein abundance increased in azole resistant strain and in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02486g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02486g'  target='_blank'> Link to GRYC</a>",
                  x : -4.92704527149136,
                  y : 3.66308569382336
                  },
                  position : {
                  'x' : -49.2704527149136,
                  'y' : 36.6308569382336
                  },
  },
{
                  data: {
                  id: 'CAGL0I03366g',
                  name: 'CAGL0I03366g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I03366g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATP binding, ATPase activity, adenylate kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I03366g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I03366g'  target='_blank'> Link to GRYC</a>",
                  x : 3.99550490664507,
                  y : 2.69781522750774
                  },
                  position : {
                  'x' : 39.9550490664507,
                  'y' : 26.9781522750774
                  },
  },
{
                  data: {
                  id: 'CAGL0I04334g',
                  name: 'CAGL0I04334g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I04334g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have sphingosine-1-phosphate phosphatase activity, role in calcium-mediated signaling and endoplasmic reticulum localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04334g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04334g'  target='_blank'> Link to GRYC</a>",
                  x : 4.94418460491535,
                  y : 2.03563900642445
                  },
                  position : {
                  'x' : 49.4418460491535,
                  'y' : 20.3563900642446
                  },
  },
{
                  data: {
                  id: 'CAGL0I04730g',
                  name: 'CAGL0I04730g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I04730g</h2><hr><p><b>Gene name</b> : HMT1</p><p><b>Description</b> : Putative hnRNP arginine N-methyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04730g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04730g'  target='_blank'> Link to GRYC</a>",
                  x : 4.10308443003232,
                  y : 5.40922160575135
                  },
                  position : {
                  'x' : 41.0308443003232,
                  'y' : 54.0922160575135
                  },
  },
{
                  data: {
                  id: 'CAGL0I04906g',
                  name: 'CAGL0I04906g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I04906g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have endopeptidase activator activity and role in proteasomal ubiquitin-independent protein catabolic process, proteasome-mediated ubiquitin-dependent protein catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04906g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04906g'  target='_blank'> Link to GRYC</a>",
                  x : -5.37863832493265,
                  y : 4.44690138131337
                  },
                  position : {
                  'x' : -53.7863832493265,
                  'y' : 44.4690138131337
                  },
  },
{
                  data: {
                  id: 'CAGL0I05060g',
                  name: 'CAGL0I05060g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0I05060g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have sequence-specific DNA binding activity and role in chromatin silencing at rDNA, chromatin silencing at telomere, regulation of transcription by RNA polymerase II, transfer RNA gene-mediated silencing</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I05060g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I05060g'  target='_blank'> Link to GRYC</a>",
                  x : 1.95839387264037,
                  y : -1.05750869541909
                  },
                  position : {
                  'x' : 19.5839387264037,
                  'y' : -10.5750869541909
                  },
  },
{
                  data: {
                  id: 'CAGL0I05390g',
                  name: 'CAGL0I05390g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I05390g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have protein kinase activity, protein serine/threonine kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I05390g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I05390g'  target='_blank'> Link to GRYC</a>",
                  x : -0.157257976722686,
                  y : -1.90423438151632
                  },
                  position : {
                  'x' : -1.57257976722686,
                  'y' : -19.0423438151632
                  },
  },
{
                  data: {
                  id: 'CAGL0I07249g',
                  name: 'CAGL0I07249g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffffff',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I07249g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative GTPase-activating protein involved in cell wall and cytoskeleton homeostasis; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I07249g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I07249g'  target='_blank'> Link to GRYC</a>",
                  x : -2.49878541313976,
                  y : 10.5895239818674
                  },
                  position : {
                  'x' : -24.9878541313976,
                  'y' : 105.895239818674
                  },
  },
{
                  data: {
                  id: 'CAGL0I09504g',
                  name: 'CAGL0I09504g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I09504g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have protein serine/threonine kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09504g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09504g'  target='_blank'> Link to GRYC</a>",
                  x : -0.38851269616753,
                  y : -1.54069161257962
                  },
                  position : {
                  'x' : -3.8851269616753,
                  'y' : -15.4069161257962
                  },
  },
{
                  data: {
                  id: 'CAGL0I10472g',
                  name: 'CAGL0I10472g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I10472g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in inner mitochondrial membrane organization, mitochondrion inheritance, mitochondrion morphogenesis, negative regulation of proteolysis, protein folding, replicative cell aging</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10472g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10472g'  target='_blank'> Link to GRYC</a>",
                  x : -6.11399956727211,
                  y : 3.3314859776214
                  },
                  position : {
                  'x' : -61.1399956727211,
                  'y' : 33.314859776214
                  },
  },
{
                  data: {
                  id: 'CAGL0J03806g',
                  name: 'CAGL0J03806g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J03806g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have transcription corepressor activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03806g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03806g'  target='_blank'> Link to GRYC</a>",
                  x : 4.17604198170115,
                  y : 7.06856011306478
                  },
                  position : {
                  'x' : 41.7604198170115,
                  'y' : 70.6856011306478
                  },
  },
{
                  data: {
                  id: 'CAGL0J04290g',
                  name: 'CAGL0J04290g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J04290g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have MAP kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04290g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04290g'  target='_blank'> Link to GRYC</a>",
                  x : 8.24941012735506,
                  y : -2.02535451523014
                  },
                  position : {
                  'x' : 82.4941012735506,
                  'y' : -20.2535451523014
                  },
  },
{
                  data: {
                  id: 'CAGL0J04576g',
                  name: 'CAGL0J04576g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J04576g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in peptidyl-diphthamide biosynthetic process from peptidyl-histidine and cytoplasm localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04576g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04576g'  target='_blank'> Link to GRYC</a>",
                  x : 4.51001241664276,
                  y : 5.84443741922241
                  },
                  position : {
                  'x' : 45.1001241664276,
                  'y' : 58.4443741922241
                  },
  },
{
                  data: {
                  id: 'CAGL0J06374g',
                  name: 'CAGL0J06374g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J06374g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted structural constituent of ribosome activity, role in translational elongation and ribosome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J06374g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J06374g'  target='_blank'> Link to GRYC</a>",
                  x : 5.50710833446785,
                  y : 5.16070292906168
                  },
                  position : {
                  'x' : 55.0710833446785,
                  'y' : 51.6070292906168
                  },
  },
{
                  data: {
                  id: 'CAGL0J07062g',
                  name: 'CAGL0J07062g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J07062g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have arginase activity, manganese ion binding, ornithine carbamoyltransferase inhibitor activity, zinc ion binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J07062g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J07062g'  target='_blank'> Link to GRYC</a>",
                  x : 3.71297518418886,
                  y : 6.94539117000521
                  },
                  position : {
                  'x' : 37.1297518418886,
                  'y' : 69.4539117000521
                  },
  },
{
                  data: {
                  id: 'CAGL0J07678g',
                  name: 'CAGL0J07678g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J07678g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ribosomal small subunit binding, translation initiation factor activity, translation initiation factor binding activity and role in formation of translation preinitiation complex, maintenance of translational fidelity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J07678g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J07678g'  target='_blank'> Link to GRYC</a>",
                  x : 3.41607845552879,
                  y : 4.77645436363094
                  },
                  position : {
                  'x' : 34.1607845552879,
                  'y' : 47.7645436363094
                  },
  },
{
                  data: {
                  id: 'CAGL0J09328g',
                  name: 'CAGL0J09328g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J09328g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cyclin-dependent protein serine/threonine kinase regulator activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09328g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09328g'  target='_blank'> Link to GRYC</a>",
                  x : -5.52568683782482,
                  y : 1.76139227912899
                  },
                  position : {
                  'x' : -55.2568683782482,
                  'y' : 17.6139227912899
                  },
  },
{
                  data: {
                  id: 'CAGL0J10846g',
                  name: 'CAGL0J10846g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J10846g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cyclin-dependent protein serine/threonine kinase regulator activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J10846g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J10846g'  target='_blank'> Link to GRYC</a>",
                  x : -6.11388547784093,
                  y : 1.10689551828324
                  },
                  position : {
                  'x' : -61.1388547784093,
                  'y' : 11.0689551828324
                  },
  },
{
                  data: {
                  id: 'CAGL0J10978g',
                  name: 'CAGL0J10978g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J10978g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have GTPase activator activity, Rho GTPase binding, phosphatidylinositol-4,5-bisphosphate binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J10978g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J10978g'  target='_blank'> Link to GRYC</a>",
                  x : -5.75607268517141,
                  y : 3.27701977118212
                  },
                  position : {
                  'x' : -57.5607268517141,
                  'y' : 32.7701977118212
                  },
  },
{
                  data: {
                  id: 'CAGL0J11132g',
                  name: 'CAGL0J11132g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J11132g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in pheromone-dependent signal transduction involved in conjugation with cellular fusion and membrane raft, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J11132g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J11132g'  target='_blank'> Link to GRYC</a>",
                  x : -5.76658922745,
                  y : 4.44391912258631
                  },
                  position : {
                  'x' : -57.6658922745,
                  'y' : 44.4391912258631
                  },
  },
{
                  data: {
                  id: 'CAGL0J11792g',
                  name: 'CAGL0J11792g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J11792g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted RNA polymerase I CORE element sequence-specific DNA binding, RNA polymerase I general transcription initiation factor activity and role in transcription initiation from RNA polymerase I promoter</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J11792g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J11792g'  target='_blank'> Link to GRYC</a>",
                  x : -6.14459870170006,
                  y : 2.33210843721561
                  },
                  position : {
                  'x' : -61.4459870170006,
                  'y' : 23.3210843721561
                  },
  },
{
                  data: {
                  id: 'CAGL0K00869g',
                  name: 'CAGL0K00869g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K00869g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted ubiquitin binding activity, role in endosome transport via multivesicular body sorting pathway and ESCRT I complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K00869g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K00869g'  target='_blank'> Link to GRYC</a>",
                  x : -6.87232949616628,
                  y : 2.78754002498187
                  },
                  position : {
                  'x' : -68.7232949616628,
                  'y' : 27.8754002498187
                  },
  },
{
                  data: {
                  id: 'CAGL0K01859g',
                  name: 'CAGL0K01859g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K01859g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have histone-glutamine methyltransferase activity, mRNA binding, rRNA methyltransferase activity and role in box C/D snoRNA 3'-end processing, histone glutamine methylation, rRNA methylation, rRNA processing, snoRNA processing</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K01859g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K01859g'  target='_blank'> Link to GRYC</a>",
                  x : 5.38960336704138,
                  y : 5.52498883140666
                  },
                  position : {
                  'x' : 53.8960336704138,
                  'y' : 55.2498883140666
                  },
  },
{
                  data: {
                  id: 'CAGL0K05247g',
                  name: 'CAGL0K05247g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K05247g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ubiquitin protein ligase binding activity, role in fungal-type cell wall organization, regulation of transcription by RNA polymerase II and nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K05247g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K05247g'  target='_blank'> Link to GRYC</a>",
                  x : -4.34083652364375,
                  y : 0.180405695716128
                  },
                  position : {
                  'x' : -43.4083652364375,
                  'y' : 1.80405695716128
                  },
  },
{
                  data: {
                  id: 'CAGL0K06061g',
                  name: 'CAGL0K06061g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K06061g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K06061g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K06061g'  target='_blank'> Link to GRYC</a>",
                  x : 4.54514018441519,
                  y : 4.94147999430195
                  },
                  position : {
                  'x' : 45.4514018441519,
                  'y' : 49.4147999430195
                  },
  },
{
                  data: {
                  id: 'CAGL0K07111g',
                  name: 'CAGL0K07111g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K07111g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have microtubule binding, microtubule plus-end binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07111g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07111g'  target='_blank'> Link to GRYC</a>",
                  x : -5.01315498250277,
                  y : 4.31054656685035
                  },
                  position : {
                  'x' : -50.1315498250277,
                  'y' : 43.1054656685035
                  },
  },
{
                  data: {
                  id: 'CAGL0K07590g',
                  name: 'CAGL0K07590g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K07590g</h2><hr><p><b>Gene name</b> : MYO3</p><p><b>Description</b> : Putative myosin</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07590g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07590g'  target='_blank'> Link to GRYC</a>",
                  x : 4.48718082031252,
                  y : 1.55001520648289
                  },
                  position : {
                  'x' : 44.8718082031252,
                  'y' : 15.5001520648289
                  },
  },
{
                  data: {
                  id: 'CAGL0K08668g',
                  name: 'CAGL0K08668g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K08668g</h2><hr><p><b>Gene name</b> : MET28</p><p><b>Description</b> : bZIP domain-containing protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08668g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08668g'  target='_blank'> Link to GRYC</a>",
                  x : -5.90783333025797,
                  y : -1.75542383590361
                  },
                  position : {
                  'x' : -59.0783333025797,
                  'y' : -17.5542383590361
                  },
  },
{
                  data: {
                  id: 'CAGL0K08756g',
                  name: 'CAGL0K08756g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0K08756g</h2><hr><p><b>Gene name</b> : AP5</p><p><b>Description</b> : bZIP domain-containing protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08756g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08756g'  target='_blank'> Link to GRYC</a>",
                  x : -1.15339735428818,
                  y : 10.269370473544
                  },
                  position : {
                  'x' : -11.5339735428818,
                  'y' : 102.69370473544
                  },
  },
{
                  data: {
                  id: 'CAGL0K09372g',
                  name: 'CAGL0K09372g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K09372g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription repressor activity, RNA polymerase II-specific, RNA polymerase II proximal promoter sequence-specific DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K09372g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K09372g'  target='_blank'> Link to GRYC</a>",
                  x : 3.53463793498776,
                  y : 0.29963256452914
                  },
                  position : {
                  'x' : 35.3463793498776,
                  'y' : 2.9963256452914
                  },
  },
{
                  data: {
                  id: 'CAGL0K09724g',
                  name: 'CAGL0K09724g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K09724g</h2><hr><p><b>Gene name</b> : FPR1</p><p><b>Description</b> : Peptidyl-prolyl cis-trans isomerase; expression upregulated in biofilm vs planktonic cell culture</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K09724g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K09724g'  target='_blank'> Link to GRYC</a>",
                  x : 4.07696249181714,
                  y : 4.59648434957061
                  },
                  position : {
                  'x' : 40.7696249181714,
                  'y' : 45.9648434957061
                  },
  },
{
                  data: {
                  id: 'CAGL0K12254g',
                  name: 'CAGL0K12254g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K12254g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in negative regulation of gluconeogenesis, proteasome-mediated ubiquitin-dependent protein catabolic process, protein catabolic process in the vacuole, protein targeting to vacuole</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K12254g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K12254g'  target='_blank'> Link to GRYC</a>",
                  x : -1.65628037728064,
                  y : -2.2816871489221
                  },
                  position : {
                  'x' : -16.5628037728064,
                  'y' : -22.816871489221
                  },
  },
{
                  data: {
                  id: 'CAGL0L00803g',
                  name: 'CAGL0L00803g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L00803g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in regulation of glycogen biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L00803g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L00803g'  target='_blank'> Link to GRYC</a>",
                  x : 1.07655946964367,
                  y : -1.03579000493924
                  },
                  position : {
                  'x' : 10.7655946964367,
                  'y' : -10.3579000493924
                  },
  },
{
                  data: {
                  id: 'CAGL0L01771g',
                  name: 'CAGL0L01771g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0L01771g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription factor activity, role in positive regulation of pseudohyphal growth, positive regulation of transcription by RNA polymerase II and nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L01771g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L01771g'  target='_blank'> Link to GRYC</a>",
                  x : 2.72694839072703,
                  y : -1.61269604071683
                  },
                  position : {
                  'x' : 27.2694839072703,
                  'y' : -16.1269604071683
                  },
  },
{
                  data: {
                  id: 'CAGL0L03135g',
                  name: 'CAGL0L03135g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L03135g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative phospholipase D; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03135g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03135g'  target='_blank'> Link to GRYC</a>",
                  x : -2.00353742920032,
                  y : -1.86648789136421
                  },
                  position : {
                  'x' : -20.0353742920032,
                  'y' : -18.6648789136421
                  },
  },
{
                  data: {
                  id: 'CAGL0L03377g',
                  name: 'CAGL0L03377g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L03377g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription activator activity, RNA polymerase II-specific, RNA polymerase II proximal promoter sequence-specific DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03377g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03377g'  target='_blank'> Link to GRYC</a>",
                  x : -5.90775330501515,
                  y : 1.63333554961831
                  },
                  position : {
                  'x' : -59.0775330501515,
                  'y' : 16.3333554961831
                  },
  },
{
                  data: {
                  id: 'CAGL0L03846g',
                  name: 'CAGL0L03846g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L03846g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA helicase activity, RNA-dependent ATPase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03846g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03846g'  target='_blank'> Link to GRYC</a>",
                  x : 3.88253724959525,
                  y : 6.32023666165242
                  },
                  position : {
                  'x' : 38.8253724959525,
                  'y' : 63.2023666165242
                  },
  },
{
                  data: {
                  id: 'CAGL0L04510g',
                  name: 'CAGL0L04510g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L04510g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L04510g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L04510g'  target='_blank'> Link to GRYC</a>",
                  x : 4.3437642386602,
                  y : 6.11294869513394
                  },
                  position : {
                  'x' : 43.437642386602,
                  'y' : 61.1294869513394
                  },
  },
{
                  data: {
                  id: 'CAGL0L04598g',
                  name: 'CAGL0L04598g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L04598g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA 7-methylguanosine cap binding, m7G(5')pppN diphosphatase activity, role in cellular response to starvation, deadenylation-dependent decapping of nuclear-transcribed mRNA and P-body, cytoplasm, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L04598g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L04598g'  target='_blank'> Link to GRYC</a>",
                  x : -1.60369896301181,
                  y : -0.590472665046574
                  },
                  position : {
                  'x' : -16.0369896301181,
                  'y' : -5.90472665046574
                  },
  },
{
                  data: {
                  id: 'CAGL0L06578g',
                  name: 'CAGL0L06578g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L06578g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ubiquitin ligase activator activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06578g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06578g'  target='_blank'> Link to GRYC</a>",
                  x : -1.30367974355486,
                  y : -2.33437104761895
                  },
                  position : {
                  'x' : -13.0367974355486,
                  'y' : -23.3437104761895
                  },
  },
{
                  data: {
                  id: 'CAGL0L06776g',
                  name: 'CAGL0L06776g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0L06776g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted DNA-binding transcription factor activity, sequence-specific DNA binding, zinc ion binding activity and role in regulation of transcription, DNA-templated</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06776g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06776g'  target='_blank'> Link to GRYC</a>",
                  x : -3.97563962647151,
                  y : 10.0906798654124
                  },
                  position : {
                  'x' : -39.7563962647151,
                  'y' : 100.906798654124
                  },
  },
{
                  data: {
                  id: 'CAGL0L07480g',
                  name: 'CAGL0L07480g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L07480g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription factor activity, double-stranded DNA binding, sequence-specific DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L07480g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L07480g'  target='_blank'> Link to GRYC</a>",
                  x : -3.14068174287183,
                  y : -1.74757232974932
                  },
                  position : {
                  'x' : -31.4068174287183,
                  'y' : -17.4757232974932
                  },
  },
{
                  data: {
                  id: 'CAGL0L09020g',
                  name: 'CAGL0L09020g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L09020g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ATP export, carbon catabolite repression of transcription from RNA polymerase II promoter by glucose, cellular response to alkaline pH and cellular response to lithium ion, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L09020g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L09020g'  target='_blank'> Link to GRYC</a>",
                  x : -5.36445215057311,
                  y : 2.53776722661525
                  },
                  position : {
                  'x' : -53.6445215057311,
                  'y' : 25.3776722661525
                  },
  },
{
                  data: {
                  id: 'CAGL0L09383g',
                  name: 'CAGL0L09383g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L09383g</h2><hr><p><b>Gene name</b> : SUT2</p><p><b>Description</b> : Ortholog(s) have role in negative regulation of filamentous growth of a population of unicellular organisms in response to starvation by negative regulation of transcription from RNA polymerase II promoter, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L09383g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L09383g'  target='_blank'> Link to GRYC</a>",
                  x : -0.913643882361035,
                  y : -0.802172343176311
                  },
                  position : {
                  'x' : -9.13643882361036,
                  'y' : -8.02172343176311
                  },
  },
{
                  data: {
                  id: 'CAGL0L10164g',
                  name: 'CAGL0L10164g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L10164g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in translational termination and nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10164g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10164g'  target='_blank'> Link to GRYC</a>",
                  x : 6.81951064604016,
                  y : 5.41351701954738
                  },
                  position : {
                  'x' : 68.1951064604016,
                  'y' : 54.1351701954738
                  },
  },
{
                  data: {
                  id: 'CAGL0L10362g',
                  name: 'CAGL0L10362g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L10362g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YOR062C and Saccharomyces cerevisiae S288C : YOR062C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10362g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10362g'  target='_blank'> Link to GRYC</a>",
                  x : -0.695215873286635,
                  y : -1.2261929359566
                  },
                  position : {
                  'x' : -6.95215873286635,
                  'y' : -12.261929359566
                  },
  },
{
                  data: {
                  id: 'CAGL0L11990g',
                  name: 'CAGL0L11990g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L11990g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase II activating transcription factor binding, disulfide oxidoreductase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L11990g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L11990g'  target='_blank'> Link to GRYC</a>",
                  x : -2.34317008160475,
                  y : 9.0869358336087
                  },
                  position : {
                  'x' : -23.4317008160475,
                  'y' : 90.869358336087
                  },
  },
{
                  data: {
                  id: 'CAGL0L12562g',
                  name: 'CAGL0L12562g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L12562g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription factor activity, RNA polymerase II-specific, proximal promoter sequence-specific DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L12562g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L12562g'  target='_blank'> Link to GRYC</a>",
                  x : -1.50901340115492,
                  y : -1.3591835927814
                  },
                  position : {
                  'x' : -15.0901340115492,
                  'y' : -13.591835927814
                  },
  },
{
                  data: {
                  id: 'CAGL0L13156g',
                  name: 'CAGL0L13156g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L13156g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have enzyme inhibitor activity, role in ubiquitin recycling and endosome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L13156g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L13156g'  target='_blank'> Link to GRYC</a>",
                  x : 5.42802742309744,
                  y : 6.2364864966481
                  },
                  position : {
                  'x' : 54.2802742309744,
                  'y' : 62.364864966481
                  },
  },
{
                  data: {
                  id: 'CAGL0M00770g',
                  name: 'CAGL0M00770g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M00770g</h2><hr><p><b>Gene name</b> : SIR3</p><p><b>Description</b> : Protein involved in subtelomeric silencing; mutants display increased colonization of the mouse kidney relative to the wild-type strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M00770g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M00770g'  target='_blank'> Link to GRYC</a>",
                  x : 3.75479836816204,
                  y : 3.47603888711447
                  },
                  position : {
                  'x' : 37.5479836816204,
                  'y' : 34.7603888711447
                  },
  },
{
                  data: {
                  id: 'CAGL0M01364g',
                  name: 'CAGL0M01364g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M01364g</h2><hr><p><b>Gene name</b> : CBF3D</p><p><b>Description</b> : Centromere binding factor 3d; kinetochore protein with homology to human SKP1</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M01364g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M01364g'  target='_blank'> Link to GRYC</a>",
                  x : 5.66638029434687,
                  y : 1.16677036168269
                  },
                  position : {
                  'x' : 56.6638029434687,
                  'y' : 11.6677036168269
                  },
  },
{
                  data: {
                  id: 'CAGL0M03025g',
                  name: 'CAGL0M03025g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M03025g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription activator activity, RNA polymerase II-specific, DNA-binding transcription factor activity, RNA polymerase II proximal promoter sequence-specific DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M03025g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M03025g'  target='_blank'> Link to GRYC</a>",
                  x : -5.33129651764431,
                  y : -0.150858695982963
                  },
                  position : {
                  'x' : -53.3129651764431,
                  'y' : -1.50858695982963
                  },
  },
{
                  data: {
                  id: 'CAGL0M03795g',
                  name: 'CAGL0M03795g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M03795g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted nucleic acid binding, nucleotide binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M03795g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M03795g'  target='_blank'> Link to GRYC</a>",
                  x : 2.58278081245156,
                  y : 6.85080414448226
                  },
                  position : {
                  'x' : 25.8278081245156,
                  'y' : 68.5080414448226
                  },
  },
{
                  data: {
                  id: 'CAGL0M04191g',
                  name: 'CAGL0M04191g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M04191g</h2><hr><p><b>Gene name</b> : YPS1</p><p><b>Description</b> : Yapsin family aspartic protease; predicted GPI-anchor; complements cell wall defect phenotypes of S. cerevisiae yps1 mutant; regulation of pH homeostasis under acid conditions; induced by high temperature, Slt1- and Crz1p-dependent</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M04191g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M04191g'  target='_blank'> Link to GRYC</a>",
                  x : -6.61398219119183,
                  y : 1.95190501417576
                  },
                  position : {
                  'x' : -66.1398219119183,
                  'y' : 19.5190501417576
                  },
  },
{
                  data: {
                  id: 'CAGL0M04873g',
                  name: 'CAGL0M04873g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0M04873g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in rRNA export from nucleus and cell surface localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M04873g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M04873g'  target='_blank'> Link to GRYC</a>",
                  x : 3.1655905635375,
                  y : 8.34682882820155
                  },
                  position : {
                  'x' : 31.655905635375,
                  'y' : 83.4682882820155
                  },
  },
{
                  data: {
                  id: 'CAGL0M05665g',
                  name: 'CAGL0M05665g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M05665g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have endopeptidase inhibitor activity, role in regulation of proteolysis, vacuole fusion, non-autophagic and fungal-type vacuole localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M05665g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M05665g'  target='_blank'> Link to GRYC</a>",
                  x : -3.19549655151676,
                  y : -2.38665853598827
                  },
                  position : {
                  'x' : -31.9549655151676,
                  'y' : -23.8665853598827
                  },
  },
{
                  data: {
                  id: 'CAGL0M06369g',
                  name: 'CAGL0M06369g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M06369g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in regulation of cytoplasmic translational fidelity, tRNA wobble base 5-methoxycarbonylmethyl-2-thiouridinylation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M06369g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M06369g'  target='_blank'> Link to GRYC</a>",
                  x : 3.65273392973372,
                  y : 6.50202807697839
                  },
                  position : {
                  'x' : 36.5273392973372,
                  'y' : 65.0202807697839
                  },
  },
{
                  data: {
                  id: 'CAGL0M06963g',
                  name: 'CAGL0M06963g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M06963g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in tRNA export from nucleus and cytosol localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M06963g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M06963g'  target='_blank'> Link to GRYC</a>",
                  x : 2.59246575726057,
                  y : 0.866016439664388
                  },
                  position : {
                  'x' : 25.9246575726057,
                  'y' : 8.66016439664388
                  },
  },
{
                  data: {
                  id: 'CAGL0M07403g',
                  name: 'CAGL0M07403g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M07403g</h2><hr><p><b>Gene name</b> : OAZ1</p><p><b>Description</b> : Ortholog(s) have ornithine decarboxylase inhibitor activity and role in negative regulation of translational frameshifting, regulation of proteasomal protein catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M07403g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M07403g'  target='_blank'> Link to GRYC</a>",
                  x : -2.35784852435058,
                  y : -1.87958038254259
                  },
                  position : {
                  'x' : -23.5784852435058,
                  'y' : -18.7958038254259
                  },
  },
{
                  data: {
                  id: 'CAGL0M07722g',
                  name: 'CAGL0M07722g',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M07722g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cytoplasmic translational initiation and cytoplasmic stress granule, eukaryotic translation initiation factor 3 complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M07722g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M07722g'  target='_blank'> Link to GRYC</a>",
                  x : 3.5770787675854,
                  y : 5.94945256456342
                  },
                  position : {
                  'x' : 35.770787675854,
                  'y' : 59.4945256456342
                  },
  },
{
                  data: {
                  id: 'CAGL0M08184g',
                  name: 'CAGL0M08184g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M08184g</h2><hr><p><b>Gene name</b> : STE3</p><p><b>Description</b> : Putative a-factor pheromone receptor</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M08184g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M08184g'  target='_blank'> Link to GRYC</a>",
                  x : -3.04947483270239,
                  y : -1.37625330783734
                  },
                  position : {
                  'x' : -30.4947483270239,
                  'y' : -13.7625330783734
                  },
  },
{
                  data: {
                  id: 'CAGL0M11902g',
                  name: 'CAGL0M11902g',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M11902g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : FUN19 and Saccharomyces cerevisiae S288C : YAL034C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M11902g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M11902g'  target='_blank'> Link to GRYC</a>",
                  x : -5.89120628443276,
                  y : -3.5023079916481
                  },
                  position : {
                  'x' : -58.9120628443276,
                  'y' : -35.023079916481
                  },
  },
{
                  data: {
                  source: 'CAGL0B03421g',
                  target: 'CAGL0A01716g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02101g',
                  target: 'CAGL0A01716g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05060g',
                  target: 'CAGL0A01716g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05390g',
                  target: 'CAGL0A01716g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09372g',
                  target: 'CAGL0A01716g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00803g',
                  target: 'CAGL0A01716g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04598g',
                  target: 'CAGL0A01716g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09383g',
                  target: 'CAGL0A01716g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10362g',
                  target: 'CAGL0A01716g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05456g',
                  target: 'CAGL0A02145g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G04763g',
                  target: 'CAGL0A02145g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05764g',
                  target: 'CAGL0A02145g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05247g',
                  target: 'CAGL0A02145g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L07480g',
                  target: 'CAGL0A02145g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03025g',
                  target: 'CAGL0A02145g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07403g',
                  target: 'CAGL0A02145g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M08184g',
                  target: 'CAGL0A02145g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0B03421g',
                  target: 'CAGL0A04499g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F01265g',
                  target: 'CAGL0A04499g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03553g',
                  target: 'CAGL0A04499g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G04499g',
                  target: 'CAGL0A04499g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05060g',
                  target: 'CAGL0A04499g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09372g',
                  target: 'CAGL0A04499g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00803g',
                  target: 'CAGL0A04499g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01771g',
                  target: 'CAGL0A04499g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06963g',
                  target: 'CAGL0A04499g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E06116g',
                  target: 'CAGL0B03421g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G02255g',
                  target: 'CAGL0B03421g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05060g',
                  target: 'CAGL0B03421g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05390g',
                  target: 'CAGL0B03421g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09372g',
                  target: 'CAGL0B03421g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00803g',
                  target: 'CAGL0B03421g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01771g',
                  target: 'CAGL0B03421g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0C03113g',
                  target: 'CAGL0B03817g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01243g',
                  target: 'CAGL0B03817g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02101g',
                  target: 'CAGL0B03817g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F07865g',
                  target: 'CAGL0B03817g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G02255g',
                  target: 'CAGL0B03817g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G04763g',
                  target: 'CAGL0B03817g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05390g',
                  target: 'CAGL0B03817g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12254g',
                  target: 'CAGL0B03817g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03135g',
                  target: 'CAGL0B03817g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06578g',
                  target: 'CAGL0B03817g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L07480g',
                  target: 'CAGL0B03817g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05665g',
                  target: 'CAGL0B03817g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07403g',
                  target: 'CAGL0B03817g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M08184g',
                  target: 'CAGL0B03817g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E04884g',
                  target: 'CAGL0B04213g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00869g',
                  target: 'CAGL0B04213g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01991g',
                  target: 'CAGL0C00495g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F01045g',
                  target: 'CAGL0C00495g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H03751g',
                  target: 'CAGL0C00495g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00814g',
                  target: 'CAGL0C00495g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03366g',
                  target: 'CAGL0C00495g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04334g',
                  target: 'CAGL0C00495g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07590g',
                  target: 'CAGL0C00495g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09372g',
                  target: 'CAGL0C00495g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M01364g',
                  target: 'CAGL0C00495g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H03751g',
                  target: 'CAGL0C00539g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04334g',
                  target: 'CAGL0C00539g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07590g',
                  target: 'CAGL0C00539g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09372g',
                  target: 'CAGL0C00539g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M01364g',
                  target: 'CAGL0C00539g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03553g',
                  target: 'CAGL0C00759g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G04499g',
                  target: 'CAGL0C00759g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00814g',
                  target: 'CAGL0C00759g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03366g',
                  target: 'CAGL0C00759g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07678g',
                  target: 'CAGL0C00759g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09724g',
                  target: 'CAGL0C00759g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00770g',
                  target: 'CAGL0C00759g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06963g',
                  target: 'CAGL0C00759g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01991g',
                  target: 'CAGL0C01287g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E03289g',
                  target: 'CAGL0C01287g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F01045g',
                  target: 'CAGL0C01287g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07579g',
                  target: 'CAGL0C01287g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00814g',
                  target: 'CAGL0C01287g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03366g',
                  target: 'CAGL0C01287g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04730g',
                  target: 'CAGL0C01287g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04576g',
                  target: 'CAGL0C01287g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J06374g',
                  target: 'CAGL0C01287g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07678g',
                  target: 'CAGL0C01287g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K01859g',
                  target: 'CAGL0C01287g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06061g',
                  target: 'CAGL0C01287g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09724g',
                  target: 'CAGL0C01287g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03846g',
                  target: 'CAGL0C01287g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04510g',
                  target: 'CAGL0C01287g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L13156g',
                  target: 'CAGL0C01287g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00770g',
                  target: 'CAGL0C01287g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06369g',
                  target: 'CAGL0C01287g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07722g',
                  target: 'CAGL0C01287g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D04686g',
                  target: 'CAGL0C03113g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D06600g',
                  target: 'CAGL0C03113g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01243g',
                  target: 'CAGL0C03113g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02101g',
                  target: 'CAGL0C03113g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F07117g',
                  target: 'CAGL0C03113g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G04763g',
                  target: 'CAGL0C03113g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08541g',
                  target: 'CAGL0C03113g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05390g',
                  target: 'CAGL0C03113g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12254g',
                  target: 'CAGL0C03113g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03135g',
                  target: 'CAGL0C03113g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04598g',
                  target: 'CAGL0C03113g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06578g',
                  target: 'CAGL0C03113g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L07480g',
                  target: 'CAGL0C03113g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09383g',
                  target: 'CAGL0C03113g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10362g',
                  target: 'CAGL0C03113g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12562g',
                  target: 'CAGL0C03113g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05665g',
                  target: 'CAGL0C03113g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07403g',
                  target: 'CAGL0C03113g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M08184g',
                  target: 'CAGL0C03113g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0D06600g',
                  target: 'CAGL0D04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01243g',
                  target: 'CAGL0D04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E05456g',
                  target: 'CAGL0D04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02101g',
                  target: 'CAGL0D04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G04763g',
                  target: 'CAGL0D04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08541g',
                  target: 'CAGL0D04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05390g',
                  target: 'CAGL0D04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09504g',
                  target: 'CAGL0D04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12254g',
                  target: 'CAGL0D04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03135g',
                  target: 'CAGL0D04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04598g',
                  target: 'CAGL0D04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06578g',
                  target: 'CAGL0D04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09383g',
                  target: 'CAGL0D04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10362g',
                  target: 'CAGL0D04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12562g',
                  target: 'CAGL0D04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05665g',
                  target: 'CAGL0D04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07403g',
                  target: 'CAGL0D04686g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E01243g',
                  target: 'CAGL0D06600g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F00605g',
                  target: 'CAGL0D06600g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02101g',
                  target: 'CAGL0D06600g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08541g',
                  target: 'CAGL0D06600g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12254g',
                  target: 'CAGL0D06600g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03135g',
                  target: 'CAGL0D06600g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06578g',
                  target: 'CAGL0D06600g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09383g',
                  target: 'CAGL0D06600g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10362g',
                  target: 'CAGL0D06600g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12562g',
                  target: 'CAGL0D06600g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07403g',
                  target: 'CAGL0D06600g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05764g',
                  target: 'CAGL0E00737g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10472g',
                  target: 'CAGL0E00737g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09328g',
                  target: 'CAGL0E00737g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10846g',
                  target: 'CAGL0E00737g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10978g',
                  target: 'CAGL0E00737g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11792g',
                  target: 'CAGL0E00737g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03377g',
                  target: 'CAGL0E00737g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09020g',
                  target: 'CAGL0E00737g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04191g',
                  target: 'CAGL0E00737g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F02101g',
                  target: 'CAGL0E01243g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G02255g',
                  target: 'CAGL0E01243g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G04763g',
                  target: 'CAGL0E01243g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08541g',
                  target: 'CAGL0E01243g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05390g',
                  target: 'CAGL0E01243g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09504g',
                  target: 'CAGL0E01243g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12254g',
                  target: 'CAGL0E01243g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03135g',
                  target: 'CAGL0E01243g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06578g',
                  target: 'CAGL0E01243g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09383g',
                  target: 'CAGL0E01243g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10362g',
                  target: 'CAGL0E01243g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12562g',
                  target: 'CAGL0E01243g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07403g',
                  target: 'CAGL0E01243g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0E03289g',
                  target: 'CAGL0E01991g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F01045g',
                  target: 'CAGL0E01991g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H03751g',
                  target: 'CAGL0E01991g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00814g',
                  target: 'CAGL0E01991g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03366g',
                  target: 'CAGL0E01991g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04334g',
                  target: 'CAGL0E01991g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06061g',
                  target: 'CAGL0E01991g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07590g',
                  target: 'CAGL0E01991g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F01045g',
                  target: 'CAGL0E03289g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H03751g',
                  target: 'CAGL0E03289g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07579g',
                  target: 'CAGL0E03289g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00814g',
                  target: 'CAGL0E03289g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04730g',
                  target: 'CAGL0E03289g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03806g',
                  target: 'CAGL0E03289g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04576g',
                  target: 'CAGL0E03289g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J06374g',
                  target: 'CAGL0E03289g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07062g',
                  target: 'CAGL0E03289g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07678g',
                  target: 'CAGL0E03289g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K01859g',
                  target: 'CAGL0E03289g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06061g',
                  target: 'CAGL0E03289g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09724g',
                  target: 'CAGL0E03289g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03846g',
                  target: 'CAGL0E03289g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04510g',
                  target: 'CAGL0E03289g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06369g',
                  target: 'CAGL0E03289g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07722g',
                  target: 'CAGL0E03289g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F07117g',
                  target: 'CAGL0E04884g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00869g',
                  target: 'CAGL0E04884g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03025g',
                  target: 'CAGL0E04884g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G04763g',
                  target: 'CAGL0E05456g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G05764g',
                  target: 'CAGL0E05456g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08541g',
                  target: 'CAGL0E05456g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08668g',
                  target: 'CAGL0E05456g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03025g',
                  target: 'CAGL0E05456g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05665g',
                  target: 'CAGL0E05456g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07403g',
                  target: 'CAGL0E05456g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M08184g',
                  target: 'CAGL0E05456g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H03179g',
                  target: 'CAGL0E05830g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04906g',
                  target: 'CAGL0E05830g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10472g',
                  target: 'CAGL0E05830g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10978g',
                  target: 'CAGL0E05830g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11132g',
                  target: 'CAGL0E05830g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07111g',
                  target: 'CAGL0E05830g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09020g',
                  target: 'CAGL0E05830g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02959g',
                  target: 'CAGL0E06116g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09372g',
                  target: 'CAGL0E06116g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00803g',
                  target: 'CAGL0E06116g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01771g',
                  target: 'CAGL0E06116g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02486g',
                  target: 'CAGL0F00605g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H03751g',
                  target: 'CAGL0F01045g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04334g',
                  target: 'CAGL0F01045g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J03806g',
                  target: 'CAGL0F01045g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04576g',
                  target: 'CAGL0F01045g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07062g',
                  target: 'CAGL0F01045g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06061g',
                  target: 'CAGL0F01045g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10164g',
                  target: 'CAGL0F01045g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06369g',
                  target: 'CAGL0F01045g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07722g',
                  target: 'CAGL0F01045g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0F03553g',
                  target: 'CAGL0F01265g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G04499g',
                  target: 'CAGL0F01265g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H02959g',
                  target: 'CAGL0F01265g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03366g',
                  target: 'CAGL0F01265g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04334g',
                  target: 'CAGL0F01265g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07590g',
                  target: 'CAGL0F01265g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09372g',
                  target: 'CAGL0F01265g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01771g',
                  target: 'CAGL0F01265g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06963g',
                  target: 'CAGL0F01265g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G02255g',
                  target: 'CAGL0F02101g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G04763g',
                  target: 'CAGL0F02101g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08541g',
                  target: 'CAGL0F02101g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05390g',
                  target: 'CAGL0F02101g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09504g',
                  target: 'CAGL0F02101g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12254g',
                  target: 'CAGL0F02101g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00803g',
                  target: 'CAGL0F02101g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03135g',
                  target: 'CAGL0F02101g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04598g',
                  target: 'CAGL0F02101g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06578g',
                  target: 'CAGL0F02101g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L07480g',
                  target: 'CAGL0F02101g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09383g',
                  target: 'CAGL0F02101g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10362g',
                  target: 'CAGL0F02101g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12562g',
                  target: 'CAGL0F02101g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07403g',
                  target: 'CAGL0F02101g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M08184g',
                  target: 'CAGL0F02101g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G04499g',
                  target: 'CAGL0F03553g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00814g',
                  target: 'CAGL0F03553g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03366g',
                  target: 'CAGL0F03553g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07590g',
                  target: 'CAGL0F03553g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09372g',
                  target: 'CAGL0F03553g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00770g',
                  target: 'CAGL0F03553g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06963g',
                  target: 'CAGL0F03553g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04290g',
                  target: 'CAGL0F06677g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08541g',
                  target: 'CAGL0F07117g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K08668g',
                  target: 'CAGL0F07117g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03135g',
                  target: 'CAGL0F07117g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03025g',
                  target: 'CAGL0F07117g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05665g',
                  target: 'CAGL0F07117g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M11902g',
                  target: 'CAGL0F07117g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0G02255g',
                  target: 'CAGL0F07865g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05390g',
                  target: 'CAGL0G02255g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09504g',
                  target: 'CAGL0G02255g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12254g',
                  target: 'CAGL0G02255g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01771g',
                  target: 'CAGL0G02255g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06578g',
                  target: 'CAGL0G02255g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03366g',
                  target: 'CAGL0G04499g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00770g',
                  target: 'CAGL0G04499g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06963g',
                  target: 'CAGL0G04499g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08541g',
                  target: 'CAGL0G04763g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09504g',
                  target: 'CAGL0G04763g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12254g',
                  target: 'CAGL0G04763g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03135g',
                  target: 'CAGL0G04763g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06578g',
                  target: 'CAGL0G04763g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L07480g',
                  target: 'CAGL0G04763g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12562g',
                  target: 'CAGL0G04763g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05665g',
                  target: 'CAGL0G04763g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07403g',
                  target: 'CAGL0G04763g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M08184g',
                  target: 'CAGL0G04763g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09328g',
                  target: 'CAGL0G05764g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10846g',
                  target: 'CAGL0G05764g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11792g',
                  target: 'CAGL0G05764g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05247g',
                  target: 'CAGL0G05764g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03377g',
                  target: 'CAGL0G05764g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09020g',
                  target: 'CAGL0G05764g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03025g',
                  target: 'CAGL0G05764g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04191g',
                  target: 'CAGL0G05764g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H07579g',
                  target: 'CAGL0G08041g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04576g',
                  target: 'CAGL0G08041g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07062g',
                  target: 'CAGL0G08041g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03846g',
                  target: 'CAGL0G08041g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04510g',
                  target: 'CAGL0G08041g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06369g',
                  target: 'CAGL0G08041g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07722g',
                  target: 'CAGL0G08041g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H03487g',
                  target: 'CAGL0H02959g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07590g',
                  target: 'CAGL0H02959g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09372g',
                  target: 'CAGL0H02959g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01771g',
                  target: 'CAGL0H02959g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0H08541g',
                  target: 'CAGL0H03179g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I02486g',
                  target: 'CAGL0H03179g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04906g',
                  target: 'CAGL0H03179g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10472g',
                  target: 'CAGL0H03179g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10978g',
                  target: 'CAGL0H03179g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11132g',
                  target: 'CAGL0H03179g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00869g',
                  target: 'CAGL0H03179g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07111g',
                  target: 'CAGL0H03179g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09020g',
                  target: 'CAGL0H03179g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01771g',
                  target: 'CAGL0H03487g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I00814g',
                  target: 'CAGL0H03751g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03366g',
                  target: 'CAGL0H03751g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04334g',
                  target: 'CAGL0H03751g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07590g',
                  target: 'CAGL0H03751g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09372g',
                  target: 'CAGL0H03751g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M01364g',
                  target: 'CAGL0H03751g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04730g',
                  target: 'CAGL0H07579g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04576g',
                  target: 'CAGL0H07579g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07062g',
                  target: 'CAGL0H07579g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06061g',
                  target: 'CAGL0H07579g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09724g',
                  target: 'CAGL0H07579g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03846g',
                  target: 'CAGL0H07579g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04510g',
                  target: 'CAGL0H07579g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L13156g',
                  target: 'CAGL0H07579g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06369g',
                  target: 'CAGL0H07579g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07722g',
                  target: 'CAGL0H07579g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12254g',
                  target: 'CAGL0H08541g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03135g',
                  target: 'CAGL0H08541g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04598g',
                  target: 'CAGL0H08541g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06578g',
                  target: 'CAGL0H08541g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09020g',
                  target: 'CAGL0H08541g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09383g',
                  target: 'CAGL0H08541g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12562g',
                  target: 'CAGL0H08541g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03025g',
                  target: 'CAGL0H08541g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05665g',
                  target: 'CAGL0H08541g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07403g',
                  target: 'CAGL0H08541g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I03366g',
                  target: 'CAGL0I00814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04334g',
                  target: 'CAGL0I00814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04730g',
                  target: 'CAGL0I00814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04576g',
                  target: 'CAGL0I00814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J06374g',
                  target: 'CAGL0I00814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07678g',
                  target: 'CAGL0I00814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K01859g',
                  target: 'CAGL0I00814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06061g',
                  target: 'CAGL0I00814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07590g',
                  target: 'CAGL0I00814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09724g',
                  target: 'CAGL0I00814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00770g',
                  target: 'CAGL0I00814g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04906g',
                  target: 'CAGL0I02486g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10472g',
                  target: 'CAGL0I02486g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10978g',
                  target: 'CAGL0I02486g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11132g',
                  target: 'CAGL0I02486g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00869g',
                  target: 'CAGL0I02486g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07111g',
                  target: 'CAGL0I02486g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09020g',
                  target: 'CAGL0I02486g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I04334g',
                  target: 'CAGL0I03366g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07678g',
                  target: 'CAGL0I03366g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06061g',
                  target: 'CAGL0I03366g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07590g',
                  target: 'CAGL0I03366g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09372g',
                  target: 'CAGL0I03366g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09724g',
                  target: 'CAGL0I03366g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00770g',
                  target: 'CAGL0I03366g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06963g',
                  target: 'CAGL0I03366g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07590g',
                  target: 'CAGL0I04334g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09372g',
                  target: 'CAGL0I04334g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M01364g',
                  target: 'CAGL0I04334g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04576g',
                  target: 'CAGL0I04730g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J06374g',
                  target: 'CAGL0I04730g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07678g',
                  target: 'CAGL0I04730g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K01859g',
                  target: 'CAGL0I04730g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06061g',
                  target: 'CAGL0I04730g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09724g',
                  target: 'CAGL0I04730g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03846g',
                  target: 'CAGL0I04730g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04510g',
                  target: 'CAGL0I04730g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L13156g',
                  target: 'CAGL0I04730g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00770g',
                  target: 'CAGL0I04730g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06369g',
                  target: 'CAGL0I04730g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07722g',
                  target: 'CAGL0I04730g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I10472g',
                  target: 'CAGL0I04906g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10978g',
                  target: 'CAGL0I04906g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11132g',
                  target: 'CAGL0I04906g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07111g',
                  target: 'CAGL0I04906g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09020g',
                  target: 'CAGL0I04906g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I05390g',
                  target: 'CAGL0I05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09372g',
                  target: 'CAGL0I05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00803g',
                  target: 'CAGL0I05060g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0I09504g',
                  target: 'CAGL0I05390g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12254g',
                  target: 'CAGL0I05390g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00803g',
                  target: 'CAGL0I05390g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01771g',
                  target: 'CAGL0I05390g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03135g',
                  target: 'CAGL0I05390g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06578g',
                  target: 'CAGL0I05390g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09383g',
                  target: 'CAGL0I05390g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10362g',
                  target: 'CAGL0I05390g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12562g',
                  target: 'CAGL0I05390g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07403g',
                  target: 'CAGL0I05390g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K12254g',
                  target: 'CAGL0I09504g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03135g',
                  target: 'CAGL0I09504g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06578g',
                  target: 'CAGL0I09504g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12562g',
                  target: 'CAGL0I09504g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06963g',
                  target: 'CAGL0I09504g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07403g',
                  target: 'CAGL0I09504g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J09328g',
                  target: 'CAGL0I10472g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10978g',
                  target: 'CAGL0I10472g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11132g',
                  target: 'CAGL0I10472g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11792g',
                  target: 'CAGL0I10472g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K00869g',
                  target: 'CAGL0I10472g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07111g',
                  target: 'CAGL0I10472g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03377g',
                  target: 'CAGL0I10472g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09020g',
                  target: 'CAGL0I10472g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04191g',
                  target: 'CAGL0I10472g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J04576g',
                  target: 'CAGL0J03806g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07062g',
                  target: 'CAGL0J03806g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03795g',
                  target: 'CAGL0J03806g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04873g',
                  target: 'CAGL0J03806g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06369g',
                  target: 'CAGL0J03806g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07722g',
                  target: 'CAGL0J03806g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J06374g',
                  target: 'CAGL0J04576g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07062g',
                  target: 'CAGL0J04576g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J07678g',
                  target: 'CAGL0J04576g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K01859g',
                  target: 'CAGL0J04576g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06061g',
                  target: 'CAGL0J04576g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09724g',
                  target: 'CAGL0J04576g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03846g',
                  target: 'CAGL0J04576g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04510g',
                  target: 'CAGL0J04576g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L13156g',
                  target: 'CAGL0J04576g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06369g',
                  target: 'CAGL0J04576g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07722g',
                  target: 'CAGL0J04576g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K01859g',
                  target: 'CAGL0J06374g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06061g',
                  target: 'CAGL0J06374g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09724g',
                  target: 'CAGL0J06374g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04510g',
                  target: 'CAGL0J06374g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10164g',
                  target: 'CAGL0J06374g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L13156g',
                  target: 'CAGL0J06374g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03846g',
                  target: 'CAGL0J07062g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04510g',
                  target: 'CAGL0J07062g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03795g',
                  target: 'CAGL0J07062g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04873g',
                  target: 'CAGL0J07062g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06369g',
                  target: 'CAGL0J07062g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07722g',
                  target: 'CAGL0J07062g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06061g',
                  target: 'CAGL0J07678g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09724g',
                  target: 'CAGL0J07678g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04510g',
                  target: 'CAGL0J07678g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00770g',
                  target: 'CAGL0J07678g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03795g',
                  target: 'CAGL0J07678g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07722g',
                  target: 'CAGL0J07678g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10846g',
                  target: 'CAGL0J09328g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J10978g',
                  target: 'CAGL0J09328g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11792g',
                  target: 'CAGL0J09328g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05247g',
                  target: 'CAGL0J09328g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03377g',
                  target: 'CAGL0J09328g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09020g',
                  target: 'CAGL0J09328g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03025g',
                  target: 'CAGL0J09328g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04191g',
                  target: 'CAGL0J09328g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11792g',
                  target: 'CAGL0J10846g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K05247g',
                  target: 'CAGL0J10846g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03377g',
                  target: 'CAGL0J10846g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09020g',
                  target: 'CAGL0J10846g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03025g',
                  target: 'CAGL0J10846g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04191g',
                  target: 'CAGL0J10846g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11132g',
                  target: 'CAGL0J10978g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0J11792g',
                  target: 'CAGL0J10978g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07111g',
                  target: 'CAGL0J10978g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03377g',
                  target: 'CAGL0J10978g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09020g',
                  target: 'CAGL0J10978g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04191g',
                  target: 'CAGL0J10978g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K07111g',
                  target: 'CAGL0J11132g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09020g',
                  target: 'CAGL0J11132g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03377g',
                  target: 'CAGL0J11792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09020g',
                  target: 'CAGL0J11792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04191g',
                  target: 'CAGL0J11792g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09020g',
                  target: 'CAGL0K00869g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K06061g',
                  target: 'CAGL0K01859g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09724g',
                  target: 'CAGL0K01859g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04510g',
                  target: 'CAGL0K01859g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10164g',
                  target: 'CAGL0K01859g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L13156g',
                  target: 'CAGL0K01859g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03377g',
                  target: 'CAGL0K05247g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04598g',
                  target: 'CAGL0K05247g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L07480g',
                  target: 'CAGL0K05247g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03025g',
                  target: 'CAGL0K05247g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M08184g',
                  target: 'CAGL0K05247g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09724g',
                  target: 'CAGL0K06061g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03846g',
                  target: 'CAGL0K06061g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04510g',
                  target: 'CAGL0K06061g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L13156g',
                  target: 'CAGL0K06061g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00770g',
                  target: 'CAGL0K06061g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06369g',
                  target: 'CAGL0K06061g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07722g',
                  target: 'CAGL0K06061g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09020g',
                  target: 'CAGL0K07111g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0K09372g',
                  target: 'CAGL0K07590g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00770g',
                  target: 'CAGL0K07590g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M01364g',
                  target: 'CAGL0K07590g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06963g',
                  target: 'CAGL0K07590g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03025g',
                  target: 'CAGL0K08668g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L00803g',
                  target: 'CAGL0K09372g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L01771g',
                  target: 'CAGL0K09372g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M01364g',
                  target: 'CAGL0K09372g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06963g',
                  target: 'CAGL0K09372g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04510g',
                  target: 'CAGL0K09724g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M00770g',
                  target: 'CAGL0K09724g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07722g',
                  target: 'CAGL0K09724g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L03135g',
                  target: 'CAGL0K12254g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06578g',
                  target: 'CAGL0K12254g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10362g',
                  target: 'CAGL0K12254g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12562g',
                  target: 'CAGL0K12254g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05665g',
                  target: 'CAGL0K12254g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07403g',
                  target: 'CAGL0K12254g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04598g',
                  target: 'CAGL0L00803g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09383g',
                  target: 'CAGL0L00803g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10362g',
                  target: 'CAGL0L00803g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04598g',
                  target: 'CAGL0L03135g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L06578g',
                  target: 'CAGL0L03135g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L07480g',
                  target: 'CAGL0L03135g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09383g',
                  target: 'CAGL0L03135g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10362g',
                  target: 'CAGL0L03135g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12562g',
                  target: 'CAGL0L03135g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05665g',
                  target: 'CAGL0L03135g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07403g',
                  target: 'CAGL0L03135g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M08184g',
                  target: 'CAGL0L03135g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09020g',
                  target: 'CAGL0L03377g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M03025g',
                  target: 'CAGL0L03377g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04191g',
                  target: 'CAGL0L03377g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L04510g',
                  target: 'CAGL0L03846g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06369g',
                  target: 'CAGL0L03846g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07722g',
                  target: 'CAGL0L03846g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L13156g',
                  target: 'CAGL0L04510g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06369g',
                  target: 'CAGL0L04510g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07722g',
                  target: 'CAGL0L04510g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L07480g',
                  target: 'CAGL0L04598g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L09383g',
                  target: 'CAGL0L04598g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10362g',
                  target: 'CAGL0L04598g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M08184g',
                  target: 'CAGL0L04598g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12562g',
                  target: 'CAGL0L06578g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07403g',
                  target: 'CAGL0L06578g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M05665g',
                  target: 'CAGL0L07480g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07403g',
                  target: 'CAGL0L07480g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M08184g',
                  target: 'CAGL0L07480g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M04191g',
                  target: 'CAGL0L09020g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L10362g',
                  target: 'CAGL0L09383g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12562g',
                  target: 'CAGL0L09383g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0L12562g',
                  target: 'CAGL0L10362g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07403g',
                  target: 'CAGL0L12562g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06369g',
                  target: 'CAGL0M03795g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07722g',
                  target: 'CAGL0M03795g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M06369g',
                  target: 'CAGL0M04873g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07403g',
                  target: 'CAGL0M05665g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M08184g',
                  target: 'CAGL0M05665g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M07722g',
                  target: 'CAGL0M06369g',
                  faveColor: '#595959',
                  strength: 100
                  },
                  classes: 'bezier'
  },
{
                  data: {
                  source: 'CAGL0M08184g',
                  target: 'CAGL0M07403g',
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
cy.$('#CAGL0A01716g').qtip({
                  content: "<h2>CAGL0A01716g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have nicotinamidase activity and role in chromatin silencing at rDNA, chromatin silencing at telomere, negative regulation of DNA amplification, replicative cell aging</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01716g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01716g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0A02145g').qtip({
                  content: "<h2>CAGL0A02145g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have actin filament binding activity, role in actin cortical patch localization, actin cytoskeleton organization, actin filament bundle assembly, actin filament organization, endocytosis and actin cortical patch localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02145g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02145g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0A04499g').qtip({
                  content: "<h2>CAGL0A04499g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have electron transfer activity, iron ion binding, zinc ion binding activity, role in peptidyl-diphthamide biosynthetic process from peptidyl-histidine, tRNA wobble uridine modification and cytoplasm, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A04499g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A04499g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0B02475g').qtip({
                  content: "<h2>CAGL0B02475g</h2><hr><p><b>Gene name</b> : PHO84</p><p><b>Description</b> : Ortholog(s) have inorganic phosphate transmembrane transporter activity, manganese ion transmembrane transporter activity, selenite:proton symporter activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02475g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02475g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0B03421g').qtip({
                  content: "<h2>CAGL0B03421g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription activator activity, RNA polymerase II-specific, RNA polymerase II proximal promoter sequence-specific DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B03421g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B03421g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0B03817g').qtip({
                  content: "<h2>CAGL0B03817g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytoplasm, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B03817g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B03817g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0B04213g').qtip({
                  content: "<h2>CAGL0B04213g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in positive regulation of glycerol transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B04213g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B04213g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0B04675g').qtip({
                  content: "<h2>CAGL0B04675g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA binding, endoribonuclease activity, ribosome binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B04675g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B04675g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C00495g').qtip({
                  content: "<h2>CAGL0C00495g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cyclin-dependent protein serine/threonine kinase activator activity, histone binding, protein kinase activator activity, protein-containing complex binding, ubiquitin binding, zinc ion binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C00495g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C00495g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C00539g').qtip({
                  content: "<h2>CAGL0C00539g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in positive regulation of (R)-carnitine transmembrane transport, positive regulation of polyamine transmembrane transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C00539g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C00539g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C00759g').qtip({
                  content: "<h2>CAGL0C00759g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have transcription coactivator activity and role in chromatin silencing at telomere, positive regulation of ribosomal protein gene transcription by RNA polymerase II</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C00759g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C00759g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C01287g').qtip({
                  content: "<h2>CAGL0C01287g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in DNA transport, cell redox homeostasis, positive regulation of protein serine/threonine kinase activity and mitochondrial outer membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C01287g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C01287g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0C03113g').qtip({
                  content: "<h2>CAGL0C03113g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA 7-methylguanosine cap binding, exoribonuclease activator activity, hydrolase activity, acting on acid anhydrides, in phosphorus-containing anhydrides, m7G(5')pppN diphosphatase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03113g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03113g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D04686g').qtip({
                  content: "<h2>CAGL0D04686g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have metalloendopeptidase activity and role in axial cellular bud site selection, cytogamy, peptide mating pheromone maturation involved in positive regulation of conjugation with cellular fusion</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D04686g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D04686g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0D06600g').qtip({
                  content: "<h2>CAGL0D06600g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have protein serine/threonine kinase activity, protein tyrosine kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D06600g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D06600g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E00737g').qtip({
                  content: "<h2>CAGL0E00737g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA binding, bending, double-stranded DNA binding, four-way junction DNA binding, sequence-specific DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E00737g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E00737g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E01243g').qtip({
                  content: "<h2>CAGL0E01243g</h2><hr><p><b>Gene name</b> : CTH2</p><p><b>Description</b> : Protein involved in cellular iron homeostasis; induced by Aft1p to reduce expression of iron-associated genes under iron starvation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01243g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01243g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E01991g').qtip({
                  content: "<h2>CAGL0E01991g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity, role in rRNA export from nucleus, ribosomal small subunit biogenesis and cytosolic small ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01991g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01991g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E03289g').qtip({
                  content: "<h2>CAGL0E03289g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA binding activity and role in ribosomal large subunit biogenesis, stress granule assembly, translational initiation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E03289g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E03289g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E04884g').qtip({
                  content: "<h2>CAGL0E04884g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription factor activity, RNA polymerase II-specific and RNA polymerase II activating transcription factor binding, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04884g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04884g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E05456g').qtip({
                  content: "<h2>CAGL0E05456g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YOR338W, C. albicans SC5314 : C2_09880C_A, C. dubliniensis CD36 : Cd36_23960, C. parapsilosis CDC317 : CPAR2_407140 and C. auris B8441 : B9J08_001012</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05456g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05456g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E05830g').qtip({
                  content: "<h2>CAGL0E05830g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have mRNA binding, ribosome binding activity and role in mitochondrial respiratory chain complex III assembly, positive regulation of mitochondrial translation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05830g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05830g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0E06116g').qtip({
                  content: "<h2>CAGL0E06116g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in positive regulation of transcription by RNA polymerase II and cytosol, nuclear chromatin, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E06116g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E06116g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F00605g').qtip({
                  content: "<h2>CAGL0F00605g</h2><hr><p><b>Gene name</b> : GLK1</p><p><b>Description</b> : Aldohexose specific glucokinase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00605g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00605g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F01045g').qtip({
                  content: "<h2>CAGL0F01045g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in rRNA export from nucleus</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01045g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01045g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F01265g').qtip({
                  content: "<h2>CAGL0F01265g</h2><hr><p><b>Gene name</b> : YAP7</p><p><b>Description</b> : bZIP domain-containing protein involved in regulation of nitric oxide detoxification</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01265g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01265g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F02101g').qtip({
                  content: "<h2>CAGL0F02101g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have peptidase activator activity, proteasome binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F02101g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F02101g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F03553g').qtip({
                  content: "<h2>CAGL0F03553g</h2><hr><p><b>Gene name</b> : DAP1</p><p><b>Description</b> : Putative heme-binding protein involved in regulation of cytochrome P450, Erg11p; required for growth under iron starvation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F03553g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F03553g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F06677g').qtip({
                  content: "<h2>CAGL0F06677g</h2><hr><p><b>Gene name</b> : GPA1</p><p><b>Description</b> : Ortholog(s) have G-protein beta-subunit binding, GTPase activity, guanyl nucleotide binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F06677g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F06677g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F07117g').qtip({
                  content: "<h2>CAGL0F07117g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative subunit of the heterotrimeric G protein; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F07117g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F07117g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F07865g').qtip({
                  content: "<h2>CAGL0F07865g</h2><hr><p><b>Gene name</b> : UPC2B</p><p><b>Description</b> : Putative Zn(2)-Cys(6) binuclear cluster transcriptional regulator of ergosterol biosynthesis</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F07865g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F07865g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0F08195g').qtip({
                  content: "<h2>CAGL0F08195g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription factor activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F08195g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F08195g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G02255g').qtip({
                  content: "<h2>CAGL0G02255g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have GTPase activity, ribosome binding activity and role in nonfunctional rRNA decay, nuclear-transcribed mRNA catabolic process, no-go decay, positive regulation of translation, ribosome disassembly</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G02255g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G02255g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G04499g').qtip({
                  content: "<h2>CAGL0G04499g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : SET4 and Saccharomyces cerevisiae S288C : YJL105W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G04499g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G04499g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G04763g').qtip({
                  content: "<h2>CAGL0G04763g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in termination of G protein-coupled receptor signaling pathway</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G04763g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G04763g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G05764g').qtip({
                  content: "<h2>CAGL0G05764g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted GTP binding, GTPase activity and role in intracellular protein transport, nucleocytoplasmic transport, protein transport, signal transduction, small GTPase mediated signal transduction</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G05764g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G05764g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0G08041g').qtip({
                  content: "<h2>CAGL0G08041g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have iron ion binding activity and role in positive regulation of translation, ribosomal large subunit biogenesis, ribosomal subunit export from nucleus, ribosome disassembly, translational initiation, translational termination</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G08041g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G08041g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H02959g').qtip({
                  content: "<h2>CAGL0H02959g</h2><hr><p><b>Gene name</b> : TOS8</p><p><b>Description</b> : Ortholog(s) have chromatin binding activity, role in filamentous growth and nuclear chromatin localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02959g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02959g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H03179g').qtip({
                  content: "<h2>CAGL0H03179g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have protein-containing complex binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H03179g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H03179g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H03487g').qtip({
                  content: "<h2>CAGL0H03487g</h2><hr><p><b>Gene name</b> : AFT1</p><p><b>Description</b> : Putative RNA polymerase II transcription factor, involved in regulation of iron acquisition genes; required for growth under iron depletion</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H03487g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H03487g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H03751g').qtip({
                  content: "<h2>CAGL0H03751g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription activator activity, RNA polymerase II-specific activity, role in positive regulation of transcription by RNA polymerase II and nuclear chromatin localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H03751g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H03751g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H07579g').qtip({
                  content: "<h2>CAGL0H07579g</h2><hr><p><b>Gene name</b> : HXK2</p><p><b>Description</b> : Putative hexokinase B</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H07579g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H07579g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0H08541g').qtip({
                  content: "<h2>CAGL0H08541g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA binding, bending activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H08541g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H08541g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I00814g').qtip({
                  content: "<h2>CAGL0I00814g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted structural constituent of ribosome activity, role in translational elongation and ribosome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I00814g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I00814g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I02486g').qtip({
                  content: "<h2>CAGL0I02486g</h2><hr><p><b>Gene name</b> : ENO1</p><p><b>Description</b> : Putative enolase I; protein abundance increased in azole resistant strain and in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02486g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02486g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I03366g').qtip({
                  content: "<h2>CAGL0I03366g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATP binding, ATPase activity, adenylate kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I03366g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I03366g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I04334g').qtip({
                  content: "<h2>CAGL0I04334g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have sphingosine-1-phosphate phosphatase activity, role in calcium-mediated signaling and endoplasmic reticulum localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04334g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04334g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I04730g').qtip({
                  content: "<h2>CAGL0I04730g</h2><hr><p><b>Gene name</b> : HMT1</p><p><b>Description</b> : Putative hnRNP arginine N-methyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04730g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04730g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I04906g').qtip({
                  content: "<h2>CAGL0I04906g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have endopeptidase activator activity and role in proteasomal ubiquitin-independent protein catabolic process, proteasome-mediated ubiquitin-dependent protein catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04906g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04906g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I05060g').qtip({
                  content: "<h2>CAGL0I05060g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have sequence-specific DNA binding activity and role in chromatin silencing at rDNA, chromatin silencing at telomere, regulation of transcription by RNA polymerase II, transfer RNA gene-mediated silencing</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I05060g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I05060g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I05390g').qtip({
                  content: "<h2>CAGL0I05390g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have protein kinase activity, protein serine/threonine kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I05390g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I05390g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I07249g').qtip({
                  content: "<h2>CAGL0I07249g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative GTPase-activating protein involved in cell wall and cytoskeleton homeostasis; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I07249g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I07249g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I09504g').qtip({
                  content: "<h2>CAGL0I09504g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have protein serine/threonine kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09504g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09504g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0I10472g').qtip({
                  content: "<h2>CAGL0I10472g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in inner mitochondrial membrane organization, mitochondrion inheritance, mitochondrion morphogenesis, negative regulation of proteolysis, protein folding, replicative cell aging</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10472g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10472g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J03806g').qtip({
                  content: "<h2>CAGL0J03806g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have transcription corepressor activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03806g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03806g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J04290g').qtip({
                  content: "<h2>CAGL0J04290g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have MAP kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04290g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04290g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J04576g').qtip({
                  content: "<h2>CAGL0J04576g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in peptidyl-diphthamide biosynthetic process from peptidyl-histidine and cytoplasm localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04576g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04576g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J06374g').qtip({
                  content: "<h2>CAGL0J06374g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted structural constituent of ribosome activity, role in translational elongation and ribosome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J06374g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J06374g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J07062g').qtip({
                  content: "<h2>CAGL0J07062g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have arginase activity, manganese ion binding, ornithine carbamoyltransferase inhibitor activity, zinc ion binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J07062g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J07062g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J07678g').qtip({
                  content: "<h2>CAGL0J07678g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ribosomal small subunit binding, translation initiation factor activity, translation initiation factor binding activity and role in formation of translation preinitiation complex, maintenance of translational fidelity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J07678g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J07678g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J09328g').qtip({
                  content: "<h2>CAGL0J09328g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cyclin-dependent protein serine/threonine kinase regulator activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09328g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09328g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J10846g').qtip({
                  content: "<h2>CAGL0J10846g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cyclin-dependent protein serine/threonine kinase regulator activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J10846g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J10846g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J10978g').qtip({
                  content: "<h2>CAGL0J10978g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have GTPase activator activity, Rho GTPase binding, phosphatidylinositol-4,5-bisphosphate binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J10978g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J10978g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J11132g').qtip({
                  content: "<h2>CAGL0J11132g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in pheromone-dependent signal transduction involved in conjugation with cellular fusion and membrane raft, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J11132g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J11132g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0J11792g').qtip({
                  content: "<h2>CAGL0J11792g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted RNA polymerase I CORE element sequence-specific DNA binding, RNA polymerase I general transcription initiation factor activity and role in transcription initiation from RNA polymerase I promoter</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J11792g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J11792g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K00869g').qtip({
                  content: "<h2>CAGL0K00869g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted ubiquitin binding activity, role in endosome transport via multivesicular body sorting pathway and ESCRT I complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K00869g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K00869g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K01859g').qtip({
                  content: "<h2>CAGL0K01859g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have histone-glutamine methyltransferase activity, mRNA binding, rRNA methyltransferase activity and role in box C/D snoRNA 3'-end processing, histone glutamine methylation, rRNA methylation, rRNA processing, snoRNA processing</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K01859g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K01859g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K05247g').qtip({
                  content: "<h2>CAGL0K05247g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ubiquitin protein ligase binding activity, role in fungal-type cell wall organization, regulation of transcription by RNA polymerase II and nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K05247g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K05247g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K06061g').qtip({
                  content: "<h2>CAGL0K06061g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K06061g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K06061g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K07111g').qtip({
                  content: "<h2>CAGL0K07111g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have microtubule binding, microtubule plus-end binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07111g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07111g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K07590g').qtip({
                  content: "<h2>CAGL0K07590g</h2><hr><p><b>Gene name</b> : MYO3</p><p><b>Description</b> : Putative myosin</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07590g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07590g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K08668g').qtip({
                  content: "<h2>CAGL0K08668g</h2><hr><p><b>Gene name</b> : MET28</p><p><b>Description</b> : bZIP domain-containing protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08668g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08668g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K08756g').qtip({
                  content: "<h2>CAGL0K08756g</h2><hr><p><b>Gene name</b> : AP5</p><p><b>Description</b> : bZIP domain-containing protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08756g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08756g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K09372g').qtip({
                  content: "<h2>CAGL0K09372g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription repressor activity, RNA polymerase II-specific, RNA polymerase II proximal promoter sequence-specific DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K09372g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K09372g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K09724g').qtip({
                  content: "<h2>CAGL0K09724g</h2><hr><p><b>Gene name</b> : FPR1</p><p><b>Description</b> : Peptidyl-prolyl cis-trans isomerase; expression upregulated in biofilm vs planktonic cell culture</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K09724g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K09724g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0K12254g').qtip({
                  content: "<h2>CAGL0K12254g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in negative regulation of gluconeogenesis, proteasome-mediated ubiquitin-dependent protein catabolic process, protein catabolic process in the vacuole, protein targeting to vacuole</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K12254g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K12254g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L00803g').qtip({
                  content: "<h2>CAGL0L00803g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in regulation of glycogen biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L00803g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L00803g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L01771g').qtip({
                  content: "<h2>CAGL0L01771g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription factor activity, role in positive regulation of pseudohyphal growth, positive regulation of transcription by RNA polymerase II and nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L01771g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L01771g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L03135g').qtip({
                  content: "<h2>CAGL0L03135g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative phospholipase D; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03135g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03135g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L03377g').qtip({
                  content: "<h2>CAGL0L03377g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription activator activity, RNA polymerase II-specific, RNA polymerase II proximal promoter sequence-specific DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03377g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03377g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L03846g').qtip({
                  content: "<h2>CAGL0L03846g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA helicase activity, RNA-dependent ATPase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03846g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03846g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L04510g').qtip({
                  content: "<h2>CAGL0L04510g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L04510g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L04510g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L04598g').qtip({
                  content: "<h2>CAGL0L04598g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA 7-methylguanosine cap binding, m7G(5')pppN diphosphatase activity, role in cellular response to starvation, deadenylation-dependent decapping of nuclear-transcribed mRNA and P-body, cytoplasm, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L04598g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L04598g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L06578g').qtip({
                  content: "<h2>CAGL0L06578g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ubiquitin ligase activator activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06578g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06578g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L06776g').qtip({
                  content: "<h2>CAGL0L06776g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted DNA-binding transcription factor activity, sequence-specific DNA binding, zinc ion binding activity and role in regulation of transcription, DNA-templated</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06776g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06776g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L07480g').qtip({
                  content: "<h2>CAGL0L07480g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription factor activity, double-stranded DNA binding, sequence-specific DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L07480g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L07480g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L09020g').qtip({
                  content: "<h2>CAGL0L09020g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ATP export, carbon catabolite repression of transcription from RNA polymerase II promoter by glucose, cellular response to alkaline pH and cellular response to lithium ion, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L09020g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L09020g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L09383g').qtip({
                  content: "<h2>CAGL0L09383g</h2><hr><p><b>Gene name</b> : SUT2</p><p><b>Description</b> : Ortholog(s) have role in negative regulation of filamentous growth of a population of unicellular organisms in response to starvation by negative regulation of transcription from RNA polymerase II promoter, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L09383g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L09383g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L10164g').qtip({
                  content: "<h2>CAGL0L10164g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in translational termination and nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10164g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10164g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L10362g').qtip({
                  content: "<h2>CAGL0L10362g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YOR062C and Saccharomyces cerevisiae S288C : YOR062C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10362g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10362g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L11990g').qtip({
                  content: "<h2>CAGL0L11990g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase II activating transcription factor binding, disulfide oxidoreductase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L11990g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L11990g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L12562g').qtip({
                  content: "<h2>CAGL0L12562g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription factor activity, RNA polymerase II-specific, proximal promoter sequence-specific DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L12562g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L12562g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0L13156g').qtip({
                  content: "<h2>CAGL0L13156g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have enzyme inhibitor activity, role in ubiquitin recycling and endosome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L13156g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L13156g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M00770g').qtip({
                  content: "<h2>CAGL0M00770g</h2><hr><p><b>Gene name</b> : SIR3</p><p><b>Description</b> : Protein involved in subtelomeric silencing; mutants display increased colonization of the mouse kidney relative to the wild-type strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M00770g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M00770g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M01364g').qtip({
                  content: "<h2>CAGL0M01364g</h2><hr><p><b>Gene name</b> : CBF3D</p><p><b>Description</b> : Centromere binding factor 3d; kinetochore protein with homology to human SKP1</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M01364g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M01364g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M03025g').qtip({
                  content: "<h2>CAGL0M03025g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription activator activity, RNA polymerase II-specific, DNA-binding transcription factor activity, RNA polymerase II proximal promoter sequence-specific DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M03025g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M03025g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M03795g').qtip({
                  content: "<h2>CAGL0M03795g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted nucleic acid binding, nucleotide binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M03795g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M03795g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M04191g').qtip({
                  content: "<h2>CAGL0M04191g</h2><hr><p><b>Gene name</b> : YPS1</p><p><b>Description</b> : Yapsin family aspartic protease; predicted GPI-anchor; complements cell wall defect phenotypes of S. cerevisiae yps1 mutant; regulation of pH homeostasis under acid conditions; induced by high temperature, Slt1- and Crz1p-dependent</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M04191g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M04191g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M04873g').qtip({
                  content: "<h2>CAGL0M04873g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in rRNA export from nucleus and cell surface localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M04873g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M04873g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M05665g').qtip({
                  content: "<h2>CAGL0M05665g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have endopeptidase inhibitor activity, role in regulation of proteolysis, vacuole fusion, non-autophagic and fungal-type vacuole localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M05665g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M05665g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M06369g').qtip({
                  content: "<h2>CAGL0M06369g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in regulation of cytoplasmic translational fidelity, tRNA wobble base 5-methoxycarbonylmethyl-2-thiouridinylation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M06369g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M06369g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M06963g').qtip({
                  content: "<h2>CAGL0M06963g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in tRNA export from nucleus and cytosol localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M06963g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M06963g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M07403g').qtip({
                  content: "<h2>CAGL0M07403g</h2><hr><p><b>Gene name</b> : OAZ1</p><p><b>Description</b> : Ortholog(s) have ornithine decarboxylase inhibitor activity and role in negative regulation of translational frameshifting, regulation of proteasomal protein catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M07403g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M07403g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M07722g').qtip({
                  content: "<h2>CAGL0M07722g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cytoplasmic translational initiation and cytoplasmic stress granule, eukaryotic translation initiation factor 3 complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M07722g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M07722g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M08184g').qtip({
                  content: "<h2>CAGL0M08184g</h2><hr><p><b>Gene name</b> : STE3</p><p><b>Description</b> : Putative a-factor pheromone receptor</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M08184g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M08184g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
                  },
                  style: {
                  classes: 'qtip-bootstrap',
                  tip: {
                  width: 16,
                  height: 8
                  }
                  }
  });
cy.$('#CAGL0M11902g').qtip({
                  content: "<h2>CAGL0M11902g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : FUN19 and Saccharomyces cerevisiae S288C : YAL034C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M11902g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M11902g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
