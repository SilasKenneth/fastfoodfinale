class Api{
    constructor(){
        this.hostName = "https://fastfoodfastapiv2.herokuapp.com/api/v2";
    }

    get(endpoint, token=null) {
        const result = fetch(this.hostName+endpoint, {
            method: "GET",
            headers:{
                Authorization: `Bearer ${token}`,
                'content-type': "application/json"
            }});
        return result;
    }


    post(endpoint, payload, token=null){
        console.log(JSON.stringify(payload))
        const result = fetch(this.hostName+endpoint, {
            method: "POST",
            body:JSON.stringify(payload),
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': "application/json"
            }
        });
        return result;
    }

    update(endpoint, payload, token=null){
        const result = fetch(this.hostName+endpoint, {
            method: "PUT",
            body: JSON.stringify(payload),
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'application/json'
            }
        });
        return result;
    }
}

let api = new Api();
