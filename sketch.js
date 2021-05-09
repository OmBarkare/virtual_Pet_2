var database = firebase.database();
var foodStock;
var food, foodStockRef, foodObject;
var test, testRef;
var foodCount;
var dogMood;
var formObject;
var time, lastFedHour, lastFedHourRef, lastFedMinRef, lastFedMin, foodImg;
var milkBottles = [], milkBottle;
var dogName;
var foodState;
var food;

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
  foodState = "finished";
  formObject = new Form();
  food = createSprite(525,440);
  food.addImage("bottle",foodImg);
  food.scale = 0.11
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
//  textSize(20)

  formObject.display();
  drawSprites();
  text("X:"+mouseX+"Y:"+mouseY,mouseX,mouseY);
  text("give the pet a name before you play!!",275,75);
}