// Validation email
function validerEmail(email) {
  let emailRegex = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z]{2,6}$");
  return emailRegex.test(email);
}

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let email = document.getElementById("email");
  let messageError = document.querySelector(".error");
  let messageValid = document.querySelector(".valid");
  let emailInput = document.getElementById("email");

  //   Email is valid
  if (validerEmail(email.value)) {
    messageValid.style.display = "block";
    emailInput.style.border = "";
    messageError.style.display = "none";
    email.value = "";
  } else {
    // Email is wrong
    messageValid.style.display = "none";
    emailInput.style.border = "1px solid red";
    messageError.style.display = "block";
    email.value = "example@email.com";
  }
});

// Facebook logo
function change1() {
  document.querySelector(".facebook img").src =
    "assets/images/icons8-f-30 (1).png";
}
function change2() {
  document.querySelector(".facebook img").src = "assets/images/icons8-f-30.png";
}

// Twitter logo
function change3() {
  document.querySelector(".twitter img").src =
    "assets/images/icons8-twitter-30 (1).png";
}
function change4() {
  document.querySelector(".twitter img").src =
    "assets/images/icons8-twitter-30.png";
}

// Instagram logo
function change5() {
  document.querySelector(".instagram img").src =
    "assets/images/icons8-instagram-30 (1).png";
}
function change6() {
  document.querySelector(".instagram img").src =
    "assets/images/icons8-instagram-30.png";
}
