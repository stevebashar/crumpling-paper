class Dustbin{
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
  fill(255,0,0);
  rect(600, 655, 150, 10);
  rect(525, 645, 10, 35);
  rect(675, 645, 10, 35);
}
};
