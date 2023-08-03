let squareSize = 40;
let size = 16;
let color = "#000000";
let hold = false;
let rainbow = false;
let shading = false;
let erase = false
let colorPencil = true;
let guideGrid = false


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
                if (colorPencil) {
                    square.style.cssText = `background: ${color}; height: ${squareSize}px; width: ${squareSize}px`;
                }
                else if (rainbow) {
                    square.style.cssText = `background: #${Math.floor(Math.random()*16777215).toString(16)}; height: ${squareSize}px; width: ${squareSize}px`;
                }
                else if (eraser) {
                    square.style.cssText = `background: ${colorChange.value}; height: ${squareSize}px; width: ${squareSize}px`;
                }
            }
        })
        square.addEventListener('click', () => {
            if (colorPencil) {
                square.style.cssText = `background: ${color}; height: ${squareSize}px; width: ${squareSize}px`;
            }
            else if (rainbow) {
                square.style.cssText = `background: #${Math.floor(Math.random()*16777215).toString(16)}; height: ${squareSize}px; width: ${squareSize}px`;
            }
            else if (eraser) {
                square.style.cssText = `background: ${colorChange.value}; height: ${squareSize}px; width: ${squareSize}px`;
            }

        })
    })
}

function getSize(size) {
    pick = parseInt(prompt("Pick a size between 1 and 100:"));
    if (pick >= 1 && pick <= 100) {
        size = pick;
        return size;
    }
    else {
        alert("Invalid number! Please try again :)");
        return 0;
    }
}

generateGrid(size);
addListeners();

// MODE TOGGLES

const colorPicker = document.querySelector('.paintcolor');
colorPicker.addEventListener('change', () => {
    color = colorPicker.value;
    rainbowButton.classList.remove('toggle');
    colorPicker.classList.add('toggle');
    eraser.classList.remove('toggle');
    shadingButton.classList.remove('toggle');
    rainbow = false;
    shading = false;
    erase = false;
    colorPencil = true;
})


const rainbowButton = document.querySelector('.rainbow');
rainbowButton.addEventListener('click', () => {
    rainbowButton.classList.add('toggle');
    colorPicker.classList.remove('toggle');
    eraser.classList.remove('toggle');
    shadingButton.classList.remove('toggle');
    rainbow = true;
    shading = false;
    erase = false;
    colorPencil = false;
})

const shadingButton = document.querySelector('.shading');
shadingButton.addEventListener('click', () => {
    rainbow = false;
    shading = true;
    erase = false;
    colorPencil = false;
    rainbowButton.classList.remove('toggle');
    colorPicker.classList.remove('toggle');
    eraser.classList.remove('toggle');
    shadingButton.classList.add('toggle');
})

const eraser = document.querySelector('.eraser')
eraser.addEventListener('click', () => {
    color = "#ffffff";
    rainbowButton.classList.remove('toggle');
    colorPicker.classList.remove('toggle');
    eraser.classList.add('toggle');
    shadingButton.classList.remove('toggle');
    rainbow = false;
    shading = false;
    erase = true;
    colorPencil = false;
})

// EXTRA FEATURES

const changeSize = document.querySelector('.dimensionChange')
changeSize.addEventListener('click', () => {
    size = getSize(size);
    if (size !== 0) {
        const grid = document.querySelector('.grid');
        grid.remove();
        generateGrid(size);
        addListeners();
        squareSize = 640 / size;
        const allTheSquares = document.querySelectorAll('.square');
        allTheSquares.forEach((square) => {
            square.style.cssText = `height: ${squareSize}px; width: ${squareSize}px`
        })
    }
})

const clear = document.querySelector('.clear')
clear.addEventListener('click', () => {
    const grid = document.querySelector('.grid');
    grid.remove();
    generateGrid(size);
    addListeners();
    squareSize = 640 / size;
    const allTheSquares = document.querySelectorAll('.square');
    allTheSquares.forEach((square) => {
        square.style.cssText = `background: ${colorChange.value}; height: ${squareSize}px; width: ${squareSize}px`
    })
})

const colorChange = document.querySelector('.colorChange');
colorChange.addEventListener('change', () => {
    const grid = document.querySelector('.grid');
    grid.remove();
    generateGrid(size);
    addListeners();
    squareSize = 640 / size;
    const allTheSquares = document.querySelectorAll('.square');
    allTheSquares.forEach((square) => {
        square.style.cssText = `background: ${colorChange.value}; height: ${squareSize}px; width: ${squareSize}px`
    })
})

