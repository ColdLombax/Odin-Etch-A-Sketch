const gridContainer = document.querySelector("#grid-container");

// CUSTOM VARIABLES
let borderOnly = false;
let activeColor = "grey";
let eraserActive = false;
let togglerActive = false;

const createGrids = (gridSize) => {
  gridSize > 64 ? (gridSize = 64) : (gridSize = gridSize);
  const gridArea = gridSize * gridSize;

  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (i = 0; i <= gridArea - 1; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    if (borderOnly) {
      gridItem.style.borderColor = "transparent";
    }
    gridItem.addEventListener("mouseover", colorPainter);
    gridContainer.appendChild(gridItem);
  }
};

const colorPainter = (e) => {
  if (!togglerActive) {
    if (!eraserActive) {
      e.target.style.backgroundColor = "transparent";
      if (activeColor === "rgb") {
        const value1 = Math.floor(Math.random() * 255);
        const value2 = Math.floor(Math.random() * 255);
        const value3 = Math.floor(Math.random() * 255);
        e.target.style.backgroundColor = `rgb(${value1}, ${value2}, ${value3})`;
      } else if (activeColor === "grey") {
        e.target.style.backgroundColor = "#555";
      }
    }
  }
};

const renderGrid = (gridSize) => {
  gridContainer.innerHTML = "";
  createGrids(gridSize);
};

// Toggle Options

let isModalOpen = false;

const toggleModal = () => {
  isModalOpen = !isModalOpen;
  const modal = document.querySelector("#modal");
  isModalOpen ? (modal.style.display = "flex") : (modal.style.display = "none");
};

const toggleButton = (btn) => {
  if (btn === "grey") {
    activeColor = "grey";
  } else if (btn === "rgb") {
    activeColor = "rgb";
  } else if (btn === "grid") {
    borderOnly = !borderOnly;
    renderGrid(32);
  }
  console.log(activeColor);
};

renderGrid(32);

// SHORTCUTS
let prevColor = activeColor;

const keyHandler = (e) => {
  switch (e.keyCode) {
    case 80:
      activeColor = prevColor;
      break;
    case 79:
      toggleModal();
      break;
    case 69:
      if (!activeColor === "") {
        prevColor = activeColor;
      }
      activeColor = "";
      break;
    case 84:
      togglerActive = !togglerActive;
      break;
  }
};

document.addEventListener("keyup", keyHandler, false);
// Test
