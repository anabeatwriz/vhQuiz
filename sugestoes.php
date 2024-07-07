<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vhQuiz</title>
    <link rel="stylesheet" href="css/cabeçalho.css">
    <link rel="stylesheet" href="css/rodape.css">
    <link rel="stylesheet" href="css/home-sug.css">
    <link rel="shortcut icon" href="img/favicon.png" type="image">
    <div class="conteudo">
    <?php
    include 'includes/cabeçalho.html';
    ?>
    </div>
</head>
<body>

<div class="container">
    <div class="sugestoes">
        <div class="sug">
            <h1>Deixe sua sugestão</h1>
            <form action="#" method="post">
                <input type="text" id="nome" placeholder="Qual é seu nome?" required>
                <input type="email" id="email" placeholder="Digite seu e-mail" required>
                <input type="text" id="sugcliente" placeholder="Descreva sua sugestão" required>
                <h2>Avalie o vhQuiz</h2>
                <div class="radio-group">
                    <label><input type="radio" id="notainsatisfeito" name="nota" value="Insatisfeito"> Insatisfeito</label>
                    <label><input type="radio" id="notaindiferente" name="nota" value="Neutro"> Neutro</label>
                    <label><input type="radio" id="notasatisfeito" name="nota" value="Satisfeito"> Satisfeito</label>
                </div>
                <input type="submit" id="b.sug" value="Enviar minha sugestão">
            </form>
        </div>
        <div class="sug-av">
            <img src="img/conviteav.png" alt="Convite para avaliação">
        </div>
    </div>
</div>
<div class="conteudo">
    <?php

    include 'includes/rodape.html';
    ?>
</div>
</body>
</html>
