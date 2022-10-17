import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import SidebarChat from "./SidebarChat";
import db from "./firebase";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snap) =>
      setRooms(
        snap.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar sx={{ width: 56, height: 56 }} />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start a new chat" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
