import Modal from "./modal.js"

const modal = Modal()
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal .buttons button')


const takeAllCheckButtons = document.querySelectorAll('.actions .check')
takeAllCheckButtons.forEach(button => {
    
    button.addEventListener('click', handleClick)
})


const takeAllDeleteButtons = document.querySelectorAll('.actions .delete')
takeAllDeleteButtons.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false))
})


function handleClick(event, check = true){
    const text = check ? "Marcar como lida " : "Excluir";

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`

    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

    modal.open()
}


