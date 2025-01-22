const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
let myVariable = "Bob";
myVariable = "Steve";
/*
// also makes comments, use /* for line-break comments :D
*/
let icecream = "chocolate";
if (icecream === "chocolate") {
    alert("Yay, I love chocolate icecream!");
} else {
    alert("Awww, but chocolate is my favorite... 3:")
}

alert("Hello!")
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
document.querySelector("html").addEventListener("click", () => {
    alert("Ouch! Stop poking me! >N<")
});
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png")
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
});