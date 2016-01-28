jQuery(document).ready(function ($) {
  //initialise Stellar.js
  $(window).stellar();

  //scroll to give section
  var element = $('li');
  element.click(function() {
    element.removeClass('link-active');
    var targetElement = $(this).attr('scroll-to');
    $('body').animate({
      scrollTop: $('.slide[id="' + targetElement + '"]').offset().top
    }, 2000, 'easeInOutQuint');
    $(this).addClass('link-active');
  });
});
