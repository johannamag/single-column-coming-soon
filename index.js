const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form["email"].value;

  if (email === "") {
    addErrorTo("email", "Email is required");
  } else if (isValid(email)) {
    addErrorTo("email", "Email is not valid");
  } else {
    removeErrorFrom("email");
  }
});

function addErrorTo(field, message) {
  const small = form[field].parentNode.querySelector(".errormsg");
  small.innerText = message;
  small.style.opacity = 1;

  const border = document.getElementById("email");
  border.classList.add("error");
}

function removeErrorFrom(field) {
  const small = form[field].parentNode.querySelector(".errormsg");
  console.log(small);
  small.style.opacity = 0;

  const border = document.getElementById("email");
  border.classList.remove("error");
}

function isValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
