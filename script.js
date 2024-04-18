document.addEventListener('DOMContentLoaded', () => {
    const landingText = document.querySelector('.landing-text')
    landingText.classList.add('fade-in')

    const landingCornerLeft = document.querySelector('#landing-corner-left')
    landingCornerLeft.classList.add('enter-left')

    const landingCornerRight = document.querySelector('#landing-corner-right')
    landingCornerRight.classList.add('enter-right')
})