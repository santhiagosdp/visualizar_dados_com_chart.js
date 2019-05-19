var API_BASE = 'http://sandbox.ulbra-to.br:8080/data-visualization/api/';


// GRAFICO DE LINHAS


var gLinhas = new Chart($('#graficoDeLinhas'), {
    type: 'line',
    data: {
        labels: [1,2,3,4,5,6,7,8,9,11],
        datasets: [{
            label: 'David Gay',
            data: [12,11,10,9,8,7,6,5,4,3,2,1,0],
            data: [12,11,10,9,8,7,6,5,4,3,2,1,0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
