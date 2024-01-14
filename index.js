let playerScore = 0;
let botScore = 0;



function addPlayerScore(){
    playerScore++;
    document.querySelector('.PlayerCount').innerText = `Player: ${playerScore}`;
    console.log(`PlayerScore: ${playerScore}`);
};
function addBotScore(){
    botScore++
    document.querySelector('.BotCount').innerHTML = `Computer: ${botScore}`;
    console.log(`BotScore: ${botScore}`);
};

function oneGame(playerPick,botPick){

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

}




