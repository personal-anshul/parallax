jQuery(document).ready(function ($) {
  //initialise Stellar.js
  $(window).stellar();

  //scroll till given section
  var linkElements = $('li');
  linkElements.click(function() {
    var targetElement = $(this).attr('scroll-to');
    $('html, body').animate({
      scrollTop: $('.slide[id="' + targetElement + '"]').offset().top
    }, 2000, 'easeInOutQuint');
  });

  //Change Selected link on scroll
  document.addEventListener('scroll', changeNavigationOption, false);
  function changeNavigationOption() {
    var navBarHeight = 45;
    for(var targetElement = 1; targetElement < 5; targetElement++ ) {
      var offsetOfSlide = $("#slide" + targetElement).offset().top;
      console.log(window.pageYOffset + " and " + offsetOfSlide);
      if(window.pageYOffset + navBarHeight > offsetOfSlide) {
        linkElements.removeClass('link-active');
        $('li[scroll-to="slide' + targetElement + '"').addClass('link-active');
      }
    }
  }
});
