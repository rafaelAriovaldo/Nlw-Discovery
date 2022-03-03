export default function Modal() {
    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')
    cancelButton.addEventListener("click", close)


    function open() {
        modalWrapper.classList.add("active")
    }
    //atribuir a classe active para a modal


    function close() {
        //remover a classe active do modal.
        modalWrapper.classList.remove("active")
    }
    return {
        open,
        close

    }
}