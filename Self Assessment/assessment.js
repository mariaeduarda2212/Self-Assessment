var currentPopup = null; // Variável global para armazenar o popup atual

function openPopup(texto) {
    // Fechar o popup atual se existir
    if (currentPopup) {
        document.body.removeChild(currentPopup);
        currentPopup = null;
    }

    // Criar elemento de popup
    var popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = texto;

    // Adicionar popup ao corpo do documento
    document.body.appendChild(popup);

    // Atribuir o popup atual à variável global
    currentPopup = popup;

    // Fechar popup ao clicar fora dele
    popup.onclick = function() {
        document.body.removeChild(popup);
        currentPopup = null; // Limpar a variável global ao fechar o popup
    };
}