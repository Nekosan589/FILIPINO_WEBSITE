let text = document.getElementById("text");
let greenBox = document.getElementById("green-box");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    if (value < 500){
        text.style.opacity = (500 - value)/500;
        console.log(text.style.opacity);
    }
    else{
        text.style.opacity = 0;
        console.log(text.style.opacity);
    }
    greenBox.style.top = value * 1.5 + 'px';
    greenBox.style.right = value * -0.5 + 'px';
    
});