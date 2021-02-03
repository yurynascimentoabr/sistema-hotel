
//Login para clientes.
$("#Login_cli").on('click', function(event){
	//Impedir a atualização automática.
		event.preventDefault();
		var email = $('#email').val();
		var senha = $('#senha').val();
		$.ajax({
			url: 'PHP/functions.php',
			data: {'email': email, 'senha' : senha, 'login_cli' : 'login_cli'},
			method: 'POST',
			datatype: 'json',
			success: function(dados){
				if(dados == 1){
					window.location.href="cliente.html";
				}else{
					alert('ERROR');
				}
			}
		});
});

//Login para o adm.
$("#Login_adm").on('click', function(event){
	//Impedir a atualização automática.
		event.preventDefault();
		var login = $('#login').val();
		var senha = $('#senha_adm').val();
		$.ajax({
			url: 'PHP/functions.php',
			data: {login: login, senha: senha, login_adm : 'login_adm'},
			method: 'POST',
			datatype: 'json',
			success: function(dados){
			if(dados == 1){
				window.location.href="teladm.html";
			}else{
				alert('ERROR');
			}
		}
	});
});


// Cadastro de clientes.
$("#Cadastro").on('click', function(event){
	//Impedir a atualização automática.
		event.preventDefault();
		var Nome = $('#nome').val();
		var Email = $('#email').val();
		var Telefone = $('#tel').val();
		var Endereço = $('#endereço').val();
		var Número = $('#numero').val();
		var CPF = $('#cpf').val();
		var RG = $('#rg').val();
		var Data_Nasc = $('#data_nasc').val();
		var Senha = $('#senha').val();
		$.ajax({
			url: 'PHP/functions.php',
			data: {Nome: Nome, Email:Email, Telefone: Telefone, Endereço: Endereço, Número: Número, CPF: CPF, RG: RG, Data_Nasc: Data_Nasc, Senha: Senha, 'cadastro' : 'cadastro'},
			method: 'POST',
			datatype: 'json',
			success: function(cadastro){
				window.location.href = "cliente.html";
			}
		});
});

//Select do quarto, para preparação do código da reserva; LOGIN CLIENTE!
$('.quarto').on('click', function(){
	//Impedir a atualização automática.
	event.preventDefault();
	var id_quarto = $(this).attr('value');  
	$.ajax({
		url: 'PHP/functions.php',
		method: 'POST',
		data: {id : id_quarto, 'select_quarto': 'select_quarto'},
		success: function(dados){

		}
	});
});

//Reservar quartos; LOGIN CLIENTE!
$("#Reservar").on('click', function(event){
	//Impedir a atualização automática.
	event.preventDefault();
	var inicio = $("#inicio").val();
	var fim = $("#fim").val();
	$.ajax({
		url: "PHP/functions.php",
		data: {date_inicio: inicio, date_fim: fim, 'reservar': 'reservar'},
		datatype: "json",
		method: "POST",
		success: function(dados){
			if(dados == 1){
				//window.location.href="cliente.html";
			}else{
				alert('Houve um erro, por favor, verifique se você esta logado, ou colocou os dados corretamente.');
				//window.location.href="cliente.html";
			}
		}
	});
});

//Logout cliente.
$('#Sair').on('click', function(event){
	//Impedir a atualização automática.
	event.preventDefault();
	$.ajax({
		url: "PHP/functions.php",
		data: {'Sair': 'Sair'},
		datatype: "json",
		method: "POST",
		success: function(dados){
			window.location.href="index.html";
		}
	});
});

//Logout adm.
$('#Sair_adm').on('click', function(event){
	//Impedir a atualização automática.
	event.preventDefault();
	$.ajax({
		url: "PHP/functions.php",
		data: {'Sair_adm': 'Sair_adm'},
		datatype: "json",
		method: "POST",
		success: function(dados){
			window.location.href="index.html";
		}
	});
});

//Passar os dados para mostrar a tebela com o select que tem no js.

