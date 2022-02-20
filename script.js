var h3 = document.getElementById("output");
var h4=document.getElementById("warning");
var color1=document.getElementById("firstcolor");
var color2=document.getElementById("secondcolor");
var body=document.getElementById("colorchanger");
var vcolor1=document.getElementById("vfirstcolor");
var vcolor2=document.getElementById("vsecondcolor");
function changeColor() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    h3.textContent="background: "+body.style.background+";"
    h4.textContent="";
}
function changeColorV() {
    body.style.background = "linear-gradient(" + vcolor1.value + ", " + vcolor2.value + ")";
    h3.textContent="background: "+body.style.background+";"
    h4.textContent="*Be sure to also set:- \nBackground-repeat: no-repeat; \nmin-height: 100%;\nbackground-attachment: fixed;";
}
// color1.addEventListener("input", changeColor)
// color2.addEventListener("input", changeColor)
