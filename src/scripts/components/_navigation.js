$(function(){
  $('.onelevel-li').click(function() {
    $('.mapcenter-secondlevel-ul').fadeOut(300);
    $('img.tj').attr('src', '../images/mapcenter/down-jt.png');
    if ($(this).find('.mapcenter-secondlevel-ul').is(":visible")) {
      $(this).find('img.tj').attr('src', '../images/mapcenter/down-jt.png');
      $(this).find('.mapcenter-secondlevel-ul').fadeOut(300);
    } else {
      $(this).find('img.tj').attr('src', '../images/mapcenter/up-jt.png');
      $(this).find('.mapcenter-secondlevel-ul').fadeIn(300);
    }
  })
})
