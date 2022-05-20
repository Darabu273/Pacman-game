var currPlayer;
var context;
let pacman;
let cherieInterval;
let arrayOfGhost;
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;

var interval;
let cherry = new Image();
cherry.src = "photos/candy/cherry.png";
let foodYellow = new Image();
foodYellow.src = "photos/dot/yellowDot_new.png";
let wall = new Image();
wall.src = "photos/other/brickWall.jpg";

let poison = new Image();
poison.src = "photos/fonctionality1/poison.png";
let lifeplus = new Image();
lifeplus.src = "photos/fonctionality1/life+.png";
let mistery = new Image();
mistery.src = "photos/fonctionality1/mystery.png";
let slowMotion = new Image();
slowMotion.src = "photos/fonctionality2/stopwatch1.png";
let clockWatchEffect = new Image();
clockWatchEffect.src = "photos/fonctionality3-Bonus/sand-timer.png";

let pacmanRotation = 1;
let speed = 1; //speed of the pacman
let normalGhost = new Image();
normalGhost.src = "photos/ghost/ghostGreen.png";

const gameOverSound = new Audio("sounds/gameOver.wav");
const gameBegin = new Audio("sounds/gameWin.wav");
const cheriesound = new Audio("sounds/power_dot.wav");
const waka = new Audio("sounds/waka.wav");
const queens = new Audio("sounds/queenMusicFinal.wav");
const stopwatchSound = new Audio("sounds/stopwatchSound.wav");
const lifeplusSound = new Audio("sounds/lifeplusSound.wav");
const acidSound = new Audio("sounds/acidSound.wav");
const sweetIcyTowerSound = new Audio("sounds/SweetSound.wav");
const fiveSecondSound = new Audio("sounds/soundEffectTime.wav");
const losePointsIcyTowerSound = new Audio("sounds/losePointsSound.wav");
const hurryUpIcyTowerSound = new Audio("sounds/hurryUpSound.wav");
const gameOverIcyTowerSound = new Audio("sounds/gameOverSound.wav");
const squaresize = 30;
const squaresizestr = "30";

var howFastAreTheGhost = 400;
let flagiscaught = false;
let flagIsEaten;

$(document).ready(function () {
  context = canvas.getContext("2d");
  //Start();
});

class Pacman {
  constructor() {
    this.lives = 5;
    interval = setInterval(UpdatePosition, 150);
    this.food_eaten = 0;
  }
}

class Cherry {
  constructor(i, j, whatToPutwhenGhostContinueToTheNextStep) {
    this.i = i;
    this.j = j;
    this.whatToPutwhenGhostContinueToTheNextStep =
      whatToPutwhenGhostContinueToTheNextStep;
    this.prev;
  }
  setwhatToPutwhenGhostContinueToTheNextStep(numb) {
    this.whatToPutwhenGhostContinueToTheNextStep = numb;
  }
  getwhatToPutwhenGhostContinueToTheNextStep() {
    return this.whatToPutwhenGhostContinueToTheNextStep;
  }
  geti() {
    return this.i;
  }
  getj() {
    return this.i;
  }
}

class ghost {
  constructor(i, j, whatToPutwhenGhostContinueToTheNextStep) {
    this.i = i;
    this.j = j;
    this.whatToPutwhenGhostContinueToTheNextStep =
      whatToPutwhenGhostContinueToTheNextStep;
    this.prev;
  }
  setwhatToPutwhenGhostContinueToTheNextStep(numb) {
    this.whatToPutwhenGhostContinueToTheNextStep = numb;
  }
  getwhatToPutwhenGhostContinueToTheNextStep() {
    return this.whatToPutwhenGhostContinueToTheNextStep;
  }
  geti() {
    return this.i;
  }
  getj() {
    return this.i;
  }
}
//0 passage
//1 small food
//2 pacman
//3 medium food
//4 wall
//5 big food
//6 cherry
//7 ghost
//8 func1 - life+
//9 func1 - poison
//10 func1 - mistery
//11 func2 - slowmotion ghost
//12 func3 - time 5sec bonus

