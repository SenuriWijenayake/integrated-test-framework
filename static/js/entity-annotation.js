function entityAnnotation(){

    var timeline = [];

    var instructions_block = {
        type: "html-button-response",
        stimulus: "<p><strong>Instructions</strong></p>" +
        "<p>In this task you will read and label several text extracts.</p>" +
        "<ol style='text-align:left; padding-left: 10%'><li>Read the text carefully.</li>" +
        "<li>Highlight words or phrases of the text.</li>" +
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
        "endOffset": 23,
        "label": "organisation",
        "startOffset": 4
      },
      {
        "endOffset": 197,
        "label": "location",
        "startOffset": 190
      },
      {
        "endOffset": 236,
        "label": "organisation",
        "startOffset": 222
      },
      {
        "endOffset": 276,
        "label": "person",
        "startOffset": 260
      },
      {
        "endOffset": 359,
        "label": "location",
        "startOffset": 352
      },
      {
        "endOffset": 500,
        "label": "organisation",
        "startOffset": 490
      },
      {
        "endOffset": 539,
        "label": "person",
        "startOffset": 519
      },
      {
        "endOffset": 694,
        "label": "organisation",
        "startOffset": 680
      },
      {
        "endOffset": 731,
        "label": "organisation",
        "startOffset": 729
      },
      {
        "endOffset": 764,
        "label": "person",
        "startOffset": 750
      },
      {
        "endOffset": 927,
        "label": "person",
        "startOffset": 919
      },
      {
        "endOffset": 980,
        "label": "location",
        "startOffset": 973
      },
      {
        "endOffset": 991,
        "label": "location",
        "startOffset": 985
      }
    ],
    "num_entities": 13
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
        "label": "location",
        "startOffset": 26
      },
      {
        "endOffset": 110,
        "label": "location",
        "startOffset": 97
      },
      {
        "endOffset": 134,
        "label": "location",
        "startOffset": 127
      },
      {
        "endOffset": 172,
        "label": "person",
        "startOffset": 163
      },
      {
        "endOffset": 206,
        "label": "location",
        "startOffset": 199
      },
      {
        "endOffset": 319,
        "label": "location",
        "startOffset": 313
      },
      {
        "endOffset": 337,
        "label": "organisation",
        "startOffset": 321
      },
      {
        "endOffset": 360,
        "label": "person",
        "startOffset": 348
      },
      {
        "endOffset": 373,
        "label": "organisation",
        "startOffset": 366
      },
      {
        "endOffset": 463,
        "label": "location",
        "startOffset": 457
      },
      {
        "endOffset": 503,
        "label": "location",
        "startOffset": 498
      },
      {
        "endOffset": 532,
        "label": "location",
        "startOffset": 526
      },
      {
        "endOffset": 545,
        "label": "person",
        "startOffset": 534
      },
      {
        "endOffset": 586,
        "label": "location",
        "startOffset": 580
      },
      {
        "endOffset": 813,
        "label": "organisation",
        "startOffset": 799
      },
      {
        "endOffset": 825,
        "label": "person",
        "startOffset": 821
      }
    ],
    "num_entities": 17
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
  },
  {
    "task_id": 4,
    "entities": [
      {
        "endOffset": 5,
        "label": "organisation",
        "startOffset": 0
      },
      {
        "endOffset": 14,
        "label": "location",
        "startOffset": 7
      },
      {
        "endOffset": 42,
        "label": "person",
        "startOffset": 32
      },
      {
        "endOffset": 161,
        "label": "organisation",
        "startOffset": 151
      },
      {
        "endOffset": 191,
        "label": "person",
        "startOffset": 185
      },
      {
        "endOffset": 301,
        "label": "location",
        "startOffset": 295
      },
      {
        "endOffset": 420,
        "label": "location",
        "startOffset": 414
      },
      {
        "endOffset": 450,
        "label": "organisation",
        "startOffset": 445
      },
      {
        "endOffset": 475,
        "label": "person",
        "startOffset": 469
      },
      {
        "endOffset": 594,
        "label": "person",
        "startOffset": 588
      },
      {
        "endOffset": 622,
        "label": "location",
        "startOffset": 613
      },
      {
        "endOffset": 720,
        "label": "organisation",
        "startOffset": 707
      }
    ],
    "num_entities": 12
  },
  {
    "task_id": 5,
    "entities": [
      {
        "endOffset": 19,
        "label": "person",
        "startOffset": 7
      },
      {
        "endOffset": 39,
        "label": "location",
        "startOffset": 30
      },
      {
        "endOffset": 84,
        "label": "organisation",
        "startOffset": 74
      },
      {
        "endOffset": 98,
        "label": "location",
        "startOffset": 88
      },
      {
        "endOffset": 119,
        "label": "person",
        "startOffset": 113
      },
      {
        "endOffset": 272,
        "label": "person",
        "startOffset": 258
      },
      {
        "endOffset": 286,
        "label": "person",
        "startOffset": 274
      },
      {
        "endOffset": 361,
        "label": "location",
        "startOffset": 356
      },
      {
        "endOffset": 420,
        "label": "person",
        "startOffset": 409
      },
      {
        "endOffset": 436,
        "label": "organisation",
        "startOffset": 427
      },
      {
        "endOffset": 601,
        "label": "person",
        "startOffset": 588
      },
      {
        "endOffset": 682,
        "label": "organisation",
        "startOffset": 673
      }
    ],
    "num_entities": 12
  },
  {
    "task_id": 6,
    "entities": [
      {
        "endOffset": 7,
        "label": "location",
        "startOffset": 0
      },
      {
        "endOffset": 33,
        "label": "person",
        "startOffset": 16
      },
      {
        "endOffset": 107,
        "label": "location",
        "startOffset": 98
      },
      {
        "endOffset": 171,
        "label": "person",
        "startOffset": 156
      },
      {
        "endOffset": 194,
        "label": "person",
        "startOffset": 184
      },
      {
        "endOffset": 211,
        "label": "organisation",
        "startOffset": 198
      },
      {
        "endOffset": 241,
        "label": "person",
        "startOffset": 225
      },
      {
        "endOffset": 263,
        "label": "organisation",
        "startOffset": 245
      },
      {
        "endOffset": 329,
        "label": "location",
        "startOffset": 320
      },
      {
        "endOffset": 357,
        "label": "person",
        "startOffset": 347
      },
      {
        "endOffset": 473,
        "label": "organisation",
        "startOffset": 455
      },
      {
        "endOffset": 499,
        "label": "organisation",
        "startOffset": 486
      }
    ],
    "num_entities": 12
  },
  {
    "task_id": 7,
    "entities": [
      {
        "endOffset": 37,
        "label": "organisation",
        "startOffset": 19
      },
      {
        "endOffset": 159,
        "label": "organisation",
        "startOffset": 140
      },
      {
        "endOffset": 218,
        "label": "person",
        "startOffset": 204
      },
      {
        "endOffset": 275,
        "label": "person",
        "startOffset": 263
      },
      {
        "endOffset": 334,
        "label": "organisation",
        "startOffset": 329
      },
      {
        "endOffset": 379,
        "label": "organisation",
        "startOffset": 373
      },
      {
        "endOffset": 437,
        "label": "person",
        "startOffset": 426
      },
      {
        "endOffset": 478,
        "label": "person",
        "startOffset": 466
      },
      {
        "endOffset": 540,
        "label": "organisation",
        "startOffset": 535
      },
      {
        "endOffset": 602,
        "label": "organisation",
        "startOffset": 590
      },
      {
        "endOffset": 635,
        "label": "location",
        "startOffset": 624
      },
      {
        "endOffset": 650,
        "label": "location",
        "startOffset": 640
      },
      {
        "endOffset": 662,
        "label": "organisation",
        "startOffset": 656
      },
      {
        "endOffset": 735,
        "label": "organisation",
        "startOffset": 723
      },
      {
        "endOffset": 792,
        "label": "organisation",
        "startOffset": 778
      },
      {
        "endOffset": 816,
        "label": "organisation",
        "startOffset": 797
      },
      {
        "endOffset": 858,
        "label": "organisation",
        "startOffset": 845
      },
      {
        "endOffset": 885,
        "label": "organisation",
        "startOffset": 878
      }
    ],
    "num_entities": 18
  },
  {
    "task_id": 8,
    "entities": [
      {
        "endOffset": 36,
        "label": "person",
        "startOffset": 24
      },
      {
        "endOffset": 81,
        "label": "organisation",
        "startOffset": 67
      },
      {
        "endOffset": 95,
        "label": "organisation",
        "startOffset": 87
      },
      {
        "endOffset": 255,
        "label": "organisation",
        "startOffset": 250
      },
      {
        "endOffset": 267,
        "label": "organisation",
        "startOffset": 257
      },
      {
        "endOffset": 278,
        "label": "organisation",
        "startOffset": 272
      },
      {
        "endOffset": 314,
        "label": "organisation",
        "startOffset": 310
      },
      {
        "endOffset": 389,
        "label": "organisation",
        "startOffset": 374
      },
      {
        "endOffset": 414,
        "label": "organisation",
        "startOffset": 406
      },
      {
        "endOffset": 462,
        "label": "location",
        "startOffset": 452
      },
      {
        "endOffset": 478,
        "label": "organisation",
        "startOffset": 464
      },
      {
        "endOffset": 563,
        "label": "organisation",
        "startOffset": 556
      },
      {
        "endOffset": 584,
        "label": "person",
        "startOffset": 572
      },
      {
        "endOffset": 632,
        "label": "organisation",
        "startOffset": 624
      },
      {
        "endOffset": 689,
        "label": "person",
        "startOffset": 682
      }
    ],
    "num_entities": 15
  },
  {
    "task_id": 9,
    "entities": [
      {
        "endOffset": 33,
        "label": "person",
        "startOffset": 23
      },
      {
        "endOffset": 99,
        "label": "person",
        "startOffset": 89
      },
      {
        "endOffset": 237,
        "label": "person",
        "startOffset": 232
      },
      {
        "endOffset": 374,
        "label": "person",
        "startOffset": 369
      },
      {
        "endOffset": 401,
        "label": "location",
        "startOffset": 387
      },
      {
        "endOffset": 414,
        "label": "person",
        "startOffset": 409
      },
      {
        "endOffset": 667,
        "label": "person",
        "startOffset": 662
      },
      {
        "endOffset": 686,
        "label": "person",
        "startOffset": 681
      },
      {
        "endOffset": 743,
        "label": "organisation",
        "startOffset": 727
      },
      {
        "endOffset": 801,
        "label": "person",
        "startOffset": 796
      },
      {
        "endOffset": 949,
        "label": "organisation",
        "startOffset": 933
      }
    ],
    "num_entities": 11
  },
  {
    "task_id": 10,
    "entities": [
      {
        "endOffset": 13,
        "label": "person",
        "startOffset": 0
      },
      {
        "endOffset": 55,
        "label": "location",
        "startOffset": 48
      },
      {
        "endOffset": 152,
        "label": "person",
        "startOffset": 144
      },
      {
        "endOffset": 177,
        "label": "person",
        "startOffset": 172
      },
      {
        "endOffset": 205,
        "label": "location",
        "startOffset": 198
      },
      {
        "endOffset": 288,
        "label": "person",
        "startOffset": 277
      },
      {
        "endOffset": 349,
        "label": "person",
        "startOffset": 341
      },
      {
        "endOffset": 453,
        "label": "organisation",
        "startOffset": 434
      },
      {
        "endOffset": 571,
        "label": "location",
        "startOffset": 564
      },
      {
        "endOffset": 631,
        "label": "person",
        "startOffset": 623
      },
      {
        "endOffset": 776,
        "label": "person",
        "startOffset": 768
      },
      {
        "endOffset": 792,
        "label": "location",
        "startOffset": 785
      },
      {
        "endOffset": 923,
        "label": "location",
        "startOffset": 916
      },
      {
        "endOffset": 1026,
        "label": "location",
        "startOffset": 1019
      },
      {
        "endOffset": 1071,
        "label": "location",
        "startOffset": 1064
      },
      {
        "endOffset": 1136,
        "label": "organisation",
        "startOffset": 1124
      },
      {
        "endOffset": 1170,
        "label": "location",
        "startOffset": 1163
      },
      {
        "endOffset": 1311,
        "label": "person",
        "startOffset": 1306
      }
    ],
    "num_entities": 18
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