// Seleciona todos os botões com a classe 'buyButton'
const buttons = document.querySelectorAll('#buyButton');

// Adiciona um evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener('click', function() {
        window.open('login.html', '_blank'); // Substitua pela URL desejada
    });
});

// Função para clicar programaticamente no primeiro botão
function clickButton() {
    const button = document.querySelector('buyButton'); // Seleciona o primeiro botão
    if (button) {
        button.click();
    }
}

// Exemplo de como chamar a função para clicar no botão
clickButton();
