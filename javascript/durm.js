var drumlength=document.querySelectorAll(".drum").length;


for(var i=0; i<drumlength;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var select=this.innerHTML;
        sound(select); 
        animation(select); });
    
}

function sound(key){
    switch (key) {
    case "w":
      var tom1 = new Audio("durm_sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("durm_sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('durm_sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('durm_sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('durm_sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('durm_sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('durm_sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}

document.addEventListener("keypress",function(press){
  sound(press.key)
  animation(press.key);
});

function animation(pressed){
  var button_animation=document.querySelector("."+pressed);
  button_animation.classList.add("opa");

  setTimeout(() => {
    button_animation.classList.remove("opa")
  }, 100);
}