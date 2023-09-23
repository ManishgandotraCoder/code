import React, { useState, useEffect } from "react";
import './index.css'
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem('userinfo')
      ).username
    );
  }, []);
  return (
    <>
      <div className="display">

        <h1>
          Welcome, <span>{userName}!</span>
        </h1>
        <h3>Please select a chat to Start messaging.</h3>
      </div>   </>

  );
}

