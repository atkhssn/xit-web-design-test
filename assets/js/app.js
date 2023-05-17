/*
    Project Name: Multi Purpose Template
    Design By: atkhssn - MD ATIK HASSAN
    Version: 1.0.1
    Copyright: XIT
*/

// window scroll function
$(window).scroll(function() {

  // sticky header
  if ($(this).scrollTop() > 113){
    $('section.header').addClass("shadow-lg p-3 mb-5 sticky-header fixed-top");
    // console.log('scrolling..');
  }
  else{
    $('section.header').removeClass("shadow-lg p-3 mb-5 sticky-header fixed-top");
  }

  // top to bottom
  if ($(this).scrollTop() > 250){  
    $('div.back-to-top').addClass("backToTop");
    // console.log('working...');
  }
  else{
    $('div.back-to-top').removeClass("backToTop");
  }

});


// dom function
$(document).on('ready', function() {

  // slick slider init
  $(".testimonial-content").slick({
    autoplay: true,
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  });

});


