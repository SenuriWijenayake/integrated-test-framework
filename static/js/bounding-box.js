function boundingBox(){

    var timeline = [];

    var instructions_block = {
        type: "html-button-response",
        stimulus: "<p><strong>Instructions</strong></p>" +
        "<p>Instructions for Entity Recognition Task</p>",
        choices: ['Continue'],
        data: {trial_category: 'instructions', unique_trial_id: 1190},
        on_load: function () {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://assets.crowd.aws/crowd-html-elements.js';
            head.appendChild(script);
        }
    };

    timeline.push(instructions_block);

    timeline.push({
        type: "external-html",
        url: "boundingbox.html",
        execute_script: true,
        on_load: function(){
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = '/static/js/crowd-html-scripts.js';
            head.appendChild(script);
        },
        cont_btn: "aws-submit",
        check_fn: function(){
            var data = JSON.parse(sessionStorage.getItem("boundingBox"));
            return true;
        },
        on_finish: function(data){
            data.tags = JSON.parse(sessionStorage.getItem("boundingBox"));
        }
    });


    return timeline;
}