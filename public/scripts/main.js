import Modal from "./modal.js"

const modal = Modal()
const takeAllCheckButtons = document.querySelectorAll('.actions .check')
const takeAllDeleteButtons = document.querySelectorAll('.actions a.delete')

takeAllCheckButtons.forEach(button => {
    
    button.addEventListener('click', event => {
        modal.open()
    })
    
})


