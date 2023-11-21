const blue_button = document.getElementById("blue_button")
const red_button = document.getElementById("red_button")
const green_button = document.getElementById("green_button")
const direcionais = document.getElementById("direcionais")
const start = document.getElementById("start")
const select = document.getElementById("select")

let screen = document.getElementById("screen")
let runningGame = false

blue_button.addEventListener("click", ()=> {
    blue_button.setAttribute("style", "background-image: url(assets/blue_pressed.png);")
    setTimeout(() => {
        blue_button.setAttribute("style", "background-image: url(assets/blue.png);")
    }, 200);
}) 

green_button.addEventListener("click", ()=> {
    green_button.setAttribute("style", "background-image: url(assets/green_pressed.png);")
    setTimeout(() => {
        green_button.setAttribute("style", "background-image: url(assets/green.png);")
    }, 200);
}) 

red_button.addEventListener("click", ()=> {
    red_button.setAttribute("style", "background-image: url(assets/red_pressed.png);")
    setTimeout(() => {
        red_button.setAttribute("style", "background-image: url(assets/red.png);")
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
    start.setAttribute("style", "background-image: url(assets/start_select_pressed.png);")
    setTimeout(() => {
        start.setAttribute("style", "background-image: url(assets/start_select.png);")
    }, 200);
})

select.addEventListener("click", ()=> {
    select.setAttribute("style", "background-image: url(assets/start_select_pressed.png);")
    setTimeout(() => {
        select.setAttribute("style", "background-image: url(assets/start_select.png);")
    }, 200);
})

if (runningGame === false) {
    startGame()
    runningGame = true
} else if (runningGame === true) {
    endGame()
    runningGame = false
}

function startGame() {
    //aaaaa
}

function endGame() {
    screen.setAttribute("style", "background-image: url(assets/happybmo.gif);")
}

