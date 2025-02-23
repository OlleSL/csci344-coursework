let canvasWidth = document.documentElement.clientWidth - 10;
let canvasHeight = document.documentElement.clientHeight - 10;

// in p5.js, the function runs on page load:
function setup() {
  rectMode(CENTER);
  createCanvas(canvasWidth, canvasHeight);
}

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return color(r, g, b);
}

// in p5.js, special event handler that listens for click events:
function mouseClicked() {
  // in p5.js, mouseX and mouseY are
  // built-in global variabls that track the
  // current position of your mouse.
  //   let randomColor = getRandomColor();
  fill(getRandomColor());
  circle(mouseX, mouseY, 100);
}

// in p5.js, special event handler that listens for drag events:
function mouseDragged() {
  fill(getRandomColor());
  square(mouseX, mouseY, 100);
  circle(mouseX, mouseY, 100);
}

/**
 * Challenges:
 * 1. As you click / drag, can the circles have different colors and sizes?
 *      * Try using the Math.random() function
 * 2. Can you make the click / drag sometimes make circles and sometimes make rectangles
 *      * Sample rectangle function invocation: rect(mouseX, mouseY, 100, 100);
 * 3. Can you make each click create a bulleye of different colors?
 *      * Hint: make sure you draw the bigger circles before you draw the smaller circles.
 */
