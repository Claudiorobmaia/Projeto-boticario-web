
<script>
// Adiciona um evento de clique ao botão para abrir uma nova janela
document.getElementById('buyButton-1').addEventListener('click', function() {
    window.open('https://www.exemplo.com', '_blank');  Substitua pela URL desejada
});

// Função para clicar programaticamente no botão
function clickButton() {
    document.getElementById('buyButton-1').click();
}

// Exemplo de como chamar a função para clicar no botão
clickButton();
</script>