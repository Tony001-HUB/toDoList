import getData from "../services/getData.js";
import getDate from "../components/getDate.js";
import generateId from "../components/idGenerator.js";

export default function initDoneList() {
    getData('db.json')
    .then(data => data.done.forEach(element => {
        document.querySelector("#completedTasks").insertAdjacentHTML('beforeend',`
        <li class="list-group-item d-flex w-100 mb-2" id="${"currentTasks__"+generateId()}">
            <div class="w-100 mr-2">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${element.taskTitle}</h5>
                    <div>
                        <small class="mr-2">${element.taskPriority}</small>
                        <small>${getDate()}</small>
                        <small>${element.taskId}</small>
                    </div>
                </div>
                <p class="mb-1 w-100">${element.taskText}</p>
            </div>
            <div class="dropdown m-2 dropleft">
                <button class="btn btn-secondary h-100" type="button" id="dropdownMenuItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <div class="dropdown-menu p-2 flex-column" aria-labelledby="dropdownMenuItem1">
                    <button type="button" class="btn btn-success w-100">Complete</button>
                    <button type="button" class="btn btn-info w-100 my-2">Edit</button>
                    <button type="button" class="btn btn-danger w-100">Delete</button>
                </div>
            </div>
        </li>
        `)
    }));
}