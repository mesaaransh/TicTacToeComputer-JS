var count = 0;
var scoreX = 0;
var scoreO = 0;
var diff = "hard";
var gameover = false;
var tl, t2, t3, t4, t5, t6, t7, t8, t9; // all paragraph tags
tl = document.getElementById('t1');
t2 = document.getElementById('t2');
t3 = document.getElementById('t3');
t4 = document.getElementById('t4');
t5 = document.getElementById('t5');
t6 = document.getElementById('t6');
t7 = document.getElementById('t7');
t8 = document.getElementById('t8');
t9 = document.getElementById('t9');
texts = [t1, t2, t3, t4, t5, t6, t7, t8, t9]

var b1, b2, b3, b4, b5, b6, b7, b8, b9; // all button tags

b1 = document.getElementById('b1');
b2 = document.getElementById('b2');
b3 = document.getElementById('b3');
b4 = document.getElementById('b4');
b5 = document.getElementById('b5');
b6 = document.getElementById('b6');
b7 = document.getElementById('b7');
b8 = document.getElementById('b8');
b9 = document.getElementById('b9');
buttons = [b1, b2, b3, b4, b5, b6, b7, b8, b9]


function comp(){
  console.log("comp")
  count++;
  turn();

  var complay = false;

  function softplay(){

    while (true) {
      console.log("Played soft")
      var selector = Math.ceil(Math.random()*8)
      if (buttons[selector].disabled == false) {
        texts[selector].innerHTML = "O"
        buttons[selector].disabled = true;
        break;
      }
      if (count >= 9){
        break
      }
    }
  }
  function hardplay(){
    console.log("Played hard")
    //win
    if (t2.innerHTML == "O" && t3.innerHTML == "O" || t4.innerHTML == "O" && t7.innerHTML == "O" || t5.innerHTML == "O" && t9.innerHTML == "O") {
      if (b1.disabled == false && complay == false) {
        t1.innerHTML = "O";
        b1.disabled = true;
        complay = true;
      }
    }
    if (t1.innerHTML == "O" && t3.innerHTML == "O" || t5.innerHTML == "O" && t8.innerHTML == "O" ) {
      if (b2.disabled == false && complay == false) {
        t2.innerHTML = "O";
        b2.disabled = true;
        complay = true;
      }
    }
    if (t5.innerHTML == "O" && t7.innerHTML == "O" || t1.innerHTML == "O" && t2.innerHTML == "O" || t6.innerHTML == "O" && t9.innerHTML == "O") {
      if (b3.disabled == false && complay == false) {
        t3.innerHTML = "O";
        b3.disabled = true;
        complay = true;
      }
    }
    if (t1.innerHTML == "O" && t7.innerHTML == "O" || t5.innerHTML == "O" && t6.innerHTML == "O") {
      if (b4.disabled == false && complay == false) {
        t4.innerHTML = "O";
        b4.disabled = true;
        complay = true;
      }
    }
    if (t4.innerHTML == "O" && t6.innerHTML == "O" || t2.innerHTML == "O" && t8.innerHTML == "O" || t3.innerHTML == "O" && t7.innerHTML == "O" || t1.innerHTML == "O" && t9.innerHTML == "O") {
      if (b5.disabled == false && complay == false) {
        t5.innerHTML = "O";
        b5.disabled = true;
        complay = true;
      }
    }
    if (t4.innerHTML == "O" && t5.innerHTML == "O" || t3.innerHTML == "O" && t9.innerHTML == "O") {
      if (b6.disabled == false && complay == false) {
        t6.innerHTML = "O";
        b6.disabled = true;
        complay = true;
      }
    }
    if (t1.innerHTML == "O" && t4.innerHTML == "O" || t5.innerHTML == "O" && t3.innerHTML == "O" || t8.innerHTML == "O" && t9.innerHTML == "O") {
      if (b7.disabled == false && complay == false) {
        t7.innerHTML = "O";
        b7.disabled = true;
        complay = true;
      }
    }
    if (t2.innerHTML == "O" && t5.innerHTML == "O" || t7.innerHTML == "O" && t9.innerHTML == "O") {
      if (b8.disabled == false && complay == false) {
        t8.innerHTML = "O";
        b8.disabled = true;
        complay = true;
      }
    }
    if (t1.innerHTML == "O" && t5.innerHTML == "O" || t3.innerHTML == "O" && t6.innerHTML == "O" || t7.innerHTML == "O" && t8.innerHTML == "O") {
      if (b9.disabled == false && complay == false) {
        t9.innerHTML = "O";
        b9.disabled = true;
        complay = true;
      }
    }

    // Defence
    if (t2.innerHTML == "X" && t3.innerHTML == "X" || t4.innerHTML == "X" && t7.innerHTML == "X" || t5.innerHTML == "X" && t9.innerHTML == "X") {
      if (b1.disabled == false && complay == false) {
        t1.innerHTML = "O";
        b1.disabled = true;
        complay = true;
      }
    }
    if (t1.innerHTML == "X" && t3.innerHTML == "X" || t5.innerHTML == "X" && t8.innerHTML == "X" ) {
      if (b2.disabled == false && complay == false) {
        t2.innerHTML = "O";
        b2.disabled = true;
        complay = true;
      }
    }
    if (t5.innerHTML == "X" && t7.innerHTML == "X" || t1.innerHTML == "X" && t2.innerHTML == "X" || t6.innerHTML == "X" && t9.innerHTML == "X") {
      if (b3.disabled == false && complay == false) {
        t3.innerHTML = "O";
        b3.disabled = true;
        complay = true;
      }
    }
    if (t1.innerHTML == "X" && t7.innerHTML == "X" || t5.innerHTML == "X" && t6.innerHTML == "X") {
      if (b4.disabled == false && complay == false) {
        t4.innerHTML = "O";
        b4.disabled = true;
        complay = true;
      }
    }
    if (t4.innerHTML == "X" && t6.innerHTML == "X" || t2.innerHTML == "X" && t8.innerHTML == "X" || t3.innerHTML == "X" && t7.innerHTML == "X" || t1.innerHTML == "X" && t9.innerHTML == "X") {
      if (b5.disabled == false && complay == false) {
        t5.innerHTML = "O";
        b5.disabled = true;
        complay = true;
      }
    }
    if (t4.innerHTML == "X" && t5.innerHTML == "X" || t3.innerHTML == "X" && t9.innerHTML == "X") {
      if (b6.disabled == false && complay == false) {
        t6.innerHTML = "O";
        b6.disabled = true;
        complay = true;
      }
    }
    if (t1.innerHTML == "X" && t4.innerHTML == "X" || t5.innerHTML == "X" && t3.innerHTML == "X" || t8.innerHTML == "X" && t9.innerHTML == "X") {
      if (b7.disabled == false && complay == false) {
        t7.innerHTML = "O";
        b7.disabled = true;
        complay = true;
      }
    }
    if (t2.innerHTML == "X" && t5.innerHTML == "X" || t7.innerHTML == "X" && t9.innerHTML == "X") {
      if (b8.disabled == false && complay == false) {
        t8.innerHTML = "O";
        b8.disabled = true;
        complay = true;
      }
    }
    if (t1.innerHTML == "X" && t5.innerHTML == "X" || t3.innerHTML == "X" && t6.innerHTML == "X" || t7.innerHTML == "X" && t8.innerHTML == "X") {
      if (b9.disabled == false && complay == false) {
        t9.innerHTML = "O";
        b9.disabled = true;
        complay = true;
      }
    }
    if (b5.disabled == false) {
        t5.innerHTML = "O";
        b5.disabled = true;
        complay = true;
      }
    if(complay == false){
        complay = true;
        softplay()
    }
  }

  if (diff == "easy"){
    softplay()
  }

  else if (diff == "medium") {
    luck = Math.random()
    if (luck > 0.333) {
      hardplay()

    }
    else{
      softplay()
    }
  }

  else if (diff == "hard") {
    hardplay()
  }

  wintest()
  return count;
}

