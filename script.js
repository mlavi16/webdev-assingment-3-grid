// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let grid = document.getElementById("grid");
    let newRow = grid.insertRow(numRows); 
    if (numCols == 0)
        numCols = 1;
    for (let i = 0; i < numCols; i++) {
        let newCell = newRow.insertCell(i);
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
            rows[i].insertCell(-1);
        }
        numCols += 1;
    }
}

// Remove a row
function removeR() {
    document.getElementById("grid").deleteRow(-1);
    numRows -= 1;
    if (numRows == 0) // if all table cells are deleted
        numCols = 0; // reset columns to zero
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}