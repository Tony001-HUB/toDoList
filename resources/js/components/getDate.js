function getDate() {
    document.querySelector('.btn-primary-add').addEventListener('click', e => {
        const d = new Date();
        const day = d.getDate();
        const month = d.getMonth() + 1;
        const year = d.getFullYear();
        const date = year + "-" + month + "-" + day;
        document.querySelector('#date-add-task').value = date;
    })
}

export {getDate}