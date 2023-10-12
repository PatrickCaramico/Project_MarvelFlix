<?php 
// Conectar com o banco de dados
$servername = "localhost";
$username   = "root";
$password   = "";
$database = "flix";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Obter dados do formulario Crie sua conta
$usuario = $_POST['usuario'];
$senha = $_POST['senha'];

// Consulta SQL para inserir um novo registo no banco de dados
$sql = "INSERT INTO logins (usuario, senha) VALUES ('$usuario', '$senha')";

if ($conn->query($sql) === TRUE) {
    echo "Registro bem-sucedido!"; // Você pode redirecionar o usuario para a página de login aqui
} else {
    echo "Erro ao registrar: " . $conn->error;
}

$conn->close();
?>