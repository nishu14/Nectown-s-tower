class SlingShot{
    constructor(body1, body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY},
            //stiffness: 0.04,
            //length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            strokeWeight(2);
             
            var Anchor1Y=pointA.y;
            var Anchor2Y=pointB.y+this.offsetY;

            var Anchor1X=pointA.x;
            var Anchor2X=pointB.x+this.offsetX;

            line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
        }
    }