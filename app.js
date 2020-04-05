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
        changeActive();      

    }
});

   function changeActive()
   {  
       if (activePlayer===0) {
            document.querySelector('#current-'+activePlayer).textContent=0;
           activePlayer=1;
           document.querySelector('.player-0-panel').classList.toggle('active');
          document.querySelector('.player-1-panel').classList.toggle('active');
          roundScore=0;
       } else {
            document.querySelector('#current-'+activePlayer).textContent=0;
            activePlayer=0;
           document.querySelector('.player-0-panel').classList.toggle('active');
           document.querySelector('.player-1-panel').classList.toggle('active');
           roundScore=0;         
       }

   }


document.querySelector('.btn-hold').addEventListener('click',function(){

   if (activePlayer===0) {
       scores[0]+=roundScore;
       document.getElementById('score-0').textContent=scores[0];
       changeActive();
   } else {
       scores[1]+=roundScore;
       document.getElementById('score-1').textContent=scores[1];
       changeActive();
   }
});
