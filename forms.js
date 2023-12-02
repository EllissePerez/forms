let todoList = [];
const sectionTag = document.querySelector('section');

document.querySelector('#todoListForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const addToTodo = document.querySelector('#addTodo').value;

    todoList.push(addToTodo);

    console.log(addToTodo);
    
    let template = todoList.map(todo =>
    `
        <li>${todo}</li>
    `).join('');

    sectionTag.innerHTML = template;

    document.querySelector('#addTodo').value = '';
});

