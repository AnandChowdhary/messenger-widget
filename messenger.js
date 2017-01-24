var $ = function(elt) {
	return document.querySelector(elt);
}

document.addEventListener("DOMContentLoaded", function() {
	$(".messenger-widget").addEventListener("click", openM);
});

var openM = function() {
	$(".messenger-widget").classList.toggle("opened");
	setTimeout(function() {
		window.fbAsyncInit = function() {FB.init({appId: "315845372149219", xfbml: true, version: "v2.6"}); }; (function(d, s, id){var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_US/sdk.js"; fjs.parentNode.insertBefore(js, fjs); }(document, "script", "facebook-jssdk"));
	}, 1000);
};