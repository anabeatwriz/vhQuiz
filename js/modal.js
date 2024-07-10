document.getElementById('sugestaoForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(this);


    fetch('sugestoes.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data.includes("modal.style.display = \"block\"")) {
            const modal = document.getElementById("confirmationModal");
            modal.style.display = "block";


            const span = document.getElementsByClassName("close")[0];
            span.onclick = function() {
                modal.style.display = "none";
            }

           
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

            
            document.getElementById('sugestaoForm').reset();
        } else {
            alert('Erro ao enviar sugestão');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar sugestão');
    });
});
