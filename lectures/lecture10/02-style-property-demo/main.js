const changeColor = (selector, color) => {
  console.log(selector, color);
  const el = (document.querySelector(selector).style.backgroundColor = color);
  if (el.style.backgroundColor === color) {
    el.style.backgroundColor === "white";
  }

  if (el.style.backgroundColor === color) {
    el.style.backgroundColor === "white";
  }
};

function reset() {
  // const sections = document.querySelector(all-my-sections)
  document.querySelector("#section1").style.backgroundColor = "transparent";
  document.querySelector("#section2").style.backgroundColor = "transparent";
  document.querySelector("#section3").style.backgroundColor = "transparent";
  document.querySelector("#section4").style.backgroundColor = "transparent";
}
