import {getData} from "../services/getData.js";
import deleteTask from "./deleteTask.js";
import comletedTask from "./comletedTask.js";
import editTask from "./editTask.js";

export default function upperSortByDate() {
    document.querySelector(".max-sort").addEventListener('click', event => {
        event.preventDefault();
        document.querySelector("#currentTasks").innerHTML = "";
        getData('db.json')
        .then(data => copy(data))
        .then(copyObj => sortFunction(copyObj.task))
        .then(sortObj => sortObj.forEach(item => {
        if(item.IsFinished == "false"){
            document.querySelector("#currentTasks").insertAdjacentHTML('beforeend',`
            <li class="list-group-item d-flex w-100 mb-2" id="${item.id}" style="background-color: ${item.color};">
                <div class="w-100 mr-2">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">${item.taskTitle}</h5>
                        <div>
                            <small class="mr-2">${item.gridRadios}</small>
                            <small>${item.date}</small>
                        </div>
                    </div>
                    <p class="mb-1 w-100">${item.taskText}</p>
                </div>
            <div class="contacts contacts_none">
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
                    <div>
                        <input type="date" class="contacts__input contacts__input-date" min="2021-04-01" max="2040-04-01">
                    </div>
                    <div>
                        <input type="color" class="contacts__input contacts__input-color" name="color"/>
                    </div>
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
        }
        }))
        setTimeout(editTask, 1000);
        setTimeout(comletedTask, 1000);
        setTimeout(deleteTask, 1000);
    })
}

function copy(mainObj){
    let obj = {}; 

    for (let key in mainObj){
        obj[key] = mainObj[key];
    }

    return (obj);
}

function sortFunction(objForSort) {
    let sortedArray = objForSort.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
    });

    return(sortedArray);
}