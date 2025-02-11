// Captura o formulário de login
const formEntrar = document.getElementById('form-entrar');

// Adiciona um listener para o evento de submit
formEntrar.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    // Captura os valores dos campos de email e senha
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Faz a requisição ao servidor
    fetch('http://127.0.0.1:5577/usuarios/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha: senha }) // Envia os dados no corpo da requisição
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Usuário não encontrado ou senha incorreta');
        }
        return response.json(); // Converte a resposta para JSON
    })
    .then(data => {
        console.log('Usuário encontrado:', data);

        // Salva os dados do usuário no localStorage
        localStorage.setItem('usuarioLogado', JSON.stringify({
            nome: data.nome, // Supondo que o backend retorne o nome do usuário
            email: data.email // Você pode salvar outras informações, se necessário
        }));

        alert('Login realizado com sucesso!');
        window.location.href = 'index.html'; // Redireciona para a página inicial
    })
    .catch(error => {
        console.error('Erro:', error);
        alert(error.message); // Exibe o erro para o usuário
    });
});