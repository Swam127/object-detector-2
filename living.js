img = "";
status = "";

function preload()
{
    img = loadImage('living.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("TV", 160, 27);
    noFill();
    stroke("#FF0000");
    rect(140, 8, 230, 130);

    fill("#FF0000");
    text("Table", 280, 220);
    noFill();
    stroke("#FF0000");
    rect(230, 190, 404, 228);
}

function modelLoaded()
{
    console.log("Model Loaded !");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error) {
          console.error(error)
    } 
        console.log(results);
}

function back()
{
    window.location = "index.html";
}