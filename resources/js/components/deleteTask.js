import {deleteData} from '../services/deleteData.js'

export default function deleteTask() {
    document.querySelectorAll('.btn-delete').forEach((item) => {
        item.addEventListener('click', event =>{
            console.log(event);
            const deleteItem = item.parentElement.parentElement.parentElement;
            deleteData(`http://localhost:3000/current/${deleteItem.id}`);
            deleteItem.remove();
        })
    });
}

