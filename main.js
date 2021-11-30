noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
difference = 0; 



function setup(){
canvas = createCanvas(600,500);
canvas.position(800,150);
video = createCapture(VIDEO);
video.size(500,500);
video.position(140,150);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)
}


function modelLoaded(){
    console.log(" PoseNet Has Been Initialized ");
}

function draw(){
background("#4DED30");
fill('#2E8B57');
stroke('#2E8B57');
square(noseX, noseY, difference);
document.getElementById("square_coordinates").innerHTML = "Square's Width And Height Is : " + difference + "PX"; 
}


function gotPoses(results){
  if(results.length > 0){
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log(" Nose X = "+ noseX + " Nose Y = " + noseY);
      rightWristX = results[0].pose.rightWrist.x;
      leftWristX = results[0].pose.leftWrist.x;
      console.log(" Left Wrist X = " + leftWristX + " Right Wrist X = " + rightWristX);
      difference = floor(leftWristX - rightWristX);
      console.log(" Difference Is = " + difference);
  }
}