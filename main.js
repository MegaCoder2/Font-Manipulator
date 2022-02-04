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
}
function getPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
    }
}