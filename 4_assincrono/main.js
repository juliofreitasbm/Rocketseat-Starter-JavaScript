var xhr = new XMLHttpRequest();

//Utilizando método GET para consumir dados da API do GitHub
xhr.open('GET', 'https://api.github.com/users/juliofreitasbm')
xhr.send(null);

//Configurando o script pra esperar os dados da API
xhr.onreadystatechange = function() {
	//4 é a variável que significa que a resposta voltou
	if(xhr.readyState === 4) {
		//converter o JSON que retorna do servidor para um objeto ou vetor
		console.log(JSON.parse(xhr.responseText))
	}

}