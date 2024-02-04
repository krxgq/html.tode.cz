function toggleNav() {
  var button = document.getElementById("nav-toggle");
  var nav = document.getElementsByTagName("nav")[0];

  var navStyle = window.getComputedStyle(nav);
  nav.classList.toggle("unwrapped");

    if (nav.classList.contains("unwrapped")) {
      nav.style.maxHeight = "0";
      button.innerHTML = "▲";
    } else {
      nav.style.maxHeight = "440px"; 
      button.innerHTML = "▼";
    }
}
function submitButton() {
  alert("Your message has been sent!");
}
