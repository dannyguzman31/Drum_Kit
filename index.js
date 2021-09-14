/*
document.querySelector("button").addEventListener("click", handleClick); // passing the name of a function as an input


function handleClick(){

  alert("I got click!");

}
*/

// Detects Button press and makes sounds
var numberOfButtons =  document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

/*
    var audio = new Audio('sounds/tom-1.mp3'); // plays sound
    audio.play();

    this.style.color = "white"; // changes txt color to white
    */

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

  });

}


// Detects Keyboard press & makes a sound

document.addEventListener("keydown", function(event) {

  makeSound(event.key);
});

function makeSound(key){

  switch (key) {
    case "w":
    var tom1 = new Audio('sounds/tom-1.mp3'); // plays sound
    tom1.play();
      break;

    case "a":
    var tom2 = new Audio('sounds/tom-2.mp3'); // plays sound
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio('sounds/tom-3.mp3'); // plays sound
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio('sounds/tom-4.mp3'); // plays sound
    tom4.play();
    break;

    case "j":
    var crash = new Audio('sounds/snare.mp3'); // plays sound
    crash.play();
    break;

    case "k":
    var kick = new Audio('sounds/crash.mp3'); // plays sound
    kick.play();
    break;

    case "l":
    var snare = new Audio('sounds/kick-bass.mp3'); // plays sound
    snare.play();
    break;

    default:console.log(buttonInnerHTML);

  }
}
