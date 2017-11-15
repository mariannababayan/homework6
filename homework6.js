//Diamond with 'for' loop

const space = function (spc) {
 let str = '';
       for(let i=0;i<spc;i++) {
         str =   ' ' + str ;
       }
       return str;
   }
const star = function (star){
   let str = '';
   for(let i=0;i<star;i=i+1) {
       str = '@'  + str;
   }
   return str;
};
const run = function (spc,str){
   console.log (space(spc) + star(str));
};

const run2 = function(n){
   if(n%2===0)
   {
       n=n+1;
   }
   let a=1;
   for(let i=1;i<=n/2+1;i++)
   {
       run(n/2-i,a);
       a=a+2;
   }
   let b = n-2;
   for(let i=1;i<=n/2+1;i=i+1)
   {
       run(i,b);
       b=b-2;
   }

};

run2(9);


//Diamond with recursion
const func = function(x,y){
    if (x%2===0){
        x = x+1;
    }
    const firstLine = function(num,y){
            if(num<=0){
                return "";
            }
            return y + firstLine(num-1,y);
    };
    const nested = function(space,num1,line){

        if (line > x){
            return "";
       }

       console.log(firstLine(space," ") + firstLine(num1, y));
       if(line <= (x-1)/2){
            nested(space-1,num1+2,line+1);

       }else{

        nested(space+1,num1-2,line+1);

       }

    };

    nested((x-1)/2,1,1);
};
func(4,"@");




//TicTacToe

const player = 'X';
const computer = 'O';

const board = [
  ['x', ' ', 'o'],
  [' ', ' ', ' '],
  [' ', ' ', ' ',]
];



const nextMove = function(board, isX) {
  for (let i = 0; i < board.length; i++) {
    let nestedBoard = board[i];
    for (let j = 0; j < nestedBoard.length; j++) {
      if (nestedBoard[j] === '') {
        return [i,j];
      }
    }
  }
};

const makeMove = function(board, location, isX) {
    if((location[0] === 0 || location[0] === 1 || location[0] === 2) && (location[1] === 0 ||
      location[1] === 1 || location[1] === 2)) {
      if(isX) {
        board[location[0]][location[1]] = 'x';
      } else {
        board[location[0]][location [1]] = 'o';
      }
      return 0;
    }
    return -1;
  };



const findWinner = function(){
  //horizontal
  for(let i = 0; i = board.length; i++){
    if (board[i][0] !== ' ' && board[i][0] === board [i][1] === board[i][2]) {
      return board[i][0]
    }
  }
}
  //vertical
  for(let j = 0; j = board.length; j++){
    if (board[j][0] !== ' ' && board[j][0] === board [j][1] === board[j][2]) {
      return board[j][0]
    }
  }

  //diagonal
    if (board[0][0] !== ' ' && board[1][1] !== ' ' && board[2][2] !== ' ' &&
         board[0][0] === board [1][1] === board[2][2]) {
      return board[0][0]
}
    if (board[0][2] !== ' ' && board[1][1] !== ' ' && board[2][0] !== ' ' &&
         board[0][2]===board[1][1]===board[2][0]){
      return board[0][2]
    }

    let empty = true;
for(let j = 0; j = board.length; j++) {
  for(let j = 0; j = board.length; j++){
     if (board[1][1] === " "){
       return false;
     }
  }
}

return null;


const canvas = document.getElementById('tictac');
const tictac = canvas.getContext('2d');

  const backImage1 = new Image();
  backImage1.src = 'http://www.pharmacy-tech-test.com/images/alligation_empty_grid.jpg';


const theLines = function (strokeStyle) {
const lineStart = 5;
const lineLenght = canvas.width - 7;
tictac.strokeStyle = strokeStyle;
tictac.beginPath();
for (let y = 0; y <= 3; y++) {
tictac.moveTo(lineStart, y * canvas.width / 3);
tictac.lineTo(lineLenght, y * canvas.width / 3);
}
for (let x = 0; x <= 3; x++) {
tictac.moveTo(x * canvas.width / 3, lineStart);
tictac.lineTo(x * canvas.width / 3, lineLenght);
}
tictac.stroke();
}

const drawX = function(x, y) {
tictac.strokeStyle = "#ceb5ce";
tictac.beginPath();
tictac.moveTo(x + 60, y + 60);
tictac.lineTo(x + canvas.width / 3 - 60, y + canvas.width / 3 - 60);
tictac.moveTo(x + 60, y + canvas.width / 3 - 60);
tictac.lineTo(x + canvas.width / 3 - 60, y + 60);
tictac.stroke();
};


const drawO = function(x, y) {
tictac.strokeStyle = "#ede1e4";
tictac.beginPath();
tictac.arc(x + (0.5 * canvas.width / 3),  y + (0.5 * canvas.width / 3), (canvas.width / 3 - 120) / 2, 0, 2 * Math.PI);
tictac.stroke();
};

const drawLines = function(){
    tictac.drawImage(backImage1, 0, 0,canvas.width,canvas.height);
};
const drawX = function(x,y){
  tictac.drawImage(backImage, x, y,180,180);
};
const drawO = function(x,y){
  tictac.drawImage(zero, x, y,180,180);
};
backImage1.onload = drawLines;


const first = function() {
  if(!player) {
    const following = nextMove(board);
    if(makeMove(board,following) === 0) {
      makeMove(board,following;
      drawO(following[1] * (canvas.width / 3),following[0] * (canvas.width / 3));
    }
  }
  player = !player;

};


first()
let theWinner = false;
let theFirst = false;
canvas.addEventListener('mousedown', function(e) {
  if(board[Math.floor(e.offsetY/(canvas.width / 3))][Math.floor(e.offsetX/(canvas.width / 3))] === ' ') {
    board[Math.floor(e.offsetY/(canvas.width / 3))][Math.floor(e.offsetX/(canvas.width / 3))] = 'x';
    drawX(Math.floor(e.offsetX/(canvas.width / 3)) * (canvas.width / 3),
      Math.floor(e.offsetY/(canvas.width / 3)) * (canvas.width / 3));
    theFirst = false;
    isPlayer = false;
  }
  if(theWinner) {
    for(let i = 0; i < board.length; i++) {
      for(let j = 0; j < board.length; j++) {
        board[i][j] = ' ';
      }
    };

    tictac.clearRect(0, 0, canvas.width, canvas.height);
    drawLines();
    theWinner = false;
    player = !player;
    first();
    isFirst = true;
  }
  if(findWinner(board)) {
    theWinner = true;
  }
});


canvas.addEventListener('mouseup', function(e) {
  if(!theFirst && !theWinner && !player) {
    player = true;
    const next = nextMove(board);
    if(makeMove(board, next) === 0) {
      makeMove(board, next);
      drawO(next[1] * (canvas.width / 3), next[0] * (canvas.width / 3));
    }
    if(findWinner(board)) {
      theWinner = true;
    }
  }
});