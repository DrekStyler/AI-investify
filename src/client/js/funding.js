console.log('funding.js');
let num_found = 0;

$('#founder_one').change(()=>{
  $.ajax({
    url:'/crunchbase',
    data: {'founder_one':$('#founder_one').val()},
    success: function (result) {
      let isFound = result.data[0];
      if (isFound) {
        console.log('found');
        $('.person_one').empty();
        $('.person_one').append("<div class='found'>Founder in Database</div>");
        num_found++
      } else {
        $('.person_one').empty();
        $('.person_one').append("<div class='missing'>Founder Not in Database</div>");
      }
    }
  });
});

$('#founder_two').change(()=>{
  $.ajax({
    url:'/crunchbase',
    data: {'founder_one':$('#founder_two').val()},
    success: function (result) {
      let isFound = result.data[0];
      if (isFound) {
        console.log('found');
        $('.person_two').empty();
        $('.person_two').append("<div class='found'>Founder in Database</div>");
        num_found++
      } else {
        $('.person_two').empty();
        $('.person_two').append("<div class='missing'>Founder Not in Database</div>");
      }
    }
  });
});

$('#founder_three').change(()=>{
  $.ajax({
    url:'/crunchbase',
    data: {'founder_three':$('#founder_three').val()},
    success: function (result) {
      let isFound = result.data[0];
      if (isFound) {
        console.log('found');
        $('.person_three').empty();
        $('.person_three').append("<div class='found'>Founder in Database</div>");
        num_found++
      } else {
        $('.person_three').empty();
        $('.person_three').append("<div class='missing'>Founder Not in Database</div>");
      }
    }
  });
});

$('#company_name').change(() => {
  $.ajax({
    url:'/crunchbase_org',
    data: {'company_name':$('#company_name').val()},
    success: function (result) {
      let isFound = result.data[0];
      if (isFound) {
        console.log('found');
        $('.company_found').empty();
        $('.company_found').append("<div class='found'>Company in Database</div>");
        num_found++;
        addNavButton();
        localStorage.setItem('number_found',num_found);
      } else {
        $('.company_found').empty();
        $('.company_found').append("<div class='missing'>Company Not in Database</div>");
        localStorage.setItem('number_found',num_found);
        addNavButton();
      }
    }
  });
});

function addNavButton () {
  $('.company_found').append("<button id='changeAwareness'>Next Section</button>");
  $('#changeAwareness').click((e)=> {
    e.preventDefault();
    console.log('change');
    window.location = "/awareness";
  });
}

// var api_key = "&user_key=" + crunchbase_key;
// var query_item = Object.values(req.query)[0];
