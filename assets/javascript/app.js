
// var questions = [
//     {
//         prompt: "What color are apples?\n(a) Red/green\n\
//         (b) Purple\n(c) Orange",
//         answer: "a"
//     },
//     {
//         prompt: "What color are Bananas?\n(a) Teal\n\
//          (b) Magenta\n (c) Yellow",
//         answer: "c"
//     },
//     {
//         prompt: "What island was Napoleon banished to?\n(a) Elba\n\
//         (b) Santorino\n (c) Bermuda",
//     }
// ];

// var score = 0;

// for ( var i=0; i < questions.length; i++ ){
//     var response = window.prompt(questions[i].prompt);
//     if (response == questions[i].answer){
//         score++;
//         alert("Correct");
    
//     }

//     else {
//         alert("Wrong!");
//     }

// }
var number = 100;

function run() {
    intervalId = setInterval(decrement, 1000);
  }

function decrement() {

    number--;

    $("countdown").html("<h2>" + number + "</h2>");

    if (number === 0) {

      stop();

      alert("Time Up!");
    }
}

function stop() {

    clearInterval(intervalId);
  }

  run();