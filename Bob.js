class Bob{
    constructor(x,y){
        var opt={
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,40,opt);
        this.radius = 40;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rotate(this.body.angle);
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
};