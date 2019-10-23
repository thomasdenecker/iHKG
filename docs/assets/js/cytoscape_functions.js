$(function() { // on dom ready

  document.getElementById('layoutRandom').onclick = function() {
    var layout = cy.layout({
      name: 'random',
      fit: true
    });
    layout.run();
  };

  document.getElementById('layoutGrid').onclick = function() {
    var layout = cy.layout({
      name: 'grid',
      fit: true
    });
    layout.run();
  };

  document.getElementById('layoutCose').onclick = function() {
    var layout = cy.layout({
      name: 'cose',
      fit: true
    });
    layout.run();
  };

  document.getElementById('layoutCoseB').onclick = function() {
    var layout = cy.layout({
      name: 'cose-bilkent',
      fit: true
    });
    layout.run();
  };

  document.getElementById('layoutCircle').onclick = function() {
    var layout = cy.layout({
      name: 'circle',
      fit: true
    });
    layout.run();
  };

  document.getElementById('layoutConcentric').onclick = function() {
    var layout = cy.layout({
      name: 'concentric',
      fit: true
    });
    layout.run();
  };

  document.getElementById('layoutBreadthfirst').onclick = function() {
    var layout = cy.layout({
      name: 'breadthfirst',
      fit: true
    });
    layout.run();
  };

}); // on dom ready
