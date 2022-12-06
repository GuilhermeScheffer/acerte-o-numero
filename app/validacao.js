function gameOver() {
    document.body.innerHTML = `
    <h2>GAME OVER</h2>
    <h3>Pressione o botão para jogar novamente.</h3>

    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`
    document.body.style.backgroundColor = "black";
}

function verificaSeChutePossuiValorValido(chute) {
    const numero = +chute //o + transforma em number

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido</div>`
        return // com o return aqui, a função nao vai mais ser invocada
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Número precisar estar entre ${menorValor} e ${maiorValor}</div>`
    }



    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload() // Atualiza a página caso seja clicado
    }
})