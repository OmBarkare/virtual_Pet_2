class Form{
    constructor(){}
    
    static display(){
        var title = createElement("h2");
        title.html("Virtual Pet");
        title.position(350,10);

        var name = createInput("Name");
        name.position(100,200);
    }
}