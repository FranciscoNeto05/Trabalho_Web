// Captura o formulário de registro
const formRegistrar = document.getElementById('form-registrar');

// Adiciona um listener para o evento de submit
formRegistrar.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Cria o objeto com os dados do usuário
    const usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    // Faz a requisição ao servidor
    fetch('http://127.0.0.1:5577/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario) // Envia os dados no corpo da requisição
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao cadastrar usuário');
        }
        return response.json(); // Converte a resposta para JSON
    })
    .then(data => {
        console.log('Usuário cadastrado:', data);
        alert('Cadastro realizado com sucesso!');
        // Redireciona para a página de login após o cadastro
        window.location.href = 'entrar.html';
    })
    .catch(error => {
        console.error('Erro:', error);
        console.log("Está ocorrendo o erro aqui...")
        alert(error.message); // Exibe o erro para o usuário
    });
});