let angleX = 0;
let angleY = 0;
let sphereColor;

function setup() {
  createCanvas(800, 800, WEBGL);
  sphereColor = color(85, 255, 26); // Change the color of the sphere here (R, G, B)
}

function draw() {
  background(250);
  rotateX(angleX);
  rotateY(angleY);

  ambientLight(200); // Soft, uniform light
  directionalLight(255, 255, 255, 0, 1, -1); // Bright light from a specific direction
  fill(sphereColor);

  sphere(200); // Change the size of the sphere here (radius)

  angleX += 0.002; // Change the rotation speed around the X-axis here
  angleY += 0.009; // Change the rotation speed around the Y-axis here
}