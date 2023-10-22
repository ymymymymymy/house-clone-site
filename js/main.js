const ham = document.getElementById('js-hamburger');
const nav = document.getElementById('js-nav');
const bgc = document.getElementById('js-bgc');
const pagetop = document.getElementById('js-pagetop');


window.addEventListener("scroll", scroll_event);
function scroll_event() {
if (window.scrollY > 400) {
    pagetop.style.opacity = "1";
} else if (window.scrollY < 400) {
    pagetop.style.opacity = "0";
}
}

ham.addEventListener("click", function () {
    console.log('ok!');
    ham.classList.toggle('active');
    nav.classList.toggle('active');
    bgc.classList.toggle('active');
});
