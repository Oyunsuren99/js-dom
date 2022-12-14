const taskListEl = document.getElementById('taskList');
const taskInputEl = document.getElementById('taskInput');
const taskListText = document.getElementById('list');



function newTask() {
    let now = new Date().getTime();
    let text = new Date().getMilliseconds();
    const taskString = `
    <div class="card mb-2" id="${now}">
                <div id="list" class="card-body row">
                    <div id="${text}" class="col-9">${taskInputEl.value}</div>
                    <div class="col-3">
                        <button class="btn btn-primary ${text}" onclick="fixTask(${text})"></button>
                        <button class="btn btn-warning" onclick="doneTask(${text})"></button>
                        <button class="btn btn-danger" onclick="removeTask(${now})"></button>
                    </div>
                </div>
            </div>
    `
    taskListEl.innerHTML = taskListEl.innerHTML + taskString;
}

function fixTask(id) {
    document.getElementById(id).innerHTML = '<input/>';

}


function doneTask(id) {
    document.getElementById(id).style.textDecoration ="line-through"
}


function removeTask(id) {
    if (confirm('ustgah uu?')) {
        document.getElementById(id).remove();
    }
}