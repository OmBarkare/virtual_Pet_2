class Form{
    constructor(){
        this.name = createInput("").attribute("placeholder","Pet's Name");
        this.feed = createButton("Feed");
        this.addFood = createButton("addFood");
    }
    
    display(){
        this.name.position(100,200);
        this.feed.position(375,100);
        this.addFood.position(425,100);

        lastFedRef = database.ref("LastFed");
        this.feed.mousePressed(()=>{
            lastFedMin = minute();
            if(dogMood === "hungry"){
                foodObject.feed(foodStock);
//                console.log("pressed");
                database.ref("/").update({LastFed: hour()});
            } 
            if(dogMood === "happy"){
                dog.addImage(happyDogImg);
            }
          });

          this.addFood.mousePressed(()=>{
            foodObject.addFood(foodStock);
            dogMood = "hungry";
            dog.addImage(dogImg);
            console.log("pressed");
          });

          if(dogMood === "happy"){
              dog.addImage(happyDogImg);
              foodObject.makeDogHungry();
              text(this.name.value()+" is not hungry",570,215);
            } else {
              dog.addImage(dogImg);
              text(this.name.value()+" is hungry",570,215);
          }

          lastFedRef.on("value",function(data){lastFedHour = data.val()});
          textSize(15);

          fill("lightblue");
          text("last fed "+lastFedHour+":"+lastFedMin,100,150);
//          text("(time is displayed in 24 hour format)",200,150);

          if(this.name != null){
//              dogName = this.name.value();
//              text(dogName,580,225);
          }
    }
}