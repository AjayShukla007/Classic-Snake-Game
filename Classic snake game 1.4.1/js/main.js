let inputdir = {x:0,y:0};

let startSound = new Audio('assets/audio/panflute.mp3');
let moveSound = new Audio('assets/audio/fast-move.mp3');
let eatSound = new Audio('assets/audio/pow-eat.mp3');
let crashSound = new Audio('assets/audio/crash-snake.mp3');

let scoreB = document.querySelector('#score');
let btn = document.querySelectorAll('.btn1');

let startAlert = document.querySelector('#startAlert');
let blankScreen = document.querySelector('#blankScreen');
let startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click',()=>{
   startAlert.style.display = 'none';
   blankScreen.style.pointerEvents = 'none';
   blankScreen.style.opacity = 0;
   startSound.play();
});


let score = 0;
let speed = 8;
let lastpaintTime = 0;
let snakeArr = [
   {x: 13,y: 15}
   ]
food = {x: 5,y: 9};


function main(Ctime) {
   window.requestAnimationFrame(main);
   // console.log(Ctime);
   if ((Ctime-lastpaintTime)/1000 < 1/speed) {
   // console.log(Ctime);
      return;
   }
   gameEngine();
   lastpaintTime = Ctime;
};
function isCollide(snake){
   //: if snake bite itself
   for (var i = 1; i < snakeArr.length; i++) {
      if (snake[i].x === snake[0].x && snake[i].y === snake[0].y ) {
         return true;
      }
   }
   //: if snake touch the wall
   if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
      return true;
   }
} 
function gameEngine(){
   //:game over update snake and food
   if (isCollide(snakeArr)) {
      crashSound.play();
      moveSound.pause();
      inputdir = {x: 0,y: 0};
      alert('Game Over, touch anywhere to play again');
      snakeArr = [{x: 13,y: 15}];
      startSound.play();
      score = 0;
      
   }
   
   //: if food eaten
   if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
      console.log('%cEaten','color: green;');
      score += 1;
      eatSound.play();
      if (score > hiScoreVal) {
         hiScoreVal = score;
         localStorage.setItem("hiscore", JSON.stringify(hiScoreVal));
         hiScoreBox.innerHTML = `High Score <span id="scorePoint">${hiScoreVal}</span>`;
         scorePoint.style.color = 'darkgreen';
         setTimeout(()=>{
         scorePoint.style.color = 'black';
         },300);
         
      }
      snakeArr.unshift({
         x: snakeArr[0].x+inputdir.x,
         y: snakeArr[0].y+inputdir.y })
         let a = 2;
         let b = 16;
         food = {
            x: Math.round(a+ (b-a)*Math.random()), 
            y: Math.round(a+ (b-a)*Math.random())
         };
   }
   //: moving the snake
   for (let i = snakeArr.length - 2; i >= 0; i--) {
      snakeArr[i+1] = {...snakeArr[i]};
   }
   
   snakeArr[0].x += inputdir.x;
   snakeArr[0].y += inputdir.y;
   
   //: display snake food
   board.innerHTML = '';
   //: display score
   scoreB.innerHTML = `<h2>[ ${score} ]</h2>`;
   
   snakeArr.forEach((e, index)=>{
      snakeElement = document.createElement('div');
      snakeElement.style.gridRowStart = e.y;
      snakeElement.style.gridColumnStart = e.x;
      snakeElement.style.transition = '0.5s';
      
      if (index === 0) {
      snakeElement.classList.add('head')
      }else{
      snakeElement.classList.add('snake')
      }
      
      board.appendChild(snakeElement);
   });
   
      foodElement = document.createElement('div');
      foodElement.style.gridRowStart = food.y;
      foodElement.style.gridColumnStart = food.x;
      foodElement.classList.add('food')
      board.appendChild(foodElement);
}


let hiScore = localStorage.getItem('hiscore');
if (hiScore == null) {
   
   hiScoreVal = 0;
   localStorage.setItem("hiscore", JSON.stringify(hiScoreVal));
   
} else {
   
   hiScoreVal = JSON.parse(hiScore);
   hiScoreBox.innerHTML = `High Score <span id="scorePoint">${hiScore}</span>`;
}

window.requestAnimationFrame(main);

btn.forEach(btn=>{
   btn.addEventListener('click',()=>{
      inputdir = {x:0, y:1};
   // console.log(this);
      selectButtons = btn.id;
      // console.log(selectButtons);
      moveSound.play();
      startSound.pause();

   switch(selectButtons){
      
      case 'up':
      inputdir.x = 0;
      inputdir.y = -1;
      console.log('to up');
      break;
         
      case 'left':
      inputdir.x = -1;
      inputdir.y = 0;  
      console.log('to left');
      break;
         
      case 'right':
      inputdir.x = 1;
      inputdir.y = 0;
      console.log('to right');
      break;
         
      case 'down':
      inputdir.x = 0;
      inputdir.y = 1; 
      console.log('to down');
      break;
      
   //    case 'pause':
   //    console.log(snakeArr[0].y);
   //    console.log(food.y);
   //    console.log(snakeArr[0].x);
   //    console.log(food.x);
   //    break;
      
   }
   
   
   });
   
})
