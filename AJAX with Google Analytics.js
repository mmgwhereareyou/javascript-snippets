$( document ).ready( function () { 
  // AJAX
  if ( window.location.hash ) {
      initialLocation = "AJAXContent.php?contentIdentifier=" + window.location.hash.replace( "#", "" );
  }
  else {
      initialLocation = "AJAXContent.php?contentIdentifier=Home";
  }
  $.get( initialLocation, function ( responseHTML ) {
      $("#contentWrapper").html(responseHTML);
      document.title = "Michael Megee " + $("h2").text();
      $("select[name=mobileNavigation]").val(window.location.hash.replace( "#", "" ));
  });
});
//
// AJAX
//
window.addEventListener( "popstate", function(e) {
  $.get( "AJAXContent.php?contentIdentifier="+((window.location.hash.replace( "#", "")!="")?window.location.hash.replace( "#", ""):"Home"), function ( responseHTML ) {
      $("#contentWrapper").html( responseHTML );
      window.scrollTo(0,0);
      document.title = "Prefix Text " + $("h2").text(); // Set's Header on Page with Title
      // Google Analytics
      ga('send', {
        'hitType': 'pageview',
        'page': window.location.href
      });
  });
});
function goto ( contentIdentifier ) {
  $.get( "AJAXContent.php?contentIdentifier="+contentIdentifier, function ( responseHTML ) {
      window.history.pushState( "", "", "#" + contentIdentifier );
      $("#contentWrapper").html(responseHTML);
      window.scrollTo(0,0);
      document.title = "Michael Megee " + $("h2").text(); // Set's Header on Page with Title
      // Google Analytics
      ga('send', {
        'hitType': 'pageview',
        'page': window.location.href
      });
  });
}