const gridContainer = document.querySelector('.grid-container');

const rows = 16;
const cols = 16;

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
    for (let j = 0; j < cols; j++)
    {
        const cel = document.createElement('div');
        cel.style.width = '24px';
        cel.style.height = '24px';
        cel.style.backgroundColor = "lightblue";
        cel.style.border = "1px solid black";
        cel.style.borderRadius = "4px";
        row.appendChild(cel);
        cel.onmouseenter = () => changeColor(cel);
    }
    gridContainer.appendChild(row);
}