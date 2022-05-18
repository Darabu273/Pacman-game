//Set default values for game time, number of ghosts, number of balls
var howMuchTimeIWantInTheGame = 60;
var howMuchGhostIWant = 4; 
var howMuchFoodIwant = 70;

//Set default colors for ball type: small , medium , big .
var small_ball_color ="#e66465";
var medium_ball_color = "#f6b73c";
var big_ball_color = "#3cb371";

//Set default values for arrows controls.
var goLeft = 37;
var goRight = 39;
var goUP = 38;
var goDowm = 40;


//Update when we change the value of the control arrow. keyCode as a number - '65'
function updateArrowsDisplay(keyCode){
  switch(keyCode){
    case 37: return "⇦" //left
    case 38: return "⇧" //up
    case 39: return "⇨" //right
    case 40: return "⇩" //down
    default:
      return String.fromCharCode(keyCode); // The char itself as write in keyboard - 'A'
  }
}

function changeArrowSettings(typeArrow){
    $(document).on('keydown', (event) => {
        keyCode = event.keyCode; //The val as a number
        // console.log(s); //'A'
        // console.log(typeArrow) //upArrow

        switch (typeArrow){
          case "upArrow":
              if (keyCode == goLeft || keyCode == goRight || keyCode == goDowm){
                document.getElementById("msg-arrow-settings").innerHTML = "This character has been selected already. Choose different one.";
                break;
              }
              document.getElementById("upArrow").value = updateArrowsDisplay(keyCode);
              document.getElementById("keyup_id").innerHTML = updateArrowsDisplay(keyCode);
              document.getElementById("msg-arrow-settings").innerHTML ="";
              goUP = keyCode;
              break;
          case "downArrow":
              if (keyCode == goLeft || keyCode == goRight || keyCode == goUP){
                document.getElementById("msg-arrow-settings").innerHTML = "This character has been selected already. Choose different one.";
                break;
              }
              document.getElementById("downArrow").value = updateArrowsDisplay(keyCode);
              document.getElementById("keydown_id").innerHTML = updateArrowsDisplay(keyCode);
              document.getElementById("msg-arrow-settings").innerHTML ="";
              goDowm = keyCode;
              break;
          case "rightArrow":
              if (keyCode == goLeft || keyCode == goDowm || keyCode == goUP){
                document.getElementById("msg-arrow-settings").innerHTML = "This character has been selected already. Choose different one.";
                break;
              }
              document.getElementById("rightArrow").value = updateArrowsDisplay(keyCode);
              document.getElementById("keyright_id").innerHTML = updateArrowsDisplay(keyCode);
              document.getElementById("msg-arrow-settings").innerHTML ="";
              goRight = keyCode;
              break;
          case "leftArrow":
            if (keyCode == goRight || keyCode == goDowm || keyCode == goUP){
              document.getElementById("msg-arrow-settings").innerHTML = "This character has been selected already. Choose different one.";
              break;
            }
            document.getElementById("leftArrow").value = updateArrowsDisplay(keyCode);
            document.getElementById("keyleft_id").innerHTML = updateArrowsDisplay(keyCode);
            document.getElementById("msg-arrow-settings").innerHTML ="";
            goLeft = keyCode;
            break;
      }
      $(document).off('keydown');
  });
         
}

function updateColorBalls(pointsNum){
  switch(pointsNum){
    case 'points5':
      small_ball_color = document.getElementById("points5").value;
    case 'points15':
      medium_ball_color = document.getElementById("points15").value;
    case 'points25':
      big_ball_color = document.getElementById("points25").value;
  }   
}

// Update Num Of Ghosts -  'onchange' event we update the number of ghosts in the game.
function updateNumGhosts(){
  howMuchGhostIWant = parseInt(document.getElementById("numGhosts").value);
}

// Update Num Of Balls -  'oninput' event we update the number of balls in the game and display in the settings page.
var sliderB = document.getElementById("Range_b");
var numBalls = document.getElementById("balls"); //todo need to be it app to.
numBalls.innerHTML = sliderB.value;

sliderB.oninput = function() {
  numBalls.innerHTML = this.value; //Display the current value you chose to set the number of balls in the game.
  howMuchFoodIwant= parseInt(numBalls.innerHTML);//Update number of balls.
}



// Update Time -  'oninput' event we update the timer of duration of the game and display in the settings page.
  var sliderTime = document.getElementById("Range_time");
  var time = document.getElementById("time"); 
  time.innerHTML = sliderTime.value;

  sliderTime.oninput = function() {
    time.innerHTML = this.value; //Display the current value you chose to set time game.
    howMuchTimeIWantInTheGame = parseInt(time.innerHTML); //Update time
  }

function RandomSettings(){
 
  //update num of ghosts
  howMuchGhostIWant  = getRandomNum(1,5);  
  document.getElementById(howMuchGhostIWant).selected = "true";

  //update num of balls
  howMuchFoodIwant = getRandomNum(50,91);
  document.getElementById("Range_b").value=howMuchFoodIwant;
  document.getElementById("balls").innerHTML = howMuchFoodIwant;
  
  //update colors and display changes in settings page.
  random3Colors(); 
  
  //update time of duration game.
  howMuchTimeIWantInTheGame = getRandomNum(60,241);
  document.getElementById("Range_time").value = howMuchTimeIWantInTheGame;
  document.getElementById("time").innerHTML = howMuchTimeIWantInTheGame;
}


function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusiv
}

function random3Colors(){
  let randomColor;
  let count = 0;
  const colors3 = [];
  while(count < 3) {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    if (!colors3.includes(randomColor)){
      colors3[count] = randomColor;
      count++;
    }
   
  }
  //set by random colors for each ball type in the game.
  small_ball_color = "#" + colors3[0];
  medium_ball_color =  "#" + colors3[1];
  big_ball_color =  "#" + colors3[2];

  //update diplay colors in setting page.
  document.getElementById("points5").value = "#" + colors3[0];
  document.getElementById("points15").value =  "#" + colors3[1];
  document.getElementById("points25").value =  "#" + colors3[2];
}
