function preload(){
border="";
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.position(450,300);
img=createCapture(VIDEO);
img.hide();
}

function draw(){
    image(img,50,90,500,350);
    
    fill(255,1,4);
    stroke(255,1,4);
    circle(50,70,50);

    fill(255,1,4);
    stroke(255,1,4);
    circle(550,70,50);

    fill(0,255,0);
    stroke(0,255,0);
    rect(50, 70, 480, 20);

    fill(255,1,4);
    stroke(255,1,4);
    circle(550,450,50);

    fill(0,255,0);
    stroke(0,255,0);
    rect(540, 80, 20, 360);

    fill(255,1,4);
    stroke(255,1,4);
    circle(50,450,50);

    
    fill(0,255,0);
    stroke(0,255,0);
    rect(60, 445, 480, 20);

    fill(0,255,0);
    stroke(0,255,0);
    rect(50, 90, 20, 360);
}

function take_snapshot(){
    save("myimage.jpg");
}