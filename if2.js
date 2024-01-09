// for dev:
// d3.csv("data/emisdata2.csv").then(makeChart); // for edx comment this line and uncomment next one

// for edx:
d3.csv("https://edge.edx.org/asset-v1:WageningenUniversityResearch+WUR102+3T2020+type@asset+block@emisdata2.csv").then(makeChart); 

// Plot the data with Chart.js
function makeChart(emisdata) {
  var wlLabels = emisdata.map(function (d) {
    return parseFloat(d.x1); // Ensure x-axis values are parsed as floats
  });
  var oakData = emisdata.map(function (d) {
    return parseFloat(d.y_oakface); // Ensure y-axis values are parsed as floats
  });
  var brickData = emisdata.map(function (d) {
    return parseFloat(d.y_clybrkcm); // Ensure y-axis values are parsed as floats
  });
  var soilData = emisdata.map(function (d) {
    return parseFloat(d.y_sndpgaz1); // Ensure y-axis values are parsed as floats
  });
  var waterData = emisdata.map(function (d) {
    return parseFloat(d.y_distd_wn); // Ensure y-axis values are parsed as floats
  });

  const data = {
    labels: wlLabels,
    datasets: [
      {
        label: "Oak leaf",
        data: oakData,
        borderColor: "green",
        backgroundColor: 'rgba(0, 77, 0, 0.5)',
        pointStyle: false,
      },
      {
        label: "Clay brick",
        data: brickData,
        borderColor: "red",
        backgroundColor: 'rgba(255, 0, 0, 0.5)', 
        pointStyle: false,
      },
      {
        label: "Sandy soil",
        data: soilData,
        borderColor: 'rgba(139, 69, 19, 1)',
        backgroundColor: 'rgba(139, 69, 19, 0.5)', 
        pointStyle: false,
      },
      {
        label: "Distilled water",
        data: waterData,
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.5)', 
        pointStyle: false,
      }
    ]
  };

  const config = {
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
          ticks: {
            stepSize: 0.5, // Set the step size to 1
          },
          type: 'linear',
          min: 3.5,
          max: 14,
          position: 'bottom'
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Emissivity', // Y-axis label
          },
          suggestedMax: 1,
        },
      },
    },
  };

  var chart = new Chart("myChart", config);
}