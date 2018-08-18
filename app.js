// window event listener for to start init function on window load
window.addEventListener('load', init);

// DOM Elements
const select = document.querySelector('#selectOp');
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

// Global variables

let currentLevel;
let time;
let score = 0;
let isPlaying;

// Array of words
const words = [
    'benevolent',
    'entrepreneurship',
    'ball',
    'nigeria',
    'solution',
    'meditate',
    'success',
    'midfield',
    'final',
    'space'
];

// Initialise game
function init(){
    // Show number of seconds in UI
    seconds.innerHTML = select.value;
    // Assign select value to time variable
    time = select.value;
    // Load word from array
    showWord(words);
    // Start matching on word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 500);
}

// Select event listener
select.addEventListener('change', selectLevel);

// Select game level
function selectLevel(){

    switch(select.value){

        // Legend
        case "3":
        currentLevel = 3;
        break;

        // Professional
        case "4":
        currentLevel = 4;
        break;

        // Intermediate
        case "5":
        currentLevel = 5;
        break;

        // Beginner
        case "6":
        currentLevel = 6;
        break;
    }

    seconds.innerHTML = currentLevel;
    time = currentLevel;
    message.innerHTML = '';
}


// Pick and show random word
function showWord(words){
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
}

// Start match
function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        // to clear input field on successful match
        wordInput.value = ''; 
        // increment score
        score++;
    }

    // if score is -1, display 0
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

// Match currentWord to wordInput
function matchWords(){
        if(wordInput.value === currentWord.innerHTML){
            message.innerHTML = 'Correct!';
            return true;
        } else {
            message.innerHTML = '';
            return false;
        }
    }

// Countdown timer
function countdown(){
    // Conditionals to check that time has not run out
    if (time > 0){
        // Decrement time
        time--;
    } else if(time === 0){
        // Game is over
        isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game over!';
        score = -1;
    }
}

// ADD RANDOM WORD API..ANYTHING ELSE 

// LOCAL STORAGE TO STORE HIGH SCCORE AND REPLACE IT WHEN IT IS BEATEN