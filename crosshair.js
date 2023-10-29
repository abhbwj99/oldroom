let font;
let points;
let bounds;
let canvas;
let noiseOffset = 0.0;
let noiseStrength = 20;

function preload() {
  font = loadFont('./assets/Vercetti-Regular.woff');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  points = font.textToPoints(
    'secret', 0, 0, 200, {
      sampleFactor: 1,
      simplifyThreshold: 0
    });

  bounds = font.textBounds(
    'secret', 0, 0, 200);

  cursor(CROSS);
  fill(255, 127);
  noStroke();
}

function draw() {
  background(0);

  stroke(51);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  noStroke();

  let centerDist = dist(mouseX, mouseY, width / 2, height / 2);

  let transparency = map(centerDist, 0, width / 2, 200, 50);
  transparency = constrain(transparency, 50, 200);
  fill(255, transparency);

  let jiggle = map(centerDist, 0, width, 1, 300);

  translate((width - abs(bounds.w)) / 2,
    (height + abs(bounds.h)) / 2);

  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    let distortionX = map(noise(noiseOffset), 0, 1, -jiggle, jiggle);
    let distortionY = map(noise(noiseOffset + 1000), 0, 1, -jiggle, jiggle);
    ellipse(p.x + distortionX, p.y + distortionY, 5, 5);

    noiseOffset += 0.1; // Adjust the noise offset to control the distortion speed
  }
}