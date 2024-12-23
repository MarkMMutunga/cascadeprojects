const gridContainer = document.querySelector('.grid-container');
const scoreDisplay = document.getElementById('score');
let score = 0;

function createTile(value) {
    const tile = document.createElement('div');
    tile.classList.add('tile', `tile-${value}`);
    tile.textContent = value;
    return tile;
}

function setup() {
    for (let i = 0; i < 16; i++) {
        gridContainer.appendChild(createTile(0));
    }
    addRandomTile();
    addRandomTile();
}

function addRandomTile() {
    const emptyTiles = Array.from(gridContainer.children).filter(tile => tile.textContent == '0');
    if (emptyTiles.length > 0) {
        const randomTile = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
        randomTile.textContent = Math.random() < 0.9 ? 2 : 4;
        randomTile.classList.remove('tile-0');
        randomTile.classList.add(`tile-${randomTile.textContent}`);
    }
}

setup();
