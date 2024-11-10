const popupBody = document.getElementById('popup-body')
const popup = document.getElementById('popup')
const closeButton = document.getElementById('close-popup')
const error = document.getElementById('error')
const enterButton = document.getElementById('enter-button')
const idInput = document.getElementById('id-input')
const idSubmitButton = document.getElementById('id-submit-button')

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const allowedIDs = ['53457694456']

popup.onclick = e => e.stopPropagation()

const closePopup = async () => {
    popup.style.scale = 0.5
    popupBody.style.opacity = 0
    await sleep(200)
    popupBody.style.display = 'none'
    document.onclick = null
    closeButton.onclick = null;
}

const openPopup = async () => {
    popupBody.style.display = 'flex'
    await sleep(0)
    popupBody.style.opacity = 1
    popup.style.scale = 1
    await sleep(200)
    document.onclick = closePopup
    closeButton.onclick = closePopup
}

let showingError = false
const showError = async () => {
    if (showingError) return
    showingError = true
    error.classList.add('open')
    await sleep(3000)
    error.classList.remove('open')
    showingError = false
}

enterButton.addEventListener('click', openPopup)

idSubmitButton.addEventListener('click', async () => {
    if (allowedIDs.includes(idInput.value))
        await openGamePage(idInput.value)
    else await showError()
})
