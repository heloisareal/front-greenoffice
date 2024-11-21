document.getElementById('contatoForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário
    alert('Obrigada! Sua mensagem foi enviada!'); // Mostra o alerta
    this.reset(); // Limpa os campos do formulário
});