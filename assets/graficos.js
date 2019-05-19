var API_BASE = 'http://sandbox.ulbra-to.br:8080/data-visualization/api/';


// GRAFICO DE LINHAS

function getDadosLinha(){  //Consultando a API 
	//Jquery
	$.get(API_BASE+'line/index.php',function(res){
		var data = JSON.parse(res);
		console.log(data);
		//alert(data);
		gLinhas.data.labels = data.labels;
		gLinhas.data.datasets[0].data = data.dataset;
		gLinhas.update();

		//console.log(gLinhas.data.datasets[0].data);
		//console.log(gLinhas.data.labels);
	})
}
getDadosLinha();

setInterval(() => {
	getDadosLinha();
}, 3000);


var gLinhas = new Chart($('#graficoDeLinhas'), {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'David Gay',
            data: [],
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

// GRAFICO DE BARRAS

function getDadosBarra(){  //Consultando a API 
	//Jquery
	$.get(API_BASE+'vertical-bar/index.php',function(res){
		var data = JSON.parse(res);
		console.log(data);
		//alert(data);
		gBarras.data.labels = data.labels;
		gBarras.data.datasets[0].data = data.dataset;
		gBarras.update();

		//console.log(gBarras.data.datasets[0].data);
		//console.log(gBarras.data.labels);
	})
}
getDadosBarra();

setInterval(() => {
	getDadosBarra();
}, 1000);

var gBarras = new Chart($('#graficoDeBarras'), {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'David Gay',
            data: [],
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


// GRAFICO DE TORTA

function getDadosTorta(){  //Consultando a API 
	//Jquery
	$.get(API_BASE+'pie/index.php',function(res){
		var data = JSON.parse(res);
		console.log(data);
		//alert(data);
		gTorta.data.labels = data.labels;
		gTorta.data.datasets[0].data = data.dataset;
		gTorta.update();

		//console.log(gTorta.data.datasets[0].data);
		//console.log(gTorta.data.labels);
	})
}
getDadosTorta();

setInterval(() => {
	getDadosTorta();
}, 5000);

var gTorta = new Chart($('#graficoDeTorta'), {
    type: 'pie',
    data: {
        labels: [],
        datasets: [{
            label: 'David Gay',
            data: [],
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


// INVENTANDO PARA GERAR IMAGEM TCC1
