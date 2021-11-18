import React, {useState, useEffect} from "react";
import AdminPage from '../Views/AdminPage/AdminPage';
import {HubConnectionBuilder} from '@microsoft/signalr';
import KinopoiskApi from "../../Api/KinopoiskApi";

const AdminPageContainer = props => {
    const [connection, setConnection] = useState(null);
    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState();

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl(KinopoiskApi.getHubConnectionString())
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, [])

    useEffect(() => {
        if (connection){
            connection.start()
                .then(() => {
                    connection.send('ConnectAsAdmin', {token: KinopoiskApi.getToken()});

                    connection.send('GetAdminInformation');

                    connection.on('ReceiveMessage', message => {
                        console.log('Message received: ', message);
                    })

                    connection.on('ReceiveAdminInformation', info => {
                        const updatedChats = [];
                        info.forEach(chat => updatedChats.push(chat));

                        setChats(updatedChats);
                    })

                    connection.on('UpdateAdminInformation', () => {
                        connection.send('GetAdminInformation');
                    })
                })
                .catch(e => {
                    console.log('Connection failed: ', e);
                })
        }
    }, [connection])

    const sendMessage = async () => {
        if (connection.connection._connectionStarted){
            try{
                await KinopoiskApi.sendMessage({receiverId: 1, senderId: connection.connection.connectionId, message: "Test"});
            } catch(e){
                console.log(e);
            }
        } else{
            alert('Нет подключения к серверу');
        }
    }

    const pickChat = (sender) => {
        chats.forEach(chat => {
            if (chat.sender === sender){
                setCurrentChat(chat);
            }
        })
    }

    const pageProps = {
        sendMessage,
        pickChat,
        chats,
        currentChat,
    }

    return (<AdminPage {...pageProps} />)
}

export default AdminPageContainer;