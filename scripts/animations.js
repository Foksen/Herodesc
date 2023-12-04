function fadeIn(elem, duration, display) {
    if (elem.style.display != display && elem.style.display != "inline-block") {
        elem.style.opacity = 0;
        elem.style.transition = `opacity ${duration}ms`;
        setTimeout(() => {
            elem.style.opacity = 1;
        }, 10);
        elem.style.display = display ?? "inline-block";
    }
}

function fadeOut(elem, duration, display) {
    if (elem.style.display != "none") {
        elem.style.opacity = 1;
        elem.style.transition = `opacity ${duration}ms`;
        setTimeout(() => {
            elem.style.opacity = 0;
        }, 10);
        setTimeout(() => {
            elem.style.display = display ?? "none";
        }, duration);
    }
}