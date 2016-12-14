console.log('position js');

$(document).ready(function() {
    $('select').material_select();
});

$('#pos_submit').click(() => {
  $.ajax({url: ""})
})

const awsAccessKey = 0;
const AssociateTag = 0;
let searchIndex = "books";
let keyWords = [];

$("button").click(function(){
    $.ajax({url: "demo_test.txt", success: function(result){
        $("#div1").html(result);
    }});
});

// http://webservices.amazon.com/onca/xml?
// Service=AWSECommerceService&
// AWSAccessKeyId=[AWS Access Key ID]&
// AssociateTag=[Associate ID]&
// Operation=ItemSearch&
// Keywords=the%20hunger%20games&
// SearchIndex=Books
// &Timestamp=[YYYY-MM-DDThh:mm:ssZ]
// &Signature=[Request Signature]
