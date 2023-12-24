const form = document.querySelector("form");
const email = document.querySelector("input");
const errorMsg = document.querySelector(".error-msg");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  if (email.value.trim() === "") {
    email.style.outlineColor = "red";
    errorMsg.textContent = "Email cannot be empty";
  } else if (!isEmailvalid(email.value)) {
    email.style.outlineColor = "red";
    errorMsg.textContent = "Please provide a valid email address";
  } else {
    email.style.outlineColor = "green";
    errorMsg.textContent = "";
    alert("Email Valid");
  }
});

function isEmailvalid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email);
}
