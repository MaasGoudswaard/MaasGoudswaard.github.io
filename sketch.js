
var button;

var OOCSIsend = false;

let emoji1;
let emoji2;
let emoji3;
let emoji4;
let emoji5;
let emoji6;
let emoji7;
let emoji8;
let emoji9;
let emoji10;
let emoji11;
let emoji12;
let emoji13;
let emoji14;
let emoji15;
let emoji16;
let emoji17;

let p1 = "";
let p2 = "";
let p3 = "";
let p4 = "";
let p5 = "";
let p6 = "";

 function preload(){
  emoji1 = loadImage('Frowning Face.png');
  emoji2 = loadImage('Confused Face.png');
  emoji3 = loadImage('Neutral Face.png');
  emoji4 = loadImage('Slightly Smiling Face.png');
  emoji5 = loadImage('Grinning Face With Big Eyes.png');
  emoji6 = loadImage('Pouting Face.png');
  emoji7 = loadImage('Face Vomiting.png');
  emoji8 = loadImage('Hot Face.png');
  emoji9 = loadImage('Loudly Crying Face.png');
  emoji10 = loadImage('Crying Face.png');
  emoji11 = loadImage('Face With Raised Eyebrow.png');
  emoji12 = loadImage('Face With Monocle.png');
  emoji13 = loadImage('Nerd Face.png');
  emoji14 = loadImage('Thinking Face.png');
  emoji15 = loadImage('Partying Face.png');
  emoji16 = loadImage('Grinning Face With Sweat.png');
  emoji17 = loadImage('Smiling Face With Heart Eyes.png');
 }

function setup() {
  createCanvas(windowWidth, windowHeight ); //background
  background(200);
  
  //First draw the card box
  //Activity card:
  //I dont really understand why it is positioned in this way, it should be on the correct place but it is not

  fill(255);
  rect(200, 200, 700, 420, 30);

  fill(0);
  textSize(40);
  text("Activity Card", 250, 190);


//define standard text and color etc.
  textSize(14);
  fill(0);


  text("Team:", 250, 250);
  //Lets first create the team selector: 
  //this will be called later
  inputbox_team = createSelect();
  inputbox_team.size(100, 20);
  inputbox_team.position(250, 275);
  inputbox_team.option("");
  inputbox_team.option("M1.2 Arian");
  inputbox_team.option("Bright Break");
  inputbox_team.option("VisualAIze");
  inputbox_team.option("B2.2 Sustain");
  inputbox_team.option("Team 5");
  inputbox_team.option("Team 6");
  inputbox_team.option("Team 7");
  inputbox_team.option("Team 8");
  inputbox_team.option("Team 9");
  inputbox_team.option("Test");
  
  text("Who was involved:", 250, 300);
  //The person selector// they will change dependent on the team selected
 
  //Create labels for following checkboxes
  text("Activity title:", 425, 250);
  text("Date: (DD/MM)", 425, 275);
  text("Hours spent: (e.g.: 1.5)", 425, 300);
  text("Description:", 425, 325);

  text("Type of activity:", 425, 450);
  text("Emotion of Results:", 250, 500);
  text("Emotion of Process:", 250, 550);
  
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
  inputbox_hours.size(60, 10);
  inputbox_hours.position(580, 303);
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
 image(emoji1, 400, 470, 25, 25);
 image(emoji2, 429, 470, 25, 25);
 image(emoji3, 458, 470, 25, 25);
 image(emoji4, 487, 470, 25, 25);
 image(emoji5, 516, 470, 25, 25);
 image(emoji6, 400, 520, 25, 25);
 image(emoji7, 429, 520, 25, 25);
 image(emoji8, 458, 520, 25, 25);
 image(emoji9, 487, 520, 25, 25);
 image(emoji10, 516, 520, 25, 25);
 image(emoji11, 545, 520, 25, 25);
 image(emoji12, 574, 520, 25, 25);
 image(emoji13, 603, 520, 25, 25);
 image(emoji14, 632, 520, 25, 25);
 image(emoji15, 661, 520, 25, 25);
 image(emoji16, 690, 520, 25, 25);
 image(emoji17, 719, 520, 25, 25);

  radio_result = createRadio();
  radio_result.position(400, 510);
  radio_result.option('1');
  radio_result.option('2');
  radio_result.option('3');
  radio_result.option('4');
  radio_result.option('5');
  radio_result.style('width', '300px');
  
  inputbox_emoji6 = createCheckbox();
  inputbox_emoji6.position(400, 560);
  inputbox_emoji7 = createCheckbox();
  inputbox_emoji7.position(429, 560);
  inputbox_emoji8 = createCheckbox();
  inputbox_emoji8.position(458, 560);
  inputbox_emoji9 = createCheckbox();
  inputbox_emoji9.position(487, 560);
  inputbox_emoji10 = createCheckbox();
  inputbox_emoji10.position(516, 560);
  inputbox_emoji11 = createCheckbox();
  inputbox_emoji11.position(545, 560);
  inputbox_emoji12 = createCheckbox();
  inputbox_emoji12.position(574, 560);
  inputbox_emoji13 = createCheckbox();
  inputbox_emoji13.position(603, 560);
  inputbox_emoji14 = createCheckbox();
  inputbox_emoji14.position(632, 560);
  inputbox_emoji15 = createCheckbox();
  inputbox_emoji15.position(661, 560);
  inputbox_emoji16 = createCheckbox();
  inputbox_emoji16.position(690, 560);
  inputbox_emoji17 = createCheckbox();
  inputbox_emoji17.position(719, 560);



  //Submit button for oocsi events
  button = createButton("Submit");
  button.position(500, 600);
  button.mouseClicked(buttonEvent);
}

