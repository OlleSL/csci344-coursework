const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  // function invocations goes here:
  rectMode(CENTER);
  //   ellipseMode(CENTER);
  drawGrid(canvasWidth, canvasHeight);

  drawMonster(100, 100, 150, "#0bc9cd", false);
  drawMonster(300, 200, 75, "#8093f1", true);
  drawMonster(100, 325, 100, "#8093f1", false);
  drawMonster(250, 375, 125, "#7fb285", true);
  drawMonster(550, 200, 250, "#7fb285", false);
}

function drawMonster(x, y, size, color, isSurprised) {
  fill(color);

  // Face:
  rect(x, y, size, size);

  // Eyes (white part - both rectangles)
  fill("white");
  rect(x - size / 4, y - size / 4, size / 5, size / 5); // Left eye
  rect(x + size / 4, y - size / 4, size / 5, size / 5); // Right eye

  // Pupils (black part - smaller rectangles)
  fill("black");
  rect(x - size / 4, y - size / 5, size / 10, size / 10); // Left pupil
  rect(x + size / 4, y - size / 5, size / 10, size / 10); // Right pupil

  // Mouth
  fill("black");
  if (isSurprised) {
    rect(x, y + size / 4, size / 6, size / 6); // Surprised mouth
  } else {
    rect(x, y + size / 4, size / 3, size / 8); // Normal mouth
  }
}

// function definition goes here:
