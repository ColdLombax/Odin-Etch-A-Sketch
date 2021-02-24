// Create an element with class of grid-layout
// change the styling to css grid check whether it's scaleable?
const container = document.querySelector('.container');

function createGrid (gridAmount) {
    let gridArea = gridAmount * gridAmount;
    for(let i = 0; i <= gridArea; i++) 
    {
        let gridItem = document.createElement('div');
        gridItem.classList.add('item-element');
        container.style.gridTemplateColumns = `repeat(${gridAmount}, 1fr)`
        container.style.gridTemplateRows = `repeat(${gridAmount}, 1fr)`   
        container.insertAdjacentElement('beforeend', gridAmount);
        // This will probably need reworking again, elements aren't being created
    } 
}

createGrid(10);
