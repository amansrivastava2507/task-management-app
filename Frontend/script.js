document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('new-task-form');
    const taskList = document.getElementById('tasks');
  
    let tasks = [];
  
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const dueDate = document.getElementById('due-date').value;
  
      const newTask = {
        id: Date.now(),
        title,
        description,
        dueDate
      };
  
      tasks.push(newTask);
      renderTasks();
      taskForm.reset();
    });
  
    function renderTasks() {
      taskList.innerHTML = '';
      tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
          <h5>${task.title}</h5>
          <p>${task.description}</p>
          <small>Due: ${task.dueDate}</small>
          <button class="delete-task" data-id="${task.id}">Delete</button>
        `;
        taskList.appendChild(taskItem);
      });
  
      const deleteButtons = document.querySelectorAll('.delete-task');
      deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
          const taskId = parseInt(this.getAttribute('data-id'));
          tasks = tasks.filter(task => task.id !== taskId);
          renderTasks();
        });
      });
    }
  });
  