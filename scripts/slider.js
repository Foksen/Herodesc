const SLIDERS = document.getElementsByClassName("slider");

for (let slider of SLIDERS) {
    let images = slider.getElementsByClassName("slider-img");

    slider.pos = 0;
    slider.end_pos = images.length - 1;

    let btn_left = slider.getElementsByClassName("slider-btn-left")[0];
    let btn_right = slider.getElementsByClassName("slider-btn-right")[0];

    slider.update_btns = function() {
        btn_left.disabled = (slider.pos == 0 ? true : false);
        btn_right.disabled = (slider.pos == slider.end_pos ? true : false);
    }

    btn_left.onclick = function() {
        if (slider.pos > 0) {
            fadeOut(images[slider.pos--], 200);
            fadeIn(images[slider.pos], 200);
        }
        slider.update_btns();
    }

    btn_right.onclick = function() {
        if (slider.pos < slider.end_pos) {
            fadeOut(images[slider.pos++], 200);
            fadeIn(images[slider.pos], 200);
        }
        slider.update_btns();
    }

    slider.update_btns();
}