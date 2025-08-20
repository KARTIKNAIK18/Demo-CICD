// Counter functionality
const count = document.getElementById('count');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

let counter = 0;

increase.addEventListener('click', () => {
    counter++;
    count.textContent = counter;
});

decrease.addEventListener('click', () => {
    counter--;
    count.textContent = counter;
});

// Color changer functionality
const colorButton = document.getElementById('colorButton');
const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ff99ff', '#99ffff'];
let currentColorIndex = 0;

colorButton.addEventListener('click', () => {
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});

// Todo list functionality
const todoInput = document.getElementById('todoInput');
const addTodo = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

addTodo.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${todoText}
            <button onclick="this.parentElement.remove()" style="background: #ff4444; color: white; border: none; padding: 5px 10px; border-radius: 4px;">Delete</button>
        `;
        todoList.appendChild(li);
        todoInput.value = '';
    }
});

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo.click();
    }
});
