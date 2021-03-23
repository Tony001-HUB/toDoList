import {getData} from "../services/getData.js";

export default function getCountDoneList() {
    getData('db.json')
    .then(data => document.querySelector("#comletedCount")
    .insertAdjacentHTML('beforeend',`(${data.done.length})`));
}