function Start() {
  pacman = new Pacman();
  cherie = new Cherry();
  flagIsEaten = 0;
  cherie.i = 9;
  cherie.j = 9;
  pacman.food_eaten = 0;
  PacmanImagesArray = loadPacmanImagesArray();
  LifeImagesArray = loadLifeImagesArray();
  //changeLife();
  board = new Array();
  score = 0;
  pac_color = "yellow";
  var cnt = 100;
  var food_remain = Math.round(howMuchFoodIwant * 0.6);
  var pacman_remain = 1;
  start_time = new Date();
  for (var i = 0; i < 20; i++) {
    board[i] = new Array();
    for (var j = 0; j < 20; j++) {
      if (
        (j == 3 && i == 5) ||
        (j == 3 && i == 6) ||
        (j == 3 && i == 7) ||
        (j == 3 && i == 8) ||
        (j == 3 && i == 11) ||
        (j == 3 && i == 12) ||
        (j == 3 && i == 13) ||
        (j == 3 && i == 14) ||
        (j == 3 && i == 16) ||
        (j == 16 && i == 3) ||
        (j == 16 && i == 5) ||
        (j == 16 && i == 6) ||
        (j == 16 && i == 7) ||
        (j == 16 && i == 8) ||
        (j == 16 && i == 11) ||
        (j == 16 && i == 12) ||
        (j == 16 && i == 13) ||
        (j == 16 && i == 14) ||
        (j == 16 && i == 16) ||
        (j == 6 && i == 6) ||
        (j == 6 && i == 7) ||
        (j == 6 && i == 8) ||
        // (j == 6 && i == 9) ||
        // (j == 6 && i == 10) ||
        (j == 6 && i == 11) ||
        (j == 6 && i == 12) ||
        (j == 6 && i == 13) ||
        (j == 6 && i == 14) ||
        (j == 13 && i == 6) ||
        (j == 13 && i == 7) ||
        (j == 13 && i == 8) ||
        // (j == 13 && i == 9) ||
        // (j == 13 && i == 10) ||
        (j == 13 && i == 11) ||
        (j == 13 && i == 12) ||
        (j == 13 && i == 13) ||
        (j == 13 && i == 14) ||
        (i == 6 && j == 7) ||
        (i == 6 && j == 12) ||
        (i == 14 && j == 7) ||
        (i == 6 && j == 8) ||
        (i == 6 && j == 11) ||
        (i == 14 && j == 8) ||
        (i == 14 && j == 11) ||
        (i == 14 && j == 12) ||
        (i == 3 && j == 3) ||
        (i == 3 && j == 4) ||
        (i == 3 && j == 5) ||
        (i == 3 && j == 6) ||
        (i == 3 && j == 7) ||
        (i == 3 && j == 8) ||
        (i == 3 && j == 11) ||
        (i == 3 && j == 12) ||
        (i == 3 && j == 13) ||
        (i == 3 && j == 14) ||
        (i == 3 && j == 15) ||
        (i == 3 && j == 16) ||
        (i == 16 && j == 3) ||
        (i == 16 && j == 4) ||
        (i == 16 && j == 5) ||
        (i == 16 && j == 6) ||
        (i == 16 && j == 7) ||
        (i == 16 && j == 8) ||
        (i == 16 && j == 11) ||
        (i == 16 && j == 12) ||
        (i == 16 && j == 13) ||
        (i == 16 && j == 14) ||
        (i == 16 && j == 15) ||
        (i == 16 && j == 16) ||
        i == 0 ||
        j == 0 ||
        i == 19 ||
        j == 19
      ) {
        board[i][j] = 4; //wall
      } else {
        board[i][j] = 0;
      }
    }
  }

  board[9][9] = 6;
  pacInit = findRandomEmptyCell(board);
  pacman.i = pacInit[0];
  pacman.j = pacInit[1];
  board[pacman.i][pacman.j] = 2; //pacman

  //small food
  createObjectOnBoard(board, 1, Math.round(howMuchFoodIwant * 0.6));
  //medium food
  createObjectOnBoard(board, 3, Math.round(howMuchFoodIwant * 0.3));
  //big food
  createObjectOnBoard(board, 5, Math.round(howMuchFoodIwant * 0.1));

  //func1
  createObjectOnBoard(board, 8, 2); //life+
  createObjectOnBoard(board, 9, 2); //poison
  createObjectOnBoard(board, 10, 2); //mistery

  //func2
  createObjectOnBoard(board, 11, 2);

  //func3-bonus
  createObjectOnBoard(board, 12, 2);

  createGhostArmy(howMuchGhostIWant);

  while (food_remain > 0) {
    var emptyCell = findRandomEmptyCell(board);
    board[emptyCell[0]][emptyCell[1]] = 1;
    food_remain--;
  }

  //create 4 ghost
  keysDown = {};
  addEventListener(
    "keydown",
    function (e) {
      if (
        e.keyCode == goLeft ||
        e.keyCode == goUP ||
        e.keyCode == goRight ||
        e.keyCode == goDowm
      ) {
        e.preventDefault();
      }
      keysDown[e.keyCode] = true;
    },
    false
  );
  addEventListener(
    "keyup",
    function (e) {
      keysDown[e.keyCode] = false;
    },
    false
  );
  monsterTime = Date.now();
  gameBegin.play();
  cherieInterval = setInterval(updateCherryPosition, 1300);
}

