var typed= new Typed(".text",
    {
    strings:[ "Full Stack Web Developer","Frontend Developer","Backend Developer","UI UX Develoer","Apllication Development"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
}
)
document.addEventListener("DOMContentLoaded", function() {
    const radialProgressBars = document.querySelectorAll('.radial-progress');
    
    radialProgressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        setTimeout(() => {
            bar.style.background = `conic-gradient(#007BFF 0%, #007BFF ${progress}%, #ddd ${progress}%, #ddd 100%)`;
        }, 100);
    });
});

// JavaScript to handle the toggle of the hamburger menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navbar.classList.toggle('active');
    });
});
