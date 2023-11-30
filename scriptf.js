function salvarDados() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const sexo = document.getElementById('sexo').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;
    const dataEnvio = new Date().toLocaleString();

    // Armazenando os dados no localStorage
    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('sexo', sexo);
    localStorage.setItem('assunto', assunto);
    localStorage.setItem('mensagem', mensagem);
    localStorage.setItem('dataEnvio', dataEnvio);

    // Redirecionamento para a outra página
    window.location.href = 'dados.html';
}

function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('sexo').value = '';
    document.getElementById('assunto').value = '';
    document.getElementById('mensagem').value = '';
}