function createGhostArmy(numb) {
  if (numb == 1) {
    arrayOfGhost = new Array();
    let startingPoint1 = [1, 1];
    board[startingPoint1[0]][startingPoint1[1]] = 7;
    ghost1 = new ghost();
    ghost1.i = startingPoint1[0];
    ghost1.j = startingPoint1[1];
    ghost1.defaulti = startingPoint1[0];
    ghost1.defaultj = startingPoint1[1];
    ghost1.setwhatToPutwhenGhostContinueToTheNextStep(0);
    arrayOfGhost.push(ghost1);
  } else if (numb == 2) {
    arrayOfGhost = new Array();
    let startingPoint1 = [1, 1];
    board[startingPoint1[0]][startingPoint1[1]] = 7;
    let startingPoint2 = [18, 18];
    board[startingPoint2[0]][startingPoint2[1]] = 7;

    ghost1 = new ghost();
    ghost1.i = startingPoint1[0];
    ghost1.j = startingPoint1[1];
    ghost1.defaulti = startingPoint1[0];
    ghost1.defaultj = startingPoint1[1];
    ghost1.setwhatToPutwhenGhostContinueToTheNextStep(0);
    ghost2 = new ghost();
    ghost2.i = startingPoint2[0];
    ghost2.j = startingPoint2[1];
    ghost2.defaulti = startingPoint2[0];
    ghost2.defaultj = startingPoint2[1];
    ghost2.setwhatToPutwhenGhostContinueToTheNextStep(0);
    arrayOfGhost.push(ghost1, ghost2);
  } else if (numb == 3) {
    arrayOfGhost = new Array();
    let startingPoint1 = [1, 1];
    board[startingPoint1[0]][startingPoint1[1]] = 7;
    let startingPoint2 = [18, 18];
    board[startingPoint2[0]][startingPoint2[1]] = 7;
    let startingPoint3 = [18, 1];
    board[startingPoint3[0]][startingPoint3[1]] = 7;

    ghost1 = new ghost();
    ghost1.i = startingPoint1[0];
    ghost1.j = startingPoint1[1];
    ghost1.defaulti = startingPoint1[0];
    ghost1.defaultj = startingPoint1[1];
    ghost1.setwhatToPutwhenGhostContinueToTheNextStep(0);
    ghost2 = new ghost();
    ghost2.i = startingPoint2[0];
    ghost2.j = startingPoint2[1];
    ghost2.defaulti = startingPoint2[0];
    ghost2.defaultj = startingPoint2[1];
    ghost2.setwhatToPutwhenGhostContinueToTheNextStep(0);
    ghost3 = new ghost();
    ghost3.i = startingPoint3[0];
    ghost3.j = startingPoint3[1];
    ghost3.defaulti = startingPoint3[0];
    ghost3.defaultj = startingPoint3[1];
    ghost3.setwhatToPutwhenGhostContinueToTheNextStep(0);
    arrayOfGhost.push(ghost1, ghost2, ghost3);
  }
  if (numb == 4) {
    arrayOfGhost = new Array();
    let startingPoint1 = [1, 1];
    board[startingPoint1[0]][startingPoint1[1]] = 7;
    let startingPoint2 = [18, 18];
    board[startingPoint2[0]][startingPoint2[1]] = 7;
    let startingPoint3 = [18, 1];
    board[startingPoint3[0]][startingPoint3[1]] = 7;
    let startingPoint4 = [1, 18];
    board[startingPoint4[0]][startingPoint4[1]] = 7;

    ghost1 = new ghost();
    ghost1.i = startingPoint1[0];
    ghost1.j = startingPoint1[1];
    ghost1.defaulti = startingPoint1[0];
    ghost1.defaultj = startingPoint1[1];
    ghost1.setwhatToPutwhenGhostContinueToTheNextStep(0);
    ghost2 = new ghost();
    ghost2.i = startingPoint2[0];
    ghost2.j = startingPoint2[1];
    ghost2.defaulti = startingPoint2[0];
    ghost2.defaultj = startingPoint2[1];
    ghost2.setwhatToPutwhenGhostContinueToTheNextStep(0);
    ghost3 = new ghost();
    ghost3.i = startingPoint3[0];
    ghost3.j = startingPoint3[1];
    ghost3.defaulti = startingPoint3[0];
    ghost3.defaultj = startingPoint3[1];
    ghost3.setwhatToPutwhenGhostContinueToTheNextStep(0);
    ghost4 = new ghost();
    ghost4.i = startingPoint4[0];
    ghost4.j = startingPoint4[1];
    ghost4.defaulti = startingPoint4[0];
    ghost4.defaultj = startingPoint4[1];
    ghost4.setwhatToPutwhenGhostContinueToTheNextStep(0);
    arrayOfGhost.push(ghost1, ghost2, ghost3, ghost4);
  }
}

