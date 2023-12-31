import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { allUsersRoute, host, header } from "../../utils/APIRoutes";
import ChatContainer from "../../components/ChatContainer";
import Contacts from "../../components/Contacts";
import Welcome from "../../components/Welcome";
import './index.css'

export default function Chat() {
    const navigate = useNavigate();
    const socket = useRef();
    const [contacts, setContacts] = useState([]);
    const [currentChat, setCurrentChat] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    useEffect(async () => {
        console.log(localStorage.getItem('userinfo'));
        if (!localStorage.getItem('userinfo')) {
            navigate("/login");
            window.location.reload()
        } else {
            console.log('userinfo');
            setCurrentUser(
                await JSON.parse(
                    localStorage.getItem('userinfo')
                )
            );
        }
    }, []);
    useEffect(() => {
        if (currentUser) {
            socket.current = io(host);
            socket.current.emit("add-user", currentUser._id);
        }
    }, [currentUser]);

    useEffect(async () => {
        if (currentUser) {
            const data = await axios.get(`${allUsersRoute}/${currentUser._id}`,
                header);
            setContacts(data.data);
        }
    }, [currentUser]);
    const handleChatChange = (chat) => {
        setCurrentChat(chat);
    };
    return (
        <>

            <div className="div">
                <div className="container">
                    <Contacts contacts={contacts} changeChat={handleChatChange} />
                    {currentChat === undefined ? (
                        <Welcome />
                    ) : (
                        <ChatContainer currentChat={currentChat} socket={socket} />

                    )}
                </div>
            </div>
        </>

    );
}