function draw() {
  inputbox_team.changed(mySelectEvent);

  if (OOCSIsend == true) {
    alertfunction();
    OOCSIsend = false;
  }
}
//
function mySelectEvent() {
  if (inputbox_team.value() == "M1.2 Arian") {
    p1 = "Arian";
    p2 = "";
    p3 = "";
    p4 = "";
    p5 = "Coach";
    p6 = "External";
  }
  if (inputbox_team.value() == "Bright Break") {
    p1 = "Euwe";
    p2 = "Sanne";
    p3 = "Freek";
    p4 = "";
    p5 = "Coach";
    p6 = "External";
  }
  if (inputbox_team.value() == "VisualAIze") {
    p1 = "Nikki";
    p2 = "Leqi";
    p3 = "Jelmer";
    p4 = "Maas";
    p5 = "Coach";
    p6 = "External";
  }
  if (inputbox_team.value() == "B2.2 Sustain") {
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
  if (inputbox_team.value() == "Test") {
    p1 = "x";
    p2 = "y";
    p3 = "z";
    p4 = "f";
    p5 = "Coach";
    p6 = "External";
  }

  person1 = createCheckbox(p1);
  person1.position(250, 325);
  person2 = createCheckbox(p2);
  person2.position(250, 350); 
  person3 = createCheckbox(p3);
  person3.position(250, 375);
  person4 = createCheckbox(p4);
  person4.position(250, 400);
  person5 = createCheckbox(p5);
  person5.position(250, 425);
  person6 = createCheckbox(p6);
  person6.position(250, 450);
}

function buttonEvent() {

  $.ajax({
    //to send data to the database
    url: "https://data.id.tue.nl/datasets/entity/8267/item/",
    headers: {
      api_token: "cW51Rk8zUnU5N2ZJUkFXTWFqM2c0RGliWW5XNUd2V0NHNjYrbk0yUGZxST0=",
      resource_id: "Activity",
      token: "token_for_identifier",
    },
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      //define what to send
      Team: inputbox_team.value(),
      Title: inputbox_title.value(),
      Date: inputbox_date.value(),
      Hours: inputbox_hours.value(),
      Description: inputbox_description.value(),
      Type: inputbox_type.value(),
      Person1: person1.checked(),
      Person2: person2.checked(),
      Person3: person3.checked(),
      Person4: person4.checked(),
      Person5: person5.checked(),
      Person6: person6.checked(),
      Emotion_result: radio_result.value(),
      emoji6: inputbox_emoji6.checked(),
      emoji7: inputbox_emoji7.checked(),
      emoji8: inputbox_emoji8.checked(),
      emoji9: inputbox_emoji9.checked(),
      emoji10: inputbox_emoji10.checked(),
      emoji11: inputbox_emoji11.checked(),
      emoji12: inputbox_emoji12.checked(),
      emoji13: inputbox_emoji13.checked(),
      emoji14: inputbox_emoji14.checked(),
      emoji15: inputbox_emoji15.checked(),
      emoji16: inputbox_emoji16.checked(),
      emoji17: inputbox_emoji17.checked(),
    }),
    success: function (data) {
      console.log(data); //to show whether sending to database went well
    },
    error: function (e) {
      console.log(e); //to show whether sending to database went wrong
    },
  });
  //resetting all boxes to make sure the activity card is ready to log new activity
 // inputbox_team.value("");
  inputbox_date.value("");
  inputbox_description.value("");
  inputbox_hours.value("");
  inputbox_title.value("");
  inputbox_type.value("");
  person1.checked(false);
  person2.checked(false);
  person3.checked(false);
  person4.checked(false);
  person5.checked(false);
  person6.checked(false);
  radio_process.value(false),
  inputbox_emoji6.checked(false),
   inputbox_emoji7.checked(false),
   inputbox_emoji8.checked(false),
   inputbox_emoji9.checked(false),
   inputbox_emoji10.checked(false),
   inputbox_emoji11.checked(false),
   inputbox_emoji12.checked(false),
   inputbox_emoji13.checked(false),
   inputbox_emoji14.checked(false),
   inputbox_emoji15.checked(false),
   inputbox_emoji16.checked(false),
   inputbox_emoji17.checked(false),
  OOCSIsend = true;
}

//Nice little prompt to show that it worked
function alertfunction() {
  alert("The data is sent to the database!");
}