function easy(){
  diff = "easy"
  console.log("setEasy")
  document.getElementById('easy').style.color = "#000";
  document.getElementById('medium').style.color = "#C88F00";
  document.getElementById('hard').style.color = "#C88F00";
  return diff;
}
function medium(){
  diff = "medium"
  console.log("setMed")
  document.getElementById('easy').style.color = "#C88F00";
  document.getElementById('medium').style.color = "#000";
  document.getElementById('hard').style.color = "#C88F00";
  return diff;
}
function hard(){
  diff = "hard"
  console.log("setHard")
  document.getElementById('easy').style.color = "#C88F00";
  document.getElementById('medium').style.color = "#C88F00";
  document.getElementById('hard').style.color = "#000";
  return diff;
}



function click1(){
  b1.disabled = true;
  if (count % 2 == 0){
    t1.innerHTML = "X"
  }
}
function click2(){
  b2.disabled = true;
  if (count % 2 == 0){
    t2.innerHTML = "X";
  }
}
function click3(){
  b3.disabled = true;
  if (count % 2 == 0){
    t3.innerHTML = "X";
  }

}
function click4(){
  b4.disabled = true;
  if (count % 2 == 0){
    t4.innerHTML = "X";
  }

}
function click5(){
  b5.disabled = true;
  if (count % 2 == 0){
    t5.innerHTML = "X";
  }

}
function click6(){
  b6.disabled = true;
  if (count % 2 == 0){
    t6.innerHTML = "X";
  }

}
function click7(){
  b7.disabled = true;
  if (count % 2 == 0){
    t7.innerHTML = "X";
  }

}
function click8(){
  b8.disabled = true;
  if (count % 2 == 0){
    t8.innerHTML = "X";
  }
}
function click9(){
  b9.disabled = true;
  if (count % 2 == 0){
    t9.innerHTML = "X";
  }
}



