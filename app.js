const container = document.querySelector("#container")
const create=document.querySelector("#create")
const squares = document.querySelectorAll("square")
squares.forEach((square)=>{
    square.setAttribute("onclick", "alert('click')")
    
})

create.addEventListener("click",()=>{
    makeSquares()
    makeSquares()
})
function makeSquares(){
    rows = 16
    cols = 16
    for(let i = 0; i< rows; i++){
        for(let j=0; j<cols; j++){
            let square = document.createElement("div")
            square.classList.add("square")
            square.setAttribute("onclick", "colorChange()")
            square.addEventListener("click",()=>{
                square.style.backgroundColor = "black"
            })
            container.appendChild(square)
        }

    }
}


function colorChange(el){

}
