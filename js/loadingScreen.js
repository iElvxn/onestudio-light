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

function isMobileDevice() {
    return typeof window.orientation !== "undefined" || navigator.userAgent.indexOf('IEMobile') !== -1;
}

if (!isMobileDevice()) {
    document.addEventListener('mousemove', function(e) {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursor.style.display = 'block'; // Show custom cursor on mouse move
    });

    const button = document.getElementById('my-button');

    // Hide custom cursor when hovering over the button
    button.addEventListener('mouseenter', function() {
        document.getElementById('custom-cursor').style.display = 'none';
    });

    // Show custom cursor when not hovering over the button
    button.addEventListener('mouseleave', function() {
        document.getElementById('custom-cursor').style.display = 'block';
    });
} else {
    // Hide the default cursor for mobile devices
    document.body.style.cursor = 'default';
}