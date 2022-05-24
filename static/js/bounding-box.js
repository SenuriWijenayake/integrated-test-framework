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
        data: {trial_category: 'instructions', unique_trial_id: 1090},
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
    "image_id": "04d5d8c06898bc14",
    "index": 4,
    "num_faces": "5",
    "annotations": "{'annotations': [{'class_id': 0, 'height': 116.60995599999998, 'width': 94.72, 'left': 48.0, 'top': 211.434944}, {'class_id': 0, 'height': 114.04665700000007, 'width': 83.84000000000003, 'left': 256.64, 'top': 233.86056599999998}, {'class_id': 0, 'height': 130.06437300000005, 'width': 111.36000000000007, 'left': 510.08, 'top': 221.686774}, {'class_id': 0, 'height': 121.09521699999996, 'width': 112.0, 'left': 757.76, 'top': 225.530698}, {'class_id': 0, 'height': 146.722743, 'width': 102.39999999999998, 'left': 877.44, 'top': 78.80795499999999}], 'image_size': {'height': 683, 'width': 1024}}"
  },
  {
    "image_id": "19b9f38d1aa98fa2",
    "index": 5,
    "num_faces": "6",
    "annotations": "{'annotations': [{'class_id': 0, 'height': 81.28484099999999, 'width': 66.56, 'left': 324.48, 'top': 101.76591599999999}, {'class_id': 0, 'height': 112.64693399999996, 'width': 83.83999999999997, 'left': 401.92, 'top': 172.809879}, {'class_id': 0, 'height': 89.605299, 'width': 73.60000000000002, 'left': 505.6, 'top': 294.417411}, {'class_id': 0, 'height': 87.04542000000004, 'width': 64.63999999999999, 'left': 519.04, 'top': 144.648486}, {'class_id': 0, 'height': 69.76436400000003, 'width': 62.72000000000003, 'left': 631.68, 'top': 183.05075699999998}, {'class_id': 0, 'height': 85.76445899999999, 'width': 63.360000000000014, 'left': 732.16, 'top': 138.248448}], 'image_size': {'height': 681, 'width': 1024}}"
  },
  {
    "image_id": "d9dc9a557fef8b33",
    "index": 6,
    "num_faces": "10",
    "annotations": "{'annotations': [{'class_id': 0, 'height': 187.38719699999996, 'width': 141.785088, 'left': 187.29574399999998, 'top': 314.35484800000006}, {'class_id': 0, 'height': 152.36159100000006, 'width': 112.027648, 'left': 276.56703999999996, 'top': 142.72924199999997}, {'class_id': 0, 'height': 176.00363600000003, 'width': 141.78508799999997, 'left': 362.338304, 'top': 322.23598499999997}, {'class_id': 0, 'height': 139.22681799999998, 'width': 100.64895999999999, 'left': 401.723392, 'top': 98.947576}, {'class_id': 0, 'height': 162.868863, 'width': 120.77875200000005, 'left': 469.11487999999997, 'top': 168.99878800000002}, {'class_id': 0, 'height': 98.94757599999998, 'width': 86.64678400000003, 'left': 507.623424, 'top': 83.185985}, {'class_id': 0, 'height': 179.50606000000005, 'width': 140.90956799999992, 'left': 582.892544, 'top': 305.59878799999996}, {'class_id': 0, 'height': 152.36159099999998, 'width': 108.52659199999994, 'left': 605.647872, 'top': 70.92681800000001}, {'class_id': 0, 'height': 170.74999999999997, 'width': 111.15212800000006, 'left': 737.805312, 'top': 246.93045400000003}, {'class_id': 0, 'height': 33.274394, 'width': 35.008511999999996, 'left': 973.237248, 'top': 242.552424}], 'image_size': {'height': 683, 'width': 1024}}"
  },
  {
    "image_id": "f1455754ba536bb8",
    "index": 7,
    "num_faces": "11",
    "annotations": "{'annotations': [{'class_id': 0, 'height': 37.16134699999998, 'width': 21.11999999999999, 'left': 68.48, 'top': 151.84865800000003}, {'class_id': 0, 'height': 26.26886300000001, 'width': 16.0, 'left': 151.04, 'top': 153.130649}, {'class_id': 0, 'height': 27.550854000000015, 'width': 12.800000000000011, 'left': 273.28, 'top': 151.208004}, {'class_id': 0, 'height': 26.26954600000002, 'width': 14.080000000000041, 'left': 315.52, 'top': 142.878819}, {'class_id': 0, 'height': 16.017715999999993, 'width': 12.800000000000068, 'left': 610.56, 'top': 115.328648}, {'class_id': 0, 'height': 23.706930000000014, 'width': 14.720000000000027, 'left': 677.12, 'top': 114.046657}, {'class_id': 0, 'height': 18.580332000000013, 'width': 16.0, 'left': 753.28, 'top': 117.89126399999999}, {'class_id': 0, 'height': 19.861639999999994, 'width': 15.360000000000014, 'left': 848.0, 'top': 131.346364}, {'class_id': 0, 'height': 33.31673999999998, 'width': 21.120000000000005, 'left': 850.56, 'top': 192.854612}, {'class_id': 0, 'height': 23.066275999999988, 'width': 8.32000000000005, 'left': 887.04, 'top': 226.17135199999998}, {'class_id': 0, 'height': 44.84987799999999, 'width': 11.519999999999982, 'left': 905.6, 'top': 271.66256699999997}], 'image_size': {'height': 683, 'width': 1024}}"
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
    "image_id": "906232e33481b796",
    "index": 10,
    "num_faces": "14",
    "annotations": "{'annotations': [{'class_id': 0, 'height': 48.05314800000002, 'width': 31.36, 'left': 62.08, 'top': 339.578038}, {'class_id': 0, 'height': 40.365300000000005, 'width': 12.159999999999997, 'left': 71.04, 'top': 84.573841}, {'class_id': 0, 'height': 51.25710099999998, 'width': 40.96000000000001, 'left': 90.88, 'top': 344.70327}, {'class_id': 0, 'height': 58.94563199999993, 'width': 44.79999999999998, 'left': 197.12, 'top': 356.23640800000004}, {'class_id': 0, 'height': 42.927233, 'width': 43.51999999999998, 'left': 202.24, 'top': 293.446852}, {'class_id': 0, 'height': 61.50824799999998, 'width': 36.47999999999996, 'left': 345.6, 'top': 267.17730600000004}, {'class_id': 0, 'height': 58.94563199999999, 'width': 42.24000000000001, 'left': 434.56, 'top': 104.43616399999999}, {'class_id': 0, 'height': 67.27481700000001, 'width': 37.120000000000005, 'left': 515.84, 'top': 124.939141}, {'class_id': 0, 'height': 58.304295000000025, 'width': 26.24000000000001, 'left': 580.48, 'top': 174.914934}, {'class_id': 0, 'height': 62.789556000000005, 'width': 48.6400000000001, 'left': 610.56, 'top': 59.586286}, {'class_id': 0, 'height': 82.65187900000001, 'width': 51.200000000000045, 'left': 657.92, 'top': 138.394241}, {'class_id': 0, 'height': 34.598731, 'width': 19.839999999999918, 'left': 664.32, 'top': 98.669595}, {'class_id': 0, 'height': 90.98174700000001, 'width': 60.15999999999997, 'left': 736.64, 'top': 151.208004}, {'class_id': 0, 'height': 65.99350900000002, 'width': 44.80000000000007, 'left': 929.28, 'top': 149.926696}], 'image_size': {'height': 683, 'width': 1024}}"
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
            data: { trial_category:'bounding-box', unique_trial_id: 1000 + index,
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