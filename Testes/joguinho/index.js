const blue_button = document.getElementById("blue_button")
const red_button = document.getElementById("red_button")
const green_button = document.getElementById("green_button")
const direcionais = document.getElementById("direcionais")
const start = document.getElementById("start")

let screen = document.getElementById("screen")
let runningGame = false

blue_button.addEventListener("click", ()=> {
    blue_button.setAttribute("style", "background-image: url(assets/blue_pressed.png);")
    setTimeout(() => {
        blue_button.setAttribute("style", "background-image: url(assets/blue.png);")
    }, 200);
}) 

direcionais.addEventListener("click", ()=> {
    direcionais.setAttribute("style", "background-image: url(assets/yellow_pressed.png);")
    setTimeout(() => {
        direcionais.setAttribute("style", "background-image: url(assets/yellow.png);")
    }, 200);
}) 

direcionais.addEventListener("click", ()=> {
    direcionais.setAttribute("style", "background-image: url(assets/yellow_pressed.png);")
    setTimeout(() => {
        direcionais.setAttribute("style", "background-image: url(assets/yellow.png);")
    }, 200);
}) 

direcionais.addEventListener("click", ()=> {
    direcionais.setAttribute("style", "background-image: url(assets/yellow_pressed.png);")
    setTimeout(() => {
        direcionais.setAttribute("style", "background-image: url(assets/yellow.png);")
    }, 200);
}) 

start.addEventListener("click", ()=> {
    screen.setAttribute("style", "background-image: none;  background-color: #d9ffea;")
    if (runningGame === false) {
        startGame()
        runningGame = true
    } else if (runningGame === true) {
        endGame()
        runningGame = false
    }
})

function startGame() {
    alert("Game Start")
}

function endGame() {
    alert("Game Over")
    screen.setAttribute("style", "background-image: url(assets/happybmo.gif);")
}

