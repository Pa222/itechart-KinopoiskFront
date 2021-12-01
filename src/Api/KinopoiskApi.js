import { addCookie, getCookie, removeCookie } from "../Utils/Cookies";
import _, { method } from 'lodash';
import axios from 'axios';

const ip = "localhost";
const port = 4000;

class KinopoiskApi{

    static getHubConnectionString = () => {
        return `http://${ip}:${port}/hubs/chat`;
    }

    static getToken = () => {
        return `Bearer ${getCookie("AuthToken")}`;
    }

    static getMoviesPage = (page, size = 8) => {
        return axios.get(`http://${ip}:${port}/api/Catalog/get-page`, {
            params: {
                page,
                size,
            }
        })
        .then(response => {
            if (response.status !== 200){
                return null;
            }
            return response.data;
        })
        .catch(() => {
            return null;
        })
    }

    static getFaqs = () => {
        return axios.get(`http://${ip}:${port}/api/Faq`)
        .then(response => {
            if (response.status !== 200){
                return null;
            }
            return response.data;
        })
        .catch(() => {
            return null;
        })
    }

    static getMovieById = id => {
        return axios.get(`http://${ip}:${port}/api/Catalog/get`, {
            params: {
                id,
            }
        })
        .then(response => {
            if (response.status !== 200){
                return null;
            }
            return response.data;
        })
        .catch(() => {
            return null;
        })
    }

    static getMoviesByTitle = title => {
        return axios.get(`http://${ip}:${port}/api/Catalog/get-by-title`, {
            params: {
                title,
            }
        })
        .then(response => {
            if (response.status !== 200){
                return null;
            }
            return response.data;
        })
    }

    static auth = (email, password) => {
        return axios({
            method: "post",
            url: `http://${ip}:${port}/api/User/auth`,
            data: {email, password}
        })
        .then(response => {
            if (response.status !== 200){
                return false;
            }
            const token = response.data;
            addCookie("AuthToken", token);
            return true;
        })
        .catch(() => {
            return null;
        })
    }
    
    static logout = () => {
        removeCookie("AuthToken");
    }

    static register = user => {
        return axios({
            method: "post",
            url: `http://${ip}:${port}/api/User/register`,
            data: user,
        })
        .then(response => {
            return response.status === 200;
        })
        .catch(() => {
            return null;
        })
    }

    static getUser = () => {
        return axios.get(`http://${ip}:${port}/api/User/get-user`, {
            headers: {
                Authorization: `Bearer ${getCookie("AuthToken")}`
            }
        })
        .then(response => {
            if (response.status !== 200){
                return null;
            }
            return response.data;
        })
        .catch(() => {
            return null;
        })
    }

    static saveUserChanges = user => {
        return axios({
            method: 'put',
            url: `http://${ip}:${port}/api/Profile/update-user-profile`,
            data: user,
            headers: {
                Authorization: `Bearer ${getCookie("AuthToken")}`
            }
        })
        .then(response => {
            if (response.status !== 200){
                return null;
            }
            return response.data;
        })
        .catch(() => {
            return null;
        })
    }

    static addCreditCard = card => {
        return axios({
            method: 'POST',
            url: `http://${ip}:${port}/api/Profile/add-credit-card`,
            headers: {
                Authorization: `Bearer ${getCookie("AuthToken")}`
            },
            data: card,
        })
        .then(response => {
            if (response.status !== 200){
                return null;
            }
            return response.data;
        })
        .catch(() => {
            return null;
        })
    }

    static deleteCreditCard = number => {
        return axios({
            method: 'DELETE',
            url: `http://${ip}:${port}/api/Profile/delete-credit-card`,
            headers: {
                Authorization: `Bearer ${getCookie("AuthToken")}`
            },
            data: number,
        })
        .then(response => {
            if (response.status !== 200){
                return null;
            }
            return response.data;
        })
        .catch(() => {
            return null;
        })
    }

    static uploadUserAvatar = formData => {
        return axios({
            method: "post",
            url: `http://${ip}:${port}/api/User/upload-avatar`,
            headers: {
                Authorization: `Bearer ${getCookie("AuthToken")}`
            },
            data: formData,
        })
        .then(response => {
            if (response.status !== 200){
                return null;
            }
            return response.data;
        })
        .catch(() => {
            return null;
        })
    }

    static addComment = async comment => {
        return axios({
            method: "post",
            url: `http://${ip}:${port}/api/Comments/add-comment`,
            headers: {
                'Authorization': `Bearer ${getCookie("AuthToken")}`,
            },
            data: comment,
        })
        .then(response => {
            if (response.status !== 200){
                return null;
            }
            return response.data;
        })
        .catch(() => {
            return null;
        })
    }

    static deleteComment = async comment => {
        return axios({
            method: "delete",
            url: `http://${ip}:${port}/api/Comments/delete-comment`,
            headers: {
                'Authorization': `Bearer ${getCookie("AuthToken")}`,
            },
            data: comment,
        })
        .then(response => {
            if (response.status !== 200){
                return null;
            }
            return response.data;
        })
        .catch(() => {
            return null;
        })
    }

    static updateRating = async rating => {
        return axios({
            method: "post",
            url: `http://${ip}:${port}/api/Rating/update-rating`,
            headers: {
                'Authorization': `Bearer ${getCookie("AuthToken")}`,
            },
            data: rating,
        })
        .then(response => {
            if (response.status !== 200){
                return null;
            }
            return response.data;
        })
        .catch(() => {
            return null;
        })
    }
}

export default KinopoiskApi;