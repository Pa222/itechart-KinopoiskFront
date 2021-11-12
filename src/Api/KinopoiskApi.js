import { getCookie } from "../Utils/Cookies";

const ip = "localhost";
const port = 4000;

class KinopoiskApi{

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

    static getMovieById = async (id) => {
        try{
            const response = await fetch(`http://${ip}:${port}/api/Catalog/get?id=${id}`);
            return await response.json();
        } catch(e){
            return null;
        }
    }

    static getMoviesByTitle = async (title) => {
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
                return null;
            }
            const token = await response.text();
            return token;
        } catch(e){
            return null;
        }
    }

    static register = async (user) => {
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

    static updateUser = async (user) => {
    }

    static addCreditCard = async (card) => {
        try{
            const response = await fetch(`http://${ip}:${port}/api/Profile/add-credit-card`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getCookie("AuthToken")}`,
                },
                body: JSON.stringify(card),
            })
            return await response.json();
        } catch(e){
            return null;
        }
    }
}

export default KinopoiskApi;