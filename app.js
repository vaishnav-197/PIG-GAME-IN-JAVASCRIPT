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
activePlayer=1;





document.getElementById('current-'+ activePlayer).textContent=dice;

document.querySelector('.dice').style.display='none';

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    // Random number
    var dice= Math.floor(Math.random()*6)+1;
    
    // display dice
    var diceDom= document.querySelector('.dice');
    diceDom.style.display='block';
    diceDom.src='dice-'+dice+'.png';


});