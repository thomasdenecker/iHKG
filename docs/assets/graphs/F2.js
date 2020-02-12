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
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A01716g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have nicotinamidase activity and role in chromatin silencing at rDNA, chromatin silencing at telomere, negative regulation of DNA amplification, replicative cell aging</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01716g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01716g'  target='_blank'> Link to GRYC</a>",
                  x : 1.24252710107678,
                  y : 1.06378867713437
                  },
                  position : {
                  'x' : 12.4252710107678,
                  'y' : 10.6378867713437
                  },
  },
{
                  data: {
                  id: 'CAGL0A02145g',
                  name: 'CAGL0A02145g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0A02145g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have actin filament binding activity, role in actin cortical patch localization, actin cytoskeleton organization, actin filament bundle assembly, actin filament organization, endocytosis and actin cortical patch localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02145g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02145g'  target='_blank'> Link to GRYC</a>",
                  x : -3.26184313853493,
                  y : 3.29834301017376
                  },
                  position : {
                  'x' : -32.6184313853493,
                  'y' : 32.9834301017376
                  },
  },
{
                  data: {
                  id: 'CAGL0A04499g',
                  name: 'CAGL0A04499g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0A04499g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have electron transfer activity, iron ion binding, zinc ion binding activity, role in peptidyl-diphthamide biosynthetic process from peptidyl-histidine, tRNA wobble uridine modification and cytoplasm, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A04499g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A04499g'  target='_blank'> Link to GRYC</a>",
                  x : 2.92823904638593,
                  y : -0.356906790478873
                  },
                  position : {
                  'x' : 29.2823904638593,
                  'y' : -3.56906790478873
                  },
  },
{
                  data: {
                  id: 'CAGL0B02475g',
                  name: 'CAGL0B02475g',
                  gene: 'PHO84',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0B02475g</h2><hr><p><b>Gene name</b> : PHO84</p><p><b>Description</b> : Ortholog(s) have inorganic phosphate transmembrane transporter activity, manganese ion transmembrane transporter activity, selenite:proton symporter activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02475g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02475g'  target='_blank'> Link to GRYC</a>",
                  x : 9.03790658375892,
                  y : 0.000285390065938682
                  },
                  position : {
                  'x' : 90.3790658375892,
                  'y' : 0.00285390065938682
                  },
  },
{
                  data: {
                  id: 'CAGL0B03421g',
                  name: 'CAGL0B03421g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0B03421g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription activator activity, RNA polymerase II-specific, RNA polymerase II proximal promoter sequence-specific DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B03421g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B03421g'  target='_blank'> Link to GRYC</a>",
                  x : 2.709668630656,
                  y : 1.31136364421627
                  },
                  position : {
                  'x' : 27.09668630656,
                  'y' : 13.1136364421627
                  },
  },
{
                  data: {
                  id: 'CAGL0B03817g',
                  name: 'CAGL0B03817g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B03817g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cytoplasm, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B03817g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B03817g'  target='_blank'> Link to GRYC</a>",
                  x : -0.204016052263324,
                  y : 3.86203697239294
                  },
                  position : {
                  'x' : -2.04016052263324,
                  'y' : 38.6203697239294
                  },
  },
{
                  data: {
                  id: 'CAGL0B04213g',
                  name: 'CAGL0B04213g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0B04213g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in positive regulation of glycerol transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B04213g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B04213g'  target='_blank'> Link to GRYC</a>",
                  x : -7.75244943909415,
                  y : 2.36089313963238
                  },
                  position : {
                  'x' : -77.5244943909415,
                  'y' : 23.6089313963238
                  },
  },
{
                  data: {
                  id: 'CAGL0B04675g',
                  name: 'CAGL0B04675g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#66ff66',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0B04675g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA binding, endoribonuclease activity, ribosome binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B04675g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B04675g'  target='_blank'> Link to GRYC</a>",
                  x : 8.61628404491853,
                  y : 1.99944943102162
                  },
                  position : {
                  'x' : 86.1628404491853,
                  'y' : 19.9944943102162
                  },
  },
{
                  data: {
                  id: 'CAGL0C00495g',
                  name: 'CAGL0C00495g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C00495g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cyclin-dependent protein serine/threonine kinase activator activity, histone binding, protein kinase activator activity, protein-containing complex binding, ubiquitin binding, zinc ion binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C00495g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C00495g'  target='_blank'> Link to GRYC</a>",
                  x : 3.84967820836823,
                  y : -3.49050152091367
                  },
                  position : {
                  'x' : 38.4967820836823,
                  'y' : -34.9050152091367
                  },
  },
{
                  data: {
                  id: 'CAGL0C00539g',
                  name: 'CAGL0C00539g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C00539g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in positive regulation of (R)-carnitine transmembrane transport, positive regulation of polyamine transmembrane transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C00539g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C00539g'  target='_blank'> Link to GRYC</a>",
                  x : 5.19579857484536,
                  y : -2.1485328808306
                  },
                  position : {
                  'x' : 51.9579857484536,
                  'y' : -21.485328808306
                  },
  },
{
                  data: {
                  id: 'CAGL0C00759g',
                  name: 'CAGL0C00759g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C00759g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have transcription coactivator activity and role in chromatin silencing at telomere, positive regulation of ribosomal protein gene transcription by RNA polymerase II</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C00759g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C00759g'  target='_blank'> Link to GRYC</a>",
                  x : 2.09001559943263,
                  y : -3.43276103420662
                  },
                  position : {
                  'x' : 20.9001559943263,
                  'y' : -34.3276103420662
                  },
  },
{
                  data: {
                  id: 'CAGL0C01287g',
                  name: 'CAGL0C01287g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C01287g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in DNA transport, cell redox homeostasis, positive regulation of protein serine/threonine kinase activity and mitochondrial outer membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C01287g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C01287g'  target='_blank'> Link to GRYC</a>",
                  x : 2.10102599482767,
                  y : -5.61541377782943
                  },
                  position : {
                  'x' : 21.0102599482767,
                  'y' : -56.1541377782943
                  },
  },
{
                  data: {
                  id: 'CAGL0C03113g',
                  name: 'CAGL0C03113g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0C03113g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA 7-methylguanosine cap binding, exoribonuclease activator activity, hydrolase activity, acting on acid anhydrides, in phosphorus-containing anhydrides, m7G(5')pppN diphosphatase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03113g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03113g'  target='_blank'> Link to GRYC</a>",
                  x : -0.990671758380064,
                  y : 3.18713783726082
                  },
                  position : {
                  'x' : -9.90671758380064,
                  'y' : 31.8713783726082
                  },
  },
{
                  data: {
                  id: 'CAGL0D04686g',
                  name: 'CAGL0D04686g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D04686g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have metalloendopeptidase activity and role in axial cellular bud site selection, cytogamy, peptide mating pheromone maturation involved in positive regulation of conjugation with cellular fusion</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D04686g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D04686g'  target='_blank'> Link to GRYC</a>",
                  x : -1.06911218143918,
                  y : 2.36157845935555
                  },
                  position : {
                  'x' : -10.6911218143918,
                  'y' : 23.6157845935555
                  },
  },
{
                  data: {
                  id: 'CAGL0D06600g',
                  name: 'CAGL0D06600g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0D06600g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have protein serine/threonine kinase activity, protein tyrosine kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0D06600g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0D06600g'  target='_blank'> Link to GRYC</a>",
                  x : -1.35535092707128,
                  y : 1.61292623986011
                  },
                  position : {
                  'x' : -13.5535092707128,
                  'y' : 16.1292623986011
                  },
  },
{
                  data: {
                  id: 'CAGL0E00737g',
                  name: 'CAGL0E00737g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E00737g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA binding, bending, double-stranded DNA binding, four-way junction DNA binding, sequence-specific DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E00737g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E00737g'  target='_blank'> Link to GRYC</a>",
                  x : -6.07307004413609,
                  y : 0.615802622892108
                  },
                  position : {
                  'x' : -60.7307004413609,
                  'y' : 6.15802622892108
                  },
  },
{
                  data: {
                  id: 'CAGL0E01243g',
                  name: 'CAGL0E01243g',
                  gene: 'CTH2',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E01243g</h2><hr><p><b>Gene name</b> : CTH2</p><p><b>Description</b> : Protein involved in cellular iron homeostasis; induced by Aft1p to reduce expression of iron-associated genes under iron starvation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01243g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01243g'  target='_blank'> Link to GRYC</a>",
                  x : -0.37620847988787,
                  y : 2.56673766157041
                  },
                  position : {
                  'x' : -3.7620847988787,
                  'y' : 25.6673766157041
                  },
  },
{
                  data: {
                  id: 'CAGL0E01991g',
                  name: 'CAGL0E01991g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E01991g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity, role in rRNA export from nucleus, ribosomal small subunit biogenesis and cytosolic small ribosomal subunit localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01991g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01991g'  target='_blank'> Link to GRYC</a>",
                  x : 3.60955278575047,
                  y : -4.59756329021389
                  },
                  position : {
                  'x' : 36.0955278575047,
                  'y' : -45.9756329021389
                  },
  },
{
                  data: {
                  id: 'CAGL0E03289g',
                  name: 'CAGL0E03289g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E03289g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA binding activity and role in ribosomal large subunit biogenesis, stress granule assembly, translational initiation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E03289g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E03289g'  target='_blank'> Link to GRYC</a>",
                  x : 2.69159156717747,
                  y : -6.08683873738293
                  },
                  position : {
                  'x' : 26.9159156717747,
                  'y' : -60.8683873738293
                  },
  },
{
                  data: {
                  id: 'CAGL0E04884g',
                  name: 'CAGL0E04884g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E04884g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription factor activity, RNA polymerase II-specific and RNA polymerase II activating transcription factor binding, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04884g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04884g'  target='_blank'> Link to GRYC</a>",
                  x : -6.03469635741963,
                  y : 3.00519549587123
                  },
                  position : {
                  'x' : -60.3469635741963,
                  'y' : 30.0519549587123
                  },
  },
{
                  data: {
                  id: 'CAGL0E05456g',
                  name: 'CAGL0E05456g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E05456g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YOR338W, C. albicans SC5314 : C2_09880C_A, C. dubliniensis CD36 : Cd36_23960, C. parapsilosis CDC317 : CPAR2_407140 and C. auris B8441 : B9J08_001012</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05456g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05456g'  target='_blank'> Link to GRYC</a>",
                  x : -3.03202925158445,
                  y : 2.92765034994185
                  },
                  position : {
                  'x' : -30.3202925158445,
                  'y' : 29.2765034994185
                  },
  },
{
                  data: {
                  id: 'CAGL0E05830g',
                  name: 'CAGL0E05830g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0E05830g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have mRNA binding, ribosome binding activity and role in mitochondrial respiratory chain complex III assembly, positive regulation of mitochondrial translation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E05830g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E05830g'  target='_blank'> Link to GRYC</a>",
                  x : -7.03810731829974,
                  y : -1.23180091974746
                  },
                  position : {
                  'x' : -70.3810731829975,
                  'y' : -12.3180091974746
                  },
  },
{
                  data: {
                  id: 'CAGL0E06116g',
                  name: 'CAGL0E06116g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0E06116g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in positive regulation of transcription by RNA polymerase II and cytosol, nuclear chromatin, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E06116g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E06116g'  target='_blank'> Link to GRYC</a>",
                  x : 4.00364156975214,
                  y : 0.799020187375515
                  },
                  position : {
                  'x' : 40.0364156975214,
                  'y' : 7.99020187375515
                  },
  },
{
                  data: {
                  id: 'CAGL0F00605g',
                  name: 'CAGL0F00605g',
                  gene: 'GLK1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F00605g</h2><hr><p><b>Gene name</b> : GLK1</p><p><b>Description</b> : Aldohexose specific glucokinase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00605g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00605g'  target='_blank'> Link to GRYC</a>",
                  x : -3.35791571480203,
                  y : -0.607564287469738
                  },
                  position : {
                  'x' : -33.5791571480203,
                  'y' : -6.07564287469738
                  },
  },
{
                  data: {
                  id: 'CAGL0F01045g',
                  name: 'CAGL0F01045g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F01045g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in rRNA export from nucleus</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01045g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01045g'  target='_blank'> Link to GRYC</a>",
                  x : 3.16123288766718,
                  y : -5.63020980115643
                  },
                  position : {
                  'x' : 31.6123288766718,
                  'y' : -56.3020980115643
                  },
  },
{
                  data: {
                  id: 'CAGL0F01265g',
                  name: 'CAGL0F01265g',
                  gene: 'YAP7',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F01265g</h2><hr><p><b>Gene name</b> : YAP7</p><p><b>Description</b> : bZIP domain-containing protein involved in regulation of nitric oxide detoxification</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01265g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01265g'  target='_blank'> Link to GRYC</a>",
                  x : 3.72525013495343,
                  y : -1.49128436988001
                  },
                  position : {
                  'x' : 37.2525013495343,
                  'y' : -14.9128436988001
                  },
  },
{
                  data: {
                  id: 'CAGL0F02101g',
                  name: 'CAGL0F02101g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F02101g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have peptidase activator activity, proteasome binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F02101g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F02101g'  target='_blank'> Link to GRYC</a>",
                  x : -0.122154115160912,
                  y : 2.57244190273159
                  },
                  position : {
                  'x' : -1.22154115160912,
                  'y' : 25.7244190273159
                  },
  },
{
                  data: {
                  id: 'CAGL0F03553g',
                  name: 'CAGL0F03553g',
                  gene: 'DAP1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F03553g</h2><hr><p><b>Gene name</b> : DAP1</p><p><b>Description</b> : Putative heme-binding protein involved in regulation of cytochrome P450, Erg11p; required for growth under iron starvation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F03553g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F03553g'  target='_blank'> Link to GRYC</a>",
                  x : 2.9403626741805,
                  y : -2.42989619067502
                  },
                  position : {
                  'x' : 29.403626741805,
                  'y' : -24.2989619067502
                  },
  },
{
                  data: {
                  id: 'CAGL0F06677g',
                  name: 'CAGL0F06677g',
                  gene: 'GPA1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F06677g</h2><hr><p><b>Gene name</b> : GPA1</p><p><b>Description</b> : Ortholog(s) have G-protein beta-subunit binding, GTPase activity, guanyl nucleotide binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F06677g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F06677g'  target='_blank'> Link to GRYC</a>",
                  x : -5.8592056719372,
                  y : -6.91142597257654
                  },
                  position : {
                  'x' : -58.592056719372,
                  'y' : -69.1142597257654
                  },
  },
{
                  data: {
                  id: 'CAGL0F07117g',
                  name: 'CAGL0F07117g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F07117g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative subunit of the heterotrimeric G protein; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F07117g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F07117g'  target='_blank'> Link to GRYC</a>",
                  x : -3.32800338460341,
                  y : 3.9068464654839
                  },
                  position : {
                  'x' : -33.2800338460341,
                  'y' : 39.068464654839
                  },
  },
{
                  data: {
                  id: 'CAGL0F07865g',
                  name: 'CAGL0F07865g',
                  gene: 'UPC2B',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0F07865g</h2><hr><p><b>Gene name</b> : UPC2B</p><p><b>Description</b> : Putative Zn(2)-Cys(6) binuclear cluster transcriptional regulator of ergosterol biosynthesis</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F07865g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F07865g'  target='_blank'> Link to GRYC</a>",
                  x : 1.60421113150839,
                  y : 4.97514403688546
                  },
                  position : {
                  'x' : 16.0421113150839,
                  'y' : 49.7514403688546
                  },
  },
{
                  data: {
                  id: 'CAGL0F08195g',
                  name: 'CAGL0F08195g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffffff',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0F08195g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription factor activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F08195g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F08195g'  target='_blank'> Link to GRYC</a>",
                  x : 4.7179387082603,
                  y : 6.99690972682926
                  },
                  position : {
                  'x' : 47.179387082603,
                  'y' : 69.9690972682926
                  },
  },
{
                  data: {
                  id: 'CAGL0G02255g',
                  name: 'CAGL0G02255g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G02255g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have GTPase activity, ribosome binding activity and role in nonfunctional rRNA decay, nuclear-transcribed mRNA catabolic process, no-go decay, positive regulation of translation, ribosome disassembly</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G02255g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G02255g'  target='_blank'> Link to GRYC</a>",
                  x : 1.43844720144832,
                  y : 2.94396765722412
                  },
                  position : {
                  'x' : 14.3844720144832,
                  'y' : 29.4396765722412
                  },
  },
{
                  data: {
                  id: 'CAGL0G04499g',
                  name: 'CAGL0G04499g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G04499g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : SET4 and Saccharomyces cerevisiae S288C : YJL105W</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G04499g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G04499g'  target='_blank'> Link to GRYC</a>",
                  x : 2.4334239395349,
                  y : -2.22887746992839
                  },
                  position : {
                  'x' : 24.334239395349,
                  'y' : -22.2887746992839
                  },
  },
{
                  data: {
                  id: 'CAGL0G04763g',
                  name: 'CAGL0G04763g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G04763g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in termination of G protein-coupled receptor signaling pathway</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G04763g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G04763g'  target='_blank'> Link to GRYC</a>",
                  x : -1.39908671808157,
                  y : 3.19765711210361
                  },
                  position : {
                  'x' : -13.9908671808157,
                  'y' : 31.9765711210361
                  },
  },
{
                  data: {
                  id: 'CAGL0G05764g',
                  name: 'CAGL0G05764g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G05764g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted GTP binding, GTPase activity and role in intracellular protein transport, nucleocytoplasmic transport, protein transport, signal transduction, small GTPase mediated signal transduction</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G05764g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G05764g'  target='_blank'> Link to GRYC</a>",
                  x : -4.95470973512919,
                  y : 1.79686351643648
                  },
                  position : {
                  'x' : -49.5470973512919,
                  'y' : 17.9686351643648
                  },
  },
{
                  data: {
                  id: 'CAGL0G08041g',
                  name: 'CAGL0G08041g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0G08041g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have iron ion binding activity and role in positive regulation of translation, ribosomal large subunit biogenesis, ribosomal subunit export from nucleus, ribosome disassembly, translational initiation, translational termination</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G08041g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G08041g'  target='_blank'> Link to GRYC</a>",
                  x : 1.61309439222355,
                  y : -8.06981127268438
                  },
                  position : {
                  'x' : 16.1309439222355,
                  'y' : -80.6981127268438
                  },
  },
{
                  data: {
                  id: 'CAGL0H02959g',
                  name: 'CAGL0H02959g',
                  gene: 'TOS8',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H02959g</h2><hr><p><b>Gene name</b> : TOS8</p><p><b>Description</b> : Ortholog(s) have chromatin binding activity, role in filamentous growth and nuclear chromatin localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02959g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02959g'  target='_blank'> Link to GRYC</a>",
                  x : 4.71491392120633,
                  y : -0.325925991379494
                  },
                  position : {
                  'x' : 47.1491392120633,
                  'y' : -3.25925991379494
                  },
  },
{
                  data: {
                  id: 'CAGL0H03179g',
                  name: 'CAGL0H03179g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H03179g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have protein-containing complex binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H03179g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H03179g'  target='_blank'> Link to GRYC</a>",
                  x : -5.35897101820166,
                  y : -0.448386292627382
                  },
                  position : {
                  'x' : -53.5897101820166,
                  'y' : -4.48386292627382
                  },
  },
{
                  data: {
                  id: 'CAGL0H03487g',
                  name: 'CAGL0H03487g',
                  gene: 'AFT1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0H03487g</h2><hr><p><b>Gene name</b> : AFT1</p><p><b>Description</b> : Putative RNA polymerase II transcription factor, involved in regulation of iron acquisition genes; required for growth under iron depletion</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H03487g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H03487g'  target='_blank'> Link to GRYC</a>",
                  x : 5.52901347692992,
                  y : 1.14468054806534
                  },
                  position : {
                  'x' : 55.2901347692993,
                  'y' : 11.4468054806534
                  },
  },
{
                  data: {
                  id: 'CAGL0H03751g',
                  name: 'CAGL0H03751g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H03751g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription activator activity, RNA polymerase II-specific activity, role in positive regulation of transcription by RNA polymerase II and nuclear chromatin localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H03751g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H03751g'  target='_blank'> Link to GRYC</a>",
                  x : 4.12907870917174,
                  y : -3.82204220652638
                  },
                  position : {
                  'x' : 41.2907870917174,
                  'y' : -38.2204220652638
                  },
  },
{
                  data: {
                  id: 'CAGL0H07579g',
                  name: 'CAGL0H07579g',
                  gene: 'HXK2',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H07579g</h2><hr><p><b>Gene name</b> : HXK2</p><p><b>Description</b> : Putative hexokinase B</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H07579g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H07579g'  target='_blank'> Link to GRYC</a>",
                  x : 1.50116464523028,
                  y : -7.07026960449916
                  },
                  position : {
                  'x' : 15.0116464523028,
                  'y' : -70.7026960449916
                  },
  },
{
                  data: {
                  id: 'CAGL0H08541g',
                  name: 'CAGL0H08541g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0H08541g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA binding, bending activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H08541g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H08541g'  target='_blank'> Link to GRYC</a>",
                  x : -2.32833229071174,
                  y : 2.02763513912371
                  },
                  position : {
                  'x' : -23.2833229071175,
                  'y' : 20.2763513912371
                  },
  },
{
                  data: {
                  id: 'CAGL0I00814g',
                  name: 'CAGL0I00814g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I00814g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted structural constituent of ribosome activity, role in translational elongation and ribosome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I00814g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I00814g'  target='_blank'> Link to GRYC</a>",
                  x : 2.69764325627231,
                  y : -4.55951369260877
                  },
                  position : {
                  'x' : 26.9764325627231,
                  'y' : -45.5951369260877
                  },
  },
{
                  data: {
                  id: 'CAGL0I02486g',
                  name: 'CAGL0I02486g',
                  gene: 'ENO1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I02486g</h2><hr><p><b>Gene name</b> : ENO1</p><p><b>Description</b> : Putative enolase I; protein abundance increased in azole resistant strain and in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02486g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02486g'  target='_blank'> Link to GRYC</a>",
                  x : -5.65062041690529,
                  y : -1.09270376347156
                  },
                  position : {
                  'x' : -56.5062041690529,
                  'y' : -10.9270376347156
                  },
  },
{
                  data: {
                  id: 'CAGL0I03366g',
                  name: 'CAGL0I03366g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I03366g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ATP binding, ATPase activity, adenylate kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I03366g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I03366g'  target='_blank'> Link to GRYC</a>",
                  x : 2.92896116441158,
                  y : -3.52247215910654
                  },
                  position : {
                  'x' : 29.2896116441158,
                  'y' : -35.2247215910654
                  },
  },
{
                  data: {
                  id: 'CAGL0I04334g',
                  name: 'CAGL0I04334g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I04334g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have sphingosine-1-phosphate phosphatase activity, role in calcium-mediated signaling and endoplasmic reticulum localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04334g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04334g'  target='_blank'> Link to GRYC</a>",
                  x : 4.1892901483195,
                  y : -3.21863924976072
                  },
                  position : {
                  'x' : 41.892901483195,
                  'y' : -32.1863924976072
                  },
  },
{
                  data: {
                  id: 'CAGL0I04730g',
                  name: 'CAGL0I04730g',
                  gene: 'HMT1',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#009900',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I04730g</h2><hr><p><b>Gene name</b> : HMT1</p><p><b>Description</b> : Putative hnRNP arginine N-methyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04730g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04730g'  target='_blank'> Link to GRYC</a>",
                  x : 1.70592030156874,
                  y : -6.0526538217725
                  },
                  position : {
                  'x' : 17.0592030156874,
                  'y' : -60.526538217725
                  },
  },
{
                  data: {
                  id: 'CAGL0I04906g',
                  name: 'CAGL0I04906g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I04906g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have endopeptidase activator activity and role in proteasomal ubiquitin-independent protein catabolic process, proteasome-mediated ubiquitin-dependent protein catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04906g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04906g'  target='_blank'> Link to GRYC</a>",
                  x : -6.55921587674979,
                  y : -1.25806646803501
                  },
                  position : {
                  'x' : -65.5921587674979,
                  'y' : -12.5806646803501
                  },
  },
{
                  data: {
                  id: 'CAGL0I05060g',
                  name: 'CAGL0I05060g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0I05060g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have sequence-specific DNA binding activity and role in chromatin silencing at rDNA, chromatin silencing at telomere, regulation of transcription by RNA polymerase II, transfer RNA gene-mediated silencing</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I05060g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I05060g'  target='_blank'> Link to GRYC</a>",
                  x : 2.48049067431053,
                  y : 0.749358084731605
                  },
                  position : {
                  'x' : 24.8049067431053,
                  'y' : 7.49358084731605
                  },
  },
{
                  data: {
                  id: 'CAGL0I05390g',
                  name: 'CAGL0I05390g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I05390g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have protein kinase activity, protein serine/threonine kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I05390g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I05390g'  target='_blank'> Link to GRYC</a>",
                  x : 0.819460410515244,
                  y : 2.26812222274985
                  },
                  position : {
                  'x' : 8.19460410515244,
                  'y' : 22.6812222274985
                  },
  },
{
                  data: {
                  id: 'CAGL0I07249g',
                  name: 'CAGL0I07249g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffffff',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I07249g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative GTPase-activating protein involved in cell wall and cytoskeleton homeostasis; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I07249g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I07249g'  target='_blank'> Link to GRYC</a>",
                  x : 2.99360211224008,
                  y : 7.9096709416528
                  },
                  position : {
                  'x' : 29.9360211224008,
                  'y' : 79.096709416528
                  },
  },
{
                  data: {
                  id: 'CAGL0I09504g',
                  name: 'CAGL0I09504g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I09504g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have protein serine/threonine kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I09504g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I09504g'  target='_blank'> Link to GRYC</a>",
                  x : 0.418538518190739,
                  y : 1.78266920799575
                  },
                  position : {
                  'x' : 4.18538518190739,
                  'y' : 17.8266920799575
                  },
  },
{
                  data: {
                  id: 'CAGL0I10472g',
                  name: 'CAGL0I10472g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0I10472g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in inner mitochondrial membrane organization, mitochondrion inheritance, mitochondrion morphogenesis, negative regulation of proteolysis, protein folding, replicative cell aging</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10472g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10472g'  target='_blank'> Link to GRYC</a>",
                  x : -6.57580650703202,
                  y : -0.252116661670391
                  },
                  position : {
                  'x' : -65.7580650703202,
                  'y' : -2.52116661670391
                  },
  },
{
                  data: {
                  id: 'CAGL0J03806g',
                  name: 'CAGL0J03806g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J03806g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have transcription corepressor activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J03806g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J03806g'  target='_blank'> Link to GRYC</a>",
                  x : 3.38967265673217,
                  y : -7.48124190103382
                  },
                  position : {
                  'x' : 33.8967265673217,
                  'y' : -74.8124190103382
                  },
  },
{
                  data: {
                  id: 'CAGL0J04290g',
                  name: 'CAGL0J04290g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J04290g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have MAP kinase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04290g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04290g'  target='_blank'> Link to GRYC</a>",
                  x : -5.16798283319568,
                  y : -7.47790539229988
                  },
                  position : {
                  'x' : -51.6798283319568,
                  'y' : -74.7790539229988
                  },
  },
{
                  data: {
                  id: 'CAGL0J04576g',
                  name: 'CAGL0J04576g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J04576g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in peptidyl-diphthamide biosynthetic process from peptidyl-histidine and cytoplasm localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J04576g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J04576g'  target='_blank'> Link to GRYC</a>",
                  x : 2.09633921187923,
                  y : -6.54051070260104
                  },
                  position : {
                  'x' : 20.9633921187923,
                  'y' : -65.4051070260104
                  },
  },
{
                  data: {
                  id: 'CAGL0J06374g',
                  name: 'CAGL0J06374g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J06374g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted structural constituent of ribosome activity, role in translational elongation and ribosome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J06374g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J06374g'  target='_blank'> Link to GRYC</a>",
                  x : 1.06768378008066,
                  y : -5.61818076544984
                  },
                  position : {
                  'x' : 10.6768378008066,
                  'y' : -56.1818076544984
                  },
  },
{
                  data: {
                  id: 'CAGL0J07062g',
                  name: 'CAGL0J07062g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J07062g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have arginase activity, manganese ion binding, ornithine carbamoyltransferase inhibitor activity, zinc ion binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J07062g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J07062g'  target='_blank'> Link to GRYC</a>",
                  x : 2.67649798541117,
                  y : -7.66002732749711
                  },
                  position : {
                  'x' : 26.7649798541117,
                  'y' : -76.6002732749711
                  },
  },
{
                  data: {
                  id: 'CAGL0J07678g',
                  name: 'CAGL0J07678g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J07678g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ribosomal small subunit binding, translation initiation factor activity, translation initiation factor binding activity and role in formation of translation preinitiation complex, maintenance of translational fidelity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J07678g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J07678g'  target='_blank'> Link to GRYC</a>",
                  x : 2.69662460893858,
                  y : -5.37765387251943
                  },
                  position : {
                  'x' : 26.9662460893858,
                  'y' : -53.7765387251943
                  },
  },
{
                  data: {
                  id: 'CAGL0J09328g',
                  name: 'CAGL0J09328g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J09328g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cyclin-dependent protein serine/threonine kinase regulator activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09328g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09328g'  target='_blank'> Link to GRYC</a>",
                  x : -5.65067285975936,
                  y : 1.23642899951503
                  },
                  position : {
                  'x' : -56.5067285975936,
                  'y' : 12.3642899951503
                  },
  },
{
                  data: {
                  id: 'CAGL0J10846g',
                  name: 'CAGL0J10846g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J10846g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have cyclin-dependent protein serine/threonine kinase regulator activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J10846g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J10846g'  target='_blank'> Link to GRYC</a>",
                  x : -5.66682759549525,
                  y : 1.80048207169056
                  },
                  position : {
                  'x' : -56.6682759549525,
                  'y' : 18.0048207169056
                  },
  },
{
                  data: {
                  id: 'CAGL0J10978g',
                  name: 'CAGL0J10978g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J10978g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have GTPase activator activity, Rho GTPase binding, phosphatidylinositol-4,5-bisphosphate binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J10978g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J10978g'  target='_blank'> Link to GRYC</a>",
                  x : -6.25187110526015,
                  y : -0.421012987045145
                  },
                  position : {
                  'x' : -62.5187110526015,
                  'y' : -4.21012987045145
                  },
  },
{
                  data: {
                  id: 'CAGL0J11132g',
                  name: 'CAGL0J11132g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J11132g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in pheromone-dependent signal transduction involved in conjugation with cellular fusion and membrane raft, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J11132g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J11132g'  target='_blank'> Link to GRYC</a>",
                  x : -6.51007143797939,
                  y : -1.69191849265897
                  },
                  position : {
                  'x' : -65.1007143797939,
                  'y' : -16.9191849265897
                  },
  },
{
                  data: {
                  id: 'CAGL0J11792g',
                  name: 'CAGL0J11792g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0J11792g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted RNA polymerase I CORE element sequence-specific DNA binding, RNA polymerase I general transcription initiation factor activity and role in transcription initiation from RNA polymerase I promoter</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J11792g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J11792g'  target='_blank'> Link to GRYC</a>",
                  x : -6.48368675508981,
                  y : 0.75540352721131
                  },
                  position : {
                  'x' : -64.8368675508981,
                  'y' : 7.5540352721131
                  },
  },
{
                  data: {
                  id: 'CAGL0K00869g',
                  name: 'CAGL0K00869g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#ffb3b3',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K00869g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted ubiquitin binding activity, role in endosome transport via multivesicular body sorting pathway and ESCRT I complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K00869g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K00869g'  target='_blank'> Link to GRYC</a>",
                  x : -7.01697929381142,
                  y : 0.679155665732337
                  },
                  position : {
                  'x' : -70.1697929381142,
                  'y' : 6.79155665732337
                  },
  },
{
                  data: {
                  id: 'CAGL0K01859g',
                  name: 'CAGL0K01859g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K01859g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have histone-glutamine methyltransferase activity, mRNA binding, rRNA methyltransferase activity and role in box C/D snoRNA 3'-end processing, histone glutamine methylation, rRNA methylation, rRNA processing, snoRNA processing</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K01859g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K01859g'  target='_blank'> Link to GRYC</a>",
                  x : 1.06795644417599,
                  y : -5.99679810383082
                  },
                  position : {
                  'x' : 10.6795644417599,
                  'y' : -59.9679810383082
                  },
  },
{
                  data: {
                  id: 'CAGL0K05247g',
                  name: 'CAGL0K05247g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K05247g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ubiquitin protein ligase binding activity, role in fungal-type cell wall organization, regulation of transcription by RNA polymerase II and nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K05247g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K05247g'  target='_blank'> Link to GRYC</a>",
                  x : -3.73083764021466,
                  y : 2.27423169097768
                  },
                  position : {
                  'x' : -37.3083764021466,
                  'y' : 22.7423169097768
                  },
  },
{
                  data: {
                  id: 'CAGL0K06061g',
                  name: 'CAGL0K06061g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K06061g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K06061g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K06061g'  target='_blank'> Link to GRYC</a>",
                  x : 2.21304459481496,
                  y : -5.84242657025452
                  },
                  position : {
                  'x' : 22.1304459481496,
                  'y' : -58.4242657025452
                  },
  },
{
                  data: {
                  id: 'CAGL0K07111g',
                  name: 'CAGL0K07111g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K07111g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have microtubule binding, microtubule plus-end binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07111g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07111g'  target='_blank'> Link to GRYC</a>",
                  x : -6.05328913752531,
                  y : -1.65920906879138
                  },
                  position : {
                  'x' : -60.5328913752531,
                  'y' : -16.5920906879138
                  },
  },
{
                  data: {
                  id: 'CAGL0K07590g',
                  name: 'CAGL0K07590g',
                  gene: 'MYO3',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K07590g</h2><hr><p><b>Gene name</b> : MYO3</p><p><b>Description</b> : Putative myosin</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07590g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07590g'  target='_blank'> Link to GRYC</a>",
                  x : 3.8034285109728,
                  y : -2.61896505612455
                  },
                  position : {
                  'x' : 38.034285109728,
                  'y' : -26.1896505612455
                  },
  },
{
                  data: {
                  id: 'CAGL0K08668g',
                  name: 'CAGL0K08668g',
                  gene: 'MET28',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K08668g</h2><hr><p><b>Gene name</b> : MET28</p><p><b>Description</b> : bZIP domain-containing protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08668g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08668g'  target='_blank'> Link to GRYC</a>",
                  x : -4.45781376764462,
                  y : 4.34535159892552
                  },
                  position : {
                  'x' : -44.5781376764462,
                  'y' : 43.4535159892552
                  },
  },
{
                  data: {
                  id: 'CAGL0K08756g',
                  name: 'CAGL0K08756g',
                  gene: 'AP5',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0K08756g</h2><hr><p><b>Gene name</b> : AP5</p><p><b>Description</b> : bZIP domain-containing protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08756g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08756g'  target='_blank'> Link to GRYC</a>",
                  x : 5.97707344916688,
                  y : 5.95138152801789
                  },
                  position : {
                  'x' : 59.7707344916688,
                  'y' : 59.5138152801789
                  },
  },
{
                  data: {
                  id: 'CAGL0K09372g',
                  name: 'CAGL0K09372g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K09372g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription repressor activity, RNA polymerase II-specific, RNA polymerase II proximal promoter sequence-specific DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K09372g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K09372g'  target='_blank'> Link to GRYC</a>",
                  x : 3.45235936182292,
                  y : -1.08423192679141
                  },
                  position : {
                  'x' : 34.5235936182292,
                  'y' : -10.8423192679141
                  },
  },
{
                  data: {
                  id: 'CAGL0K09724g',
                  name: 'CAGL0K09724g',
                  gene: 'FPR1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K09724g</h2><hr><p><b>Gene name</b> : FPR1</p><p><b>Description</b> : Peptidyl-prolyl cis-trans isomerase; expression upregulated in biofilm vs planktonic cell culture</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K09724g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K09724g'  target='_blank'> Link to GRYC</a>",
                  x : 1.81165809407664,
                  y : -5.25692152722151
                  },
                  position : {
                  'x' : 18.1165809407664,
                  'y' : -52.5692152722151
                  },
  },
{
                  data: {
                  id: 'CAGL0K12254g',
                  name: 'CAGL0K12254g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0K12254g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in negative regulation of gluconeogenesis, proteasome-mediated ubiquitin-dependent protein catabolic process, protein catabolic process in the vacuole, protein targeting to vacuole</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K12254g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K12254g'  target='_blank'> Link to GRYC</a>",
                  x : -0.449977869737445,
                  y : 3.02361052789569
                  },
                  position : {
                  'x' : -4.49977869737445,
                  'y' : 30.2361052789569
                  },
  },
{
                  data: {
                  id: 'CAGL0L00803g',
                  name: 'CAGL0L00803g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L00803g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in regulation of glycogen biosynthetic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L00803g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L00803g'  target='_blank'> Link to GRYC</a>",
                  x : 1.70304502799806,
                  y : 1.13907676417227
                  },
                  position : {
                  'x' : 17.0304502799806,
                  'y' : 11.3907676417227
                  },
  },
{
                  data: {
                  id: 'CAGL0L01771g',
                  name: 'CAGL0L01771g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0L01771g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription factor activity, role in positive regulation of pseudohyphal growth, positive regulation of transcription by RNA polymerase II and nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L01771g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L01771g'  target='_blank'> Link to GRYC</a>",
                  x : 3.40495060443977,
                  y : 0.926637496272442
                  },
                  position : {
                  'x' : 34.0495060443977,
                  'y' : 9.26637496272442
                  },
  },
{
                  data: {
                  id: 'CAGL0L03135g',
                  name: 'CAGL0L03135g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L03135g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative phospholipase D; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03135g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03135g'  target='_blank'> Link to GRYC</a>",
                  x : -0.987244968959062,
                  y : 2.8444588847463
                  },
                  position : {
                  'x' : -9.87244968959062,
                  'y' : 28.444588847463
                  },
  },
{
                  data: {
                  id: 'CAGL0L03377g',
                  name: 'CAGL0L03377g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L03377g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription activator activity, RNA polymerase II-specific, RNA polymerase II proximal promoter sequence-specific DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03377g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03377g'  target='_blank'> Link to GRYC</a>",
                  x : -5.34877622111762,
                  y : 0.968139516685725
                  },
                  position : {
                  'x' : -53.4877622111762,
                  'y' : 9.68139516685724
                  },
  },
{
                  data: {
                  id: 'CAGL0L03846g',
                  name: 'CAGL0L03846g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L03846g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA helicase activity, RNA-dependent ATPase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03846g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03846g'  target='_blank'> Link to GRYC</a>",
                  x : 1.90154927999162,
                  y : -7.3452693596858
                  },
                  position : {
                  'x' : 19.0154927999162,
                  'y' : -73.452693596858
                  },
  },
{
                  data: {
                  id: 'CAGL0L04510g',
                  name: 'CAGL0L04510g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L04510g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have structural constituent of ribosome activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L04510g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L04510g'  target='_blank'> Link to GRYC</a>",
                  x : 1.6100213094547,
                  y : -6.69910524563155
                  },
                  position : {
                  'x' : 16.100213094547,
                  'y' : -66.9910524563155
                  },
  },
{
                  data: {
                  id: 'CAGL0L04598g',
                  name: 'CAGL0L04598g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L04598g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA 7-methylguanosine cap binding, m7G(5')pppN diphosphatase activity, role in cellular response to starvation, deadenylation-dependent decapping of nuclear-transcribed mRNA and P-body, cytoplasm, nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L04598g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L04598g'  target='_blank'> Link to GRYC</a>",
                  x : -0.989747975850551,
                  y : 1.89670658793175
                  },
                  position : {
                  'x' : -9.89747975850551,
                  'y' : 18.9670658793175
                  },
  },
{
                  data: {
                  id: 'CAGL0L06578g',
                  name: 'CAGL0L06578g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L06578g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ubiquitin ligase activator activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06578g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06578g'  target='_blank'> Link to GRYC</a>",
                  x : -0.125844962846006,
                  y : 3.09279938241856
                  },
                  position : {
                  'x' : -1.25844962846006,
                  'y' : 30.9279938241856
                  },
  },
{
                  data: {
                  id: 'CAGL0L06776g',
                  name: 'CAGL0L06776g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#009900',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0L06776g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted DNA-binding transcription factor activity, sequence-specific DNA binding, zinc ion binding activity and role in regulation of transcription, DNA-templated</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L06776g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L06776g'  target='_blank'> Link to GRYC</a>",
                  x : 7.03421399810525,
                  y : 4.82239541360546
                  },
                  position : {
                  'x' : 70.3421399810525,
                  'y' : 48.2239541360546
                  },
  },
{
                  data: {
                  id: 'CAGL0L07480g',
                  name: 'CAGL0L07480g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L07480g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription factor activity, double-stranded DNA binding, sequence-specific DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L07480g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L07480g'  target='_blank'> Link to GRYC</a>",
                  x : -1.64061544869015,
                  y : 3.78830924663364
                  },
                  position : {
                  'x' : -16.4061544869015,
                  'y' : 37.8830924663364
                  },
  },
{
                  data: {
                  id: 'CAGL0L09020g',
                  name: 'CAGL0L09020g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L09020g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in ATP export, carbon catabolite repression of transcription from RNA polymerase II promoter by glucose, cellular response to alkaline pH and cellular response to lithium ion, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L09020g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L09020g'  target='_blank'> Link to GRYC</a>",
                  x : -5.5792621419708,
                  y : 0.137005686495467
                  },
                  position : {
                  'x' : -55.792621419708,
                  'y' : 1.37005686495467
                  },
  },
{
                  data: {
                  id: 'CAGL0L09383g',
                  name: 'CAGL0L09383g',
                  gene: 'SUT2',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L09383g</h2><hr><p><b>Gene name</b> : SUT2</p><p><b>Description</b> : Ortholog(s) have role in negative regulation of filamentous growth of a population of unicellular organisms in response to starvation by negative regulation of transcription from RNA polymerase II promoter, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L09383g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L09383g'  target='_blank'> Link to GRYC</a>",
                  x : -0.267772691103124,
                  y : 1.57224610617173
                  },
                  position : {
                  'x' : -2.67772691103124,
                  'y' : 15.7224610617173
                  },
  },
{
                  data: {
                  id: 'CAGL0L10164g',
                  name: 'CAGL0L10164g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#66ff66',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L10164g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in translational termination and nucleus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10164g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10164g'  target='_blank'> Link to GRYC</a>",
                  x : 0.120845934277387,
                  y : -6.06097441906058
                  },
                  position : {
                  'x' : 1.20845934277387,
                  'y' : -60.6097441906058
                  },
  },
{
                  data: {
                  id: 'CAGL0L10362g',
                  name: 'CAGL0L10362g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L10362g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : YOR062C and Saccharomyces cerevisiae S288C : YOR062C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L10362g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L10362g'  target='_blank'> Link to GRYC</a>",
                  x : 0.122526236813114,
                  y : 2.00360462537182
                  },
                  position : {
                  'x' : 1.22526236813114,
                  'y' : 20.0360462537182
                  },
  },
{
                  data: {
                  id: 'CAGL0L11990g',
                  name: 'CAGL0L11990g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L11990g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have RNA polymerase II activating transcription factor binding, disulfide oxidoreductase activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L11990g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L11990g'  target='_blank'> Link to GRYC</a>",
                  x : 7.90643470864838,
                  y : 3.53161832392018
                  },
                  position : {
                  'x' : 79.0643470864838,
                  'y' : 35.3161832392017
                  },
  },
{
                  data: {
                  id: 'CAGL0L12562g',
                  name: 'CAGL0L12562g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L12562g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription factor activity, RNA polymerase II-specific, proximal promoter sequence-specific DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L12562g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L12562g'  target='_blank'> Link to GRYC</a>",
                  x : -0.603618322857433,
                  y : 2.15196100086138
                  },
                  position : {
                  'x' : -6.03618322857433,
                  'y' : 21.5196100086138
                  },
  },
{
                  data: {
                  id: 'CAGL0L13156g',
                  name: 'CAGL0L13156g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0L13156g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have enzyme inhibitor activity, role in ubiquitin recycling and endosome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L13156g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L13156g'  target='_blank'> Link to GRYC</a>",
                  x : 0.68490139086951,
                  y : -6.69663786580047
                  },
                  position : {
                  'x' : 6.8490139086951,
                  'y' : -66.9663786580047
                  },
  },
{
                  data: {
                  id: 'CAGL0M00770g',
                  name: 'CAGL0M00770g',
                  gene: 'SIR3',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M00770g</h2><hr><p><b>Gene name</b> : SIR3</p><p><b>Description</b> : Protein involved in subtelomeric silencing; mutants display increased colonization of the mouse kidney relative to the wild-type strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M00770g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M00770g'  target='_blank'> Link to GRYC</a>",
                  x : 2.32196300525833,
                  y : -4.10835646169208
                  },
                  position : {
                  'x' : 23.2196300525833,
                  'y' : -41.0835646169208
                  },
  },
{
                  data: {
                  id: 'CAGL0M01364g',
                  name: 'CAGL0M01364g',
                  gene: 'CBF3D',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#009900',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M01364g</h2><hr><p><b>Gene name</b> : CBF3D</p><p><b>Description</b> : Centromere binding factor 3d; kinetochore protein with homology to human SKP1</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M01364g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M01364g'  target='_blank'> Link to GRYC</a>",
                  x : 5.03461012770408,
                  y : -2.6579579512538
                  },
                  position : {
                  'x' : 50.3461012770408,
                  'y' : -26.579579512538
                  },
  },
{
                  data: {
                  id: 'CAGL0M03025g',
                  name: 'CAGL0M03025g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M03025g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have DNA-binding transcription activator activity, RNA polymerase II-specific, DNA-binding transcription factor activity, RNA polymerase II proximal promoter sequence-specific DNA binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M03025g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M03025g'  target='_blank'> Link to GRYC</a>",
                  x : -4.52906258076479,
                  y : 2.7080101649341
                  },
                  position : {
                  'x' : -45.2906258076479,
                  'y' : 27.080101649341
                  },
  },
{
                  data: {
                  id: 'CAGL0M03795g',
                  name: 'CAGL0M03795g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M03795g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted nucleic acid binding, nucleotide binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M03795g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M03795g'  target='_blank'> Link to GRYC</a>",
                  x : 3.92370072268371,
                  y : -7.15615780077488
                  },
                  position : {
                  'x' : 39.2370072268371,
                  'y' : -71.5615780077487
                  },
  },
{
                  data: {
                  id: 'CAGL0M04191g',
                  name: 'CAGL0M04191g',
                  gene: 'YPS1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M04191g</h2><hr><p><b>Gene name</b> : YPS1</p><p><b>Description</b> : Yapsin family aspartic protease; predicted GPI-anchor; complements cell wall defect phenotypes of S. cerevisiae yps1 mutant; regulation of pH homeostasis under acid conditions; induced by high temperature, Slt1- and Crz1p-dependent</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M04191g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M04191g'  target='_blank'> Link to GRYC</a>",
                  x : -6.45666712022682,
                  y : 1.1627741773552
                  },
                  position : {
                  'x' : -64.5666712022682,
                  'y' : 11.627741773552
                  },
  },
{
                  data: {
                  id: 'CAGL0M04873g',
                  name: 'CAGL0M04873g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#cc0000',
                  faveShape: 'square',
                  type: 'bezier',
                  content: "<h2>CAGL0M04873g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in rRNA export from nucleus and cell surface localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M04873g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M04873g'  target='_blank'> Link to GRYC</a>",
                  x : 3.10705958733771,
                  y : -8.81706403461014
                  },
                  position : {
                  'x' : 31.0705958733771,
                  'y' : -88.1706403461014
                  },
  },
{
                  data: {
                  id: 'CAGL0M05665g',
                  name: 'CAGL0M05665g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M05665g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have endopeptidase inhibitor activity, role in regulation of proteolysis, vacuole fusion, non-autophagic and fungal-type vacuole localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M05665g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M05665g'  target='_blank'> Link to GRYC</a>",
                  x : -1.98543240004227,
                  y : 3.32010999740171
                  },
                  position : {
                  'x' : -19.8543240004227,
                  'y' : 33.2010999740171
                  },
  },
{
                  data: {
                  id: 'CAGL0M06369g',
                  name: 'CAGL0M06369g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#66ff66',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M06369g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in regulation of cytoplasmic translational fidelity, tRNA wobble base 5-methoxycarbonylmethyl-2-thiouridinylation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M06369g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M06369g'  target='_blank'> Link to GRYC</a>",
                  x : 2.5847381871826,
                  y : -7.21407729892006
                  },
                  position : {
                  'x' : 25.847381871826,
                  'y' : -72.1407729892006
                  },
  },
{
                  data: {
                  id: 'CAGL0M06963g',
                  name: 'CAGL0M06963g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#000000',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M06963g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in tRNA export from nucleus and cytosol localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M06963g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M06963g'  target='_blank'> Link to GRYC</a>",
                  x : 2.34527991030695,
                  y : -1.3353742789909
                  },
                  position : {
                  'x' : 23.4527991030695,
                  'y' : -13.353742789909
                  },
  },
{
                  data: {
                  id: 'CAGL0M07403g',
                  name: 'CAGL0M07403g',
                  gene: 'OAZ1',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M07403g</h2><hr><p><b>Gene name</b> : OAZ1</p><p><b>Description</b> : Ortholog(s) have ornithine decarboxylase inhibitor activity and role in negative regulation of translational frameshifting, regulation of proteasomal protein catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M07403g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M07403g'  target='_blank'> Link to GRYC</a>",
                  x : -1.35078525875675,
                  y : 2.79505599920147
                  },
                  position : {
                  'x' : -13.5078525875675,
                  'y' : 27.9505599920147
                  },
  },
{
                  data: {
                  id: 'CAGL0M07722g',
                  name: 'CAGL0M07722g',
                  gene: '',
                  size: 3,
                  width :3,
                  height :3,
                  weight :3,
                  faveColorLow: '#009900',
                  faveColorHigh: '#000000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M07722g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cytoplasmic translational initiation and cytoplasmic stress granule, eukaryotic translation initiation factor 3 complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M07722g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M07722g'  target='_blank'> Link to GRYC</a>",
                  x : 2.62156385811914,
                  y : -6.7652550027878
                  },
                  position : {
                  'x' : 26.2156385811914,
                  'y' : -67.652550027878
                  },
  },
{
                  data: {
                  id: 'CAGL0M08184g',
                  name: 'CAGL0M08184g',
                  gene: 'STE3',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#cc0000',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M08184g</h2><hr><p><b>Gene name</b> : STE3</p><p><b>Description</b> : Putative a-factor pheromone receptor</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M08184g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M08184g'  target='_blank'> Link to GRYC</a>",
                  x : -1.99163290227028,
                  y : 3.58322214310111
                  },
                  position : {
                  'x' : -19.9163290227028,
                  'y' : 35.8322214310111
                  },
  },
{
                  data: {
                  id: 'CAGL0M11902g',
                  name: 'CAGL0M11902g',
                  gene: '',
                  size: 9,
                  width :9,
                  height :9,
                  weight :9,
                  faveColorLow: '#ffb3b3',
                  faveColorHigh: '#cc0000',
                  faveShape: 'ellipse',
                  type: 'bezier',
                  content: "<h2>CAGL0M11902g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog of S. cerevisiae : FUN19 and Saccharomyces cerevisiae S288C : YAL034C</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M11902g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M11902g'  target='_blank'> Link to GRYC</a>",
                  x : -3.63128447766943,
                  y : 6.15304719085066
                  },
                  position : {
                  'x' : -36.3128447766943,
                  'y' : 61.5304719085066
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
