(function() {
    const logoElem = document.querySelector('.navigation-logo h1');
    const navigationElem = document.querySelector('.navigation');
    const disappearedText = document.querySelector('.navigation-logo span');
    const navigationWrapperElem = document.querySelector('.navigation-wrapper');
    const projectElem = document.querySelector('.navigation-menu ul li:nth-child(2)');

    function navigationAnimation() {
        const posBottom = navigationElem.getBoundingClientRect().bottom;

        if (pageYOffset > posBottom) {
            logoElem.style.fontSize = '30px';
            navigationElem.style.borderBottom = '1px solid var(--point-color)';
            disappearedText.style.display = 'none';
            navigationWrapperElem.style.padding = '15px 2rem';
            if (screen.width < 1024) {
                navigationWrapperElem.style.padding = '15px 20px';
            }
        } else {
            logoElem.style.fontSize = '36px'
            navigationElem.style.borderBottom = '1px solid transparent';
            disappearedText.style.display = 'block';
            navigationWrapperElem.style.padding = '35px 5rem';
            if (screen.width < 1024) {
                navigationWrapperElem.style.padding = '20px 40px';
            }
        }
    }

    window.addEventListener('scroll', function() {
        if (screen.width >= 768) {
            navigationAnimation();
        }
    });
})();