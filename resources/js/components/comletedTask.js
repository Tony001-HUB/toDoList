import {getData} from "../services/getData.js";
import {putData} from "../services/putData.js"

export default function comletedTask() {
    document.querySelectorAll('.btn-success').forEach((item) => {
        item.addEventListener('click', event =>{ 
            const comletedItem = item.parentElement.parentElement.parentElement; 
            getData('db.json') 
            .then(gData => {
                console.log()
                const result = gData.task.filter(item => item.id == comletedItem.id);
                console.log(result[0]); 
                putData(`http://localhost:3000/task/${comletedItem.id}`, JSON.stringify({
                    taskTitle: result[0].taskTitle,
                    taskText: result[0].taskText,
                    IsFinished: "true",
                    gridRadios: result[0].gridRadios,
                    date: result[0].date,
                    color: result[0].color,
                    id: comletedItem.id
                    }));
                comletedItem.remove(); 
            })
        })
    });
}