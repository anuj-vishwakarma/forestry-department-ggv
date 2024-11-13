'use-strict';
function toggleMobileMenu() {
    document.getElementById("menu").classList.toggle("active");
}
const loader = document.querySelector(".pre-loader");
function preLoader() {
    // Show the loader initially
    loader.style.display = 'block';


    window.onload = () => {
        document.documentElement.style.backgroundColor = 'white'; // For HTML
        document.body.style.backgroundColor = 'white'; // For body
        loader.style.display = 'none';
    };
}

preLoader();

const buttonAnimationClass = document.querySelector('.button-animation');

// buttonAnimationClass.addEventListener('mousemove', function () {
//     setTimeout(() => {
//         buttonAnimationClass.style.backgroundColor = 'red';
//     }, 500);
// })