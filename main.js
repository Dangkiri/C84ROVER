canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverwidth=100;
roverheight=90;
background_image="mars.jpg";
rover_image="rover.png";
roverx=10;
rovery=10;
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canva.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgTag,roverx,rovery,roverwidth,roverheight);
}