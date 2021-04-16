import bindPostData from "./components/bindPostData.js";
import deleteTask from "./components/deleteTask.js";
import comletedTask from "./components/comletedTask.js";
import makeAllTask from "./components/makeAllTask.js";
import getCountTask from "../js/components/getCountTask.js";
import editTask from "../js/components/editTask.js";
import upperSortByDate from "./components/upperSortByDate.js";
import changeAppTheme from "../js/components/changeAppTheme.js";
import lowerSortByDate from "../js/components/lowerSortByDate.js";
import goBackFromSort from "../js/components/goBackFromSort.js";
import {getDate} from "./components/getDate.js"

function initToDoList() {
    getDate();
    makeAllTask();
    getCountTask();
    bindPostData(document.querySelector('form'));
    setTimeout(deleteTask, 500);
    setTimeout(comletedTask, 500);
    setTimeout(editTask, 500);
    upperSortByDate();
    lowerSortByDate();
    changeAppTheme();
    goBackFromSort();
}
initToDoList();

