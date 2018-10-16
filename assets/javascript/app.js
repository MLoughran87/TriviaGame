
// var questions = 

// var score = 0;

// for ( var i=0; i < questions.length; i++ ){
//     var response = window.prompt(questions[i].prompt);
//     if (response == questions[i].answer){
//         score++;
//        
    
//  

// }
var number = 100;
var quizbody;

function run() {
    intervalId = setInterval(decrement, 1000);
    $(".quizbody").show();
  }

function decrement() {

     number--;

     $("#countdown").html ( "Time Remaining:" + number );

    // if (number === 0) {

    //   stop();

    //   alert("Time Up!");
  console.log(number);
    // }
}

function stop() {

    clearInterval(intervalId);
  }


//   run();

//   decrement();


$("#startbutton").click (run);