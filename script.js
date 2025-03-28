function checkPassword () {
    const real_password = '123abc';
    const input_password = document.getElementById('password').value;
    if(real_password == input_password) {
        rememberTasks();
        document.getElementById("login").style.display = "none";
        document.getElementById("todo").style.display = "block";
        document.getElementById("taskList").style.display = "block";
    } else {
        alert('Incorrect password');
    }
}
function addTask() {
    const task = document.getElementById("task");
    const taskList = document.getElementById("tasks");
    const li = document.createElement("li");
    li.textContent = task.value;
    taskList.appendChild(li);

    let completeTaskList = JSON.parse(localStorage.getItem("completeTaskList")) || [];
    completeTaskList.push(task.value); // Add the task value to the array -- these few lines were modified by copilot
    localStorage.setItem("completeTaskList", JSON.stringify(completeTaskList)); // Save updated array to localStorage

    task.value = ""; // Clear the input field
}

function removeLastTask() {
    const taskList = document.getElementById("tasks");
    const lastOne = taskList.lastElementChild;
    if(lastOne){
        taskList.removeChild(lastOne);
        let completeTaskList = JSON.parse(localStorage.getItem("completeTaskList")) || [];
        completeTaskList.pop();
        localStorage.setItem("completeTaskList", JSON.stringify(completeTaskList));
    }
}

function removeSpecifiedTask() {
    const taskList = document.getElementById("tasks");
    const chosenIndex = parseInt(document.getElementById("removeIndex").value, 10);
    const specified = taskList.children[chosenIndex];
    if(specified){
        taskList.removeChild(specified);
        let completeTaskList = JSON.parse(localStorage.getItem("completeTaskList")) || [];
        completeTaskList.splice(chosenIndex, 1);
        localStorage.setItem("completeTaskList", JSON.stringify(completeTaskList));
    }
}

function rememberTasks() {
    const completeTaskList = JSON.parse(localStorage.getItem("completeTaskList"));
    for(t in completeTaskList){
        const taskList = document.getElementById("tasks");
        const li = document.createElement("li");
        li.textContent = completeTaskList[t];
        taskList.appendChild(li);
    }
}