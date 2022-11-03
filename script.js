// Declare global variables
let numRows = 0;  // The number of rows in the grid.
let numCols = 0;  // The number of columns in the grid.
let colorSelected;  // The color selected by the user in the dropdown menu.
let grid = document.getElementById("grid");  // The grid element.

// Add a row
function addR() {
    let newRow = grid.insertRow(numRows); 
    if (isTableEmpty()) {
        // When adding the first row, numCols is automatically set to 1.
        numCols = 1;
    }
    // Add a cell to each column, to create the new row.
    for (let i = 0; i < numCols; i++) {
        addCell(newRow);
    }
    // Update numRows var to accurately refluct the number of rows.
    numRows += 1;
}

// Add a column
function addC() {
    if (isTableEmpty()) {
        // add a row if this is the first row in the table
        addR();
    } else {
        // else add a cell to all existing rows
        let rows = grid.querySelectorAll("TR"); 
        for (let i = 0; i < numRows; i++) {
            addCell(rows[i]);
        }
        numCols += 1; // Update numCols var to accurately refluct the number of columns.
    }
}

// Add a table cell
function addCell(row) {
    let cell = row.insertCell(-1); // Create a new cell in the given row
    cell.classList.add("Uncolored"); // Cell color is set to uncolored.
    cell.addEventListener("click", fillCell); // EventListener is added to cell, so fillCell() is called when clicked.
}

// Remove a row
function removeR() {
    if (!isTableEmpty()) {
        // Remove a row if the table is not already empty
        grid.deleteRow(-1);
        numRows -= 1; // Update numRows var to accurately refluct the number of rows.
    } 
    // If all rows are deleted, update grid to be empty
    deleteTableIfEmpty()
}

// Remove a column
function removeC() {
    if (!isTableEmpty()) {
        // If the table is not empty, delete a cell from all existing rows
        let rows = grid.querySelectorAll("TR"); 
        for (let i = 0; i <numRows; i++) {
            rows[i].deleteCell(-1);
        }
        numCols -= 1; // Update numCols var to accurately refluct the number of columns.
    } 
    // If all columns are deleted, update grid to be empty
    deleteTableIfEmpty()
}

// Remove all table rows/cols if numRows/numCols is 0
function deleteTableIfEmpty() { 
    if ((numCols == 0) || (numRows == 0)) {
        grid.innerHTML = "";
        numCols = 0;
        numRows = 0;
    }
}

// Check if the table is empty based on row/column counts
function isTableEmpty() {
    return (numCols == 0) || (numRows == 0);
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill in a selected cell
function fillCell(event){
    // if a color is not selected, prompt user for a color and do not fill in the cells
    if ((colorSelected == "SELECT") || (colorSelected == undefined)) {
        alert("Please select a color to fill in this cell");
        return;
    }
    // else fill in the cell with the selected color
    event.currentTarget.className = colorSelected;
}


// Fill all uncolored cells
function fillU(){
    // if a color is not selected, prompt user for a color and do not fill in any cells
    if ((colorSelected == "SELECT") || (colorSelected == undefined)) {
        alert("Please select a color to fill in all uncolored cells");
        return;
    }
    let uncoloredCells = grid.querySelectorAll("td.Uncolored");
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
    let tableCells = grid.querySelectorAll("td");
    for (let i = 0; i < numCols * numRows; i++) { // for every table cell
        tableCells[i].className = colorSelected; // fill in with the color selected
    }
}

// Clear all cells
function clearAll(){
    let tableCells = grid.querySelectorAll("td");
    for (let i = 0; i < numCols * numRows; i++) { // for every table cell
        tableCells[i].className = "Uncolored"; // make it uncolored
    }
}