function loadContent(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Conexão indisponível');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    loadContent('cabeçalho', 'includes/cabeçalho.html');
    loadContent('rodape', 'includes/rodape.html');
});
