// Current IPO Chart
const currentIpoChartCtx = document.getElementById('currentIpoChart').getContext('2d');
const currentIpoChart = new Chart(currentIpoChartCtx, {
  type: 'pie',
  data: {
    labels: ['Subscribed', 'Remaining'],
    datasets: [{
      data: [70, 30], // Example data for active IPOs
      backgroundColor: ['#007bff', '#ffc107']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    }
  }
});

// Upcoming IPO Chart
const upcomingIpoChartCtx = document.getElementById('upcomingIpoChart').getContext('2d');
const upcomingIpoChart = new Chart(upcomingIpoChartCtx, {
  type: 'bar',
  data: {
    labels: ['ABC Corp', 'XYZ Inc', 'NextGen'],
    datasets: [{
      label: 'Issue Size ($M)',
      data: [500, 300, 200], // Example data for upcoming IPOs
      backgroundColor: ['#28a745', '#ffc107', '#17a2b8']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Company Names'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Issue Size ($M)'
        }
      }
    }
  }
});

