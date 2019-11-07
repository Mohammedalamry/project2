/*
 * Create a list that holds all of your cards
 */let stars =  document.querySelector('.stars');
let starsa = [];
  let s = document.querySelectorAll('.card');
   
  let card = [...s];
   let outicon= [];
    let x;
     let poit=0;
  let count=0;
 let opencards = [];
    let listcard = document.getElementById('clik');
    let secom=0;
    let second =0;  
     let mint=0;
    

  for( let i of card ){ 
         i.classList.remove('open', 'show', 'match','change');
     
  
   }   let firs1,   
     tiwc1,card1c,card2c;
 
   
//====================================================================   

         let icons = []; 
  const cardlist = document.createElement('ul');
     cardlist.classList.add('h');
       let c =0;
     
     for(let i of card ){ 
          
            const newElement = document.createElement('li');
            cardlist.appendChild(newElement);
          let h = i.children[0];
          let cards = h.className;
          newElement.innerHTML=cards;
            newElement.classList.add('test'); 
           let cardt = cardlist.children[c].innerText; 
      
         c++;
       
         icons.push(cardt);          

         

   } 
     
//======================================================================
    
      let list= cardlist;
function shuffleicons(){                     

     let as= 0;
       icons = shuffle(icons);
     for(let icon of card){

          let carsd = icon.children[0];  
           
          carsd.className =icons[as];
          as++;

     } } 
      shuffleicons();

//=======================================================================

 function respondToTheClick(evt) { 
    
 	const h = evt.target;
        

 secom=1;
 poit++;
 	if(h.matches('li')){                                                   
        if (opencards.length<2) { 
 	                 evt.target.classList.toggle('open');
 	                 evt.target.classList.toggle('show');
              console.log('A paragraph was clicked: '+evt.target.children[0].className);}
   funopencards(h); 

  }  
 }

 let checkcard= [];             let mark =0;

//=================================================================
function funopencards(get) {
      
	       mark++;


         opencards.push(get); 
          let d=0; 
           
 
if(opencards[0]==opencards[1]){
    count++;    movecounter( );         
  startcounthn();        

               opencards=[];
           }  
      else if(opencards[0]!=opencards[1]) {
 
          firs1 = opencards[0];
          tiwc1 = opencards[1];
          if(opencards.length==2){ 
       card1c=firs1.children[0].className;                  
       card2c= tiwc1.children[0].className;
        
         carchecker();
        
        
}        }  
   

    

     
 


   
      
  
    
       
	}                
//============================================================

let jo =document.querySelectorAll('.card.open.show');
   setTimeout(function go() {
   if (secom==1) {  second++; }
   
   setTime(); 
    setTimeout(go,750); 

  
     
  },800);  
listcard.addEventListener('click', respondToTheClick); 
 let jl =document.querySelectorAll('.card.match');
  function carchecker () {    
      matchcard (card1c,card2c) ;
     notmacthacrd(card1c,card2c) ;
     popmessage();


   
     
  }  
     



//=======================================================================	

 function matchcard (firs,tiwc){                     
  
    
 
      if (firs==tiwc) {
      	
       opencards[0].removeEventListener('click', respondToTheClick);              
         opencards[0].classList.add('match');
         opencards[1].classList.add('match');
       opencards=[];
       count++;
       movecounter();
       startcounthn();
        console.log( firs+'=='+tiwc); 
      }              
          
  }

//===================================================================
  
     let chang= document.querySelector('.change');
    
    function notmacthacrd (firs,tiwc) {
       
       if(firs!=tiwc){                   

opencards[0].classList.add('change');
    opencards[1].classList.add('change'); 
        mark=0;            
 } setTimeout(function remove() {

if (firs!=tiwc) { 
       
      firs1.classList.remove('change');
       tiwc1.classList.remove('change'); 
   firs1.classList.remove('open');
   firs1.classList.remove('show');
   tiwc1.classList.remove('open');
   tiwc1.classList.remove('show'); 
           opencards=[];
       count++; 
       movecounter();
       startcounthn();
}

         },500);
     

      }
         



