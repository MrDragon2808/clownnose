noseX=0;
noseY=0;

function preload()
{
clown_nose=loadImage('https://postimg.cc/zyg0Rsbj');
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw()
{
image(video,0,0,300,300);
fill(255,0,0);
stroke(255,0,0);
circle(noseX,noseY,20);
image(clown_nose,noseX,noseY,30,30);
}
function take_snapshot()
{
save('my_filter_image.png');
}
function modelLoaded()
    {
    console.log('Posenet is intialized');
    }
function gotPoses(results)
{
if(results.lenght>0)
{
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log(results);
    console.log("nose x = "+noseX);
    console.log("nose y = "+noseY);
}
}