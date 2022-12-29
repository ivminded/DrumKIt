// ------------ Button Press -------------

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(let i = 0; i < numberOfDrumButtons; i++){

    document.querySelectorAll("button") [i].addEventListener("click", function(){

    //    this.style.color = "white";

       var buttonInnerHTML = this.innerHTML;
       makeSound(buttonInnerHTML);
       buttonAnimation(buttonInnerHTML);

       switch (buttonInnerHTML){
        case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
        case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
        case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
        case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
        case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
        case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
        case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

        default: console.log(buttonInnerHTML);
       }
    });
//Anonimous function
}
// ------------ Keybord Press -------------

document.addEventListener("keypress", function(event){
   makeSound(event.key);
   buttonAnimation(event.key);
});
function makeSound(key){
    switch (key){
        case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
        case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
        case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
        case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
        case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
        case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
        case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

        default: console.log(buttonInnerHTML);
       }
}

function buttonAnimation(currentKey){
   var activeButton = document.querySelector("."+currentKey); 
   activeButton.classList.add("pressed");
   setTimeout(function(){
    activeButton.classList.remove("pressed");

   }, 100);
}


// -------- Calculator example - Higher Order Function---------

// function add(num1, num2){
//     return(num1 + num2);
// }
// function multiply(num1, num2){
//     return(num1 * num2);
// }
// function substract(num1, num2) {
//     return(num1 - num2);
// }
// function divide(num1, num2){
//     return(num1 / num2);
// }

// function calc(num1, num2, operator) {
//     return(operator(num1, num2));
// }
// calc(2,5, multiply);


// var audio = new Audio('sounds/tom-1.mp3');
//        audio.play();


// --------------- Object and Constructor Function ---------


// function HouseKeeper(yearsOfExperience, name, age, cleaningRepertoire){
//     this.yearsOfExperience = yearsOfExperience;
//     this.name = name;
//     this.age = age;
//     this.cleaningRepertoire = cleaningRepertoire;
//     this.moveSuitcase = function(){
//         alert("May I take your suitcase?");
//         pickUpSuitcase();
//         move();
//         // Method function
//     }
//     this.clean = function(){
//         alert("Cleaning in progress");
//     }   
// }

// var houseKeeper1 = new HouseKeeper(9, "Tom", 15, ["lobby","bedroom"]);
// console.log(houseKeeper1.name);