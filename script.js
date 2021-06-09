var changeTextBtn = document.querySelector(".changeText");
var readTextBtn = document.querySelector(".readText");
var code = document.querySelector("#code");
var input = document.querySelector(".userInput input");
var submit = document.querySelector(".btn");
var div = document.querySelector(".div");
var close = document.querySelector(".close");
var modal = document.querySelector(".modal");

changeTextBtn.addEventListener('click', () => {
    code.textContent = createCaptcha() ;
});
window.addEventListener('load', () => {
    code.textContent = createCaptcha();
});


function createCaptcha() {
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'N', 'M', 'O', 'P', 
    'Q', 'R', 'S', 'T', 'U','V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'm', 'o', 'p', 
    'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y', '0', '1', '2', '3', '4', '5',
     '6', '7', '8', '9'];

     let a = letters[Math.floor(Math.random() * letters.length)];
     let b = letters[Math.floor(Math.random() * letters.length)];
     let c = letters[Math.floor(Math.random() * letters.length)];
     let d = letters[Math.floor(Math.random() * letters.length)];
     let e = letters[Math.floor(Math.random() * letters.length)];
     let f = letters[Math.floor(Math.random() * letters.length)];
     let g = letters[Math.floor(Math.random() * letters.length)];
     let code = a + b + c + d + e + f + g ;
     return code;
}

submit.addEventListener('click', () => {
    modal.style.display = 'grid'
    var val = input.value;
    if(val == ''){
        document.querySelector(".div").innerHTML = "Please Enter the text"
    }
    else if(val === code.textContent){
        document.querySelector(".div").innerHTML = "Vaild code"
    }
    else{
        document.querySelector(".div").innerHTML = "Invalid code"
    }
})

readTextBtn.addEventListener('click', () => {
    let text = code.textContent;
    responsiveVoice.speak(text);
})
close.addEventListener('click', () => {
    modal.style.display = 'none'
})