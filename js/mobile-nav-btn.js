jQuery(".hamburger").click(function(event){
  event.preventDefault();
  if($(".hamburger").hasClass('is-active')){
    $(".hamburger").removeClass('is-active');
    $(".mobile-navigation").hide();
    $(".mobile-nav-btn").css('position', 'absolute');
  }else{
    $(".hamburger").addClass('is-active');
    $(".mobile-navigation").show();
    $(".mobile-nav-btn").css('position', 'fixed');
  }
});
