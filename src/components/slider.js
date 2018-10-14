export const slider = (initialPosition, allowedPositions, highestUniqueParent, movingItem, bulletsWrapper, sliderType) => {
    var ini = initialPosition;//number
    var pos = allowedPositions;//array of numbers
    var uniq = highestUniqueParent;//selector
    var uKey = highestUniqueParent.replace('.', 'x');
    var slid = movingItem;//selector
    var bul = bulletsWrapper;//selector
    var type = sliderType;//boolean
    
    var timer;

    const sliderLength = () => {
        let slider = document.querySelector(slid);
        let children = slider.querySelectorAll(".react-slider--item").length;
        let width = children * 100 + '%';//portfolio
        width = type === true ? ((children * 85) - 5) + 'vw' : width;//kompetencje
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = "@media screen and (max-width: 899px) { .dynamicWidth" + uKey + " { width: " + width + ";}}";
        slider.classList.add("dynamicWidth" + uKey);
        document.getElementsByTagName('head')[0].appendChild(style);
    }

    const swipeEventDispatcher = () => {
        var touchEnded, touchStarted;
        let swinger = document.querySelector(slid);
        swinger.addEventListener('touchstart', e => handleTouchStart(e), false);
        swinger.addEventListener('touchend', e => handleTouchEnd(e), false);

        const handleTouchStart = (e) => {
            touchStarted = e.touches[0].clientX;
        };

        const handleTouchEnd = (e) => {
            touchEnded = e.changedTouches[0].clientX;
            if (touchStarted - touchEnded > 0) {
                ini = ini+1>pos.length-1?0:ini+1;
                clickHandler(null, ini)
            } else if (touchStarted - touchEnded < 0) {
                ini = ini - 1 < 0 ? pos.length-1 : ini - 1;
                clickHandler(null, ini)
            } else {
                return;
            }
        }
    }

    const clickHandler = (e, num) => {
        clearTimeout(timer);
        ini=num;
        document.querySelector(slid).style.left = pos[num]+"%";
        document.querySelector(bul).querySelectorAll('.bullet').length
        for (let i=0; i<pos.length; i++){
            document.querySelector(bul).querySelectorAll('.bullet')[i].classList.remove('activebullet');
        }
        document.querySelector(bul).querySelectorAll('.bullet')[num].classList.add('activebullet');
        timer = setTimeout(
            ()=>{automaticSlide(num+1)},
            15000
        );
    }

    var automaticSlide = (num) => {
        let newPos;
        if (num > pos.length-1) {
            newPos = 0;
        } else {
            newPos = num;
        }
        clickHandler(null, newPos);
    }

    const produceBullets = () => {
        let array = [];
        let key = uniq.replace('.', 'x')
        pos.map((item, id) => {
            let bullet = document.createElement("div");
            bullet.className = "bullet";
            bullet.setAttribute('id', "x" + key.concat(id));
            bullet.addEventListener('click', (e) => clickHandler(e, id))
            array.push(bullet);
        });
        return array;
    }

    const mountBullets = () => {
        let arrayOfBullets = produceBullets();
        for (let i = 0; i < arrayOfBullets.length; i++) {
            document.querySelector(bul).appendChild(arrayOfBullets[i]);
        }
        document.querySelector(bul).querySelectorAll('.bullet')[ini].classList.add('activebullet');
    }

    sliderLength();
    mountBullets();
    swipeEventDispatcher();
    setTimeout(()=>{clickHandler(null, ini+1)}, 15000);
}

export var sliderPositions = (parentCSSClass, bool) => {
    const parent = document.querySelector(parentCSSClass);
    const amount = parent.querySelectorAll(".react-slider--item").length;
    let array = [];
    if (bool===true){ //if portfolio
        for (let i = 0; i < amount; i++) {
            array.push(i * -100);
        }
    } else { //if kompetencje
        for (let i = 0; i < amount; i++) {
            array.push(10 + (i * -85));
        };
    }
    return array;
}
