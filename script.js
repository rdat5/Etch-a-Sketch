const gridContainer = document.querySelector('.grid-container');
const clearCanvasBtn = document.querySelector('#clear-canvas');
const defaultBGColor = "white";

let rows = 16;
let cols = 16;

clearCanvasBtn.addEventListener('click', clearCanvas);
setCanvas();

function changeColor(cel, color)
{
    cel.style.backgroundColor = color;
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
            cel.onmouseenter = () => changeColor(cel, "blue");
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