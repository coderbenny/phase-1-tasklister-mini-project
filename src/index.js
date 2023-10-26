document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("#create-task-form");
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo(e.target.newTaskDescription.value);
    form.reset();
  })

})

function addTodo(todo){
  let list = document.createElement('li')
  let btn = document.createElement('button');
  btn.addEventListener('click', removeTodo)
  btn.textContent = 'x'; 
  list.textContent = `${todo} `;
  list.appendChild(btn)
  document.querySelector('#tasks').appendChild(list);
}
  
function removeTodo(e){
  e.target.parentNode.remove();
}  

