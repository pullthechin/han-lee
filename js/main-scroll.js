(function() {
    const content1Elem = document.querySelector('.project-section-content1');
    const content2Elem = document.querySelector('.project-section-content2');
    const content3Elem = document.querySelector('.project-section-content3');
    const content4Elem = document.querySelector('.project-section-content4');
    const content5Elem = document.querySelector('.project-section-content5');
    const content6Elem = document.querySelector('.project-section-content6');

    function moveUp() {
        if (pageYOffset >= content1Elem.offsetTop - 700) {
            content1Elem.classList.add('project-moveup');
        } else {
            content1Elem.classList.remove('project-moveup');
        }

        if (pageYOffset >= content2Elem.offsetTop - 700) {
            content2Elem.classList.add('project-moveup');
        } else {
            content2Elem.classList.remove('project-moveup');
        }

        if (pageYOffset >= content3Elem.offsetTop - 700) {
            content3Elem.classList.add('project-moveup');
        } else {
            content3Elem.classList.remove('project-moveup');
        }

        if (pageYOffset >= content4Elem.offsetTop - 700) {
            content4Elem.classList.add('project-moveup');
        } else {
            content4Elem.classList.remove('project-moveup');
        }

        if (pageYOffset >= content5Elem.offsetTop - 700) {
            content5Elem.classList.add('project-moveup');
        } else {
            content5Elem.classList.remove('project-moveup');
        }
    }

    window.addEventListener('scroll', function() {
        moveUp();
    });
})();