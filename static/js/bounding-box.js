function boundingBox(){

    var timeline = [];

    var instructions_block = {
        type: "html-button-response",
        stimulus: "<p><strong>Instructions</strong></p>" +
        "<p>In this task you will use the bounding box tool to draw boxes around <b>human faces</b> in a series of images.</p>" +
        "<ol style='text-align:left; padding-left: 10%'><li>Draw a rectangle using your mouse over each instance of the target.</li>" +
        "<li>Make sure the box does not cut into the target: leave a 2 - 3 pixel margin.</li>" +
        "<li>When targets are overlapping draw a box around each object. Include all contiguous parts of the target in the box. Do not include parts that are completely overlapped by another object.</li>" +
        "<li>Do not include parts of the target that cannot be seen, though you think you can interpolate the whole shape of the target.</li>" +
        "<li>Avoid shadows, they are not considered as a part of the target.</li>" +
        "<li>If the target goes off the screen, label up to the edge of the image.</li></ol>",
        choices: ['Continue'],
        data: {trial_category: 'instructions', unique_trial_id: 1290},
        on_load: function () {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://assets.crowd.aws/crowd-html-elements.js';
            head.appendChild(script);

            var custom_script = document.createElement('script');
            custom_script.type = 'text/javascript';
            custom_script.src = '/static/js/crowd-html-scripts.js';
            head.appendChild(custom_script);

            window.scroll(0,0);
        }
    };


    timeline.push(instructions_block);

    var randomIndex = jsPsych.randomization.shuffle([
  {
    "image_id": "a10dcef70b2c5c9b",
    "index": 1,
    "num_faces": "2",
    "annotations": "{'annotations': [{'class_id': 0, 'height': 248.31974400000001, 'width': 178.56, 'left': 316.8, 'top': 143.360256}, {'class_id': 0, 'height': 234.24000000000007, 'width': 177.27999999999997, 'left': 506.24, 'top': 164.480256}], 'image_size': {'height': 768, 'width': 1024}}"
  },
  {
    "image_id": "4d18df63ebbcdc01",
    "index": 2,
    "num_faces": "3",
    "annotations": "{'annotations': [{'class_id': 0, 'height': 153.13064899999995, 'width': 110.07999999999998, 'left': 85.12, 'top': 351.75114700000006}, {'class_id': 0, 'height': 195.417228, 'width': 138.24, 'left': 356.48, 'top': 230.65661300000002}, {'class_id': 0, 'height': 178.75885799999995, 'width': 142.07999999999998, 'left': 487.68, 'top': 243.471059}], 'image_size': {'height': 683, 'width': 1024}}"
  },
  {
    "image_id": "4aab5e31d6072f6a",
    "index": 3,
    "num_faces": "4",
    "annotations": "{'annotations': [{'class_id': 0, 'height': 122.29800000000002, 'width': 80.0, 'left': 223.36, 'top': 103.72856}, {'class_id': 0, 'height': 131.26175999999998, 'width': 96.00000000000006, 'left': 435.84, 'top': 112.69300000000001}, {'class_id': 0, 'height': 108.85099999999994, 'width': 92.15999999999997, 'left': 597.12, 'top': 185.04704000000004}, {'class_id': 0, 'height': 128.70088, 'width': 89.60000000000002, 'left': 779.52, 'top': 203.6158}], 'image_size': {'height': 680, 'width': 1024}}"
  },
  {
    "image_id": "dbaab05cba6f8cc8",
    "index": 4,
    "num_faces": "5",
    "annotations": "{'annotations': [{'class_id': 0, 'height': 60.0, 'width': 58.399744, 'left': 45.599744, 'top': 236.79974399999998}, {'class_id': 0, 'height': 145.60051199999998, 'width': 142.39948800000008, 'left': 300.000256, 'top': 263.199744}, {'class_id': 0, 'height': 157.60051199999998, 'width': 153.60000000000002, 'left': 634.399744, 'top': 251.199744}, {'class_id': 0, 'height': 56.79974399999999, 'width': 31.999999999999886, 'left': 814.400512, 'top': 118.400256}, {'class_id': 0, 'height': 56.799744000000004, 'width': 40.80025599999988, 'left': 917.6002560000001, 'top': 134.39999999999998}], 'image_size': {'height': 768, 'width': 1024}}"
  },
  {
    "image_id": "5ac35b2823dadeda",
    "index": 5,
    "num_faces": "6",
    "annotations": "{'annotations': [{'class_id': 0, 'height': 108.5, 'width': 41.974784, 'left': 202.001408, 'top': 338.625}, {'class_id': 0, 'height': 147.0, 'width': 111.93139200000002, 'left': 370.774016, 'top': 95.375}, {'class_id': 0, 'height': 78.74999999999994, 'width': 71.70662400000003, 'left': 537.796608, 'top': 360.5}, {'class_id': 0, 'height': 90.125, 'width': 71.7056, 'left': 638.3605759999999, 'top': 182.875}, {'class_id': 0, 'height': 91.875, 'width': 58.589184000000046, 'left': 790.51776, 'top': 218.75}, {'class_id': 0, 'height': 76.99999999999994, 'width': 57.71468800000014, 'left': 838.612992, 'top': 406.0}], 'image_size': {'height': 700, 'width': 1024}}"
  },
  {
    "image_id": "52e117e4269a50a7",
    "index": 6,
    "num_faces": "10",
    "annotations": "{'annotations': [{'class_id': 0, 'height': 102.51420200000001, 'width': 78.72, 'left': 10.24, 'top': 252.440898}, {'class_id': 0, 'height': 103.79551000000006, 'width': 82.56, 'left': 129.28, 'top': 247.955637}, {'class_id': 0, 'height': 68.55612500000007, 'width': 83.19999999999999, 'left': 215.68, 'top': 316.51244499999996}, {'class_id': 0, 'height': 78.80795499999999, 'width': 64.63999999999999, 'left': 269.44, 'top': 107.639434}, {'class_id': 0, 'height': 87.13645700000006, 'width': 55.039999999999964, 'left': 366.72, 'top': 294.08750599999996}, {'class_id': 0, 'height': 69.837433, 'width': 55.039999999999964, 'left': 377.6, 'top': 56.383016}, {'class_id': 0, 'height': 67.91615399999999, 'width': 57.60000000000002, 'left': 547.84, 'top': 99.950903}, {'class_id': 0, 'height': 73.04138600000002, 'width': 52.48000000000002, 'left': 726.4, 'top': 147.36407999999997}, {'class_id': 0, 'height': 80.08858000000001, 'width': 60.15999999999997, 'left': 910.08, 'top': 144.801464}, {'class_id': 0, 'height': 71.118741, 'width': 49.91999999999996, 'left': 963.84, 'top': 152.48999500000002}], 'image_size': {'height': 683, 'width': 1024}}"
  },
  {
    "image_id": "321a4b9aa2254632",
    "index": 7,
    "num_faces": "11",
    "annotations": "{'annotations': [{'class_id': 0, 'height': 118.05723300000005, 'width': 47.333376, 'left': 0.0, 'top': 254.79110099999997}, {'class_id': 0, 'height': 92.04449500000001, 'width': 78.666752, 'left': 84.666368, 'top': 241.451428}, {'class_id': 0, 'height': 96.04687500000006, 'width': 90.66700800000001, 'left': 178.666496, 'top': 298.14520899999997}, {'class_id': 0, 'height': 39.35241099999996, 'width': 106.66700799999998, 'left': 228.666368, 'top': 642.31369}, {'class_id': 0, 'height': 86.70889900000003, 'width': 33.99987199999998, 'left': 284.000256, 'top': 274.800952}, {'class_id': 0, 'height': 86.70889899999997, 'width': 55.33286400000003, 'left': 377.33376, 'top': 245.453125}, {'class_id': 0, 'height': 94.04636800000006, 'width': 80.0, 'left': 433.999872, 'top': 232.78005999999996}, {'class_id': 0, 'height': 63.36395900000002, 'width': 98.66649600000005, 'left': 622.666752, 'top': 608.296875}, {'class_id': 0, 'height': 103.38434400000003, 'width': 76.66585600000008, 'left': 666.0003839999999, 'top': 232.78005999999996}, {'class_id': 0, 'height': 112.72163700000004, 'width': 67.99974399999985, 'left': 768.6666240000001, 'top': 216.77258899999998}, {'class_id': 0, 'height': 156.0764279999999, 'width': 154.00038400000005, 'left': 836.6663679999999, 'top': 486.23726200000004}], 'image_size': {'height': 683, 'width': 1024}}"
  },
  {
    "image_id": "913e9a07949164c4",
    "index": 8,
    "num_faces": "12",
    "annotations": "{'annotations': [{'class_id': 0, 'height': 28.820340000000016, 'width': 17.92, 'left': 107.52, 'top': 191.49417899999997}, {'class_id': 0, 'height': 49.95491400000006, 'width': 46.08000000000001, 'left': 248.96, 'top': 185.08988699999998}, {'class_id': 0, 'height': 26.258418000000006, 'width': 15.359999999999957, 'left': 316.16, 'top': 206.224974}, {'class_id': 0, 'height': 36.50559300000003, 'width': 23.680000000000007, 'left': 437.76, 'top': 173.561751}, {'class_id': 0, 'height': 31.381749000000013, 'width': 12.159999999999968, 'left': 485.12, 'top': 212.62926599999997}, {'class_id': 0, 'height': 31.38226199999997, 'width': 10.879999999999995, 'left': 490.24, 'top': 208.786383}, {'class_id': 0, 'height': 30.101301000000007, 'width': 37.11999999999989, 'left': 541.44, 'top': 192.77514}, {'class_id': 0, 'height': 78.77525400000002, 'width': 57.59999999999991, 'left': 696.32, 'top': 185.08988699999998}, {'class_id': 0, 'height': 42.269660999999985, 'width': 31.360000000000014, 'left': 796.16, 'top': 157.550508}, {'class_id': 0, 'height': 37.146330000000006, 'width': 30.08000000000004, 'left': 863.36, 'top': 192.77514}, {'class_id': 0, 'height': 24.977457000000015, 'width': 26.24000000000001, 'left': 910.08, 'top': 194.05610099999998}, {'class_id': 0, 'height': 28.179602999999958, 'width': 37.75999999999999, 'left': 951.04, 'top': 197.898984}], 'image_size': {'height': 513, 'width': 1024}}"
  },
  {
    "image_id": "4b6dfc56a8a24cab",
    "index": 9,
    "num_faces": "13",
    "annotations": "{'annotations': [{'class_id': 0, 'height': 42.28726200000003, 'width': 9.6, 'left': 0.0, 'top': 194.13592}, {'class_id': 0, 'height': 52.53909199999998, 'width': 37.75999999999999, 'left': 35.84, 'top': 292.805515}, {'class_id': 0, 'height': 177.47754999999998, 'width': 136.32000000000002, 'left': 177.28, 'top': 217.842167}, {'class_id': 0, 'height': 24.987554999999986, 'width': 10.240000000000009, 'left': 370.56, 'top': 213.998243}, {'class_id': 0, 'height': 62.14958500000006, 'width': 46.079999999999984, 'left': 492.16, 'top': 426.714495}, {'class_id': 0, 'height': 28.832161999999983, 'width': 14.080000000000041, 'left': 583.04, 'top': 189.010005}, {'class_id': 0, 'height': 117.24992700000001, 'width': 90.24000000000001, 'left': 583.04, 'top': 294.08750599999996}, {'class_id': 0, 'height': 39.08330900000004, 'width': 37.75999999999999, 'left': 609.28, 'top': 197.33987299999998}, {'class_id': 0, 'height': 88.41844800000001, 'width': 64.0, 'left': 743.04, 'top': 169.148365}, {'class_id': 0, 'height': 23.706246999999934, 'width': 17.279999999999973, 'left': 830.72, 'top': 244.11171300000004}, {'class_id': 0, 'height': 26.26954599999999, 'width': 22.399999999999977, 'left': 908.16, 'top': 240.267106}, {'class_id': 0, 'height': 21.78428500000001, 'width': 16.0, 'left': 965.76, 'top': 252.440898}, {'class_id': 0, 'height': 97.38897, 'width': 46.72000000000003, 'left': 976.64, 'top': 247.955637}], 'image_size': {'height': 683, 'width': 1024}}"
  },
  {
    "image_id": "66a9c8ba5c4f233c",
    "index": 10,
    "num_faces": "14",
    "annotations": "{'annotations': [{'class_id': 0, 'height': 149.04190200000002, 'width': 139.52, 'left': 124.16, 'top': 247.55014500000001}, {'class_id': 0, 'height': 40.93833, 'width': 40.31999999999999, 'left': 158.72, 'top': 26.865822}, {'class_id': 0, 'height': 46.055792999999994, 'width': 30.079999999999984, 'left': 162.56, 'top': 81.877347}, {'class_id': 0, 'height': 120.896199, 'width': 83.84000000000003, 'left': 314.88, 'top': 83.156541}, {'class_id': 0, 'height': 82.51694399999997, 'width': 60.15999999999997, 'left': 453.76, 'top': 104.26530300000002}, {'class_id': 0, 'height': 57.569913, 'width': 52.47999999999996, 'left': 508.8, 'top': 4.477866000000001}, {'class_id': 0, 'height': 97.22904899999997, 'width': 62.72000000000003, 'left': 578.56, 'top': 99.14784}, {'class_id': 0, 'height': 56.29071900000001, 'width': 46.08000000000004, 'left': 618.88, 'top': 19.189971}, {'class_id': 0, 'height': 76.12028700000005, 'width': 43.51999999999998, 'left': 643.84, 'top': 188.06144099999997}, {'class_id': 0, 'height': 74.84109300000003, 'width': 43.51999999999998, 'left': 672.64, 'top': 214.28766599999997}, {'class_id': 0, 'height': 131.131812, 'width': 87.67999999999995, 'left': 714.88, 'top': 190.619829}, {'class_id': 0, 'height': 63.96656999999999, 'width': 53.75999999999999, 'left': 716.16, 'top': 90.19279499999999}, {'class_id': 0, 'height': 62.686689, 'width': 56.319999999999936, 'left': 798.72, 'top': 17.910777}, {'class_id': 0, 'height': 56.290718999999996, 'width': 61.43999999999994, 'left': 901.12, 'top': 80.597466}], 'image_size': {'height': 687, 'width': 1024}}"
  }
]);

    for (let i in randomIndex){

        var index = randomIndex[i].index;

        timeline.push({
            type: "external-html",
            url: "boundingbox/boundingbox" + index + ".html",
            execute_script: true,
            cont_btn: "aws-submit",
            on_load : function(){
                window.scroll(0,0);
            },
            data: { trial_category:'bounding-box', unique_trial_id: 1200 + index,
                    image_id: randomIndex[i].image_id,
                    ground_truth: randomIndex[i].annotations,
                    num_faces: randomIndex[i].num_faces},

            check_fn: function(){
                var data = JSON.parse(sessionStorage.getItem("boundingBox"));
                return true;
            },
            on_finish: function(data){
                data.response = JSON.parse(sessionStorage.getItem("boundingBox"));
            }
        });
    }

    return timeline;
}