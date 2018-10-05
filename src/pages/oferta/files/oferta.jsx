import React from "react";
import ReactDOM from "react-dom";
import { Slider } from "./../../../components/slider.jsx";
import { kompetencjePositions } from "./../../../components/slider.jsx";

//slider
ReactDOM.render(
  <Slider
    nameClass="corpusoferta"
    movingItem=".corpus-oferta_slider--container"
    position={0}
    dims={kompetencjePositions(".corpus-oferta_slider--container")}
  />,
  document.querySelector(".react-slider.corpus-oferta")
);
