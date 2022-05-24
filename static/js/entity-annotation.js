function entityAnnotation(){

    var timeline = [];

    var instructions_block = {
        type: "html-button-response",
        stimulus: "<p><strong>Instructions</strong></p>" +
        "<p>In this task you will read and label several text extracts.</p>" +
        "<ol style='text-align:left; padding-left: 10%'><li>Read the text carefully.</li>" +
        "<li>Highlight words, phrases, or sections of the text.</li>" +
        "<li>Choose the label that best matches what you have highlighted.</li>" +
        "<li>To change a label, choose highlighted text and select a new label</li>" +
        "<li>To remove a label from highlighted text, choose the X next to the abbreviated label name on the highlighted text.</li>" +
        "<li>You can select all of a previously highlighted text, but not a portion of it.</li></ol>",
        choices: ['Continue'],
        data: {trial_category: 'instructions', unique_trial_id: 1190},
        on_load: function () {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://assets.crowd.aws/crowd-html-elements.js';
            head.appendChild(script);

            var custom_script = document.createElement('script');
            custom_script.type = 'text/javascript';
            custom_script.src = '/static/js/crowd-html-entity-scripts.js';
            head.appendChild(custom_script);

            window.scroll(0,0);
        }
    };

    timeline.push(instructions_block);

    var randomIndex = jsPsych.randomization.shuffle([
  {
    "task_id": 1,
    "entities": [
      {
        "endOffset": 5,
        "label": "location",
        "startOffset": 0
      },
      {
        "endOffset": 83,
        "label": "location",
        "startOffset": 78
      },
      {
        "endOffset": 136,
        "label": "location",
        "startOffset": 131
      },
      {
        "endOffset": 255,
        "label": "location",
        "startOffset": 245
      },
      {
        "endOffset": 262,
        "label": "location",
        "startOffset": 257
      },
      {
        "endOffset": 377,
        "label": "person",
        "startOffset": 364
      },
      {
        "endOffset": 514,
        "label": "person",
        "startOffset": 500
      },
      {
        "endOffset": 770,
        "label": "location",
        "startOffset": 760
      },
      {
        "endOffset": 872,
        "label": "location",
        "startOffset": 867
      },
      {
        "endOffset": 962,
        "label": "location",
        "startOffset": 957
      },
      {
        "endOffset": 977,
        "label": "person",
        "startOffset": 964
      },
      {
        "endOffset": 1053,
        "label": "person",
        "startOffset": 1033
      },
      {
        "endOffset": 1112,
        "label": "person",
        "startOffset": 1101
      },
      {
        "endOffset": 1218,
        "label": "location",
        "startOffset": 1213
      },
      {
        "endOffset": 1260,
        "label": "person",
        "startOffset": 1248
      },
      {
        "endOffset": 1382,
        "label": "person",
        "startOffset": 1377
      },
      {
        "endOffset": 1405,
        "label": "person",
        "startOffset": 1391
      },
      {
        "endOffset": 1421,
        "label": "location",
        "startOffset": 1416
      },
      {
        "endOffset": 1485,
        "label": "location",
        "startOffset": 1480
      },
      {
        "endOffset": 1595,
        "label": "person",
        "startOffset": 1590
      },
      {
        "endOffset": 1642,
        "label": "location",
        "startOffset": 1637
      },
      {
        "endOffset": 1657,
        "label": "person",
        "startOffset": 1649
      },
      {
        "endOffset": 1819,
        "label": "location",
        "startOffset": 1814
      },
      {
        "endOffset": 1891,
        "label": "organisation",
        "startOffset": 1887
      },
      {
        "endOffset": 1945,
        "label": "location",
        "startOffset": 1942
      },
      {
        "endOffset": 1957,
        "label": "location",
        "startOffset": 1951
      },
      {
        "endOffset": 1973,
        "label": "location",
        "startOffset": 1962
      },
      {
        "endOffset": 1991,
        "label": "location",
        "startOffset": 1982
      }
    ],
    "num_entities": 28
  },
  {
    "task_id": 2,
    "entities": [
      {
        "endOffset": 5,
        "label": "location",
        "startOffset": 0
      },
      {
        "endOffset": 32,
        "label": "person",
        "startOffset": 15
      },
      {
        "endOffset": 78,
        "label": "location",
        "startOffset": 70
      },
      {
        "endOffset": 93,
        "label": "location",
        "startOffset": 82
      },
      {
        "endOffset": 211,
        "label": "person",
        "startOffset": 203
      },
      {
        "endOffset": 237,
        "label": "person",
        "startOffset": 225
      },
      {
        "endOffset": 361,
        "label": "location",
        "startOffset": 354
      },
      {
        "endOffset": 375,
        "label": "location",
        "startOffset": 365
      },
      {
        "endOffset": 403,
        "label": "person",
        "startOffset": 389
      },
      {
        "endOffset": 436,
        "label": "person",
        "startOffset": 431
      },
      {
        "endOffset": 478,
        "label": "person",
        "startOffset": 466
      },
      {
        "endOffset": 517,
        "label": "location",
        "startOffset": 510
      },
      {
        "endOffset": 575,
        "label": "person",
        "startOffset": 567
      },
      {
        "endOffset": 680,
        "label": "location",
        "startOffset": 675
      },
      {
        "endOffset": 704,
        "label": "location",
        "startOffset": 697
      },
      {
        "endOffset": 731,
        "label": "person",
        "startOffset": 726
      },
      {
        "endOffset": 847,
        "label": "person",
        "startOffset": 842
      },
      {
        "endOffset": 1008,
        "label": "person",
        "startOffset": 994
      },
      {
        "endOffset": 1023,
        "label": "person",
        "startOffset": 1010
      },
      {
        "endOffset": 1042,
        "label": "person",
        "startOffset": 1025
      },
      {
        "endOffset": 1060,
        "label": "person",
        "startOffset": 1044
      },
      {
        "endOffset": 1077,
        "label": "person",
        "startOffset": 1062
      },
      {
        "endOffset": 1094,
        "label": "person",
        "startOffset": 1079
      },
      {
        "endOffset": 1115,
        "label": "person",
        "startOffset": 1096
      },
      {
        "endOffset": 1135,
        "label": "person",
        "startOffset": 1117
      },
      {
        "endOffset": 1151,
        "label": "person",
        "startOffset": 1137
      },
      {
        "endOffset": 1167,
        "label": "person",
        "startOffset": 1153
      },
      {
        "endOffset": 1187,
        "label": "person",
        "startOffset": 1169
      },
      {
        "endOffset": 1206,
        "label": "person",
        "startOffset": 1189
      },
      {
        "endOffset": 1228,
        "label": "person",
        "startOffset": 1208
      },
      {
        "endOffset": 1251,
        "label": "person",
        "startOffset": 1230
      },
      {
        "endOffset": 1266,
        "label": "person",
        "startOffset": 1253
      },
      {
        "endOffset": 1284,
        "label": "person",
        "startOffset": 1268
      },
      {
        "endOffset": 1303,
        "label": "person",
        "startOffset": 1286
      },
      {
        "endOffset": 1319,
        "label": "person",
        "startOffset": 1305
      },
      {
        "endOffset": 1337,
        "label": "person",
        "startOffset": 1321
      },
      {
        "endOffset": 1358,
        "label": "person",
        "startOffset": 1339
      },
      {
        "endOffset": 1377,
        "label": "person",
        "startOffset": 1360
      }
    ],
    "num_entities": 38
  },
  {
    "task_id": 3,
    "entities": [
      {
        "endOffset": 28,
        "label": "person",
        "startOffset": 14
      },
      {
        "endOffset": 73,
        "label": "organisation",
        "startOffset": 69
      },
      {
        "endOffset": 127,
        "label": "organisation",
        "startOffset": 108
      },
      {
        "endOffset": 154,
        "label": "organisation",
        "startOffset": 145
      },
      {
        "endOffset": 176,
        "label": "person",
        "startOffset": 169
      },
      {
        "endOffset": 220,
        "label": "organisation",
        "startOffset": 216
      },
      {
        "endOffset": 302,
        "label": "organisation",
        "startOffset": 293
      },
      {
        "endOffset": 314,
        "label": "organisation",
        "startOffset": 307
      },
      {
        "endOffset": 349,
        "label": "organisation",
        "startOffset": 340
      },
      {
        "endOffset": 356,
        "label": "organisation",
        "startOffset": 352
      },
      {
        "endOffset": 406,
        "label": "location",
        "startOffset": 397
      },
      {
        "endOffset": 441,
        "label": "organisation",
        "startOffset": 434
      },
      {
        "endOffset": 599,
        "label": "organisation",
        "startOffset": 590
      },
      {
        "endOffset": 649,
        "label": "person",
        "startOffset": 642
      },
      {
        "endOffset": 767,
        "label": "organisation",
        "startOffset": 760
      }
    ],
    "num_entities": 15
  }
]);

    for (let i in randomIndex){
        var index = randomIndex[i].task_id;
        timeline.push({
            type: "external-html",
            url: "entityannotation/entity" + index + ".html",
            execute_script: true,
            cont_btn: "aws-submit",
            on_load : function(){
                window.scroll(0,0);
            },
            data: {trial_category:'entity-recognition',
                   unique_trial_id: 1100 + index,
                   task_id: index,
                   num_entities: randomIndex[i].num_entities,
                   ground_truth: randomIndex[i].entities},
            check_fn: function(){
                var data = JSON.parse(sessionStorage.getItem("entityAnnotation"));
                return true;
            },
            on_finish: function(data){
                data.response = JSON.parse(sessionStorage.getItem("entityAnnotation"));
//                console.log(data.response);
//                console.log(randomIndex[i].num_entities);
//                console.log(randomIndex[i].entities);
            }
        });
    }

    return timeline;
}