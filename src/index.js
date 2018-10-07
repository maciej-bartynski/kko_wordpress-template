//my scss (do not change order of importing styles!)
import './index.scss';
//scripts
import './components/react.jsx';
import './sections/navbar/navbar.js';
//manual file loader:
import './deleteThisPage.html';
import {countTiltsAndSetGridCells} from './ms-grid-compatibility/portfolio-desktop-tilts.js';

countTiltsAndSetGridCells(3, ".portfolio-05_projects--container");
countTiltsAndSetGridCells(2, ".kompetencje-04_slider--container");