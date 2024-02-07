let playerScore = 0;
let botScore = 0;



function addPlayerScore(){
    playerScore++;
    document.querySelector('.PlayerCount').innerText = `Player: ${playerScore}`;
    console.log(`PlayerScore: ${playerScore}`);
    if(playerScore === 5){
      document.querySelector(".FinishScreen").style.display = 'flex';
      }
    }
function addBotScore(){
    botScore++
    document.querySelector('.BotCount').innerHTML = `Computer: ${botScore}`;
    console.log(`BotScore: ${botScore}`);
    if(botScore === 5){
      document.querySelector(".FinishScreen").style.display = 'flex';
      }
    }




function botPick(){
    let choice = Math.floor(Math.random() * 3);
    
    switch(choice){
      case 0:
        return "ROCK"
      case 1:
        return "PAPER"
      case 2:
        return "SCISSORS"
    }

console.log(botPick)
}


// function myPick(button){
//   var picked = button.className;
//   console.log(` ${picked}`)
//   return picked;
// }


function oneRound(x){
  playerPick = x
  console.log(`Player pick = ${playerPick}`)
  botbotPick = botPick()
  console.log(`Bot pick = ${botbotPick}`)
  result = (`${playerPick}`+ " - " + `${botbotPick}`)
  console.log(result)
  if (playerPick === botbotPick) {
    console.log("tie");
    
  } else {
    switch (playerPick) {
      case "ROCK":
        if (botbotPick === "PAPER") {
          addBotScore();
        } else if (botbotPick === "SCISSORS") {
          addPlayerScore();
        }
        break;
      case "PAPER":
        if (botbotPick === "SCISSORS") {
          addBotScore();
        } else if (botbotPick === "ROCK") {
          addPlayerScore();
        }
        break;
        

      case "SCISSORS":
        if (botbotPick === "ROCK") {
          addBotScore();
        } else if (botbotPick === "PAPER") {
          addPlayerScore();
        }
        break;
    }
  }
}

function newGame(){
  document.querySelector(".FinishScreen").style.display = 'none';
  document.querySelector('.PlayerCount').innerText = `Player: 0`;
  document.querySelector('.BotCount').innerHTML = `Computer: 0`;
  botScore = 0
  playerScore = 0
}


