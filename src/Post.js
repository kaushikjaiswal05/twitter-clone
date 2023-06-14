import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import BarChartIcon from "@mui/icons-material/BarChart";

const Post = forwardRef(({displayName, userName, verified, text, image, avatar}, ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="postAvatar">
        <Avatar src={avatar} />
      </div>
      <div className="postBody">
        <div className="postHeader">
            <div className="headerText">
                <h3>{displayName}
                    <span className="userName">{verified && <VerifiedIcon className="verifiedBadge" />}@{userName}</span>
                </h3>
            </div>
            <div className="headerDescription">
                <p>{text}</p>
            </div>
        </div>  
        <img src={image} alt="postImage" /> 
        <div className="postFooter">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <BarChartIcon fontSize="small" />
            <IosShareIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
});

export default Post;
