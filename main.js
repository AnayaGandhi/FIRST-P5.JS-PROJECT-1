function preload(){
}

function setup() {
    canvas = createCanvas(1000, 700);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 300, 100, 400, 350);
    tint(tint_color);
    stroke(255,0,0)
    fill(255,0,0)
    circle(200,50,60)
    circle(800,50,60)
    circle(200,530,60)
    circle(800,530,60)
    fill(0, 255, 0)
    rect(226, 40, 550, 20)
    rect(190, 80, 20, 420)
    rect(226, 520, 550, 20)
    rect(790, 80, 20, 420)
    
}


function take_snapshot() {
    save('party_photo.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}