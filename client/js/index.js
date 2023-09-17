const checkLocalStorage = () => {
  if (!localStorage.getItem("data")) {
    location.replace("/login.html");
  }
};
checkLocalStorage();

const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const fullname = document.getElementById("fullname");
const group = document.getElementById("group");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const email = document.getElementById("email");
const saveButton = document.getElementById("save-button");
const editButton = document.getElementById("edit-button");
const deleteButton = document.getElementById("delete-button");
const logoutButton = document.getElementById("logout-button");

editData = () => {
  saveButton.disabled = false;
  deleteButton.disabled = true;
  logoutButton.disabled = true;
  editButton.disabled = true;
  password.type = "text";

  let inputsArray = [
    username,
    password,
    fullname,
    group,
    phone,
    address,
    email,
  ];
  inputsArray.forEach((input) => {
    input.removeAttribute("disabled");
  });
};
