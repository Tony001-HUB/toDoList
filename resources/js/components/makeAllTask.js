import {getData} from "../services/getData.js";
import {getDate} from "./getDate.js";

export default function makeAllTask() {
    getCurrentTasks();
    getDoneTasks();
}
    
function getCurrentTasks() {
    getData('db.json')
    .then(currentTasksData => currentTasksData.task.forEach(element => {
        if(element.IsFinished == "false"){
        document.querySelector("#currentTasks").insertAdjacentHTML('beforeend',`
        <li class="list-group-item d-flex w-100 mb-2" id="${element.id}">
            <div class="w-100 mr-2">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${element.taskTitle}</h5>
                    <div>
                        <small class="mr-2">${element.gridRadios}</small>
                        <small>${getDate()}</small>
                    </div>
                </div>
                <p class="mb-1 w-100">${element.taskText}</p>
            </div>
        <div class="contacts">
            <form class="contacts__action-form">
                <div>
                    <input class="contacts__input contacts__input-title" type="text" name="taskTitle" placeholder="Title">
                </div>
                <div>
                    <input class="contacts__input contacts__input-text" type="text" name="taskText" placeholder="Text*">
                </div>
                <select class="contacts__input-priority">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <div class = "btn_wrapper">
                <a class="btn btn-primary send">send</a>
                <a class="btn btn-primary canсel">canсel</a>
                </div>
            </form>
        </div>
            <div class="dropdown m-2 dropleft">
                <button class="btn btn-secondary h-100 init-work-with-task-btn" type="button" id="dropdownMenuItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <div class="dropdown-menu p-2 flex-column" aria-labelledby="dropdownMenuItem1">
                    <button type="button" class="btn btn-success w-100">Complete</button>
                    <button type="button" class="btn btn-info w-100 my-2">Edit</button>
                    <button type="button" class="btn btn-delete btn-danger w-100">Delete</button>
                </div>
            </div>
        </li>
        `)
    }}));
}

function getDoneTasks() {
    getData('db.json')
    .then(currentTasksData => currentTasksData.task.forEach(element => {
        if(element.IsFinished == "true"){
        document.querySelector("#completedTasks").insertAdjacentHTML('beforeend',`
        <li class="list-group-item d-flex w-100 mb-2" id="${element.id}">
            <div class="w-100 mr-2">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${element.taskTitle}</h5>
                    <div>
                        <small class="mr-2">${element.gridRadios}</small>
                        <small>${getDate()}</small>
                    </div>
                </div>
                <p class="mb-1 w-100">${element.taskText}</p>
            </div>
        <div class="contacts">
            <form class="contacts__action-form">
                <div>
                    <input class="contacts__input contacts__input-title" type="text" name="taskTitle" placeholder="Title">
                </div>
                <div>
                    <input class="contacts__input contacts__input-text" type="text" name="taskText" placeholder="Text*">
                </div>
                <select class="contacts__input-priority">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <div class = "btn_wrapper">
                <a class="btn btn-primary send">send</a>
                <a class="btn btn-primary canсel">canсel</a>
                </div>
            </form>
        </div>
            <div class="dropdown m-2 dropleft">
                <button class="btn btn-secondary h-100 init-work-with-task-btn" type="button" id="dropdownMenuItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <div class="dropdown-menu p-2 flex-column" aria-labelledby="dropdownMenuItem1">
                    <button type="button" class="btn btn-success w-100">Complete</button>
                    <button type="button" class="btn btn-info w-100 my-2">Edit</button>
                    <button type="button" class="btn btn-delete btn-danger w-100">Delete</button>
                </div>
            </div>
        </li>
        `)
    }}));
}