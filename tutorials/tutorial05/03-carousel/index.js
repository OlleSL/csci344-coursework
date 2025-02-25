//index tracker
let currentPosition = 0;
//The gap that we assign between the various slides.
let gap = 10;
//Determines the width in pixel assigned to the slides.
const slideWidth = 400;

// This function move the carousel left or right when button is triggered.
function moveCarousel(direction) {
  //Selects all the elements that have "carousel-item" as their class.
  const items = document.querySelectorAll(".carousel-item");
  //Checks if there is space to move forward to (we don't go past last image).
  if (direction == "forward") {
    // minus 2 b/c first 2 slides already showing
    if (currentPosition >= items.length - 2) {
      return false;
    }
    //increment position moves us forward if we pass the test right above.
    currentPosition++;
    /*
     * checks if our position is the start/all the way to the left, otherwise backtrack
     * one step and decrement position by 1.
     */
  } else {
    if (currentPosition == 0) {
      return false;
    }
    currentPosition--;
  }
  // this calculates the total slide shift that is to be made
  const offset = (slideWidth + gap) * currentPosition;
  /*
   * loop through all of the items/slides, and moves each slide horizontally with
   * the help from CSS transform
   */
  for (const item of items) {
    item.style.transform = `translateX(-${offset}px)`;
  }
}
