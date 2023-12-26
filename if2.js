d3.csv("data/emisdata.csv").then(makeChart);

// Plot the data with Chart.js
function makeChart(emisdata) {
  var wlLabels = emisdata.map(function (d) {
    return d.x1;
  });
  var oakData = emisdata.map(function (d) {
    return d.y_oakface;
  });
  var brickData = emisdata.map(function (d) {
    return d.y_clybrkcm;
  });
  var soilData = emisdata.map(function (d) {
    return d.y_sndpgaz1;
  });
  var waterData = emisdata.map(function (d) {
    return d.y_distd_wn;
  });

  const data = {
    labels: wlLabels,
    datasets: [
      {
        label: "Oak leaf",
        data: oakData,
        borderColor: "green",
        backgroundColor: 'rgba(0, 77, 0, 0.5)',
      },
      {
        label: "Clay brick",
        data: brickData,
        borderColor: "red",
        backgroundColor: 'rgba(255, 0, 0, 0.5)', 
      },
      {
        label: "Sandy soil",
        data: soilData,
        borderColor: 'rgba(139, 69, 19, 1)',
        backgroundColor: 'rgba(139, 69, 19, 0.5)', 
      },
      {
        label: "Distilled water",
        data: waterData,
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.5)', 
      }
    ]
  }
  const config =  {
    type: "line",
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Interactive feature 2',
            },
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Wavelength (micrometer)', // X-axis label
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Emissivity', // Y-axis label
              },
              suggestedMin: 0,
              suggestedMax: 1,
            },
          },
      
    }
}
  var chart = new Chart("myChart", config)}