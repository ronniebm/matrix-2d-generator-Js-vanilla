
export {evalRegExp1_7, initializeValues, generateMatrix};


//*******************************************************************************
// Function: returns Row & Col user input values, as an object.
//*******************************************************************************
function initializeValues(rowClassName, colClassName) {

  let obj = {};

  obj.row = Number(document.querySelector(rowClassName).value);
  obj.col = Number(document.querySelector(colClassName).value);
  
  return obj;

}


// ********************************************************************
//            function: Generate a Matrix.
// ********************************************************************
function generateMatrix(row, col, matrixContainer) {

  let myMatrix = initializeMatrixCero(row, col);
  matrixContainer.innerHTML = '';

  for (let n = 0; n < row; n++) {
    const wrapDiv = generateMatrixRow(n, row, col, myMatrix);
    matrixContainer.appendChild(wrapDiv);
  }

  matrixContainer.appendChild(generateMatrixLastRow(col));

}


// ********************************************************************
//            function: Generate a Matrix ROW.
// ********************************************************************
function generateMatrixRow(n, row, col, myMatrix) {

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

    /* Create <input class="wrap__row__col type="text""> item */
    const input = document.createElement("input");
    input.className = "wrap__row__col";
    input.type = "text";
    input.dataset.row = n + 1;
    input.dataset.col = m + 1;

    rowDiv.appendChild(input);

    // adding input event listeners.
    input.addEventListener('input', (event)=> {

      if ( evalRegExp1_100(event) ) {

        let activeRow = Number(event.target.dataset.row);
        let activeCol = Number(event.target.dataset.col);
  
        myMatrix[activeRow][activeCol] = Number(event.target.value);
        updateSumColLabel(col, activeRow, myMatrix);
        updateSumRowLabel(row, activeCol, myMatrix);

      }

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


// ********************************************************************
//            function: Initilize a Matrix Object with Zero.
// ********************************************************************
function initializeMatrixCero(row, col) {

  let matrixObject = {};

  for (let i = 0; i < row; i++) {
    matrixObject[i+1] = {};

    for (let j = 0; j < col; j++) {
      matrixObject[i+1][j+1] = 0;
    }
  }

  return matrixObject;

}


// ********************************************************************
//         function: Update COL Sumatory for changed input col.
// ********************************************************************

function updateSumColLabel(col, activeRow, myMatrix){

  let sumCol = 0;

  for (let i = 1; i <= col; i++) {
    sumCol += myMatrix[activeRow][i];
  }

  document.querySelector(`.js-span-n${activeRow}`).innerText = sumCol;

}


// ********************************************************************
//        function: Update ROW Sumatory for changed input row.
// ********************************************************************

function updateSumRowLabel(row, activeCol, myMatrix) {

  let sumRow = 0;

  for (let i = 1; i <= row; i++) {
    sumRow += myMatrix[i][activeCol];
  }

  document.querySelector(`.js-span-m${activeCol}`).innerText = sumRow;

}


//*******************************************************************************
// Function: it evaluates regular exp. with numeric range 1 to 100 only.
//*******************************************************************************
function evalRegExp1_100(event) {

  let regExp1_100 = new RegExp('^[1-9]?[0-9]{1}$|^100$');
  let regExpOk = regExp1_100.test(event.target.value);

  if ( !regExpOk && (event.target.value != '') ){

    alert('please only introduce positive numbers from 1 to 100');
    event.target.value = '';
    return false;

  } else {

    return true;

  }

}


//*******************************************************************************
// Function: it evaluates ROW & COL, they must be numeric range from 1 to 7 only.
//*******************************************************************************
function evalRegExp1_7(rowClassName, colClassName) {

  let row = document.querySelector(rowClassName).value;
  let col = document.querySelector(colClassName).value;
  let regExp1_7 = new RegExp('^[1-7]$');
  let regExpOk = regExp1_7.test(row) && regExp1_7.test(col);
  
  if (!regExpOk){
    alert('Please fill N & M inputs with INTEGER numbers from 1 to 7 only**');
    document.querySelector(rowClassName).value = '';
    document.querySelector(colClassName).value = '';
    return false;

  } else {

    return true;

  }

}
