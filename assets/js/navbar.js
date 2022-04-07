let nav = document.getElementById("main-nav");
let open = document.getElementById("nav-toggle-open");
let close = document.getElementById("nav-toggle-close")
let main = document.getElementById("main");
let mainGrid = document.getElementById("main-grid");
let wrapper = document.getElementById("nav-wrapper");


const showNav = (flag) => {
    if (flag) {
        nav.classList.toggle("-translate-x-full");
        nav.classList.toggle("translate-x-0");
        open.classList.toggle("hidden");
        close.classList.toggle("hidden");
        main.classList.toggle("-translate-x-80");
        main.classList.toggle("w-full");
        
    }
}

let open2 = document.getElementById('nav-toggle-open2');
let close2 = document.getElementById('nav-toggle-close2');

const showNav2 = (flag) => {
    if(flag){
        nav.classList.toggle("-translate-y-0");
        open2.classList.toggle("hidden");
        close2.classList.toggle("hidden");
    }
}