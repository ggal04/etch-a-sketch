let squareSize = 40;
let size =16;
let color = "#FFFFFF";
let hold = false;


function generateGrid(size) {
    const container = document.querySelector('.gridContainer');
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
    document.querySelector('.grid');

    for (let x = 0; x < size; x++) {
        const row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        for (let y = 0; y < size; y++) {
            const pixel = document.createElement('div');
            pixel.classList.add('square');
            row.appendChild(pixel);
        }
    }
}

function addListeners() {
    const bod = document.querySelector('.bod');
    bod.addEventListener('mousedown', () => {
        hold = true;
    })
    bod.addEventListener('mouseup', () => {
        hold = false;
    })

    const allTheSquares = document.querySelectorAll('.square');
    allTheSquares.forEach((square) => {
        square.addEventListener('mousemove', () => {
            if (hold === true) {
                square.style.cssText = `background: ${color}; height: ${squareSize}px; width: ${squareSize}px`;
            }
        })
        square.addEventListener('click', () => {
            square.style.cssText = `background: ${color}; height: ${squareSize}px; width: ${squareSize}px`;

        })
    })
}

generateGrid(size);
addListeners();



const changeSize = document.querySelector('.dimensionChange')
changeSize.addEventListener('click', () => {
    squareSize = parseInt(prompt("Pick a size between 1 and 100:"));
    const grid = document.querySelector('.grid');
    grid.remove();
    generateGrid(squareSize);
    addListeners();
    squareSize = 640/squareSize;
    const allTheSquares = document.querySelectorAll('.square');
    allTheSquares.forEach((square) => {
        square.style.cssText = `height: ${squareSize}px; width: ${squareSize}px`
    })
})

