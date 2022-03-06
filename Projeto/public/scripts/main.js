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
        button.addEventListener("click", handleClick, {

        })
    })
    //Abrir modal
    //delete clicado abre a modal
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false), {

    })

})

function handleClick(event, check = true) {
    modalTitle.innerHTML = check ? "Marcar como lido" : "Excluir essa pergunta";
    modalDescription.innerHTML = check ? "Tem certeza que deseja marcar essa pergunta ?" :
        "Tem certeza que deseja excluir essa pergunta ?"
    modal.open()
}