function createObjectOnBoard(board, objectNumb, howManyObjectIwant) {
  for (let index = 0; index < howManyObjectIwant; index++) {
    var randomI = Math.floor(Math.random() * 19 + 1);
    var randoJ = Math.floor(Math.random() * 19 + 1);
    while (board[randomI][randoJ] != 0) {
      randomI = Math.floor(Math.random() * 19 + 1);
      randoJ = Math.floor(Math.random() * 19 + 1);
    }
    board[randomI][randoJ] = objectNumb;
  }
}

function findRandomEmptyCell(board) {
  var i = Math.floor(Math.random() * 19 + 1);
  var j = Math.floor(Math.random() * 19 + 1);
  while (board[i][j] != 0) {
    i = Math.floor(Math.random() * 19 + 1);
    j = Math.floor(Math.random() * 19 + 1);
  }
  return [i, j];
}

function GetKeyPressed() {
  if (keysDown[goUP]) {
    return 1;
  }
  if (keysDown[goDowm]) {
    return 2;
  }
  if (keysDown[goLeft]) {
    return 3;
  }
  if (keysDown[goRight]) {
    return 4;
  }
}

function Draw() {
  canvas.width = canvas.width; //clean board
  lblScore.value = score;
  lblTime.value = time_elapsed;
  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 20; j++) {
      var center = new Object();
      center.x = i * squaresize + 15;
      center.y = j * squaresize + 15;
      if (board[i][j] == 2) {
        //pacman
        drawPacman(center.x, center.y);
      } else if (board[i][j] == 1) {
        context.beginPath();
        context.arc(center.x, center.y, 3, 0, 2 * Math.PI); // circle
        context.fillStyle = small_ball_color; //color
        context.fill();
      } else if (board[i][j] == 3) {
        context.beginPath();
        context.arc(center.x, center.y, 6, 0, 2 * Math.PI); // circle
        context.fillStyle = medium_ball_color; //color
        context.fill();
      } else if (board[i][j] == 4) {
        //wall
        context.drawImage(
          wall,
          center.x - 15,
          center.y - 15,
          squaresizestr,
          squaresizestr
        );
      } else if (board[i][j] == 5) {
        //big
        context.beginPath();
        context.arc(center.x, center.y, 12, 0, 2 * Math.PI); // circle
        context.fillStyle = big_ball_color; //color
        context.fill();
      } else if (board[i][j] == 6) {
        if (flagIsEaten == 0) {
          //cherry -doll
          context.drawImage(cherry, center.x - 15, center.y - 15, "25", "25");
        } else {
          board[i][j] = 0;
          context.clearRect(
            i * squaresize,
            j * squaresize,
            squaresize,
            squaresize
          );
        }
      } else if (board[i][j] == 7) {
        //ghost
        drawGhost(center.x, center.y);
      } else if (board[i][j] == 8) {
        //life+
        context.drawImage(lifeplus, center.x - 15, center.y - 15, "35", "35");
      } else if (board[i][j] == 9) {
        //poison
        context.drawImage(poison, center.x - 15, center.y - 15, "35", "35");
      } else if (board[i][j] == 10) {
        //mistery
        context.drawImage(mistery, center.x - 15, center.y - 15, "30", "30");
      } else if (board[i][j] == 11) {
        //time
        context.drawImage(slowMotion, center.x - 15, center.y - 15, "30", "30");
      } else if (board[i][j] == 12) {
        //time
        context.drawImage(
          clockWatchEffect,
          center.x - 15,
          center.y - 15,
          "30",
          "30"
        );
      }

      // context.strokeStyle = "yellow";
      // context.strokeRect(
      //   i * squaresize,
      //   j * squaresize,
      //   squaresize,
      //   squaresize
      //);
    }
  }
}

