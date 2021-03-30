function putData(url, data) {
    fetch(url, {
        method: 'PUT',
        headers: {
         'Content-type': 'application/json; charset=UTF-8'
        },
        body: data
    })
}
export {putData}