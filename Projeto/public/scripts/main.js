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