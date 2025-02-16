
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
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //return re.test(String(email).toLowerCase());
    if(re.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showError(input, `${getFieldId(input)} is not a valid email`);
    }
}
// Function to check required fields have data
function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if(input.value === ''){
            console.log(input.id);
            showError(input,`${getFieldId(input)} is requried`);
        }
        else {
            showSuccess(input);
        }
    });
}
// Function to check lenght of input field
function checkLength(input, min, max){
    if(input.value.lenght<min){
        showError(input, `${getFieldId(input)} needs to be atleast ${min} characters`);
    }
    else if(input.value.lenght > max){
        showError(input, `${getFieldId(input)} needs to be less then ${max} characters`);
    }
    else{
        showSuccess(input);
    }
}

//Function to check if password and confirm password match
function checkPasswordsMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2, "Passwords don't match");
    }
}
// Function to get the ID of the input fields with proper case
function getFieldId(input){
    // return input.id.toUpperCase();
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Event Listeners
// Create Event Listener Button
form.addEventListener('submit', function(e){

    // stop page from reloading on submit
    e.preventDefault();
    
    checkRequired([username, email, password, confirmPassword]);
    checkLength(username,3,10);
    checkLength(password,6,30);
    checkEmail(email);
    checkPasswordsMatch(password, confirmPassword);
});

