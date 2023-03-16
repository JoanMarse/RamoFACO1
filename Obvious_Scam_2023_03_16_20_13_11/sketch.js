function setup() {
  createCanvas(windowWidth, windowHeight).position(0,0).style("z-index",-1);
  createA("https://github.com/JoanMarse","Get your lots of Moneis here","_blank").id("money");
  frameRate(15);
  textSize(50);
}

function draw() {
  background(random(0, 255), random(0, 255), random(0, 255));
  text("🎇YOU ARE WINNER OF THE INTERNETS🎇", mouseX, mouseY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
