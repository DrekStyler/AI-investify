console.log('market.js');

$(document).ready(function() {
    $('select').material_select();
  });

  var ctx = document.getElementById("chart-area").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      //labels: ["M", "T", "W", "T", "F", "S", "S"],
      datasets: [{
        backgroundColor: [
          "#2ecc71",
          "#3498db",
          "#95a5a6",
          "#9b59b6",
          "#f1c40f",
          "#e74c3c",
          "#34495e"
        ],
        data: [120, 19, 3, 17, 28, 24, 7]
      }]
    }
  });
