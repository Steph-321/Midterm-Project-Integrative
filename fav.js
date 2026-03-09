function toggleLike(element) {
    let heart =  element.querySelector("img");

    if (heart.dataset.liked === "true") {
        heart.style.filter = "grayscale(100%)";
        heart.dataset.liked = "false";
    } else {
        heart.style.filter = "invert(21%) sepia(85%) saturate(7483%) hue-rotate(358deg) brightness(91%) contrast(120%)";
        heart.dataset.liked = "true";
    }
}

function addcomment(button){
    let commentInput = button.previousElementSibling;
    let commentText = commentInput.value.trim();
    if (commentText !== "") {
        let commentList = button.parentElement.querySelector(".comments-list");
        let newComment = document.createElement("li");
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = "";
    }
}

function openPage(url) {
    window.open(url), '_blank';
    self.close();
}