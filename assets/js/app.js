/*
    Project Name: Multi Purpose Template
    Design By: atkhssn - MD ATIK HASSAN
    Version: 1.0.1
    Copyright: XIT
    GitHub: https://github.com/atkhssn/xit-web-design-test
*/

// window scroll event
$(window).scroll(function() {

  // sticky header
  if ($(this).scrollTop() > 113){
    $('section.header').addClass("shadow-lg p-3 mb-5 sticky-header fixed-top");
  }
  else{
    $('section.header').removeClass("shadow-lg p-3 mb-5 sticky-header fixed-top");
  }

  // top to bottom
  if ($(this).scrollTop() > 250){  
    $('div.back-to-top').addClass("backToTop");
  }
  else{
    $('div.back-to-top').removeClass("backToTop");
  }

});


// document object model event
$(document).on('ready', function() {

  // slick slider init
  $(".testimonial-content").slick({
    autoplay: true,
    infinite: true,
    dots: true,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});