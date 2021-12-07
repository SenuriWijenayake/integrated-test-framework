
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var timeline = [];

// Welcome block
var welcome_block = {
    type: "html-button-response",
    stimulus: "<p><strong>Welcome</strong></p>" +
    "<p>You will complete 14 tasks. This includes a series of tests that assess your cognitive skills,</p> " +
    "<p>personality, alertness, mood and emotion, followed by a set of crowdsourcing tasks.</p>" +
    "<p>Please ensure that you complete all 14 tasks in a single sitting to receive payment. </p>" +
    "<p><strong>You will not receive any payment if you do not complete all tasks.</strong></p>" +
    "<p><strong>Read the instructions carefully </strong>before starting each task. </p> <p>Instructions will not be repeated.</p> ",
    choices: ['Continue']
};

timeline.push(welcome_block);

// Setting up tests

var cognitiveTests  = [stroop(),flanker(),nBack(),taskSwitching(),pointing()];
var allTests = [mood(),emotion(),personality(),alertness(),cognitiveTests];

// Populate timeline with tests
var randomIndex = jsPsych.randomization.shuffle([0,1,2,3,4]);
var taskNumber = 1;

for (let t in randomIndex){

    if (allTests[randomIndex[t]] == cognitiveTests){
        // For cognitive tests
        var newRandomIndex = jsPsych.randomization.shuffle([0,1,2,3,4]);
        for (let i in newRandomIndex){
            timeline.push({
                type: "html-button-response",
                stimulus: "<p><strong>Task "+ taskNumber +
                "</strong></p><p>&nbsp;</p>",
                choices: ['Continue'],
                on_load: function () {
//                    jsPsych.setProgressBar((t*1)*0.1+0.5);
                }
            });
            timeline = timeline.concat(cognitiveTests[newRandomIndex[i]]);
            taskNumber = taskNumber + 1;
        }
    }

     else {
        timeline.push({
            type: "html-button-response",
            stimulus: "<p><strong>Task "+ taskNumber +
            "</strong></p><p>&nbsp;</p>",
            choices: ['Continue'],
            on_load: function () {
//                jsPsych.setProgressBar((t*1)*0.1+0.5);
            }
        });
        timeline = timeline.concat(allTests[randomIndex[t]]);
        taskNumber = taskNumber + 1;
     }
}

// Setting up tasks
var crowdsourcingTasks = [counting(),classification(),sentiment(),proofreading(),transcription()];

randomIndex = jsPsych.randomization.shuffle([0,1,2,3,4]);

for (let t in randomIndex){
    var taskNumber = t*1+9;
    timeline.push({
        type: "html-button-response",
        stimulus: "<p><strong>Task "+ taskNumber +
        "</strong></p><p>&nbsp;</p>",
        choices: ['Continue'],
        on_load: function () {
            // console.log((t*1-1)*10);
//            jsPsych.setProgressBar((t*1)*0.1+0.5);
        }
    });
    timeline = timeline.concat(crowdsourcingTasks[randomIndex[t]]);
}

timeline.push({
    type: "html-button-response",
    stimulus: "<p><strong>You have completed all the tasks." +
    "</strong></p><p>Click the button below to answer a short questionnaire on your context and demographics.</p>",
    choices: ['Continue'],
    button_htm: ['<button class="jspsych-btn">%choice%</button>'],
    on_load: function () {
//        jsPsych.setProgressBar(0.98);
    }
});

timeline = timeline.concat(questionnaire());

timeline.push({
    type: "html-button-response",
    stimulus: "<p><strong>Thank You!" +
    "</strong></p><p>Click the button below to return to Mechanical Turk to submit your answers.</p>",
    choices: ['Complete'],
    button_htm: ['<button class="jspsych-btn">%choice%</button>'],
    on_load: function () {
        jsPsych.setProgressBar(1);
    }
});

jsPsych.init({
    timeline: timeline,
    on_data_update: function(data) {
        if(typeof data.trial_category !== undefined){
            switch (data.trial_category){
                case 'stroop':
                case 'n-back':
                case 'flanker':
                case 'task-switching':
                case 'sentiment':
                case 'counting':
                case 'classification':
                case 'proofreading':{
                    const trialData = {
                        rt: data.rt,
                        is_correct: data.correct,
                        unique_trial_id: data.unique_trial_id,
                        trial_category: data.trial_category,
                        trial_index: data.trial_index,
                        response: data.response
                    };
                    // console.log(trialData);
                    psiturk.recordTrialData(trialData);
                    break;
                }
                case 'questionnaire':
                case 'personality':
                case 'mood':
                case 'emotion':
                case 'transcription':{
                    const trialData = {
                        rt: data.rt,
                        unique_trial_id: data.unique_trial_id,
                        trial_category: data.trial_category,
                        trial_index: data.trial_index,
                        response: data.response
                    };
                    // console.log(trialData);
                    psiturk.recordTrialData(trialData);
                    break;
                }
                case 'pointing':{
                    const trialData = {
                        rt: data.rt,
                        is_correct: data.correct,
                        unique_trial_id: data.unique_trial_id,
                        trial_category: data.trial_category,
                        trial_index: data.trial_index,
                        response: data.response,
                        is_error: data.is_error
                    };
                    psiturk.recordTrialData(trialData);
                    console.log(trialData);
                    break;
                }
                case 'example':
                case 'instructions': {
                    const trialData = {
                        rt: data.rt,
                        unique_trial_id: data.unique_trial_id,
                        trial_category: data.trial_category,
                        trial_index: data.trial_index,
                    };
                    psiturk.recordTrialData(trialData);
                    console.log(trialData);
                    break;
                }
                case 'alertness': {
                    const trialData = {
                        rt: data.rt,
                        unique_trial_id: data.unique_trial_id,
                        trial_category: data.trial_category,
                        trial_index: data.trial_index,
                        response: data.response,
                        falseStarts: data.falseStarts
                    };
                    // console.log(trialData);
                    psiturk.recordTrialData(trialData);
                    break;
                }
            }

        }
    },
    on_finish: function (data) {
        psiturk.saveData({
            success: function() {
                psiturk.completeHIT();
            }
        });
    },
    show_progress_bar: true,
    auto_update_progress_bar: true
});