import makeAllTask from "../components/makeAllTask.js";

export default function goBackFromSort() {
    document.querySelector(".back-btn").addEventListener('click', event => {
        event.preventDefault();
        document.querySelector("#currentTasks").innerHTML = "";
        document.querySelector("#completedTasks").innerHTML = "";
        makeAllTask();
    })
}