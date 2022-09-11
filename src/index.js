document.addEventListener("DOMContentLoaded", () => {
  //grab all the necessary DOM elements

  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  const newTaskUl = document.getElementById("tasks");

  newTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newTaskDescription = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;

    document.getElementById("tasks").appendChild(task);
    event.target.reset();
  });
});
