<?php
$host = 'localhost';
$usuario = 'root';
$senha = '';
$banco = 'vhquiz_prod';

$conexao = new mysqli($host, $usuario, $senha, $banco);

if ($conexao->connect_errno) {
    die("Falha na conexão com o banco de dados: " . $conexao->connect_error);
}
?>
