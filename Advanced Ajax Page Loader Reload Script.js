//* AJAX Script & Style Loader
//* Remove Content Class Wrapper
if ( myslug!=undefined ) jQuery('div#ajax_content').removeClass( myslug );
//* Get Current Slug
myslug = window.location.href.split("/")[window.location.href.split("/").length-2];
//* Add Content Wrapper Class
jQuery('div#ajax_content').addClass( myslug );
//* Remove Old Scripts and Styles
jQuery('#current-style').remove();
jQuery('#current-script').remove();
//* Load Styles
jQuery('head').append('<link id="current-style" rel="stylesheet" href="http://localhost/wordpress/wp-content/uploads/lessify-cache/less-'+myslug+'-style.css" type="text/css" media="all">');
//* Load Scripts
jQuery('head').append('<script id="current-script" type="text/javascript" src="http://localhost/wordpress/wp-content/themes/genesis-sample/js/'+myslug+'.js"></script>');