(function(){
    const logoElem = document.querySelector('.navigation h1');
    const projectElem = document.querySelector('.navigation-menu li:nth-child(1)');
    const aboutElem = document.querySelector('.navigation-menu li:nth-child(2)');
    const aboutSection = document.querySelector('.about-section');
    const slideAnimation = document.querySelector('.slide-animation-section');
    const introductionSection = document.querySelector('.introduction-section');
    const projectSection = document.querySelector('.project-section');
    let userPos = 'project';

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

    aboutElem.addEventListener('click', function() {
        aboutAnimation();
    });

    projectElem.addEventListener('click', function() {
        projectAnimation();
    });

    logoElem.addEventListener('click', function() {
        logoAnimation();
    });

})();