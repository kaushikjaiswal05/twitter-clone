import React from "react";
import "./Widgets.css"
import SearchIcon from "@mui/icons-material/Search";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed";
import { Button } from "@mui/material";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgetsInput">
        <SearchIcon className="widgetsSearchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="getVerified">
        <h2>Get Verified</h2>
        <p>Subscribe to unlock new features.</p>
        <Button className="getVerifiedButton">Get Verified</Button>
      </div>
      <div className="widgetsWidgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1668235073483849734"} />
        <TwitterTimelineEmbed 
            sourceType="profile"    
            screenName="elonmusk"
            options={{height : 400}}    
        />   
        <TwitterShareButton url={"https://twitter.com/KaushikJaiswal19"} options={{text : "#reactjs twitter-clone", via:"KaushikJaiswal19"}} /> 
      </div>
    </div>
  )
}

export default Widgets;
