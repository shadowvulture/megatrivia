let form = document.querySelector('form')

 form.addEventListener('submit', makeRequest)

 form.addEventListener('submit', makeRequest)
let url = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple'
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





        let w75Div = document.createElement('div')
           w75Div.setAttribute('class', 'question w-75')

           let bodyDiv = document.createElement('div')
           bodyDiv.setAttribute('class', 'question-body')

            let nameElement = document.createElement('div')
       
            nameElement.innerHTML = question 
            w75Div.appendChild(bodyDiv)
            document.body.appendChild(w75Div)
            bodyDiv.appendChild(nameElement)
        
    })
    .catch(err => {
        console.error(err)
    })
}

//Fetch Trivia API.
//Declare variables for console.log(json.results[0].question) through json.results[9].question
//