import Modal from './modal.js'

const modal = Modal();
//pegar todos os botoes da classe check
const modalTitle = document.querySelector('.modal h2 ');
const modalDescription = document.querySelector('.modal p ');
const modalButton = document.querySelector('.modal button ');

const checkButtons = document.querySelectorAll(".actions a.check")
    //Marcar como lido quando clicado
checkButtons.forEach(button => {
        //adicionar evento
        button.addEventListener("click", event => {
            modalTitle.innerHTML = "Marcar como lida"
            modal.open()
        })
    })
    //Abrir modal
    //delete clicado abre a modal
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", event => {
        modalTitle.innerHTML = "Excluir pergunta ?"
        modal.open()
    })

})