let yesButton;
let noButton;
let screen = 0;

function setup() {
  createCanvas(400, 400);
  textAlign("center");
  textSize(30);
  noStroke();
  fill("white");

  background("black");

  createAllButtons();

  text("Click anywhere to continue", width / 2, height / 2);
}

function draw() {
  if (screen == 0 && mouse.released()) {
    showScreen1();
    screen = 1;
  }
  if (screen == 1) {
    if (yesButton.mouse.released()) {
      showScreen2a();
    } else if (noButton.mouse.released()) {
      showScreen2b();
    }
  }
}

function showScreen1() {
  background("black")
  text("You are in Astronomy class with Mr Hayes, who is very chill. You have AP Calculus BC homework. Do you do your homework while Mr Hayes is lecturing?", 10, 30, 380, 300);
  yesButton.pos = { x: width / 2 - 60, y: height * .75 };
  yesButton.text = "Yes";
  noButton.pos = { x: width / 2 + 60, y: height * .75 };
  noButton.text = "No";
}

function showScreen2a() {
  background("black");
  text("You and your friend decide to secretly do the calculus homework. You check your answers with eachother. They are not the same. You redo your math and check again. Now your answers are the same.", 10, 30, 380, 320);
  yesButton.pos = { x: -400, y: -400 };
  noButton.pos = { x: -400, y: -400 };
}

function showScreen2b() {
  background("black");
  text("You don't do you calculus homework, and instead pay attention to the Astronomy lecture. Unfortunately, this means you will have homework when you get home.", 10, 30, 380, 320);
  yesButton.pos = { x: -400, y: -400 };
  noButton.pos = { x: -400, y: -400 };
}

function createAllButtons() {
  yesButton = new Sprite(-400, -400, 60, 30);
  noButton = new Sprite(-400, -400, 60, 30);
  yesButton.rotationlock = true;
  noButton.rotationlock = true;
  yesButton.textColor = "black";
  noButton.textColor = "black";
  yesButton.color = "white";
  noButton.color = "white";
  yesButton.collider = "k";
  noButton.collider = "k";
}