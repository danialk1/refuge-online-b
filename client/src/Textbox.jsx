import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Textbox(props) {
  const [messages, setMessages] = useState("");
  const getMessages = () => {
    axios
      .get("/messages", {})
      .then((res) => {
        setMessages(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getMessages();
  return(
       <div className="Container" style={{ color: 'white' }} dangerouslySetInnerHTML={{__html:
        messages.data}}></div>
    );
}
