const gridContainer = document.querySelector('#grid-container');

let toggleOption = 'mouseover';
let colorOption = 'default'
let color = 'black';

// userGridSize = prompt("Pick a size between 0 - 64")
// createGrid(userGridSize);

createGrid(10);

function createGrid(gridSize) {
    gridSize > 64 ? gridSize = 64 : gridSize = gridSize;
    const gridArea = gridSize * gridSize;
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    for (i=0; i <= gridArea; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.addEventListener(toggleOption, colorPainter);
        gridContainer.appendChild(gridItem);
    }
}

function colorSelector(color) {
    colorOption = color;
}

function colorPainter(item) {
    switch (colorOption)
    {
        case 'rgb':
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            item.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
            break;
        case 'default':
            item.target.style.backgroundColor = 'rgb(0, 0, 0)';
            break;
        case 'eraser':
            item.target.style.backgroundColor = 'rgb(255, 255, 255)';
            break;
    }
    
} 

function clearGrid() {
    gridItems = document.querySelectorAll('.grid-item');
    for(i=0; i<gridItems.length; i++) {
        gridItems[i].style.backgroundColor = '#fff'
    }
}

// when clicking the hover button the inner text changes to click
// the toggleOption is set to click
// when changing colors and events you must foreach indivdual option
//  change the event and color options somehow?