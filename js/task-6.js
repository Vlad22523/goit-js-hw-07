function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input[type]");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  const amount = input.value;
  if (amount <= 100 && amount >= 1) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Between 1 and 100.");
  }
});

function createBoxes(amount) {
  boxes.innerHTML = "";

  let sizeBox = 30;
  for (let i = 0; i < amount; i++) {
    const boxesCol = document.createElement("div");
    boxesCol.style.width = `${sizeBox}px`;
    boxesCol.style.height = `${sizeBox}px`;
    boxesCol.style.backgroundColor = getRandomHexColor();
    boxes.append(boxesCol);
    sizeBox += 10;
  }
}

btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
}
