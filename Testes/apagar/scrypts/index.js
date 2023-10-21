let carta = 21
function rodar() {
    const world = document.getElementById('theworld')
    const star = document.getElementById('thestar')

    if (carta == 21) {
        world.style.left = '30%'
        star.style.left = '70%'
        setTimeout(() => {
            world.style.zIndex = '1',
            star.style.zIndex = '2',
            world.style.left = '50%',
            star.style.left = '50%'
        }, 1100);
        carta = 17
    } else if (carta == 17) {
        world.style.left = '70%'
        star.style.left = '30%'
        setTimeout(() => {
            world.style.zIndex = '2',
            star.style.zIndex = '1',
            world.style.left = '50%',
            star.style.left = '50%'
        }, 1100);
        carta = 21
    }
}