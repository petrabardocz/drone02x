// Interactive feature 2 - Emissivity graphs

document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('line-chart');
  
    // Sample data
    const labels = Array.from({ length: 14 }, (_, index) => index);
    const grassData = Array.from({ length: labels.length }, () => Math.random());
    const oakData = Array.from({ length: labels.length }, () => Math.random());
    const waterData = Array.from({ length: labels.length }, () => Math.random());

    
    const data = {
      labels: labels,
      datasets: [
        {
            label: 'Grass',
            data: grassData,
            borderColor: 'green',
            backgroundColor: 'rgba(255, 0.5, 0, 0)',
        },
        {
            label: 'Oak',
            data: oakData,
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
          },
          {
            label: 'Water',
            data: waterData,
            borderColor: 'blue',
            backgroundColor: 'rgba(255, 0, 0.5, 0)',
          },
              
      ],
    };

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
                  text: 'Interactive feature 2',
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
          
        }
      }


    new Chart(ctx, config);
  });
  