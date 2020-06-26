const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const settingsBtn = document.getElementById('settings-btn');
const endgameEl = document.getElementById('end-game-container');
const settings = document.getElementById('settings');
const settingForm = document.getElementById('settings-form');
const difficulty = document.getElementById('difficulty');


// list of words for game
const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
  ];

//' init word
let randomWord;

// init score
let score = 0;

// intit time
let time = 10;

// focust on text on start
text.focus();

// start the count down
const timeInterval = setInterval(updateTime, 1000);

// generate random word from array
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// add word to DOM
function addWordToDOM() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

// update score
function updateScore() {
score++;
scoreEl.innerHTML = score;
}

// update time
function updateTime(){
    time--;
    timeEl.innerHTML = time + 's';
    if(time === 0 ) {
        clearInterval(timeInterval);
        // end the game
        gameOver();
    }
}

// game over end screen
function gameOver(){
    endgameEl.innerHTML = `
    <h1> Time ran out</h1>
    <p>Your final score is ${score}</p>
    <p>Game over!</p>
    <button onclick="location.reload()">Reload game</button>
    `;

    endgameEl.style.display = 'flex';
}

addWordToDOM();

// event listeners
text.addEventListener('input', e=> {
    const insertedText = e.target.value;
    if(insertedText === randomWord) {
        addWordToDOM();
        updateScore();
        // clear
        e.target.value = '';
        time += 5;

        updateTime();
    }
})