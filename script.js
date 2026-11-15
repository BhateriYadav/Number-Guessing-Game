let num = Math.floor(Math.random()*100)+1;
console.log(num);
const guessInput = document.querySelector(`#guessInput`);
const guessBtn = document.querySelector(`#guessBtn`);
const message= document.querySelector(`#message`);
const attempt = document.querySelector(`#attempt`);
const playAgain = document.querySelector(`#playAgainBtn`);

 let tries = 0;

guessBtn.addEventListener(`click`,()=>{
    console.log("button clicked");
    if(guessInput.value.trim()===""){
        message.innerText = "please enter a number";
        return;
    }
    let input = Number(guessInput.value);
    console.log(input);
   tries++;

    attempt.innerText =`tries:${tries}`;
    if(input=== num){
        console.log("correct");
        message.innerText="Congratulation! you guessed the number";
        guessInput.disabled = true;

    guessBtn.disabled = true;

    playAgain.style.display = "block";
    }
    

    else if(input>num){
       message.innerText="too high";
    }else{
        message.innerText="too low";
    }
    guessInput.value="";


});
playAgain.addEventListener(`click`, ()=>{
     num = Math.floor(Math.random()*100)+1;
     console.log(num);
     tries = 0;

     attempt.innerText= `tries:${tries}`;
     message.innerText="";
     guessInput.value="";
     guessInput.disabled = false;
     guessBtn.disabled = false;
     playAgain.style.display="none";


});
