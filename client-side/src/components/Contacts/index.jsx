import React, { useState, useEffect } from "react";
import styled from "styled-components";
import './index.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { logoutRoute , header} from "../../utils/APIRoutes";

export default function Contacts({ contacts, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  const navigate = useNavigate();
  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserName(data.username);
  }, []);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  const Logout = async () => {
    const id = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    )._id;
    const data = await axios.get(`${logoutRoute}/${id}`,header);
    if (data.status === 200) {
      localStorage.clear();
      navigate("/login");
    }
  }
  return (
    <>

        <Container>
          <div className="brand">
          </div>
          <div className="contacts">
            <div
            >

              <div className="user_name">
                <h3>Welcome {currentUserName}</h3>
              </div>
            </div>
            {contacts.map((contact, index) => {
              return (
                <div
                  key={contact._id}
                  className={`contact ${index === currentSelected ? "selected" : ""
                    }`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
               
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
            <div
              key={'logout'}
      
              onClick={() => Logout()}
            >
              <div className="user_name">
                <h3>Logout</h3>
              </div>
            </div>

          </div>

        </Container>
    </>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-rows: 5% 80% 15%;
  overflow: hidden;
  background-color: #FF5733;
  


 
`;
