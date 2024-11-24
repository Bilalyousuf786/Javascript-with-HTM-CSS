
// Retrieving HTML Elements from DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Function to update class and message for errors
function showError(input, message){
    // Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Override/replace the class - add error 
    formControl.className = 'form-control error';
    // Get the small element for the error message
    const small = formControl.querySelector('small');
    // Override/replace the text for small element using the input message
    small.innerText = message;
}

// Event Listeners
// Create Event Listener Button
form.addEventListener('submit', function(e){

    // stop page from reloading on submit
    e.preventDefault();
    //console.log(username.value);

    // Check if username is empty
    if(username.value === ''){
        // alert('Username is required');
        showError(username, 'Username is required');
    }
});

