import $ from 'jquery';

$('.navbelt-lang').click(function(){
    $('.navbelt-lang_dropdown').toggleClass('isActive');
})

$('.navbelt-lang_dropdown li').click(function (e) {
    $('.navbelt-lang span').html(`${e.target.innerText} <i class="material-icons">expand_more</i>`);
})

let toggler = 1;
$('.navbelt-mobile_item--toggler').click(function () {
    let icon = ['menu', 'close'];
    $('.navbelt-mobile_item--toggler .open-close').text(icon[toggler]);
    toggler? $('.navbelt-mobile--container').addClass('isToggled'): $('.navbelt-mobile--container').removeClass('isToggled');
    toggler = toggler ? 0 : 1;
})

$(window).scroll(function () {
    if ($(window).scrollTop()>140){
        $('#navbar-01 nav').addClass('fixed');
    } else {
        $('#navbar-01 nav').removeClass('fixed');
    }
})

