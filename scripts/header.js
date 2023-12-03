const HEADER_CLOSE_CB = document.getElementById('header-close-cb');
const HEADER_HIDING = document.getElementsByClassName('header-hiding');

const MAX_HIDING_WIDTH = 768;

HEADER_CLOSE_CB.onchange = function() {
    for (let elem of HEADER_HIDING) {
        HEADER_CLOSE_CB.checked ? fadeIn(elem, 200) : fadeOut(elem, 200);
    }
};

function showElems(elems) {
    for (let elem of elems) {
        elem.style.display = "inline-block";
        elem.style.opacity = 1;
    }
}
function hideElems(elems) {
    for (let elem of elems) {
        elem.style.display = "none";
        elem.style.opacity = 0;
    }
}

var oldWidth = 1920;
window.onresize = function() {
    let newWidth = this.innerWidth;
    if (oldWidth <= MAX_HIDING_WIDTH && newWidth > MAX_HIDING_WIDTH) {
        HEADER_CLOSE_CB.checked = true;
        showElems(HEADER_HIDING);
    }
    else if (oldWidth > MAX_HIDING_WIDTH && newWidth <= MAX_HIDING_WIDTH) {
        HEADER_CLOSE_CB.checked = false;
        hideElems(HEADER_HIDING);
    }
    oldWidth = this.innerWidth;
}
window.onresize();