/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer, dice;

scores=[0,0];
roundScore=0;
activePlayer=0;







document.querySelector('.dice').style.display='none';

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    // Random number
    var dice= Math.floor(Math.random()*6)+1;
    
    // display dice
    var diceDom= document.querySelector('.dice');
    diceDom.style.display='block';
    diceDom.src='dice-'+dice+'.png';


    // UPDATE round score if rolled dice is not one

    if (dice!==1) {
        // add score
        roundScore+=dice;
        document.querySelector('#current-'+ activePlayer).textContent=roundScore;
    } else {
        // change player and reset current score to zer0
        document.querySelector('#current-'+activePlayer).textContent=0;
        activePlayer===0? activePlayer=1:activePlayer=0;
        roundScore=0;


        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        

    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){

    // add round score
    scores[activePlayer]+=roundScore;
      
    // to update GUI
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    

    // to check winner
    if(scores[activePlayer]>=100){
      document.querySelector('#name-'+activePlayer).textContent="winner!!";
      document.querySelector('.dice').style.display='none';
      document.querySelector('.player-0-panel').classList.remove('active')
      document.querySelector('.player-1-panel').classList.remove('active');
    }
    else
    {
      // change player
       changePlayer();   
    }    

});

function changePlayer(){
    // next player

    activePlayer===0? activePlayer=1:activePlayer=0;

    // roundscore to zero
    roundScore=0;
    //  update GUI
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

}
