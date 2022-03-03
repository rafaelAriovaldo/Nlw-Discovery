import Modal from './modal.js'

const modal = Modal();
//pegar todos os botoes da classe check
const checkButtons = document.querySelectorAll(".actions a.check")
    //Marcar como lido quando clicado
checkButtons.forEach(button => {
        //adicionar evento
        button.addEventListener("click", event => {
            modal.open()
        })
    })
    //Abrir modal
    //delete clicado abre a modal
const deleteButton = document.querySelectorAll(".actions a.delete")
deleteButton.forEach(button => {
    button.addEventListener("click", event => {
        modal.open()
    })

})