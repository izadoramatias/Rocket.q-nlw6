export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper');
    const takeCancelButton = document.querySelector('.modal .button.cancel')

    takeCancelButton.addEventListener('click', close)

    function open(){

        modalWrapper.classList.add('active')

    }
    function close(){
        modalWrapper.classList.remove('active')

    }

    return{
        open,
        close
    }
}