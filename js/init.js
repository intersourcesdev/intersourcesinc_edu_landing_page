document.addEventListener("DOMContentLoaded", function() {
  var options = {
    duration: 500,
    indicators: true
  };

  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, options);
});
