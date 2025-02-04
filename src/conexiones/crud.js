import back from './backend';

class crud {
    async GET(resource){

        const token = localStorage.getItem("token");
        let bearer;

        if(token === ""){
            bearer ="";
        } else {
            bearer = `${token}`;
        }

        const data = {
            
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'x-auth-token': bearer
            }
        }
        const url = `${back.api.baseURL}${resource}`
        let response = (await (await fetch(url, data)).json())
        return response
    }
    async POST(resource, body){

        const token = localStorage.getItem("token");
        let bearer;
        if(token === ""){
            bearer = "";
        } else{
            bearer = `${token}`;
        }

        const data = {
            method: 'POST',
            body: body,
            // body: JSON.stringify(body), Modificada para verificar el formdata
            headers: {
                // 'Content-Type':'application/json',
                'x-auth-token': bearer
            }
        };


        if (!(body instanceof FormData)) {
            data.body = JSON.stringify(body);
            data.headers['Content-Type'] = 'application/json';
          }


        const url = `${back.api.baseURL}${resource}`
        let response = (await (await fetch(url, data)).json())
        return response
    }
    async PUT(resource, body){
        const token = localStorage.getItem("token");
        let bearer;
        if(token === ""){
            bearer = "";
        } else{
            bearer = `${token}`;
        }

        const data = {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type':'application/json',
                'x-auth-token': bearer
            }
        }
        const url = `${back.api.baseURL}${resource}`
        let response = (await (await fetch(url, data)).json())
        return response
    }
    async DELETE(resource){
        const token = localStorage.getItem("token");
        let bearer;

        if(token === ""){
            bearer ="";
        } else {
            bearer = `${token}`;
        }

        const data = {
            
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'x-auth-token': bearer
            }
        }
        const url = `${back.api.baseURL}${resource}`
        let response = (await (await fetch(url, data)).json())
        return response
    }
}


//Para habilitar la funcion en todo el codigo
export default new crud();