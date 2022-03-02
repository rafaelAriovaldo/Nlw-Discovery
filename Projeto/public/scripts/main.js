import modal from './modal.js'

const modal = modal();
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