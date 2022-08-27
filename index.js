function playSound(buttonKeyValue) {
  switch (buttonKeyValue) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3")
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3")
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3")
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3")
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3")
      snare.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3")
      kick.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3")
      crash.play();
      break;

    default:
      console.log(buttonKeyValue);

  }
}

function buttonAnimation(currentKey){
 var activeButton=document.querySelector("."+currentKey);
 activeButton.classList.add("pressed");
 setTimeout(function () {
   activeButton.classList.remove("pressed");
 }, 100);
}

//detection button click press from mouse
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // console.log(this.style.color="white");
    var buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML);
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//detecting keyboard press
document.addEventListener("keydown", function(event) {
  console.log(event.key);
  playSound(event.key);
  buttonAnimation(event.key);
});
// var audio=new Audio("sounds/tom-1.mp3");
// audio.play();
