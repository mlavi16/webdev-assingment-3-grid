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

// Fill all uncolored cells
function fillU(){
    // if a color is not selected, prompt user for a color and do not fill in any cells
    if ((colorSelected == "SELECT") || (colorSelected == undefined)) {
        alert("Please select a color");
        return;
    }
    let uncoloredCells = document.querySelectorAll("td.Uncolored");
    for (let i = 0; i < uncoloredCells.length; i++) { // for every unfilled table cell
        uncoloredCells[i].className = colorSelected; // fill in with the color selected
    }

}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}