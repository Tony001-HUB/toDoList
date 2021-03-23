import {getData} from "../services/getData.js";

export default function getCountCurrentList() {
    getData('db.json')
    .then(data => document.querySelector("#toDoCount")
    .insertAdjacentHTML('beforeend',`(${data.current.length})`));
}

