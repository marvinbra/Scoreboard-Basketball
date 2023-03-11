let numH = 0;
let numG = 0;
let resetTUDO = 0;
let count = 0;

document.getElementById("num-home").textContent = numH;
document.getElementById("num-guest").textContent = numG;

let resultH = document.getElementById("num-home");
let resultG = document.getElementById("num-guest");
let resetALL = document.getElementsByClassName("reset");

function add1 () {
    numH = numH + 1;
    resultH.textContent = numH;
}

function add2 () {
    numH = numH + 2;
    resultH.textContent = numH;
}

function add3 () {
    numH = numH + 3;
    resultH.textContent = numH;
}

function add11 () {
    numG = numG + 1;
    resultG.textContent = numG;
}

function add21 () {
    numG = numG + 2;
    resultG.textContent = numG;
}

function add31 () {
    numG = numG + 3;
    resultG.textContent = numG;
}

function reset() {
    resultH.textContent = 0;
    numH = 0;
    resultG.textContent = 0;
    numG = 0;
}

function reset1H() {
    resultH.textContent = numH - 1;
    numH = numH - 1;
}

function reset1G() {
    resultG.textContent = numG - 1;
    numG = numG - 1;
}