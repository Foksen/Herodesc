const SIGNIN_RB = document.getElementById("auth-panel-choose-signin");
const SIGNUP_RB = document.getElementById("auth-panel-choose-signup");

const SIGNIN_FORM = document.getElementById("auth-panel-form-signin");
const SIGNUP_FORM = document.getElementById("auth-panel-form-signup");

function switchPage(form) {
    if (form == "signin") {
        fadeOut(SIGNUP_FORM, 200);
        setTimeout(fadeIn, 200, SIGNIN_FORM, 400, "initial");
    }
    else if (form == "signup") {
        fadeOut(SIGNIN_FORM, 200);
        setTimeout(fadeIn, 200, SIGNUP_FORM, 400, "initial");
    }
}

SIGNIN_RB.onchange = function() {
    switchPage("signin");
}

SIGNUP_RB.onchange = function() {
    switchPage("signup");
}