import bindPostData from "./components/bindPostData.js";
import deleteTask from "./components/deleteTask.js";
import comletedTask from "./components/comletedTask.js";
import makeAllTask from "./components/makeAllTask.js";
import getCountTask from "../js/components/getCountTask.js";
import editTask from "../js/components/editTask.js";
import sortByDate from "../js/components/sortByDate.js"

function initToDoList() {
    makeAllTask();
    getCountTask();
    bindPostData(document.querySelector('form'));
    setTimeout(deleteTask, 500);
    setTimeout(comletedTask, 500);
    setTimeout(editTask, 1000);
    sortByDate();
}
initToDoList();