$(".product-info-tabs ul li").click(function(){
  var tabName = $(this).attr('data-id');
  $(".product-info-panels ul li").removeClass('active');
  $(".product-info-tabs ul li").removeClass('active');
  $(".product-info-panels ul li[data-id="+tabName+"]").addClass('active');
  $(".product-info-tabs ul li[data-id="+tabName+"]").addClass('active');
});
