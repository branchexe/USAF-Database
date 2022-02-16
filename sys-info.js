var detectOS = "Unknown OS";

if (navigator.appVersion.indexOf("Win") != -1) 
    detectOS = "Windows";

if (navigator.appVersion.indexOf("Mac") != -1) 
    detectOS = "MacOS";

if (navigator.appVersion.indexOf("Linux") != -1) 
    detectOS = "Linux";

document.querySelector('button').addEventListener('click', detect);

function detect() {
   alert(`Device OS is: ${detectOS}`)
}

function home() {
    window.location.href = "index.html"
}