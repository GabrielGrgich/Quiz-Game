var canvas;
var gameState = 0;
var contestantCount, database, quiz, question, contestant;

function setup(){
  database= firebase.database()
  canvas = createCanvas(850,400);
  Quiz= new quiz()

  quiz.getState()
  quiz.start()

}


function draw(){
  background("pink");

  
}
