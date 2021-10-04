const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 0
let score = 0


startBtn.addEventListener('click', (event) => {
    event.preventDefault()//отменили добавлени # ссылки при клике
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
    //делегирование событий
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

//При клике попали на кружок или нет
board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        //увеличить счет игры
        score++
        //убрать кружок, по которому кликнули и создать новый
        event.target.remove()
        createRandomCircle()

    }
})

//DEBUG
// startGame()

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`//добавление 0 перед секундами, если меньше 10
        }
        setTime(current)
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span> </h1>`
    //скрывать время, когда игра закончилась
    timeEl.parentNode.classList.add('hide') //удалить вместе с родителем
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)

    const {width, height} = board.getBoundingClientRect()//высота, ширина объекта
    const x = getRandomNumber(0, width - size)//расположение кружка, чтобы не выходил за рамки board
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    board.append(circle)
}

//Функция для случайных размеров кружков в том диапазоне, в котором зададим
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

//В атоматическом режиме выбирать кружки
function winTheGame() {

    function kill() {
        const circle = document.querySelector('.circle')
        if (circle) {
            circle.click()
        }

    }
    setInterval(kill, 42)
}