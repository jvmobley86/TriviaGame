//Initial Variables
//Reference an id from html in Jquery
var game = $("#game");
var wins = 0;
var losses = 0;
var timer = 5;
var intervalId = '';
var j = 0;

var questions = [
{
  question: "In 'I love Lucy', what was Ricky's ethnicity?",
  answers: ['Mexican', 'Puerto Rican', 'Colombian', 'Cuban'],
  correctAnswer: 'Cuban',
  pictureURL: 'assets/images/ricky.gif' 
},
{
  question: 'In what city did "The Honeymooners" live?',
  answers: ['Brooklyn', 'Bronx', 'Chicago', 'Detroit'],
  correctAnswer: 'Brooklyn',
  pictureURL: 'assets/images/honeymooners.gif'
},
{
  question: "In  'I Dream of Jeannie', how old is Jeannie when her bottle is noticed on a deserted island beach by astronaut Tony Nelson?",
  answers: ['20', '200', '2000', '20000'],
  correctAnswer: '2000',
  pictureURL: 'assets/images/jeannie.gif' 
},
{
  question: 'In "Bewitched", what was Darrin Stevens job?',
  answers: ['Architect', 'Ad Agency', 'Interior Designer', 'Lawyer'],
  correctAnswer: 'Ad Agency',
  pictureURL: 'assets/images/bewitched.gif'
},
{
  question: 'In "The Dick Van Dyke Show", what was Laura and Robs last name?',
  answers: ['Van Dyke', 'Peterson', 'Petrie', 'Dyke'],
  correctAnswer: 'Petrie',
  pictureURL: 'assets/images/dvd.gif'
},
{
  question: 'In "The Andy Griffith Show", which state was the town of Mulberry in?',
  answers: ['South Carolina', 'North Carolina', 'Connecticut', 'Virginia'],
  correctAnswer: 'North Carolina',
  pictureURL: 'assets/images/andy.gif'
}
]

$("#startButton").click(function(){
  $(".startPage").hide();
  $("#game").show()
  

function questionsCreation(j){
  game.empty();
  if(j < questions.length){
    var questionName = $('<h1>');
    questionName.text(questions[j].question)
    var image = $('<img>')
    image.attr('src', questions[j].pictureURL);

    game.append(questionName, image);

    var answersArray = questions[j].answers
    for (var i = 0; i < answersArray.length; i++) {
      var button = $('<button>');
      button.text(answersArray[i]);
      button.attr('data-answer', answersArray[i]);
      button.attr('data-correctAnswer', questions[j].correctAnswer)
      button.addClass('btn');
      game.append(button);
      
    };
  }else{

      

    stopInterval()
  }
}

questionsCreation(j);


$('.btn').on('click', function () {

var userAnswer = $(this).attr('data-answer');
var correctAnswer = $(this).attr('data-correctAnswer');
if(userAnswer === correctAnswer){
  wins++;
  console.log('Number of Wins: ' + wins)
}else{
  losses++;
  console.log('Number of losses: ' + losses);
}

})

intervalId = setInterval(function(){
timer--;
if(timer === 0){
  j++;
  questionsCreation(j);
}
}, 1000)


function stopInterval(){
  clearInterval(intervalId)
}
})

