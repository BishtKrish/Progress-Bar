// Image elements and stages
const imageElement = document.getElementById("stage-image");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");

// Function to change image based on stage
function changeImage(stage) {
    let imageUrl = "";
    switch(stage) {
        case 1:
            imageUrl = "./images/1.webp"; // Add your image URLs here
            break;
        case 2:
            imageUrl = "./images/2.webp";
            break;
        case 3:
            imageUrl = "./images/3.jpeg";
            break;
        case 4:
            imageUrl = "./images/4.webp";
            break;
        case 5:
            imageUrl = "./images/5.jpg";
            break;
        case 6:
            imageUrl = "./images/6.webp";
            break;
        case 7:
            imageUrl = "./images/7.webp";
            break;
    }
    imageElement.src = imageUrl;
    imageElement.style.display = "block"; // Display the image
}

// Stage click events
one.onclick = function() {
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
    six.classList.remove("active");
    seven.classList.remove("active");
    changeImage(1);
}

two.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
    six.classList.remove("active");
    seven.classList.remove("active");
    changeImage(2);
}

three.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.remove("active");
    five.classList.remove("active");
    six.classList.remove("active");
    seven.classList.remove("active");
    changeImage(3);
}

four.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.remove("active");
    six.classList.remove("active");
    seven.classList.remove("active");
    changeImage(4);
}

five.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.add("active");
    six.classList.remove("active");
    seven.classList.remove("active");
    changeImage(5);
}
six.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.add("active");
    six.classList.add("active");
    seven.classList.remove("active");
    changeImage(6);
}
seven.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.add("active");
    six.classList.add("active");
    seven.classList.add("active");
    changeImage(7);
}
