for(var i=0; i<document.querySelectorAll(".drum").length; i++){
document.querySelectorAll("button")[i].addEventListener("click", function (){
    var word = this.innerHTML;
    makeSound(word);
    animation(word);
});
}

document.addEventListener("keypress", function (e) {
    makeSound(e.key);
    animation(e.key);
});

function makeSound(word){
  switch (word) {
    case 'w':
      var track1 = new Audio("sounds/crash.mp3");
      track1.play();
      break;
    case 'a':
      var track2 = new Audio("sounds/kick-bass.mp3");
      track2.play();
      break;
    case 's':
      var track3 = new Audio("sounds/snare.mp3");
      track3.play();
      break;
    case 'd':
      var track4 = new Audio("sounds/tom-1.mp3");
      track4.play();
      break;
    case 'j':
      var track5 = new Audio("sounds/tom-2.mp3");
      track5.play();
      break;
    case 'k':
      var track6 = new Audio("sounds/tom-3.mp3");
      track6.play();
      break;
    case 'l':
      var track7 = new Audio("sounds/tom-4.mp3");
      track7.play();
      break;
    default:
      console.log(word)
  }
}

function animation(key){
  var select = document.querySelector("."+key).classList.add("pressed");
  setTimeout(function (){
      document.querySelector("."+key).classList.remove("pressed");
  },100);

}
