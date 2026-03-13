//PORTFOLIO PAGE

function Acceleration(button) {
    let initialVelocity = parseFloat(prompt("Enter Initial Velocity: "));
    if (isNaN(initialVelocity)) {
        alert("INVALID INPUT!");
        return
    }
    let finalVelocity = parseFloat(prompt("Enter Final Velocity: "));
    if (isNaN(finalVelocity)) {
        alert("INVALID INPUT!");
        return
    }
    let time = parseFloat(prompt("Enter time: "));
    if (isNaN(time)) {
        alert("INVALID INPUT!");
        return
    } else {
        alert("Acceleration is " + ((finalVelocity - initialVelocity) / time).toFixed(2));
    }
}

function TempConverter(button) {
    let celsius = parseFloat(prompt("Enter Celsius: "));
    if (isNaN(celsius)) {
        alert("INVALID INPUT!");
        return
    } else {
        let fahrenheit = (celsius * 1.8) + 32;
        alert("The temperature in Fahrenheit is: " + fahrenheit.toFixed(2) + "°F");
    }
}

// function LongerWord(button){
//     let n = parseInt(prompt("Enter how many words you want to input: "));
//     if(isNaN(n)){
//         alert("INVALID INPUT!")
//     }else{
//         let a = [n];
//         let current = ""
//         for(let j=0;j<n;j++){
//             a[j] = prompt("Enter Word " + (j+1) + ": ").trim();
//         }
//         for(let i=0;i<n;i++){
//             if(a[i].length>current.length){
//                 current = a[i];
//             }
//         }
//         alert("The longer word is: " + current);
//     }
// }

function LongerWord(button) {
    let w1 = prompt("Enter Word 1: ");
    if (!isNaN(w1)) {
        alert("Invalid!");
        return;
    }
    let w2 = prompt("Enter Word 2: ");
    if (!isNaN(w2)) {
        alert("Invalid!");
        return;
    }

    if (w1.length > w2.length) {
        alert("Word 1 is Longer: " + w1);
    } else if (w1.length < w2.length) {
        alert("Word 2 is Longer: " + w2);
    } else {
        alert("Both Word are Equal!");
    }
}

function Birthstone(button) {
    let birthmonth = prompt("Enter your birthmonth: ").trim().toLowerCase();
    if (!isNaN(birthmonth)) {
        alert("Invalid Input!")
    } else {
        switch (birthmonth) {
            case "january":
                alert("Your birthstone is Garnet!");
                break;
            case "february":
                alert("Your birthstone is Amethyst!");
                break;
            case "march":
                alert("Your birthstone is Aquamarine!");
                break;
            case "april":
                alert("Your birthstone is Diamond!");
                break;
            case "may":
                alert("Your birthstone is Emerald!");
                break;
            case "june":
                alert("Your birthstone is Alexandrite & Pearl!");
                break;
            case "july":
                alert("Your birthstone is Ruby!");
                break;
            case "august":
                alert("Your birthstone is Peridot!");
                break;
            case "september":
                alert("Your birthstone is Sapphire!");
                break;
            case "october":
                alert("Your birthstone is Opal & Tourmaline!");
                break;
            case "november":
                alert("Your birthstone is Citrine & Topaz!");
                break;
            case "december":
                alert("Your birthstone is Blue Zircon, Turquoise, & Tanzanite!");
                break;
            default:
                alert("INVALID INPUT!")
        }
    }
}

function BasicOperations(button) {
    let num1 = parseInt(prompt("Enter number 1: "));
    if (isNaN(num1)) {
        alert("INVALID INPUT!");
        return
    }
    let num2 = parseInt(prompt("Enter number 2: "));
    if (isNaN(num2)) {
        alert("INVALID INPUT!");
        return
    }
    let operator = prompt("Enter Operation: ").trim().toUpperCase();
    switch (operator) {
        case "+":
        case "ADDITION":
            alert("Sum: " + (num1 + num2));
            break;
        case "-":
        case "SUBTRACTION":
            alert("Sum: " + (num1 - num2));
            break;
        case "*":
        case "MULTIPLICATION":
            alert("Sum: " + (num1 * num2));
            break;
        case "/":
        case "DIVISION":
            alert("Sum: " + (num1 / num2));
            break;
        default:
            alert("INVALID INPUT!")
    }
}


//HOME PAGE
const carouselContainer = document.querySelector('.container');
const dots = document.querySelectorAll('.carousel__dot');
const totalSlides = dots.length;
let currentSlide = 0;
let autoSlideInterval;

function goToSlide(index) {
    currentSlide = index;
    const offset = -index * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    const next = (currentSlide + 1) % totalSlides;
    goToSlide(next);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const slideIndex = parseInt(dot.getAttribute('data-slide'), 10);
        goToSlide(slideIndex);
        resetAutoSlide();
    });
});

goToSlide(0);
startAutoSlide();

//FAVORITES
function toggleLike(element) {
    let heart =  element.querySelector("img");

    if (heart.dataset.liked === "true") {
        heart.src = "../images/heart.png";
        heart.dataset.liked = "false";
        element.classList.remove("liked");
    } else {
        heart.src = "../images/heart-filled.png";
        heart.dataset.liked = "true";
        element.classList.add("liked");
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