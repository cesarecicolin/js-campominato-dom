
document.getElementById("play")
addEventListener("click", startGame)
const girdElement = document.querySelector(".grid")
 let grid = []
 let result = ""
 let point = []
for (let i = 1; i <= 100; i++) 
{
   
    if (i <= 100)
    {
        result = (i)
        grid.push(result)
    }
}

const bomb = redBomb(16)


let finalBomb =""

// for (let i = 0; i < bomb.length; i++){
    
//     finalBomb = bomb[i]
    
// }
console.log(bomb)

for (let i = 0; i <= grid.length - 1; i++)

{
const curNumber = grid[i]
const cell = generateGridCell(curNumber);
cell.addEventListener("click", press)
girdElement.append(cell);

}

function generateGridCell(innerNumber) {
    const newCell = document.createElement("div");
    newCell.classList.add("square");
    newCell.innerHTML = innerNumber;
    return newCell;
}

function randomNUmber() {
   return Math.floor(Math.random() * 100  + 1) 
    
}
function redBomb(max) {
    const result = []
    while (result.length <16)
    {
        const rndnum = randomNUmber(1, max)
        if(!result.includes(rndnum))
        {
            result.push(rndnum)
        }
    }
    return result
}


// function press() {
//     const clickedNumber = parseInt(this.textContent);
//     if (clickedNumber){
//         this.classList.add("green")
//         console.log(clickedNumber)
//     }

    
// }
const loseBomb = finalBomb
console.log(loseBomb)




function press() {
    const clickedNumber = parseInt(this.textContent);
    console.log(clickedNumber);
    
    for (let i = 0; i < bomb.length; i++){
    
        finalBomb = bomb[i]
        
        
        if(finalBomb === clickedNumber)
        {
            this.classList.add("red")
            alert("hai perso")
            alert(point)
            
        }
        else 
        {
            this.classList.add("green")
           
        }
    }
   

    
}

function startGame() {
    girdElement.classList.remove("d-play")
}

