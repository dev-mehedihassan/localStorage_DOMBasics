// 1. CHANGE TEXT

function changeText() {
  document.getElementById("text").textContent = "Text has been changed!";
}

// 2. SHOW / HIDE PASSWORD

function showPassword() {

    const password = document.getElementById("password");
    const button = document.getElementById("showHideBtn");

    if (password.type === "password") {

        password.type = "text";
        button.innerText = "Hide";

    } else {

        password.type = "password";
        button.innerText = "Show";

    }
}

// 3. GET INPUT VALUE

function showName() {
  const name = document.getElementById("name").value;

  document.getElementById("nameResult").textContent = "Hello " + name;
}

// 4. CHANGE BACKGROUND COLOR

function changeColor(color) {
  document.body.style.backgroundColor = color;
}

// 5. HIDE / SHOW ELEMENT

function hideMessage() {
  document.getElementById("message").style.display = "none";
}

function showMessage() {
  document.getElementById("message").style.display = "block";
}

// 6. COUNTER

let count = 0;

function increase() {
  count++;

  document.getElementById("count").textContent = count;
}

function decrease() {
  count--;

  document.getElementById("count").textContent = count;
}

function reset() {
  count = 0;

  document.getElementById("count").textContent = count;
}

// 7. LOCALSTORAGE

function saveName() {
  const name = document.getElementById("saveName").value;

  localStorage.setItem("username", name);

  alert("Name saved!");
}

function getName() {
  const name = localStorage.getItem("username");

  document.getElementById("savedName").textContent = name;
}

function removeName() {
  localStorage.removeItem("username");

  document.getElementById("savedName").textContent = "";
}

// 8. LOCALSTORAGE THEME

function setDark() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";

  localStorage.setItem("theme", "dark");
}

function setLight() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";

  localStorage.setItem("theme", "light");
}

// Check saved theme when page loads

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  setDark();
}

if (savedTheme === "light") {
  setLight();
}