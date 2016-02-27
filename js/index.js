$(window).load(function () {
  $('.flipCard').css('cursor', 'pointer');
  $('.moreInfo').click(function () {
    $('main').addClass('blur');
    $('.popup').fadeToggle(200);

    $('.popup').empty();
    $('.overlay').addClass('dimBackground');
    $('.areaText').addClass('hide');
    $('.popup').addClass('popup_overlay');

    var empPosition = '#' +
      $(this).closest('.flipCard').attr('id') +
      'Bio';
    $('.popup').append($(empPosition).html());
  });

  $('.supportInfo').click(function () {
    $('main').addClass('blur');
    $('.popup').fadeToggle(200);

    $('.popup').empty();
    $('.overlay').addClass('dimBackground');
    $('.areaText').addClass('hide');
    $('.popup').addClass('popup_overlay');

    var empPosition = '#' +
      $(this).closest('.flipCard').attr('id') +
      'Staff';
    $('.popup').append($(empPosition).html());
  });

  $('.popup').click(function () {
   $('main').removeClass('blur');
   $('body').removeClass('blur');
   $('.popup').removeClass('popup_overlay');

   $('.popup').fadeToggle(150);
   $('.overlay').removeClass('dimBackground');
   $('.areaText').removeClass('hide');
 });
});

/* function popupClose() {
  $('main').removeClass('blur');
  $('body').removeClass('blur');

  $('.popup').fadeToggle(150);
  $('.overlay').removeClass('dimBackground');
  $('.areaText').removeClass('hide');
}; */
