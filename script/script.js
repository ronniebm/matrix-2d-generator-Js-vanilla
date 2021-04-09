const generateButton = document.querySelector('.js-generate-button');
const matrixContainer = document.querySelector('.js-matrix-container');
let regExp = new RegExp('^[1-9]?[0-9]{1}$|^100$');
let myMatrix = {};
let row = 0;
let col = 0;

generateButton.addEventListener('click', () => {

  row = Number(document.querySelector('.js-input-n-row').value);
  col = Number(document.querySelector('.js-input-m-col').value);
  matrixContainer.innerHTML = '';


  for (let i = 0; i < row; i++) {
    myMatrix[i+1] = {};

    for (let j = 0; j < col; j++) {
      myMatrix[i+1][j+1] = 0;
    }
  }

  // console.log(myMatrix);


  generateMatrix(row, col);


})






// ********************************************************************
//                  function: adding event listeners !.
// ********************************************************************
function listener(row) {

  // alert('hola');
  // document.querySelectorAll('.js-input-num').forEach((obj) => {
  //   obj.contentEditable = editable;
  // })
  
}


// ********************************************************************
//                  function: Generate a Matrix.
// ********************************************************************
function generateMatrix(row, col) {

  for (let n = 0; n < row; n++) {
    const wrapDiv = generateMatrixCol(n, col);
    matrixContainer.appendChild(wrapDiv);
    // console.log(wrapDiv);
  }

  matrixContainer.appendChild(generateMatrixLastRow(col));

}

// ********************************************************************
//                  function: Generate a Matrix COL.
// ********************************************************************
function generateMatrixCol(n, col) {

  /* Create <div class="wrap"> item */
  const wrapDiv = document.createElement("div");
  wrapDiv.className = "wrap";

  /* Create <div class="wrap__row"> item */
  const rowDiv = document.createElement("div");
  rowDiv.className = "wrap__row";

  /* Create <span class="wrap__span"> item */
  const span = document.createElement("span");
  span.className = `wrap__span js-span-n${n+1}`;
  span.innerText = "100";

  for (let m = 0; m < col; m++) {


    /* Create <input type="text" class="wrap__row__col js-input-num"> item */
    const input = document.createElement("input");
    input.className = "wrap__row__col";
    input.type = "text";
    // input.value = 1;
    input.dataset.row = n + 1;
    input.dataset.col = m + 1;

    rowDiv.appendChild(input);

    

   


    input.addEventListener('input', (event)=> {

      let activeRow = Number(event.target.dataset.row);
      let activeCol = Number(event.target.dataset.col);

      myMatrix[activeRow][activeCol] = Number(event.target.value);
      // console.log(myMatrix);
      // document.querySelector('.js-span-n1').innerText = "yes"
      
      let sumCol = 0;
      let sumRow = 0;

      
      for (let i = 1; i <= col; i++) {
        
        sumCol += myMatrix[activeRow][i];
        console.log( myMatrix[activeRow][i]);
      }

      for (let i = 1; i <= row; i++) {
        
        sumRow += myMatrix[i][activeCol];
        console.log(myMatrix[i][activeCol]);
      }



      document.querySelector(`.js-span-n${activeRow}`).innerText = sumCol;
      document.querySelector(`.js-span-m${activeCol}`).innerText = sumRow;
          
      // document.querySelector(`.js-span-m${m+1}`).innerText = sumCol;

          // for (let j = 1; j <= col; j++) {
          //   sumRow += myMatrix[i][j];
            
            
          // }

        // document.querySelector(`.js-span-n${n+1}`).innerText = sumRow;

      // };

      
    });

  }

  wrapDiv.appendChild(rowDiv);
  wrapDiv.appendChild(span);

  return wrapDiv;

}


// ********************************************************************
//                 function: Generate Matrix last Row.
// ********************************************************************
function generateMatrixLastRow(col) {

  /* Create <div class="wrap"> item */
  const wrapDiv = document.createElement("div");
  wrapDiv.className = "wrap";

  for (let m = 0; m < col; m++) {

    /* Create <span class="last-span"> item */
    const span = document.createElement("span");
    span.className = `last-span js-span-m${m+1}`;
    span.innerText = "100";

    wrapDiv.appendChild(span);
  }

  return wrapDiv;

}
