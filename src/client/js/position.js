console.log('position js');
let total = 0;
let avg_price = 0;
let counter = 0;
let percentDif = 0;
let avgPriceInt = 0;
let pricedCorrectly = false;

$(document).ready(function() {
    $('select').material_select();
  });

$('#find_position').click(function(e) {
    e.preventDefault();
    $.ajax({url: '/amazon',
      data: {item:$('#item_name').val()},
      success: function(result) {
        let results_JSON = JSON.parse(result);
        let itemset_JSON = results_JSON.results;
        console.log(itemset_JSON);
        itemset_JSON.forEach((item) => {
          if(item.price) {
            counter++;
            getAvg(item.price);
          }
        });
          divTen(total);
          avgPriceInt = avg_price;
          avg_price = "$" + avg_price.toFixed(2).toString();
      }}).then((results) => {
        let user_price = $('#item_price').val();
        $('#find_position').remove();
        $('.results_disp').append("<div id='price_div'>"+ avg_price + "</div>");
        $('.results_disp').append("<div>" + userMessage(avgPriceInt,user_price) + "</div>");
        $('.results_disp').append("<div>" + positionPrice() + "</div>");
        $('.results_disp').append("<button id='changeMarket'>Next Section</button>");

        localStorage.setItem('pricedCorrectly', pricedCorrectly);
        
        $('#changeMarket').click(function () {
          console.log('hit');
          window.location = "/market";
        });
      });
    });

function getAvg (prices) {
  total += parseInt(prices);
  return total;
}

function divTen (total) {
  avg_price = total / counter;
  console.log(total);
  return avg_price;
}

let userMessage = function compPrice (avg_price,user_price) {
  if (user_price >= avg_price) {
    percentDif = (user_price / avg_price - 1) * 100;
    percentDif = percentDif.toFixed(0).toString() + "%";
    return `Your product is priced ${percentDif} above other online retailers`;
  } else {
    percentDif = (1 - user_price / avg_price) * 100;
    percentDif = percentDif.toFixed(0).toString() + "%";
    return `Your product is priced ${percentDif} below other online retailers`;
  }
};

let positionPrice = function () {
  let user_price = $('#item_price').val();
  let position = $('#item_position').val();
  if(position === "Luxury" && user_price > avgPriceInt) {
    pricedCorrectly = true;
    return "Your product is priced at a premium and is consistent with your positoning";
  } else if (position === "Economy" && user_price < avgPriceInt) {
    pricedCorrectly = true;
    return "Your product is priced at a discound and is consistent with your positioning";
  } else {
    pricedCorrectly = false;
    return "Your product is priced inconsistently with your positioning.";
  }
};
