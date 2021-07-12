var canvas;
var music,object1,object2,object3,object4;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    object1=createSprite(400,300,80,10);
    object1.shapeColor="red";

    object2=createSprite(400,200,80,10);
    object2.shapeColor="blue";

    object3=createSprite(400,150,80,10);
    object3.shapeColor="green";

    object4=createSprite(400,100,80,10);
    object4.shapeColor="orange";


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite


   drawSprites();

    //add condition to check if box touching surface and make it box
}
