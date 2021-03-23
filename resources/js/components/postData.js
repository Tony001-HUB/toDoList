const postData = async (url, data) => {
    const result = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await result.json;
}

const forms = document.querySelectorAll('form');

forms.forEach(from => {
    bindPostData(from);
});

function bindPostData(form){
    form.addEventListener('submit', (event) =>{
        event.preventDefault();

        const formData = new FormData(form); 
        const json =JSON.stringify(Object.fromEntries(formData.entries()));

        postData('http://localhost:3000/current', json)
        .then(data => {
            console.log(data);
            showThanksModal(message.success);        
            statusMess.remove();
        }).catch(() => {
            showThanksModal(message.failure);
        }).finally(() =>{
            form.reset();
        });

    });
}