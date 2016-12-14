console.log('position js');
let searchIndex = "books";
let keyWords = [];

$(document).ready(function() {
    $('select').material_select();
});




$("button").click(function(e){
    e.preventDefault();
    $.ajax({url: "/amazon", success: function(result){
        console.log("hit");
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
