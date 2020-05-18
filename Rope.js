class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            length : 400,
            pointA:{x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);

    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(4);

        var anchor1X = pointA.x + this.offsetX;
        var anchor1Y = pointA.y + this.offsetY;

        var anchor2X = pointB.x ;
        var anchor2Y = pointB.y ;

        line(anchor1X, anchor1Y, anchor2X, anchor2Y );
    }
}