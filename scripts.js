let size = 16;

const grid = document.querySelector('.gridContainer');
for (let x = 0; x<size; x++) {
    const row = document.createElement('div');
    row.classList.add('row');
    grid.appendChild(row);
    for (let y = 0; y < size; y++) {
        const pixel = document.createElement('div');
        pixel.classList.add('square');
        row.appendChild(pixel);
    }
}



