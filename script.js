const gridContainer = document.getElementById("gridContainer");
const gridSizeBtn = document.getElementById("gridSizeBtn");
const clearGridBtn = document.getElementById("clearGridBtn");

let gridSize;

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    createTileRow();
    for (let j = 0; j < gridSize; j++) {
      createTile();
    }
  }
}

function createTileRow() {
  let tileRow = document.createElement("div");
  tileRow.classList.add("tileRow");
  tileRow.style.backgroundColor = "white";
  tileRow.style.display = "flex";
  tileRow.style.flexGrow = "1";
  tileRow.style.flexDirection = "row";
  gridContainer.append(tileRow);
}

function createTile() {
  let tile = document.createElement("div");
  tile.classList.add("tile");
  tile.style.display = "flex";
  tile.style.flexGrow = "1";
  tile.style.backgroundColor = "white";

  tile.addEventListener("mouseover", function () {
    this.style.backgroundColor = "black";
    this.style.opacity = (parseFloat(this.style.opacity) || 0) + 0.2;
  });

  gridContainer.lastChild.append(tile);
}

createGrid(50);

gridSizeBtn.addEventListener("click", function () {
  do {
    gridSize = prompt("What size should the grid be? Max: 100");
  } while (gridSize > 100 || gridSize <= 0);
  clearGrid();
  createGrid(gridSize);
});

function clearGrid() {
  gridContainer.innerHTML = "";
}

clearGridBtn.addEventListener("click", function () {
  clearGrid();
  createGrid(50);
});
