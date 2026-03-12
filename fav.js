function toggleLike(element) {
    let heart =  element.querySelector("img");

    if (heart.dataset.liked === "true") {
        heart.src = "../images/icon.png";
        heart.dataset.liked = "false";
    } else {
        heart.src = "..images/heart-filled.png";
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