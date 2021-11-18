var timeline = [];


var trial = {
    timeline: [{
        type: "html-button-response",
        stimulus: function () {
            return '<img src="/static/images/card-sorting/'+jsPsych.timelineVariable("img",true)+'.png" />';
        },
        margin_vertical: '8px',
        choices: function () {
            return [jsPsych.timelineVariable("opt1",true),
                jsPsych.timelineVariable("opt2",true),
                jsPsych.timelineVariable("opt3",true),
                jsPsych.timelineVariable("opt4",true)]
        },
        button_html: function () {
            return ['<button class="jspsych-btn"><img src="/static/images/card-sorting/'+jsPsych.timelineVariable("opt1",true)+'.png" /></button>',
                '<button class="jspsych-btn"><img src="/static/images/card-sorting/'+jsPsych.timelineVariable("opt2",true)+'.png" /></button>',
                '<button class="jspsych-btn"><img src="/static/images/card-sorting/'+jsPsych.timelineVariable("opt3",true)+'.png" /></button>',
                '<button class="jspsych-btn"><img src="/static/images/card-sorting/'+jsPsych.timelineVariable("opt4",true)+'.png" /></button>'];
        }
    },{
        type: "html-keyboard-response",
        stimulus: function () {
            var data = jsPsych.data.get().last(1).values()[0];
            var color = "#be0800";
            if(data.button_pressed*1+1 == jsPsych.timelineVariable("answer",true)){
                color = "#00be4b";
            }

            var html = '<p><img src="/static/images/card-sorting/'+jsPsych.timelineVariable("img",true)+'.png" /></p><div>';

            for (var i=1;i<5;i++){
                if(i == data.button_pressed*1+1){
                    html += '<button class="jspsych-btn" style="display: inline-block; margin:8px 8px; background-color: '+color+'"><img src="/static/images/card-sorting/'+jsPsych.timelineVariable("opt"+i,true)+'.png" /></button>';
                }else{
                    html += '<button class="jspsych-btn" style="display: inline-block; margin:8px 8px"><img src="/static/images/card-sorting/'+jsPsych.timelineVariable("opt"+i,true)+'.png" /></button>';
                }
            }

            return html + '</div>';
        },
        trial_duration: 1000
    }],
    timeline_variables: [
        {img: 'BlueTriangle3', opt1: 'GreenCircle1',opt2:'RedSquare2',opt3:'YellowCross4',opt4:'BlueTriangle3',answer:2},
        {img: 'GreenCircle2', opt1: 'GreenCircle1',opt2:'RedSquare1',opt3:'YellowCross4',opt4:'GreenTriangle3',answer:3},
        {img: 'RedCross2', opt1: 'GreenCircle1',opt2:'YellowCross4',opt3:'BlueCross4',opt4:'RedTriangle3',answer:4},
    ]
};


timeline.push(trial);

jsPsych.init({
    timeline: timeline,
    on_finish: function (data) {
        jsPsych.data.displayData();
    }
});