var x = document.getElementById("signin");
var y = document.getElementById("signup");
var z = document.getElementById("btn");
// document.getElementById("pwd").maxLength="8";

function signup() {
    x.style.left = "-400px";
    y.style.left = "0px";
    z.style.left = "110px";
}

function signin() {
    x.style.left = "0px";
    y.style.left = "400px";
    z.style.left = "0px";
}

function stringlength(inputtext, min) {
    var txt = inputtext.value;
    var len = min;
    if (txt.length < len) {
        alert("Please input password of length atleast 6");
    }
}
