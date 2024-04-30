let userInput;
let button;
let userLine;
let response;

let poem = [];


function setup() {
  createCanvas(400, 400);
  userInput = createInput();
  userInput.position(40,100);
  button = createButton('Add to poem');
  button.position(40, userInput.y + 21);
  button.mousePressed(newLine);
}


// more RiTa functions from https://rednoise.org/rita/reference/RiTa/rhymes/index.html
function newLine(){
  userLine = userInput.value();
  userInput.value('');
  
  let words = RiTa.tokenize(userline); //breaks user input string into words
  for(x=0; x<words.length;x++){
    if (RiTa.hasWord(words[x]) != 1){
      words[x] = RiTa.randomWord(); //removes nonsense words for real ones
    }
  }
  let rIndex = floor(random(0,words.length));
  let rhymes = rita.rhymeSync(words[rIndex]);
  if (rhymes.length > 0){
    let changedWord = random(rhymes); //adds a random rhyming word
    words[rIndex] = changedWord;
  }
  userLine = RiTa.untokenize(words);
  poem.push(userLine);
  
}

function writePoem(){
  for(x=0;x<poem.length;x++){
    text(poem[x], 40, 180+x*20);
  }
}

function draw() {
  background(220);
  writePoem();
}