const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  drawGrid(canvasWidth, canvasHeight);

  // Function calls (Elmo drawings)
  drawElmo(100, 100, 150, "#0bc9cd", true); // nose drawn
  drawElmo(300, 200, 75, "#0bc9cd", false); // no nose drawn
  drawElmo(100, 325, 100, "#8093f1", false); // no nose drawn
  drawElmo(250, 375, 125, "#7fb285", true); // nose drawn
  drawElmo(550, 200, 250, "#102e4a", true); // nose drawn
}

// Function to draw Elmo
function drawElmo(x, y, size, color, hasNose) {
  // Face
  fill(color);
  noStroke();
  ellipse(x, y, size, size);

  // Eyes (moved closer together)
  fill("white");
  ellipse(x - size * 0.15, y - size * 0.2, size * 0.22, size * 0.22); // Left eye
  ellipse(x + size * 0.15, y - size * 0.2, size * 0.22, size * 0.22); // Right eye

  // Pupils (centered better inside eyes)
  fill("black");
  ellipse(x - size * 0.15, y - size * 0.2, size * 0.09, size * 0.09); // Left pupil
  ellipse(x + size * 0.15, y - size * 0.2, size * 0.09, size * 0.09); // Right pupil

  // Nose (adjusted size & position to be vertical)
  if (hasNose) {
    fill("#db5461");
    ellipse(x, y - size * 0.05, size * 0.18, size * 0.25);
  }
}