function countit(){
  count ++ ;
  turn();
  if (gameover == false){
    setTimeout(comp, 400);
  }
  console.log(count)
  return count;
}

function turn(){
  if (count % 2 == 1){
    document.getElementById('trileft').hidden = true;
    document.getElementById('triright').hidden = false;
  }

  else{
    document.getElementById('triright').hidden = true;
    document.getElementById('trileft').hidden = false;
  }
}

function disableGame(){
  for(var i = 0; i <= 8; i++){
    buttons[i].disabled = true;
  }
}

function enableGame(){
  for(var i = 0; i <= 8; i++){
    buttons[i].disabled = false;
  }
}

function resetGame(){
  setTimeout(clear, 3000)
  count = -1;
  console.log("Restarting")
  document.getElementById('reset').innerHTML = "Restarting...";
  function clear() {
    for(var i = 0; i <= 8; i++){
      texts[i].innerHTML = "";
      buttons[i].disabled = false;
    }
    document.getElementById("Xwin").style.opacity = "25%";
    document.getElementById("Owin").style.opacity = "25%";
    document.getElementById('reset').innerHTML = "";
    gameover = false;
  }
}

function Xwin(){
  gameover = true;
  scoreX += 1;
  document.getElementById('scorex').innerHTML = scoreX;
  document.getElementById("Xwin").style.opacity = "100%";
  document.getElementById('triright').hidden = true;
  document.getElementById('trileft').hidden = false;

  console.log("Xwins")
  resetGame()
  return gameover;
}

function Owin(){
  gameover = true;
  scoreO += 1;
  document.getElementById('scoreo').innerHTML = scoreO;
  document.getElementById("Owin").style.opacity = "100%";
  document.getElementById('triright').hidden = true;
  document.getElementById('trileft').hidden = false;

  console.log("Owins")
  resetGame()
  count++
  return gameover;
}

function wintest(){

// Xwins

  if (tl.innerHTML == t2.innerHTML && t2.innerHTML == t3.innerHTML && t3.innerHTML == "X"){
    disableGame()
    Xwin()

  }
  else if (t4.innerHTML == t5.innerHTML && t5.innerHTML == t6.innerHTML && t6.innerHTML == "X"){
    disableGame()
    Xwin()
  }
  else if (t7.innerHTML == t8.innerHTML && t8.innerHTML == t9.innerHTML && t9.innerHTML == "X"){
    disableGame()
    Xwin()
  }




  else if (t1.innerHTML == t4.innerHTML && t4.innerHTML == t7.innerHTML && t7.innerHTML == "X"){
    disableGame()
    Xwin()
  }
  else if (t2.innerHTML == t5.innerHTML && t5.innerHTML == t8.innerHTML && t8.innerHTML == "X"){
    disableGame()
    Xwin()
  }
  else if (t3.innerHTML == t6.innerHTML && t6.innerHTML == t9.innerHTML && t9.innerHTML == "X"){
    disableGame()
    Xwin()
  }





  else if (t1.innerHTML == t5.innerHTML && t5.innerHTML == t9.innerHTML && t9.innerHTML == "X"){
    disableGame()
    Xwin()
  }
  else if (t3.innerHTML == t5.innerHTML && t5.innerHTML == t7.innerHTML && t7.innerHTML == "X"){
    disableGame()
    Xwin()
  }


// O wins


  else if (tl.innerHTML == t2.innerHTML && t2.innerHTML == t3.innerHTML && t3.innerHTML == "O"){
    Owin()
    disableGame()
  }
  else if (t4.innerHTML == t5.innerHTML && t5.innerHTML == t6.innerHTML && t6.innerHTML == "O"){
    Owin()
    disableGame()
  }
  else if (t7.innerHTML == t8.innerHTML && t8.innerHTML == t9.innerHTML && t9.innerHTML == "O"){
    Owin()
    disableGame()
  }




  else if (t1.innerHTML == t4.innerHTML && t4.innerHTML == t7.innerHTML && t7.innerHTML == "O"){
    Owin()
    disableGame()
  }
  else if (t2.innerHTML == t5.innerHTML && t5.innerHTML == t8.innerHTML && t8.innerHTML == "O"){
    Owin()
    disableGame()
  }
  else if (t3.innerHTML == t6.innerHTML && t6.innerHTML == t9.innerHTML && t9.innerHTML == "O"){
    Owin()
    disableGame()
  }





  else if (t1.innerHTML == t5.innerHTML && t5.innerHTML == t9.innerHTML && t9.innerHTML == "O"){
    Owin()
    disableGame()
  }
  else if (t3.innerHTML == t5.innerHTML && t5.innerHTML == t7.innerHTML && t7.innerHTML == "O"){
    Owin()
    disableGame()
  }

//Draw

  else if (b1.disabled == true && b2.disabled == true && b3.disabled == true && b4.disabled == true && b5.disabled == true && b6.disabled == true && b7.disabled == true && b8.disabled == true && b9.disabled == true){
    alert("Game Drawn")
    console.log(count)
    gameover = true;
    resetGame()
  }
}
