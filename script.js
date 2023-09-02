//function createGrid() {}

function createTile(d) {
  let tile = document.createElement("div");
  tile.classList.add("tile");
  document.querySelector(".tile").style.width = d;
  document.querySelector(".tile").style.height = d;
  document.querySelector(".tile").style.backgroundColor = "red";
  document.body.appendChild(tile);
}

//createTile(100);

let tile = document.createElement("div");
/* tile.classList.add("tile");
document.querySelector(".tile").style.width = 100;
document.querySelector(".tile").style.height = 100;
document.querySelector(".tile").style.backgroundColor = "red"; */
document.body.appendChild(tile);
