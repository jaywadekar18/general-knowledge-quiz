
var readlineSync = require('readline-sync');
 let correctAnswerCount =0;
// Wait for user's response.
function correctAnswer(){
  console.log("correct answer!!");
}
function wrongAnswer(){
  console.log("Wrong answer");
}
console.log("We will be playing a General knowledge quiz guys...")
var userName = readlineSync.question('May I have your name? ');

console.log("hello" + userName + " welcome!!");

let assessmentData = [
  {question: 'what 1 + 2 ?',
  answer:3,id:0},
  {question: 'On which planet do u live?',
  answer:'earth',id:1},
  {question: 'what name of our Prime minister?',
  answer:'narendra modi',id:2},
  {question: 'is icecream good for helth',
  answer:'no',id:3},
  {question: 'what 6*9 ?',
  answer:54,id:4},
]

function playGame(question ,answer){
  var answerByUser = readlineSync.question(question);
    if(answer?.toString() === answerByUser){
      correctAnswerCount++;
      correctAnswer()
    }
  else{
    wrongAnswer()
  }
  
}
for(let i=0 ; i < assessmentData.length ;i++){
     playGame(assessmentData[i].question ,assessmentData[i].answer )
}
console.log('your score is ->> ' + correctAnswerCount);
console.log("Thanks for playing!!")

