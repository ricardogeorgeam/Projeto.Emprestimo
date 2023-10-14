function verificarCredito() {
    const historicoCredito = document.querySelector('input[name="historicoCredito"]:checked').value;
    const renda = parseFloat(document.querySelector('#renda').value);
    const emprego = document.querySelector('input[name="emprego"]:checked').value;
    const pontuacaoCredito = parseInt(document.querySelector('#pontuacaoCredito').value);

    const resultado = document.getElementById('resultado');

    if (historicoCredito === 'sim' && renda >= 2000 && emprego === 'sim' && pontuacaoCredito >= 700) {
        resultado.textContent = 'Parabéns! Seu crédito foi aprovado.';
    } else {
        resultado.textContent = 'Desculpe, seu crédito não foi aprovado.';
    }
}

 function verificarCredito() {
    // Inicia a função chamada verificarCredito
    const historicoCredito = document.querySelector('input[name="historicoCredito"]:checked').value;
    // Obtém o valor do input de nome "historicoCredito" que está marcado (selecionado)

    const renda = parseFloat(document.querySelector('#renda').value);
    // Obtém o valor do input com o id "renda" e converte para um número de ponto flutuante (float)

    const emprego = document.querySelector('input[name="emprego"]:checked').value;
    // Obtém o valor do input de nome "emprego" que está marcado (selecionado)

    const pontuacaoCredito = parseInt(document.querySelector('#pontuacaoCredito').value);
    // Obtém o valor do input com o id "pontuacaoCredito" e converte para um número inteiro (int)

    const resultado = document.getElementById('resultado');
    // Obtém o elemento com o id "resultado" e armazena em uma variável chamada "resultado"

    if (historicoCredito === 'sim' && renda >= 2000 && emprego === 'sim' && pontuacaoCredito >= 700) {
        // Verifica se todas as condições são verdadeiras para aprovação de crédito
        resultado.textContent = 'Parabéns! Seu crédito foi aprovado.';
        // Define o texto do elemento "resultado" como "Parabéns! Seu crédito foi aprovado."
    } else {
        resultado.textContent = 'Desculpe, seu crédito não foi aprovado.';
        // Caso alguma das condições seja falsa, define o texto do elemento "resultado" como "Desculpe, seu crédito não foi aprovado."
    }
}

