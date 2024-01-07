d3.csv("data/emisdata2.csv").then(makeChart);


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
            stepSize: 1,
            min: 3.6, // Start from 3.6
            max: 14.5, // End at 14.5
            callback: function (value, index, values) {
              // Display labels only between 4 and 14
              if (value >= 4 && value <= 14) {
                return Math.round(value);
              } else {
                return '';
              }
            },
          },
          type: 'linear', // Set the x-axis type to linear
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
