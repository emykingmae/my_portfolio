
var ctx = document.getElementById('myChart');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Use multiple accounts for work and personal use", "Use the same cloud for work and personal use", "Use one cloud account"],
        datasets: [{
            label: '# of Votes',
            data: [30, 15, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',

            ],
            borderWidth: 2
        }]
    },
});


var ctx = document.getElementById('myChart2');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Google Drive", "DropBox", "Box or OneDrive",],
        datasets: [{
            label: '# of Votes',
            data: [17, 17, 4,],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 2
        }]
    },
});
