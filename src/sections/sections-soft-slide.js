export const sectionsSoftSlideEffect = () => {
    var sections = document.querySelectorAll('section');
    var pos = 0;
    var dir = null;

    window.addEventListener('scroll', () => {
        let leng = pos - window.scrollY;
        if (leng < 0) {
            dir = 'down'
        } else {
            dir = 'up'
        }
        pos = window.scrollY;
        for (let i = 0; i < sections.length; i++) {
            let section = sections[i];
            if (dir == 'down') {
                if (window.scrollY + window.innerHeight > section.offsetTop) {
                    if (section.offsetTop + section.offsetHeight > window.scrollY) {
                        section.classList.add('soft-slide');
                    }
                }
            } else if (dir == "up") {
                if (window.scrollY < section.offsetTop+section.offsetHeight) {
                    if (section.offsetTop < window.scrollY) {
                        section.classList.remove('soft-slide');
                    }
                }
            }
        }
    })
}
sectionsSoftSlideEffect();