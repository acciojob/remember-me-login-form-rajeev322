//your JS code here. If required.
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingUserBtn = document.getElementById("existing");

function loadSavedUser() {
  const savedUser = localStorage.getItem("username");
  if (savedUser) {
    existingUserBtn.style.display = "block";
  }
}

loadSavedUser();

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  alert("Logged in as " + username);

  if (checkbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  loadSavedUser();
});

existingUserBtn.addEventListener("click", function () {
  const savedUsername = localStorage.getItem("username");
  alert("Logged in as " + savedUsername);
});