//=====================================================================
     let m = document.querySelector('.pop');
     let ifno=m.querySelector('.inforate'); 
     
   function popmessage(){      
    mat =document.querySelectorAll('.card.match');
  if( mat.length==16){ 
           
     m.style.display= 'flex';
     ifno.children[0].children[0].innerText=output;
     ifno.children[1].children[0].innerText=count;
     ifno.children[2].children[0].innerText=nst;
     secom=0;

for( let i of card ){ 
         i.classList.remove('open', 'show', 'match');
     
 
   }

     
     console.log("mmm");
  }   }

//========================================================================
     let counter;
  function movecounter (){
      counter = document.querySelector('.moves');
       
     counter.innerHTML=count;
       
}  
//=====================================================================
let mat;
let stm;
let nst=3;
function startcounthn(){
  
  let clchil;
      for(let d=0;starsa.length<3;d++){ 
           clchil= stars.children[d];
starsa.push(clchil);
   stm=starsa[d];       } 
 
 
 if(count==10){
  
       starsa[2].children[0].classList.remove('fa-star'); 
              nst=2;
    
 }
else if (count>12){ 
 starsa[1].children[0].classList.remove('fa-star');    

 nst=1;
    }  
else if (count==20){ 
 starsa[0].children[0].classList.remove('fa-star'); 
  nst=1;
 
} 


 

}
 

//=================================================================
  let ctimer;
  let output; 
function setTime(){                    
  
    
    
let time = document.querySelector('.Timer');

  ctimer = time.children[1];
 if( second<10 ){                             
 ctimer.innerHTML=('0'+mint+':'+'0'+second);
   }else if (second>9){  ctimer.innerHTML=('0'+mint+':'+second); }
   if(second>59){
     mint+=1;
    second=0;
     Sec1=0;
  ctimer.innerHTML=('0'+mint+':'+'0'+second);
       
}          
   if(mint>9){  
      
    ctimer.innerHTML=(mint+':'+'0'+second);       } 
    if (mint>9&&second>9){  ctimer.innerHTML=(mint+':'+second); }

   output = ctimer.innerText
   
   }
 
  

//==============================================================
let restart = document.querySelector('.restart');
restart.addEventListener('click',resttsart);
function resttsart(evt){
 mint=0; second=0;
count=0;
   let reset = evt.target;
  if(reset.matches('i')) { 
   
  for( let i of card ){ 
         i.classList.remove('open', 'show', 'match','change');
        
   } 

     //this to  aviod Erreor  when  click one card after that click on ressetbuttn
   if (opencards.length==1) {firs1=[]; tiwc1=[]; opencards=[]; }
       
ctimer.innerHTML= '0'+mint+':'+'0'+second;
secom=0;
 console.log('msg');
   
   movecounter(0);
  
if(nst<3) { 
starsa[1].children[0].classList.add('fa-star'); 
 starsa[2].children[0].classList.add('fa-star'); }
 shuffleicons();
listcard.children[0].children[0].classList.remove('.card.match');


}


} 

//===============================================================
   let play2= document.querySelector('#playagain');
    play2.addEventListener('click',playgin);
 function playgin(evt){
  mint=0; second=0;
count=0; 
 let play =evt.target;   
  if(play.matches('button')){     

   m.style.display='none';
    for( let i of card ){ 
         i.classList.remove('open', 'show', 'match');
    
   } 
ctimer.innerHTML=('0'+mint+':'+'0'+second);
secom=0;
// this just to check on the cosole.
 console.log('msg');
  opencards=[];
   movecounter(0);


 if(nst<3) {                                              
 starsa[2].children[0].classList.add('fa-star'); 
starsa[1].children[0].classList.add('fa-star'); 
}
 shuffleicons();
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
 