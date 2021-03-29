function deleteData(url) {
    fetch(url, {
        method: 'DELETE', // Method itself
        headers: {
         'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
        }
        })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))
}
export {deleteData}