var btn_red;
var btn_green;
var btn_blue;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);

  btn_red = createButton("Red");
  btn_red.position(100,200);
  btn_red.mousePressed(red);

  btn_blue = createButton("Blue");
  btn_blue.position(50,200);
  btn_blue.mousePressed(blue);

  btn_green = createButton("Green");
  btn_green.position(150,200);
  btn_green.mousePressed(green);


}

function draw() {
  background(r,g,b);
}

function red() {

background(Red);
};
function blue() {

background(Blue);
};
function green() {

background(Green);
};
