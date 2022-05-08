function comprehension(){

    var timeline = [];

    var answers = ['D','C','D','A','B'];

    var instructions_block = {
        type: "html-button-response",
        stimulus: "<p><strong>Instructions</strong></p>" +
        "<p>In this task, you will read an article and answer several multiple-choice questions based on the article's content.</p>",
        choices: ['Continue'],
        data: {trial_category: 'instructions', unique_trial_id: 790}
    };

    timeline.push(instructions_block);


     timeline.push({
      type: "survey-multi-choice",
      preamble: "<h3>Egypt, the Kingdom of Kush, and Mesopotamia</h3>" +
      "<p style = 'text-align:left'>Imagine a life directly defined by roughly a third of a year of rain and flooding. The people of ancient Mesopotamia, Egypt, and the Kingdom of Kush all lived that life: their economies, power, and simple survival depended on the seasons of the rivers that ran through each empire.</p>" +
      "<p style = 'text-align:left'>Ancient Egypt and Mesopotamia made up parts of the area known as the Fertile Crescent, which experienced rain every year for about 100 days, beginning in the late spring or early summer. For ancient Egypt, this caused the Nile River to flood, which saturated the normally arid land around it with water and nutrient-rich, river-born soil called silt. Ancient Egyptians are now revered as the masters of desert agriculture, for their irrigation technology allowed them to cultivate crops during the dry months, from a fall-season sowing to springtime harvest. Their expertise started with simply monitoring weather patterns and gauging the rise and fall of the Nile’s water levels, practices by which the nation’s people were able to plan their planting and harvest seasons accordingly.</p>" +
      "<p style = 'text-align:left'>Some special inventions revolving around the rainy season included the system of dikes and canals built to contain and direct the floodwaters of the Nile. By diverting water, ancient Egyptians were able to keep it from washing onto un-farmable desert terrain, where it would essentially be wasted. Instead, the ability to move water to the crops that needed it allowed for a productive growing season and higher crop yield.</p>" +
      "<p style = 'text-align:left'>Ancient Egyptians grew a variety of crops, and they were able to build cities around the abundance. They traded grains (and in surplus years, could store excess in granaries as well), made linen from flax, and sustained themselves on garden crops grown in smaller plots, often part of personal households. Cities thrived along the Nile, in large part because of the proximity to the obvious transportation, which facilitated trade. As the fruits of farm labor were traded, city merchants grew wealthier, and the metropolis thrived.</p>" +
      "<p style = 'text-align:left'>The same sort of growth was characteristic of the nearby kingdom of Kush, also known as Nubia. Kush was situated just south of ancient Egypt, in what is now southern Egypt and northern Sudan. Kush’s two capitals, first Napata and then Meroe, were each situated along the Nile. The Kushites employed many of the same irrigation techniques as the ancient Egyptians did, taking advantage of the rainy season to keep the land fertile. Using dams and cataracts, the Kushites directed the flow of water to grow wheat, barley, lentils, peas, and even dates and mangoes. Waterwheels known as “saqia” allowed for even further movement of water to higher ground.</p>" +
      "<p style = 'text-align:left'>Midway through the golden years of Kush (called, too, the “Land of Gold” for its gold trade), the arrival of iron changed farming forever. An invasion by the Assyrians cut short the influence of Kush in Egypt, but while they lost power over their Northern neighbors, the Kushites gained knowledge of ironwork. The deserts east of the Nile near the city of Meroe were rich in iron ore, and as Kush began to make tools such as hoes and plows, crop yields increased. Again, with the proximity of the harvest to the river—the main means of trade and travel—cities like Napata and Meroe grew and enjoyed prosperity with the agriculture-driven commerce.</p>" +
      "<p style = 'text-align:left'>Located across the Red Sea and the Syrian Desert from Kush, there was the famous region of the Fertile Crescent called Mesopotamia. Framed by the Tigris and Euphrates rivers, it occupied what is now Iraq. The area experienced the same cyclical flooding periods that ancient Egypt and Kush did, and thus had to learn to adapt. The difference is, this “land between rivers” (the meaning of the origin of the name “Mesopotamia”) had the flooding of not just one waterway but an entire flowing border to harness. However, like ancient Egypt and Kush, its location made it an ideal site for irrigation practices: as the people of the Nile did, Mesopotamians coaxed water into typically drier regions with canals. The land was routinely fertilized by rich silt washed up by the rivers; Mesopotamia supported the harvest of barley, onions, grapes, apples, and turnips. Cattle and sheep grazed on fertile grassland, and fishermen made a living selling and trading their catch.</p>" +
      "<p style = 'text-align:left'>Like the famous cities of Thebes, Meroe, and Napata, Mesopotamian cities such as Ur and Babylon sat near the rivers, again seeing success on the water because of the agricultural and trade possibilities making commerce possible and merchants rich. In each city, and in each kingdom, success and power were facilitated by both agricultural advancements (such as iron tools and irrigation) and the means to trade and sell a harvest (the rivers). The reigns of ancient Egypt, Mesopotamia, and Kush were all dependent on an uncomplicated but involved cycle: the rivers provided the water needed to grow crops like wheat, technology made irrigation, plowing, and harvest possible, and trade generated income to the cities along the river. In this way, waterfront settlements in each region became seats of commerce and power: they were self-sustaining metropolises.</p>" +
      "<p style = 'text-align:left'>The downfall of these cities was also woven with the success and failure of the agriculture of ancient Egypt, Mesopotamia, and Kush. Generations of tough farming and overgrazing sapped land of nutrients, and in Kush, the deforestation that accompanied the mining of iron ore caused devastating erosion. As land morphed from oasis to desert, cities lost their power: there was nothing left to grow, and nothing left to trade. In spite of their tremendous advances in agricultural technology, these ancient cultures could not combat dust for long, and when farms dried out, so too did the power and success of ancient Egyptian, Kushian, and Mesopotamian cities.</p>" +
      "</body>",
      required: true,
      randomize_question_order: false,
      questions: [
        {
          prompt: "The economies, power, and survival of ancient Mesopotamia, Egypt, and the Kingdom of Kush depended on what?",
          options: ['A. the Sahara Desert of Africa','B. the trade of wheat, barley, lentils, and peas','C. the trade of iron and gold established in each empire','D. the seasons of the rivers that ran through each empire'],
          required: true,
          unique_trial_id: 701
        },
        {
          prompt: "The normally arid land around the Nile River became saturated with water and nutrient-rich, river-born soil called silt. What caused this to happen?",
          options: ['A. The people in the Fertile Crescent were able to grow a variety of crops.','B. The people in the Fertile Crescent built effective irrigation systems.','C. The Nile River flooded due to heavy rains.','D. The Nile River dried out due to lack of rain.'],
          required: true,
          unique_trial_id: 702
        },
        {
          prompt: "The Nile River was responsible for the success of the Ancient Egyptian cities. Which evidence best supports this statement?",
          options: ['A. Every year, beginning in the late spring or early summer, the area known as the Fertile Crescent experienced rain for about 100 days.',
          'B. A system of dikes and canals were built in Ancient Egypt to contain and direct the floodwaters of the Nile.',
          'C. Ancient Egyptians are now revered as the masters of desert agriculture because their irrigation technology allowed them to cultivate crops during the dry months.',
          'D. Cities thrived along the Nile, in large part because of the proximity to the obvious transportation, which facilitated trade.'],
          required: true,
          unique_trial_id: 703
        },
        {
          prompt: "Which main factor contributed to the downfall of Mesopotamia, Egypt, and the Kingdom of Kush?",
          options: ['A. bad agricultural practices','B. periods of drought','C. corruption and war','D. drastic population growth'],
          required: true,
          unique_trial_id: 704
        },
        {
          prompt: "What is the main idea of this passage?",
          options: ['A. Ancient inventions made from iron ore were important to the success of the empires of Egypt, Mesopotamia, and the Kingdom of Kush.',
          'B. Ancient civilizations in the Fertile Crescent relied on rivers and harnessed their power to develop into strong and wealthy empires.',
          'C. The Kingdom of Kush and Mesopotamia depended on the Egyptians to develop technologies that harnessed the power of rivers.',
          'D. Reliance on rivers was the cause of the downfall of many ancient empires.'],
          required: true,
          unique_trial_id: 705
        }],

      button_label: 'Submit',
      data: {trial_category:'comprehension',unique_trial_id:700},
      on_finish: function (data) {
        console.log(data);
        data.response = JSON.parse(data.responses);
        // Calculating score
        let score = 0;

        for (let i = 0; i < 5;i++){
            var index = 'Q' + i;
            if (data.response[index][0] == answers[i]){
                score += 1;
            }
        }
        data.response.score = score;
      }
    });

    return timeline;
}