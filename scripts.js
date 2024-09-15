// Incluye Chart.js si aún no lo has hecho
// En el archivo index.html, añade: <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('chart-container').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Sample Data',
                data: [10, 20, 30, 40, 50, 60, 70],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
