function preload(){

}
function draw(){
image(video, 0, 0, 325, 325);
}
function setup(){
canvas=createCanvas(325,325);
canvas.center();
video=createCapture(VIDEO);
video.size(325,325);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on("pose",gotposes);
}
function take_snapshot(){
    save('clown_nose_selfie.png');
}
function modelLoaded(){
    console.log('poseNet has been initialized');
}
function gotposes(results){
if(results.length > 0){
    console.log(results);
    console.log('noseX = '+results[0].pose.nose.x);
    console.log('noseY ='+results[0].pose.nose.y);
}
}
