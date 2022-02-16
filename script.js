function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function popup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  //darkmode keypress
  document.onkeypress = function (e) {
    e = e || window.event;
    // use e.keyCode
    var element = document.body;
    element.classList.toggle("dark-mode");
};