let targetClrBox = document.querySelector('.target-clr-box'); //this is the target box element
let emojiBox = document.querySelector('.emoji-reaction-box')  // emojibox element


// clr and their respective number eg clr1,clr2,clr3 ...clrn are the individual color option boxes
let clr1 = document.querySelector('.clr-1');
let clr2 = document.querySelector('.clr-2');
let clr3 = document.querySelector('.clr-3');
let clr4 = document.querySelector('.clr-4');
let clr5 = document.querySelector('.clr-5');
let clr6 = document.querySelector('.clr-6');


let color ;
let rand1 = Math.floor(Math.random() * 200) + 50;  //block of code creates three random number i use for my code
let rand2 = Math.floor(Math.random() * 9) ;
let rand3 = Math.floor(Math.random() * 150) + 20;
let randnum = Math.floor(Math.random() * 6) + 1;  // this suffles the correct color amng boxes

let winEl = document.querySelector('.js-win')  //my win element number that updates when i win
let loseEl = document.querySelector('.js-lose')//my lose element number that updates when i lose

let win = 0;  
let lose = 0;


//this funnctioc creates three random numbers  so i can place it to get random colors
function randomColor() {
  rand1 = Math.floor(Math.random() * 200) + 50;
  rand2 = Math.floor(Math.random() * 9) ;
  rand3 = Math.floor(Math.random() * 150) + 20;
  randnum = Math.floor(Math.random() * 6) + 1; // this random number will bw use to shuffle the correct color
    color = `rgb(${rand1}, ${rand2}, ${rand3})`; // this is the target random color(correct one)
    targetClrBox.style.backgroundColor = color;
}
randomColor()  //do not remove colors will lose randomness when game starts

targetClrBox.style.backgroundColor = color;  //this asigns  color to the target color 

//this function places the random numbers as css color values
function shuffleAllColours(){
clr1.style.backgroundColor = `rgb(${rand2}, ${rand3}, ${rand1})`;
clr2.style.backgroundColor = `rgb(${rand2}, ${rand1}, ${rand3})`;
clr3.style.backgroundColor = `rgb(${rand3}, ${rand2}, ${rand1})`;
clr4.style.backgroundColor = `rgb(${225 - rand2}, ${225- rand1}, ${225 - rand1})`;
clr5.style.backgroundColor = `rgb(${rand2 / 2}, ${rand3 * 20}, ${rand3 / 2})`;
clr6.style.backgroundColor = `rgb(${rand2 * 1.2}, ${rand1 / 1.2}, ${rand1 * 10})`;
}

shuffleAllColours()//asigns from clr1 to clr 6 random colors


//this function make sure that the right answer to the target color is shuffle among 6 colors
function shulfeRightcolor(){
if (randnum === 1){
  clr1.style.backgroundColor = color;
}else if (randnum === 2) {
  clr2.style.backgroundColor = color;
}else if (randnum === 3){
  clr3.style.backgroundColor = color;
}else if (randnum === 4){
  clr4.style.backgroundColor = color;
}else if(randnum === 5) {
  clr5.style.backgroundColor = color;
}
else if (randnum === 6) {
  clr6.style.backgroundColor = color;
}
}
shulfeRightcolor()


//this function is used as a reuseable funtion
 //it performs the action when the user clicks on his/her chioce, it changes the target color irrespective 
 //of whether the user is right or wrong and diplay it
function playerChoice (box) {
  if (box.style.backgroundColor === color && targetClrBox.style.backgroundColor === color) {
    win++;//increaments if player wi
    winEl.textContent = win; 
    emojiBox.style.fontSize= '5rem';
    emojiBox.textContent ='😇';
    emojiBox.style.transform = 'translateY(-18rem)';
    setTimeout(() => {
       emojiBox.style.transform = 'translateY(100%)'
    },550)
  }else{
    lose++; //incremenets when the player  fails
    loseEl.textContent = lose;
    emojiBox.style.display = 'flex';
    emojiBox.style.transform = 'translateY(-18rem)';
    emojiBox.textContent = '😵';
    emojiBox.style.fontSize= '5rem';
    setTimeout(() => {
       emojiBox.style.transform = 'translateY(100%)'
    },550)
    console.log('try again')
  }
  randomColor()  //changes color
  shuffleAllColours() // changes random clr from clr1 to clr6
  shulfeRightcolor() //make sure the right color is not repeated in same box
}

//callback function
function clr1Box() {
    playerChoice(clr1)
}
function clr2Box() {
  playerChoice(clr2)
}
function clr3Box() {
  playerChoice(clr3)
}
function clr4Box() {
  playerChoice(clr4)
}
function clr5Box() {
  playerChoice(clr5)
}
function clr6Box() {
  playerChoice(clr6)
}

// this function restarts the game scores  and updates it
function restartGame() {
  win = 0;
  winEl.innerHTML = 0; 
  lose = 0;
  loseEl.textContent = lose
}


