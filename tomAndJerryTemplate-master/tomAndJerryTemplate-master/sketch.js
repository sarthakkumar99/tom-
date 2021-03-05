var canvas, bg
var together 
var tom1, tom2, tom3, tom4, jerry1, jerry2, jerry3, jerry4
function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
    tom1=loadAnimation("images/cat1.png")
tom2=loadAnimation("images/cat2.png","images/cat3.png")
tom3=loadAnimation("images/cat4.png")
jerry1=loadAnimation("images/mouse1.png")
jerry2=loadAnimation("images/mouse2.png","images/mouse3.png")
jerry3=loadAnimation("images/mouse4.png")

}

function setup(){
    canvas=createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(870,600);
tom.addAnimation("tomsleeping",tom1)
tom.scale=0.2
jerry=createSprite("jerrystanding",jerry1)
jerry.scale=0.15
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom4.x-jerry4.x<(tom4.width-jerry4.width)/2){
    tom4.velocityX=0
    tom4.addAnimation("tomlastimage",tom3)
tom4.x=300
tom4.scale=0.2
tom4.changeAnimation("tomlastimage")
jerry4.addAnimation("jerrylastimage",jerry3)
jerry4.scale=0.15
jerry4.changeAnimation("jerrylastimage");
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom4.velocityX=-5
    tom4.addAnimation("tomrunning",tom2)
tom4.changeAnimation("tomrunning")
jerry4.addAnimation("jerryteasing",jerry2)
jerry4.frameDelay=25
jerry4.changeAnimation("jerryteasing")
}

}
