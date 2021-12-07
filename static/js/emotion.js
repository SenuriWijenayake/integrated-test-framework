function emotion(){

    var timeline = [];

    var instructions_block = {
        type: "html-button-response",
        stimulus: "<p><strong>Instructions</strong></p><p>In this task, you will complete a brief emotion assessment survey.</p>" +
        "<p>The survey includes 3 picture-based scales that measure the emotional status of an individual.</p>" +
         "<p>In each scales, select the <b>number</b> that correspond to the image that best represents </p><p>how you feel <b>at the moment</b> - as objectively as possible.</p>",
        choices: ['Continue'],
        data: {trial_category: 'instructions', unique_trial_id: 790}
    };

    timeline.push(instructions_block);

    var trials = {
        timeline: [

            {
                type: "survey-likert",
                preamble: "Which of the figures given below most closely resemble how you feel at this moment? <br/> <br/> <img src='../static/images/mood/SAM_V.png' width='100%'/>",
                button_label: "Next",
                questions: [
                    {prompt: "", name: 'valence', labels: ["1<br/>Unhappy", "2", "3", "4", "5", "6", "7", "8", "9<br/>Happy"], required:true}
                  ],
                data: {trial_category:'emotion',unique_trial_id:701},
                on_finish: function (data) {
                    data.response = JSON.parse(data.responses);
                    data.response = data.response['Q0'] + 1;
                }
            },

            {
                type: "survey-likert",
                preamble: "Which of the figures given below most closely resemble how you feel at this moment? <br/> <br/> <img src='../static/images/mood/SAM_A.png' width='100%'/>",
                button_label: "Next",
                questions: [
                    {prompt: "", name: 'arousal', labels: ["1<br/>Calm", "2", "3", "4", "5", "6", "7", "8", "9<br/>Excited"], required:true}
                  ],
                data: {trial_category:'emotion',unique_trial_id:702},
                on_finish: function (data) {
                    data.response = JSON.parse(data.responses);
                    data.response = data.response['Q0'] + 1;
                }
            },

            {
                type: "survey-likert",
                preamble: "Which of the figures given below most closely resemble how you feel at this moment? <br/> <br/> <img src='../static/images/mood/SAM_D.png' width='100%'/>",
                button_label: "Next",
                questions: [
                    {prompt: "", name: 'dominance', labels: ["1<br/>Controlled", "2", "3", "4", "5", "6", "7", "8", "9<br/>In Control"], required:true}
                  ],
                data: {trial_category:'emotion',unique_trial_id:703},
                on_finish: function (data) {
                    data.response = JSON.parse(data.responses);
                    data.response = data.response['Q0'] + 1;
                }
            }

        ]
    };

    timeline.push(trials);

    return timeline;

}