function drawPacman(centx, centy) {
  const currImg = PacmanImagesArray[pacmanRotation];
  context.drawImage(currImg, centx - 15, centy - 15, "25", "25");
}
function drawGhost(centx, centy) {
  context.drawImage(normalGhost, centx - 10, centy - 10, "20", "20");
}

function loadLifeImagesArray() {
  const life5 = new Image();
  life5.src = "./photos/lives/lives5.png";

  const life4 = new Image();
  life4.src = "./photos/lives/lives4.png";

  const life3 = new Image();
  life3.src = "./photos/lives/lives3.png";

  const life2 = new Image();
  life2.src = "./photos/lives/lives2.png";

  const life1 = new Image();
  life1.src = "./photos/lives/lives1.png";

  const life0 = new Image();
  life0.src = "./photos/lives/lives0.png";

  lifeImages = [life0, life1, life2, life3, life4, life5];
  return lifeImages;
}

function loadPacmanImagesArray() {
  const pacmanImage1 = new Image();
  pacmanImage1.src = "./photos/pacm/pac2_up.png";

  const pacmanImage2 = new Image();
  pacmanImage2.src = "./photos/pacm/pac2_down.png";

  const pacmanImage3 = new Image();
  pacmanImage3.src = "./photos/pacm/pac2_right.png";

  const pacmanImage4 = new Image();
  pacmanImage4.src = "./photos/pacm/pac2_left.png";

  pacmanImages = [pacmanImage1, pacmanImage2, pacmanImage3, pacmanImage4]; //up down right left
  return pacmanImages;
}
Rotation = {
  right: 0,
  down: 1,
  left: 2,
  up: 3,
};

