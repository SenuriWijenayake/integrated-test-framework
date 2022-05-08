function boundingBox(){

    var timeline = [];

    var instructions_block = {
        type: "html-button-response",
        stimulus: "<p><strong>Instructions</strong></p>" +
        "<p>In this task you will use the bounding box tool to draw boxes around each instance of the requested target of interest." +
        "<br/>More detailed instructions will be available under the <b>Instructions</b> tab in next page.</p>",
        choices: ['Continue'],
        data: {trial_category: 'instructions', unique_trial_id: 1290},
        on_load: function () {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://assets.crowd.aws/crowd-html-elements.js';
            head.appendChild(script);

            var custom_script = document.createElement('script');
            custom_script.type = 'text/javascript';
            custom_script.src = '/static/js/crowd-html-scripts.js';
            head.appendChild(custom_script);

            window.scroll(0,0);
        }
    };

    timeline.push(instructions_block);

    var randomIndex = jsPsych.randomization.shuffle([2,3]);

    for (let i in randomIndex){
        var index = randomIndex[i];
        timeline.push({
            type: "external-html",
            url: "boundingbox/boundingbox" + index + ".html",
            execute_script: true,
            cont_btn: "aws-submit",
            on_load : function(){
                window.scroll(0,0);
            },
            data: {trial_category:'bounding-box', unique_trial_id:1200 + index},
            check_fn: function(){
                var data = JSON.parse(sessionStorage.getItem("boundingBox"));
                return true;
            },
            on_finish: function(data){
                data.response = JSON.parse(sessionStorage.getItem("boundingBox"));
            }
        });
    }

    return timeline;
}