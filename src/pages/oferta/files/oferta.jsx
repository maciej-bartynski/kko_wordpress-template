import React from "react";
import ReactDOM from "react-dom";
import { Slider } from "./../../../components/slider.jsx";
import { sliderPositions } from "./../../../components/slider.jsx";

//slider
ReactDOM.render(
  <Slider
    nameClass="corpusoferta"
    movingItem=".corpus-oferta_slider--container"
    position={0}
    dims={sliderPositions(".corpus-oferta_slider--container")}
  />,
  document.querySelector(".react-slider.corpus-oferta")
);