function predict_next_ghost_step(i, j) {
  let optional = new Array();
  //UP
  if (
    board[i][j + 1] != 4 &&
    board[i][j + 1] != 6 &&
    board[i][j + 1] != 7 &&
    ghost_toward_pacman(i, j, i, j + 1)
  )
    optional.push([i, j + 1]);
  //DOWN
  if (
    board[i][j - 1] != 4 &&
    board[i][j + 1] != 6 &&
    board[i][j - 1] != 7 &&
    ghost_toward_pacman(i, j, i, j - 1)
  )
    optional.push([i, j - 1]);
  //LEFT
  if (
    board[i - 1][j] != 4 &&
    board[i][j + 1] != 6 &&
    board[i - 1][j] != 7 &&
    ghost_toward_pacman(i, j, i - 1, j)
  )
    optional.push([i - 1, j]);
  //RIGHT
  if (
    board[i + 1][j] != 4 &&
    board[i][j + 1] != 6 &&
    board[i + 1][j] != 7 &&
    ghost_toward_pacman(i, j, i + 1, j)
  )
    optional.push([i + 1, j]);

  if (optional.length == 0) {
    if (board[i][j + 1] != 4 && board[i][j + 1] != 7 && board[i][j + 1] != 6) {
      optional.push([i, j + 1]);
    }
    if (board[i][j - 1] != 4 && board[i][j - 1] != 7 && board[i][j + 1] != 6) {
      optional.push([i, j - 1]);
    }
    if (board[i - 1][j] != 4 && board[i - 1][j] != 7 && board[i][j + 1] != 6) {
      optional.push([i - 1, j]);
    }
    if (board[i + 1][j] != 4 && board[i + 1][j] != 7 && board[i][j + 1] != 6) {
      optional.push([i + 1, j]);
    } else optional.push([i, j]); //ghost is blocked
  }
  return optional[randomIntFromInterval(0, optional.length - 1)];
}

function predict_next_cherie_step(i, j) {
  let optional = new Array();
  if (board[i][j + 1] != 4 && board[i][j + 1] != 7) {
    optional.push([i, j + 1]);
  }
  if (board[i][j - 1] != 4 && board[i][j - 1] != 7) {
    optional.push([i, j - 1]);
  }
  if (board[i - 1][j] != 4 && board[i - 1][j] != 7) {
    optional.push([i - 1, j]);
  }
  if (board[i + 1][j] != 4 && board[i + 1][j] != 7) {
    optional.push([i + 1, j]);
  } else optional.push([i, j]); //ghost is blocked
  return optional[randomIntFromInterval(0, optional.length - 1)];
}
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function ghost_toward_pacman(currI, currJ, optionalI, optionalJ) {
  let current_manhatan =
    Math.abs(currI - pacman.i) + Math.abs(currJ - pacman.j);
  let next_manhatan =
    Math.abs(optionalI - pacman.i) + Math.abs(optionalJ - pacman.j);
  if (current_manhatan >= next_manhatan) return true;
  else {
    return false;
  }
}

function updateGhostPosition() {
  if (arrayOfGhost == undefined) {
    return;
  }
  if (arrayOfGhost.length > 0) {
    for (i = 0; i < arrayOfGhost.length; i++) {
      if (arrayOfGhost[i].prev != 2 && arrayOfGhost[i].prev != 6) {
        board[arrayOfGhost[i].i][arrayOfGhost[i].j] = arrayOfGhost[i].prev;
      }
      let nextStep = predict_next_ghost_step(
        arrayOfGhost[i].i,
        arrayOfGhost[i].j
      );
      arrayOfGhost[i].i = nextStep[0];
      arrayOfGhost[i].j = nextStep[1];
      arrayOfGhost[i].prev = board[arrayOfGhost[i].i][arrayOfGhost[i].j];
      if (arrayOfGhost[i].prev == 7) {
        board[arrayOfGhost[i].i][arrayOfGhost[i].j] = 0;
      } else {
        board[arrayOfGhost[i].i][arrayOfGhost[i].j] = 7;
      }

      if (collisionPacmanGhost()) {
        gameOverSound.play();
        randomplace = findRandomEmptyCell(board);
        pacman.i = randomplace[0];
        pacman.j = randomplace[1];
        pacman.lives = pacman.lives - 1;
        score = score - 10;

        for (a = 0; a < arrayOfGhost.length; a++) {
          arrayOfGhost[a].prev = 0;
          board[arrayOfGhost[a].i][arrayOfGhost[a].j] = 0;
          arrayOfGhost[a].i = arrayOfGhost[a].defaulti;
          arrayOfGhost[a].j = arrayOfGhost[a].defaultj;
          arrayOfGhost[a].prev = 0;
        }

        changeLife();
        if (pacman.lives == 0) {
          end();
        }

        // for (let i = 0; i < arrayOfGhost.length; i++) {
        //   arrayOfGhost[i].prev = 0;
        // }

        // resetGame();
        // if (pacman.lives_remain > 0) {resetAfterCaught();}
      }
      //   else {
      //     Draw();
      //   }
    }
  } else {
    return;
  }
}
function collisionPacmanGhost() {
  for (p = 0; p < arrayOfGhost.length; p++) {
    if (pacman.i == arrayOfGhost[p].i && pacman.j == arrayOfGhost[p].j) {
      return true;
    }
  }
  return false;
}

