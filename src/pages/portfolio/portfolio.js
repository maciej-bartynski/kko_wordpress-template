import './../../index.scss';
import './../../sections/navbar/navbar.js';
import {countTiltsAndSetGridCells} from './../../ms-grid-compatibility/portfolio-desktop-tilts.js';

import './files/portfolio.jsx'

countTiltsAndSetGridCells(2, ".corpus-portfolio_projects--container");