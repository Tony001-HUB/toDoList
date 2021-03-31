import {getData} from "../services/getData.js";
import {putData} from "../services/putData.js"

export default function editTask() {
    document.querySelectorAll(".btn-info").forEach(item => {
        item.addEventListener("click", event => {
            getTaskData(item);
            scrollIntoEditTask();
            renderDarkeningBackground();
        })
    })
    canсelEditTask();
    changeTaskData();
}

function scrollIntoEditTask() {
    document.querySelector('.contacts').classList.add('show-edit-modal');
            document.querySelector('.contacts').scrollIntoView({
                behavior: 'auto',
                block: 'center'
            })
    document.body.style.overflow = "hidden";
}

function renderDarkeningBackground() {
    const pageMaxWidth = document.documentElement.scrollWidth;
    const pageMaxHeight = document.documentElement.scrollHeight;
    document.querySelector('.main-container').innerHTML += `
    <div class = "darkening-background" style="width: ${pageMaxWidth}px; height: ${pageMaxHeight}px;"></div>
    `;
}

function canсelEditTask() {
    document.querySelector('.canсel').addEventListener("click", event => {
        document.querySelector('.darkening-background').remove();
        document.querySelector('.contacts').classList.remove('show-edit-modal');
        document.body.style.overflow = "visible";
    })
}

function getTaskData(item) {
    const comletedItem = item.parentElement.parentElement.parentElement; 
    getData('db.json') 
    .then(gData => {
        const result = gData.task.filter(item => item.id == comletedItem.id);
        document.querySelector('.contacts__input-title').value  = result[0].taskTitle;
        document.querySelector('.contacts__input-text').value  = result[0].taskText;
        document.querySelector('.contacts__input-priority').value  = result[0].gridRadios;
    })
}

function changeTaskData() {
    document.querySelectorAll('.send').forEach((item) => {
        item.addEventListener('click', event =>{ 
            const comletedItem = item.parentElement.parentElement.parentElement; 
            getData('db.json') 
            .then(gData => {
                const result = gData.task.filter(item => item.id == comletedItem.id);
                console.log(result[0]); 
                putData(`http://localhost:3000/task/${comletedItem.id}`, JSON.stringify({
                    taskTitle: document.querySelector('.contacts__input-title').value,
                    taskText: document.querySelector('.contacts__input-text').value,
                    IsFinished: result[0].IsFinished,
                    gridRadios: document.querySelector('.contacts__input-priority').value,
                    id: comletedItem.id
                    }));
                document.querySelector('.darkening-background').remove();
                document.querySelector('.contacts').classList.remove('show-edit-modal');
                document.body.style.overflow = "visible";
            })
        })
    })

}