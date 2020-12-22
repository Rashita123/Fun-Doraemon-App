var clear = require('clear');
clear();
var figlet = require('figlet');
console.log(figlet.textSync('Doraemon', { horizontalLayout: 'full' }));


var boxen = require('boxen');

var readlineSync = require('readline-sync');

var chalk = require('chalk');


var name = readlineSync.question(chalk.blue('Your Good name? '));



console.log(chalk.red('Welcome! ' + name));
console.log();
var watch = readlineSync.keyInYN(chalk.blue('Do you still Watch Doraemon?'));
if (!watch) {
  process.exit();
}
else{
  if (watch) {
  console.log(chalk.red('Fun Fact: ' + 'Me too!'));
  }
  else {
    console.log(chalk.red('Fun Fact: ' + 'I DO!😀'));
  }
}

console.log();
var ready = readlineSync.keyInYN(chalk.blue('Ready to play Doraemon quiz?'));
if(!ready){process.exit();}


else{
  if (ready) {
  console.log(chalk.red("Let's Go! "));
  var gt= readlineSync.question('');
  clear();
  }
  else {
    console.log(chalk.blue("Don't waste your time😤 Bye."));
    process.exit();
    var g = readlineSync.question('');
  }
}

console.log();
var score = 0;

function play(question, options, answer, response) {
  var flag = false;
  var user_ans = readlineSync.keyInSelect(options, chalk.blue(question),{cancel: 'Not Sure'});
  
    if (options[user_ans] === answer) {
      console.log(chalk.green("You gotcha! "));
      score++;
      flag = true;
    }
  if (flag === false) {
    console.log(chalk.bgCyan("You got it wrong! "));
  }
  console.log();
  console.log(chalk.green(response));
  console.log();
  console.log("Press Enter to move to the next question !");
  var a = readlineSync.question("");
  clear();


}

var questions = [


  {
    quest: "What is the color of Dorami, Doraemon's sister?",
    options: ["Yellow","Red","Blue"],
    ans: "Yellow",
    response: "Dorami is YELLOW_COLOURED cute sister robot of Doraemon who lives with Sewashi (Nobita's great grandson in the 22nd century). She occasionally helps Nobita and is shown as a more advanced robot than Doraemon."
  },


  {
    quest: "What is the name of bully Gian's sister?",
    options: ["Jaiko","Shizuka","Dorami"],
    ans: "Jaiko",
    response: "Jaiko is the fat ugly sister of Gian whom Gian loves very much. She loves to create mangas and enter them in contests. Her pen name is Christine Goda. She loves her pet dog very much, even though Gian sometimes gets annoyed with this fact.",
  },

  {
    quest: "Who is Gian's sidekick?",
    options: ["Nobita","Suneo"],
    ans: "Suneo",

    response: "Suneo is shown to be a wealthy kid who remains with Gian only to not be bullied by him. He actually likes Nobita and admits it often, much to the chagrin of Gian.",
  },
  {
    quest: "Nobita fears more?",
    options: ["Mom","Jian","Confusing Aff"],
    ans: "Mom",
    response: "I am not sure of the answer, but this seems more accurate! 😁"
  },
]

for (var i = 0; i < questions.length; i++) {
  play(questions[i].quest, questions[i].options,questions[i].ans, questions[i].response);
}

// console.log(chalk.red("So, This is your FINAL SCORE: "+score));
console.log(figlet.textSync('Congrats! ', { horizontalLayout: 'full' }));
console.log(boxen('Score: ' + score + "/" + questions.length, { padding: 1, borderColor: 'red', margin: 1, borderStyle: 'round' }));