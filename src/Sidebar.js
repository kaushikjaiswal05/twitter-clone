import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import VerifiedIcon from "@mui/icons-material/Verified";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

function Sidebar() {
    return(
        <div className="sidebar">
            {/* Twitter Icons */}
            <TwitterIcon className="sidebarTwitterIcon"/>

            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
            <SidebarOption Icon={ListAltIcon} text="List"/>
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
            <SidebarOption Icon={VerifiedIcon} text="Verified"/>
            <SidebarOption Icon={PersonOutlineIcon} text="Profile"/>
            <SidebarOption Icon={MoreHorizIcon} text="More"/>

            {/* Tweet button */}
            <Button variant="outlined" className="sidebarTweet" fullWidth>Tweet</Button>

        </div>
    );
}

export default Sidebar;