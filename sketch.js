
var button;

var OOCSIsend = false;

var showrect1 = false;
var showrect2 = false;
var showrect3 = false;

let emoji1;
let p1, p2, p3, p4;

function setup() {
  createCanvas(windowWidth - 30, windowHeight - 60); //background
  background(200);
  
  //First draw the card box
  //Activity card:
  //I dont really understand why it is positioned in this way, it should be on the correct place but it is not

  fill(255);
  rect(200, 200, 600, 600, 30);

  fill(0);
  textSize(40);
  text("Activity Card", 250, 190);




//define standard text and color etc.
  textSize(14);
  fill(0);

  //Create labels for following checkboxes
  text("Activity title", 400, 310);
  text("Date of action", 400, 330);
  text("Hours spent", 400, 350);
  text("Description", 400, 370);
  text("Who was involved", 400, 450);
  text("Type of activity", 400, 470);
  text("Emotion of Process", 400, 490);
  text("Emotion of Results", 400, 510);

  //Lets first create the team selector: 
  //this will be called later
  inputbox_team = createSelect();
  inputbox_team.size(100, 15);
  inputbox_team.position(100, 100);
  inputbox_team.option("");
  inputbox_team.option("Team 1");
  inputbox_team.option("Team 2");
  inputbox_team.option("Team 3");
  inputbox_team.option("Team 4");
  inputbox_team.option("Team 5");
  inputbox_team.option("Team 6");
  inputbox_team.option("Team 7");
  inputbox_team.option("Team 8");
  inputbox_team.option("Team 9");
  inputbox_team.option("Team 10");

  fill(0);
  //inputbox activity title
  inputbox_title = createInput();
  inputbox_title.size(100, 10);
  inputbox_title.position(540, 253);
  //inputbox date
  inputbox_date = createInput();
  inputbox_date.size(100, 10);
  inputbox_date.position(540, 278);
  //inputbox hours spent
  inputbox_hours = createInput();
  inputbox_hours.size(100, 10);
  inputbox_hours.position(540, 303);
  //inputbox description
  inputbox_description = createInput();
  inputbox_description = select("#textinput");
  inputbox_description.size(215, 75);
  inputbox_description.position(425, 350);
  
  //inputbox type of activity
  inputbox_type = createSelect();
  inputbox_type.size(100, 15);
  inputbox_type.position(540, 453);
  inputbox_type.option("");
  inputbox_type.option("Problem Definition");
  inputbox_type.option("Background Research");
  inputbox_type.option("Concept Definition");
  inputbox_type.option("Concept Development");
  inputbox_type.option("Brainstorm / Ideate");
  inputbox_type.option("Analyzing");
  inputbox_type.option("Evaluating");
  inputbox_type.option("Prototype Building");
  inputbox_type.option("Validating");
  inputbox_type.option("Testing");
  inputbox_type.option("Organization");
  
  //emoji checkbox setup
  emoji1b = createCheckbox("");
  emoji1b.position(400, 510); 
  emoji1 = loadImage("Frowning Face.png");
  image(emoji1, 390, 480, 20, 20);

  emoji1b = createCheckbox("");
  emoji1b.position(435, 510); 
  emoji1 = loadImage("Frowning Face.png");
  image(emoji1, 425, 480, 20, 20);



  //Submit button for oocsi events
  button = createButton("submit");
  button.position(520, 550);
  button.mouseClicked(buttonEvent);
}

function draw() {
  //The person selector// they will change dependent on the team selected
  inputbox_team.changed(mySelectEvent);

  // //emoji outline selectors
  // // hier komt code
  // if (showrect1) {
  //   noFill();
  //   strokeWeight(1);
  //   stroke(51);
  //   rect(520, 480, 20, 20);
  // }

  // if (showrect2) {
  //   noFill();
  //   strokeWeight(1);
  //   stroke(51);
  //   rect(540, 480, 20, 20);
  // }

  // if (showrect3) {
  //   noFill();
  //   strokeWeight(1);
  //   stroke(51);
  //   rect(560, 480, 20, 20);
  // }

  if (OOCSIsend == true) {
    alertfunction();
    OOCSIsend = false;
  }
}
//
function mySelectEvent() {
  if (inputbox_team.value() == "Team 1") {
    p1 = "Kees";
    p2 = "Lisa";
    p3 = "Charlotte";
    p4 = "Jaap";
    p5 = "Coach";
    p6 = "External";
  }
  if (inputbox_team.value() == "Team 2") {
    p1 = "Maas";
    p2 = "Jelmer";
    p3 = "Leqi";
    p4 = "Nikki";
    p5 = "Coach";
    p6 = "External";
  }
  if (inputbox_team.value() == "Team 3") {
    p1 = "Joep";
    p2 = "Bart";
    p3 = "Miguel";
    p4 = "Stephan";
    p5 = "Coach";
    p6 = "External";
  }
  if (inputbox_team.value() == "Team 4") {
    p1 = "x";
    p2 = "y";
    p3 = "z";
    p4 = "f";
    p5 = "Coach";
    p6 = "External";
  }
  if (inputbox_team.value() == "Team 5") {
    p1 = "Single";
    p2 = "";
    p3 = "";
    p4 = "";
    p5 = "Coach";
    p6 = "External";
  }
  person1 = createCheckbox(p1);
  person1.position(100, 125);
  person2 = createCheckbox(p2);
  person2.position(100, 150);
  person3 = createCheckbox(p3);
  person3.position(100, 175);
  person4 = createCheckbox(p4);
  person4.position(100, 200);
  person5 = createCheckbox(p5);
  person5.position(100, 225);
  person6 = createCheckbox(p6);
  person6.position(100, 250);
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

  // print("Title: " + inputbox.value());
  // print("Hours: " + inputbox2.value());
  // print("Description: " + inputbox3.value());
  // print(
  //   "Persons involved: " +
  //     person1.checked() +
  //     ", " +
  //     person2.checked() +
  //     ", " +
  //     person3.checked() +
  //     ", " +
  //     person4.checked() +
  //     ", " +
  //     person5.checked() +
  //     ", " +
  //     person6.checked()
  // );




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
      //define what to send
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
  //resetting all boxes to make sure the activity card is ready to log new activity
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

//Nice little prompt to show that it worked
function alertfunction() {
  alert("Activity Card logged!");
}
