let user=0;
let comp =0;
const choose =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore= document.querySelector("#user-score");
const compScore= document.querySelector("#comp-score");


const genCompChoice = () =>{
  let options =["rock","paper","scissor"];
  let rdmidx= Math.floor(Math.random()*3);
  return options[rdmidx];
}
const drawGame = () =>{
 msg.innerText ="game was drawn";
 msg.style.backgroundColor="#081b31";
}

const showWinner = (userWin) =>{
  if (userWin) {
    user++;
    msg.innerText= "you win";
    msg.style.backgroundColor = "green";
    userScore.innerText =user ;
    

  }
  else {
    comp++;
    msg.innerText ="you lose!";
    msg.style.backgroundColor="red";
    compScore.innerText = comp;
  }
}

const playGame = (userChoice) =>{
 console.log("user choice = ",userChoice);
 const compChoice =genCompChoice();
 console.log("compChoce is",compChoice);

  if (userChoice===compChoice) {
    drawGame();
  }
  else{
    let userWin= true;
    if (userChoice ==="rock") {
      //paper,scissor
       userWin = compChoice=== "paper" ? false :true ;
    }
    else if(userChoice==="paper")
     { userWin=compChoice==="scissor" ? false: true ;}
  
    else if(userChoice==="scissor")
          { userWin=compChoice==="rock" ? false:true;}
   showWinner(userWin);
  }
}



choose.forEach((choice) =>{

  choice.addEventListener("click",() => {
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
  });
});