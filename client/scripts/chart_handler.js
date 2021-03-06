function loadCharts(response_data) {
    var canvasWindow = {};    

    drawChart(canvasWindow,response_data);


    function drawChart(canvasWindow, response_data) {

        let ctx = document.getElementById('myChart-pie').getContext('2d');
        let ctx1 = document.getElementById('myChart-bar').getContext('2d');


        canvasWindow.myChart1 = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: response_data.label,
                datasets: [{
                    label: '# of Followers',
                    data: response_data.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 120, 30, 1)',
                        'rgba(255, 95, 46, 1)',
                        'rgba(255, 98, 64, 1)',
                        'rgba(255, 198, 255, 1)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 120, 30, 1)',
                        'rgba(255, 95, 46, 1)',
                        'rgba(255, 98, 64, 1)',
                        'rgba(255, 198, 255, 1)',
                    ],
                    borderWidth: 3
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: Math.min(...response_data.data),
                            max: Math.max(...response_data.data),
                        }
                    }]
                }
            },
        });

        canvasWindow.myChart2 = new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: response_data.label,
                datasets: [{
                    label: '# of Friends',
                    data: response_data.friends_count,
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 120, 30, 1)',
                        'rgba(255, 95, 46, 1)',
                        'rgba(255, 98, 64, 1)',
                        'rgba(255, 198, 255, 1)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 120, 30, 1)',
                        'rgba(255, 95, 46, 1)',
                        'rgba(255, 98, 64, 1)',
                        'rgba(255, 198, 255, 1)',
                    ],
                    borderWidth: 3
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false,
                            min: Math.min(...response_data.friends_count),
                        }
                    }]
                }
            },
        });
    }
}