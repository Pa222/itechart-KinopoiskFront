import { addCookie, getCookie, removeCookie } from "../Utils/Cookies";

const ip = "localhost";
const port = 4000;

class KinopoiskApi{

    static getHubConnectionString = () => {
        return `http://${ip}:${port}/hubs/chat`;
    }

    static getToken = () => {
        return `Bearer ${getCookie("AuthToken")}`;
    }

    static getMoviesPage = async (page, size = 8) => {
        try{
            const response = await fetch(`http://${ip}:${port}/api/Catalog/get-page?page=${page}&size=${size}`);
            return await response.json();
        } catch(e){
            return null;
        }
    }

    static getFaqs = async () => {
        try{
            const response = await fetch(`http://${ip}:${port}/api/Faq`);
            return await response.json();
        } catch(e){
            return null;
        }
    }

    static getMovieById = async id => {
        try{
            const response = await fetch(`http://${ip}:${port}/api/Catalog/get?id=${id}`);
            return await response.json();
        } catch(e){
            return null;
        }
    }

    static getMoviesByTitle = async title => {
        try{
            if (typeof title === "string"){
                const response = await fetch(`http://${ip}:${port}/api/Catalog/get-by-title?title=${title}`);
                return await response.json();
            }
        } catch(e){
            return null;
        }
    }

    static auth = async (email, password) => {
        try{
            const response = await fetch(`http://${ip}:${port}/api/User/auth`, {
                    method: "POST",
                    headers:{
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({email, password}),
                });
            if (response.status !== 200){
                return false;
            }
            const token = await response.text();
            addCookie("AuthToken", token);
            return true;
        } catch(e){
            return null;
        }
    }
    
    static logout = () => {
        removeCookie("AuthToken");
    }

    static register = async user => {
        try{
            const response = await fetch(`http://${ip}:${port}/api/User/register`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
            return response.status === 200;
        } catch(e){
            return null;
        }
    }

    static getUser = async () => {
        try{
            const response = await fetch(`http://${ip}:${port}/api/User/get-user`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${getCookie("AuthToken")}`
                }
            });
            if (response.status !== 200){
                return null;
            }
            return await response.json();
        } catch(e){
            return null;
        }
    }

    static saveUserChanges = async user => {
        try{
            const response = await fetch(`http://${ip}:${port}/api/Profile/update-user-profile`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getCookie("AuthToken")}`
                },
                body: JSON.stringify(user),
            });
            if (response.status !== 200){
                return null;
            }
            return await response.json();
        } catch(e){
            return null;
        }
    }

    static addCreditCard = async card => {
        try{
            const response = await fetch(`http://${ip}:${port}/api/Profile/add-credit-card`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getCookie("AuthToken")}`,
                },
                body: JSON.stringify(card),
            })
            if (response.status !== 200){
                return null;
            }
            return await response.json();
        } catch(e){
            return null;
        }
    }

    static deleteCreditCard = async number => {
        try{
            const response = await fetch(`http://${ip}:${port}/api/Profile/delete-credit-card`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getCookie("AuthToken")}`,
                },
                body: JSON.stringify({number}),
            })
            if (response.status !== 200){
                return null;
            }
            return await response.json();
        } catch(e){
            return null;
        }
    }

    static uploadUserAvatar = async formData => {
        try{
            const response = await fetch(`http://${ip}:${port}/api/User/upload-avatar`, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${getCookie("AuthToken")}`,
                },
                body: formData,
            })
            if (response.status !== 200){
                return null;
            }
            return await response.json();
        } catch(e){
            return null;
        }
    }

    static addComment = async comment => {
        try{
            const response = await fetch(`http://${ip}:${port}/api/Comments/add-comment`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getCookie("AuthToken")}`,
                },
                body: JSON.stringify(comment),
            })
            if (response.status !== 200){
                return null;
            }
            return await response.json();
        } catch(e){
            return null;
        }
    }

    static deleteComment = async comment => {
        try{
            const response = await fetch(`http://${ip}:${port}/api/Comments/delete-comment`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getCookie("AuthToken")}`,
                },
                body: JSON.stringify(comment),
            })
            if (response.status !== 200){
                return null;
            }
            return await response.json();
        } catch(e){
            return null;
        }
    }

    static updateRating = async rating => {
        try{
            const response = await fetch(`http://${ip}:${port}/api/Rating/update-rating`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getCookie("AuthToken")}`,
                },
                body: JSON.stringify(rating),
            })
            if (response.status !== 200){
                return null;
            }
            return await response.json();
        } catch(e){
            return null;
        }
    }
}

export default KinopoiskApi;