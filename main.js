




noseX=0;
noseY=0;

function preload(){
   mustache=loadImage("https://i.postimg.cc/RVDYYH19/cartoon-mustache.png");

}

function setup(){
create=createCanvas(300,300);
create.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

posenet=ml5.poseNet(video,modeLoaded);
posenet.on("pose",gotposes);
}
function gotposes(results){
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-10;
        noseY=results[0].pose.nose.y-10;
        console.log("nose x="+noseX);
        console.log("nose y="+noseY);
    }
}

function modeLoaded(){
    console.log("Pose Net is initialized");
}

function draw(){
image(video,0,0,300,300);
image(mustache,noseX,noseY,30,30);
}

function take_snapshot(){
    save("image.png");
}