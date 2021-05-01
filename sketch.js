var database = firebase.database();
var foodStock;
var food, foodStockRef, foodClass;
var test, testRef;
var foodCount;
var dogMood;

function preload(){
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  foodObject = new Food();
  dog = createSprite(500,350,50,50);
  dogMood = "hungry";
// testFunction();
}


function draw() {  
  background(0);

  foodObject.getFoodStock();
  textSize(15)
  text("food: "+foodStock, 200, 200);

  if(dogMood === "hungry"){
    dog.addImage(dogImg);
  }

  dog.scale = 0.3;

  textSize(20)
  text("press space to feed the dog",300,100);

  drawSprites();
}

function keyPressed(){
  if(keyCode===32){
    foodObject.update(foodStock);
    dogMood = "happy";
    dog.addImage(happyDogImg);
  }  
}
