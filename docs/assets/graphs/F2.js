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
                  x : 0.327507281028724,
                  y : -0.600721878121461
                  },
                  position : {
                  'x' : 3.27507281028724,
                  'y' : -6.00721878121461
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
                  x : -2.67153036048995,
                  y : -4.33675219623241
                  },
                  position : {
                  'x' : -26.7153036048995,
                  'y' : -43.3675219623241
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
                  x : 2.32544908432289,
                  y : 0.317757717600427
                  },
                  position : {
                  'x' : 23.2544908432289,
                  'y' : 3.17757717600427
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
                  content: "<h2>CAGL0B02475g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have inorganic phosphate transmembrane transporter activity, manganese ion transmembrane transporter activity, selenite:proton symporter activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02475g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02475g'  target='_blank'> Link to GRYC</a>",
                  x : 3.10507639997942,
                  y : 6.70333491281592
                  },
                  position : {
                  'x' : 31.0507639997942,
                  'y' : 67.0333491281592
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
                  x : 0.629906795026618,
                  y : 0.86036072534874
                  },
                  position : {
                  'x' : 6.29906795026618,
                  'y' : 8.6036072534874
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
                  x : -2.85240763298561,
                  y : -1.06829429871298
                  },
                  position : {
                  'x' : -28.5240763298561,
                  'y' : -10.6829429871298
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
                  x : -3.16139189553107,
                  y : -8.879859300234
                  },
                  position : {
                  'x' : -31.6139189553107,
                  'y' : -88.79859300234
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
                  x : -1.06895013869895,
                  y : 6.28789548587075
                  },
                  position : {
                  'x' : -10.6895013869895,
                  'y' : 62.8789548587075
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
                  x : 5.8960221313877,
                  y : 0.606540809612105
                  },
                  position : {
                  'x' : 58.960221313877,
                  'y' : 6.06540809612105
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
                  x : 5.09740932204672,
                  y : 1.85118951500155
                  },
                  position : {
                  'x' : 50.9740932204672,
                  'y' : 18.5118951500155
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
                  x : 4.90575067990196,
                  y : -1.62899631978536
                  },
                  position : {
                  'x' : 49.0575067990196,
                  'y' : -16.2899631978536
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
                  x : 7.21742439621225,
                  y : -1.91449268315337
                  },
                  position : {
                  'x' : 72.1742439621225,
                  'y' : -19.1449268315337
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
                  x : -2.47004568242028,
                  y : -2.00281003744182
                  },
                  position : {
                  'x' : -24.7004568242028,
                  'y' : -20.0281003744182
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
                  x : -1.79172084601339,
                  y : -2.20783138081855
                  },
                  position : {
                  'x' : -17.9172084601339,
                  'y' : -22.0783138081855
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
                  x : -1.22330640055371,
                  y : -2.7166189474494
                  },
                  position : {
                  'x' : -12.2330640055371,
                  'y' : -27.166189474494
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
                  x : -1.07437325129993,
                  y : -7.81818534799015
                  },
                  position : {
                  'x' : -10.7437325129993,
                  'y' : -78.1818534799015
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
                  content: "<h2>CAGL0E01243g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein involved in cellular iron homeostasis; induced by Aft1p to reduce expression of iron-associated genes under iron starvation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01243g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01243g'  target='_blank'> Link to GRYC</a>",
                  x : -1.83925584812691,
                  y : -1.34205762014788
                  },
                  position : {
                  'x' : -18.3925584812691,
                  'y' : -13.4205762014788
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
                  x : 6.63633401873841,
                  y : -0.387922545196541
                  },
                  position : {
                  'x' : 66.3633401873841,
                  'y' : -3.87922545196541
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
                  x : 7.66983044382021,
                  y : -1.92571411755307
                  },
                  position : {
                  'x' : 76.6983044382021,
                  'y' : -19.2571411755307
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
                  x : -3.4291965876181,
                  y : -7.031963835453
                  },
                  position : {
                  'x' : -34.291965876181,
                  'y' : -70.31963835453
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
                  x : -3.0457046387903,
                  y : -4.02473280952861
                  },
                  position : {
                  'x' : -30.457046387903,
                  'y' : -40.2473280952861
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
                  x : 0.527760299279801,
                  y : -8.9385389600984
                  },
                  position : {
                  'x' : 5.27760299279801,
                  'y' : -89.385389600984
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
                  x : 1.61472133198453,
                  y : 1.82666778383477
                  },
                  position : {
                  'x' : 16.1472133198452,
                  'y' : 18.2666778383477
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
                  content: "<h2>CAGL0F00605g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Aldohexose specific glucokinase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00605g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00605g'  target='_blank'> Link to GRYC</a>",
                  x : 0.430920998480343,
                  y : -5.19338601886074
                  },
                  position : {
                  'x' : 4.30920998480343,
                  'y' : -51.9338601886074
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
                  x : 7.6529389354871,
                  y : -1.02133120977105
                  },
                  position : {
                  'x' : 76.529389354871,
                  'y' : -10.2133120977105
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
                  content: "<h2>CAGL0F01265g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : bZIP domain-containing protein involved in regulation of nitric oxide detoxification</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01265g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01265g'  target='_blank'> Link to GRYC</a>",
                  x : 3.66253955140819,
                  y : 0.631200128081912
                  },
                  position : {
                  'x' : 36.6253955140819,
                  'y' : 6.31200128081912
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
                  x : -1.47545799876069,
                  y : -1.5181751259716
                  },
                  position : {
                  'x' : -14.7545799876069,
                  'y' : -15.181751259716
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
                  content: "<h2>CAGL0F03553g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative heme-binding protein involved in regulation of cytochrome P450, Erg11p; required for growth under iron starvation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F03553g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F03553g'  target='_blank'> Link to GRYC</a>",
                  x : 4.29702431659367,
                  y : -0.365362908740305
                  },
                  position : {
                  'x' : 42.9702431659367,
                  'y' : -3.65362908740305
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
                  content: "<h2>CAGL0F06677g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have G-protein beta-subunit binding, GTPase activity, guanyl nucleotide binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F06677g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F06677g'  target='_blank'> Link to GRYC</a>",
                  x : -4.52468918849531,
                  y : 4.32766645582172
                  },
                  position : {
                  'x' : -45.2468918849531,
                  'y' : 43.2766645582172
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
                  x : -3.74917095738252,
                  y : -4.11725782286536
                  },
                  position : {
                  'x' : -37.4917095738252,
                  'y' : -41.1725782286536
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
                  content: "<h2>CAGL0F07865g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative Zn(2)-Cys(6) binuclear cluster transcriptional regulator of ergosterol biosynthesis</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F07865g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F07865g'  target='_blank'> Link to GRYC</a>",
                  x : -3.32689735394333,
                  y : 1.01728750725222
                  },
                  position : {
                  'x' : -33.2689735394333,
                  'y' : 10.1728750725222
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
                  x : 0.219192319512708,
                  y : 6.61324189866792
                  },
                  position : {
                  'x' : 2.19192319512708,
                  'y' : 66.1324189866792
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
                  x : -1.41344397355604,
                  y : 0.245846224971205
                  },
                  position : {
                  'x' : -14.1344397355604,
                  'y' : 2.45846224971205
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
                  x : 3.8974642656935,
                  y : -0.799245792228329
                  },
                  position : {
                  'x' : 38.974642656935,
                  'y' : -7.99245792228329
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
                  x : -2.69642802305054,
                  y : -2.32731073427012
                  },
                  position : {
                  'x' : -26.9642802305054,
                  'y' : -23.2731073427012
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
                  x : -2.03049489650002,
                  y : -6.31138018079543
                  },
                  position : {
                  'x' : -20.3049489650002,
                  'y' : -63.1138018079543
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
                  x : 8.8049082293203,
                  y : -3.99428492804685
                  },
                  position : {
                  'x' : 88.049082293203,
                  'y' : -39.9428492804685
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
                  content: "<h2>CAGL0H02959g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have chromatin binding activity, role in filamentous growth and nuclear chromatin localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02959g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02959g'  target='_blank'> Link to GRYC</a>",
                  x : 2.92121519181331,
                  y : 2.02666228776501
                  },
                  position : {
                  'x' : 29.2121519181331,
                  'y' : 20.2666228776501
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
                  x : 0.0788880906292691,
                  y : -7.09695252854329
                  },
                  position : {
                  'x' : 0.788880906292691,
                  'y' : -70.969525285433
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
                  content: "<h2>CAGL0H03487g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative RNA polymerase II transcription factor, involved in regulation of iron acquisition genes; required for growth under iron depletion</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H03487g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H03487g'  target='_blank'> Link to GRYC</a>",
                  x : 1.81393878440618,
                  y : 3.33297772034022
                  },
                  position : {
                  'x' : 18.1393878440618,
                  'y' : 33.3297772034022
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
                  x : 5.97178953358552,
                  y : 0.157448443925491
                  },
                  position : {
                  'x' : 59.7178953358552,
                  'y' : 1.57448443925491
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
                  content: "<h2>CAGL0H07579g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative hexokinase B</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H07579g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H07579g'  target='_blank'> Link to GRYC</a>",
                  x : 8.03293807886684,
                  y : -3.27546219428814
                  },
                  position : {
                  'x' : 80.3293807886684,
                  'y' : -32.7546219428814
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
                  x : -1.73717809741468,
                  y : -3.55642509523014
                  },
                  position : {
                  'x' : -17.3717809741468,
                  'y' : -35.5642509523014
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
                  x : 6.37051473575603,
                  y : -1.06557933542973
                  },
                  position : {
                  'x' : 63.7051473575603,
                  'y' : -10.6557933542973
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
                  content: "<h2>CAGL0I02486g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative enolase I; protein abundance increased in azole resistant strain and in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02486g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02486g'  target='_blank'> Link to GRYC</a>",
                  x : 0.584765321982841,
                  y : -7.56066488241431
                  },
                  position : {
                  'x' : 5.84765321982841,
                  'y' : -75.6066488241431
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
                  x : 5.29371723251056,
                  y : -0.741800534359117
                  },
                  position : {
                  'x' : 52.9371723251056,
                  'y' : -7.41800534359117
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
                  x : 5.44975109370445,
                  y : 0.456221500220606
                  },
                  position : {
                  'x' : 54.4975109370445,
                  'y' : 4.56221500220606
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
                  content: "<h2>CAGL0I04730g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative hnRNP arginine N-methyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04730g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04730g'  target='_blank'> Link to GRYC</a>",
                  x : 7.18663076610477,
                  y : -2.61863797972046
                  },
                  position : {
                  'x' : 71.8663076610477,
                  'y' : -26.1863797972046
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
                  x : 0.666873779002962,
                  y : -8.4883890524917
                  },
                  position : {
                  'x' : 6.66873779002962,
                  'y' : -84.883890524917
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
                  x : 1.12336485996943,
                  y : 0.43162479571253
                  },
                  position : {
                  'x' : 11.2336485996943,
                  'y' : 4.3162479571253
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
                  x : -0.968446799332805,
                  y : -0.556223922440921
                  },
                  position : {
                  'x' : -9.68446799332805,
                  'y' : -5.56223922440921
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
                  x : -2.34947052613824,
                  y : 5.76125505418117
                  },
                  position : {
                  'x' : -23.4947052613824,
                  'y' : 57.6125505418117
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
                  x : -0.696310078610923,
                  y : -1.18288343144842
                  },
                  position : {
                  'x' : -6.96310078610923,
                  'y' : -11.8288343144842
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
                  x : -0.316397862130342,
                  y : -8.32122959115225
                  },
                  position : {
                  'x' : -3.16397862130342,
                  'y' : -83.2122959115225
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
                  x : 9.21853821001196,
                  y : -2.58123402951721
                  },
                  position : {
                  'x' : 92.1853821001196,
                  'y' : -25.8123402951721
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
                  x : -3.81397313105076,
                  y : 4.90249525476894
                  },
                  position : {
                  'x' : -38.1397313105076,
                  'y' : 49.0249525476894
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
                  x : 7.93515759570171,
                  y : -2.43992719150276
                  },
                  position : {
                  'x' : 79.3515759570171,
                  'y' : -24.3992719150276
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
                  x : 7.88391611645067,
                  y : -1.50883490940522
                  },
                  position : {
                  'x' : 78.8391611645067,
                  'y' : -15.0883490940522
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
                  x : 8.87611726191361,
                  y : -3.14465940143053
                  },
                  position : {
                  'x' : 88.7611726191361,
                  'y' : -31.4465940143053
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
                  x : 6.47233539652521,
                  y : -2.57028971085904
                  },
                  position : {
                  'x' : 64.7233539652521,
                  'y' : -25.7028971085904
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
                  x : -1.59323588431089,
                  y : -7.1490008655143
                  },
                  position : {
                  'x' : -15.9323588431089,
                  'y' : -71.490008655143
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
                  x : -2.1534155534912,
                  y : -7.02099313890476
                  },
                  position : {
                  'x' : -21.534155534912,
                  'y' : -70.2099313890476
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
                  x : -0.128466193609212,
                  y : -7.99939013902507
                  },
                  position : {
                  'x' : -1.28466193609212,
                  'y' : -79.9939013902507
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
                  x : 1.13238267420352,
                  y : -8.00211870585509
                  },
                  position : {
                  'x' : 11.3238267420352,
                  'y' : -80.0211870585509
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
                  x : -1.62876238539683,
                  y : -7.79915980322057
                  },
                  position : {
                  'x' : -16.2876238539683,
                  'y' : -77.9915980322057
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
                  x : -1.35453142646274,
                  y : -8.5632031451852
                  },
                  position : {
                  'x' : -13.5453142646274,
                  'y' : -85.632031451852
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
                  x : 8.18277058209842,
                  y : -1.74645950560151
                  },
                  position : {
                  'x' : 81.8277058209842,
                  'y' : -17.4645950560151
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
                  x : -1.9510282963385,
                  y : -5.04714094915016
                  },
                  position : {
                  'x' : -19.510282963385,
                  'y' : -50.4714094915016
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
                  x : 7.06450761078468,
                  y : -2.14183666109203
                  },
                  position : {
                  'x' : 70.6450761078468,
                  'y' : -21.4183666109203
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
                  x : 1.09190360119445,
                  y : -8.45809585566289
                  },
                  position : {
                  'x' : 10.9190360119445,
                  'y' : -84.5809585566289
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
                  content: "<h2>CAGL0K07590g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative myosin</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07590g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07590g'  target='_blank'> Link to GRYC</a>",
                  x : 4.77341945738152,
                  y : 0.417304830192746
                  },
                  position : {
                  'x' : 47.7341945738152,
                  'y' : 4.17304830192746
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
                  content: "<h2>CAGL0K08668g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : bZIP domain-containing protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08668g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08668g'  target='_blank'> Link to GRYC</a>",
                  x : -4.51562356756968,
                  y : -5.10507904639318
                  },
                  position : {
                  'x' : -45.1562356756968,
                  'y' : -51.0507904639318
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
                  content: "<h2>CAGL0K08756g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : bZIP domain-containing protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08756g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08756g'  target='_blank'> Link to GRYC</a>",
                  x : 1.62491983928623,
                  y : 6.79136734205545
                  },
                  position : {
                  'x' : 16.2491983928623,
                  'y' : 67.9136734205545
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
                  x : 3.1925643233783,
                  y : 0.625917275217217
                  },
                  position : {
                  'x' : 31.925643233783,
                  'y' : 6.25917275217216
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
                  content: "<h2>CAGL0K09724g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Peptidyl-prolyl cis-trans isomerase; expression upregulated in biofilm vs planktonic cell culture</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K09724g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K09724g'  target='_blank'> Link to GRYC</a>",
                  x : 6.67251932788525,
                  y : -2.05711925463276
                  },
                  position : {
                  'x' : 66.7251932788525,
                  'y' : -20.5711925463276
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
                  x : -2.28028463401619,
                  y : -1.44539924337658
                  },
                  position : {
                  'x' : -22.8028463401619,
                  'y' : -14.4539924337658
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
                  x : 0.461228412070933,
                  y : -0.158538597589374
                  },
                  position : {
                  'x' : 4.61228412070933,
                  'y' : -1.58538597589374
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
                  x : 1.27356242922489,
                  y : 1.29797313830666
                  },
                  position : {
                  'x' : 12.7356242922489,
                  'y' : 12.9797313830666
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
                  x : -2.17711456326533,
                  y : -2.05799180091878
                  },
                  position : {
                  'x' : -21.7711456326533,
                  'y' : -20.5799180091878
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
                  x : -1.28592376005554,
                  y : -6.91024671842503
                  },
                  position : {
                  'x' : -12.8592376005554,
                  'y' : -69.1024671842503
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
                  x : 7.81877137317258,
                  y : -3.59698325040866
                  },
                  position : {
                  'x' : 78.1877137317258,
                  'y' : -35.9698325040866
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
                  x : 7.64181976471058,
                  y : -2.98780557481957
                  },
                  position : {
                  'x' : 76.4181976471058,
                  'y' : -29.8780557481957
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
                  x : -1.01058531241158,
                  y : -2.40403583939345
                  },
                  position : {
                  'x' : -10.1058531241158,
                  'y' : -24.0403583939345
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
                  x : -2.12662932458807,
                  y : -1.12425600757166
                  },
                  position : {
                  'x' : -21.2662932458807,
                  'y' : -11.2425600757166
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
                  x : 4.72882108601647,
                  y : 6.30686599114598
                  },
                  position : {
                  'x' : 47.2882108601647,
                  'y' : 63.0686599114598
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
                  x : -2.45764037341244,
                  y : -3.0483095124992
                  },
                  position : {
                  'x' : -24.5764037341244,
                  'y' : -30.483095124992
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
                  x : -0.539725524166412,
                  y : -7.22603321697335
                  },
                  position : {
                  'x' : -5.39725524166412,
                  'y' : -72.2603321697335
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
                  content: "<h2>CAGL0L09383g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in negative regulation of filamentous growth of a population of unicellular organisms in response to starvation by negative regulation of transcription from RNA polymerase II promoter, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L09383g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L09383g'  target='_blank'> Link to GRYC</a>",
                  x : -0.779229186564058,
                  y : -1.7241133260018
                  },
                  position : {
                  'x' : -7.79229186564058,
                  'y' : -17.241133260018
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
                  x : 9.09664002475462,
                  y : -0.392457318220918
                  },
                  position : {
                  'x' : 90.9664002475462,
                  'y' : -3.92457318220918
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
                  x : -1.15751566515891,
                  y : -1.07506298772847
                  },
                  position : {
                  'x' : -11.5751566515891,
                  'y' : -10.7506298772847
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
                  x : 6.56558319136339,
                  y : 5.5465890103718
                  },
                  position : {
                  'x' : 65.6558319136339,
                  'y' : 55.465890103718
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
                  x : -1.48949932869752,
                  y : -1.86971372031505
                  },
                  position : {
                  'x' : -14.8949932869752,
                  'y' : -18.6971372031505
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
                  x : 7.19172454957027,
                  y : -3.31460327823492
                  },
                  position : {
                  'x' : 71.9172454957027,
                  'y' : -33.1460327823492
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
                  content: "<h2>CAGL0M00770g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein involved in subtelomeric silencing; mutants display increased colonization of the mouse kidney relative to the wild-type strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M00770g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M00770g'  target='_blank'> Link to GRYC</a>",
                  x : 5.65657157100535,
                  y : -1.50043116022544
                  },
                  position : {
                  'x' : 56.5657157100535,
                  'y' : -15.0043116022544
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
                  content: "<h2>CAGL0M01364g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Centromere binding factor 3d; kinetochore protein with homology to human SKP1</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M01364g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M01364g'  target='_blank'> Link to GRYC</a>",
                  x : 4.98669036693006,
                  y : 1.44710006023954
                  },
                  position : {
                  'x' : 49.8669036693006,
                  'y' : 14.4710006023954
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
                  x : -2.81780188817345,
                  y : -5.62833768973363
                  },
                  position : {
                  'x' : -28.1780188817345,
                  'y' : -56.2833768973363
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
                  x : 8.24784583446493,
                  y : -4.20160396844905
                  },
                  position : {
                  'x' : 82.4784583446493,
                  'y' : -42.0160396844905
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
                  content: "<h2>CAGL0M04191g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Yapsin family aspartic protease; predicted GPI-anchor; complements cell wall defect phenotypes of S. cerevisiae yps1 mutant; regulation of pH homeostasis under acid conditions; induced by high temperature, Slt1- and Crz1p-dependent</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M04191g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M04191g'  target='_blank'> Link to GRYC</a>",
                  x : -1.49728757870557,
                  y : -8.11553077748843
                  },
                  position : {
                  'x' : -14.9728757870557,
                  'y' : -81.1553077748842
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
                  x : 10.1305196726687,
                  y : -3.66932776704333
                  },
                  position : {
                  'x' : 101.305196726687,
                  'y' : -36.6932776704333
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
                  x : -3.36058196588194,
                  y : -2.55807453280434
                  },
                  position : {
                  'x' : -33.6058196588194,
                  'y' : -25.5807453280434
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
                  x : 8.56736243967851,
                  y : -2.7985458382769
                  },
                  position : {
                  'x' : 85.6736243967851,
                  'y' : -27.985458382769
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
                  x : 3.01615089251238,
                  y : -0.576273064802676
                  },
                  position : {
                  'x' : 30.1615089251238,
                  'y' : -5.76273064802676
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
                  content: "<h2>CAGL0M07403g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ornithine decarboxylase inhibitor activity and role in negative regulation of translational frameshifting, regulation of proteasomal protein catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M07403g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M07403g'  target='_blank'> Link to GRYC</a>",
                  x : -2.2021813406463,
                  y : -2.43970994214371
                  },
                  position : {
                  'x' : -22.021813406463,
                  'y' : -24.3970994214371
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
                  x : 8.05306395403364,
                  y : -2.83371763340725
                  },
                  position : {
                  'x' : 80.5306395403364,
                  'y' : -28.3371763340725
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
                  content: "<h2>CAGL0M08184g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative a-factor pheromone receptor</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M08184g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M08184g'  target='_blank'> Link to GRYC</a>",
                  x : -2.86512610148213,
                  y : -2.98272459740882
                  },
                  position : {
                  'x' : -28.6512610148213,
                  'y' : -29.8272459740882
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
                  x : -5.97082346886407,
                  y : -3.85215601824049
                  },
                  position : {
                  'x' : -59.7082346886407,
                  'y' : -38.5215601824049
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
                  content: "<h2>CAGL0B02475g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have inorganic phosphate transmembrane transporter activity, manganese ion transmembrane transporter activity, selenite:proton symporter activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02475g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02475g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0E01243g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein involved in cellular iron homeostasis; induced by Aft1p to reduce expression of iron-associated genes under iron starvation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E01243g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E01243g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0F00605g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Aldohexose specific glucokinase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00605g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00605g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0F01265g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : bZIP domain-containing protein involved in regulation of nitric oxide detoxification</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01265g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01265g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0F03553g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative heme-binding protein involved in regulation of cytochrome P450, Erg11p; required for growth under iron starvation</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F03553g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F03553g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0F06677g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have G-protein beta-subunit binding, GTPase activity, guanyl nucleotide binding activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F06677g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F06677g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0F07865g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative Zn(2)-Cys(6) binuclear cluster transcriptional regulator of ergosterol biosynthesis</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F07865g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F07865g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0H02959g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have chromatin binding activity, role in filamentous growth and nuclear chromatin localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H02959g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H02959g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0H03487g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative RNA polymerase II transcription factor, involved in regulation of iron acquisition genes; required for growth under iron depletion</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H03487g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H03487g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0H07579g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative hexokinase B</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H07579g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H07579g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0I02486g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative enolase I; protein abundance increased in azole resistant strain and in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02486g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02486g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0I04730g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative hnRNP arginine N-methyltransferase</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I04730g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I04730g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0K07590g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative myosin</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K07590g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K07590g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0K08668g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : bZIP domain-containing protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08668g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08668g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0K08756g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : bZIP domain-containing protein</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K08756g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K08756g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0K09724g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Peptidyl-prolyl cis-trans isomerase; expression upregulated in biofilm vs planktonic cell culture</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K09724g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K09724g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0L09383g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in negative regulation of filamentous growth of a population of unicellular organisms in response to starvation by negative regulation of transcription from RNA polymerase II promoter, more</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L09383g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L09383g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0M00770g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein involved in subtelomeric silencing; mutants display increased colonization of the mouse kidney relative to the wild-type strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M00770g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M00770g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0M01364g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Centromere binding factor 3d; kinetochore protein with homology to human SKP1</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M01364g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M01364g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0M04191g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Yapsin family aspartic protease; predicted GPI-anchor; complements cell wall defect phenotypes of S. cerevisiae yps1 mutant; regulation of pH homeostasis under acid conditions; induced by high temperature, Slt1- and Crz1p-dependent</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M04191g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M04191g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0M07403g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have ornithine decarboxylase inhibitor activity and role in negative regulation of translational frameshifting, regulation of proteasomal protein catabolic process</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M07403g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M07403g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0M08184g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative a-factor pheromone receptor</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M08184g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M08184g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
