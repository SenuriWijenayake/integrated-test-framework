function mood(){

    var timeline = [];
    var choices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

    var instructions_block = {
        type: "html-button-response",
        stimulus: "<p><strong>Instructions</strong></p><p>In this task, you will complete a quick mood assessment survey.</p>" +
        "<p> The survey includes a character-based pictorial scale for reporting moods.</p>" +
         "<p>Select the <b>letter</b> that corresponds to the pictorial representation of the mood </p><p>that most closely resembles your <b>current</b> mood - as objectively as possible.</p>",
        choices: ['Continue'],
        data: {trial_category: 'instructions', unique_trial_id: 690}
    };

    timeline.push(instructions_block);

    var trial = {
        timeline: [
            {
                type: "image-button-response",
                preamble: "How do you feel today?",
                required: true,
                stimulus: "../static/images/mood/mood.jpg",
                choices: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
                data: {trial_category:'mood',unique_trial_id:601},
                on_finish: function (data) {
                    data.response = choices[data.button_pressed];
                }
            }
        ]
    };

    timeline.push(trial);

    return timeline;

}