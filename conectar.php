<?php

$host = 'localhost';
$usuario = 'root';
$senha = '';
$banco = 'vhquiz_prod';

$conexao = new mysqli($host, $usuario, $senha, $banco);

if ($conexao->connect_errno) {
    echo "Falha na conexão com o banco de dados";
} else {
    echo "Conexão bem sucedida!";
}

?>