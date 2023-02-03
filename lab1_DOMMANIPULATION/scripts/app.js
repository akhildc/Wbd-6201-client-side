

/**
 * Redirect after a specific period of time
 * @param {*} e 
 * 
 */
function timedRedirect(e){
    let contactName = document.getElementById('userName').value
    let contactEmail = document.getElementById('inputEmail').value
    let contactPhone = document.getElementById('inputPhone').value
    let contactMessage = document.getElementById('textAreaInput').value
    e.preventDefault()
    setTimeout(function (){
        window.location.href = "index.html"
    },3000)

}

let submitButton = document.getElementById('submit-button')
if (submitButton){
    submitButton.addEventListener('click', timedRedirect, false)
}

/**
 * Function to insert bodycopy
 * @param {*} elementId 
 * @param {*} textToAdd 
 */
function addText (elementId, textToAdd)
{
    
    let paragraph = document.getElementById(elementId)
    paragraph.innerHTML  = textToAdd

}
// Add welcome message to index page 
// let paragraph = document.getElementById("welcome")

// let welcomeText = "Welcome to the web page of Akhil John Sunny"
// if(paragraph){
//     addText (paragraph, welcomeText)
// }
// Add welcome message to index page 
let indexText1 = "welcome"

let welcomeText = "Welcome to the web page of  Akhil John Sunny"

addText (indexText1, welcomeText)

// Add welcome message to 

