class Plinko{
    constructor(x,y,r){
        var options = {
            isStatic: true,
            restitution:0,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body);
        
    }
    display(){
        var p=this.body.position
    
        rectMode(CENTER)
         strokeWeight(3)
         fill(255,0,255)
         ellipse(p.x,p.y,10,10);
         
       


        
      }
    }