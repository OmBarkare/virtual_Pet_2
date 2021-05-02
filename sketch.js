var database = firebase.database();
var foodStock;
var food, foodStockRef, foodObject;
var test, testRef;
var foodCount;
var dogMood;
var formObject;
var time, lastFedHour, lastFedRef, lastFedMin, foodImg;
var milkBottles = [], milkBottle;
var dogName;

function preload(){
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
  foodImg = loadImage("images/Milk.png");
}

function setup() {
	createCanvas(800, 700);
  foodObject = new Food();
  dog = createSprite(600,350,50,50);
  dogMood = "hungry";
  formObject = new Form();
// testFunction();
}


function draw() {  
  background(0);

  foodObject.getFoodStock();
  foodObject.display();

  textSize(15)
  fill("lightblue");
  text("food: "+foodStock, 100, 175);
  if(dogMood === "hungry"){
    dog.addImage(dogImg);
  }
  dog.scale = 0.3;
  textSize(20)

  formObject.display();
  drawSprites();
  text("X:"+mouseX+"Y:"+mouseY,mouseX,mouseY);
}

async function getTime(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  time = datetime.slice(11,16);
//  minute = datetime.slice(14,16);
}