function changeLife() {
  if (pacman.lives > 5) {
    pacman.lives = 5;
  }
  if (pacman.lives < 0) {
    pacman.lives = 0;
  }
  console.log(pacman.lives);
  document.getElementById("life").src = LifeImagesArray[pacman.lives].src;
}

function updateCherryPosition() {
  if (flagIsEaten == 1) {
    return;
  }
  if (cherie.i == undefined || cherie.j == undefined) {
    return;
  }

  if (cherie.i == Pacman.i && cherie.j == Pacman.j) {
    score = score + 50;
    cheriesound.play();

    board[cherie.i][cherie.j] = 0;
    flagIsEaten = 1;
  }

  if (cherie.prev != 2) {
    board[cherie.i][cherie.j] = cherie.prev;
  }

  let nextStep = predict_next_cherie_step(cherie.i, cherie.j);

  cherie.i = nextStep[0];
  cherie.j = nextStep[1];
  cherie.prev = board[cherie.i][cherie.j];
  if (cherie.prev == 6) {
    board[cherie.i][cherie.j] = 0;
  } else {
    board[cherie.i][cherie.j] = 6;
  }

  if (cherie.i == Pacman.i && cherie.j == Pacman.j) {
    score = score + 50;
    window.clearInterval(cherieInterval);
    board[cherie.i][cherie.j] = 0;
    flagIsEaten = 1;
  }
}

function giveMeMoreGiveMeMoreMister() {
  howMuchTimeIWantInTheGame = howMuchTimeIWantInTheGame + 5;
}
function slowmotion() {
  setTimeout(function () {
    howFastAreTheGhost = 400;
  }, 6000);
}
function changeScreen(id) {
  hideAllScreens();
  $("#" + id).show();
  $("#" + id).focus();
}

function hideAllScreens() {
  $(".screen").hide();
}

function end() {
  if (pacman.lives == 0) {
    window.clearInterval(interval);
    window.clearInterval(cherieInterval);
    gameOverIcyTowerSound.play();
    window.alert("Loser!");
    changeScreen("settings-screen");
  }
  if (time_elapsed > howMuchTimeIWantInTheGame) {
    if (score < 100) {
      window.clearInterval(interval);
      window.clearInterval(cherieInterval);
      gameOverIcyTowerSound.play();
      message = "You are better than " + score + " points!";
      window.alert(message);
      changeScreen("settings-screen");
    } else {
      window.clearInterval(interval);
      window.clearInterval(cherieInterval);
      queens.play();
      window.alert("Winner!!!");
      changeScreen("settings-screen");
    }
  }
}

