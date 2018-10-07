export function countTiltsAndSetGridCells(maxColumnNumberDeterminedByWebPageTemplate, placeYouWantToHandleWith) {
    let selector = placeYouWantToHandleWith;
    let amount = maxColumnNumberDeterminedByWebPageTemplate;
    let container = document.querySelector(selector);
    let tilts = container.querySelectorAll('.react-slider--item');
    for (let i=0; i<tilts.length;i++){
        let curr =i+1;
        let msCol;
        let msRow;

        if (curr/amount===Math.floor(curr/amount)){
            msRow = Math.floor(curr / amount);
            msCol=amount;
        } else {
            msRow=Math.floor(curr/amount)+1;
            msCol = Math.round( ((curr / amount) - Math.floor(curr / amount)) * amount);
        }

        var msStyle = document.createElement('style');
        msStyle.type = 'text/css';
        msStyle.innerHTML = "@media screen and (min-width: 900px) { .x"+msCol+msRow+"msGridColsAndRows"+ " { -ms-grid-column: " + msCol + "; -ms-grid-row: " + msRow + ";}}";
        tilts[i].classList.add("x"+ msCol + msRow + "msGridColsAndRows");
        document.getElementsByTagName('head')[0].appendChild(msStyle);
    }
}

