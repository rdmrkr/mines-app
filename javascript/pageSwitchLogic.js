const startPage = document.getElementById('start-section')
const gamePage = document.getElementById('game-section')
const idLabel = document.getElementById('id-label')

const openGamePage = async (id) => {
    await closePopup()
    startPage.style.opacity = 0
    await sleep(400)
    startPage.style.position = 'absolute'
    startPage.style.zIndex = -1
    gamePage.style.zIndex = 1
    gamePage.style.position = 'initial'
    gamePage.style.opacity = 1

    idLabel.textContent = `ID ${id}`
    idLabel.classList.add('open')
}