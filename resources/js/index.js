import initCurrentList from "./components/makeCurrentList.js";
import initDoneList from "./components/makeDoneList.js";
import getCountCurrentList from "../js/components/getCountCurrentList.js";
import getCountDoneList from "../js/components/getCountDoneList.js";
import bindPostData from "./components/bindPostData.js"


export default function initToDoList() {
initCurrentList();
initDoneList();
getCountCurrentList();
getCountDoneList();
bindPostData(document.querySelector('form'));
}
initToDoList();