$('.edit_adm').on('click', function(){
	//Impedir a atualização automática.
	event.preventDefault();
	//Nome da tabela que contém no value dos botôes de selecionar a tabela.
	var nome_tabela = $(this).attr('value'); 
	//Ajax para selecionar a tabela. 
	$.ajax({
		url: 'PHP/functions.php',
		method: 'POST',
		data: {tabela : nome_tabela, 'select_tabela': 'select_tabela'},
		datatype: 'json',
		success: function(vetor1){
			var vetor = JSON.parse(vetor1);
			   //CLIENTES!!!!!!
			if(nome_tabela == 'clientes'){
				$("#corpo").html("");
				$('#corpo').append("<tr><td><center>Nome</center></td><td><center>CPF</center></td><td><center>RG</center></td><td><center>Endereço</center></td><td><center>Nº Casa</center></td>"
				+"<td><center>Telefone</center></td><td><center>Email</center></td></tr>");
				for(var a = 0; a < vetor.length; a++){
					$('#corpo').append("<tr><td><center>" + vetor[a].cli_nome + "</center></td><td><center>" + vetor[a].cli_cpf + "</center></td><td><center>" + vetor[a].cli_rg +
					"</center></td><td><center>" + vetor[a].cli_endereco + "</center></td><td><center>" + vetor[a].cli_num_casa + "</center></td><td><center>" + vetor[a].cli_tel + "</center></td><td><center>"+ 
					vetor[a].cli_email +"</center></td><td><input type='submit' id="+vetor[a].cli_cpf+" class='apagar btn btn-secondary' idtabela='cli_cpf' tabela= 'clientes' value='Apagar'></td></tr>");
				}
				//FUNCIONARIOS!!!!
			 }else if(nome_tabela == 'funcionarios'){
				$("#corpo").html("");
			 	$('#corpo').append("<tr><td><center>Nome</center></td><td><center>CPF</center></td><td><center>RG</center></td><td><center>Endereço</center></td><td><center>Nº Casa</center></td>"
				 +"<td><center>Telefone</center></td><td><center>Função</center></td><td><center>Data de Nascimento</center></td></tr>");
				for(var a = 0; a < vetor.length; a++){
					$('#corpo').append("<tr><td><center>" + vetor[a].fun_nome + "</center></td><td><center>" + vetor[a].fun_cpf + "</center></td><td><center>" + vetor[a].fun_rg +
					"</center></td><td><center>" + vetor[a].fun_endereco + "</center></td><td><center>" + vetor[a].fun_num_casa + "</center></td><td><center>" + vetor[a].fun_tel + "</center></td><td><center>"+ 
					vetor[a].fun_funcao +"</center></td><td><center>"+ vetor[a].fun_data_nasc +"</center></td><td><input type='submit' class='apagar btn btn-secondary' idtabela='fun_cpf' tabela= 'funcionarios' id="+vetor[a].fun_cpf
					+" value='Apagar'></td></tr>");
				}
				//QUARTOS!!!!!
			 }else if(nome_tabela == 'quartos'){
				$("#corpo").html("");
			 	$('#corpo').append("<tr><td><center>ID</center></td><td><center>Descrição</center></td><td><center>Estado</center></td><td><center>Preço</center></td><td><center>Andar</center></td></tr>");
				for(var a = 0; a < vetor.length; a++){
					$('#corpo').append("<tr><td><center>" + vetor[a].qua_num + "</center></td><td><center>" + vetor[a].qua_descricao + "</center></td><td><center>" + vetor[a].qua_estado +
					"</center></td><td><center>" + vetor[a].qua_preco_diaria + "</center></td><td><center>" + vetor[a].qua_andar + "</center></td><td><input type='submit' id="+ vetor[a].qua_num
					 +" class='apagar btn btn-secondary' idtabela='qua_num' tabela= 'quartos' value='Apagar'></td></tr>");
				}
			    //RESERVAS!!!!!
			 }else if(nome_tabela == 'reservas'){
				$("#corpo").html("");
			 	$('#corpo').append("<tr><td><center>ID</center></td><td><center>Início</center></td><td><center>Fim</center></td><td><center>ID_Cliente</center></td><td><center>ID_Quarto</center></td></tr>");
				for(var a = 0; a < vetor.length; a++){
					$('#corpo').append("<tr><td><center>" + vetor[a].idReservas + "</center></td><td><center>" + vetor[a].Res_data_inicio + "</center></td><td><center>" + vetor[a].Res_data_fim +
					"</center></td><td><center>" + vetor[a].clientes_cli_cpf + "</center></td><td><center>" + vetor[a].quartos_qua_num + "</center></td>"+
					"<td><input type='submit' id="+ vetor[a].idReservas +" idtabela='idReservas' tabela= 'reservas' class='apagar btn btn-secondary' value='Apagar'></td></tr>");
				}
				//SERVIÇOS!!!!
			 }else if(nome_tabela == 'serviços'){
				$("#corpo").html("");
				$('#corpo').append("<tr><td><center>ID</center></td><td><center>Descrição</center></td><td><center>Valor</center></td></tr>");
				for(var a = 0; a < vetor.length; a++){
					$('#corpo').append("<tr><td><center>" + vetor[a].Ser_id + "</center></td><td><center>" + vetor[a].Ser_descrição + "</center></td><td><center>" + vetor[a].Ser_valor + "<td><input type='submit' id="+ 
					vetor[a].Ser_id +" idtabela='Ser_id' tabela= 'serviços' class='apagar btn btn-secondary' value='Apagar'></td></tr>");
				}
			 }
		 }
	});
});

