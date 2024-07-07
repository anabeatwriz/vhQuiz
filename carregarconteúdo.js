function loadContent(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching the content:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    loadContent('cabeçalho', 'includes/cabeçalho.html');
    loadContent('rodape', 'includes/rodape.html');
});
