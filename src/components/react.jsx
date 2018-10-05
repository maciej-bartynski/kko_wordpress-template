import React from "react";
import ReactDOM from "react-dom";
import { Slider } from "./slider.jsx";
import { sliderPositions } from "./slider.jsx";
import { kompetencjePositions } from "./slider.jsx";
//kometencje slider
ReactDOM.render(
  <Slider
    nameClass="kompetencje" //unique key for react array items
    movingItem=".kompetencje-04_slider--container" //parent to catch slider elements
    position={0} //initial left
    dims={kompetencjePositions('.kompetencje-04_slider--container')} //all possible positions
  />,
  document.querySelector(".react-slider.kompetencje")
);

//portfolio slider;
ReactDOM.render(
  <Slider
    nameClass="portfolio"
    movingItem=".portfolio-05_projects--container"
    position={0}
    dims={sliderPositions(".portfolio-05_projects--container")}
  />,
  document.querySelector(".react-slider.portfolio")
);
