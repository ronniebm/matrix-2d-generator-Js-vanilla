const generateButton = document.querySelector('.js-generate-button');
const matrixContainer = document.querySelector('.js-matrix-container');


generateButton.addEventListener('click', () => {

  const row = Number(document.querySelector('.js-input-n-row').value);
  const col = Number(document.querySelector('.js-input-m-col').value);
  matrixContainer.innerHTML = '';
  generateMatrixRow(row, col);
  console.log(row);

})

// ********************************************************************
//                  function: Generate a Matrix ROW.
// ********************************************************************
function generateMatrixRow(row, col) {

  for (let i = 0; i < row; i++) {
    const wrapDiv = generateMatrixCol(col);
    matrixContainer.appendChild(wrapDiv);
  }

}

// ********************************************************************
//                  function: Generate a Matrix COL.
// ********************************************************************
function generateMatrixCol(col) {

  /* Create <DIV class="wrap"> item */
  const wrapDiv = document.createElement("div");
  wrapDiv.className = "wrap";

  /* Create <DIV class="wrap__row"> item */
  const rowDiv = document.createElement("div");
  rowDiv.className = "wrap__row";

  /* Create <DIV class="wrap__row"> item */
  const span = document.createElement("span");
  span.className = "wrap__span";
  span.innerText = "100";

  for (let i = 0; i < col; i++) {

    /* Create input item */
    const input = document.createElement("input");
    input.className = "wrap__row__col";
    input.type = "text";

    rowDiv.appendChild(input);
  }

  wrapDiv.appendChild(rowDiv);
  wrapDiv.appendChild(span);

  return wrapDiv;

}






// 