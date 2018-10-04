import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from './../../../components/slider.jsx';
import { sliderPositions } from './../../../components/slider.jsx';

ReactDOM.render(
  <Slider
    nameClass="corpusportfolio"
    movingItem=".corpus-portfolio_projects--container"
    position={0}
    dims={sliderPositions(".corpus-portfolio_projects--container")}
  />,
  document.querySelector(".react-slider.corpus-portfolio")
);
