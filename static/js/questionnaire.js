function questionnaire(){

    var timeline = [];

    timeline.push({
        type: 'html-text',
        prompt: 'How old are you?',
        inputhtml: '<input type="number" min="1" max="999" name="#jspsych-survey-text-response" autofocus />',
        data: {trial_category: 'questionnaire',unique_trial_id:2101},
        required: true
    });

     timeline.push({
        type: 'html-text',
        prompt: 'To which gender identity do you most identify?',
        inputhtml: '<input type="text" name="#jspsych-survey-text-response-gender" autofocus />',
        data: {trial_category: 'questionnaire',unique_trial_id:2102},
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
        data: { trial_category:'questionnaire',unique_trial_id:2103},
        on_finish: function (data) {
            data.response = JSON.parse(data.responses).Q0
        }
    });

    // Worker context questions

    timeline.push({
        type: 'survey-multi-choice',
        preamble: "",
        questions: [{
            prompt: "What device did you use to complete this task?",
            options: ['Desktop','Laptop','Tablet'],
            horizontal: false,
            required: true
        }],
        button_label: 'Next',
        data: { trial_category:'questionnaire',unique_trial_id:2104},
        on_finish: function (data) {
            data.response = JSON.parse(data.responses).Q0
        }
    });

    timeline.push({
        type: 'survey-multi-choice',
        preamble: "",
        questions: [{
            prompt: "What best explains your social context when you completed this task?",
            options: ['On your own','With friends/family'],
            horizontal: false,
            required: true
        }],
        button_label: 'Next',
        data: { trial_category:'questionnaire',unique_trial_id:2105},
        on_finish: function (data) {
            data.response = JSON.parse(data.responses).Q0
        }
    });

    timeline.push({
        type: 'survey-multi-choice',
        preamble: "",
        questions: [{
            prompt: "What best explains your location when you completed this task?",
            options: ['At home - primary workstation','At home - a space other than your primary workstation', 'A temporary work space (e.g., library, cafe, park)', 'Commuting'],
            horizontal: false,
            required: true
        }],
        button_label: 'Next',
        data: { trial_category:'questionnaire',unique_trial_id:2106},
        on_finish: function (data) {
            data.response = JSON.parse(data.responses).Q0
        }
    });

    return timeline;
}