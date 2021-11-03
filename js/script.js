
//variabili
const level = document.getElementById('mg-select');
const playBtn = document.getElementById('playBtn');
const start = document.querySelector('.mg-start');
const crazy = document.querySelector('.mg-crazy');
const easy = document.querySelector('.mg-easy');
const hard = document.querySelector('.mg-hard');
let nSq = null;
const bombs = [];
const N_BOMBS = 16;
let crazyCheck = false;
let easyCheck = false;
let hardCheck = false;

//Click Play
playBtn.addEventListener("click", function(){ 

  start.classList.remove('mg-active');

  if(level.value == "Crazy"){
    console.log('Crazy', level.value);

    nSq = 49;
    generateBombs(nSq);
  
    //visibilità
    easy.classList.remove('mg-active');
    hard.classList.remove('mg-active');
    crazy.classList.add('mg-active');
    if(crazyCheck === false){

      //create sq
      for(let i = 1; i <= nSq; i++){
        
        const crazySq = document.createElement('div');
        crazySq.className = 'mg-sq mg-crazy-sq';
        crazy.append(crazySq);
        crazySq.innerHTML = i;

        //sfondo blu al click
        clickBlue(crazySq);

        //check
        crazyCheck = true;

      }
    }
    
  }
  else if(level.value == "Easy"){
    console.log('Easy', level.value);
    nSq = 100;
    generateBombs(nSq);
    //visibilità
    crazy.classList.remove('mg-active');
    hard.classList.remove('mg-active');
    easy.classList.add('mg-active');
    if(easyCheck === false){
      //create sq
      for(let i = 1; i <= nSq; i++){
        const easySq = document.createElement('div');
        easySq.className = 'mg-sq mg-easy-sq';
        easy.append(easySq);
        easySq.innerHTML = i;
        
        //sfondo blu al click
        clickBlue(easySq);

        //check
        easyCheck = true;
      }
    }
    
  }
  else if(level.value == "Hard"){
    console.log('Hard', level.value);
    nSq = 81;
    generateBombs(nSq);
    //visibilità
    crazy.classList.remove('mg-active');
    easy.classList.remove('mg-active');
    hard.classList.add('mg-active');

    if(hardCheck === false){
      //create sq
      for(let i = 1; i <= nSq; i++){
        const hardSq = document.createElement('div');
        hardSq.className = 'mg-sq mg-hard-sq';
        hard.append(hardSq);
        hardSq.innerHTML = i;

        //sfondo blu al click
        clickBlue(hardSq);

        //check
        hardCheck = true;
      }
    }
    
  }

 });



 //funzione colore
 function clickBlue(div){
  div.addEventListener("click", function(){
    div.classList.add('mg-blue');
  });
 }

//funzione randomInt
function randomInt(min, max){
  return Math.floor(Math.random() * max) + min;
}

//genera bombe passando come argomento il numero di quadrati
function generateBombs(nSq){
  for(let i = 0; i <= N_BOMBS; i++){

    let bomb = randomInt(1, nSq);
    console.log(bomb);
    if(!(bombs.includes(bomb))){
      bombs.push(bomb);
      console.log(bombs);
    }

  }
}