
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

// Function to update class for success
function showSuccess(){
    // Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Override/replace the class - add success
    formControl.className = 'form-control success';
}
// Function to check if email is valid
function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
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
    else{
        showError(username);
        //console.log(username.value);
    }

    // Check if email is empty
    if(email.value === ''){
        // alert('Email is required');
        showError(email, 'Email is required');
    }
    else{
        showError(email);
        //console.log(email.value);
    }

    // Check if password is empty
    if(password.value === ''){
        // alert('Password is required');
        showError(password, 'Password is required');
    }
    else{
        showError(password);
        //console.log(password.value);
    }

    // Check if confirm-password is empty
    if(confirmPassword.value === ''){
        // alert('confirmPassword is required');
        showError(confirmPassword, 'confirmPassword is required');
    }
    else{
        showError(confirmPassword);
        //console.log(confirmPassword.value);
    }
});

