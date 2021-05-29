img = "";
status = "";

function preload()
{
    img = loadImage('balcony.jpg');
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
    text("Chair", 80, 145);
    noFill();
    stroke("#FF0000");
    rect(60, 130, 200, 240);

    fill("#FF0000");
    text("Chair", 350, 160);
    noFill();
    stroke("#FF0000");
    rect(330, 130, 240, 280);

    fill("#FF0000");
    text("Table", 270, 160);
    noFill();
    stroke("#FF0000");
    rect(180, 140, 200, 270);
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