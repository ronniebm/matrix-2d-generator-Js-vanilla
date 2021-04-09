import * as lib from "./myLibrary.js";

const generateButton = document.querySelector('.js-generate-button');
const matrixContainer = document.querySelector('.js-matrix-container');
let row, col;


generateButton.addEventListener('click', () => {

  if ( lib.evalRegExp1_7('.js-input-n-row', '.js-input-m-col') ) {

    ({ row, col } = lib.initializeValues('.js-input-n-row', '.js-input-m-col'));
    
    lib.generateMatrix(row, col, matrixContainer);

  } 

})
