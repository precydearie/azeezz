var email = document.getElementById(email);
var password = document.getElementById(password);
var form= document.querySelector(form);
var errorMessage= document.getElementById(errorMessage);

form.addEventListener("submit", (e) => {
    var errors = [];

    if(email.value.trim() === ""){
        errors.push("Email required")
    }

    if(password.value.length < 4){
        errors.push("Password must be at least 4 characters")
    }

    if(password.value.length > 10){

        errors.push("Password must be less than 10 characters")
    }

    if(errors.length > 0){
        e.preventDefault();
        errorMessage.toggleAttribute('hidden');
        errorMessage.innerHTML= errors.join(',');
    }
})