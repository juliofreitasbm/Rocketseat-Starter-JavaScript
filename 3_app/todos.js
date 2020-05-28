let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');
/*
	Recebendo a lista do localStorage
	se esquecer o JASON.parse insere cada caractere como um elemento da lista
	JSON.parse pega os dados na forma de JSON do localStorage e transforma em array
	Quando iniciar o programa não terá nada no localStorage e daí ele não retornará um array. Dará um erro "todos is not iterable" porque dentro do for() da função renderTodos() não terá um array. Para resolver isso definiremos um valor padrão colocando no final da linha " || []" - lê-se "Ou todos recebe o JSON.parse ou recebe um vetor vazio caso a primeira opção não funcione"
*/
let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
	//Limpando a lista antes de renderizar
	listElement.innerHTML = '';

	for(todo of todos){
		//Criando Item da Lista e criando Texto que será adicionado ao item (pegando do vetor)
		let todoElement = document.createElement('li');
		let todoText = document.createTextNode(todo);

		//Adicionando botão de excluir
		let linkElement = document.createElement('a');
		let linkText = document.createTextNode('Excluir');
		linkElement.setAttribute('href', '#')
		linkElement.appendChild(linkText)

		//Fazendo o botão de exluir funcionar
		var pos = todos.indexOf(todo);
		linkElement.setAttribute('onclick','deleteTodo(' + pos + ')' )

		//Adicionando texto ao Item, adicionando botão de excluir ao Item, adicionando Item à Lista
		todoElement.appendChild(todoText);
		todoElement.appendChild(linkElement);
		listElement.appendChild(todoElement);
	}
}

renderTodos();

function addTodo() {
	let todoText = inputElement.value;

	//Controle de erro para caixa de texto vazia
	//return; cancela a function
	if(todoText.length == 0){
		window.alert('Digite um todo para adicionar!')
		return 'Nothing to add';
	}

	todos.push(todoText);
	inputElement.value = '';
	renderTodos();
	saveToStorage();
}
buttonElement.onclick = addTodo;

function deleteTodo(pos) {
	//metodo que remove itens de um array. Parâmetros (A partir dessa posição, Remova essa quantidade de itens)
	todos.splice(pos, 1);
	renderTodos();
	saveToStorage();
}

/*
	localStorage é uma variável global
	setItem seta um valor no Storage
	O primeiro parâmetro é o nome que você quiser
	O segundo parâmetro é o valor de fato
	localStorage não grava vetores nem objetos
	Só grava uma chave e um valor no formato String
	para converter o vetor em JSON vamos usar JSON.stringify(todos)
	obs: JSON é uma variável global também
	obs: o Google Chrome armazena as informações num .log dentro de: %LocalAppData%\Google\Chrome\User Data\Default\Local Storage
*/
function saveToStorage() {
	localStorage.setItem('list_todos', JSON.stringify(todos));
}
