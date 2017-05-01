var CiviCart = CiviCart || {};

if(window.CRM && CRM.$) {
  CiviCart.$ = CRM.$;
} else {
  CiviCart.$ = jQuery;
}


(function($) {

CiviCart.postAddData = function(params) {

  params.dataType = "json";
  var jqxhr = $.post( Drupal.settings.basePath + 'civicart/add', params)
    .done(function(data) {
      if(typeof(data) != "Object") {
        data = $.parseJSON(data);
      }

      if(data.status == "success") {
        CiviCart.message( CiviCart.ts("Item Added"), CiviCart.ts("Success"), "success");
        CiviCart.updateCartNumber(data.count);
      }

      console.log(data);
    })
    .fail(function(msg) {
      CiviCart.message( CiviCart.ts("Unable to connect to cart"), CiviCart.ts("Network Error"), "error" );
    });
}

})(CiviCart.$);