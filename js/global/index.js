let tasks = JSON.parse(localStorage.getItem("tasks")) || "[]"

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function addTasks(){
        let taskTitle = document.getElementById("tache").value
        let taskDescription = document.getElementById("description").value
        let taskDate = document.getElementById("date").value
        let time1 = document.getElementById("time1").value
        let time2 = document.getElementById("time2").value
        let time = time1 +" - "+ time2
        let priority = document.getElementById("priority").value
    
        let task = {
            id : tasks.length + 1,
            taskTitle,
            taskDescription,
            taskDate,
            time,
            priority
        }
    
        tasks.push(task)
        saveTasks()
        showTasks()
}

function showTasks(){
    
}