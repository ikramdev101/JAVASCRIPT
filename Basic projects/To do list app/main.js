<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do App</title>
 
</head>
<body>
    <div class="container">
        <h2>To-Do List</h2>
        <input type="text" id="task" placeholder="Enter task...">
        <button onclick="ajtTask()">Add Task</button>
        <ul id="taskList"></ul>
    </div>

    <script>
        // Function to add a new task
        function ajtTask() {
            const taskInput = document.getElementById('task');
            const taskText = taskInput.value.trim();
            
            if (taskText !== '') {
                const taskList = document.getElementById('taskList');
                const newTask = document.createElement('li');
                newTask.className = 'todo-item';
                newTask.innerHTML = `
                    <span>${taskText}</span>
                    <button class="btn" onclick="completeTask(this)">Complete</button>
                    <button class="btn" onclick="deleteTask(this)">Delete</button>
                `;
                taskList.appendChild(newTask);
taskInput.value='';            }
        }

    </script>
</body>
</html>
