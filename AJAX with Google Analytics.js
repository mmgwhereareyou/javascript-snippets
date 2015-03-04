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