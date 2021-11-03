
//variabili

const mainBox = document.getElementById('container');
const level = document.getElementById('mg-select');
const playBtn = document.getElementById('playBtn');
const start = document.querySelector('.mg-start');
let nSq = null;
let nSd = null;

const bombs = [];
const N_BOMBS = 16;

let check = false;
let easyCheck = false;
let hardCheck = false;



//Click Play
playBtn.addEventListener("click", function(){ 

  mainBox.innerHTML = '';
  const grid = document.createElement('div');
  grid.className ='mg-grid';
  mainBox.append(grid);
  
  switch(level.value){
    case 'Crazy' :
      nSq = 49;
      dSq = 7;
      break;

    case 'Easy' :
      nSq = 81;
      dSq = 9;
      break;

    case 'Hard' :
      nSq = 100;
      dSq = 10;
      break;

    default :
    nSq = 49;
      break;

  } 


  //create sq
  for(let i = 1; i <= nSq; i++){
    const sq = document.createElement('div');
    sq.className ='mg-sq';
    sq.style.width = `calc(100% / ${dSq})`;
    sq.style.height = `calc(100% / ${dSq})`;
    grid.append(sq);
    sq.innerHTML = i;

    //genera bombe
    while(bombs.length < N_BOMBS){
      let bomb = randomInt(1, nSq);
      console.log('Numero estratto: ', bomb);
      if(!(bombs.includes(bomb))){
        bombs.push(bomb);
        console.log('Array bombe:', bombs);
      }
    }

    const innerNumb = sq.innerText;
    console.log(innerNumb);
    
    //sfondo blu al click
    sq.addEventListener("click", function(){
      if(bombs.includes(parseInt(innerNumb))){
        sq.classList.add('mg-red');
      }
      else{
        sq.classList.add('mg-blue');
      }

    });

      }

 });

 
//funzione randomInt
function randomInt(min, max){
  return Math.floor(Math.random() * max) + min;
}