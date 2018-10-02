import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from './../components/slider.jsx';

//kometencje slider 
ReactDOM.render(
    <Slider nameClass="corpusoferta" movingItem=".corpus-oferta--positioner" position={0} dims={[0, -25, -50, -75]} />,
    document.querySelector('.react-slider.corpus-oferta')
)
