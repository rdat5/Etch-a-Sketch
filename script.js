const gridContainer = document.querySelector('.grid-container');
const clearCanvasBtn = document.querySelector('#clear-canvas');
const pickedColor = document.querySelector('#color-picker');
const defaultBGColor = "white";
const isRandom = document.querySelector('#is-random-rgb');

let rows = 16;
let cols = 16;

clearCanvasBtn.addEventListener('click', clearCanvas);
setCanvas();

function getRandomColor()
{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(cel, color)
{
    if (!isRandom.checked)
    {
        cel.style.backgroundColor = color;
    }
    else
    {
        cel.style.backgroundColor = getRandomColor();
    }
}

function setCanvas()
{
    for (let i = 0; i < rows; i++)
    {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        row.style.display = "flex";
        row.style.flexDirection = "column";
        row.style.gap = "0";
        row.style.flex = "auto";
        for (let j = 0; j < cols; j++)
        {
            const cel = document.createElement('div');
            cel.setAttribute('class', 'cel');
            cel.style.backgroundColor = defaultBGColor;
            cel.style.border = "1px solid black";
            cel.style.flex = "auto";
            row.appendChild(cel);
            cel.onmouseenter = () => changeColor(cel, pickedColor.value);
        }
        gridContainer.appendChild(row);
    }
}

function resetCanvas()
{
    let allRows = document.querySelectorAll('.row');
    allRows.forEach((row) => {
        gridContainer.removeChild(row);
    });
}

function promptNewCanvasSize()
{
    let newGridSize = prompt("Enter a new grid size (0 - 100)");
    if (newGridSize < 0)
    {
        newGridSize = 0;
    }
    else if (newGridSize > 100)
    {
        newGridSize = 100;
    }
    rows = newGridSize;
    cols = newGridSize;
}

function clearCanvas()
{
    resetCanvas();
    promptNewCanvasSize();
    setCanvas();
}