const FILTER_CB = document.getElementById("search-filter-cb");
const FILTER_PANEL = document.getElementById("search-filter-panel");
const FILTER_LABEL_ICON = document.getElementById("search-filter-label-icon");
const FILTERS_CONTAINER = document.getElementById("search-filter-filters-container");

function disableScroll() {
    window.scrollTo(0, 0);
    window.onscroll = function() {
        window.scrollTo(0, 0);
    }
}

function enableScroll() {
    window.onscroll = function() {}
}

FILTER_PANEL.openPanel = function() {
    disableScroll();

    if (document.body.clientWidth > 768) {
        fadeOut(FILTER_LABEL_ICON, 100);
        setTimeout(() => {
            FILTER_PANEL.style.width = "19em";
        }, 100, "");
        setTimeout(fadeIn, 250, FILTERS_CONTAINER, 150);
    }
    else {
        FILTER_PANEL.style.width = "19em";
        setTimeout(fadeIn, 150, FILTERS_CONTAINER, 200);
    }
}

FILTER_PANEL.closePanel = function() {
    enableScroll();

    fadeOut(FILTERS_CONTAINER, 200, "");
    setTimeout(() => {
        FILTER_PANEL.style.width = "";
    }, 200);
    if (document.body.clientWidth > 768) {
        setTimeout(fadeIn, 350, FILTER_LABEL_ICON, 100, "");    
    }
}

FILTER_PANEL.addEventListener("focusout", () => {
    FILTER_CB.checked = false;
    FILTER_CB.onchange();
});

FILTER_CB.onchange = function() {
    if (FILTER_CB.checked) {
        FILTER_PANEL.focus();
        FILTER_PANEL.openPanel();
    }
    else {
        FILTER_PANEL.closePanel();
    }
}