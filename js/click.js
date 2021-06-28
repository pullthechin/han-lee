(function() {
    const arrowDownElem = document.querySelector('.introduction-section-icon-wrap i');
    const projectSectionElem = document.querySelector('.project-section');
    
    function moveDown() {
        const posY = projectSectionElem.offsetTop - 120;
        window.scrollTo({top: posY, behavior: 'smooth'});
    }

    arrowDownElem.addEventListener('click', function() {
        moveDown();
    });
})();