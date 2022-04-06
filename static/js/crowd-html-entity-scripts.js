setInterval(function() {
    if(document.querySelector("crowd-entity-annotation")){

//    document.addEventListener('all-crowd-elements-ready', () => {
//        document
//          .querySelector('crowd-entity-annotation')
//          .shadowRoot
//          .querySelector('crowd-form')
//          .form
//          .appendChild(additionalQuestions);
//     });

        document.querySelector('crowd-entity-annotation').shadowRoot.querySelector('crowd-form').addEventListener("submit", function(e){
          e.preventDefault();
          const answers = document.querySelector('crowd-entity-annotation').shadowRoot.querySelector('crowd-form')._serializeForm();
          const tags = JSON.parse(answers.taskAnswers)[0];
          sessionStorage.setItem("entityAnnotation", JSON.stringify(tags));
          $('#aws-submit').trigger('click');
        });
    }
}, 500);