import axois from "axios"

const getUserfromStorage = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

export const config = {
    headers: {
        Authorization: `Bearer ${getUserfromStorage !== null ? getUserfromStorage.token : ""}`,
        Accept: "application/json",
    }
}

export const postDataApi = async(url, post, token) => {
    const res = await axois.post(`/api/${url}`, post, {
        headers: {Authorization: token}
    });
    return res;

}


export const getDataApi = async(url, post, token) => {
    const res = await axois.get(`/api/${url}`, {
        headers: {Authorization: token}
    });
    return res;

}