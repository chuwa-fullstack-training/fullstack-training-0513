document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('new-todo').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTodo();
        }
    });

    document.getElementById('mark-all-done').addEventListener('change', function() {
        const isChecked = this.checked;
        const checkboxes = document.querySelectorAll('#todo-list li input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = isChecked;
            checkbox.dispatchEvent(new Event('change'));
        });
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
            this.nextSibling.classList.toggle('completed', this.checked);
            updateRemainingCount();
        });

        const label = document.createElement('label');
        label.appendChild(document.createTextNode(newTodoText));
        label.classList.add('todo');

        li.appendChild(checkbox);
        li.appendChild(label);
        list.appendChild(li);

        input.value = '';
        updateRemainingCount();
    }
}

function clearCompleted() {
    const completedTodos = document.querySelectorAll('#todo-list li input[type="checkbox"]:checked');
    completedTodos.forEach(todo => {
        todo.parentElement.remove();
    });
    updateRemainingCount();
}

function updateRemainingCount() {
    const remainingTodos = document.querySelectorAll('#todo-list li input[type="checkbox"]:not(:checked)').length;
    document.getElementById('remaining-count').textContent = remainingTodos + ' remaining';
}
