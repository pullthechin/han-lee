(function() {
    const navigationMenuElem = document.querySelector('.mobile-navigation-menu');
    const logoElem = document.querySelector('.mobile-navigation-logo');
    const projectElem = document.querySelector('.mobile-navigation-menulist li:nth-child(1)');
    const aboutElem = document.querySelector('.mobile-navigation-menulist li:nth-child(2)');
    const menuList = document.querySelector('.mobile-navigation-menulist');
    const aboutSection = document.querySelector('.about-section');
    const slideAnimation = document.querySelector('.slide-animation-section');
    const introductionSection = document.querySelector('.introduction-section');
    const projectSection = document.querySelector('.project-section');
    let userPos = 'project';
    let open = false;

    function projectAnimation() {
        if (userPos === 'project') {
            return;
        } else {
            slideAnimation.style.transform = 'translateX(100vw)';
            slideAnimation.style.transition = 'all 1.2s';
            userPos = 'project';
            setTimeout(function() {
                slideAnimation.style.transform = 'translateX(-100vw)';
                slideAnimation.style.transition = 'all .8s';
                introductionSection.style.display = 'flex';
                projectSection.style.display = 'block';
                aboutSection.style.display = 'none';
                aboutSection.style.opacity = '0';
                aboutSection.style.transform = 'translateY(200px)';
            }, 1200);
        }
    }   

    function aboutAnimation() {
        if (userPos === 'about') {
            return;
        } else {
            slideAnimation.style.transform = 'translateX(100vw)';
            slideAnimation.style.transition = 'all 1.2s';
            userPos = 'about';
            setTimeout(function() {
                slideAnimation.style.transform = 'translateX(-100vw)';
                slideAnimation.style.transition = 'all .8s';
                introductionSection.style.display = 'none';
                projectSection.style.display = 'none';
                aboutSection.style.display = 'block';
            }, 1200);
            setTimeout(function() {
                // aboutSection.style.display = 'block';
                aboutSection.style.opacity = '1';
                aboutSection.style.transform = 'translateY(0)';
            }, 1500);
        }
    }

    function logoAnimation() {
        if (userPos === 'project') {
            window.scrollTo({top: 0, behavior: 'smooth'});
        } else {
            slideAnimation.style.transform = 'translateX(100vw)';
            slideAnimation.style.transition = 'all 1.2s';
            userPos = 'project';
            setTimeout(function() {
                slideAnimation.style.transform = 'translateX(-100vw)';
                slideAnimation.style.transition = 'all .8s';
                introductionSection.style.display = 'flex';
                projectSection.style.display = 'block';
                aboutSection.style.display = 'none';
                aboutSection.style.opacity = '0';
                aboutSection.style.transform = 'translateY(200px)';
            }, 1200);
        }
    }

    function menuAppear() {
        open = true;
        menuList.style.display = 'block';
    }

    function menuDisappear() {
        open = false;
        menuList.style.display = 'none';
    }

    navigationMenuElem.addEventListener('click', function() {
        if (screen.width <= 768) {
            if (open === false) {
                menuAppear();
            } else {
                menuDisappear();
            }
        }
    });

    aboutElem.addEventListener('click', function() {
        aboutAnimation();
        menuDisappear();
    });

    projectElem.addEventListener('click', function() {
        projectAnimation();
        menuDisappear();
    });

    logoElem.addEventListener('click', function() {
        logoAnimation();
    });
})();