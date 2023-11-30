window.onload = function() {
    exibirDados();
};

function exibirDados() {
    const listaDados = document.getElementById('lista-dados');

    // Limpar a lista antes de exibir os dados
    while (listaDados.firstChild) {
        listaDados.removeChild(listaDados.firstChild);
    }

    // Recuperando os dados do localStorage
    const nome = localStorage.getItem('nome');
    const email = localStorage.getItem('email');
    const sexo = localStorage.getItem('sexo');
    const assunto = localStorage.getItem('assunto');
    const mensagem = localStorage.getItem('mensagem');
    const dataEnvio = localStorage.getItem('dataEnvio');

    // Exibindo os dados na página
    const dados = {
        'Nome': nome,
        'E-mail': email,
        'Sexo': sexo,
        'Assunto': assunto,
        'Mensagem': mensagem,
        'Data de Envio': dataEnvio
    };
    for (const chave in dados) {
        if (dados[chave]) {
            const listItem = document.createElement('li');
            listItem.textContent = `${chave}: ${dados[chave]}`;
            listaDados.appendChild(listItem);
        }
    }
}

function excluirDado(chave) {
    localStorage.removeItem(chave);

    // Atualizar a lista
    exibirDados();
}

function excluirTodosDados() {
    localStorage.removeItem('nome');
    localStorage.removeItem('email');
    localStorage.removeItem('sexo');
    localStorage.removeItem('assunto');
    localStorage.removeItem('mensagem');
    localStorage.removeItem('dataEnvio');

    // Limpar a lista e atualizar
    const listaDados = document.getElementById('lista-dados');
    while (listaDados.firstChild) {
        listaDados.removeChild(listaDados.firstChild);
    }

    exibirDados();
}

function close() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('sexo').value = '';
    document.getElementById('assunto').value = '';
    document.getElementById('mensagem').value = '';

    // Limpar a lista e atualizar
    const listaDados = document.getElementById('lista-dados');
    while (listaDados.firstChild) {
        listaDados.removeChild(listaDados.firstChild);
    }

    exibirDados();
}
// Função para pesquisar dados
function pesquisarDados() {
    const termoPesquisa = document.getElementById('pesquisa').value.toLowerCase();
    const listaDados = document.getElementById('lista-dados');

    // Filtrar dados com base no termo de pesquisa
    const itensFiltrados = Array.from(listaDados.children).filter(item => {
        return item.textContent.toLowerCase().includes(termoPesquisa);
    });

    // Limpar a lista
    listaDados.innerHTML = '';

    // Adicionar os itens filtrados de volta à lista
    itensFiltrados.forEach(item => {
        listaDados.appendChild(item);
    });
}// Função para pesquisar dados
        function pesquisarDados() {
            const termoPesquisa = document.getElementById('pesquisa').value.toLowerCase();
            const listaDados = document.getElementById('lista-dados');

            // Filtrar dados com base no termo de pesquisa
            const itensFiltrados = Array.from(listaDados.children).filter(item => {
                return item.textContent.toLowerCase().includes(termoPesquisa);
            });

            // Limpar a lista
            listaDados.innerHTML = '';

            // Adicionar os itens filtrados de volta à lista
            itensFiltrados.forEach(item => {
                listaDados.appendChild(item);
            });
        }
