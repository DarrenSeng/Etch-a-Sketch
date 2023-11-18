const body = document.querySelector('body')
const container = document.createElement('div')

const btnContainer = document.createElement('div')
btnContainer.classList = 'btnContainer'

const resetBtn = document.createElement('button')
resetBtn.classList = 'resetBtn'

resetBtn.addEventListener('click', () => {
    const gridButtons = document.querySelectorAll('.gridBtn')
    gridButtons.forEach(btn => {
        btn.style.backgroundColor = '';
    })
})
resetBtn.textContent = 'Reset'
btnContainer.append(resetBtn)

const inputBtn = document.createElement('button')
inputBtn.classList = 'inputBtn'
inputBtn.addEventListener('click',() => {
    let userVal;
    do {
        userVal= prompt("Enter the number of squares per side for the grid. (Enter 1-100)");
        if(userVal === null) {
            return;
        }
    } while (userVal < 1 || userVal > 100)
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
    createGrid(userVal)
})
inputBtn.textContent = 'New Grid'
btnContainer.append(inputBtn)
body.append(btnContainer)

container.classList = 'container'
console.log("New script")
function createGrid(numSquares) {
    const availableSpace = Math.min(body.clientWidth, body.clientHeight) 
    const btnSpace = Math.floor(availableSpace/numSquares)
    container.style.overflow = 'auto';
    for(let i = 0; i < numSquares; i++) {
        const row = document.createElement('div')
        row.classList = 'row'
        for(let j = 0; j < numSquares;j++) {
            const btn = document.createElement('button')
            btn.classList = 'gridBtn'
            btn.style.width = btnSpace + "px";
            btn.style.height = btnSpace + "px";
            btn.addEventListener('mouseover', () => {
                btn.style.backgroundColor = '#1E90FF'
            });
            //btn.textContent = "Button[" + i + "][" + j + "]" 
            row.append(btn)
        }
        container.append(row)
    }
}


createGrid(16)
body.append(container)
//const row1 = document.createElement('div')
//const row1 = document.createElement('div')
//const row1 = document.createElement('div')
//const row1 = document.createElement('div')