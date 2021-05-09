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

        lastFedHourRef = database.ref("LastFed/Hour");
        lastFedMinRef = database.ref("LastFed/Minute");
        this.feed.mousePressed(()=>{
            if(dogMood === "hungry"){
                foodObject.feed(foodStock);
//                console.log("pressed");
                database.ref("LastFed").update({Hour: hour()});
                database.ref("LastFed").update({Minute: minute()});
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

          lastFedHourRef.on("value",function(data){lastFedHour = data.val()});
          lastFedMinRef.on("value",function(data){lastFedMin = data.val()});
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