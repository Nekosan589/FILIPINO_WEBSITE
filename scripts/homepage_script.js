var root = document.querySelector(':root');
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 50){
        root.style.setProperty('--navigation-color', '#f4f4f4')
    }
    else{
        root.style.setProperty('--navigation-color', 'rgba(0, 0, 0, 0.2)')
    }
});