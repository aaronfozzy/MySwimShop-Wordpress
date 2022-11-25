$(document).ready(function(){
  if($(".custom-fields-hidden").length){
    var womensVersionArray = [];
    var womensVersionLabelArray = [];
    var mensVersionArray = [];
    var mensVersionsLabelArray = [];
    var altColourOneArray = [];
    var altColourOneLabelArray = [];

    $(".custom-fields-hidden .bc-product__spec-list .bc-product__spec").each(function(){
      var specTitle = $(this).find(".bc-product__spec-title").text();
      var specValue = $(this).find(".bc-product__spec-value").text();

      switch(specTitle){
        case "sizing:":
          $(".sizing-guide-modal img").attr("src", "https://store-8a17r5u7.mybigcommerce.com/content/sizing-guides/" + specValue + ".png");
          $(".sizing-guide-modal img").attr("alt", specValue);
        break;
        case "Gender:":
          $(".additional-title-info").append(specValue);
        break;
        case "Year:":
          $(".additional-title-info").append(" - " + specValue);
        break;
        case "womens-version-label:":
          womensVersionLabelArray.push(specValue);
        break;
        case "womens-version:":
          var splitSpecValue = specValue.split("https://mytriathlon.co.uk");
          var splittedUrl = splitSpecValue[1];
          womensVersionArray.push(splittedUrl);
        break;
        case "mens-version-label:":
          mensVersionLabelArray.push(specValue);
        break;
        case "mens-version:":
          var splitSpecValue = specValue.split("https://mytriathlon.co.uk");
          var splittedUrl = splitSpecValue[1];
          mensVersionArray.push(splittedUrl);
        break;
        case "alt-colour-1-label:":
          altColourOneLabelArray.push(specValue);
        break;
        case "alt-colour-1:":
          var splitSpecValue = specValue.split("https://mytriathlon.co.uk");
          var splittedUrl = splitSpecValue[1];
          altColourOneArray.push(splittedUrl);
        break;
      }
    });

    // Append Buttons to Page

    if(womensVersionArray.length && womensVersionLabelArray.length){
      var womensVersionLink = womensVersionArray[0];
      var womensVersionLabel = womensVersionLabelArray[0];
      $(".additional-buttons ul").append("<li><a href='/products"+womensVersionLink+"'>"+womensVersionLabel+"</a></li>");
    }

    if(mensVersionArray.length && mensVersionLabelArray.length){
      var mensVersionLink = womensVersionArray[0];
      var mensVersionLabel = womensVersionLabelArray[0];
      $(".additional-buttons ul").append("<li><a href='/products"+mensVersionLink+"'>"+mensVersionLabel+"</a></li>");
    }

    if(altColourOneLabelArray.length && altColourOneArray.length){
      var altColourOneLink = altColourOneArray[0];
      var altColourOneLabel = altColourOneLabelArray[0];
      $(".additional-buttons ul").append("<li><a href='/products"+altColourOneLink+"'>"+altColourOneLabel+"</a></li>");
    }
  }
});
