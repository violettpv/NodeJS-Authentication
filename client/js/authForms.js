let checkName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
let checkGroup = /[A-Z][A-Z]\-[0-9][0-9]/;
let checkPhone = /^\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
let checkAddress =
  /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
let checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let checkUsername = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
let checkPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/;

showLoginPassword = () => {
  let checkbox = document.querySelector(".pass-checkbox");
  let element = document.querySelector(".password");
  if (element.type === "password") {
    element.type = "text";
    checkbox.checked = true;
  } else {
    element.type = "password";
    checkbox.checked = false;
  }
};

showPasswords = () => {
  let checkbox = document.querySelector(".pass-checkbox");
  let element1 = document.querySelector(".password");
  let element2 = document.querySelector(".password-confirm");
  if (element1.type === "password" && element2.type === "password") {
    element1.type = "text";
    element2.type = "text";
    checkbox.checked = true;
  } else {
    element1.type = "password";
    element2.type = "password";
    checkbox.checked = false;
  }
};

// variables
const formLogin = document.getElementById("login-form");
const formRegister = document.getElementById("register-form");
const usernameLogin = document.getElementById("login-username");
const passwordLogin = document.getElementById("login-password");
const usernameRegister = document.getElementById("register-username");
const passwordRegister = document.getElementById("register-password");
const passwordConfirm = document.getElementById("confirm-password");
const fullname = document.getElementById("fullname");
const group = document.getElementById("group");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const email = document.getElementById("email");

function validateRegisterForm() {
  let success = true;
  usernameRegister.classList.remove("input-error");
  if (!checkUsername.test(usernameRegister.value)) {
    usernameRegister.classList.add("input-error");
    success = false;
    console.log("test");
  }
  passwordRegister.classList.remove("input-error");
  if (!checkPassword.test(passwordRegister.value)) {
    passwordRegister.classList.add("input-error");
    success = false;
    console.log("test");
  }
  passwordConfirm.classList.remove("input-error");
  if (!checkPassword.test(passwordConfirm.value)) {
    passwordConfirm.classList.add("input-error");
    success = false;
    console.log("test");
  }
  fullname.classList.remove("input-error");
  if (!checkName.test(fullname.value)) {
    fullname.classList.add("input-error");
    success = false;
    console.log("test");
  }
  group.classList.remove("input-error");
  if (!checkGroup.test(group.value)) {
    group.classList.add("input-error");
    success = false;
    console.log("test");
  }
  phone.classList.remove("input-error");
  if (!checkPhone.test(phone.value)) {
    phone.classList.add("input-error");
    success = false;
    console.log("test");
  }
  address.classList.remove("input-error");
  if (!checkAddress.test(address.value)) {
    address.classList.add("input-error");
    success = false;
    console.log("test");
  }
  email.classList.remove("input-error");
  if (!checkEmail.test(email.value)) {
    email.classList.add("input-error");
    success = false;
    console.log("test");
  }
  if (success) {
    alert("Всі поля заповнені коректно.");
    myForm.reset();
  } else {
    alert("Ви ввели некоректні дані.");
  }
  success = true;
}

validateLoginForm = () => {
  let success = true;
  usernameLogin.classList.remove("input-error");
  if (!checkUsername.test(usernameLogin.value)) {
    usernameLogin.classList.add("input-error");
    success = false;
    console.log("test");
  }
  passwordLogin.classList.remove("input-error");
  if (!checkPassword.test(passwordLogin.value)) {
    passwordLogin.classList.add("input-error");
    success = false;
    console.log("test");
  }
  if (success) {
    alert("Всі поля заповнені коректно.");
    myForm.reset();
  } else {
    alert("Ви ввели некоректні дані.");
  }
  success = true;
};

const verified = (
  username,
  password,
  fullname,
  group,
  phone,
  address,
  email
) => {
  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      fullname,
      group,
      idcard,
      phone,
      address,
      email,
    }),
  })
    .then((res) => res.json())
    .then((obj) => localStorage.setItem("user", JSON.stringify(obj)))
    .then(() => location.replace("/index.html"))
    .catch((e) => {
      clearForm();
      console.error(e);
    });
};
