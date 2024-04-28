function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCol = document.querySelector(".change-color");
const hexColor = document.querySelector(".color");

btnCol.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  hexColor.innerHTML = `${getRandomHexColor()}`;
});
