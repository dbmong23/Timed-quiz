var Question1El = document.querySelector

// On mouse-over, execute myFunction
function myFunction() {
    document.getElementById("myCheck").click();
  }
  //SETTING TIMER to run before everything else renders
  var timerEl = document.getElementById("Timer");

    var counter =20;

    function setTimer() {
      alert("You Have 20 Seconds Remaining!");
    }
    function timerInterval(){
        counter--;
        if(counter===0){
          alert("Time is Up!");;
        }
      }
  
  // Add code to process the submitted answers and display the results


// Define the question and options
let question = "Who is the Presidnet of America?";
let options = {
  A: "Biden",
  B: "Trump",
  C: "Somebody in some coporate",
  D: "AH that's tricky"
};

// Display the question and options
console.log(question);
for (let option in options) {
  console.log(option + ": " + options[option]);
}

// Get the user's answer
let userAnswer = "A"; // Assuming the user selects option A

// Check if the user's answer is correct
if (userAnswer === "A") {
  console.log("Correct answer!");
} else {
  console.log("Incorrect answer!");
}