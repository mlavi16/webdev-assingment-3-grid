// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let grid = document.getElementById("grid");
    let newRow = grid.insertRow(numRows); 
    if (numCols == 0) // if table is empty
        numCols = 1;
    for (let i = 0; i < numCols; i++) {
        addCell(newRow);
    }
    numRows += 1;
}

// Add a column
function addC() {
    if (numRows == 0) // if table is empty
        addR();
    else { // if table has at least one row/column
        let rows = document.getElementsByTagName("TR"); 
        for (let i = 0; i < numRows; i++) {
            addCell(rows[i])
        }
        numCols += 1;
    }
}

// Add a table cell
function addCell(row) {
    let cell = row.insertCell(-1);
    cell.classList.add("Uncolored");
    cell.addEventListener("click", fillCell);
}

// Remove a row
function removeR() {
    if (numRows > 0) { // if table isn't already empty
        document.getElementById("grid").deleteRow(-1);
        numRows -= 1;
    }
    if (numRows == 0) // if table (rows) are empty
        numCols = 0; // empty table (cols) as well

}

// Remove a column
function removeC() {
    if (numCols > 0) { // if table isn't already empty
        let rows = document.getElementsByTagName("TR"); 
        for (let i = 0; i <numRows; i++) {
            rows[i].deleteCell(-1);
        }
        numCols -= 1;
    }
    if (numCols == 0) // if table (cols) are empty
        numRows = 0; // empty table (rows) as well
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill in a selected cell
function fillCell(){
    // if a color is not selected, prompt user for a color and do not fill in the cells
    if ((colorSelected == "SELECT") || (colorSelected == undefined)) {
        alert("Please select a color to fill in this cell");
        return;
    }
    // else fill in the cell with the selected color
    this.className = colorSelected;
}


// Fill all uncolored cells
function fillU(){
    // if a color is not selected, prompt user for a color and do not fill in any cells
    if ((colorSelected == "SELECT") || (colorSelected == undefined)) {
        alert("Please select a color to fill in all uncolored cells");
        return;
    }
    let uncoloredCells = document.querySelectorAll("td.Uncolored");
    for (let i = 0; i < uncoloredCells.length; i++) { // for every unfilled table cell
        uncoloredCells[i].className = colorSelected; // fill in with the color selected
    }

}

// Fill all cells
function fillAll(){
    // if a color is not selected, prompt user for a color and do not fill in any cells
    if ((colorSelected == "SELECT") || (colorSelected == undefined)) {
        alert("Please select a color to fill in all cells");
        return;
    }
    // else fill in all cells with selected color
    let tableCells = document.querySelectorAll("td");
    for (let i = 0; i < numCols * numRows; i++) { // for every table cell
        tableCells[i].className = colorSelected; // fill in with the color selected
    }
}

// Clear all cells
function clearAll(){
    let tableCells = document.querySelectorAll("td");
    for (let i = 0; i < numCols * numRows; i++) { // for every table cell
        tableCells[i].className = "Uncolored"; // make it uncolored
    }
}