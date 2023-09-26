let totalAttempts=5;
let attempts=0;
let totalLosts=0;
let totalWins=0;

const form=document.querySelector("form");
const cardBody=document.querySelector(".card-body");
const guessingNumber=form.querySelector("#guessingNumber");
const checkButton=form.querySelector(".button");
const resultText=cardBody.querySelector(".result-text");
const winMessage=document.createElement("p");
const remainingAttempts=cardBody.querySelector(".remaining-attempts");

form.addEventListener("submit",function(event){
     event.preventDefault();
     attempts++;
     if(attempts===5){
        guessingNumber.disabled=true;
        checkButton.diabled=true;
     }
     if(attempts<6){
        const guessNumber=Number(guessingNumber.value)
        checkResult(guessNumber);
        remainingAttempts.innerHTML=`Remaining attempts are: ${totalAttempts-attempts}`;
     }
     guessingNumber.value="";
});

function checkResult(guessingNumber){
    const randomNumber=getRandomNumber(5);
    if(guessingNumber===randomNumber){
        resultText.innerHTML=`You have won`;
        totalWins++;
    }
    else{
        resultText.innerHTML=`You have lost.The random number was:${randomNumber}`;
        totalLosts++;
    }
    winMessage.innerHTML=`Wins: ${totalWins}, Losts: ${totalLosts}`;
    winMessage.classList.add("large-text");
    cardBody.appendChild(winMessage);

}
function getRandomNumber(limit){
    return Math.floor(Math.random()*limit)+1;
}