 
let stars =  document.querySelector('.stars'); //this is to get HTML collection of stars.
let starsa = []; //this is an array to store the star HTML collection. 
let Selectcards = document.querySelectorAll('.card'); //this is to get HTML collection cards.   
let card = [...Selectcards];//this array used to control HTML collection cards.
let count=0;//this is use to count move of user. 
let opencards = [];//this is use to store opencards after click for matches.
let listcard = document.getElementById('clik');
let TimeControl=0; // this is use to control of timer start.
let second =0;  //this is to count the Second in settimer fucnction.
let mint=0; //this is to count the mint in settimer fucnction.
 //these varablies to use in matched to store cards and classname of cards.  
 let Firstcard,Secondcard,card1classname,card2classname;
 //=================================================================
     //revome all the opens and show cards from Gameboord.
  for( let i of card ){ 
         i.classList.remove('open', 'show', 'match','change');
 }  


//====================================================================   
     // creat list that holds all cards then push them into icon arry 
         let icons = []; 
  const cardlist = document.createElement('ul');
      
       let c =0;
     
     for(let i of card ){ 
          
            const newElement = document.createElement('li');
            cardlist.appendChild(newElement);
          let itemscards = i.children[0];
          let cards = itemscards.className;
          newElement.innerHTML=cards;
            newElement.classList.add('test'); 
           let cardt = cardlist.children[c].innerText; 
      
         c++;
       
         icons.push(cardt);          
} 
     
//======================================================================
   /**
* @description this Method use it assaing  the random card that come from shuffl arry to card arry 
*/  
 function shuffleicons(){                     

     let as= 0;
       icons = shuffle(icons);
     for( let icon of card){

         let cards = icon.children[0];  
           
          cards.className =icons[as];
          as++;

}   } 
      shuffleicons();

//=======================================================================
   
 /**
* @description tthis Method is used  to respons for the user when click on the cards.
*/  

 function respondToTheClick(evt) { 
    
  const h = evt.target;

 TimeControl=1;

  if(h.matches('li')){                                                   
        if (opencards.length<2) { 
        evt.target.classList.toggle('open');
        evt.target.classList.toggle('show');
 }
   funopencards(h); 

}  
 }

 
//=================================================================
 //

  /**
* @description used to push clicked cards into opencards arry and prevent user from selecting the Same cards 
    
* @param {array} get  
*/   
function funopencards(get) {
   opencards.push(get); 
          
if(opencards[0]==opencards[1]){
    opencards=[];
 }   else if(opencards[0]!=opencards[1]&&opencards.length==2) {
 
          Firstcard = opencards[0];
          Secondcard = opencards[1];
        
       card1classname=Firstcard.children[0].className;                  
       card2classname= Secondcard.children[0].className;
        
      carchecker();       
       }  
  
           
  }                
//============================================================


     setTimeout(function go() {
   if (TimeControl==1) {  second++; }
   
   setTime(); 
    setTimeout(go,750); 
 },800);  

listcard.addEventListener('click', respondToTheClick); 
   function carchecker () {    
      matchcard (card1classname,card2classname) ;
     notmacthacrd(card1classname,card2classname) ;
     popmessage();   
  }  
     



//======================================================================= 
 
/**
* @description this is method to show matched card in game Board.
  @param {string  }  firs this is Classname of Firstcard. 
  @param {string }  tiwc this is Classname of Secondcard.
*/ 
 function matchcard (firs,tiwc){                     
  
      if (firs==tiwc) {
        
       opencards[0].removeEventListener('click', respondToTheClick);              
         opencards[0].classList.add('match');
         opencards[1].classList.add('match');
       opencards=[];
       count++;
       movecounter();
       startcounthn();
        
      }              
          
  }

//===================================================================
/**
*@description this fuction is used to remove all not matched cards in the game baord.
*@param {string }  firs this is Classname of Firstcard.
*@param {string }  tiwc this is Classname of Secondcard.
*/ 
    //
    function notmacthacrd (firs,tiwc) {
       
       if(firs!=tiwc){                   
 opencards[0].classList.add('change');
    opencards[1].classList.add('change'); 
                    
} 
  setTimeout(function remove() {

if (firs!=tiwc) { 
     Firstcard.classList.remove('change');
    Secondcard.classList.remove('change'); 
  Firstcard.classList.remove('open');
  Firstcard.classList.remove('show');
   Secondcard.classList.remove('open');
   Secondcard.classList.remove('show'); 
           opencards=[];
       count++; 
       movecounter();
       startcounthn();
 }

},500);
        }
         



//=====================================================================
     //these variables are used to control in the  pop message when user win the game 
     let matcards;
     let showmessag = document.querySelector('.pop');
     let ifno=showmessag.querySelector('.inforate'); 
  
    /**
* @description Method to show for user informaitin after winng in game such as time and rate of star ,Timer and give him optino if he want play again. 
*/ 
    function popmessage(){ 

    matcards =document.querySelectorAll('.card.match');
  if( matcards.length==16){ 
           
    showmessag.style.display= 'flex';
     ifno.children[0].children[0].innerText= outpuTimer;
     ifno.children[1].children[0].innerText=count;
     ifno.children[2].children[0].innerText=countstar;
     TimeControl=0;

for( let i of card ){ 
         i.classList.remove('open', 'show', 'match');
 }

     
     console.log("mmm");
  }   }

