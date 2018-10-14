import './index.scss';
import {
    slider
} from './components/slider';
import {
    sliderPositions
} from './components/slider';
import './sections/navbar/navbar.js';
import {
    countTiltsAndSetGridCells
} from './ms-grid-compatibility/portfolio-desktop-tilts.js';

import {sectionsSoftSlideEffect} from './sections/sections-soft-slide.js';

countTiltsAndSetGridCells(3, ".portfolio-05_projects--container");
countTiltsAndSetGridCells(2, ".kompetencje-04_slider--container");

slider( //portfolio
    0,
    sliderPositions(".kompetencje-04_slider--container.react-slider--container", false),
    ".kompetencje-04_slider--positioner",
    ".kompetencje-04_slider--container",
    ".react-slider.kompetencje",
    true
);

slider( //kompetencje
    0,
    sliderPositions(".portfolio-05_projects--container.react-slider--container", true),
    ".portfolio-05_projects--positioner",
    ".portfolio-05_projects--container",
    ".react-slider.portfolio",
    false
);
