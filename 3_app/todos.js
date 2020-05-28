let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let todos = [
	'Fazer café',
	'Estudar JavaScript',
	'Acessar comunidade da Rocketseat'
]

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

	todos.push(todoText);
	inputElement.value = '';
	renderTodos();
}
buttonElement.onclick = addTodo;

function deleteTodo(pos) {
	//metodo que remove itens de um array. Parâmetros (A partir dessa posição, Remova essa quantidade de itens)
	todos.splice(pos, 1);
	renderTodos();
}