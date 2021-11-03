var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var divisions=[];
var particles = [];
var plinkos = [];
var turn = 0;
var line;

var divisionHeight=300;
var gameState = "PLAY";
var score = 0;
var count = 0;
var particle1;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  text("100", 425, 550);
  text("100", 505, 550);
  text("100", 585, 550);
  text("200", 345, 550);
  text("200", 265, 550);
  text("200", 185, 550);
  text("500", 105, 550);
  text("500", 25, 550);
  text("100", 665, 550);
  text("100", 745, 550);
  text("click to release ball",150,20)
  Engine.update(engine);
 

  ground.display();
  if (gameState == "END") {
    background("black");
    fill("red");
    textSize(100);
    text("GAME OVER", 200, 400);
  }

  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  /* if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   }*/

  if (particle1 != null) {
    particle1.display();
    if (particle1.body.position.y>700) {
      if (particle1.body.position.x < 300) {
        score = score + 500;
        particle1 = null;
        if (turn >= 5) {
          gameState = "END";
          
        }
    
       
      }
      else if (particle1.body.position.x<600&&particle1.body.position.x>301) {
        score = score + 100;
        particle1 = null;
        if (turn >= 5) {
          gameState = "END";
        }
        
      }
         else if (particle1.body.position.x<900&&particle1.body.position.x>601) {
        score = score + 200;
        particle1 = null;
        if (turn >= 5) {
          gameState = "END";
        }
        
      }
    }



  }

  
  /*for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  
}

function mousePressed() {
  if (gameState == "PLAY") {
    turn++
    particle1=new Particle(mouseX,50,10,10)
  }
}