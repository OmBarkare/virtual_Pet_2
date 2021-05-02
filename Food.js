class Food{
  constructor(){
    this.image = loadImage("images/Milk.png")
  }

  getFoodStock(){
     foodStockRef = database.ref("Food");
     foodStockRef.on("value",function(data){foodStock = data.val();})
  }

  feed(count){
    if(count <= 0){
      count = 0
    }

    if(count > 0){
      count -= 1
      dogMood = "happy";
      foodState = "eating";
    }  
    database.ref("/").update({
      Food: count
    });
  }

  addFood(count){
    if(count < 20){
      count = count + 1;
      database.ref("/").update({Food:count});
    }
  }

  display(){
    var x = 80, y = 300;

    imageMode(CENTER);
//    image(this.image,720,220,70,70);

    if(this.foodStock != 0){
      for(var i = 0; i < foodStock; i++){
        if(i%10===0){
          x = 80;
          y = y + 50;
        }
        image(this.image,x,y,50,50);
        x = x + 30;
      }
    }
  }

  makeDogHungry(){
    if(foodState === "eating"){
      food.visible = true;
      if(frameCount%100 === 0){
        foodState = "finished";
        food.visible = false;
      }
    }
    var n = Math.round(random(1,10));
    if(frameCount%30 === 0 && foodState === "finished"){
      switch(n){
        case 1: dogMood = "happy"
          break;
        case 2: dogMood = "hungry"
        break;
        case 3: dogMood = "happy"
          break;
        case 4: dogMood = "happy"
          break;
        case 5: dogMood = "hungry"
          break;
        case 6: dogMood = "happy"
        break;
        case 7: dogMood = "happy"
          break;
        case 8: dogMood = "happy"
          break;
        case 9: dogMood = "hungry"
          break;
        case 10: dogMood = "happy"
          break;
          default:break;
      }
    }  
  }

}