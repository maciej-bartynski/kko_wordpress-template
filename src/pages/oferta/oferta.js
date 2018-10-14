import './../../index.scss';
import './../../sections/navbar/navbar.js';
import {countTiltsAndSetGridCells} from './../../ms-grid-compatibility/portfolio-desktop-tilts.js';


import {slider} from './../../components/slider.js';
countTiltsAndSetGridCells(4, ".corpus-oferta_slider--container");

var kompetencjePositions = (parentCSSClass) => {
    const parent = document.querySelector(parentCSSClass);
    const amount = parent.querySelectorAll(".react-slider--item").length;
    let array = [];
    for (let i = 0; i < amount; i++) {
        array.push(10 + (i * -85));
    };
    return array;
}

slider(
    0, 
    kompetencjePositions(".corpus-oferta_slider--container.react-slider--container"), 
    ".corpus-oferta_slider--positioner", 
    ".corpus-oferta_slider--container", 
    ".react-slider.corpus-oferta", 
    true
);

