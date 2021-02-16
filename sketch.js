
var bullet, wall;

var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 10);

  bullet.velocityX = speed;

  bullet.shapecolor = color(215);

  wall = createSprite(1500,200,thickness,height/2)    
  wall.shapecolor = color(80,80,80);
  
}

function draw() {
  background(0);  
  
  if(wall.x-bullet.x < ( bullet.width+wall.width)/2)

  {
 
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    
    if(deformation>180)
    {
      bullet.shapecolor = color(225,0,0);
    }

     if(deformation<180 && deformation>100 )
      {
        bullet.shapecolor = color(0,230,0);
      }

      if(deformation<100)
      {
        bullet.shapecolor = color(0,225,0);
      }
  }
  drawSprites();
}