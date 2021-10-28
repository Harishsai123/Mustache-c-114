function preload() {

}

function setup() {
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color= "";
}

function draw() {
image(video,250,200,200,150);
tint(tint_color);
circle(50,50,100,100);
rect(25,100,50,300);
circle(590,50,100,100);
rect(565,100,50,300);
rect(100,25,440,50);
circle(50,445,90,100);
rect(95,420,440,50);
circle(585,450,100,100);
}

function slap_paint() {
tint_coor = document.getElementById("input").value;

}

function take_snapshot() {
save("download.png");
}