(function() {
    const projectSection = document.querySelector('.project-section-content4-text');
    const defaultElem = document.querySelector('.project-section-content4-text ul li:nth-child(1) i');

    function activateText(currentElem) {
        const activeParent = currentElem.parentNode;
        const grandParent = activeParent.parentNode;
        const activeTitle = activeParent.children[0];
        const activeBox = currentElem.previousSibling.previousSibling;

        if (activeBox.style.display === 'block') {
            activeTitle.style.color = 'var(--black-font-color)';
            currentElem.style.color = 'var(--gray-icon-color)';
            currentElem.style.transform = 'rotateX(360deg)';
            activeBox.style.display = 'none';
        } else {
            activeTitle.style.color = 'var(--point-color)';
            activeBox.style.display = 'block';
            currentElem.style.color = 'var(--point-color)';
            currentElem.style.transform = 'rotateX(180deg)';
            activeParent.classList.add('active-accordion');
        
            for(let i = 0; i < 3; i++) {
                if(grandParent.children[i] !== activeParent && grandParent.children[i].className === 'active-accordion') {
                    grandParent.children[i].classList.remove('active-accordion');
                    const inactiveTitle = grandParent.children[i].children[0];
                    const inactiveText = grandParent.children[i].children[1];
                    const inactiveIcon = grandParent.children[i].children[2];
                    inactiveTitle.style.color = 'var(--black-font-color)';
                    inactiveText.style.display = 'none';
                    inactiveIcon.style.color = 'var(--gray-icon-color)';
                    inactiveIcon.style.transform = 'rotateX(360deg)';
                }
            }
        }
    }

    projectSection.addEventListener('click', function(e) {
        if (e.target.className === 'fas fa-chevron-down') {
            activateText(e.target);
        }
    });

    activateText(defaultElem);
})();