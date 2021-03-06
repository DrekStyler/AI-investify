console.log('market.js');
let groupFifteen = 6361;
let groupTwentyFive = 20047;
let groupThirtyFive = 21222;
let groupFortyFive = 23294;
let groupFiftyFive = 23896;
let groupSixtyFivePlus = 30998;
let totalHouseholds = 125818;
let selectedGroup = 0;
let remainingHouseholds = 0;
let selectedLabel;

$(document).ready(function() {
    $('select').material_select();
    $('#target_age').change(function () {
      switch ($('#target_age').val()) {
        case '15-24':
        selectedGroup = groupFifteen;
        remainingHouseholds = totalHouseholds - groupFifteen;
        selectedLabel = '15-24';
        localStorage.setItem('target_market',(selectedGroup / totalHouseholds).toFixed(2) * 100);
            break;
          case '25-34':
          selectedGroup = groupTwentyFive;
          remainingHouseholds = totalHouseholds - groupTwentyFive;
          selectedLabel = '25-34';
          localStorage.setItem('target_market',(selectedGroup / totalHouseholds).toFixed(2) * 100);
            break;
          case '35-44':
          selectedGroup = groupThirtyFive;
          remainingHouseholds = totalHouseholds - groupThirtyFive;
          selectedLabel = '35-44';
          localStorage.setItem('target_market',(selectedGroup / totalHouseholds).toFixed(2) * 100);
            break;
          case '45-54':
            selectedGroup = groupFortyFive;
            remainingHouseholds = totalHouseholds - groupFortyFive;
            selectedLabel = '45-54';
            localStorage.setItem('target_market',(selectedGroup / totalHouseholds).toFixed(2) * 100);
              break;
          case '55-44':
            selectedGroup = groupFiftyFive;
            remainingHouseholds = totalHouseholds - groupFiftyFive;
            selectedLabel = '55-64';
            localStorage.setItem('target_market',(selectedGroup / totalHouseholds).toFixed(2) * 100);
              break;
          case '65+':
            selectedGroup = groupSixtyFivePlus;
            remainingHouseholds = totalHouseholds - groupSixtyFivePlus;
            selectedLabel = '65+';
            localStorage.setItem('target_market',selectedGroup / totalHouseholds);
              break;
        default:
          console.log('nope');
      }
      chart.data.labels = [selectedLabel,"Remaining Population"];
      chart.data.datasets = [{
          backgroundColor: [
            "#2ecc71",
            "#3498db"
          ],
          data: [selectedGroup, remainingHouseholds]
        }];
      chart.update();
      $('.holder').empty();
      $('.holder').append("<button class='waves-effect waves-light btn-large'id='changeFunding'>Next Section</button>");
      $('#changeFunding').click((e)=> {
        e.preventDefault();
        window.location = "/funding";
      });
    });
    $('#target_sal').change(function () {
      console.log('hit');
      if($('#target_salary').val() !== "Less than $50K" && $('#target_salary').val() !== "$200K+") {
        localStorage.setItem('salary_req',true);
      }
    });
  });

  $('#target_sal').change(function () {
    console.log('hit');
    if($('#target_salary').val() !== "Less than $50K" && $('#target_salary').val() !== "$200K+") {
      localStorage.setItem('salary_req',true);
    }
  });

  var ctx = document.getElementById("chart-area").getContext('2d');
  var chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["15-24", "25-34", "35-44", "45-54", "55-64", "65+"],
      datasets: [{
        backgroundColor: [
          "#2ecc71",
          "#3498db",
          "#95a5a6",
          "#9b59b6",
          "#f1c40f",
          "#e74c3c"
        ],
        data: [groupFifteen, groupTwentyFive, groupThirtyFive, groupFortyFive, groupFiftyFive, groupSixtyFivePlus]
      }]
    }
  });
