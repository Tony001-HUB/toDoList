const postData = async (url, data) => {
    console.log(data);
    const result = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await result.json();
}

export {postData};