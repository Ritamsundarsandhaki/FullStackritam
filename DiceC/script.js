var name1 = document.getElementById("name1");
var name2 = document.getElementById("name2");
var start = document.getElementById("Start");
var restrat = document.getElementById("Restart");
var roll1 = document.getElementById("Roll-btn1");
var roll2 = document.getElementById("Roll-btn2");
var player1 = document.getElementById("player1-h1");
var player2 = document.getElementById("player2-h1")
var player1samp = document.getElementById("player1-samp");
var player2samp = document.getElementById("player2-samp");
var player1Img = document.getElementById("player1Img");
var player2Img = document.getElementById("player2Img");
var p1Score = document.getElementById("p1-score");
var p2Score = document.getElementById("p2-score");
let scoreValue1=0;
var scoreValue2 =0;


function ld(){
  start.disabled=true;
  
}

function el(){
    // document.getElementById("Strat").disabble=false;
   start.disabled=false;
   setTimeout(ld,4000);
   
}

function set() {
  if (name1.value!==''&&name2.value!=='') {
    start.disabled=false;
    console.log(name2.value);
    
  } else {
    start.disabled=true;
    console.log("no");
    return;
  }
}
function gamestart()
{
 start.disabled=true;
 let p = Math.ceil( Math.random()*6);
 
 console.log(p);
  player1.innerHTML=name1.value;
  player2.innerHTML=name2.value;
  player1samp.innerHTML=name1.value;
  player2samp.innerHTML=name2.value;
  roll1.disabled=false;
  restrat.disabled=false;
  
}

function StartingGame(){
  let p = Math.ceil( Math.random()*6);

  if(p==1)
  {
     player1Img.src="dice1.jpg"
  }
  else if(p==2)
  {
     player1Img.src="dice2.jpg"
  }
  else if(p==3)
  {
     player1Img.src="dice3.jpg"
  }
  else if(p==4)
  {
     player1Img.src="dice4.jpg"
  }
  else if(p==5)
  {
     player1Img.src="dice5.jpg"
  }
  else if(p==6)
  {
     player1Img.src="dice6.jpg"
  }
  else
  {
    
    
  }
  console.log(p);
  if(p+scoreValue1<=50){
   
  }else{
   roll1.disabled=true;
   roll2.disabled=false;
   return 2;
  }
  scoreValue1 =scoreValue1+p;

  p1Score.innerHTML=scoreValue1;
  if(scoreValue1==50)
  {
   
   alert("🌟🌟🌟🌟🌟🌟🌟🌟player 1 is win 🌟🌟🌟🌟🌟🌟🌟🌟",name1)
   reset();
  }
  if(p==6)
  {
   roll1.disabled=true;
   roll2.disabled=false;
   return 2;
  }





  // player1Img.src="dice2.jpg"
}
function e(){
   let p = Math.ceil( Math.random()*6);
  if(p==1)
  {
     player2Img.src="dice1.jpg"
  }else if(p==2)
  {
     player2Img.src="dice2.jpg"
  }else if(p==3)
  {
     player2Img.src="dice3.jpg"
  }else if(p==4)
  {
     player2Img.src="dice4.jpg"
  }else if(p==5)
  {
     player2Img.src="dice5.jpg"
  }else if(p==6)
  {
     player2Img.src="dice6.jpg"
  }else{
    
    
  }
  if(p+scoreValue2<=50){
   
  }else{
   roll2.disabled=true;
   roll1.disabled=false;
   return 2;
  }
  scoreValue2 =scoreValue2+p;

  p2Score.innerHTML=scoreValue2;
  if(scoreValue2==50)
   {
    alert("🌟🌟🌟🌟🌟🌟🌟🌟player 2 is win 🌟🌟🌟🌟🌟🌟🌟🌟");
    reset();
   }
  if(p==6)
   {
      roll2.disabled=true;
   roll1.disabled=false;
    return 2;
   }

}

// function k()
// {
 
//   if(name2!=='')
//   {
//     console.log("yes");
//   }
//   else{
//     console.log("no");
//   }
// }
name1.addEventListener('input',set);
name2.addEventListener('input',set);
function reset()
{
   console.log("hi");
player1.innerHTML="Player 1";
player2.innerHTML="player 2";
player1samp.innerHTML="player1"
player2samp.innerHTML="player2"
p1Score.innerHTML="0";
p2Score.innerHTML="0";
restrat.disabled=true;

}


