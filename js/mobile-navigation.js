$("#menu-standard-mobile-menu li").click(function(event){
  event.preventDefault();
  var linkUrl = $(this).find('a').attr('href');
  var title = $(this).find('.title').html();
  var imageUrl = $(this).find('img').attr('src');
  if($(this).find('.sub-menu').length){
    $(".current-menu-title").html(title);
    $(".current-menu-image").css('background-image', "url("+imageUrl+")");
    $("#menu-standard-mobile-menu li").not(this).addClass('outoftheway');
    $(this).addClass('fancyCurrent');
    setTimeout(function () {
      $(".bottom-menu a").attr('href', linkUrl);
      $(".bottom-menu a").html('View All ' + title);
      $(".bottom-menu").show();
      $(this).removeClass('fancyCurrent');
      $(this).find('.sub-menu').children('li').removeClass('outoftheway');
      $(this).find('.sub-menu').show();
      $(this).addClass('currentSelectedMenu');
      $(".current-menu-title").show();
      $(".current-menu-image").show();
      $(".current-menu-overlay").show();
      $(".mobile-navigation .go-back").show();
    }.bind(this), 500);
  }else{
    window.location.href = linkUrl;
  }
});

$(".mobile-navigation").scroll(function(){
  $(".bottom-menu").addClass('hide');
  $(".current-menu-title").addClass('scrolled');
  setTimeout(function () {
    $(".bottom-menu").removeClass('hide');
  }, 5000);
});

$(".mobile-navigation .go-back").click(function(){
  $("#menu-standard-mobile-menu").hide();
  $(".bottom-menu").hide();
  $(".sub-menu").hide();
  $(".current-menu-title").hide();
  $(".current-menu-image").hide();
  $(".current-menu-overlay").hide();
  $(".mobile-navigation .go-back").hide();
  $("#menu-standard-mobile-menu li").removeClass('outoftheway');
  $("#menu-standard-mobile-menu li").removeClass('currentSelectedMenu');
  setTimeout(function () {
    $("#menu-standard-mobile-menu").show();
  }, 250);
});
