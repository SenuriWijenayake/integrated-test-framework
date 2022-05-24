function entityAnnotation(){

    var timeline = [];

    var instructions_block = {
        type: "html-button-response",
        stimulus: "<p><strong>Instructions</strong></p>" +
        "<p>In this task you will read and label several text extracts.</p>" +
        "<ol style='text-align:left; padding-left: 10%'><li>Read the text carefully.</li>" +
        "<li>Highlight words, phrases, or sections of the text.</li>" +
        "<li>Choose the label that best matches what you have highlighted.</li>" +
        "<li>To change a label, choose highlighted text and select a new label</li>" +
        "<li>To remove a label from highlighted text, choose the X next to the abbreviated label name on the highlighted text.</li>" +
        "<li>You can select all of a previously highlighted text, but not a portion of it.</li></ol>",
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

            window.scroll(0,0);
        }
    };

    timeline.push(instructions_block);

    var randomIndex = jsPsych.randomization.shuffle([1,2,3]);

    for (let i in randomIndex){
        var index = randomIndex[i];
        timeline.push({
            type: "external-html",
            url: "entityannotation/entity" + index + ".html",
            execute_script: true,
            cont_btn: "aws-submit",
            on_load : function(){
                window.scroll(0,0);
            },
            data: {trial_category:'entity-recognition',
                   unique_trial_id: 1100 + index,
                   task_id: index,
                   ground_truth: ""},
            check_fn: function(){
                var data = JSON.parse(sessionStorage.getItem("entityAnnotation"));
                return true;
            },
            on_finish: function(data){
                data.response = JSON.parse(sessionStorage.getItem("entityAnnotation"));
            }
        });
    }

    return timeline;
}