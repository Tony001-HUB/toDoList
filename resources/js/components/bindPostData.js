import {postData} from "../services/getData.js"
import initToDoList from "../index.js"

export default function bindPostData(form){
        form.addEventListener('submit', (event) =>{
        event.preventDefault();

        const formData = new FormData(form); 
        const json = JSON.stringify(Object.fromEntries(formData.entries()));

        postData('http://localhost:3000/current', json)
        .then(data => {
            console.log(data);      
        }).catch(() => {
        }).finally(() =>{
            form.reset();
        });
    });
}