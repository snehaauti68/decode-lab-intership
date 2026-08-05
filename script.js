const password = document.getElementById("password");
const bar = document.getElementById("bar");
const result = document.getElementById("result");
const toggle = document.getElementById("toggle");

password.addEventListener("input", function () {

    let value = password.value;
    let score = 0;

    if(value.length >= 8) score++;

    if(/[A-Z]/.test(value)) score++;

    if(/[a-z]/.test(value)) score++;

    if(/[0-9]/.test(value)) score++;

    if(/[!@#$%^&*(),.?":{}|<>]/.test(value)) score++;

    if(value.length === 0){

        bar.style.width = "0%";
        bar.style.background = "red";
        result.innerHTML = "Strength: None";
        return;
    }

    if(score <= 2){

        bar.style.width = "30%";
        bar.style.background = "red";
        result.innerHTML = "Strength: Weak";

    }
    else if(score === 3 || score === 4){

        bar.style.width = "70%";
        bar.style.background = "orange";
        result.innerHTML = "Strength: Medium";

    }
    else{

        bar.style.width = "100%";
        bar.style.background = "green";
        result.innerHTML = "Strength: Strong";

    }

});

toggle.addEventListener("click", function(){

    if(password.type === "password"){

        password.type = "text";
        toggle.innerHTML = "🙈";

    }else{

        password.type = "password";
        toggle.innerHTML = "👁";

    }

});