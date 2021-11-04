


//Click Play
playBtn.addEventListener("click", function(){ 

  //variabili
  const mainBox = document.getElementById('container');
  const level = document.getElementById('mg-select');
  const playBtn = document.getElementById('playBtn');
  const start = document.querySelector('.mg-start');
  
  let nSq = null;
  let nSd = null;
  
  let bombs = [];
  const N_BOMBS = 16;
  
  const attempsList = [];
  let attemps = 0;

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
    bombs =[];
    while(bombs.length < N_BOMBS){
      let bomb = randomInt(1, nSq);
      if(!(bombs.includes(bomb))){
        bombs.push(bomb);
      }
    }
    console.log('Bomba aggiunta!!!', bombs);
    const innerNumb = parseInt(sq.innerText);

    const MAX_ATTEMPS = nSq - N_BOMBS;
    
    //sfondo blu al click
    sq.addEventListener("click", function(){
      if(bombs.includes(innerNumb)){
        endGame();
      }
      else{
        sq.classList.add('mg-blue');
        if(!(attempsList.includes(innerNumb))){
          attemps++;
          attempsList.push(innerNumb);
          console.log(attemps);
        }

      }

      if(attemps === MAX_ATTEMPS){
        endGame();
      }

    });

  }

  //function endgame
  function endGame(){
    const sqAll = document.getElementsByClassName('mg-sq');
    for(let i = 0; i < sqAll.length; i++){
        if(bombs.includes(i + 1)){
        sqAll[i].classList.add('mg-red');
        }
      sqAll[i].style.pointerEvents = 'none';
    }
  }

 });

 
//funzione randomInt
function randomInt(min, max){
  return Math.floor(Math.random() * max) + min;
}

