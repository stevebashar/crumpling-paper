class Paper{
    constructor(){
        var options={
            isStatic:false, 
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        Matter.Bodies.circle(10,10,20,options);
    }
    display(){
        
       
        ellipseMode(CENTER);
        fill(0,0,255);
        ellipse(300, 655, 20, 20);
        }
}
