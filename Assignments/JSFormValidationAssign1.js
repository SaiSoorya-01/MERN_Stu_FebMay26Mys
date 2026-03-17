const signupForm = document.getElementById("signupForm");
const signupPassword = document.getElementById("signupPassword");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

signupForm.addEventListener("submit", function(event){
    event.preventDefault();
    const password = signupPassword.value;
    const confirm = confirmPassword.value;
    // Password required
    if(!password){
        message.textContent = "Password is required.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }
    // Password length
    if(password.length < 8){
        message.textContent = "Password must be atleast 8 characters long.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }
    // Check for UPPERCASE characters
    if(!/[A-Z]/.test(password)){
        message.textContent = "Password must have atleast 1 UPPERCASE character.";
        message.style.color  = "red";
        livePassword.focus();
        return;
    }
    // Check for LOWERCSE characters
    if(!/[a-z]/.test(password)){
        message.textContent = "Password must have atleast 1 LOWERCASE character.";
        message.style.color  = "red";
        livePassword.focus();
        return;
    }
    // check number 
    if(!/\d/.test(password)){
        message.textContent = "Password must have atleast 1 digit in it.";
        message.style.color  = "red";
        livePassword.focus();
        return;
    }
    // check for special characters 
    if(!/[@#$%&*!]/.test(password)){
        message.textContent = "Password must have atleast 1 special character [!@#$%&*].";
        message.style.color  = "red";
        livePassword.focus();
        return;
    }
    // Confirm password check
    if(password !== confirm){
        message.textContent = "Passwords do not match.";
        message.style.color = "red";
        confirmPassword.focus();
        return;
    }
    // Success 
    message.textContent = "Password matched successfully!";
    message.style.color = "green";
    console.log("Success!");
});
// clear message on input
signupPassword.addEventListener("input", () => message.textContent = "");
confirmPassword.addEventListener("input", () => message.textContent = "");