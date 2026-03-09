function toggleLike () {
    let heart =  element.querySelector("img");

    if (heart.dataset.liked === "true") {
        heart.style.filter = "grayscale(100%)";
        heart.dataset.liked = "false";
    } else {
        heart.style.filter = "invert(21%) sepia(85%) saturate(7483%) hue-rotate(358deg) brightness(91%) contrast(120%)";
        heart.dataset.liked = "true";
    }
}

