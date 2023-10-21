const ham = document.getElementById('js-hamburger');
const nav = document.getElementById('js-nav');
const bgc = document.getElementById('js-bgc');

ham.addEventListener("click", function () {
    console.log('ok!');
    ham.classList.toggle('active');
    nav.classList.toggle('active');
    bgc.classList.toggle('active');
});


