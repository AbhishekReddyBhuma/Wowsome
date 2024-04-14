const addNewProduct = (data) => {

    const formdata = new FormData();
    for(let key in data){
        formdata.append(key,data[key]);
    }
    
    return fetch('http://localhost:8080/api/v1/add',{
        method: 'POST',
        // headers:{
        //     'accept' : "application/json",
        //     'content-type' : "application/json"
        // },
        body: formdata
    }).then(res => res.json())
}

export {addNewProduct};