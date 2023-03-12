var readlineSync = require("readline-sync");
var userName = readlineSync.question("what is your name? ");

console.log("Hi! " + userName);
console.log("Let's see how much do you know Abhay!!");

var ready = readlineSync.question("Are you ready to play? (Type Yes/No) ");

if(ready == "Yes"){
  console.log("Great! Let's see how much you score out of 100...");
} else if(ready == "No") {
  console.log("You broke my heart.")
} else {
  console.log("please either type 'Yes' or 'No'");
  process.abort();
}

console.log("-----------------------");
console.log("Note: While typing your answer use capital first alphabet");
console.log("-----------------------");

var score = 0;

var questions = [{
  question: "What's the birthday month of Abhay? ",
  answer: "August"
}, {
  question: "In what year Abhay graduated from college? ",
  answer: "2020"
}, {
  question: "Abhay loves- Cars or Bikes? ",
  answer: "Bikes"
}, {
  question: "What he enjoys the most Trekking or Coding? ",
  answer: "Trekking"
}, {
  question: "What he loves doing- Weightlifting or Running? ",
  answer: "Weightlifting"
}, {
  question: "His favorite place- Dharamshala or Shimla? ",
  answer: "Shimla"
}, {
  question: "He loves- Mutton or Chicken? ",
  answer: "Chicken"
}, {
  question: "What he hates the most- Instagram or Snapchat? ",
  answer: "Snapchat"
}, {
  question: "He is famous among his friends by the name? ",
  answer: "Maveshi"
}, {
  question: "To whom he feels comfortable sharing his feelings- Father or Mother? ",
  answer: "Mother"
}]

for(let i = 0; i < questions.length; i++){
  var listedQuestions = questions[i];
  if(readlineSync.question(listedQuestions.question) == listedQuestions.answer){
    score = score + 10;
  } else {
    score = score;
  }
}
console.log("Your score is: ", score);
if(score == 100){
  console.log("Will you marry me? ")
} else if(score < 100 && score >= 80){
  console.log("You need to spend more time with me. ")
} else{
  console.log("You don't know me son.")
}