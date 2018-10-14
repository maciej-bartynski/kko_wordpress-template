import './../../index.scss';
import './../../sections/navbar/navbar.js';
import {countTiltsAndSetGridCells} from './../../ms-grid-compatibility/portfolio-desktop-tilts.js';
import {slider} from './../../components/slider.js';

var sliderPositions = (parentCSSClass) => {
    const parent = document.querySelector(parentCSSClass);
    const amount = parent.querySelectorAll(".react-slider--item").length;
    let array = [];
    for (let i = 0; i < amount; i++) {
        array.push(i * -100);
    }
    return array;
}

slider(
    0, 
    sliderPositions(".corpus-portfolio_projects--container.react-slider--container"),
    ".corpus-portfolio_projects--positioner",
    ".corpus-portfolio_projects--container",
    ".react-slider.corpus-portfolio", 
    false
);

countTiltsAndSetGridCells(2, ".corpus-portfolio_projects--container");