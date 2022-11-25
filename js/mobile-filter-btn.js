if($(".facetwp-template").length){
  $(".mobile-filter-btn").addClass('active');
}

$(".mobile-filter-btn").click(function(){
  $(".mobile-filtering").show();
});

$(".close-filters-button button").click(function(){
  $(".mobile-filtering").hide();
});
