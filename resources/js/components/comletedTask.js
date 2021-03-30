import {getData} from "../services/getData.js";
import {getDate} from "../components/getDate.js";
import {postData} from "../services/postData.js";
import {deleteData} from "../services/deleteData.js"

export default function comletedTask() {
    document.querySelectorAll('.btn-success').forEach((item) => {
        item.addEventListener('click', event =>{
            const comletedItem = item.parentElement.parentElement.parentElement;
            getData('db.json')
            .then(data => {
                const result = data.current.filter(item => item.id == comletedItem.id);
                postData('http://localhost:3000/done', JSON.stringify(result[0]));
                document.querySelector("#completedTasks").insertAdjacentHTML('beforeend',`
                <li class="list-group-item d-flex w-100 mb-2" id="${result[0].id}>
                    <div class="w-100 mr-2">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">${result[0].taskTitle}</h5>
                            <div>
                                <small class="mr-2">${result[0].gridRadios}</small>
                                <small>${getDate()}</small>
                            </div>
                        </div>
                        <p class="mb-1 w-100">${result[0].taskText}</p>
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
                deleteData(`http://localhost:3000/current/${comletedItem.id}`);
                comletedItem.remove();
            })
        })
    });
}