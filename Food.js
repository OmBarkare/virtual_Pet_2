class Food{
  constructor(){
    this.image = loadImage("images/Milk.png")
  }

  getFoodStock(){
     foodStockRef = database.ref("Food");
     foodStockRef.on("value",function(data){foodStock = data.val();})
  }

  feed(count){
    if(count <= 0)
      count = 0

    if(count > 0)
      count -= 1  

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
/*    for(var i = 0; i <= foodStock; i = i + 1){
        var x1 = 100;
        milkBottle = createSprite(100,275,50,50);
        milkBottle.addImage(foodImg);
        milkBottle.scale = 0.1
        milkBottles.push(milkBottle);
      x1 = x1 + 20;
    }
      if(foodStock > 10){
        for(i = 0; i <= foodStock-10; i = i + 1){
          var x1 = 100;
          milkBottles[i] = createSprite(100,275,50,50);
          milkBottles[i].addImage(foodImg);
          x1 = x1 + 20;
     }
    }*/
  }

  makeDogHungry(){
    if(frameRate()%60 === 0){
      var n = Math.round(random(1,3));
      switch(n){
        case 1: dogMood = "happy"
          break;
        case 2: dogMood = "hungry"
          break;
        case 3: dogMood = "happy"
          break;
          default:break;
      }
    }
  }

}