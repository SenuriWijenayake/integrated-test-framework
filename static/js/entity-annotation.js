function entityAnnotation(){

    var timeline = [];

    var instructions_block = {
        type: "html-button-response",
        stimulus: "<p><strong>Instructions for entity annotation</strong></p>",
        choices: ['Continue'],
        data: {trial_category: 'instructions', unique_trial_id: 1190},
        on_load: function () {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://assets.crowd.aws/crowd-html-elements.js';
            head.appendChild(script);

            var custom_script = document.createElement('script');
            custom_script.type = 'text/javascript';
            custom_script.src = '/static/js/crowd-html-entity-scripts.js';
            head.appendChild(custom_script);
        }
    };

    timeline.push(instructions_block);

    var randomIndex = jsPsych.randomization.shuffle([1,2,3]);

    for (let i in randomIndex){
        timeline.push({
            type: "external-html",
            url: "entityannotation/entity" + randomIndex[i] + ".html",
            execute_script: true,
            cont_btn: "aws-submit",
            check_fn: function(){
                var data = JSON.parse(sessionStorage.getItem("entityAnnotation"));
                return true;
            },
            on_finish: function(data){
                data.tags = JSON.parse(sessionStorage.getItem("entityAnnotation"));
            }
        });
    }

    return timeline;
}