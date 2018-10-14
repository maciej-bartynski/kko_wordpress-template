//my scss (do not change order of importing styles!)
import './index.scss';
//scripts
//import './components/react.jsx';
import {slider} from './components/slider-b';

import './sections/navbar/navbar.js';
//manual file loader:
import './deleteThisPage.html';
import {countTiltsAndSetGridCells} from './ms-grid-compatibility/portfolio-desktop-tilts.js';

countTiltsAndSetGridCells(3, ".portfolio-05_projects--container");
countTiltsAndSetGridCells(2, ".kompetencje-04_slider--container");

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
    kompetencjePositions(".kompetencje-04_slider--container.react-slider--container"),
    ".kompetencje-04_slider--positioner",
    ".kompetencje-04_slider--container",
    ".react-slider.kompetencje",
    true
);

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
    sliderPositions(".portfolio-05_projects--container.react-slider--container"),
    ".portfolio-05_projects--positioner",
    ".portfolio-05_projects--container",
    ".react-slider.portfolio",
    false
);