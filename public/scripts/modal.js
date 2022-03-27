export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper');

    function open(){

        modalWrapper.classList.add('active')

    }
    function close(){
        document.querySelector('.modal-wrapper').classList.remove('active')

    }

    return{
        open,
        close
    }
}