document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector(".form-container");
    const daynight = document.querySelector(".day-night");
    const videoBtn = document.querySelectorAll(".video-btn");
    const navbar = document.querySelector(".navbar");
    const menu = document.querySelector(".menu");
    const videoSlider = document.getElementById('video-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const mobileVideoNav = document.querySelector('.mobile-video-nav');
    const videos = ['video/video9.mp4', 'video/video2.mp4', 'video/video7.mp4', 'video/video5.mp4', 'video/video1.mp4'];
    let currentVideoIndex = 0;

    // sticky navbar
    window.addEventListener("scroll", function () {
        document.querySelector("header").classList.toggle("sticky", window.scrollY > 0);
    });

    // mobile navbar
    menu.addEventListener("click", () => {
        menu.classList.toggle("fa-xmark");
        navbar.classList.toggle("active");
        navbar.classList.toggle("slide-in");
    });

    // login form
    document.querySelector(".log-in").addEventListener("click", () => {
        form.classList.add("form-active");
        form.classList.add("fade-in");
    });

    document.querySelector(".close-btn").addEventListener("click", () => {
        form.classList.remove("form-active");
        form.classList.add("fade-out");
        setTimeout(() => {
            form.classList.remove("fade-out");
        }, 500);
    });

    // video click
    videoBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector(".controls .active").classList.remove("active");
            btn.classList.add("active");
            videoSlider.src = btn.getAttribute("data-src");
            videoSlider.classList.add("fade-in");
            setTimeout(() => {
                videoSlider.classList.remove("fade-in");
            }, 500);
        });
    });

    // daynight mode
    daynight.addEventListener("click", () => {
        const icon = daynight.querySelector("i");
        icon.classList.toggle("fa-sun");
        icon.classList.toggle("fa-moon");
        document.body.classList.toggle("dark");
        document.body.classList.add("fade-in");
        setTimeout(() => {
            document.body.classList.remove("fade-in");
        }, 500);
    });

    window.addEventListener("load", () => {
        const icon = daynight.querySelector("i");
        if (document.body.classList.contains("dark")) {
            icon.classList.add("fa-sun");
        } else {
            icon.classList.add("fa-moon");
        }
    });

    // next and prev button
    prevBtn.addEventListener('click', prevVideo);
    nextBtn.addEventListener('click', nextVideo);

    // handle screen size
    function handleScreenSize() {
        const isMobile = window.innerWidth <= 768;
        prevBtn.style.display = isMobile ? 'none' : 'block';
        nextBtn.style.display = isMobile ? 'none' : 'block';
        mobileVideoNav.style.display = isMobile ? 'flex' : 'none';
    }

    handleScreenSize();
    window.addEventListener('resize', handleScreenSize);

    // smooth scroll
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // fungsi tambahan untuk video sebelumnya dan berikutnya
    function prevVideo() {
        currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
        videoSlider.src = videos[currentVideoIndex];
        videoSlider.classList.add("fade-in");
        setTimeout(() => {
            videoSlider.classList.remove("fade-in");
        }, 500);
    }

    function nextVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        videoSlider.src = videos[currentVideoIndex];
        videoSlider.classList.add("fade-in");
        setTimeout(() => {
            videoSlider.classList.remove("fade-in");
        }, 500);
    }

    // Review slider
    const reviewSlider = document.querySelector('.review-slider');
    let reviewIndex = 0;

    function showNextReview() {
        reviewIndex = (reviewIndex + 1) % reviewSlider.children.length;
        reviewSlider.style.transform = `translateX(-${reviewIndex * 100}%)`;
    }

    setInterval(showNextReview, 3000);

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Pesan Anda telah dikirim!');
        contactForm.reset();
    });

});
