# Memory Game Project
 This is a project that is designed and represented by using HTML Hypertext language and CSS to form a webPage and javascript to make webpage interactive with the user who wants to play a game and it's a challenge for people who want to be a web developer.
there are two Essential aspects of Memory game project:  
first is static Side of this project this is represented by HTML and CSS 
the Second its interactive side that is  represented by javascript I  
I explained the steps to start and build .ect to run the project. in the section that is below the Heading of this page.
## start to get project
  I have download the copy of the project from Udacity classroom 
  that contains the static part files and interactive part file that is to start to build the interactive file and to complete static files that need to run the application. this step as help from audacity because i have joined in web development Nanodgree from Udacity instead of building applications from scratch point.   

## pre requirements for project.
* First I create an account on GitHub to take the clone of MemoryGame project on my desktop.
* second I install web browsers such as chrome to run the project.
* third  I install Editor such as Sublime text 3 to open the files that include in this project and for writing codes to run the application successfully on the web browser.  

## start step open files of game and take a look in the files.  
   First, I have opened Sublime text 3 on then I opened the files of the memory Game project in the editor. then I have take look at what is inside these files to understand and plan for a code that I need to run the project.
Socond I have opened CSS and HTML files these are the static side of the project then i have opened the js file this is the interactive side of the project. inside it, some comments are tell me how to start coding for the game as Guide. to understood and following them to start coding steps. 

## Coding steps
under this topic from the start to the run step of game to End game. 

## Display card on Game Boared  
in this first step, I learn how to connect HTML and CSS Files with Javascript
file to make the web page interactive through the Document Object Model - DOM). 
#### steps perform this task   
 * First i creat two varaiblies  **Selectcard and card** with their values. 
  **Selectcard** to get cards class from HTML file by use _querySelectorAll method_. 
   **card** to store**Selectcard** in the array so that _querySelectorAll method_ return collection of THML. because i need loop over each card to show and open. so that i need to store them at arry.   
 * Second i creat for of loop .
 * Thrird I use _The classList Property-
 with _ add property_ to add th classes that are show and open each card in the _Gameboard_. 
  ####This is the code to preform Dispaly card on the Game board
  ```
     let Selectcards = document.querySelectorAll('.card'); 
     let card = [...Selectcards];
     for( let i of card ){ 
         i.classList.add('open', 'show', 'match','change');
 }  


     ```

## shuffl cards randomly 

#### steps perform this task 
* First creat unored list to hold all crads.
* scond creat an array that is **icons** to push  all cards inside it 
* thrid pass **icons** array to_shuffle Method_ 
* store return random varablie from shuffle arry in the **icons** arry
* final assign this values of **icons** array to the **card**array. 

## enevt clik on the game

* [Event click on the cards](#Eventclickonthecards)
* [Even clickon Reset Game](#EvenclickonResetGame)
* [Evenclickonthetheplayagin](#Evenclickonthetheplayagin)

 
## Event click on the cards
  befor I do this steps I roveme all carsd from gameboard.
#### steps perform this task 
    Frist add Event Listener to the target cards.  
    there is if condition(opencard.lengh<2 ) that prevents user from click more than two cards.
when the user stars click on the card the first card will open and set the value of cards click to the parameter at funopencards(get)
##  funopencards method
  create an array to push cards that are clicked. 
  if condition to check .if users click on the same card or different cards.
  if the cards are different and `opencard.lengh==2`  then will be ready to be set in the comparing methods that are _ matchcard Method, notmatchcard Method_ and save the class name of each card in card1classname,card1classname.
  others the opencards array will be empty.

##  matchcard Method
  this method will check if the class name of the first card == className of the Second cards. `if(firs==twic)`
  that will show match cards on the game deck by use _classlist property_.
 opencards array Empty to be ready to compare new click cards.
 . invoke for movecounter and startcounthn functions to count the Move and the star rate for the user.
## notmatchcard Method 
 This method will check if the class name of the first card != className of second cards.
 `if firs!=twic ` that will show cards in red card color there is a Setimout method to make cards appear for less than Second then remove it from the game deck by use _classlist property_.
 opecardas array Empty to be ready to compare new click cards.
invoke for movecounter and startcounthn functions to count the Move and the star rate for user.

## Even clickon Reset Game 
 if there is a click on reset icon all following will be reset:
    Move will be set to 0, star rest to three stars .the gameboard remove all card by use loop over an array that holds all cards this is **card** array and use classlist. remove, and clear for opencard array and Firstcard and Secondcard. setTime will be reset to 0 of second and mint and invoke shuffleicons method.  
 
## Event clickon on the playagin button
   The function play again will be available after the function pop message execute.
   if click on the button that will reset the game.
##information of game for user 


* [Timer](#Timer)
* [Move](#Move)
* [Star](#Star)

## Timer
    There is setTime function to make the form of time minute and second 
    Setimout function that makes the count of time appear in the HTML Timer Element by use innerHTML
   the timer runs it dependent on if condition. if secom ==1 then the timer will start and secom it dependent on the first click to start the game.

## Move 
   In this method will show number move for two card click 
 that dependent on the countr++ and invoke function Movecounter in machtcard method and notmachard function and  the opecards function  below  if condition to test if click was in the same cards then set result in the Move HTML element by the Move tag inner HTML on the Webpage. 

## Star
  In this method will show  number  of stars for two  after number of Movement.  
 that dependent on the countr++ and invoke function startcounthn in machtcard method and notmachcard function. 
Set result in the star HTML element by classlist.add() on the Webpage. 
## pop messsage method 
   This  method to pop up information such as Time,rate of star
   and number of movemt. 
   set and show option buttioin to playaign.

## Endgame 
  The game will end if mactchcard.lenth==16 and timer will stop and remove all matchcard with other