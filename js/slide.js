(function() {
    const screenElem = document.querySelector('.project-section-content5-screen');
    const leftArrowElem = document.querySelector('.project-section-content5-screen-navigation > i:nth-child(1)');
    const rightArrowElem = document.querySelector('.project-section-content5-screen-navigation > i:last-child');
    let posX = 0;
    let activeNumber = 1;

    function activateText(siblingNumber) {
        const activeText = document.querySelector(`.project-section-content5-text > div:nth-child(${activeNumber})`);
        const siblingText = document.querySelector(`.project-section-content5-text > div:nth-child(${siblingNumber})`);
        siblingText.style.opacity = '0';
        activeText.style.opacity = `1`;
    }

    function activateDot(siblingNumber) {
        const siblingDot = document.querySelector(`.project-section-content5-screen-navigation > div > span:nth-child(${siblingNumber})`);
        const activeDot = document.querySelector(`.project-section-content5-screen-navigation > div > span:nth-child(${activeNumber})`);
        siblingDot.style.background = 'var(--gray-icon-color)';
        activeDot.style.background = 'var(--point-color)';
    }

    function slideLeft() {
        posX += 33.33;
        activeNumber -= 1;
        if (posX > 0 && activeNumber < 1) {
            posX = 0;
            activeNumber = 1;
            return;
        }
        screenElem.style.transform = `translateX(${posX}%)`;
        activateDot(activeNumber + 1);
        activateText(activeNumber + 1);
    }

    function slideRight() {
        posX -= 33.33;
        activeNumber += 1;
        if (posX < -66.66 && activeNumber > 3) {
            posX = -66.66;
            activeNumber = 3;
            return;
        }
        screenElem.style.transform = `translateX(${posX}%)`;
        activateDot(activeNumber - 1);
        activateText(activeNumber - 1);
    }

    leftArrowElem.addEventListener('click', function () {
        slideLeft();
        console.log(posX);
    });

    rightArrowElem.addEventListener('click', function () {
        slideRight();
        console.log(posX);
    });

    activateDot(2);
    activateText(2);
})();