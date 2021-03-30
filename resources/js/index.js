import bindPostData from "./components/bindPostData.js";
import deleteTask from "./components/deleteTask.js";
import comletedTask from "./components/comletedTask.js";
import makeAllTask from "./components/makeAllTask.js";
import getCountTask from "../js/components/getCountTask.js"

function initToDoList() {
    makeAllTask();
    getCountTask();
    bindPostData(document.querySelector('form'));
    setTimeout(deleteTask, 500);
    setTimeout(comletedTask, 500);
}
initToDoList();