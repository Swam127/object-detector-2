img = "";
status = "";

function preload()
{
    img = loadImage('bedroom.jpg');
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
    text("Wardrobe", 80, 45);
    noFill();
    stroke("#FF0000");
    rect(60, 10, 200, 350);

    fill("#FF0000");
    text("Bed", 170, 280);
    noFill();
    stroke("#FF0000");
    rect(140, 250, 360, 160);
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