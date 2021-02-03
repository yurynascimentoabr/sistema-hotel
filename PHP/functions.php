<?php
//Conexão com o banco

session_start();

function get_connect(){
	$con = mysqli_connect('localhost', 'root', '', 'mydb');
	return $con;
}

//Login do cliente utilizando a proteção contra ataques XSS e SQL Injector.

function login_cliente(){
	$_SESSION['email_cli'] = $_POST['email'];
	$_SESSION['senha_cli'] = $_POST['senha'];
	$con = get_connect();
	$con -> set_charset('UTF-8');
	$select = $con -> prepare("SELECT * from clientes WHERE cli_email = ? AND cli_senha = ?");
	$select -> bind_param('ss', $_SESSION['email_cli'], $_SESSION['senha_cli']);
	$select -> execute();
	$a = $select -> get_result();
	$b = $a -> fetch_all(MYSQLI_ASSOC);
	$id_cliente = $b[0]['cli_cpf'];
	$_SESSION['id_cliente'] = $id_cliente;
	//return var_dump($b);
	if(count($b) != 0){
		return 1;
	}else{
		return 0;
	}
}

function login_adm(){
	$_SESSION['login_adm'] = $_POST['login'];
	$_SESSION['senha_adm'] = $_POST['senha'];
	$con = get_connect();
	$con -> set_charset('UTF-8');
	$select = $con -> prepare("SELECT * from admin WHERE adm_login = ? AND adm_senha = ?");
	$select -> bind_param('ss', $_SESSION['login_adm'], $_SESSION['senha_adm']);
	$select -> execute();
	$a = $select -> get_result();
	$b = $a -> fetch_all(MYSQLI_ASSOC);
	//return var_dump($b);
	//return count(var_dump($b));
	if($b != "" || $b != null){
		return 1;
	}else{
		return 0;
	}
}

//Cadastro do cliente utilizando a proteção contra ataques XSS e SQL Injector.

function cadastro_cliente(){
	$Nome = htmlspecialchars($_POST['Nome']);
	$Email = htmlspecialchars($_POST['Email']);
	$Telefone = htmlspecialchars($_POST['Telefone']);
	$Endereço = htmlspecialchars($_POST['Endereço']);
	$Número = htmlspecialchars($_POST['Número']);
	$CPF = htmlspecialchars($_POST['CPF']);
	$RG = htmlspecialchars($_POST['RG']);
	$Data_Nasc = htmlspecialchars($_POST['Data_Nasc']);
	$Senha = htmlspecialchars($_POST['Senha']);
	$con = get_connect();
	$insert = $con -> prepare("INSERT INTO clientes (cli_cpf, cli_nome, cli_rg, cli_data_nasc, cli_endereco, cli_num_casa, cli_tel, cli_email, cli_senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
	$insert -> bind_param('isissiiss', $CPF, $Nome, $RG, $Data_Nasc, $Endereço, $Número, $Telefone, $Email, $Senha);
	$insert -> execute();
	return $insert->error;
}

// Selecionar o número do quarto. LOGIN CLIENTE.

function select_quarto(){
	$id = $_POST['id'];
	//return $id;
	$con = get_connect();
	$select = $con -> prepare("SELECT * FROM quartos WHERE qua_num = ?");
	$select -> bind_param('i', $id);
	$select -> execute();
	$resultado = $select -> get_result();
	$a = $resultado -> fetch_all(MYSQLI_ASSOC);
	$b = $a[0]['qua_num'];
	$_SESSION['qua_num'] = $b;
}

//Reservar quarto. LOGIN CLIENTE.

function reservar(){
	$id_cliente = $_SESSION['id_cliente'];
	$id_quarto = $_SESSION['qua_num'];
	unset($_SESSION['qua_num']);
	$inicio = $_POST['date_inicio'];
	$fim = $_POST['date_fim'];
	$con = get_connect();
	$insert = $con -> prepare("INSERT INTO reservas (Res_data_inicio, Res_data_fim, clientes_cli_cpf, quartos_qua_num) VALUES (?, ?, ?, ?)");
	$insert -> bind_param('ssii', $inicio, $fim, $id_cliente, $id_quarto);
	if(isset($_SESSION['id_cliente']) && isset($inicio) && $inicio != null && isset($fim) && $fim != null && validar_data($inicio, $fim) == true){
		$insert -> execute();
		return 1;
	}else{
		return 0;
	}
}

function validar_data($data_i, $data_f){
	$data_a = date_create(date("Y/m/d"));
	if(date_diff($data_a, date_create($data_i))->format("%R%a") < 0){
		return false;
	}else  if(date_diff($data_a, date_create($data_f))->format("%R%a") < 0){
		return false;
	}else  if(date_diff(date_create($data_i), date_create($data_f))->format("%R%a") < 0){
		return false;
	}else{
		return true;
	}
}

//Função para selecionar as tabelas que o adm queira editar.

function select_tabela(){
	$tabela = $_POST['tabela'];
	$con = get_connect();
	$con -> set_charset('utf8');
	$select = $con -> query("SELECT * FROM  ". $tabela);
	//$select -> execute();
	$result = $select -> fetch_all(MYSQLI_ASSOC);
	return $result;
}

function deletar(){
	$id = $_POST['id'];
	$tabela = $_POST['tabela'];
	$idtabela = $_POST['idtabela'];
	$con = get_connect();
	$con -> set_charset('utf8');
	$select = $con -> query("DELETE FROM  ". $tabela ." WHERE ". $idtabela ." = ". $id);
	//$select -> execute();
	echo $con -> error;
}

//Pegando as variáveis com a ação desejada via método POST que vem do JavaScript.

if(isset($_POST['login_cli'])){
	echo json_encode(login_cliente());
}else if(isset($_POST['login_adm'])){
	echo json_encode(login_adm());
}else if(isset($_POST['cadastro'])){
	cadastro_cliente();
}else if(isset($_POST['select_quarto'])){
	echo json_encode(select_quarto());
}else if(isset($_POST['reservar'])){
	echo json_encode(reservar());
}else if(isset($_POST['select_tabela'])){
	echo json_encode(select_tabela());
}else if(isset($_POST['deletar'])){
	deletar();
}else if($_POST['Sair']=='Sair'){
	unset($_SESSION);
	session_destroy();
}else if($_POST['Sair_adm']=='Sair_adm'){
	unset($_SESSION);
	session_destroy();
}

?>