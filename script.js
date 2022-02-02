const gridContainer = document.querySelector('.grid-container');
const clearCanvasBtn = document.querySelector('#clear-canvas');
const defaultBGColor = "white";

const rows = 16;
const cols = 16;

clearCanvasBtn.addEventListener('click', test);
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

function test()
{
    let allCels = document.querySelectorAll('.cel');
    allCels.forEach(
        (cel) => {
            changeColor(cel, defaultBGColor);
        });
}