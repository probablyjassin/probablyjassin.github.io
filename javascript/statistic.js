// Statistic is hidden by default
document.getElementById("statistic-popup").style.display = 'none';

var chart
var counts = []

// Function to hide 
function closestat() {
    document.getElementById("statistic-popup").style.display = 'none';
    chart.destroy();
}
// Make the statistic appear:
//document.getElementById("statistic-popup").style.display = 'initial';

function countNumbersAndC(arr) {
    const result = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
    ]

    for (let i = 0; i < arr.length; i++) {
        const num = parseInt(arr[i]);
        if ((!isNaN(num) && num >= 0 && num <= 8) || arr[i] == 'C') {
            result[getIndex(num || arr[i])]++;
        }
    }

    return result;
}

function getIndex(num) {
    return ((!isNaN(num) && num >= 0 && num <= 8)) ? num : 9
}

// create chart
function makeChart() {
    if (getCookie("cookiesAgreeGe") !== 'true') {console.log("Loading statistics has been aborted, cookies haven't been agreed to")}
    else {
        // Make the div the chart will be loaded in visible
        document.getElementById("statistic-popup").style.display = 'initial';
        // Generate the chart
        const arr = getCookie("incorrectGuessesArray").split(',');
        counts = countNumbersAndC(arr)//.map(v=> v+1);
        chart = new Chart(document.getElementById("myChart"), {
            type: 'bar',
            data: {
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "Lost", "Conceded"],
                datasets: [
                    {
                        /* label: "Number of guesses needed per game",*/
                        backgroundColor: ["#3e95cd"],
                        data: counts
                    }
                ]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    },
                },
                ticks: {
                    precision:0
                  },
                grid: {
                    color: "white"
                },
                indexAxis: 'y',
                legend: {display: false},
                title: {
                    display: true,
                    text: 'Number of incorrect guesses needed per game'
                }
            },
        }); 
    }
}