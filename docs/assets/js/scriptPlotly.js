function makeplot(groupName) {
  Plotly.d3.csv("./assets/dataTable/"+groupName+"/"+groupName+"_P1.csv", function(data) {
    processData(data, "Pie1", "Piechart of types", ['#d1d2d3', '#ffe599', '#d5a6bd', '#9fc5e8'])
  });

  Plotly.d3.csv("./assets/dataTable/"+groupName+"/"+groupName+"_multiPies.csv", function(data) {

    processDataMulti(data, "Piealt", "Differential expression - Iron condition", ['#66ff66', '#009900', '#000000', '#cc0000', '#ffb3b3'])
  });

  Plotly.d3.csv("./assets/dataTable/"+groupName+"/"+groupName+"_barplot.csv", function(data) {
    processDataBP(data, "barplotDiv", "Differential expression by iron responsive genes", ['#66ff66', '#009900', '#000000', '#cc0000', '#ffb3b3'])
  });
};

// Simple plot - Pie chart
function processData(allRows, divName, title, colors) {
  var labels = [],
    values = [];

  for (var i = 0; i < allRows.length; i++) {
    row = allRows[i];
    labels.push(row['labels']);
    values.push(row['n']);
  }
  makePlotly(labels, values, divName, title, colors);
}

function makePlotly(labels, values, divName, title, colors) {
  var plotDiv = document.getElementById(divName);
  var data = [{
    values: values,
    labels: labels,
    type: 'pie',
    sort: false,
    'marker': {
      'colors': colors
    }
  }];

  var layout = {
    title: {
      text: '<b>' + title + '</b>'
    }
  };

  Plotly.newPlot(divName, data, layout);
  plotDiv.on('plotly_legendclick', function() {
    return false;
  })
};

// Simple plot - Barplot
function processDataBP(allRows, divName, title, colors) {
  var labels = [],
    DA = [],
    DO = [],
    NO = [],
    UO = [],
    UA = [];

  for (var i = 0; i < allRows.length; i++) {
    row = allRows[i];
    labels.push(row['type']);
    DA.push(row["DOWN (30° and 37°)"]);
    DO.push(row["DOWN (30° or 37°)"]);
    NO.push(row["NO"]);
    UO.push(row["UP (30° or 37°)"]);
    UA.push(row["UP (30° and 37°)"]);
  }

  var trace1 = {
    x: labels,
    y: DA,
    name: 'DOWN (30° and 37°)',
    type: 'bar',
    marker: {
      color: colors[0]
    }
  };

  var trace2 = {
    x: labels,
    y: DO,
    name: 'DOWN (30° or 37°)',
    type: 'bar',
    marker: {
      color: colors[1]
    }
  };

  var trace3 = {
    x: labels,
    y: NO,
    name: 'NO',
    type: 'bar',
    marker: {
      color: colors[2]
    }
  };

  var trace4 = {
    x: labels,
    y: UO,
    name: 'UP (30° or 37°)',
    type: 'bar',
    marker: {
      color: colors[3]
    }
  };

  var trace5 = {
    x: labels,
    y: UA,
    name: 'UP (30° and 37°)',
    type: 'bar',
    marker: {
      color: colors[4]
    }
  };

  var data = [trace1, trace2, trace3, trace4, trace5];
  var layout = {
    barmode: 'stack',
    title: '<b>' + title + '</b>',
    margin: {
      b: 100
    },
  };
  Plotly.newPlot(divName, data, layout);

  var plotDiv = document.getElementById(divName);
  plotDiv.on('plotly_legendclick', function() {
    return false;
  })
}

// multi plot
function processDataMulti(allRows, divName, title, colors) {
  var labels = [],
    low = [],
    high = [];

  for (var i = 0; i < allRows.length; i++) {
    row = allRows[i];
    labels.push(row['labels']);
    low.push(row['low']);
    high.push(row['high']);
  }
  makePlotlyMulti(labels, low, high, divName, title, colors);
}

function makePlotlyMulti(labels, low, high, divName, title, colors) {
  var plotDiv = document.getElementById(divName);

  var data = [{
    values: low,
    labels: labels,
    type: 'pie',
    sort: false,
    'marker': {
      'colors': colors
    },
    name: 'Low iron',
    domain: {
      row: 0,
      column: 0
    }
  }, {
    values: high,
    labels: labels,
    type: 'pie',
    sort: false,
    'marker': {
      'colors': colors
    },
    name: 'High iron',
    domain: {
      row: 0,
      column: 1
    }
  }];

  var layout = {
    title: '<b>' + title + '</b>',
    grid: {
      rows: 1,
      columns: 2,
      pattern: 'independent'
    },
    annotations: [{
        text: "<b>Low iron</b>",
        showarrow: false,
        font: {
          size: 14
        },
        align: 'left',
        x: 0,
        y: 1,
        xref: 'paper',
        yref: 'paper',
      },
      {
        text: "<b>High iron</b>",
        font: {
          size: 14
        },
        showarrow: false,
        align: 'right',
        x: 1,
        y: 1,
        xref: 'paper',
        yref: 'paper',
      }
    ]
  };

  Plotly.newPlot(divName, data, layout);
  plotDiv.on('plotly_legendclick', function() {
    return false;
  })

};
