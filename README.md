# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)
*  [startgame](#startgame)
* [enevtclikonthegame](#enevtclikonthegame)
## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
## startgame 
Tish is how you can make your game interactive with CSS and HTML  by use document objects. Frist, therefor I have used document objects to make game Boards without any open, show, and, match cards array to loop over each card so that the first look for the game there is not any card appear and use the classlist method to remove cards. invoke shuffleicons method. 
## enevtclikonthegame

* [Eventclickonthecards](#Eventclickonthecards)
* [EvenclickonResetGame](#EvenclickonResetGame)
* [Evenclickonthetheplayagin](#Evenclickonthetheplayagin)

 
## Eventclickonthecards 
   user can click on the two cards just so that there is if condition(opencard.lengh<2 ) that prevents user from click more than two cards.
   when the user stars click on the card the first card will open and set the value of cards click to the parameter at funopencards(get) then push card in an array. inside the function of funopencards.  if condition to check .if users click on the same card or different cards.
   if the card is different that will save in firs1,tiwc1 that will save in card1c,card2c the class name of each card className. other the opencards array will be empty.

##  matchcardmethod
 this method will check if the class name of the first card == className of the Second cards.
 if firs==twic  that will show match card on the game deck by use classlist property.
 opecards array Empty.  invoke for move counter and startcounthn functions        .

## notmatchcardmethod 
This method will check if the class name of the first card != className of second cards.
 if firs!=twic  that will  show-cards  in red card color there is a Setimout method to make cards appear for less than Second then remove it from the game deck by use classlist property.
 opecardas array Empty.
  call for move counter and startcounthn functions.

## EvenclickonResetGame 
 if there is a click on reset icon all following will be reset:
    Move will be set to 0, star rest to three stars .the gameboard remove all card by use loop over an array that holds all cards this is Cards array and use classlist. remove, and clear for opencard array and fris1 and twic1. setTime will be reset to 0 of second and mint and invoke shuffleicons method.  
 
## Evenclickonthetheplayagin
   The function play again will be available after the function pop message execute 
   if click on the button that will reset the game and invoke shufllicons method.
##information of game for user 


* [Timer](#Timer)
* [Move](#Move)
* [Star](#Star)

## Timer
    There is setTime function to make the form of time minute and second 
    Setimout function that makes the count of time appear in the HTML Timer Element by use innerHTML
   the timer runs it dependent on if condition. if secom ==1 then the timer will start and secom it dependent on the first click to start the game.

## Move 
   In this method will show  number move for two card click 
 that dependent on the countr++ and invoke function Movecounter in machtcard method and notmachard function and  the opecards function  below  if condition to test if click was in the same cards then set result in the Move HTML element by the Move tag inner HTML on the Webpage. 

## Star
  In this method will show  number  of stars for two  after number of Movement.  
 that dependent on the countr++ and invoke function startcounthn in machtcard method and notmachcard function and in the opencards function   under if condition to test if click was in the same cards
 then set result in the star HTML element by classlist.add() on the Webpage. 


## Endgame 
  The game will end if mactchcard.lenth==16 and timer will stop and remove all matchcard with other