function scrollFunction(){20<document.body.scrollTop||20<document.documentElement.scrollTop?mybutton.style.display="block":mybutton.style.display="none"}function topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}mybutton=document.getElementById("back-to-top"),window.onscroll=function(){scrollFunction()},$("#back-to-top").click(function(){topFunction()}),$("#menu-standard-desktop-menu .sub-menu-wrap ul").on("mousewheel DOMMouseScroll",function(e){var delta=e.originalEvent,delta=delta.wheelDelta||-delta.detail;this.scrollTop+=30*(delta<0?1:-1),e.preventDefault()}),$(document).ready(function(){$("#menu-standard-desktop-menu li").hover(function(){$(this).children(".sub-menu-wrap").toggle(),$(this).children(".image-menu").toggle()}),$("#menu-standard-desktop-menu li ul li.menu-item-has-children").hover(function(e){e.stopPropagation(),$(this).parent("ul").css("overflow-y","visible"),$(this).parent("ul").css("overflow-x","visible")})}),$(".facetwp-template").length&&$(".mobile-filter-btn").addClass("active"),$(".mobile-filter-btn").click(function(){$(".mobile-filtering").show()}),$(".close-filters-button button").click(function(){$(".mobile-filtering").hide()}),jQuery(".hamburger").click(function(event){event.preventDefault(),$(".hamburger").hasClass("is-active")?($(".hamburger").removeClass("is-active"),$(".mobile-navigation").hide(),$(".mobile-nav-btn").css("position","absolute")):($(".hamburger").addClass("is-active"),$(".mobile-navigation").show(),$(".mobile-nav-btn").css("position","fixed"))}),$("#menu-standard-mobile-menu li").click(function(imageUrl){imageUrl.preventDefault();var linkUrl=$(this).find("a").attr("href"),title=$(this).find(".title").html(),imageUrl=$(this).find("img").attr("src");$(this).find(".sub-menu").length?($(".current-menu-title").html(title),$(".current-menu-image").css("background-image","url("+imageUrl+")"),$("#menu-standard-mobile-menu li").not(this).addClass("outoftheway"),$(this).addClass("fancyCurrent"),setTimeout(function(){$(".bottom-menu a").attr("href",linkUrl),$(".bottom-menu a").html("View All "+title),$(".bottom-menu").show(),$(this).removeClass("fancyCurrent"),$(this).find(".sub-menu").children("li").removeClass("outoftheway"),$(this).find(".sub-menu").show(),$(this).addClass("currentSelectedMenu"),$(".current-menu-title").show(),$(".current-menu-image").show(),$(".current-menu-overlay").show(),$(".mobile-navigation .go-back").show()}.bind(this),500)):window.location.href=linkUrl}),$(".mobile-navigation").scroll(function(){$(".bottom-menu").addClass("hide"),$(".current-menu-title").addClass("scrolled"),setTimeout(function(){$(".bottom-menu").removeClass("hide")},5e3)}),$(".mobile-navigation .go-back").click(function(){$("#menu-standard-mobile-menu").hide(),$(".bottom-menu").hide(),$(".sub-menu").hide(),$(".current-menu-title").hide(),$(".current-menu-image").hide(),$(".current-menu-overlay").hide(),$(".mobile-navigation .go-back").hide(),$("#menu-standard-mobile-menu li").removeClass("outoftheway"),$("#menu-standard-mobile-menu li").removeClass("currentSelectedMenu"),setTimeout(function(){$("#menu-standard-mobile-menu").show()},250)}),$(".mobile-search-btn").click(function(){$(".mobile-search-holder").show()}),$(".close-search-btn").click(function(){$(".mobile-search-holder").hide()}),$(document).ready(function(){var womensVersionArray,womensVersionLabelArray,mensVersionArray,altColourOneArray,altColourOneLabelArray,womensVersionLink,womensVersionLabel,altColourOneLink,altColourOneLabel;$(".custom-fields-hidden").length&&(womensVersionArray=[],womensVersionLabelArray=[],mensVersionArray=[],altColourOneArray=[],altColourOneLabelArray=[],$(".custom-fields-hidden .bc-product__spec-list .bc-product__spec").each(function(){var specTitle=$(this).find(".bc-product__spec-title").text(),specValue=$(this).find(".bc-product__spec-value").text();switch(specTitle){case"sizing:":$(".sizing-guide-modal img").attr("src","https://store-8a17r5u7.mybigcommerce.com/content/sizing-guides/"+specValue+".png"),$(".sizing-guide-modal img").attr("alt",specValue);break;case"Gender:":$(".additional-title-info").append(specValue);break;case"Year:":$(".additional-title-info").append(" - "+specValue);break;case"womens-version-label:":womensVersionLabelArray.push(specValue);break;case"womens-version:":var splittedUrl=specValue.split("https://mytriathlon.co.uk")[1];womensVersionArray.push(splittedUrl);break;case"mens-version-label:":mensVersionLabelArray.push(specValue);break;case"mens-version:":splittedUrl=specValue.split("https://mytriathlon.co.uk")[1];mensVersionArray.push(splittedUrl);break;case"alt-colour-1-label:":altColourOneLabelArray.push(specValue);break;case"alt-colour-1:":splittedUrl=specValue.split("https://mytriathlon.co.uk")[1];altColourOneArray.push(splittedUrl)}}),womensVersionArray.length&&womensVersionLabelArray.length&&(womensVersionLink=womensVersionArray[0],womensVersionLabel=womensVersionLabelArray[0],$(".additional-buttons ul").append("<li><a href='/products"+womensVersionLink+"'>"+womensVersionLabel+"</a></li>")),mensVersionArray.length&&mensVersionLabelArray.length&&(altColourOneLink=womensVersionArray[0],altColourOneLabel=womensVersionLabelArray[0],$(".additional-buttons ul").append("<li><a href='/products"+altColourOneLink+"'>"+altColourOneLabel+"</a></li>")),altColourOneLabelArray.length&&altColourOneArray.length&&(altColourOneLink=altColourOneArray[0],altColourOneLabel=altColourOneLabelArray[0],$(".additional-buttons ul").append("<li><a href='/products"+altColourOneLink+"'>"+altColourOneLabel+"</a></li>")))}),$(".product-info-tabs ul li").click(function(){var tabName=$(this).attr("data-id");$(".product-info-panels ul li").removeClass("active"),$(".product-info-tabs ul li").removeClass("active"),$(".product-info-panels ul li[data-id="+tabName+"]").addClass("active"),$(".product-info-tabs ul li[data-id="+tabName+"]").addClass("active")});var cookie=Cookies.get("myswim-newsletter");$(".form-overlay").hide(),$(".newsletter-signup").hide(),$(".form-overlay").click(function(event){Cookies.set("myswim-newsletter","notinterested",{expires:1}),$(".form-overlay").hide(),$(".newsletter-signup").hide()});var myConfObj={iframeMouseOver:!1};window.addEventListener("blur",function(){myConfObj.iframeMouseOver&&console.log("They Have Clicked inside the form window")}),document.getElementById("myswimshop-newsletter").addEventListener("mouseover",function(){myConfObj.iframeMouseOver=!0,Cookies.set("myswim-newsletter","notinterested")}),document.getElementById("myswimshop-newsletter").addEventListener("mouseout",function(){myConfObj.iframeMouseOver=!1,Cookies.set("myswim-newsletter","notinterested")}),$(".sizing-meta-btn").click(function(){var productTitle=$("h1.bc-product__title").text();$(".sizing-guide-title").html(""),$(".sizing-guide-title").html(productTitle+" Sizing Guide"),$(".sizing-guide-overlay").show(),$(".sizing-guide-holder").show()}),$(".sizing-guide-overlay").click(function(){$(".sizing-guide-overlay").hide(),$(".sizing-guide-holder").hide()});