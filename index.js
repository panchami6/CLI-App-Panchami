var readlineSync = require('readline-sync');

var name = readlineSync.question("Please enter your name: ");

console.log("Welcome to the game "+name+"!!");

var questionOne = {
  question : "Where do I live? ",
  answer : "bangalore"
}

var questionTwo = {
  question : "Where do I work? ",
  answer : "wipro"
}

var questionThree = {
  question : "What is my favorite pet? ",
  answer : "cat"
}

var questionFour = {
  question : "What is my favourite hobby? ",
  answer : "singing"
}


var score=0;
function quiz(quest,ans){
  var allAnswers = readlineSync.question(quest);

  if(allAnswers.toLowerCase() === ans){
    console.log("You are right!!");
    score+=1;
  }
  else{
    console.log("You are wrong!");
  }

  console.log("Your current score is: "+score);
}


var allQuestions = [questionOne, questionTwo, questionThree,questionFour];

for(var i=0;i<allQuestions.length;i++){
  quiz(allQuestions[i].question, allQuestions[i].answer);
}
console.log("---------------------------");
console.log("Your final score is: "+score);

var highScores = [{
  name : "Panchami", score : 4,},
  {name : "Manasa", score : 3,},
  {name : "Ashwini", score : 2,
  }]

console.log("---------------------------");
console.log("These are the highscores: ");
for(i=0;i<highScores.length;i++){
  console.log(highScores[i].name +":::" +highScores[i].score);
}
console.log("---------------------------");
console.log("Send me a screenshot if you beat the highscores :)");