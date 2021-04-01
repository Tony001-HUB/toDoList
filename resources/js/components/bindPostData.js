import {postData} from "../services/postData.js"

export default function bindPostData(form){
        form.addEventListener('submit', event =>{
        event.preventDefault();

        const formData = new FormData(form); 
        const json = JSON.stringify(Object.fromEntries(formData.entries()));
        
        postData('http://localhost:3000/task', json)
    });
}