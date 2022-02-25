const fullName = document.querySelector("#name");
const address = document.querySelector("#address");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const form = document.querySelector("#contactform");
const button = document.querySelector("button");
const message = document.querySelector("#message");

const fullNameError = document.querySelector("#fullNameError");
const addressError = document.querySelector("#addressError");
const emailError = document.querySelector("#emailError");
const subjectError = document.querySelector("#subjectError");

button.onclick = function () {
  if (checkLength(fullName.value, 1) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (checkLength(address.value, 25) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
  if (checkEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (checkLength(subject.value, 10) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }
  if (
    checkLength(fullName.value, 1) &&
    checkLength(address.value, 25) &&
    checkEmail(email.value) &&
    checkLength(subject.value, 10)
  ) {
    form.reset();
    message.style.display = "block";
  }
  event.preventDefault();
};

function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function checkEmail(email) {
  const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  const emailCheck = regEx.test(email);
  return emailCheck;
}
