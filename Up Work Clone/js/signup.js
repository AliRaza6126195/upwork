
function validateForm() {
var form = document.signupform;
var firstName = form.FirstName.value;
var lastName = form.LastName.value;
var email = form.email.value;
var password = form.password.value;
var country = form.Pakistan.value;
var checkbox = form.chackbox.checked;

// First Name validation
if (firstName == "" || firstName == null) {
document.querySelector('.name .formerror').innerHTML = 'First Name is required';
return false;
}

// Last Name validation
if (lastName == "" || lastName == null) {
document.querySelector('.name .formerror').innerHTML = 'Last Name is required';
return false;
}

// Email validation
var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
if (email == "" || email == null || !emailRegex.test(email)) {
document.querySelector('.other-infirmation .formerror').innerHTML = 'Valid Email is required';
return false;
}

// Password validation
var passwordRegex = /^(?=.[a-zA-Z])(?=.[0-9]).{8,}$/;
if (password == "" || password == null || !passwordRegex.test(password)) {
document.querySelector('.other-infirmation .formerror').innerHTML = 'Password must contain at least 8 characters, one letter and one number';
return false;
}

// Country validation
if (country == "" || country == null) {
document.querySelector('.country-details .formerror').innerHTML = 'Country is required';
return false;
}

// Checkbox validation
if (!checkbox) {
document.querySelector('.formerror').innerHTML = 'Please agree to the terms';
return false;
}

return true;
}