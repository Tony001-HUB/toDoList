import {getData} from "../services/getData.js";
import {getDate} from "../components/getDate.js";

export default function sortByDate() {
    document.querySelector(".max-sort").addEventListener('click', event => {
        let a1 = 0;
        let a2 = 0;
        getData('db.json')
        .then(data => data.task.forEach(item => {
            if(item.IsFinished == "false")  {
            const endDate = new Date(item.date)
            const currentDate = new Date(getDate());
            a1 = endDate - currentDate;
            console.log(a1);
            //console.log(endDate - currentDate);
            }
        }))
    })
}