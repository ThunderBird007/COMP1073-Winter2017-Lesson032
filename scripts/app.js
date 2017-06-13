/# javascript lives here */

console.log("App started!");
// create a reference to the button on the page
var clickMeButton = document.getElementById("clickMeButton");

// add an event listener
clickMeButton.addEventListener("click", Click)
// click function - used as an event handler
function Click() {
    console.log("Clicked !");
}