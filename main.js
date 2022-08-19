status="";

function preload(){

}

function setup(){
    canvas=createCanvas(350,300);
    video=createCapture(VIDEO);
    canvas.center();
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded(){
    console.log("model has loaded");
    status=true;
}

function draw(){
    image(video,0,0,350,300);
}