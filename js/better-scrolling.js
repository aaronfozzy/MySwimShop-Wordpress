$('#menu-standard-desktop-menu .sub-menu-wrap ul').on('mousewheel DOMMouseScroll', function(e){ 

  var e0 = e.originalEvent;
  var delta = e0.wheelDelta || -e0.detail;

  this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
  e.preventDefault();
});
