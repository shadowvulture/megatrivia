
let form = document.querySelector('form')
var globalCorrectAnswerPosition
var globalQuestionArray
let questionBox = document.getElementById('questionBox')
let a1 = document.getElementById('a1')
let a2 = document.getElementById('a2')
let a3 = document.getElementById('a3')
let a4 = document.getElementById('a4')


 form.addEventListener('submit', makeRequest)

 form.addEventListener('submit', makeRequest)
let url = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple'
function makeRequest() {
    event.preventDefault()
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

globalQuestionArray = questionArray

let q1Text = document.createElement('p')
q1Text.innerHTML = questionArray[0]
    if (globalCorrectAnswerPosition === 0) {
        a1.setAttribute('class', 'dingDing card-body bg-primary')
}
let q2Text = document.createElement('p')
q2Text.innerHTML = questionArray[1]
if (globalCorrectAnswerPosition === 1) {
    a2.setAttribute('class', 'dingDing card-body bg-primary')
}

let q3Text = document.createElement('p')
q3Text.innerHTML = questionArray[2]
if (globalCorrectAnswerPosition === 2) {
    a3.setAttribute('class', 'dingDing card-body bg-primary')
}

let q4Text = document.createElement('p')
q4Text.innerHTML = questionArray[3]
if (globalCorrectAnswerPosition === 3) {
    a4.setAttribute('class', 'dingDing card-body bg-primary')
}



// let a1 = document.querySelector('a1')
// //Next up:  append multiple choice answers to bootstrap cards for front end.  
// let a1Text = document.createElement('p')
// a1Text.innerHTML = questionArray[0]

// let a1 = document.createElement('div')
// a1.innerHTML = questionArray[0]
// a1.setAttribute('class', 'card bg-primary')
// a1.setAttribute('onClick', 'myFunction1()')
// let mc1Create = document.createTextNode(questionArray[0])

// console.log(mc1Create)
// let a2 = document.createElement('div')
// a2.innerHTML = questionArray[1]
// a2.setAttribute('class', 'card bg-primary')

// let a3 = document.createElement('div')
// a3.innerHTML = questionArray[2]
// a3.setAttribute('class', 'card bg-primary')

// let a4 = document.createElement('div')
// a4.innerHTML = questionArray[3]
// a4.setAttribute('class', 'card bg-primary')

// let mc1Create = document.createElement('div')
// mc1Create.innerText = questionArray[0]

// let mc2Create = document.createElement('div')
// mc2Create.innerText = questionArray[1]

// let mc3Create = document.createElement('div')
// mc3Create.innerText = questionArray[2]

// let mc4Create = document.createElement('div')
// mc4Create.innerText = questionArray[3]

        // let w75Div = document.createElement('div')
        //    w75Div.setAttribute('class', 'card w-75')

        // let bodyDiv = document.createElement('div')
        //    bodyDiv.setAttribute('class', 'card-body')

            let nameElement = document.createElement('div')
       
            nameElement.innerHTML = question 
            // w75Div.appendChild(bodyDiv)
            // document.body.appendChild(w75Div)
            questionBox.appendChild(nameElement)
            a1.appendChild(q1Text)
            a2.appendChild(q2Text)
            a3.appendChild(q3Text)
            a4.appendChild(q4Text)
//             bodyDiv.appendChild(a1)
//             bodyDiv.appendChild(a2)
//             bodyDiv.appendChild(a3)
//             bodyDiv.appendChild(a4)
var score = 0
document.getElementById("a1").addEventListener("click", function() {
    if (globalCorrectAnswerPosition === 0){
        alert("Corect!");
    score = score + 1;
    console.log(score)
    location.reload()
 }
    else {
        alert("Incorrect")
        location.reload()
    }
    
});
document.getElementById("a2").addEventListener("click", function() {
    if (globalCorrectAnswerPosition === 1){
        alert("Correct!")
        score = score + 1;
        console.log(score)
        location.reload()
      }
        else {
            alert("Incorrect")
            location.reload()
        }
});
document.getElementById("a3").addEventListener("click", function() {
    if (globalCorrectAnswerPosition === 2){
        alert("Correct!")
        score = score + 1;
        console.log(score)
        location.reload()
    }
        else {
            alert("Incorrect")
            location.reload()
        }
});
document.getElementById("a4").addEventListener("click", function() {
    if (globalCorrectAnswerPosition === 3){
        alert("Correct!")
        score = score + 1;
        console.log(score)
        location.reload()
      }
        else {
            alert("Incorrect")
            location.reload()
        }
});


      
    })
    .catch(err => {
        console.error(err)
    })
    
}

console.log(globalCorrectAnswerPosition)

// function myFunction1() {
//     if (a1.classList.contains('dingDong')) {
//         console.log("Testing!")
//     }
// }
