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
            foodObject.update(foodStock);
            dogMood = "happy";
            dog.addImage(happyDogImg);
            console.log("pressed");
            database.ref("/").update({LastFed: hour})
          });
          lastFedRef.on("value",function(data){lastFedHour = data.val()});
          textSize(15);

          fill("lightblue");
          text("last fed "+lastFedHour,100,150);
          text("(time is displayed in 24 hour format)",175,150);

    }
}