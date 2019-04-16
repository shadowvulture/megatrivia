let form = document.querySelector('form')

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
        console.log(json)
        let randomCatImage = document.getElementById('randomCatImage')
        console.log(json.results[0].question)
 
    

 
    })
    .catch(err => {
        console.error(err)
    })
}
