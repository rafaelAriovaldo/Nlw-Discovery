export default function modal() {
    function open() {
        document.querySelector('.modal-wrapper').classList.add("active")
    }
    //atribuir a classe active para a modal


    function close() {
        //remover a classe active do modal.
    }
    return {
        open,
        close

    }
}