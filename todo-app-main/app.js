function toggleIcon() {
    const icon = document.getElementById('petko');

    if (icon) {

        if (icon.src.endsWith('icon-sun.svg')) {
            icon.src = './images/icon-moon.svg';
        } else {
            icon.src = './images/icon-sun.svg';
        }
        function changeToggle() {
            const element = document.querySelector('.main-section')
            element.classList.toggle('bg-image')
        }
        
    } else {
        console.error('Element with ID "toggleIcon" not found.');
    }
    changeToggle()
}