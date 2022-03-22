setInterval(function() {
    if(document.querySelector("crowd-form")){
      document.querySelector("crowd-form").addEventListener("submit", function(e){
          e.preventDefault();
          const boundingBoxes = document.querySelector('crowd-bounding-box').value.boundingBoxes || document.querySelector('crowd-bounding-box')._submittableValue.boundingBoxes;
          sessionStorage.setItem("boundingBox", JSON.stringify(boundingBoxes));
          $('#aws-submit').trigger('click');
        });
    }}, 500);
