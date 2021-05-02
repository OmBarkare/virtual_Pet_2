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
            getTime();
            if(dogMood === "hungry"){
                foodObject.feed(foodStock);
                dogMood = "happy";
                dog.addImage(happyDogImg);
//                console.log("pressed");
                database.ref("/").update({LastFed: time})
            } 
            if(dogMood === "happy"){
                text("I am not hungry",360,280);
                foodObject.makeDogHungry();
            }
          });

          this.addFood.mousePressed(()=>{
            foodObject.addFood(foodStock);
            dogMood = "hungry";
            dog.addImage(dogImg);
            console.log("pressed");
          });

          lastFedRef.on("value",function(data){lastFedHour = data.val()});
          textSize(15);

          fill("lightblue");
          text("last fed "+lastFedHour+":"+minute,100,150);
//          text("(time is displayed in 24 hour format)",200,150);

          if(this.name != null){
              dogName = this.name.value();
              text(dogName,580,225);
          }
    }
}