
// var questions = 

// var score = 0;

// for ( var i=0; i < questions.length; i++ ){
//     var response = window.prompt(questions[i].prompt);
//     if (response == questions[i].answer){
//         score++;
//        

//  

// }
var number = 30;
var quizBody;
// var for correct, wrong, and unaswered questions
var correctAnswer = 0;
var wrongAnswer = 0;
var unAnswered = 0;



function run() {
    intervalId = setInterval(decrement, 1000);
    $(".quizbody").show();
}

function decrement() {

    number--;

    $("#countdown").html("Time Remaining:" + number);
    console.log(number);
    if (number === 0) {
  
        alert("Time Up!");

      stop();

      

   
    }
}

function stop() {

    clearInterval(intervalId);
    submitscore();
    $(".quizbody").hide();
    $("#results").show();
}


//   run();

//   decrement();

// set up function for computing correct, wrong, and unanswered

function question1() {

    var rightanswer = document.getElementsByName("question1");
    console.log(rightanswer[0].checked)
    if (rightanswer[0].checked === true) {
        // return 1
        console.log("correct")
        correctAnswer++;
        console.log(correctAnswer)
    }

    else {
        console.log("wrong")
        wrongAnswer++;
        console.log(wrongAnswer)
    }

    // return -1;
};
$(".question1").click(question1);

function question2() {

    var rightanswer = document.getElementsByName("question2");
    if (rightanswer[0].checked === true) {
        console.log("correct")
        correctAnswer++;
        console.log(correctAnswer)
        // return 1
    }

    else {
        console.log("wrong")
        wrongAnswer++;
        console.log(wrongAnswer)
        
    }

    // (type[1,2].checked === false)
    //     return -1;
};
$(".question2").click(question2);

function question3() {

    var rightanswer = document.getElementsByName("question3");
    if (rightanswer[2].checked === true) {
        console.log("correct")
        correctAnswer++;
        console.log(correctAnswer)
        // return 1;
    }
    else {
        console.log("wrong")
        wrongAnswer++;
        console.log(wrongAnswer)
        
    }
    // return -1;
};
$(".question3").click(question3);

function question4() {

    var rightanswer = document.getElementsByName("question4");
    if (rightanswer[2].checked === true) {
        console.log("correct")
        correctAnswer++;
        console.log(correctAnswer)
        //return 1;
    }
    else {
        console.log("wrong")
        wrongAnswer++;
        console.log(wrongAnswer)
    }

};
$(".question4").click(question4);

//function for getting scores 

function rightAnswers() {

}

function wrongAnswers (){

}

function submitscore (){
    $("#results").html("Correct: " + correctAnswer);
    $("#results").append("<br>" + "Wrong: " + wrongAnswer);
    console.log (correctAnswer);
    console.log(wrongAnswer);
}
// Event Handlers 


$("#startbutton").click(run);


$("#submitbutton").click(stop);

// Errors i am aware of 
// 1. If you click on multiple buttons, it will continuously increase the score of the right or 
// wrong answers. 

// 2. the website is not responsive, mobile or otherwise. 
// 3. i never got to the point where i was able to incorporate bootstrap css methods. 
// 4. The css is not completed but i am feeling better about it. 