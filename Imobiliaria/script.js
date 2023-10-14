// Selecione todos os botões "Comprar" com a classe "buy-button"
const buyButtons = document.querySelectorAll(".buy-button");

// Adicione um ouvinte de evento de clique a cada botão
buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Exibir uma mensagem de exemplo (você pode personalizá-la)
        alert("Você clicou em Comprar!");
    });
});
