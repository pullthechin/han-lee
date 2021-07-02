(function() {
    const navigationElem = document.querySelector('.mobile-navigation');

    function navigationAnimation() {
        const posBottom = navigationElem.getBoundingClientRect().bottom;

        if (pageYOffset > posBottom) {
            navigationElem.style.borderBottom = '1px solid var(--point-color)';
        } else {
            navigationElem.style.borderBottom = '1px solid transparent';
        }
    }

    window.addEventListener('scroll', function() {
        if (screen.width < 768) {
            navigationAnimation();
        }
    });
})();