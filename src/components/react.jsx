import React from 'react';
import ReactDOM from 'react-dom';
import {Slider} from './slider.jsx';

//kometencje slider 
ReactDOM.render(
    <Slider nameClass="kompetencje" movingItem=".kompetencje-04_tilt--positioner" position={0} dims={[0, -25, -50, -75]}/>, 
    document.querySelector('.react-slider.kompetencje')
)

//portfolio slider;
ReactDOM.render(
    <Slider nameClass="portfolio" movingItem=".section-05_slider--positioner" position={0} dims={[0, -100, -200, -300, -400, -500]} />,
    document.querySelector('.react-slider.portfolio')
);

