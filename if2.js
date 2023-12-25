// your_script.js

document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('line-chart');
  
    // Sample data
    const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
    const grassData = [10, 20, 15, 25, 18, 30];
    
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Grass',
          data: grassData,
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
        },
      ],
    };
  
    new Chart(ctx, {  
      type: 'line',
      data: data,
    });
  });
  