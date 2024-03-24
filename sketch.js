// Global configuration
let cellSize = 30;
let marginWid = 2;
// Array of predefined colors
let colors = ["#f04a4a", "#00ffae", "#513bbf", "#ffd675", "#c87ee6", "#211e29"];

function setup() {
  // Create a canvas to fill the window
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Set the background to a dark color
  background("#211e29");
  stroke("#211e29");
  // Iterate over the grid based on the cell size and margin
  for (let i = cellSize * marginWid; i < width - cellSize * marginWid; i += cellSize) {
    for (let j = cellSize * marginWid; j < height - cellSize * marginWid; j += cellSize) {
      // Draw different components of the pattern
      drawCorners(i, j, cellSize);
      drawAdjacentSquares(i, j, cellSize);
      drawOuterSquares(i, j, cellSize);
      drawCenterAdjacentSquares(i, j, cellSize);
      drawCenterSquares(i, j, cellSize);
    }
  }
  // Stop the draw loop
  noLoop();
}

// Function to reactivate drawing when the mouse is pressed
function mousePressed() {
  loop();
}

// Draw the four corner squares
function drawCorners(x, y, size) {
  push(); // Save drawing state
  let innerSize = size / 6;
  fill(colors[floor(random(colors.length))]);
  translate(x, y);
  square(0, 0, innerSize);
  square(size - innerSize, 0, innerSize);
  square(0, size - innerSize, innerSize);
  square(size - innerSize, size - innerSize, innerSize);
  pop(); // Restore drawing state
}

// Draw eight squares adjacent to the corners
function drawAdjacentSquares(x, y, size) {
  push(); // Save drawing state
  let innerSize = size / 6;
  fill(colors[floor(random(colors.length))]);
  translate(x, y);
  square(innerSize, 0, innerSize);
  square(0, innerSize, innerSize);
  square(size - innerSize * 2, 0, innerSize);
  square(size - innerSize, innerSize, innerSize);
  square(0, size - innerSize * 2, innerSize);
  square(innerSize, size - innerSize, innerSize);
  square(size - innerSize * 2, size - innerSize, innerSize);
  square(size - innerSize, size - innerSize * 2, innerSize);
  pop(); // Restore drawing state
}

// Draw twelve squares in the remaining spaces
function drawOuterSquares(x, y, size) {
  push(); // Save drawing state
  let innerSize = size / 6;
  fill(colors[floor(random(colors.length))]);
  translate(x, y);
  square(innerSize * 2, 0, innerSize);
  square(innerSize * 3, 0, innerSize);
  square(innerSize, innerSize, innerSize);
  square(size - innerSize * 2, innerSize, innerSize);
  square(0, innerSize * 2, innerSize);
  square(0, innerSize * 3, innerSize);
  square(size - innerSize, innerSize * 2, innerSize);
  square(size - innerSize, innerSize * 3, innerSize);
  square(innerSize, innerSize * 4, innerSize);
  square(size - innerSize * 2, innerSize * 4, innerSize);
  square(innerSize * 2, size - innerSize, innerSize);
  square(innerSize * 3, size - innerSize, innerSize);
  pop(); // Restore drawing state
}

// Draw eight squares around the center
function drawCenterAdjacentSquares(x, y, size) {
  push(); // Save drawing state
  let innerSize = size / 6;
  fill(colors[floor(random(colors.length))]);
  translate(x, y);
  square(innerSize * 2, innerSize, innerSize);
  square(innerSize * 3, innerSize, innerSize);
  square(innerSize, innerSize * 2, innerSize);
  square(innerSize, innerSize * 3, innerSize);
  square(size - innerSize * 2, innerSize * 2, innerSize);
  square(size - innerSize * 2, innerSize * 3, innerSize);
  square(innerSize * 2, size - innerSize * 2, innerSize);
  square(innerSize * 3, size - innerSize * 2, innerSize);
  pop(); // Restore drawing state
}

// Draw four squares in the center
function drawCenterSquares(x, y, size) {
  push(); // Save drawing state
  let innerSize = size / 6;
  fill(colors[floor(random(colors.length))]);
  translate(x, y);
  square(innerSize * 2, innerSize * 2, innerSize);
  square(innerSize * 3, innerSize * 2, innerSize);
  square(innerSize * 2, innerSize * 3, innerSize);
  square(innerSize * 3, innerSize * 3, innerSize);
  pop(); // Restore drawing state
}
