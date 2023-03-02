// Adds the user name to navbar when Login button is clicked
$(document).ready(function() {//https://www.w3schools.com/jquery/event_ready.asp
    $("#sign-in-button").click(function() {
        // Get the value of username
      let username = $("#userNameInput").val();
      // If username not empty
      if (username !== "") {
        // Create a new nav item with user name
        let newNavItem = $("<li class='nav-item'><a class='nav-link' href='index.html'>" + username + "</a></li>");
        // Add the new nav item into the nav list
        $("#contact-link").after(newNavItem);
      }
    });
  })

/**
 * function to create div element ErrorMessage
 */

function createDivError(){
  // create the error message div
  let errorMessage = $("<div id='ErrorMessage'></div>")
  // set the initial CSS for the error message div
  errorMessage.css({
    "background-color": "red",
    color: "red"
  });

$("body").append($errorMessage)
($errorMessage).hide()

}
// Store the registration submit button element  
let regSubmitButton = document.getElementById("btnRegSubmit")
// If there is registration submit button call the element to create div
if(regSubmitButton){
  createDivError()
}

// Function to validate name
function validateName(){
  let firstNameInput = $('#inputFirst')
  let lastNameInput = $('#inputLast')
  if (firstNameInput.val().length < 2 || lastNameInput.val().length < 2) {
    return "<p>You have entered First name or Last name that is too short.</p>"
  }
  else {
      return "<p></p>";
  }
}
  
  

