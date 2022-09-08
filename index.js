
document.querySelector('#add-task').onclick = function () {
    if (document.querySelector('#taskInput').value.length == 0) {
        alert("Please Add New Task")
    }
    else {
        document.querySelector('#alltasks').innerHTML += `
    <div class= "box"> 
    <div class= "task">
        <span id="taskname">
              <li>   ${document.querySelector('#taskInput').value}  </li>
       
                 </span>
                 <button class="delete">
                       <i class="material-icons">delete</i>
                 </button>
    </div>
    </div>
    `;

        let currentTask = document.querySelectorAll('.delete')
        for (let i = 0; i < currentTask.length; i++) {
            currentTask[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
    document.querySelector('#taskInput').value = '';

}