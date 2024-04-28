const nameOutput = document.querySelector("#name-output");
const inputName = document.querySelector("#name-input");

inputName.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim();
  if (inputValue) {
    nameOutput.textContent = inputValue;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