function UpdatePosition() {
  if (pacman.i == undefined || pacman.j == undefined) {
    return;
  }
  board[pacman.i][pacman.j] = 0;
  var x = GetKeyPressed();
  if (x == 1) {
    if (pacman.j > 0 && board[pacman.i][pacman.j - 1] != 4) {
      pacman.j = pacman.j - speed;
    }
    pacmanRotation = 0;
  }
  if (x == 2) {
    if (pacman.j < 19 && board[pacman.i][pacman.j + 1] != 4) {
      pacman.j = pacman.j + speed;
    }
    pacmanRotation = 1;
  }
  if (x == 3) {
    if (pacman.i > 0 && board[pacman.i - 1][pacman.j] != 4) {
      pacman.i = pacman.i - speed;
    }
    pacmanRotation = 3;
  }
  if (x == 4) {
    if (pacman.i < 19 && board[pacman.i + 1][pacman.j] != 4) {
      pacman.i = pacman.i + speed;
    }
    pacmanRotation = 2;
  }
  if (board[pacman.i][pacman.j] == 1) {
    score = score + 5;
    waka.play();
  } else if (board[pacman.i][pacman.j] == 3) {
    score = score + 15;
    waka.play();
  } else if (board[pacman.i][pacman.j] == 5) {
    score = score + 25;
    sweetIcyTowerSound.play();
  } else if (board[pacman.i][pacman.j] == 6) {
    cheriesound.play();
    score = score + 50;
    board[cherie.i][cherie.j] = 0;
    flagIsEaten = 1;
  } else if (collisionPacmanGhost()) {
    gameOverSound.play();
    randomplace = findRandomEmptyCell(board);
    pacman.i = randomplace[0];
    pacman.j = randomplace[1];
    pacman.lives = pacman.lives - 1;
    score = score - 10;
    for (a = 0; a < arrayOfGhost.length; a++) {
      arrayOfGhost[a].prev = 0;
      board[arrayOfGhost[a].i][arrayOfGhost[a].j] = 0;
      arrayOfGhost[a].i = arrayOfGhost[a].defaulti;
      arrayOfGhost[a].j = arrayOfGhost[a].defaultj;
      arrayOfGhost[a].prev = 0;
    }
    changeLife();
    if (pacman.lives == 0) {
      end();
    }
  } else if (board[pacman.i][pacman.j] == 8) {
    pacman.lives = pacman.lives + 1;
    lifeplusSound.play();
    changeLife();
  } else if (board[pacman.i][pacman.j] == 9) {
    pacman.lives = pacman.lives - 1;
    acidSound.play();
    changeLife();
    if (pacman.lives == 0) {
      end();
    }
  } else if (board[pacman.i][pacman.j] == 10) {
    let mist = Math.floor(Math.random() * 4 + 0);
    if (mist == 0) {
      pacman.lives = pacman.lives - 1;
      acidSound.play();
      changeLife();
      if (pacman.lives == 0) {
        end();
      }
    } else if (mist == 1) {
      pacman.lives = pacman.lives - 1;
      acidSound.play();

      changeLife();
      if (pacman.lives == 0) {
        end();
      }
      pacman.lives = pacman.lives - 1;
      acidSound.play();
      changeLife();
      if (pacman.lives == 0) {
        end();
      }
    } else if (mist == 2) {
      pacman.lives = pacman.lives + 1;
      lifeplusSound.play();
      changeLife();
      pacman.lives = pacman.lives + 1;
      lifeplusSound.play();
      changeLife();
    } else if (mist == 3) {
      pacman.lives = pacman.lives + 1;
      lifeplusSound.play();
      changeLife();
    }
  } else if (board[pacman.i][pacman.j] == 11) {
    //slow motion efect
    stopwatchSound.play();
    howFastAreTheGhost = randomIntFromInterval(100, 1500);
    slowmotion();
  } else if (board[pacman.i][pacman.j] == 12) {
    //5 more second efect
    fiveSecondSound.play();
    giveMeMoreGiveMeMoreMister();
  }

  board[pacman.i][pacman.j] = 2;

  if (Date.now() - monsterTime >= howFastAreTheGhost) {
    updateGhostPosition();
    monsterTime = Date.now();
  }
  var currentTime = new Date();
  time_elapsed = (currentTime - start_time) / 1000;

  if (howMuchTimeIWantInTheGame - time_elapsed <= 6) {
    stopwatchSound.play();
    hurryUpIcyTowerSound.play();
  }

  end();
  Draw();
}
