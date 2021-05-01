class Food{
  constructor(){}

  getFoodStock(){
     foodStockRef = database.ref("Food");
     foodStockRef.on("value",function(data){foodStock = data.val();})
  }

  update(count){
    if(count <= 0)
      count = 0

    if(count > 0)
      count -= 1  

    database.ref("/").update({
      Food: count
    });
  }

  display(){
    for(var i = 0; i <= foodStock; i = i + 1){
      var x1 = 100;
      milkBottle = createSprite(100,275,50,50);
      milkBottle.addImage(foodImg);
      milkBottle.scale = 0.1
      milkBottles.push(milkBottle);
      x1 = x1 + 20;
    }
/*    if(foodStock > 10){
      for(i = 0; i <= foodStock-10; i = i + 1){
        var x1 = 100;
        milkBottles[i] = createSprite(100,275,50,50);
        milkBottles[i].addImage(foodImg);
        x1 = x1 + 20;
     }
    }*/
  }
}