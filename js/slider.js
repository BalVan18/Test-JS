$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  draggable: false,
  asNavFor: '.slider__nav'
  });
  $('.slider__nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.slider',
  dots: false,
  infinite: false,
  centerMode: true,
  focusOnSelect: true
  });