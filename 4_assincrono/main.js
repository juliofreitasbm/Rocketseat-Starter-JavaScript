//Promisses são funções que não vão influenciar na linha do tempo do código Javascript
//São funções que vão devolver o resultado seja de sucesso ou erro só depois de um tempo e a gente não precisa se preocupar quando esse valor será retornado pois o JavaScript continuará executando normalmente
var minhaPromise = function() {
	//Promisse é uma Class
	//resolve é a função que vai ser usada dentro da promisse quando o resultado da requisição foi de sucesso
	//reject é a função que vai ser usada dentro da promisse quando o resultado da requisição não foi de sucesso
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://api.github.com/users/juliofreitasbm');
		xhr.send(null);
	
		xhr.onreadystatechange = function() {
			if(xhr.readyState === 4) {
				if(xhr.status === 200) {
					resolve(JSON.parse(xhr.responseText));
				} else
					reject('Erro na requisição');
			}
		}
	});
}

minhaPromise()
	.then(function(response) {
		console.log(response);
	})
	.catch(function(error) {
		console.warn(error)
	});
