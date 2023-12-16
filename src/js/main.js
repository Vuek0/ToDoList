var todolistInput = document.querySelector(".todolist__input")
var todolistButton = document.querySelector(".todolist__add")
var taskIndex = 0
var taskindexstorage = localStorage.getItem("taskindex")
var taskcontHeight = 0
function createTask(value){
    let storageindex = localStorage.getItem("taskindex")
    if(storageindex == null){
        if(taskIndex < 13){
            let tasksContainer = document.querySelector(".todolist__tasks")
            let taskSpan = document.createElement("span")
            let taskCircle = document.createElement("span")
            let taskText = document.createElement("p")
            taskCircle.className = "todolist__circle"
            taskSpan.className = "todolist__task"
            localStorage.setItem(`task ${taskIndex}`, value)
            taskText.textContent = localStorage.getItem(`task ${taskIndex}`)
            taskcontHeight = taskcontHeight + 80 + ' ' +  "px"
            tasksContainer.style.height = taskcontHeight
            tasksContainer.style.opacity = 1
            tasksContainer.style.visibility = "visible"
            taskCircle.addEventListener("click", () => {
                if(taskIndex == 1){
                    localStorage.setItem("taskindex", localStorage.getItem("taskindex") - 1) 
                    localStorage.setItem(`task ${taskIndex}`, value--)
                    tasksContainer.style.opacity = 0
                    tasksContainer.style.visibility = "hidden"
                    taskSpan.remove()
                    taskCircle.remove()
                    taskText.remove()
                    localStorage.removeItem(`task ${taskIndex}`)
                    taskIndex--
                }
                else{
                    localStorage.setItem("taskindex", localStorage.getItem("taskindex") - 1) 
                    taskSpan.remove()
                    taskCircle.remove()
                    taskText.remove()
                    localStorage.removeItem(`task ${taskIndex}`)
                    taskIndex--
                }
                for (let j = i + 1; j <= taskIndex; j++) {
                    localStorage.setItem(`task ${j - 1}`, localStorage.getItem(`task ${j}`));
                }
            
                // Удаляем последний ключ
                localStorage.removeItem(`task ${taskIndex}`);
                
                // Обновляем высоту контейнера задач после удаления
                taskcontHeight -= 80;
                tasksContainer.style.height = taskcontHeight + 'px';
            
                // Если нет задач, делаем контейнер невидимым
                if (taskIndex === 0) {
                    tasksContainer.style.opacity = 0;
                    tasksContainer.style.visibility = "hidden";
                } else {
                    // Обновляем taskIndex после удаления
                    taskIndex--;
                    localStorage.setItem("taskindex", taskIndex);
                }    
            })
            tasksContainer.appendChild(taskSpan)
            taskSpan.appendChild(taskCircle)
            taskSpan.appendChild(taskText)
            localStorage.setItem("taskindex", taskIndex)
            console.log(localStorage.getItem("taskindex"))
            console.log(taskIndex)
        }
        else{
            alert("Слишком много Tasks")
        }
    }
    else{
        taskIndex = localStorage.getItem("taskindex")
        if(taskIndex < 13){
            taskIndex++
            let tasksContainer = document.querySelector(".todolist__tasks")
            let taskSpan = document.createElement("span")
            let taskCircle = document.createElement("span")
            let taskText = document.createElement("p")
            taskCircle.className = "todolist__circle"
            taskSpan.className = "todolist__task"
            localStorage.setItem(`task ${taskIndex}`, value)
            taskText.textContent = localStorage.getItem(`task ${taskIndex}`)
            taskcontHeight = taskcontHeight + 80 + ' ' +  "px"
            tasksContainer.style.height = taskcontHeight
            tasksContainer.style.opacity = 1
            tasksContainer.style.visibility = "visible"
            taskCircle.addEventListener("click", () => {
                if(taskIndex == 1){
                    localStorage.setItem("taskindex", localStorage.getItem("taskindex") - 1) 
                    localStorage.setItem(`task ${taskIndex}`, value--)
                    tasksContainer.style.opacity = 0
                    tasksContainer.style.visibility = "hidden"
                    taskSpan.remove()
                    taskCircle.remove()
                    taskText.remove()
                    localStorage.removeItem(`task ${taskIndex}`)
                    taskIndex--
                }
                else{
                    localStorage.setItem("taskindex", localStorage.getItem("taskindex") - 1) 
                    taskSpan.remove()
                    taskCircle.remove()
                    taskText.remove()
                    localStorage.removeItem(`task ${taskIndex}`)
                    taskIndex--
                }
                
                
            })
            tasksContainer.appendChild(taskSpan)
            taskSpan.appendChild(taskCircle)
            taskSpan.appendChild(taskText)
            localStorage.setItem("taskindex", taskIndex)
            console.log(localStorage.getItem("taskindex"))
            console.log(taskIndex)
        }
        else{
            alert("Слишком много Tasks")
        }
    }
}

todolistButton.addEventListener("click", () => {
    let inputValue = todolistInput.value
    if(inputValue.length > 30){
        alert("Слишком много символов")
    }    
    else{
        taskindexstorage++
        taskIndex++
        todolistInput.value = ""
        createTask(inputValue)
    }
})

    for(let i = 1; i - 1 < localStorage.getItem("taskindex"); i++){
        let tasksContainer = document.querySelector(".todolist__tasks")
        let taskSpan = document.createElement("span")
        let taskCircle = document.createElement("span")
        let taskText = document.createElement("p")
        taskCircle.className = "todolist__circle"
        taskSpan.className = "todolist__task"
        taskText.textContent = localStorage.getItem(`task ${i}`)
        taskcontHeight = taskcontHeight + 80 + ' ' +  "px"
        tasksContainer.style.height = taskcontHeight
        tasksContainer.style.opacity = 1
        tasksContainer.style.visibility = "visible"
        taskCircle.addEventListener("click", () => {
            if(localStorage.getItem("taskindex") == 1){
                localStorage.setItem("taskindex", localStorage.getItem("taskindex") - 1) 
                tasksContainer.style.opacity = 0
                tasksContainer.style.visibility = "hidden"
                taskSpan.remove()
                taskCircle.remove()
                taskText.remove()
                localStorage.removeItem(`task ${i}`)
                taskIndex--
            }
            else{
                localStorage.setItem("taskindex", localStorage.getItem("taskindex") - 1) 
                taskSpan.remove()
                taskCircle.remove()
                taskText.remove()
                localStorage.removeItem(`task ${i}`)
                taskIndex--
            }
            
            
        })
        tasksContainer.appendChild(taskSpan)
        taskSpan.appendChild(taskCircle)
        taskSpan.appendChild(taskText)
    }

