import {getData} from "../services/getData.js";

export default function getCountTask() {
    getCountCurrentTask();
    getCountDoneTask();
}

function getCountCurrentTask() {
    let count = 1;
    getData('db.json')
    .then(currentTasksData => {
        const count = currentTasksData.task.filter(item => item.IsFinished == "false");
        document.querySelector("#toDoCount")
        .insertAdjacentHTML('beforeend',`(${count.length})`);
    })
}

function getCountDoneTask() {
    let count = 1;
    getData('db.json')
    .then(currentTasksData => {
        const count = currentTasksData.task.filter(item => item.IsFinished == "true");
        document.querySelector("#comletedCount")
        .insertAdjacentHTML('beforeend',`(${count.length})`);
    })
}