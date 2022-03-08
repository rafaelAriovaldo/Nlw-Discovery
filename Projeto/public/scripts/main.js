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
    event.preventDefault(); //conserta o link
    const text = check ? "Marcar como lida " : "Excluir ";
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionID = event.target.dataset.id
    const form = document.querySelector(".modal form");
    form.setAttribute("action", `/room/${roomId}/${questionID}/${slug}`);
    modalTitle.innerHTML = `${text} esta pergunta ?`;

    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} 
    esta pergunta ?`;
    modalButton.innerHTML = `sim, ${text.toLocaleLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red");


    modal.open()
}