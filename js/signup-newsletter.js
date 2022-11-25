var cookie = Cookies.get('myswim-newsletter');
if(cookie == "signedup"){
  $(".form-overlay").hide();
  $(".newsletter-signup").hide();
}else if(cookie == "notinterested"){
  $(".form-overlay").hide();
  $(".newsletter-signup").hide();
}else{
  $(".form-overlay").hide();
  $(".newsletter-signup").hide();
}

$(".form-overlay").click(function(event){
  Cookies.set('myswim-newsletter', 'notinterested', { expires: 1});
  $(".form-overlay").hide();
  $(".newsletter-signup").hide();
});

// Detect Iframe Click

var myConfObj = {
  iframeMouseOver : false
}
window.addEventListener('blur',function(){
  if(myConfObj.iframeMouseOver){
    console.log('They Have Clicked inside the form window');
  }
});

document.getElementById('myswimshop-newsletter').addEventListener('mouseover',function(){
  myConfObj.iframeMouseOver = true;
  Cookies.set('myswim-newsletter', 'notinterested');
});
document.getElementById('myswimshop-newsletter').addEventListener('mouseout',function(){
  myConfObj.iframeMouseOver = false;
  Cookies.set('myswim-newsletter', 'notinterested');
});
