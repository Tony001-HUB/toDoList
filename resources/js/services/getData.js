const getData = async (url) => {
    const res = await fetch(url);

    if(!res.ok){
       throw new Error(`Error status:" ${res.status} from ${res.url}`)
    }

    return await res.json();
}

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

export  {getData, postData};