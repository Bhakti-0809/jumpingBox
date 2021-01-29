var canvas;
var music;
var s1,s2,s3,s4;
var ball;
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
s1 = createSprite(100,590,200,10)
s1.shapeColor="red"
s2 = createSprite(300,590,200,10)
s2.shapeColor="yellow"
s3 = createSprite(500,590,200,10)
s3.shapeColor="blue"
s4 = createSprite(700,590,200,10)
s4.shapeColor="green"

    //create box sprite and give velocity
ball=createSprite(random(100,500),100,16,16)
ball.shapeColor = "white"
ball.velocityX=4;
ball.velocityY=4;

}

function draw() {
    background(0);
    //create edgeSprite
edges= createEdgeSprites();

ball.bounceOff(edges);



    //add condition to check if box touching surface and make it box
if(ball.isTouching(s1)){
    ball.shapeColor="red"
    console.log("red")
}
if(ball.isTouching(s2)){
    ball.shapeColor="yellow"
}
if(ball.isTouching(s3)){
    ball.shapeColor="blue"
}
if(ball.isTouching(s4)){
    ball.shapeColor="green"
    console.log("green")
}
ball.bounceOff(s1);
ball.bounceOff(s2);
ball.bounceOff(s3);
ball.bounceOff(s4);
    drawSprites();
}
