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

console.log(count);

    database.ref("/").update({
      Food: count
    });
  }
}