const gridContainer = document.querySelector('#grid-container');

function createGrid(gridSize) {
    gridArea = gridSize * gridSize;
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    for(i = 0; i <= gridArea; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('mouseover', onHoverEffect());
        gridContainer.appendChild(gridItem);
    }
}

createGrid(16);

function onHoverEffect() {
    
}