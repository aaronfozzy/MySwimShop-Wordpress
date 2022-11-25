$(document).ready(function(){
  $("#menu-standard-desktop-menu li").hover(function(){
    $(this).children(".sub-menu-wrap").toggle();
    $(this).children(".image-menu").toggle();
  });
  $("#menu-standard-desktop-menu li ul li.menu-item-has-children").hover(function(e){
    e.stopPropagation();
    $(this).parent('ul').css('overflow-y', 'visible');
    $(this).parent('ul').css('overflow-x', 'visible');
  });
});
