const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        
        //Verificar se existe personagem selecionado
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        alterarImagemPersonagemSelecioando(personagem);

        alterarNomePersonagemSelecionado(personagem);

        alterarDescricaoPersonagem(personagem);

    })
});

function alterarDescricaoPersonagem(personagem) {

    const descricaoPersonagem = document.getElementById("descricao-personagem");
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {

    const nomePersonagem = document.getElementById("nome-personagem");
    console.log(nomePersonagem);
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecioando(personagem) {

    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;

    imagemPersonagemGrande.src = `../src/img/${idPersonagem}_grande.png`;
}

function removerSelecaoDoPersonagem() {

    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
