setInterval(function() {
    if(document.querySelector("crowd-form")){

      // Hide shortcuts button and settings
      document.querySelector("crowd-form").querySelector('crowd-bounding-box').shadowRoot.querySelectorAll('awsui-button')[1].style.display = "none";
      document.querySelector("crowd-form").querySelector('crowd-bounding-box').shadowRoot.querySelectorAll('paper-icon-button')[0].style.display = "none";


      document.querySelector("crowd-form").addEventListener("submit", function(e){
          e.preventDefault();
          const tags = document.querySelector('crowd-bounding-box').value.boundingBoxes || document.querySelector('crowd-bounding-box')._submittableValue.boundingBoxes;
          const inputImageProperties = document.querySelector('crowd-bounding-box').value.inputImageProperties || document.querySelector('crowd-bounding-box')._submittableValue.inputImageProperties;

          var boundingBoxes = {
            tags : tags,
            imageProperties : inputImageProperties
          };

          sessionStorage.setItem("boundingBox", JSON.stringify(boundingBoxes));
          $('#aws-submit').trigger('click');
        });


    }}, 500);


