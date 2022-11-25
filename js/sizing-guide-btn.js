$(".sizing-meta-btn").click(function(){
  var productTitle = $("h1.bc-product__title").text();
  $(".sizing-guide-title").html("");
  $(".sizing-guide-title").html(productTitle + " Sizing Guide");
  $(".sizing-guide-overlay").show();
  $(".sizing-guide-holder").show();
});

$(".sizing-guide-overlay").click(function(){
  $(".sizing-guide-overlay").hide();
  $(".sizing-guide-holder").hide();
});
