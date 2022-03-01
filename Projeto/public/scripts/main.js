import { modal } from './modal'

const modal = modal();
//pegar todos os botoes da classe check
const checkButtons = document.querySelectorAll(".actions a.check")
    //Marcar como lido quando clicado

//Abrir modal
modal.open()