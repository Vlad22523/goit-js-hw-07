const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElem = event.currentTarget.elements;
  if (
    formElem.email.value.length === 0 ||
    formElem.password.value.length === 0
  ) {
    alert("'All form fields must be filled in'");
  } else {
    const objInput = {
      email: formElem.email.value.trim(),
      password: formElem.password.value.trim(),
    };
    console.log(objInput);
  }

  formLogin.reset();
});
