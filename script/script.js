const generateButton = document.querySelector('.js-generate-button');
const matrixContainer = document.querySelector('.js-matrix-container');


generateButton.addEventListener('click', () => {

  const row = Number(document.querySelector('.js-input-n-row').value);
  const col = Number(document.querySelector('.js-input-m-col').value);
  matrixContainer.innerHTML = '';
  generateMatrixRow(row, col);

})

// ********************************************************************
//                  function: Generate a Matrix ROW.
// ********************************************************************
function generateMatrixRow(row, col) {

  for (let i = 0; i < row; i++) {
    const wrapDiv = generateMatrixCol(col);
    matrixContainer.appendChild(wrapDiv);
  }

  matrixContainer.appendChild(generateMatrixLastRow(col));
  console.log(matrixContainer)

}

// ********************************************************************
//                  function: Generate a Matrix COL.
// ********************************************************************
function generateMatrixCol(col) {

  /* Create <div class="wrap"> item */
  const wrapDiv = document.createElement("div");
  wrapDiv.className = "wrap";

  /* Create <div class="wrap__row"> item */
  const rowDiv = document.createElement("div");
  rowDiv.className = "wrap__row";

  /* Create <div class="wrap__row"> item */
  const span = document.createElement("span");
  span.className = "wrap__span";
  span.innerText = "100";

  for (let i = 0; i < col; i++) {

    /* Create <input type="text" class="wrap__row__col"> item */
    const input = document.createElement("input");
    input.className = "wrap__row__col";
    input.type = "text";

    rowDiv.appendChild(input);
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

  for (let i = 0; i < col; i++) {

    /* Create <span class="last-span"> item */
    const span = document.createElement("span");
    span.className = "last-span";
    span.innerText = "100";

    wrapDiv.appendChild(span);
  }

  console.log(wrapDiv)
  return wrapDiv;

}
