import React, { useState } from 'react'
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Header.css"
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://tse3.mm.bing.net/th?id=OIP.MmO4vUxc2xQWcV5-qVuRpgHaEK&pid=Api&P=0&h=180"
            alt=""
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="missing"
          src="https://tse2.mm.bing.net/th?id=OIP.j2xbDWdH0yvaTuLZQvICvAHaEK&pid=Api&P=0&h=180"
        />
      </div>
    </div>
  );
}

export default Header
