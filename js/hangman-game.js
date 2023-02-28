// Letters English
let letters = 'abcdefghijklmnopqrstuvwxyz'
// Array From Letters
let lettersArray = Array.from(letters)
// Get Letters container
let conLetters = document.querySelector('.letters')
// console.log(conLetters)
lettersArray.forEach(letter => {
   // Create Span To Letters
   let newSpan = document.createElement('span')
    // Create Text To Span
    let spanText = document.createTextNode(letter)
    // Add Class Name To New Span
    newSpan.className = 'letter-box'
    // Add Text To Span
    newSpan.appendChild(spanText)
    // Add Span To Letters
    conLetters.appendChild(newSpan)
});
// Words To Category
let words = {
    moves: ['Interstellar', 'Avengers', 'Avatar', 'It', 'The Dark Knight'],
    series: ['Game Of Thrones', 'Peaky Blinders', 'Breaking Bad', 'See', 'Vikings'],
    people: ['Messi', 'Cristiano', 'Ronaldo', 'Neymar', 'Ronaldinho', 'Haaland', 'Rooney'],
    animals: ['Cat', 'Dog', 'Tiger', 'Lion', 'Monkey']
}
// Array => Keys
let allWords = Object.keys(words),
    // Random Number Of All Words => (Words)
    randomNamber = Math.floor(Math.random() * allWords.length) ,
    // Choose Value Of Words
    randomValue = allWords[randomNamber],
    // Get Array Value Of Words
    randomWords = words[randomValue],
    // Random Number Of Array Value Of Words
    randomValueNamber = Math.floor(Math.random() * randomWords.length),
    // Chosse Value Of Array Value Of Words
    randomValueNumberValue = randomWords[randomValueNamber];
// console.log(randomNamber)// console.log(randomValue)// console.log(randomWords)// console.log(randomValueNamber) // console.log(randomValueNumberValue)
// Get Category Info
let categorySpan = document.querySelector('.category span')
categorySpan.innerHTML = randomValue
// Get Letters Guess
let lettersGuess = document.querySelector('.letters-guess'),
    // Array from Chosse Value Of Array Value Of Words
    lettersGuessArray = Array.from(randomValueNumberValue)
lettersGuessArray.forEach(e => {
    // Create Span To Letters
    let emptySpan = document.createElement('span')
    if (e === ' ') {
        // Add Class Name To New Span
        emptySpan.className = 'with-space'
    }
    // Add Span To Letters Guess
    lettersGuess.appendChild(emptySpan)
})
// Set HangMan Draw
let hangManDraw = document.querySelector('.hangman-draw')
// Set Wrong Answers
let wrongAnswers = 0;
// Get All Span Letters Guess
let lettersGuessSpans = document.querySelectorAll('.letters-guess span')
// Check Letters To Clicked
document.addEventListener('click', function (e) {
    // Set Answer To Correct Or Not
    let theAnswer = false;
    // Check Letter To Clicked contains class letter-box
    if (e.target.className === 'letter-box') {
        e.target.classList.add('clicked')
        let lettersClicked = e.target.innerHTML.toLowerCase()
        // console.log(lettersClicked)
        // console.log(lettersGuessArray)
        // Loop Check If Word Contains letters to Clicked
        let wordChoosen = Array.from(randomValueNumberValue.toLowerCase())
        wordChoosen.forEach((wordLetters, wordIndex) => {
            if (lettersClicked === wordLetters) {
                // Set Answer To Correct Or Not
                theAnswer = true;
                lettersGuessSpans.forEach((span, spanIndex) => {
                    if (wordIndex === spanIndex) {
                        span.innerHTML = wordLetters;
                    }
                })
            }
        })
        if (theAnswer !== true) {
            wrongAnswers++;
            // Add Class Wrong On The Draw Element
            hangManDraw.classList.add(`wrong-${wrongAnswers}`)
            if (wrongAnswers === 8) {
                conLetters.classList.add('finished')
                endGame()
            }
            document.getElementById('music-failed').play()
        } else {
            document.getElementById('music-success').play()
        }
    }
})
function endGame() {
    let popupDiv = document.createElement('div'),
        popupText = document.createTextNode(`Game Over, The Word Is:- (${randomValueNumberValue})`),
        popupButtonText = document.createTextNode('Try Again'),
        popupButton = document.createElement('button');
    popupButton.appendChild(popupButtonText)
    popupDiv.classList.add('popup')
    popupDiv.appendChild(popupText)
    popupDiv.appendChild(popupButton)
    document.body.appendChild(popupDiv)
}
// function clickPopupButton() {
//
// }
















