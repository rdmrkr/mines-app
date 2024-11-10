const playButton = document.getElementById('play-button')
const loader = document.getElementById('loader')
const bombCount = document.getElementById('bomb-count')
const level = document.getElementById('level')
const bet = document.getElementById('bet')
const field = document.getElementById('field')
let flippedCells = []

const minBetSize = 100
const maxBetSize = 2000

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 25; i++)
        field.innerHTML += `<div>
        <img src="assets/cell.svg" alt="cell"/>
        <img src="assets/green-cell.svg" alt="green cell"/>
    </div>`
})

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const flipCell = () => {
    let cellIndex
    do {
        cellIndex = getRandom(0, 5)
    } while (flippedCells.includes(cellIndex))
    field.children[cellIndex].style.transform = 'rotateY(180deg)'
    flippedCells.push(cellIndex)
}

const resetGame = () => {
    for (const index of flippedCells)
        field.children[index].style.transform = 'rotateY(0deg)'
    flippedCells = []
    bombCount.textContent = '-'
    level.textContent = '-'
    bet.textContent = '-'
}

const play = async () => {
    resetGame()
    playButton.disabled = true
    loader.classList.add('loading')
    bet.parentElement.classList.add('open')
    await sleep(2000)
    loader.classList.remove('loading')
    bombCount.textContent = getRandom(3, 12).toString()
    level.textContent = 2
    bet.textContent = getRandom(minBetSize*100, maxBetSize*100) / 100

    for (let i = 0; i < getRandom(5, 8); i++) {
        flipCell()
    }
    await sleep(500)
    playButton.disabled = false
}

playButton.addEventListener('click', play)
