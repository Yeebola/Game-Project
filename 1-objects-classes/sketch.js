//create a variable to hold one ball
let b;
let anotherBall;
let angle;
let e;
let changeX;
let changeY;
let weapont;
function setup() {
  createCanvas(800, 400);
  b = new Ball(0, 100,"red"); //make a new ball from the Ball class and call it b.
  anotherBall = new Ball(200,20,"green");
  e = new Ball(10, 300, "blue");
 weapont = new Weapon(200,400,"smg")
 	background(220);
}


function draw(){

    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherBall.drawBall();
    anotherBall.moveBall();
    e.drawBall();
    e.moveBall();
    if (keyIsPressed == true){
      // if(keyCode === "q"){
        weapont.equipWeapon();
      }

    // }

}


//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
	}
	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    ellipse(this.x,this.y,10,10);
	}
	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+4;
		this.y = this.y+.5;
	}
}

class Weapon{

constructor(x,y,type){
  this.x = x;
  this.y = y;
  this.type = type;
}
equipWeapon(){

if (this.type == "pistol"){
    push();
    translate(this.x,this.y);
    rotate(random(0,60))
    fill(0);
    rect(0,0,15,40);
    rect(15,40,40,50);
    pop();
}

if (this.type == "smg"){
    push();
    translate(this.x,this.y);
    rotate(random(0,60))
    fill(0);
    rect(0,0,15,40);
    rect(15,40,50,50);
    rect(35,40,43,20);
    pop();
}


}

}
