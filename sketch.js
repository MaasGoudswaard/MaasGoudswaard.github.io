var button;
let inputbox5;
var OOCSIsend = false;
var showrect1 = false;
var showrect2 = false;
var showrect3 = false;
var buttonpress = false;

let img1, img2, img3, img4, img5, img6;
let smiley1, smiley2, smiley3, smiley4, smiley5;

function setup() {
  createCanvas(windowWidth - 30, windowHeight - 60); //background
  background(220);


  // img1 = loadImage("Beaming Face With Smiling Eyes.png");
  // img2 = loadImage("Confused Face.png");
  // img3 = loadImage("Frowning Face.png");
  // img4 = loadImage("Grinning Face With Big Eyes.png");
  // img5 = loadImage("Neutral Face.png");
  // img6 = loadImage("Slightly Smiling Face.png");
  
  //Lets first create the team selector:
  inputboxteam = createSelect();
  inputboxteam.size(100, 15);
  inputboxteam.position(100, 100);
  inputboxteam.option("");
  inputboxteam.option("Team 1");
  inputboxteam.option("Team 2");
  inputboxteam.option("Team 3");
  inputboxteam.option("Team 4");
  inputboxteam.option("Team 5");
  inputboxteam.option("Team 6");
  inputboxteam.option("Team 7");
  inputboxteam.option("Team 8");
  inputboxteam.option("Team 9");
  inputboxteam.option("Team 10");
  
  //The person selector
  person1 = createCheckbox("Name person 1");
  person1.position(100, 125);

  person2 = createCheckbox("Name person 2");
  person2.position(100, 150);

  person3 = createCheckbox("Name person 3");
  person3.position(100, 175);

  person4 = createCheckbox("Name person 4");
  person4.position(100, 200);

  person5 = createCheckbox("Coach");
  person5.position(100, 225);

  person6 = createCheckbox("External");
  person6.position(100, 250);

  
  
  //Activity card:
  //I dont really understand why it is positioned in this way, it should be on the correct place but it is not
  fill(0);
  textSize(20);
  text("Activity Card", 380, 270);

  fill(255);
  rect(380, 280, 400, 400, 30);
  //rect(windowWidth / 2, windowHeight / 2, 280, 250, 20);

  
  inputbox = createInput();
  inputbox.size(100, 10);
  inputbox.position(480, 315);

  inputbox2 = createInput();
  inputbox2.size(100, 10);
  inputbox2.position(480, 355);

  inputbox3 = createInput();
  inputbox3.size(100, 10);
  inputbox3.position(480, 335);

  inputbox4 = createInput();
  inputbox4 = select("#textinput");
  inputbox4.size(200, 50);
  inputbox4.position(400, 390);


  inputbox6 = createSelect();
  inputbox6.size(100, 15);
  inputbox6.position(520, 475);
  inputbox6.option("");
  inputbox6.option("Problem Definition");
  inputbox6.option("Background Research");
  inputbox6.option("Concept Definition");
  inputbox6.option("Concept Development");
  inputbox6.option("Brainstorm / Ideate");
  inputbox6.option("Analyzing");
  inputbox6.option("Evaluating");
  inputbox6.option("Prototype Building");
  inputbox6.option("Validating");
  inputbox6.option("Testing");
  inputbox6.option("Organization");
  
  button = createButton("submit");
  button.position(520, 450);
  // button.position(
  //   windowWidth / 2 + windowWidth / 5,
  //   windowWidth / 2 + windowWidth / 5
  // );
  button.mouseClicked(buttonEvent);

  buttonemoji1 = createImg("Frowning Face.png");
  buttonemoji1.position(520, 495);
  buttonemoji1.size(20, 20);
  buttonemoji1.mouseClicked(buttonEvent_emoji1);

  buttonemoji2 = createImg("Confused Face.png");
  buttonemoji2.position(540, 495);
  buttonemoji2.size(20, 20);
  buttonemoji2.mouseClicked(buttonEvent_emoji2);

  buttonemoji2 = createImg("Neutral Face.png");
  buttonemoji2.position(560, 495);
  buttonemoji2.size(20, 20);
  buttonemoji2.mouseClicked(buttonEvent_emoji3);

  textSize(12);

}

