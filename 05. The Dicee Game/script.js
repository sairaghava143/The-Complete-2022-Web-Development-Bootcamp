function dice() {
    var len = mypix.length;
    var n = Math.random() * len;
    n = Math.floor(n);
    return n;
}

var mypix = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var len = mypix.length;
// var n1 = Math.random() * len;
// n1 = Math.floor(n1);
// var n2 = Math.random() * len;
// n2 = Math.floor(n2);
////////////////////////////////////////////////////////////////
var n11 = dice();
var n22 = dice();


document.querySelector(".img1").src = mypix[n11];
document.querySelector(".img2").src = mypix[n22];
if (n11 > n22) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (n11 < n22) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}