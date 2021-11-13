function addBloco() {
        
    let gradeDivEl = document.querySelector("#grade");

    let cardDivEl = document.createElement('div');
    cardDivEl.classList.add('card');
    let cardDescriptionDivEl = document.createElement('div');
    cardDescriptionDivEl.classList.add('card-description');
    cardDescriptionDivEl.innerHTML  +='<h1>Nome do filme</h1>'  
                                    + '<img src="Src/images/filmes_logo.jpg">'
                                    + '<h3>Duração: --</h3>'
                                    + '<h3>Duração: --</h3>'
                                    + '<h5>Avaliação --</h5>'
                                    + '<h3>Genero: --</h3>';

        
    let buttonDivEl = document.createElement('div');
    buttonDivEl.classList.add('button1');
    let buttonEdit = document.createElement('button');
    buttonEdit.innerText = "Editar";
    let removeButtonDivEl = document.createElement('div');
    removeButtonDivEl.classList.add('button1');
    removeButtonDivEl.addEventListener("click", removeBloco);
    let removeButton = document.createElement('button');
    removeButton.innerText = "Remover";    
        
    buttonDivEl.appendChild(buttonEdit);
    removeButtonDivEl.appendChild(removeButton);
    cardDivEl.appendChild(removeButtonDivEl);
    cardDivEl.appendChild(buttonDivEl);
    cardDivEl.appendChild(cardDescriptionDivEl);
    gradeDivEl.appendChild(cardDivEl);
    }

