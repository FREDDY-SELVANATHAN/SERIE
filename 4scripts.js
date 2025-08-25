function isValidName(fname,lname){
    const nameCheck = /^[A-Za-z]+$/;
    return nameCheck.test(fname) && nameCheck.test(lname);
}
function isValidEmail(email){
    const emailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailcheck.test(email);
}
function passwordsMatch(password, confirmPassword){
    return password !==''&& password===confirmPassword;
}
function isStrongPassword(password){
    const passwordcheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordcheck.test(password);
}
 function toggleVisibility(inputId, toggleId) {
            const input = document.getElementById(inputId);
            const toggle = document.getElementById(toggleId);

            toggle.addEventListener('click', () => {
                if (input.type === "password") {
                    input.type = "text";
                    toggle.textContent = "🔓";
                } else {
                    input.type = "password";
                    toggle.textContent = "🔒";
                }
            });
        }

        toggleVisibility("new_password", "togglePassword");
        toggleVisibility("confirm_password", "toggleConfirmPassword");

document.getElementById('submitbtn').addEventListener('click', function(){
    const Fname = document.getElementById("firstName").value;
    const Lname = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("new_password").value;
    const confirmpassword = document.getElementById("confirm_password").value;
    if(!Fname || !Lname || !email || !username || !password || !confirmpassword) {
        alert("Please fill up all fields before signing up.");
        return;
      }
    if(!isValidName(Fname,Lname)){
            alert('Please, Enter a valid Name.');
            return;
    }
    if(!isValidEmail(email)){
        alert('Please, Enter a valid email.');
        return;
    }
    if(!isStrongPassword(password)){
        alert('Please, Enter a strong password.');
        return;
    }

    if(!passwordsMatch(password,confirmpassword)){
        alert('Please, Enter a valid password.');
        return;
    }
    alert('Registered Successfully to Serie. Awesome! You’re officially part of the family.');
    window.location.href = "3.html";

})