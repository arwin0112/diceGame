
document.querySelectorAll(".btn")[0].addEventListener("click",rollDice);
function rollDice(){

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var playerOneimage = "images/dice" + randomNumber1 + ".png";
var playerTwoimage = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",playerOneimage);
document.querySelectorAll("img")[1].setAttribute("src",playerTwoimage);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML ="🚩Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML ="PLayer 2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw! ";
}
buttonAnimation();
}
function buttonAnimation(){
    var activeButton = document.querySelector(".btn");
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },150);
}