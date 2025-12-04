const URL = `https://api.jsonbin.io/v3/b/690a33bdae596e708f445b89`

export const requestUserList = async () => {
    const response = await fetch(`${URL}/latest`, {
        method: "GET",
        headers: {
            "X-Bin-Meta" : "false"
        }
    });
    const JSONResponse = await response.json();
    return JSONResponse;
};

export const requestPUTUser = async (data) => {
    const jsonData = JSON.stringify(data);
    console.log(jsonData);
    const response = await fetch(URL, {
        method: "PUT",
        headers:{
            "Content-Type" : "application/json"
        },
        body: jsonData
    });
    if (!response.ok) throw new Error(`${response.status} : ${response.statusText}`);
    return await response.json();
};