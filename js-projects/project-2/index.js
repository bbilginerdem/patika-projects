const todoForm = document.querySelector("#new-task-form");
const todoInput = document.querySelector("#new-task-input");
const todoItemsList = document.querySelector("#tasks");

let todos = [];

todoForm.addEventListener("submit", function (event) {
	event.preventDefault();
	addTodo(todoInput.value);
});

function addTodo(item) {
	if (item !== "") {
		const todo = {
			id: Date.now(),
			name: item,
			completed: false,
		};

		todos.push(todo);
		addToLocalStorage(todos);

		todoInput.value = "";
	}
}

function renderTodos(todos) {
	todoItemsList.innerHTML = "";

	todos.forEach(function (item) {
		const task_el = document.createElement("div");
		task_el.classList.add("task");
		task_el.setAttribute("data-key", item.id);
		if (item.completed === true) {
			task_el.classList.add("checked");
		}

		const task_content_el = document.createElement("div");
		task_content_el.classList.add("content");

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement("input");
		task_input_el.classList.add("text");
		task_input_el.type = "text";
		task_input_el.value = item.name;

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement("div");
		task_actions_el.classList.add("actions");

		const task_delete_el = document.createElement("button");
		task_delete_el.classList.add("delete");
		task_delete_el.innerText = "Delete";

		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		todoItemsList.appendChild(task_el);
	});
}

function addToLocalStorage(todos) {
	localStorage.setItem("todos", JSON.stringify(todos));
	renderTodos(todos);
}

function getFromLocalStorage() {
	const reference = localStorage.getItem("todos");
	// if there are items in localstorage
	if (reference) {
		// converts back to array and store it in todos array
		todos = JSON.parse(reference);
		renderTodos(todos);
	}
}

// toggle the value to completed and not completed
function toggle(id) {
	todos.forEach(function (item) {
		// use == not ===, because here types are different. One is number and other is string
		if (item.id == id) {
			// toggle the value
			item.completed = !item.completed;
		}
	});

	addToLocalStorage(todos);
}

// deletes a todo from todos array, then updates localstorage and renders updated list to screen
function deleteTodo(id) {
	// filters out the <li> with the id and updates the todos array
	todos = todos.filter(function (item) {
		// use != not !==, because here types are different. One is number and other is string
		return item.id != id;
	});

	// update the localStorage
	addToLocalStorage(todos);
}

getFromLocalStorage();

// listen click events
todoItemsList.addEventListener("click", function (event) {
	// check if the event is on checkbox
	if (event.target.type === "checkbox") {
		// toggle the state
		toggle(event.target.parentElement.getAttribute("data-key"));
	}

	// check if that is a delete clicked
	if (event.target.classList.contains("delete")) {
		// get id from data-key attribute's value of parent of parent <div> where the delete class is present
		deleteTodo(
			event.target.parentElement.parentElement.getAttribute("data-key")
		);
	}
});
