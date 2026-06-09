// Banco de perguntas do Quiz (Verdadeiro ou Falso)
const perguntas = [
    {
        texto: "A tecnologia de drones ajuda a reduzir o uso desnecessário de agrotóxicos na plantação.",
        resposta: true,
        explicacao: "Correto! Os drones mapeiam as áreas exatas que precisam de cuidados, evitando o desperdício."
    },
    {
        texto: "O agronegócio sustentável não utiliza nenhum tipo de tecnologia ou máquinas modernas.",
        resposta: false,
        explicacao: "Incorreto! A tecnologia (como GPS e sensores) é a maior aliada da sustentabilidade para otimizar recursos."
    },
    {
        texto: "A rotação de culturas serve para manter o solo fértil e diminuir pragas naturalmente.",
        resposta: true,
        explicacao: "Perfeito! Alternar as plantas cultivadas protege os nutrientes da terra de forma natural."
    }
];

let perguntaAtualIndex = 0;

// Elementos da página
const elementoPergunta = document.getElementById("pergunta");
const elementoResultado = document.getElementById("resultado");

// Função para exibir a pergunta atual
function carregarPergunta() {
    if (perguntaAtualIndex < perguntas.length) {
        elementoPergunta.textContent = perguntas[perguntaAtualIndex].texto;
        elementoResultado.textContent = ""; // Limpa resposta anterior
    } else {
        elementoPergunta.textContent = "Parabéns! Você completou o Quiz do Agrinho Sustentável! 🌱";
        document.querySelector(".options-btn").style.display = "none"; // Esconde botões
    }
}

// Função que valida o clique do usuário
function verificarResposta(respostaUsuario) {
    const perguntaAtual = perguntas[perguntaAtualIndex];
    
    if (respostaUsuario === perguntaAtual.resposta) {
        elementoResultado.style.color = "#2d6a4f"; // Verde para acerto
        elementoResultado.textContent = `✅ ${perguntaAtual.explicacao}`;
    } else {
        elementoResultado.style.color = "#b7094c"; // Vermelho para erro
        elementoResultado.textContent = `❌ ${perguntaAtual.explicacao}`;
    }

    // Avança para a próxima pergunta após 3.5 segundos
    perguntaAtualIndex++;
    setTimeout(carregarPergunta, 3500);
}

// Inicia o quiz ao carregar a página
window.onload = carregarPergunta;