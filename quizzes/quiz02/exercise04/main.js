function showFox() {
  updateAnimal("fox", "images/fox.jpg", "Fox");
}

function showLion() {
  updateAnimal("lion", "images/lion.jpg", "Lion");
}

function showTiger() {
  updateAnimal("tiger", "images/tiger.png", "Tiger");
}

function showZebra() {
  updateAnimal("zebra", "images/zebra.jpg", "Zebra");
}

function updateAnimal(animal, imgSrc, name) {
  let img = document.querySelector(".card img");
  let text = document.querySelector(".card p");

  if (img && text) {
    img.src = imgSrc;
    text.textContent = name;
    console.log(`Changed image and text to ${name}`);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let buttons = document.querySelectorAll("button");

  buttons[0].addEventListener("click", showFox);
  buttons[1].addEventListener("click", showLion);
  buttons[2].addEventListener("click", showTiger);
  buttons[3].addEventListener("click", showZebra);
});
