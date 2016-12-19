console.log('position js');
let total = 0;
let avg_price = 0;

$(document).ready(function() {
    $('select').material_select();
  });

$('button').click(function(e) {
    e.preventDefault();
    $.ajax({url: '/amazon',
      data: {item:$('#item_name').val()},
      success: function(result) {
        let results_JSON = JSON.parse(result);
        let itemset_JSON = results_JSON.results;
        console.log(itemset_JSON);
        itemset_JSON.forEach((item) => {
          getAvg(item.price);
        });
          divTen(total);
          console.log(avg_price);
      }});
  });

function getAvg (prices) {
  total += parseInt(prices);
  return total;
}

function divTen (total) {
  avg_price = total / 10;
  return avg_price;
}
