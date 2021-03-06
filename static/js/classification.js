function classification() {

    /*set up instructions block*/
    var instructions = {
        type: "html-button-response",
        stimulus: "<p><strong>Instructions</strong></p>" +
        "<p>In this task, you will see a painting and a list of items.</p>" +
        "<p>Select all the items that appear on the painting.</p>",
        post_trial_gap: 500,
        choices: ['Continue'],
        data: {trial_category: 'instructions', unique_trial_id: 1290}
    };

    var choices =
        [["Hot Air Balloon", "Horse", "Ship", "Dog"],
            ["Tea pot", "Umbrella", "Bird", "Ship"],
            ["Bullock Cart", "Train", "Barrel", "Chicken"],
            ["Dog", "Umbrella", "Clock", "Coat"],
            ["Horse", "Fishing rod", "Bird", "Umbrella"],
            ["Violin", "Horse", "Table", "Basket"],
            ["Book", "Table", "Wine Bottle", "Bridge"],
            ["Notice", "Broom", "Cat", "Mirror"],
            ["Cows", "Castle", "Cat", "Axe"],
            ["Bottle", "Infant", "Dog", "Tea pot"],
            ["Birds", "Barrel", "Horse", "Chicken"],
            ["Cat", "Doll", "Cow", "Umbrella"],
            ["Piano", "Clock", "Dog", "Fan"],
            ["Flag", "Bird", "Sword", "Ship"],
            ["Ship", "Dancers", "Pond", "Fire"],
            ["Dog", "Donkey", "Cart", "Stairway"]
        ];

    var answers = [
        ["Hot Air Balloon", "Horse", "Dog"],
        ["Umbrella", "Ship"],
        ["Bullock Cart", "Train","Barrel"],
        ["Umbrella", "Clock", "Coat"],
        ["Fishing rod", "Umbrella"],
        ["Horse"],
        ["Table", "Wine Bottle"],
        ["Notice"],
        ["Castle", "Axe"],
        ["Infant"],
        ["Birds", "Barrel"],
        ["Doll", "Cow"],
        ["Piano", "Clock", "Fan"],
        ["Sword", "Ship"],
        ["Dancers", "Pond"],
        ["Donkey","Stairway"]

    ];

    var timeline = [];

    timeline.push(instructions);

    var images = [];

    for (var i = 0; i < 16; i++) {
        images.push(i);
    }

    images = jsPsych.randomization.shuffle(images);
    for (var j = 0; j < 16; j++) {
        i = images[j];
        timeline.push({
            type: 'image-multi-select',
            questions: [{
                prompt: "Which of these items do you see in the painting shown above?",
                options: choices[i],
                horizontal: true
            }],
            required: false,
            button_label: 'Next',
            stimulus: '/static/images/ItemClassification/' + (i + 1) + '.jpg',
            data: { trial_category:'classification', unique_trial_id: 1200+i+1 , answer: answers[i]},
            on_finish: function (data) {
                if (JSON.stringify(data.answer) == JSON.stringify(data.response)){
                    data.correct = true;
                } else if (data.answer.length != data.response.length) {
                    data.correct = false;
                } else {
                    var answer = data.answer;
                    answer = answer.sort();
                    var response  = data.response;
                    response = response.sort();
                    data.correct = JSON.stringify(answer) == JSON.stringify(response);
                }

//                var progress_bar_width = $('#jspsych-progressbar-inner')[0].style.width.slice(0,-1);
//                jsPsych.setProgressBar(progress_bar_width*0.01+(0.1/16));
            }
        })
    }

    return timeline;
}