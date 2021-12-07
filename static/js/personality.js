function personality(){

    var timeline = [];

    var instructions_block = {
        type: "html-button-response",
        stimulus: "<p><strong>Instructions</strong></p><p>In this task, you will complete a brief personality assessment survey.</p>" +
        "<p>The survey includes 10 statements that describe different personality traits of individuals.</p>" +
         "<p>Indicate how well each statement describes your personality on a 5-point scale - as objectively as possible.</p>",
        choices: ['Continue'],
        data: {trial_category: 'instructions', unique_trial_id: 890}
    };

    timeline.push(instructions_block);

    var likert_scale = [
      "Disagree strongly",
      "Disagree a little",
      "Neither agree nor disagree",
      "Agree a little",
      "Agree strongly"
    ];

     timeline.push({
      type: "survey-likert",
      preamble: "How well do the following statements describe your personality?",
      required: true,
      questions: [
        {prompt: "I see myself as someone who is reserved.", labels: likert_scale, required: true},
        {prompt: "I see myself as someone who is generally trusting.", labels: likert_scale, required: true},
        {prompt: "I see myself as someone who tends to be lazy.", labels: likert_scale, required: true},
        {prompt: "I see myself as someone who is relaxed, handles stress well.", labels: likert_scale, required: true},
        {prompt: "I see myself as someone who has few artistic interests.", labels: likert_scale, required: true},
        {prompt: "I see myself as someone who is outgoing, sociable.", labels: likert_scale, required: true},
        {prompt: "I see myself as someone who tends to find fault with others.", labels: likert_scale, required: true},
        {prompt: "I see myself as someone who does a thorough job.", labels: likert_scale, required: true},
        {prompt: "I see myself as someone who gets nervous easily.", labels: likert_scale, required: true},
        {prompt: "I see myself as someone has an active imagination.", labels: likert_scale, required: true}
      ],
      button_label: 'Next',
      data: {trial_category:'personality',unique_trial_id:801},
      on_finish: function (data) {
        console.log(data);
        data.response = JSON.parse(data.responses);
        // Adjusting the score
        for (let i in data.response){
            data.response[i] = data.response[i] + 1;
        }
      }
    });

    return timeline;
}