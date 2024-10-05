const container = document.querySelector("#container")
const create=document.querySelector("#create")
const squares = document.querySelectorAll("square")
squares.forEach((square)=>{
    square.setAttribute("onclick", "alert('click')")
    
})

create.addEventListener("click",()=>{
    
    makeSquares()
})
function makeSquares(){
    rows = 22
    cols = 20
    for(let i = 0; i< rows; i++){
        for(let j=0; j<cols; j++){
            let square = document.createElement("div")
            square.classList.add("square")
            square.addEventListener("click",()=>{
                square.style.backgroundColor = "black"
            })
            container.appendChild(square)
        }

    }
}


