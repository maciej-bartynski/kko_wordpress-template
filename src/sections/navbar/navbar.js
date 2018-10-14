function take(item){//indead of jquery: $(selector)
    return document.querySelector(item)
};

function cli(item, func) { //indead of jquery: $(selector).click(callback)
    let el = take(item);
    el.addEventListener('click', func);
};

cli('.navbelt-lang', ()=>{
    take('.navbelt-lang_dropdown').classList.contains('isActive')?
    take('.navbelt-lang_dropdown').classList.remove('isActive'):
    take('.navbelt-lang_dropdown').classList.add('isActive');
});

(() => {
    let items = document.querySelectorAll('.navbelt-lang_dropdown li');
    let leng = items.length;
    for (let i=0;i<leng;i++){
        items[i].addEventListener('click', function(e){
            take('.navbelt-lang span').innerHTML = `${e.target.innerText} <i class="material-icons">expand_more</i>`;
        }); 
    }
})();

let toggler = 1;
cli('.navbelt-mobile_item--toggler', ()=>{
    let icon = ['menu', 'close'];
    take('.navbelt-mobile_item--toggler .open-close').innerText = icon[toggler];
    toggler? take('.navbelt-mobile--container').classList.add('isToggled'): take('.navbelt-mobile--container').classList.remove('isToggled');
    toggler = toggler ? 0 : 1;
})

window.addEventListener('scroll', function(){
    if (window.scrollY > 140) {
        take('#navbar-01 nav').classList.add('fixed');
    } else {
        take('#navbar-01 nav').classList.remove('fixed');
    }
})
