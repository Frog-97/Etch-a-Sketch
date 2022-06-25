let body = document.createElement("body");
let array = [];


let rowAndColoumnNo = parseInt(prompt(("Enter the number of coloumns and rows.")));
let gridSize = rowAndColoumnNo * rowAndColoumnNo;


for (let i=0; i < gridSize; i++) {
    array.push(document.createElement("div"))
    body.appendChild(array[i])
}

let container = document.querySelector("#container");
for (let i=0; i < gridSize; i++) {
    container.appendChild(array[i]);
    document.getElementById("container").style.gridTemplateColumns = `50px `.repeat(rowAndColoumnNo);
    document.getElementById("container").style.gridTemplateRows = `50px `.repeat(rowAndColoumnNo);
    
}


for (let i=0; i < gridSize; i++) {
    array[i].textContent  = `${i}`
    array[i].setAttribute("id",`${i}`)
}

for (let i=0; i < gridSize; i++) {
document.getElementById(`${i}`).addEventListener("mouseover", () => document.getElementById(`${i}`).style.backgroundColor = "black");
document.getElementById(`${i}`).addEventListener("mouseleave", () => document.getElementById(`${i}`).style.backgroundColor = "white");
}


gridSize = 0;

document.getElementById("button").addEventListener("click", () => {
    rowAndColoumnNo = 0;
    console.log(rowAndColoumnNo)   
    rowAndColoumnNo = parseInt(prompt("Enter the number of coloumns and rows."))
    gridSize = 0
    gridSize = rowAndColoumnNo * rowAndColoumnNo
    console.log(gridSize)
    document.getElementById("container").style.gridTemplateColumns = `50px `.repeat(rowAndColoumnNo);
    document.getElementById("container").style.gridTemplateRows = `50px `.repeat(rowAndColoumnNo);


    for (let i=0; i < gridSize; i++) {
        array.push(document.createElement("div"))
        body.appendChild(array[i])
    }
    
    let container = document.querySelector("#container");
    for (let i=0; i < gridSize; i++) {
        container.appendChild(array[i]);
        document.getElementById("container").style.gridTemplateColumns = `50px `.repeat(rowAndColoumnNo);
        document.getElementById("container").style.gridTemplateRows = `50px `.repeat(rowAndColoumnNo);
        
    }
    
    
    for (let i=0; i < gridSize; i++) {
        array[i].textContent  = `${i}`
        array[i].setAttribute("id",`${i}`)
    }
    
    for (let i=0; i < gridSize; i++) {
    document.getElementById(`${i}`).addEventListener("mouseover", () => document.getElementById(`${i}`).style.backgroundColor = "black");
    document.getElementById(`${i}`).addEventListener("mouseleave", () => document.getElementById(`${i}`).style.backgroundColor = "white");
    }
})