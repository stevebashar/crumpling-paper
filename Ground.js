class Ground{
    constructor(x,y,width,hight){
        var options ={
            isStatic : true
        }
        this.body = Bodies.rectangle(605,380,10,35);

    World.add(world, this.body);
    }
display(){
  var pos = this.body.position;
 
  rectMode(CENTER);
  fill(255);
  rect(300, 665, 800, 10);
  }
}