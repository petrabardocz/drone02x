// </block:config>
const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Wavelength', // X-axis label
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Emissivity', // Y-axis label
        },
      },
    },
  },
};

