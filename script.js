const gridContainer = document.querySelector('.grid-container');

const rows = 48;
const cols = 48;

function changeColor(cel)
{
    cel.style.backgroundColor = "black";
}

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
        cel.style.backgroundColor = "lightblue";
        cel.style.border = "1px solid black";
        cel.style.flex = "auto";
        row.appendChild(cel);
        cel.onmouseenter = () => changeColor(cel);
    }
    gridContainer.appendChild(row);
}