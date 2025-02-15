let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// in p5.js, the function runs on page load:
function setup() {
  //sets up our canvas
  createCanvas(canvasWidth, canvasHeight);

  // invoke any drawing functions inside of setup.
  // functions should all go between "createCanvas()" and "drawGrid()"
  // draw5Circles();
  // draw5CirclesFor();
  // drawNCircles(10);

  // drawNCirclesFlexible(30, 25, 400, 0);
  // drawNCirclesFlexible(4, 100, 100, 200);
  // drawNCirclesFlexible(8, 50, 700, 100);

  // drawNShapesFlexible(30, 30, 335, 0, "square");
  // drawNShapesFlexible(4, 100, 120, 200, "circle");
  // drawNShapesFlexible(8, 50, 725, 25, "square");

  // drawNShapesDirectionFlexible(30, 30, 335, 0, "square", "column");
  // drawNShapesDirectionFlexible(4, 100, 120, 200, "circle", "row");
  // drawNShapesDirectionFlexible(8, 50, 725, 425, "circle", "row");

  createRandomArt();

  // draw5RedSquares();
  drawGrid(canvasWidth, canvasHeight);
}

// my first function
function draw5Circles() {
  noFill();
  // fill('red');
  let x = 100;
  let y = 200;
  let d = 50;
  let i = 0;

  while (i < 5) {
    circle(x, y + 50 * i, d);
    ++i;
  }

  // circle(100, 200, 50); // centerX, centerY, radius
  // circle(100, 250, 50);
  // circle(100, 300, 50);
  // circle(100, 350, 50);
  // circle(100, 400, 50);
}

function draw5CirclesFor() {
  noFill();
  // fill('red');
  let x = 200;
  let y = 200;
  let d = 50;
  let i = 0;

  for (let index = 0; index < 5; index++) {
    circle(x, y + 50 * i, d);
    ++i;
  }
}

function drawNCircles(n) {
  let x = 500;
  let y = 200;
  let d = 50;
  let i = 0;

  while (n != 0) {
    circle(x, y + 50 * i, d);
    --n;
    ++i;
  }
}

function drawNCirclesFlexible(n, size, x, y) {
  // let i = 0;
  for (let index = 0; index < n; index++) {
    circle(x, y + size * index, size);
  }
}

function drawNShapesFlexible(n, size, x, y, shape) {
  fill("pink");
  for (let index = 0; index < n; index++) {
    if (shape == "circle") circle(x, y + size * index, size);
    else if (shape == "square") {
      square(x, y + size * index, size);
    }
  }
}

function drawNShapesDirectionFlexible(n, size, x, y, shape, direction) {
  fill("pink");
  for (let index = 0; index < n; index++) {
    if (direction == "row") {
      if (shape == "circle") {
        circle(x + size * index, y, size);
      } else {
        square(x + size * index, y, size);
      }
    }

    if (direction == "column") {
      if (shape == "circle") {
        circle(x, y + size * index, size);
      } else {
        square(x, y + size * index, size);
      }
    }
  }
}

function createRandomArt() {
  for (let i = 0; i < 100; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let size = Math.random() * 100 + 10;
    let shape;
    let color = getRandomColor();

    if (Math.random() < 0.5) {
      shape = "circle";
    } else {
      shape = "square";
    }

    fill(color);

    if (shape == "circle") {
      circle(x, y, size);
    } else {
      square(x, y, size);
    }
  }
}

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return color(r, g, b);
}

function draw5RedSquares() {
  fill("red");
  square(320, 200, 50); // topLeftX, topLeftY, width
  square(320, 250, 50);
  square(320, 300, 50);
  square(320, 350, 50);
  square(320, 400, 50);
}
