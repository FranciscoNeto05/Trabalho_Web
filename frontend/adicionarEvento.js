// adicionarEvento.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-adicionar-evento');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Coleta os dados do formulário
        const nomeEvento = document.getElementById('nome-evento').value;
        const dataEvento = document.getElementById('data').value;
        const descricaoEvento = document.getElementById('descricao').value;
        const imagemEvento = document.getElementById('imagem').value;

        // Cria o objeto com os dados do evento
        const evento = {
            nome: nomeEvento,
            data: dataEvento,
            descricao: descricaoEvento,
            imagem: imagemEvento
        };

        // Envia os dados para o backend
        fetch('http://127.0.0.1:5577/eventos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(evento)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Sucesso:', data);
            alert('Evento adicionado com sucesso!');
            form.reset(); // Limpa o formulário após o envio
        })
        .catch((error) => {
            console.error('Erro:', error);
            alert('Erro ao adicionar evento!');
        });
    });
});