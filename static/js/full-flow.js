
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var timeline = [];

// Welcome block
var welcome_block = {
    type: "html-button-response",
    stimulus: "<p><strong>Welcome</strong></p>" +
    "<p>You will complete 14 tasks. This includes a series of tests that assess your cognitive and comprehension skills, " +
    "<p>personality, alertness and mood, followed by a set of crowdsourcing tasks.</p>" +
    "<p>Please ensure that you complete all 14 tasks in a <u><b>single sitting</b></u> to receive payment. <br/> <strong>You will not receive any payment if you do not complete all tasks.</strong></p>" +
    "<p style ='color:red'><b>Do NOT refresh the browser window until you complete all tasks. <br/>Refreshing the browser will result in a data loss and you will not receive any payment.</b></p>" +
    "<p><strong>Read the instructions carefully </strong>before starting each task. Instructions will not be repeated.</p> ",
    choices: ['Continue']
};

timeline.push(welcome_block);

// Setting up tests

var cognitiveTests  = [stroop(), flanker(), nBack(), taskSwitching(), pointing()];
var allTests = [classification()];

// alertness(), comprehension(), mood(), personality(), cognitiveTests

// Populate timeline with tests
var randomIndex = jsPsych.randomization.shuffle([0]);
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
                    window.scroll(0,0);
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
                window.scroll(0,0);
            }
        });
        timeline = timeline.concat(allTests[randomIndex[t]]);
        taskNumber = taskNumber + 1;
     }
}

// Setting up tasks

//var crowdsourcingTasks = [boundingBox(), entityAnnotation(), classification(), sentiment(), transcription()];
//
//randomIndex = jsPsych.randomization.shuffle([0,1,2,3,4]);
//
//for (let t in randomIndex){
//    var taskNumber = t*1+10;
//    timeline.push({
//        type: "html-button-response",
//        stimulus: "<p><strong>Task "+ taskNumber +
//        "</strong></p><p>&nbsp;</p>",
//        choices: ['Continue'],
//        on_load: function () {
//            window.scroll(0,0);
//        }
//    });
//    timeline = timeline.concat(crowdsourcingTasks[randomIndex[t]]);
//}
//
//timeline.push({
//    type: "html-button-response",
//    stimulus: "<p><strong>You have completed all the tasks." +
//    "</strong></p><p>Click the button below to answer a short questionnaire on your context and demographics.</p>",
//    choices: ['Continue'],
//    button_htm: ['<button class="jspsych-btn">%choice%</button>'],
//    on_load: function () {
//        window.scroll(0,0);
//    }
//});

//timeline = timeline.concat(questionnaire());
//
//timeline.push({
//    type: "html-button-response",
//    stimulus: "<p><strong>Thank You!" +
//    "</strong></p><p>Click the button below to return to Mechanical Turk to submit your answers.</p>",
//    choices: ['Complete'],
//    button_htm: ['<button class="jspsych-btn">%choice%</button>'],
//    on_load: function () {
//        jsPsych.setProgressBar(1);
//    }
//});

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
                    psiturk.recordTrialData(trialData);
                    break;
                }
                case 'questionnaire':
                case 'personality':
                case 'mood':
                case 'emotion':
                case 'comprehension':
                case 'transcription':{
                    const trialData = {
                        rt: data.rt,
                        unique_trial_id: data.unique_trial_id,
                        trial_category: data.trial_category,
                        trial_index: data.trial_index,
                        response: data.response
                    };
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
                    break;
                }
                case 'alertness': {
                    const trialData = {
                        rt: data.rt,
                        unique_trial_id: data.unique_trial_id,
                        trial_category: data.trial_category,
                        trial_index: data.trial_index,
                        response: data.response,
                        postTrialGap: data.post_trial_gap,
                        falseStarts: data.false_starts
                    };
                    psiturk.recordTrialData(trialData);
                    break;
                }
                 case 'entity-recognition':{
                    const trialData = {
                        rt: data.rt,
                        unique_trial_id: data.unique_trial_id,
                        trial_category: data.trial_category,
                        task_id: data.task_id,
                        num_entities: data.num_entities,
                        ground_truth : data.ground_truth,
                        trial_index: data.trial_index,
                        response: data.response
                    };
                    psiturk.recordTrialData(trialData);
                    break;
                }
                 case 'bounding-box':{
                    const trialData = {
                        rt: data.rt,
                        unique_trial_id: data.unique_trial_id,
                        image_id : data.image_id,
                        num_faces : data.num_faces,
                        ground_truth : data.ground_truth,
                        trial_category: data.trial_category,
                        trial_index: data.trial_index,
                        response: data.response
                    };
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