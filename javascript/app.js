// Accessing elemnts
let board = document.querySelector("#game");
let box = document.querySelectorAll(".box");
let reset = document.querySelector(".resetBtn");
let winContainer = document.querySelector(".winnerContainer");
let msg = document.querySelector("#winMsg");
let newGame = document.querySelector("#newGame");
let game = document.querySelector(".sec1");
// Keeping track of palyers
let palyer0 = true;
// Move count for draw checking
let move = 0;
// Winning patterns 
let WinPattern = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
// NewGame button
newGame.addEventListener("click", ()=>{
    clearGame();
    enable();
    game.classList.remove("hide");
    reset.classList.remove("hide");
    winContainer.classList.add("hide");
});
// Reset Button
reset.addEventListener("click", ()=>{
    clearGame();
    enable();
});
// Gamepaly
box.forEach(element => {
    element.addEventListener("click", () =>{
        if(palyer0){
            element.innerText = "O";
            palyer0=false;
            element.style.color="red";
        }else{
            element.innerText = "X"
            palyer0=true;
            element.style.color="green";
        }
        element.disabled = true;
        move++;
        checkWinner();
    })
});
// Winner selcting fn
let checkWinner = ()=>{
    for (let pattern of WinPattern) {
       let posVal1 = box[pattern[0]].innerText;
       let posVal2 = box[pattern[1]].innerText;
       let posVal3 = box[pattern[2]].innerText;

       if(posVal1!=""&&posVal2!=""&&posVal3!=""){
        if(posVal1===posVal2&&posVal2===posVal3){
            won(posVal1);
            return;
        }
       }
    }
    if(move==9){
        draw();
        return;
    }
}
// function to print win msg
let  won = (posVal1)=>{
    msg.innerText = `Congratulations! Player-${posVal1} WON`;
    winContainer.classList.remove("hide");
    game.classList.add("hide");
    reset.classList.add("hide");
    
}
// function to clear game
let clearGame = ()=>{
    box.forEach(element=>{
        element.innerText="";
    })
    palyer0 = true;
    move=0;
}
// function to enable buttons(Used when resetting or starting a new game)
let enable = ()=>{
    box.forEach(element=>{
        element.disabled=false;
    })
}
// Function to print draw msg
let draw = ()=>{
    msg.innerText = "Game is Draw";
    winContainer.classList.remove("hide");
    game.classList.add("hide");
    reset.classList.add("hide");
}