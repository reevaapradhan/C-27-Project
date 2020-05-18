class Roof{
    constructor(){
        var opt={
            isStatic: true
        }
        this.body = Bodies.rectangle(400,100,600,100,opt);
        this.width = 600;
        this.height = 20;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("grey")
        rect(pos.x,pos.y,this.width,this.height);
    }
}