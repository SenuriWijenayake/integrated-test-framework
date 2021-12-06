function alertness() {

    var timeline = [];

    var random_duration = function() {
        var rand_dur = jsPsych.randomization.sampleWithoutReplacement([2000,3000,4000,5000,6000,7000,8000,9000,10000],1)[0];
        return rand_dur;
    };

    var max_count = 998;
    var c = 0;
    var pause = false;

    var counter;

    $(window).keypress(function(e) {
        if (e.which === 32) {
            pause = true;
        }
    });

    var instructions_block = {
        type: "html-button-response",
        stimulus: "<p><strong>Instructions</strong></p>" +
        "<p>In this task, numbers will appear on the screen at random intervals.</p><p>Press SPACE bar as soon as you see numbers on the screen.</p>",
        choices: ['Continue'],
        data: {trial_category: 'blank_trial', unique_trial_id: 9101},
        post_trial_gap: random_duration,
    };

    timeline.push(instructions_block);

    for (var i = 0; i < 5; i++) {
        timeline.push({
            type: 'html-keyboard-response',
            stimulus: '<div id="timer" style="font-size:250%;color:red";></div><br><p>Press SPACE bar to stop the counter.</p>',
            choices: ['Space'],
            data: {trial_category: 'alertness', unique_trial_id: 9102+i},
            post_trial_gap: random_duration,
            on_load: function() {
                pause = false;
                c = 0;
                counter = setInterval(function(){
                    if(!pause){
                        var diff = max_count - c;
                        c += 1;
                        document.getElementById('timer').innerHTML = c;
                    }
                    if (diff < 0){
                        clearInterval(counter);
                        c = 0;
                    }
                }, 1);
            },
            on_finish: function (data) {
                data.response = c;
                c = 0;
                clearInterval(counter);
            }
        });
    }

    return timeline;

}



