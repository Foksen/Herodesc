const ANIMATED_BLOBS = document.getElementsByClassName('liquid-background-blob-container-animated');

function setDefaultPos(blob) {
    blob.style.marginLeft = 0;
    blob.style.marginTop = 0;
}

function setRandomPos(blob, minX, maxX, minY, maxY) {
    let marginX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    let marginY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
    blob.style.marginLeft = marginX + "px";
    blob.style.marginRight = marginX + "px";
    blob.style.marginTop = marginY + "px";
    blob.style.marginBottom = marginY + "px";
}

for (let blob of ANIMATED_BLOBS) {
    setDefaultPos(blob);
    setInterval(setRandomPos, 5000, blob, -400, 400, -400, 400);
}