const gridContainer = document.querySelector("#grid-container");

// CUSTOM VARIABLES
const borderOnly = false;
const activeColor = "greyscale";

const createGrids = (gridSize) => {
  gridSize > 64 ? (gridSize = 64) : (gridSize = gridSize);
  const gridArea = gridSize * gridSize;

  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (i = 0; i <= gridArea - 1; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    if (!borderOnly) {
      gridItem.classList.add("grid-item-border");
    }
    // gridItem.addEventListener(toggleOption, colorPainter);
    gridContainer.appendChild(gridItem);
  }
};

createGrids(32);

// Toggle Options

let isModalOpen = false;

const toggleModal = () => {
  isModalOpen = !isModalOpen;
  const modal = document.querySelector("#modal");
  isModalOpen ? (modal.style.display = "flex") : (modal.style.display = "none");
};
