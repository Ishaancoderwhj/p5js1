function preload(){
}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(150,250);
    video=createCapture(VIDEO);
    video.hide()
}

function draw(){
    image(video,250,150,200,200);

    fill("#0ddb22");
    stroke("#0ddb22");
    circle(50,50,60);
    circle(580,50,60);
    circle(50,420,60);
    circle(580,420,60);

    fill("#bd290b");
    stroke("#bd290b");
    rect(80,40,470,20);
    rect(80,410,470,20);
    rect(40,80,20,310);
    rect(570,80,20,310);

}

function take_snapshot(){
    save("mouse.png");
}
