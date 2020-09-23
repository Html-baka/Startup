$('.about-photo__wrapper').flickity({
  // options
  cellAlign: 'left',
  pageDots: false,
  initialIndex: 0,
  wrapAround: true,
  contain: true
});

$('.clients__phrases').flickity({
  // options
  cellAlign: 'center',
  contain: false,
  prevNextButtons: false,
  autoPlay: 4500
});

var mixer = mixitup('.lastest-works__products');

$('.lastest-works__button').on('click', function(){
    $('button').removeClass('selected');
    $(this).addClass('selected');
});