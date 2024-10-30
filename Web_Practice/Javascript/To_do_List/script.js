const inputValue = document.querySelector('.description');
const btn = document.querySelector('#add');

btn.addEventListener('click', () => {
  if (inputValue.value.trim()) {
    buildTask(inputValue.value.trim());
    inputValue.value = '';
  } else {
    alert("Please enter a task.");
  }
});

function buildTask(task) {
  const taskDiv = document.createElement('div');
  taskDiv.className = 'task-container';
  const input = document.createElement('input');
  input.className = 'to-do';
  input.type = 'Text';
  input.value = task;
  input.readOnly = true;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'del';

  deleteBtn.addEventListener('click', () => {
    taskDiv.remove();
  });

  taskDiv.appendChild(input);
  taskDiv.appendChild(deleteBtn);

  const taskContainer = document.querySelector('.show-tasks');
  taskContainer.appendChild(taskDiv);
}