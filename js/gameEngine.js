'use strict'
let chooseOne // see line 12
  , wins   = 0//
  , losses = 0//// all scores start with 0
  , draws  = 0;//
//====================================//
$(document).ready(function(){
  let userChose
    , botChose;
  const botChoseArray = [ 'rock' , 'paper' , 'scissors' ]; //the bot choose randomly from this array
//
  chooseOne = function(obj){ // a function that takes in an object (which is gonna be "this keyword" ) and I added 'onclick = "chooseOne( this )"' to rock-btn, paper-btn and scissors-btn.
      userChose = obj.value; // assign userChose to the value attribute value on the clicked button (see index.htm lines 38, 39 and 40 )
      $user.html(`<img src="imgs/${ userChose }.png" alt="${ userChose }" />`); //adds a new image
      botTurn(); 
      score();
  }
  //========================//
  function botTurn(){
      botChose = botChoseArray[ Math.floor( Math.random( ) * botChoseArray.length ) ];// assign botChose to a random element from botChoseArray
      $bot.html(`<img src="imgs/${ botChose }.png" alt="${ botChose }" />`); //adds a new image
  }
  //=========================//
  function score(){
    if(userChose === botChose) { // if Draw
        draws++; //increments draws variable
        $( '.draws > h2' ).text( draws ); // updates draws block
      }
    else if(
             userChose === 'rock' && botChose === 'scissors'  ////
          || userChose === 'scissors' && botChose === 'paper'////====> if the user wins
          || userChose === 'paper' && botChose === 'rock'   ////
        ){
          wins++ // increments wins variable
          $( '.wins > h2' ).text( wins ); //updates wins block
         }
    else {
        losses++ // increments losses variable
        $( '.losses > h2' ).text( losses ); // updates losses block
    }
  }
})
