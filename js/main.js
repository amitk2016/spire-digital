// Jquery Fadein Slider
$(document).ready(function(){
  var autoswitch = true;
  if (autoswitch == true ) {
    $("#slider > div:gt(0)").hide();
      setInterval(nextSlide,6000);

      function nextSlide(){
        $('#slider > div:first')
          .fadeOut(2000)
          .next()
          .fadeIn(2000)
          .end()
          .appendTo('#slider');
      }
  }
});




// particle js loading function
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
