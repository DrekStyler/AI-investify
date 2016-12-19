console.log('funding.js');

$('#founder_one').change(()=>{
  $.ajax({
    url:'/crunchbase',
    data: {'founder_one':$('#founder_one').val()},
    success: {function (result) {
      console.log(result);
    }}
  });
});


// var api_key = "&user_key=" + crunchbase_key;
// var query_item = Object.values(req.query)[0];
