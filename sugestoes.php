<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vhQuiz</title>
    <link rel="stylesheet" href="css/cabeçalho.css">
    <link rel="stylesheet" href="css/rodape.css">
    <link rel="stylesheet" href="css/home-sug.css">
    <link rel="shortcut icon" href="img/favicon.png" type="image/png">
    <link rel="stylesheet" href="css/modal.css">
</head>
<body>
    <div class="conteudo">
        <?php include 'includes/cabeçalho.html'; ?>
    </div>

    <div class="container">
        <div class="sugestoes">
            <div class="sug">
                <h1>Deixe sua sugestão</h1>
                <form id="sugestaoForm" action="index.php" method="post">
                    <input type="text" id="nome" name="nome" placeholder="Qual é seu nome?" required>
                    <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required>
                    <input type="text" id="sugcliente" name="sugcliente" placeholder="Descreva sua sugestão" required>
                    <h2>Avalie o vhQuiz</h2>
                    <div class="radio-group">
                        <label><input type="radio" id="notainsatisfeito" name="nota" value="Insatisfeito"> Insatisfeito</label>
                        <label><input type="radio" id="notaindiferente" name="nota" value="Neutro"> Neutro</label>
                        <label><input type="radio" id="notasatisfeito" name="nota" value="Satisfeito"> Satisfeito</label>
                    </div>
                    <input type="submit" id="b.sug" name="bsug" value="Enviar minha sugestão">
                </form>
            </div>
            <div class="sug-av">
                <img src="img/conviteav.png" alt="Convite para avaliação">
            </div>
        </div>
    </div>

    <div class="conteudo">
        <?php include 'includes/rodape.html'; ?>
    </div>

    <div id="confirmationModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>Sua sugestão foi enviada com sucesso!</p>
        </div>
    </div>

    <script src="js/modal.js"></script>

    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        include_once('conectar.php');

        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $sugcliente = $_POST['sugcliente'];
        $nota = $_POST['nota'];

        // Prevenção contra SQL Injection
        $nome = mysqli_real_escape_string($conexao, $nome);
        $email = mysqli_real_escape_string($conexao, $email);
        $sugcliente = mysqli_real_escape_string($conexao, $sugcliente);
        $nota = mysqli_real_escape_string($conexao, $nota);

        $sql = "INSERT INTO sped_sugestoes (nome_usuario, email_usuario, sugestao_cliente, nota_cliente) VALUES ('$nome', '$email', '$sugcliente', '$nota')";
        $usuarios = mysqli_query($conexao, $sql);

        if ($usuarios) {
            echo '<script>
                document.addEventListener("DOMContentLoaded", function() {
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
                });
            </script>';
        } else {
            echo '<script>alert("Erro ao enviar sugestão");</script>';
        }
    }
    ?>
</body>
</html>
