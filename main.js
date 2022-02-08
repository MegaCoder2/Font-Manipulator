var customtext = "Hello!"
var nosex = 0
var nosey = 0
var RW = 0
var LW = 0
var difference = 0
function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 550);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", getPoses)
}
function modelLoaded()
{
    console.log("Loaded PoseNet successfully.")
}
function draw()
{
    background("orange")
    fill("blue")
    stroke("blue")
    textSize(difference)
    text(customtext, nosex, nosey)
}
function getPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        nosex = results[0].pose.nose.x
        nosey = results[0].pose.nose.y
        RW = results[0].pose.rightWrist.x
        LW = results[0].pose.leftWrist.x
        difference = LW - RW
        document.getElementById("size").innerHTML = "Width And Height Of The Text Is " + Math.round(difference) + "px"
    }
}
function change()
{
    customtext = document.getElementById("custominput").value
}