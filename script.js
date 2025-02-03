// Função para gerar uma cor aleatória em formato hexadecimal
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Função para piscar a tela
function piscarTela() {
    const body = document.body;
    let intervalId;

    // Altera a cor de fundo a cada 100ms
    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomColor();
    }, 100);

    // Para o efeito após 2 segundos
    setTimeout(() => {
        clearInterval(intervalId);
        body.style.backgroundColor = '#f0f0f0'; // Volta ao fundo original
    }, 2000);
}

// Adiciona o evento de clique ao botão
document.getElementById('piscarBtn').addEventListener('click', piscarTela);
