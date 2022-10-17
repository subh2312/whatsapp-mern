import SearchOutlined from "@mui/icons-material/SearchOutlined";
import AttachFile from "@mui/icons-material/AttachFile";
import MoreVert from "@mui/icons-material/MoreVert";
import { Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MicIcon from "@mui/icons-material/Mic";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import db from "./firebase";

import "./Chat.css";
import SendIcon from "@mui/icons-material/Send";
function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snap) => setRoomName(snap.data().name));
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last Seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && "chat__reciever"}`}>
          <span className="chat__name">Subh</span>
          Hey Guys
          <span className="chat__timestamp">10:53</span>
        </p>
        <p className="chat__message">Hey Guys</p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter message"
          />
          <button
            className="hiddenButton"
            onClick={sendMessage}
            type="submit"
          ></button>
          <IconButton>
            <SendIcon />
          </IconButton>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