function draw() {
  textFont("Work+Sans");

  // image(img1, 520, 480, 20, 20);
  // image(img2, 540, 480, 20, 20);
  // image(img3, 560, 480, 20, 20);
  // image(img4, 580, 480, 20, 20);
  // image(img5, 600, 480, 20, 20);
  // image(img6, 620, 480, 20, 20);

  if (showrect1) {
    noFill();
    strokeWeight(1);
    stroke(51);
    rect(520, 480, 20, 20);
  }

  if (showrect2) {
    noFill();
    strokeWeight(1);
    stroke(51);
    rect(540, 480, 20, 20);
  }

  if (showrect3) {
    noFill();
    strokeWeight(1);
    stroke(51);
    rect(560, 480, 20, 20);
  }

  noStroke();
  fill(0);
  text("Activity title", 400, 310);
  text("Date of action", 400, 330);
  text("Hours spent", 400, 350);
  text("Description", 400, 370);
  text("Who was involved", 400, 450);
  text("Type of activity", 400, 470);
  text("Emotion of Process", 400, 490);
  text("Emotion of Results", 400, 510);

  if (OOCSIsend == true) {
    alertfunction();
    OOCSIsend = false;
  }
}

function buttonEvent_emoji1() {
  showrect1 = !showrect1;
  showrect2 = false;
  showrect3 = false;
}

function buttonEvent_emoji2() {
  showrect2 = !showrect2;
  showrect1 = false;
  showrect3 = false;
}

function buttonEvent_emoji3() {
  showrect3 = !showrect3;
  showrect2 = false;
  showrect1 = false;
}

function buttonEvent() {
  let checkperson1 = person1.checked();
  let checkperson2 = person2.checked();
  let checkperson3 = person3.checked();
  let checkperson4 = person4.checked();
  let checkperson5 = person5.checked();
  let checkperson6 = person6.checked();

  print("Title: " + inputbox.value());
  print("Hours: " + inputbox2.value());
  print("Description: " + inputbox3.value());
  print(
    "Persons involved: " +
      checkperson1 +
      ", " +
      checkperson2 +
      ", " +
      checkperson3 +
      ", " +
      checkperson4 +
      ", " +
      checkperson5 +
      ", " +
      checkperson6
  );

  // var data = {
  //   Title: inputbox.value(),
  //   Title: inputbox.value(),
  // };

  $.ajax({
    //to send data to the database
    url: "https://data.id.tue.nl/datasets/entity/8245/item/",
    headers: {
      api_token: "ZmR2RmpjajNBMzI0emNBbmxEVVJlT2V6R1A2NEd1endjdFkvWTc0WFJzQT0=",
      resource_id: "Activity",
      token: "token_for_identifier",
    },
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      Participant: inputboxteam.value(),
      Title: inputbox.value(),
      Date: inputbox2.value(),
      Hours: inputbox3.value(),
      Description: inputbox4.value(),
      Person1: person1.checked(),
      Person2: person2.checked(),
      Person3: person3.checked(),
      Person4: person4.checked(),
      Person5: person5.checked(),
      Person6: person6.checked(),
      Type: inputbox6.value(),
    }),
    success: function (data) {
      console.log(data); //to show whether sending to database went well
    },
    error: function (e) {
      console.log(e); //to show whether sending to database went wrong
    },
  });
  inputboxteam.value("");
  inputbox.value("");
  inputbox2.value("");
  inputbox3.value("");
  inputbox4.value("");
  inputbox6.value("");
  person1.checked(false);
  person2.checked(false);
  person3.checked(false);
  person4.checked(false);
  person5.checked(false);
  person6.checked(false);
  OOCSIsend = true;
}

function alertfunction() {
  alert("Activity Card logged!");
}
