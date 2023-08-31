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
    numH += 1;
    resultH.textContent = numH;
}

function add2 () {
    numH += 2;
    resultH.textContent = numH;
}

function add3 () {
    numH += 3;
    resultH.textContent = numH;
}

function add11 () {
    numG += 1;
    resultG.textContent = numG;
}

function add21 () {
    numG += 2;
    resultG.textContent = numG;
}

function add31 () {
    numG += 3;
    resultG.textContent = numG;
}

function reset() {
    resultH.textContent = 0;
    numH = 0;
    resultG.textContent = 0;
    numG = 0;
}

function reset1H() {
    resultH.textContent -= 1;
    numH -= 1;
}

function reset1G() {
    resultG.textContent -= 1;
    numG -= 1;
}