document.addEventListener('DOMContentLoaded', function () {
    const eventosLista = document.getElementById('eventos-lista');
    const linkAdicionarEvento = document.getElementById('link-adicionar-evento');
    const linkEntrar = document.getElementById('link-entrar');
    const linkRegistrar = document.getElementById('link-registrar');
    const saudacaoUsuario = document.getElementById('saudacao-usuario');
    const nomeUsuarioSpan = document.getElementById('nome-usuario');
    const linkSair = document.getElementById('link-sair');

    // Verifica se há um usuário logado no localStorage
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (usuarioLogado) {
        // Exibe elementos do usuário logado
        linkAdicionarEvento.style.display = 'inline-block';
        saudacaoUsuario.style.display = 'inline-block';
        linkSair.style.display = 'inline-block';
        nomeUsuarioSpan.textContent = usuarioLogado.nome;

        // Oculta os links de login e registro
        linkEntrar.style.display = 'none';
        linkRegistrar.style.display = 'none';
    } else {
        // Exibe os links de login e registro
        linkEntrar.style.display = 'inline-block';
        linkRegistrar.style.display = 'inline-block';

        // Oculta elementos do usuário logado
        linkAdicionarEvento.style.display = 'none';
        saudacaoUsuario.style.display = 'none';
        linkSair.style.display = 'none';
    }

    // Evento de logout
    linkSair.addEventListener('click', function (event) {
        event.preventDefault(); // Evita que a página seja recarregada
        localStorage.removeItem('usuarioLogado');
        window.location.reload();
    });

    // Carrega os eventos do backend
    function carregarEventos() {
        fetch('http://127.0.0.1:5577/eventos')
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    exibirEventos(data);
                } else {
                    eventosLista.innerHTML = '<p>Nenhum evento disponível no momento.</p>';
                }
            })
            .catch(error => {
                console.error('Erro ao carregar eventos:', error);
                eventosLista.innerHTML = '<p>Erro ao carregar eventos. Tente novamente mais tarde.</p>';
            });
    }

    // Exibe os eventos lado a lado corretamente
    function exibirEventos(eventos) {
        eventosLista.innerHTML = ''; // Limpa o conteúdo anterior

        eventos.forEach(evento => {
            const eventoDiv = document.createElement('div');
            eventoDiv.classList.add('evento'); // Aplica a classe CSS

            // Imagem do evento
            const imagem = document.createElement('img');
            imagem.src = evento.imagem;
            imagem.alt = evento.nome;
            imagem.style.width = '100%';
            imagem.style.borderRadius = '8px';
            eventoDiv.appendChild(imagem);

            // Nome do evento
            const nome = document.createElement('h3');
            nome.textContent = evento.nome;
            eventoDiv.appendChild(nome);

            // Data do evento
            const data = document.createElement('p');
            data.textContent = `Data: ${new Date(evento.data).toLocaleDateString('pt-BR')}`;
            eventoDiv.appendChild(data);

            // Descrição do evento
            const descricao = document.createElement('p');
            descricao.textContent = evento.descricao;
            eventoDiv.appendChild(descricao);

            // Adiciona ao container principal
            eventosLista.appendChild(eventoDiv);
        });
    }

    // Carrega os eventos quando a página for carregada
    carregarEventos();
});