
var car,wall,speed,weight;
var thickness;

function setup() {
	createCanvas(1600, 400);




	//Create the Bodies Here.


	

	
	weight=random(30,52)
	 thickness=random(22,83)
	 speed=random(223,321)

	


	wall=createSprite(1200,200,thickness,height/2)
	wall.shapeColor=(80,80,80)
  
	bullet = createSprite(10,200,20,10)
	bullet.shapeColor="white";
	bullet.velocityX=speed
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  if(wall.x-bullet.x< (bullet.width+wall.width)/2){
	
	bullet.velocityX=0;
	var damage=0.5 * weight* speed*speed/(thickness*thickness*thickness);
	if(damage>10)
  
  {
	  wall.shapeColor=color(255,0,0);
  }

 
 if(damage<=10)
  {
	wall.shapeColor=color(0,255,0);
  }
}
}
