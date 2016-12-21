console.log('final.js');
var team_score = scoreQuestions();
var position_score = scorePosition();
var market_score = scoreMarket();
var funding_score = scoreFunding();
var total_score = findTotal();
console.log(team_score);
var name = localStorage.getItem('record_name');

$('#final_results').click(function() {
  console.log('siiiiick');
  var ctx = document.getElementById("chart-area").getContext('2d');
  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Team", "Position", "Market", "Funding", "Final Score"],
      datasets: [{
        label: name + "'s Scores",
        backgroundColor: [
          "#2ecc71",
          "#3498db",
          "#95a5a6",
          "#9b59b6",
          "#1C77CC"
        ],
        data: [team_score, position_score, market_score, funding_score, total_score]
      }]
    }
  });
});
console.log(team_score,position_score,market_score,funding_score,total_score);
function scoreQuestions () {
  team_score = 0;
  let q1A = localStorage.getItem('selected1');
  let q2A = localStorage.getItem('selected2');
  let q3A = localStorage.getItem('selected3');
  if( q1A === "5+ Years") {
    team_score++;
  }
  if ( q2A === "Scenario B") {
    team_score++;
  }
  if ( q3A === "Blue") {
    team_score++;
  }
  team_score = (team_score / 3).toFixed(2) * 100;
  console.log(team_score)
  return team_score;
}

function scorePosition () {
  let priced = localStorage.getItem('pricedCorrectly');
  console.log(priced);
  if (priced === 'true') {
    position_score = 100;
    console.log('here',position_score);
    return position_score;
  } else {
    position_score = 0;
    return position_score;
  }
}
function scoreMarket() {
    var market_score = parseInt(localStorage.getItem('target_market'));
  if(localStorage.getItem('salary_req') === 'true') {
    market_score = parseInt(localStorage.getItem('target_market')) + 50;
  }
  return market_score;
}
function scoreFunding() {
  funding_score = (localStorage.getItem('number_found'))/4 * 100;
  return funding_score;
}
function findTotal() {
  total_score = (team_score + position_score + market_score + funding_score)/4;
  return total_score;
}
