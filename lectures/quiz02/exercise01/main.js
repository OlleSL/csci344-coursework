function changeClass(theme) {
  document.body.className = theme;
}

function color1() {
  // target the element with the id of square1
  // and change its background color...
  document.getElementById("square1").addEventListener("click", function () {
    changeClass("pink");
  });
}

function color2() {
  // target the element with the id of square2
  // and change its background color...
}

function color3() {
  // TODO
}

function color4() {
  // TODO
}

function color5() {
  // TODO
}

function color6() {
  // TODO
}

color1();
color2();
color3();
color4();
color5();
color6();

document.getElementById("default").addEventListener("click", function () {
  changeClass("");
});