//========================================================================
    //

    /**
* @description this fuction to count step moves when user click on two cards  .
*/ 
     let counter;
  function movecounter (){
      counter = document.querySelector('.moves');
       
     counter.innerHTML=count;
       
}  
//=====================================================================

 //this varaible use to control of the number of star 
let countstar=3;
 
   /**
* @description this method use to decrease the number of star and remove srtar.
*/ 
function startcounthn(){
  
  let getstars;
      for(let d=0;starsa.length<3;d++){ 
          getstars= stars.children[d];
starsa.push(getstars);
          } 
 
 
 if(count==10){
  
       starsa[2].children[0].classList.remove('fa-star'); 
              countstar=2;
    
 }else if (count>12){ 
 starsa[1].children[0].classList.remove('fa-star');    

 countstar=1;
}  else if (count==20){ 
 starsa[0].children[0].classList.remove('fa-star'); 
 countstar=1;
 
}   

}
 

//=================================================================
    // this variable use to set time when the game started by user click.
  let ctimer;

  //this varaible to set final time when pop message appear.
  let  outpuTimer; 

  
    /**
* @description  this method use to Form the Timer .
*/ 
 
function setTime(){                    
  
    
    
let time = document.querySelector('.Timer');

  ctimer = time.children[1];
 if( second<10 ){                             
 ctimer.innerHTML=('0'+mint+':'+'0'+second);
 }else if (second>9){  
  ctimer.innerHTML=('0'+mint+':'+second); 
 }
   if(second>59){
     mint+=1;
    second=0;
     
  ctimer.innerHTML=('0'+mint+':'+'0'+second);
       
}          
   if(mint>9){  
      
    ctimer.innerHTML=(mint+':'+'0'+second);       

} 
    if (mint>9&&second>9){  ctimer.innerHTML=(mint+':'+second); }

   outpuTimer = ctimer.innerText;
   
   }
 
  

//==============================================================
 //this varaible represent restart icon and use it with event click. 
let restart = document.querySelector('.restart');
restart.addEventListener('click',resttsart);

/**
 * @descriptionthis function is used to restart the game and respons for the click on restart icon.
*/ 
  
function resttsart(evt){
 mint=0; second=0;
count=0;
   let reset = evt.target;
  if(reset.matches('i')) { 
   
  for( let i of card ){ 
         i.classList.remove('open', 'show', 'match','change');
        
   } 

     //this to  aviod Erreor  when  click one card after that click on ressetbuttn
   if (opencards.length==1) {Firstcard=[]; Secondcard=[]; opencards=[]; }
 //this is use form time after click on restart icon     
ctimer.innerHTML= '0'+mint+':'+'0'+second;
TimeControl=0;
//this is use to check in the console panle just
 console.log('msg');
   //this is to set user move to 0 
   movecounter(0);

 //rest the nubember of star to 3 star 
if(countstar<3) { 
starsa[1].children[0].classList.add('fa-star'); 
 starsa[2].children[0].classList.add('fa-star'); }

 //invoke shufflle method 
 shuffleicons();

//to remove all macht card when the user click restart icon
listcard.children[0].children[0].classList.remove('.card.match');


}


} 

//===============================================================
////this variable represents a button in the pop message to its className and use it with event click. 
   let play2= document.querySelector('#playagain');
    play2.addEventListener('click',playgin);
        /**
* @description this method use to response to button click  after user winning at Memory Game  user and he want to play again .     
*/ 
  
 function playgin(evt){
  mint=0; second=0;
count=0; 
 let play =evt.target;   
  if(play.matches('button')){     

  showmessag.style.display='none';
   //remove  all match cards and 
    for( let i of card ){ 
  i.classList.remove('open', 'show', 'match');
} 
 //Reset time to 00:00 and stop Timer
ctimer.innerHTML=('0'+mint+':'+'0'+second);
TimeControl=0;
// this just to check on the cosole.
  console.log('msg');
  //clear opencards array of match card
  opencards=[];
  //reset Move of user to 0  
  movecounter(0);

//rest the nubember of star to 3 star
 if(countstar<3) {                                              
 starsa[2].children[0].classList.add('fa-star'); 
starsa[1].children[0].classList.add('fa-star'); 
}
//invoke shufflle method 
 shuffleicons();

 //to remove all macht card when the user click playainbutton
listcard.children[0].children[0].classList.remove('.card.match');


  }

 }
  
//=================================================================
    var msg = 'Hello World';
console.log(msg); 
  /* const sm = = s.map((s)=>{
     return s.s 

   });*/
    
 

   
 
   

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
 