//Ação de apagar dos botões que eu coloquei dentro das tabelas que aparece na tabela do adm.
$('body').on('click','.apagar', function(event){
	deletar($(this));
	mostrar_tabela($(this));
});

//Função para fazer o DELETE!!!
function deletar(apagar){
	//Impedir a atualização automática.
	event.preventDefault();
	//Id da tupla a se apagar.
	var id = apagar.attr('id');
	//Nome da tabela que está contido no input.
	var tabela = apagar.attr('tabela');
	//Variável que contém o nome propriamente dito da chave estrangeira da tabela especificada acima.
	var idtabela = apagar.attr('idtabela');
		//Ajax para fazer o DELETE.
		$.ajax({
			url: "PHP/functions.php",
			data: {idtabela: idtabela, id: id, tabela: tabela, 'deletar': 'deletar'},
			datatype: "json",
			method: "POST",
			success: function(dados){
			
			}
	});
}

//Função para mostrar novamente a tabela!!!
function mostrar_tabela(show){
	//Impedir a atualização automática.
	event.preventDefault();
	//Nome da tabela que contém no value dos botôes de selecionar a tabela.
	var nome_tabela = show.attr('tabela'); 
	//Ajax para selecionar a tabela.
	$.ajax({
		url: "PHP/functions.php",
		data: {tabela: nome_tabela, 'select_tabela': 'select_tabela'},
		datatype: "json",
		method: "POST",
		success: function(vetor1){
			var vetor = JSON.parse(vetor1);
			   //CLIENTES!!!!!!
			if(nome_tabela == 'clientes'){
				$("#corpo").html("");
				$('#corpo').append("<tr><td><center>Nome</center></td><td><center>CPF</center></td><td><center>RG</center></td><td><center>Endereço</center></td><td><center>Nº Casa</center></td><td><center>Telefone</center></td>"
				+"<td><center>Email</center></td></tr>");
				for(var a = 0; a < vetor.length; a++){
					$('#corpo').append("<tr><td><center>" + vetor[a].cli_nome + "</center></td><td><center>" + vetor[a].cli_cpf + "</center></td><td><center>" + vetor[a].cli_rg +
					"</center></td><td><center>" + vetor[a].cli_endereco + "</center></td><td><center>" + vetor[a].cli_num_casa + "</center></td><td><center>" + vetor[a].cli_tel + "</center></td><td><center>"+
					vetor[a].cli_email +"</center></td><td><input type='submit' id="+vetor[a].cli_cpf+" class='apagar btn btn-secondary' idtabela='cli_cpf' tabela= 'clientes' value='Apagar'></td></tr>");
				}
				//FUNCIONARIOS!!!!
			 }else if(nome_tabela == 'funcionarios'){
				$("#corpo").html("");
			 	$('#corpo').append("<tr><td><center>Nome</center></td><td><center>CPF</center></td><td><center>RG</center></td><td><center>Endereço</center></td><td><center>Nº Casa</center></td><td><center>Telefone</center></td>"
				 +"<td><center>Função</center></td><td><center>Data de Nascimento</center></td></tr>");
				for(var a = 0; a < vetor.length; a++){
					$('#corpo').append("<tr><td><center>" + vetor[a].fun_nome + "</center></td><td><center>" + vetor[a].fun_cpf + "</center></td><td><center>" + vetor[a].fun_rg +
					"</center></td><td><center>" + vetor[a].fun_endereco + "</center></td><td><center>" + vetor[a].fun_num_casa + "</center></td><td><center>" + vetor[a].fun_tel + "</center></td><td><center>"+ 
					vetor[a].fun_funcao +"</center></td><td><center>"+ vetor[a].fun_data_nasc +"</center></td><td><input type='submit' class='apagar btn btn-secondary' idtabela='fun_cpf' tabela= 'funcionarios' id="+vetor[a].fun_cpf+" value='Apagar'>"
					+"</td></tr>");
				}
				//QUARTOS!!!!!
			 }else if(nome_tabela == 'quartos'){
				$("#corpo").html("");
			 	$('#corpo').append("<tr><td><center>ID</center></td><td><center>Descrição</center></td><td><center>Estado</center></td><td><center>Preço</center></td><td><center>Andar</center></td></tr>");
				for(var a = 0; a < vetor.length; a++){
					$('#corpo').append("<tr><td><center>" + vetor[a].qua_num + "</center></td><td><center>" + vetor[a].qua_descricao + "</center></td><td><center>" + vetor[a].qua_estado +
					"</center></td><td><center>" + vetor[a].qua_preco_diaria + "</center></td><td><center>" + vetor[a].qua_andar + "</center></td><td><input type='submit' id="+ vetor[a].qua_num +" class='apagar btn btn-secondary' "+
					"idtabela='qua_num' tabela= 'quartos' value='Apagar'></td></tr>");
				}
			    //RESERVAS!!!!!
			 }else if(nome_tabela == 'reservas'){
				$("#corpo").html("");
			 	$('#corpo').append("<tr><td><center>ID</center></td><td><center>Início</center></td><td><center>Fim</center></td><td><center>ID_Cliente</center></td><td><center>ID_Quarto</center></td></tr>");
				 
				for(var a = 0; a < vetor.length; a++){
					$('#corpo').append("<tr><td><center>" + vetor[a].idReservas + "</center></td><td><center>" + vetor[a].Res_data_inicio + "</center></td><td><center>" + vetor[a].Res_data_fim +
					"</center></td><td><center>" + vetor[a].cliente_cli_cpf + "</center></td><td><center>" + vetor[a].quartos_qua_num + "</center></td><td><input type='submit' id="+ vetor[a].idReservas +" idtabela='idReservas' "+
					"tabela= 'reservas' class='apagar btn btn-secondary' value='Apagar'></td></tr>");
				}
				//SERVIÇOS!!!!
			 }else if(nome_tabela == 'serviços'){
				$("#corpo").html("");
				$('#corpo').append("<tr><td><center>ID</center></td><td><center>Descrição</center></td><td><center>Valor</center></td></tr>");
				for(var a = 0; a < vetor.length; a++){
					$('#corpo').append("<tr><td><center>" + vetor[a].Ser_id + "</center></td><td><center>" + vetor[a].Ser_descrição + "</center></td><td><center>" + vetor[a].Ser_valor + "<td><input type='submit' id="+
					 vetor[a].Ser_id +" idtabela='Ser_id' tabela= 'serviços' class='apagar btn btn-secondary' value='Apagar'></td></tr>");
				}
			 }
		 }
	});
}

//Mds finalmente acabou!, EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE rs.