const loadingScreen = document.getElementById('loading-screen');
const loadingVideo = document.getElementById('loading-video');

setTimeout(() => {
    loadingScreen.style.display = 'none';
    loadingScreen.style.zIndex = 0;
    document.body.style.overflow = 'auto';
    document.body.style.touchAction = 'auto';
},0);//5000

setTimeout(() => {
    loadingScreen.style.opacity = '0'
},0);//4700


document.getElementById('hireme-btn').addEventListener('click', function() {
    document.getElementById('contact-section').scrollIntoView({
        behavior: 'smooth'
    });
});

document.addEventListener('mousemove', function(e) {
    const cursor = document.getElementById('custom-cursor');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

document.body.addEventListener('mouseenter', function() {
    document.getElementById('custom-cursor').style.display = 'block';
});

document.body.addEventListener('mouseleave', function() {
    document.getElementById('custom-cursor').style.display = 'none';
});