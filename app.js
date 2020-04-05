/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer, dice,dice2;


init();


document.querySelector('.dice1').style.display='none';
document.querySelector('.dice2').style.display='none';

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    // Random number
     dice1= Math.floor(Math.random()*6)+1;
     dice2= Math.floor(Math.random()*6)+1;

    // display dice
     var diceDom1= document.querySelector('.dice1');
     diceDom1.style.display='block';
     diceDom1.src='dice-'+dice1+'.png';
     var diceDom2= document.querySelector('.dice2');
     diceDom2.style.display='block';
     diceDom2.src='dice-'+dice2+'.png';
     


      // UPDATE round score if rolled dice is not one
        if ((dice1!==1) && (dice2!==1)) {
              // add score
                 roundScore=dice1+dice2+roundScore;
                 document.querySelector('#current-'+ activePlayer).textContent=roundScore;
        }   
        else {
                // change player and reset current score to zer0
                  document.querySelector('#current-'+activePlayer).textContent=0;
                  activePlayer===0? activePlayer=1:activePlayer=0;
                  roundScore=0;
              
                  document.querySelector('.player-0-panel').classList.toggle('active');
                  document.querySelector('.player-1-panel').classList.toggle('active');

                  // hide dice
                  document.querySelector('.dice1').style.display='none';
                  document.querySelector('.dice2').style.display='none';  
        }
});

document.querySelector('.btn-hold').addEventListener('click',function(){

    // add round score
      scores[activePlayer]+=roundScore;
      
    // to update GUI
     document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
     document.querySelector('.dice1').style.display='none';
     document.querySelector('.dice2').style.display='none';     

    // to check winner
       if(scores[activePlayer]>=100 ){
           winner();    

      
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


function winner(){
    document.querySelector('#name-'+activePlayer).innerHTML='<h4 style="color: brown;">WINNER!!</h4>'
    document.querySelector('.dice1').style.display='none';
    document.querySelector('.dice2').style.display='none';
    document.querySelector('.btn-hold').style.display='none';
    document.querySelector('.btn-roll').style.display='none';
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active');
}


document.querySelector('.btn-new').addEventListener('click',init);



function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    document.querySelector('#name-0').textContent='PLAYER 1';
    document.querySelector('#name-1').textContent='PLAYER 2';
    document.querySelector('.dice1').style.display='none';
    document.querySelector('.dice2').style.display='none';
    document.querySelector('.btn-hold').style.display='block';
    document.querySelector('.btn-roll').style.display='block';
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;
    document.querySelector('#score-0').textContent=0;
    document.querySelector('#score-1').textContent=0;
    document.querySelector('.player-0-panel').classList.add('active');
    
    
}

