function toggleIcon() {
    const icon = document.getElementById('icon-img');

    if (icon) {

        if (icon.src.endsWith('icon-sun.svg')) {
            icon.src = './images/icon-moon.svg';
        } else {
            icon.src = './images/icon-sun.svg';
        }
        function changeToggle() {
            const element = document.querySelector('.main__section')
            element.classList.toggle('bg__image-swap')
        }

        function changeBodyColor() {
            const element2 = document.body
            element2.classList.toggle('body__part')
        }


    } else {
        console.error('Element with ID "toggleIcon" not found.');
    }
    changeToggle()
    changeBodyColor()

}