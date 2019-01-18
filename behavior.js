document.addEventListener("DOMContentLoaded", function(event) {
  var thumbnailElement = document.getElementById ("principal");
  thumbnailElement.addEventListener ("click", function () {
    if (thumbnailElement.className == "") {
    	thumbnailElement.className = "small";
    }
    else {
      thumbnailElement.className = "";
    }

  });

});
