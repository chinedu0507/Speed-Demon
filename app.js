// window event listener for to start init function on window load
window.addEventListener('load', init);

// Global variables

// Levels object
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
};

// Change level variable
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

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
    seconds.innerHTML = currentLevel;
    // Load word from array
    showWord(words);
    // Start matching on word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 500);
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

// DROP DOWN TO CHOOSE LEVELS..SHOW THE SECONDS FOR EACH LEVEL
// USING SELECT LIST..ADD EVENT LISTENER TO IT

// LOCAL STORAGE TO STORE HIGH SCCORE AND REPLACE IT WHEN IT IS BEATEN