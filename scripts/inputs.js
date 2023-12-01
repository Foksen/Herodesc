const INPUT_CLEAR_BTNS = document.getElementsByClassName("input-button-clear");
const INPUT_SHOWPASS_CBS = document.getElementsByClassName("input-checkbox-showpass");

function clearBtn() {
    let btn = this;
    let inputs = btn.parentNode.parentNode.getElementsByClassName("input-type1");
    for (let input of inputs) {
        input.value = "";
    }
}

function showPass() {
    let cb = this;
    let inputs = cb.parentNode.parentNode.getElementsByClassName("input-type1");
    for (let input of inputs) {
        input.type = (cb.checked ? "text" : "password");
    }
}

for (let btn of INPUT_CLEAR_BTNS) {
    btn.onclick = clearBtn;
}

for (let cb of INPUT_SHOWPASS_CBS) {
    cb.onchange = showPass;
}