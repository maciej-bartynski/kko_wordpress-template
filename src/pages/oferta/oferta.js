import './../../index.scss';
import './../../sections/navbar/navbar.js';
import {countTiltsAndSetGridCells} from './../../ms-grid-compatibility/portfolio-desktop-tilts.js';

import './files/oferta.jsx';

countTiltsAndSetGridCells(4, ".corpus-oferta_slider--container");