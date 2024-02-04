document.addEventListener("DOMContentLoaded", function () {
  var storedTheme = localStorage.getItem("darkTheme");
  var body = document.body;
  var button = document.getElementById("themeBut");
  
  if (storedTheme === "true") {
    body.classList.add("dark-theme");
    button.textContent = "Dark";
  } else {
    body.classList.remove("dark-theme");
    button.textContent = "Light";
  }

});

function ThemeMode() {
  var button = document.getElementById("themeBut");
  var body = document.body;

  body.classList.toggle("dark-theme", !body.classList.contains("dark-theme"));

  var isDarkTheme = body.classList.contains("dark-theme");
  localStorage.setItem("darkTheme", isDarkTheme);

  if (isDarkTheme) {
    button.textContent = "Dark";
  } else {
    button.textContent = "Light";
  }
}
