function entity(){

    var timeline = [];

    var instructions_block = {
        type: "html-button-response",
        stimulus: "<p><strong>Instructions</strong></p>" +
        "<p>Instructions for Entity Recognition Task</p>",
        choices: ['Continue'],
        data: {trial_category: 'instructions', unique_trial_id: 1190}
    };

    timeline.push(instructions_block);

    timeline.push({
        type: "external-html",
        url: "entity.html",
        execute_script: true,
        force_refresh:true
    });

    return timeline;
}