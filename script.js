
let form = document.querySelector('form')
var globalCorrectAnswerPosition
var globalQuestionArray
let questionBox = document.getElementById('questionBox')
let scoreBox = document.querySelector('score')
let pAnswer = document.getElementById('pAnswer')
let progressBar = document.getElementById('progress-bar')
let scoreTracker = document.getElementById('scoreTracker')
let headd = document.getElementById('headd')
let answer = document.querySelector('answer')
// let a1 = document.getElementById('a1')
// let a2 = document.getElementById('a2')
// let a3 = document.getElementById('a3')
// let a4 = document.getElementById('a4')
var score = 0



 form.addEventListener('submit', makeRequest)
let url = 'https://opentdb.com/api.php?amount=20&category=15&type=multiple'
function makeRequest(event) {
    event.preventDefault()
    pAnswer.textContent = ""
     
//get value from form from input


//build the url
//make the fetch request to the url
fetch(url)
    .then(res => {
        return res.json()
    })
    .then(json => {
        console.log(json.results[0])
        //Declaring all API variables (questions, multiple choice, and answer)
        console.log(json.results[0].question)
        let question = json.results[0].question
        let mc1 = json.results[0].incorrect_answers[0]
        let mc2 = json.results[0].incorrect_answers[1]
        let mc3 = json.results[0].incorrect_answers[2]
        let mc4 = json.results[0].correct_answer
        let questionArray = [mc1, mc2, mc3, mc4]
  
        
//Shuffling the array to randomize the order.
//Below function pulled from stackoverflow.  By Deadrunk
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(questionArray)
console.log(questionArray)

//This variable stores the index # of correct answer after shuffle
globalCorrectAnswerPosition = questionArray.indexOf(mc4) 
console.log(globalCorrectAnswerPosition)

// globalQuestionArray = questionArray
//Populates possible trivia answers on front-end.
questionBox.textContent = question
a1.textContent = questionArray[0]
a2.textContent = questionArray[1]
a3.textContent = questionArray[2]
a4.textContent = questionArray[3]


            // let nameElement = document.createElement('div')
       
            // nameElement.innerHTML = question 
            // questionBox.appendChild(nameElement)

            
document.getElementById("a1").addEventListener("click", (event) => {
    event.stopPropagation();
    if (globalCorrectAnswerPosition === 0){

    score = score + 1;
   
    // scoreBox.textContent = score
    console.log("score is " + score)
    questionBox.textContent = ""
    a1.textContent = ""
    a2.textContent = ""
    a3.textContent = ""
    a4.textContent = ""
    alert("Corect!");
    pAnswer.textContent = "That's correct " + mc4 + "!"
    scoreTracker.textContent += "|"


 }
    else {
        alert("Incorrect")
        questionBox.textContent = ""
        a1.textContent = ""
        a2.textContent = ""
        a3.textContent = ""
        a4.textContent = ""
        pAnswer.textContent = "Incorrect.  The correct answer is " + mc4 + "!"
    }
    
});
document.getElementById("a2").addEventListener("click", (event) => {
    event.stopPropagation();
    if (globalCorrectAnswerPosition === 1){
        score = score + 1;
        
        // scoreBox.textContent = score
        console.log("score is " + score)
        questionBox.textContent = ""
        a1.textContent = ""
        a2.textContent = ""
        a3.textContent = ""
        a4.textContent = ""
        alert("Correct!")
        pAnswer.textContent = "That's correct " + mc4 + "!"
        scoreTracker.textContent += "|"
     
      }
        else {
            alert("Incorrect")
            questionBox.textContent = ""
            a1.textContent = ""
            a2.textContent = ""
            a3.textContent = ""
            a4.textContent = ""
            pAnswer.textContent = "Incorrect.  The correct answer is " + mc4 + "!"
        }
});
document.getElementById("a3").addEventListener("click", (event)  => {
    event.stopPropagation();
    if (globalCorrectAnswerPosition === 2){
        score = score + 1;
        
        console.log("score is " + score)
        questionBox.textContent = ""
        a1.textContent = ""
        a2.textContent = ""
        a3.textContent = ""
        a4.textContent = ""
        alert("Correct!")
        pAnswer.textContent = "That's correct " + mc4 + "!"
        scoreTracker.textContent += "|"
        
    }
        else {
            alert("Incorrect")
        questionBox.textContent = ""
        a1.textContent = ""
        a2.textContent = ""
        a3.textContent = ""
        a4.textContent = ""
        pAnswer.textContent = "Incorrect.  The correct answer is " + mc4 + "!"
        }
});
document.getElementById("a4").addEventListener("click", (event) => {
    event.stopPropagation();
    if (globalCorrectAnswerPosition === 3){
        score = score + 1;
        
        console.log("score is " + score)
        questionBox.textContent = ""
        a1.textContent = ""
        a2.textContent = ""
        a3.textContent = ""
        a4.textContent = ""
        alert("Correct!")
        pAnswer.textContent =  "That's correct " + mc4 + "!"
        scoreTracker.textContent += "|"
        
      }
        else {
            alert("Incorrect")
            questionBox.textContent = ""
            a1.textContent = ""
            a2.textContent = ""
            a3.textContent = ""
            a4.textContent = ""
            pAnswer.textContent = "Incorrect.  The correct answer is " + mc4 + "!"
        }
        
       
});


      
    })


    .catch(err => {
        console.error(err)
    })
 
}
let progressUp = 0
function progress () {

    progressUp = progressUp + 5
    progressBar.setAttribute('style', 'width: ' + progressUp + '%')

    
}



//if answer's textContent contains "correct", add 1 to score.
