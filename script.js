document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', () => handleAddTodo());
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    });

    function handleAddTodo() {
        const todoText = todoInput.value.trim();
        if (todoText) {
            addTodoItem(todoText);
            todoInput.value = '';
        }
    }

    function addTodoItem(text) {
        const todoItem = createTodoItem(text);
        todoList.appendChild(todoItem);
    }

    function createTodoItem(text) {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        const checkButton = createButton('check-button', toggleComplete);
        const todoTextSpan = document.createElement('span');
        todoTextSpan.classList.add('text');
        todoTextSpan.textContent = text;
        const deleteButton = createButton('delete-button', () => todoList.removeChild(todoItem), 'x');

        todoItem.appendChild(checkButton);
        todoItem.appendChild(todoTextSpan);
        todoItem.appendChild(deleteButton);

        return todoItem;
    }

    function createButton(className, onClick, textContent = '') {
        const button = document.createElement('button');
        button.classList.add(className);
        button.textContent = textContent;
        button.addEventListener('click', onClick);
        return button;
    }

    function toggleComplete() {
        this.classList.toggle('completed');
        this.parentElement.classList.toggle('completed');
    }
});