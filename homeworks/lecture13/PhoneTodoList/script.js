document.addEventListener('DOMContentLoaded', function() {
    // Add todo when Enter is pressed in the input field
    document.getElementById('new-todo').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTodo();
        }
    });

    // Mark all todos as done
    document.getElementById('mark-all-done').addEventListener('change', function() {
        const isChecked = this.checked;
        const checkboxes = document.querySelectorAll('#todo-list li input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = isChecked;
            toggleCompletion(checkbox);
        });
        updateStatus();
    });
});

function addTodo() {
    const input = document.getElementById('new-todo');
    const newTodoText = input.value.trim();
    if (newTodoText) {
        const list = document.getElementById('todo-list');
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            toggleCompletion(this);
        });

        const textSpan = document.createElement('span');
        textSpan.textContent = newTodoText;

        li.appendChild(checkbox);
        li.appendChild(textSpan);
        list.appendChild(li);
        input.value = '';
        updateStatus();
    }
}

function toggleCompletion(checkbox) {
    if (checkbox.checked) {
        checkbox.nextSibling.style.textDecoration = 'line-through';
    } else {
        checkbox.nextSibling.style.textDecoration = 'none';
    }
}

function clearCompleted() {
    const completedTodos = document.querySelectorAll('#todo-list li input[type="checkbox"]:checked');
    completedTodos.forEach(todo => {
        todo.parentElement.remove();
    });
    updateStatus();
}

function updateStatus() {
    const remainingTodos = document.querySelectorAll('#todo-list li input[type="checkbox"]:not(:checked)').length;
    const statusBar = document.querySelector('.status-bar');
    statusBar.textContent = remainingTodos + ' remaining';
}
