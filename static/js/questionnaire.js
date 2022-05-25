function questionnaire(){

    var timeline = [];

    timeline.push({
        type: 'html-text',
        prompt: 'How old are you?',
        inputhtml: '<input type="number" min="1" max="999" name="#jspsych-survey-text-response" autofocus />',
        data: {trial_category: 'questionnaire',unique_trial_id:1501},
        required: true
    });

     timeline.push({
        type: 'html-text',
        prompt: 'To which gender identity do you most identify?',
        inputhtml: '<input type="text" name="#jspsych-survey-text-response-gender" autofocus />',
        data: {trial_category: 'questionnaire',unique_trial_id:1502},
        required: true
    });

//    timeline.push({
//        type: 'survey-multi-choice',
//        preamble: "",
//        questions: [{
//            prompt: "",
//            options: ['Woman','Man','Prefer to specify','Prefer not to specify'],
//            horizontal: false
//        }],
//        required: false,
//        button_label: 'Next',
//        data: { trial_category:'questionnaire',unique_trial_id:2102},
//        on_finish: function (data) {
//            data.response = JSON.parse(data.responses).Q0
//        }
//    });

    timeline.push({
        type: 'survey-multi-choice',
        preamble: "",
        questions: [{
            prompt: "What is your highest education level?",
            options: ["Some high school", "High school graduate", "Some college, no degree","Associate degree","Bachelor's degree", "Graduate degree - Master's", "Graduate degree - Doctorate"],
            horizontal: false,
            required: true
        }],

        button_label: 'Next',
        data: { trial_category:'questionnaire',unique_trial_id:1503},
        on_finish: function (data) {
            data.response = JSON.parse(data.responses).Q0
        }
    });

    // Worker context questions

    timeline.push({
        type: 'survey-multi-choice',
        preamble: "",
        questions: [{
            prompt: "What device did you use to complete this HIT?",
            options: ['Desktop','Laptop','Tablet'],
            horizontal: false,
            required: true
        }],
        button_label: 'Next',
        data: { trial_category:'questionnaire',unique_trial_id:1504},
        on_finish: function (data) {
            data.response = JSON.parse(data.responses).Q0
        }
    });

    timeline.push({
        type: 'survey-multi-choice',
        preamble: "",
        questions: [{
            prompt: "What best explains your social context when you completed this HIT?",
            options: ['I was on my own when I completed the HIT','I was surrounded by other people when I completed the HIT'],
            horizontal: false,
            required: true
        }],
        button_label: 'Next',
        data: { trial_category:'questionnaire',unique_trial_id:1505},
        on_finish: function (data) {
            data.response = JSON.parse(data.responses).Q0
        }
    });

    timeline.push({
        type: 'survey-multi-choice',
        preamble: "",
        questions: [{
            prompt: "What best explains your location when you completed this task?",
            options: ['Primary workstation dedicated for you',
//            'A space other than your primary workstation',
             'A temporary work space (e.g., library, cafe, park)',
             'While commuting'],
            horizontal: false,
            required: true
        }],
        button_label: 'Next',
        data: { trial_category:'questionnaire',unique_trial_id:1506},
        on_finish: function (data) {
            data.response = JSON.parse(data.responses).Q0
        }
    });

    return timeline;
}