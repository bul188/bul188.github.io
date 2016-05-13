(function($){
  $(function(){

    $('.button-collapse').sideNav();
  }); // end of document ready
})(jQuery); // end of jQuery name space

<!-- Parralax -->
$(document).ready(function(){
      $('.parallax').parallax();
    });
$(document).ready(function(){
	$('.tooltipped').tooltip({delay: 50});
});
window.onload = function() { // Zoom Feature
var currFFZoom = 1;
var currIEZoom = 100;

$('#In').on('click',function(){
    if (navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= 3.6){//Firefox
        var step = 0.02;
        currFFZoom += step;
        $('body').css('MozTransform','scale(' + currFFZoom + ')');
    } else {
        var step = 2;
        currIEZoom += step;
        $('body').css('zoom', ' ' + currIEZoom + '%');
    }
});
//Use the onload event so that we can make sure the DOM is at
//least mostly loaded before trying to get elements
window.onload = function() {
};
$('#Out').on('click',function(){
    if (navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= 3.6){//Firefox
        var step = 0.02;
        currFFZoom -= step;
        $('body').css('MozTransform','scale(' + currFFZoom + ')');
    } else {
        var step = 2;
        currIEZoom -= step;
        $('body').css('zoom', ' ' + currIEZoom + '%');
    }
});};
