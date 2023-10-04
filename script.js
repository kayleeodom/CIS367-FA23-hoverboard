const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const NUM_SQUARES = 500;
const WIDTH = 20;
const HEIGHT = NUM_SQUARES / WIDTH;

const container = document.getElementById('container');

//let activeSquare = 

for(let i=0; i<NUM_SQUARES; i++)
{
    const square = document.createElement('div');
    square.classList.add('square');
    // <div class='square'></div>

    square.addEventListener('mouseover', ()=> {
        setColor(square);
    })

    square.addEventListener('mouseout', ()=> {
        removeColor(square);
    })

    container.appendChild(square);
}

function getRandomColor(){

    return colors[Math.floor(Math.random()*colors.length)];

}

function setColor(square){
    const randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
    square.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
}

function removeColor(square){
    square.style.backgroundColor = '#444'
        square.style.boxShadow = "";
}

function blinkGrid()
{
    const squares = document.getElementsByClassName("square")

    for (const square of squares)
    {
        setColor(square);
        setTimeout( ()=> {
            // code to run
            removeColor(square)
        }, 2000);
    }
}

function clearGrid()
{
    // need to work on
    const squares = document.getElementsByClassName("square")


}

document.addEventListener('keypress', (event)=> {

    if(event.code === "Space")
    {
        // do something
        clearGrid();
    }

    if(event.code === "Enter")
    {
        blinkGrid();
    }

    if(event.key == 'w')
    {
        //move up
    }

    if(event.key == 'd')
    {
        //move right
        activeSquare++;
        setColor(getSquareByIndex(activeSquare))
    }
});



