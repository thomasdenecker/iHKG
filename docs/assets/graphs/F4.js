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
                  x : 3.56191605386349,
                  y : 3.51387836017226
                  },
                  position : {
                  'x' : 35.6191605386349,
                  'y' : 35.1387836017226
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
                  content: "<h2>CAGL0A01199g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative dicarboxylic amino acid permease</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01199g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01199g'  target='_blank'> Link to GRYC</a>",
                  x : 7.2813454589515,
                  y : 7.80831847868893
                  },
                  position : {
                  'x' : 72.813454589515,
                  'y' : 78.0831847868893
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
                  x : 10.4268423698993,
                  y : 11.3964645805082
                  },
                  position : {
                  'x' : 104.268423698993,
                  'y' : 113.964645805082
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
                  content: "<h2>CAGL0A01243g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted transmembrane transporter activity, role in transmembrane transport and integral component of membrane, integral component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01243g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01243g'  target='_blank'> Link to GRYC</a>",
                  x : 10.4702426277256,
                  y : 2.93042113767802
                  },
                  position : {
                  'x' : 104.702426277256,
                  'y' : 29.3042113767802
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
                  content: "<h2>CAGL0A01782g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glucose transmembrane transporter activity, pentose transmembrane transporter activity and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01782g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01782g'  target='_blank'> Link to GRYC</a>",
                  x : 3.57538162515438,
                  y : 4.00843500306543
                  },
                  position : {
                  'x' : 35.7538162515438,
                  'y' : 40.0843500306543
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
                  content: "<h2>CAGL0A01826g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glucose transmembrane transporter activity, role in glucose transmembrane transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01826g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01826g'  target='_blank'> Link to GRYC</a>",
                  x : 4.18513694928222,
                  y : 3.04697489497804
                  },
                  position : {
                  'x' : 41.8513694928222,
                  'y' : 30.4697489497804
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
                  content: "<h2>CAGL0A02211g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glucose transmembrane transporter activity, pentose transmembrane transporter activity, role in glucose transmembrane transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02211g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02211g'  target='_blank'> Link to GRYC</a>",
                  x : 4.20302973957691,
                  y : 4.53614317387931
                  },
                  position : {
                  'x' : 42.0302973957691,
                  'y' : 45.3614317387931
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
                  content: "<h2>CAGL0A02233g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glucose transmembrane transporter activity and membrane, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02233g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02233g'  target='_blank'> Link to GRYC</a>",
                  x : 3.85742622688269,
                  y : 4.46291491662878
                  },
                  position : {
                  'x' : 38.5742622688269,
                  'y' : 44.6291491662878
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
                  content: "<h2>CAGL0A03476g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cellular iron ion homeostasis, iron ion transport and fungal-type vacuole membrane, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03476g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03476g'  target='_blank'> Link to GRYC</a>",
                  x : 5.10670626216227,
                  y : 5.07457825156581
                  },
                  position : {
                  'x' : 51.0670626216227,
                  'y' : 50.745782515658
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
                  x : 4.25022743171309,
                  y : 4.05547950997505
                  },
                  position : {
                  'x' : 42.5022743171309,
                  'y' : 40.5547950997505
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
                  x : 8.11595294893587,
                  y : 9.48408757175242
                  },
                  position : {
                  'x' : 81.1595294893587,
                  'y' : 94.8408757175242
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
                  x : -0.0819311185568946,
                  y : 6.16451575974134
                  },
                  position : {
                  'x' : -0.819311185568946,
                  'y' : 61.6451575974134
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
                  content: "<h2>CAGL0B02838g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02838g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02838g'  target='_blank'> Link to GRYC</a>",
                  x : 3.10486338583229,
                  y : 3.39743293787219
                  },
                  position : {
                  'x' : 31.0486338583229,
                  'y' : 33.9743293787219
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
                  x : -1.37541302743972,
                  y : 6.50301643931328
                  },
                  position : {
                  'x' : -13.7541302743972,
                  'y' : 65.0301643931328
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
                  x : 4.84982844087594,
                  y : 3.05327807822185
                  },
                  position : {
                  'x' : 48.4982844087594,
                  'y' : 30.5327807822185
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
                  content: "<h2>CAGL0C03267g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Glycerol transporter; involved in flucytosine resistance; double fps1/fps2 mutant accumulates glycerol, has constitutive cell wall stress, is hypersensitive to caspofungin in vitro and in vivo</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03267g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03267g'  target='_blank'> Link to GRYC</a>",
                  x : -0.625891278384569,
                  y : 5.03910807711007
                  },
                  position : {
                  'x' : -6.25891278384569,
                  'y' : 50.3910807711007
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
                  x : 1.80766567684073,
                  y : 5.18860719140247
                  },
                  position : {
                  'x' : 18.0766567684073,
                  'y' : 51.8860719140247
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
                  x : 0.995347549094472,
                  y : 3.08292450283956
                  },
                  position : {
                  'x' : 9.95347549094472,
                  'y' : 30.8292450283956
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
                  x : 8.22316046931186,
                  y : 10.568196568853
                  },
                  position : {
                  'x' : 82.2316046931186,
                  'y' : 105.68196568853
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
                  x : 4.05372695912241,
                  y : 5.03537014809342
                  },
                  position : {
                  'x' : 40.5372695912241,
                  'y' : 50.3537014809342
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
                  x : 7.22933226878306,
                  y : 6.66346003347417
                  },
                  position : {
                  'x' : 72.2933226878306,
                  'y' : 66.6346003347417
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
                  x : 9.49442588666464,
                  y : 9.35638392841549
                  },
                  position : {
                  'x' : 94.9442588666464,
                  'y' : 93.5638392841549
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
                  x : 4.48402667088513,
                  y : 8.11926859137291
                  },
                  position : {
                  'x' : 44.8402667088513,
                  'y' : 81.1926859137291
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
                  content: "<h2>CAGL0E04092g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative siderophore-iron transporter with 14 transmembrane domains; required for iron-dependent survival in macrophages; mRNA levels elevated under iron deficiency conditions; plasma membrane localized</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04092g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04092g'  target='_blank'> Link to GRYC</a>",
                  x : 11.180479442466,
                  y : 4.34109743130083
                  },
                  position : {
                  'x' : 111.80479442466,
                  'y' : 43.4109743130083
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
                  x : 3.72512939382961,
                  y : 6.39796627653372
                  },
                  position : {
                  'x' : 37.2512939382961,
                  'y' : 63.9796627653372
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
                  content: "<h2>CAGL0F00187g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in transmembrane transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00187g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00187g'  target='_blank'> Link to GRYC</a>",
                  x : 5.35259001132689,
                  y : 15.0580516586399
                  },
                  position : {
                  'x' : 53.5259001132689,
                  'y' : 150.580516586399
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
                  x : -1.01898788808315,
                  y : 12.7964308659806
                  },
                  position : {
                  'x' : -10.1898788808315,
                  'y' : 127.964308659806
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
                  x : -2.51777785371121,
                  y : 7.01089898540098
                  },
                  position : {
                  'x' : -25.1777785371121,
                  'y' : 70.1089898540098
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
                  content: "<h2>CAGL0F01419g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : ATP-binding cassette transporter involved in sterol uptake</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01419g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01419g'  target='_blank'> Link to GRYC</a>",
                  x : 11.2401576612674,
                  y : 9.59419034706703
                  },
                  position : {
                  'x' : 112.401576612674,
                  'y' : 95.9419034706703
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
                  x : -0.249003545693239,
                  y : 5.60268845993482
                  },
                  position : {
                  'x' : -2.49003545693239,
                  'y' : 56.0268845993482
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
                  x : 6.8154475356472,
                  y : 3.48595085483619
                  },
                  position : {
                  'x' : 68.154475356472,
                  'y' : 34.8595085483619
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
                  content: "<h2>CAGL0F08019g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in positive regulation of binding, protein import into peroxisome matrix and cytosol, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F08019g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F08019g'  target='_blank'> Link to GRYC</a>",
                  x : 1.66684770836879,
                  y : 2.77032182239595
                  },
                  position : {
                  'x' : 16.6684770836879,
                  'y' : 27.7032182239595
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
                  x : 4.57479589520074,
                  y : 3.48859783818426
                  },
                  position : {
                  'x' : 45.7479589520074,
                  'y' : 34.8859783818426
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
                  x : 6.60240650837069,
                  y : 13.1642636510142
                  },
                  position : {
                  'x' : 66.0240650837069,
                  'y' : 131.642636510142
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
                  content: "<h2>CAGL0G02409g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have nucleolus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G02409g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G02409g'  target='_blank'> Link to GRYC</a>",
                  x : 4.50019662661356,
                  y : 12.9395245355154
                  },
                  position : {
                  'x' : 45.0019662661356,
                  'y' : 129.395245355154
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
                  x : 7.35149397233773,
                  y : 12.1541988838597
                  },
                  position : {
                  'x' : 73.5149397233773,
                  'y' : 121.541988838597
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
                  x : 2.31647976070995,
                  y : 3.25774345675248
                  },
                  position : {
                  'x' : 23.1647976070995,
                  'y' : 32.5774345675248
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
                  x : 5.54884751531744,
                  y : 12.3391269019154
                  },
                  position : {
                  'x' : 55.4884751531744,
                  'y' : 123.391269019154
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
                  content: "<h2>CAGL0H00506g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : F1F0-ATPase complex, F1 beta subunit; expression upregulated in biofilm vs planktonic cell culture; protein abundance decreased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00506g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00506g'  target='_blank'> Link to GRYC</a>",
                  x : -0.941010626276745,
                  y : 6.67790720679414
                  },
                  position : {
                  'x' : -9.41010626276745,
                  'y' : 66.7790720679414
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
                  x : 0.189170220623618,
                  y : 3.93380839467538
                  },
                  position : {
                  'x' : 1.89170220623618,
                  'y' : 39.3380839467538
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
                  content: "<h2>CAGL0H08822g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cellular iron ion homeostasis and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H08822g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H08822g'  target='_blank'> Link to GRYC</a>",
                  x : 3.51183405187524,
                  y : 12.9428227808811
                  },
                  position : {
                  'x' : 35.1183405187524,
                  'y' : 129.428227808811
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
                  x : 10.928674552023,
                  y : 5.60093044266082
                  },
                  position : {
                  'x' : 109.28674552023,
                  'y' : 56.0093044266082
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
                  x : 5.53921400710289,
                  y : 7.23032277409594
                  },
                  position : {
                  'x' : 55.3921400710289,
                  'y' : 72.3032277409594
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
                  x : -0.295893555995368,
                  y : 5.2994849542279
                  },
                  position : {
                  'x' : -2.95893555995368,
                  'y' : 52.994849542279
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
                  x : -0.164080096966164,
                  y : 3.59754648210538
                  },
                  position : {
                  'x' : -1.64080096966164,
                  'y' : 35.9754648210538
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
                  content: "<h2>CAGL0I02134g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in protein import into peroxisome matrix and cytosol, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02134g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02134g'  target='_blank'> Link to GRYC</a>",
                  x : 11.5815045727692,
                  y : 6.72519230676943
                  },
                  position : {
                  'x' : 115.815045727692,
                  'y' : 67.2519230676943
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
                  x : 6.63701883183538,
                  y : 5.20422264361595
                  },
                  position : {
                  'x' : 66.3701883183538,
                  'y' : 52.0422264361595
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
                  x : 6.37467656753253,
                  y : 12.2475907647345
                  },
                  position : {
                  'x' : 63.7467656753253,
                  'y' : 122.475907647345
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
                  x : -0.708412454469108,
                  y : 6.97810316741625
                  },
                  position : {
                  'x' : -7.08412454469108,
                  'y' : 69.7810316741625
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
                  content: "<h2>CAGL0I06743g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative ferrous iron transmembrane transporter involved in iron uptake</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I06743g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I06743g'  target='_blank'> Link to GRYC</a>",
                  x : 9.35072060284334,
                  y : 1.24232129165045
                  },
                  position : {
                  'x' : 93.5072060284334,
                  'y' : 12.4232129165045
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
                  x : -1.94014206223624,
                  y : 7.62321094452418
                  },
                  position : {
                  'x' : -19.4014206223624,
                  'y' : 76.2321094452418
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
                  x : 5.37980911173704,
                  y : 3.95429523716865
                  },
                  position : {
                  'x' : 53.7980911173704,
                  'y' : 39.5429523716865
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
                  x : 3.13797075728337,
                  y : 1.74420102814017
                  },
                  position : {
                  'x' : 31.3797075728337,
                  'y' : 17.4420102814017
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
                  x : 4.07008499562047,
                  y : 1.5111706686355
                  },
                  position : {
                  'x' : 40.7008499562047,
                  'y' : 15.111706686355
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
                  x : -0.0817828094571638,
                  y : 2.14796386510381
                  },
                  position : {
                  'x' : -0.817828094571638,
                  'y' : 21.4796386510381
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
                  content: "<h2>CAGL0I10384g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Predicted polyamine transporter of the major facilitator superfamily; required for azole resistance</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10384g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10384g'  target='_blank'> Link to GRYC</a>",
                  x : 8.51234125326553,
                  y : 12.8186341337545
                  },
                  position : {
                  'x' : 85.1234125326553,
                  'y' : 128.186341337545
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
                  x : 6.11768211801072,
                  y : 11.7768302619566
                  },
                  position : {
                  'x' : 61.1768211801072,
                  'y' : 117.768302619566
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
                  x : 5.09205300401213,
                  y : 11.971163581478
                  },
                  position : {
                  'x' : 50.9205300401213,
                  'y' : 119.71163581478
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
                  x : 4.66745081130753,
                  y : 3.91283839661144
                  },
                  position : {
                  'x' : 46.6745081130753,
                  'y' : 39.1283839661144
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
                  content: "<h2>CAGL0J09944g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Plasma membrane drug:H+ antiporter involved in resistance to drugs and acetic acid</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09944g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09944g'  target='_blank'> Link to GRYC</a>",
                  x : -3.06153907270595,
                  y : 7.30657185492182
                  },
                  position : {
                  'x' : -30.6153907270595,
                  'y' : 73.0657185492182
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
                  content: "<h2>CAGL0K00715g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein involved in 7-aminocholesterol resistance; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K00715g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K00715g'  target='_blank'> Link to GRYC</a>",
                  x : 2.41668656668391,
                  y : 15.120117804953
                  },
                  position : {
                  'x' : 24.1668656668391,
                  'y' : 151.20117804953
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
                  x : -0.27291668476659,
                  y : 4.22865528994823
                  },
                  position : {
                  'x' : -2.7291668476659,
                  'y' : 42.2865528994823
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
                  x : 5.75361991413042,
                  y : 3.31848486555501
                  },
                  position : {
                  'x' : 57.5361991413042,
                  'y' : 33.1848486555501
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
                  content: "<h2>CAGL0K04851g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in protein import into peroxisome matrix, docking and Pex17p-Pex14p docking complex, peroxisomal importomer complex, peroxisomal membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04851g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04851g'  target='_blank'> Link to GRYC</a>",
                  x : -0.00895039144834047,
                  y : 5.81128002252773
                  },
                  position : {
                  'x' : -0.0895039144834047,
                  'y' : 58.1128002252773
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
                  x : -0.0265233550522665,
                  y : 7.98387617771408
                  },
                  position : {
                  'x' : -0.265233550522665,
                  'y' : 79.8387617771408
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
                  x : 0.260161250080401,
                  y : 6.74069372955846
                  },
                  position : {
                  'x' : 2.60161250080401,
                  'y' : 67.4069372955846
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
                  x : -0.725470118766369,
                  y : 5.61080098933527
                  },
                  position : {
                  'x' : -7.25470118766369,
                  'y' : 56.1080098933527
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
                  x : 6.78646835283787,
                  y : 10.7433242075993
                  },
                  position : {
                  'x' : 67.8646835283787,
                  'y' : 107.433242075993
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
                  x : 1.96964290863592,
                  y : 12.7126897155916
                  },
                  position : {
                  'x' : 19.6964290863592,
                  'y' : 127.126897155916
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
                  x : 6.21496607951229,
                  y : 8.76039118241115
                  },
                  position : {
                  'x' : 62.1496607951229,
                  'y' : 87.6039118241115
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
                  x : 1.91686096785396,
                  y : 13.527736348114
                  },
                  position : {
                  'x' : 19.1686096785396,
                  'y' : 135.27736348114
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
                  content: "<h2>CAGL0L03267g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-proline transmembrane transporter activity, amino acid transmembrane transporter activity, beta-alanine transmembrane transporter activity, polyamine transmembrane transporter activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03267g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03267g'  target='_blank'> Link to GRYC</a>",
                  x : 1.50638334143482,
                  y : 3.52219079972872
                  },
                  position : {
                  'x' : 15.0638334143482,
                  'y' : 35.2219079972872
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
                  x : 5.67993728888536,
                  y : 4.51550551075021
                  },
                  position : {
                  'x' : 56.7993728888536,
                  'y' : 45.1550551075021
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
                  x : 1.60360036155262,
                  y : 7.28258615766357
                  },
                  position : {
                  'x' : 16.0360036155262,
                  'y' : 72.8258615766357
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
                  x : 2.67227915158174,
                  y : 14.1509210307267
                  },
                  position : {
                  'x' : 26.7227915158174,
                  'y' : 141.509210307267
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
                  x : 0.0641023086603254,
                  y : 7.47233538961242
                  },
                  position : {
                  'x' : 0.641023086603254,
                  'y' : 74.7233538961242
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
                  content: "<h2>CAGL0L13354g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative nicotinamide transporter; strongly induced under niacin-limiting conditions</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L13354g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L13354g'  target='_blank'> Link to GRYC</a>",
                  x : -1.69873698747336,
                  y : 12.2589638265581
                  },
                  position : {
                  'x' : -16.9873698747336,
                  'y' : 122.589638265581
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
                  x : 0.547186460142393,
                  y : 4.40201012857649
                  },
                  position : {
                  'x' : 5.47186460142393,
                  'y' : 44.0201012857649
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
                  x : 11.3141096947287,
                  y : 8.05072153328712
                  },
                  position : {
                  'x' : 113.141096947287,
                  'y' : 80.5072153328712
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
                  content: "<h2>CAGL0M05511g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted iron ion transmembrane transporter activity, role in iron ion transmembrane transport and high-affinity iron permease complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M05511g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M05511g'  target='_blank'> Link to GRYC</a>",
                  x : 5.20312668758732,
                  y : 4.26319210553361
                  },
                  position : {
                  'x' : 52.0312668758732,
                  'y' : 42.6319210553361
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
                  x : 2.51181952648779,
                  y : 13.3007259682988
                  },
                  position : {
                  'x' : 25.1181952648779,
                  'y' : 133.007259682988
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
                  x : 6.4818610542273,
                  y : 5.69837238797643
                  },
                  position : {
                  'x' : 64.818610542273,
                  'y' : 56.9837238797643
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
                  x : 0.210402898908014,
                  y : 2.86931866346263
                  },
                  position : {
                  'x' : 2.10402898908014,
                  'y' : 28.6931866346263
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
                  content: "<h2>CAGL0M09581g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : F1F0-ATPase complex, F1 alpha subunit</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M09581g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M09581g'  target='_blank'> Link to GRYC</a>",
                  x : -1.61891945830834,
                  y : 6.19389530736288
                  },
                  position : {
                  'x' : -16.1891945830834,
                  'y' : 61.9389530736288
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
                  content: "<h2>CAGL0A01199g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative dicarboxylic amino acid permease</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01199g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01199g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0A01243g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted transmembrane transporter activity, role in transmembrane transport and integral component of membrane, integral component of plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01243g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01243g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0A01782g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glucose transmembrane transporter activity, pentose transmembrane transporter activity and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01782g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01782g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0A01826g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glucose transmembrane transporter activity, role in glucose transmembrane transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A01826g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A01826g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0A02211g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glucose transmembrane transporter activity, pentose transmembrane transporter activity, role in glucose transmembrane transport and plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02211g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02211g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0A02233g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have glucose transmembrane transporter activity and membrane, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A02233g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A02233g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0A03476g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cellular iron ion homeostasis, iron ion transport and fungal-type vacuole membrane, plasma membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0A03476g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0A03476g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0B02838g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Protein of unknown function</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0B02838g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0B02838g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0C03267g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Glycerol transporter; involved in flucytosine resistance; double fps1/fps2 mutant accumulates glycerol, has constitutive cell wall stress, is hypersensitive to caspofungin in vitro and in vivo</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0C03267g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0C03267g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0E04092g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative siderophore-iron transporter with 14 transmembrane domains; required for iron-dependent survival in macrophages; mRNA levels elevated under iron deficiency conditions; plasma membrane localized</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0E04092g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0E04092g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0F00187g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted role in transmembrane transport</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F00187g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F00187g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0F01419g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : ATP-binding cassette transporter involved in sterol uptake</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F01419g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F01419g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0F08019g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in positive regulation of binding, protein import into peroxisome matrix and cytosol, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0F08019g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0F08019g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0G02409g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have nucleolus localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0G02409g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0G02409g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0H00506g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : F1F0-ATPase complex, F1 beta subunit; expression upregulated in biofilm vs planktonic cell culture; protein abundance decreased in ace2 mutant cells</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H00506g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H00506g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0H08822g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in cellular iron ion homeostasis and mitochondrion localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0H08822g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0H08822g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0I02134g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in protein import into peroxisome matrix and cytosol, peroxisome localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I02134g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I02134g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0I06743g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative ferrous iron transmembrane transporter involved in iron uptake</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I06743g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I06743g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0I10384g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Predicted polyamine transporter of the major facilitator superfamily; required for azole resistance</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0I10384g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0I10384g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0J09944g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Plasma membrane drug:H+ antiporter involved in resistance to drugs and acetic acid</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0J09944g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0J09944g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0K00715g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative protein involved in 7-aminocholesterol resistance; gene is upregulated in azole-resistant strain</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K00715g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K00715g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0K04851g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have role in protein import into peroxisome matrix, docking and Pex17p-Pex14p docking complex, peroxisomal importomer complex, peroxisomal membrane localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0K04851g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0K04851g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0L03267g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Ortholog(s) have L-proline transmembrane transporter activity, amino acid transmembrane transporter activity, beta-alanine transmembrane transporter activity, polyamine transmembrane transporter activity</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L03267g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L03267g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0L13354g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Putative nicotinamide transporter; strongly induced under niacin-limiting conditions</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0L13354g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0L13354g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0M05511g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : Has domain(s) with predicted iron ion transmembrane transporter activity, role in iron ion transmembrane transport and high-affinity iron permease complex localization</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M05511g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M05511g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
                  content: "<h2>CAGL0M09581g</h2><hr><p><b>Gene name</b> : </p><p><b>Description</b> : F1F0-ATPase complex, F1 alpha subunit</p><a href='http://www.candidagenome.org/cgi-bin/locus.pl?locus=CAGL0M09581g&organism=C_glabrata_CBS138'  target='_blank'>Link to CGD</a> <br><a href='http://gryc.inra.fr/index.php?page=locus&seqid=CAGL0M09581g'  target='_blank'> Link to GRYC</a>",
                  position: {
                  my: 'top center',
                  at: 'bottom center'
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
