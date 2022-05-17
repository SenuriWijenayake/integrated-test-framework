setInterval(function() {
    if(document.querySelector("crowd-entity-annotation")){

        // Hide shortcuts button and settings
        document.querySelector('crowd-entity-annotation').shadowRoot.querySelector('crowd-form').shadowRoot.querySelectorAll('awsui-button')[1].style.display = "none";
        document.querySelector('crowd-entity-annotation').shadowRoot.querySelector('crowd-form').shadowRoot.querySelectorAll('paper-icon-button')[0].style.display = "none";

        document.querySelector('crowd-entity-annotation').shadowRoot.querySelector('crowd-form').addEventListener("submit", function(e){
          e.preventDefault();

          const answers = document.querySelector('crowd-entity-annotation').shadowRoot.querySelector('crowd-form')._serializeForm();
          const tags = JSON.parse(answers.taskAnswers)[0];

          sessionStorage.setItem("entityAnnotation", JSON.stringify(tags));
          $('#aws-submit').trigger('click');
        });
    }
}, 500);