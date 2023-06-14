import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./Tweetbox.css";
import db from "./firebase";

function TweetBox() {

  const [tweet, setTweet] = useState("");
  const [tweetImage, setTweetImage] = useState("");
 
  const postTweet = (e)  => {
    e.preventDefault();
    db.collection("posts").add({
          displayName: "Kaushik Jaiswal",
          userName: "kaushikJaiswal19",
          verified: true,
          text: tweet,
          image: tweetImage,
          avatar: "https://pbs.twimg.com/profile_images/1583908425292951553/JxTDoFFh_400x400.jpg"
        });
    setTweet("");
    setTweetImage("");
  };

  return (
    <div className="tweetbox">
        <form>
            <div className="tweetboxInput">
                <Avatar src="https://pbs.twimg.com/profile_images/1583908425292951553/JxTDoFFh_400x400.jpg">Profile Picture</Avatar>
                <input 
                  onChange={(e) => setTweet(e.target.value)}
                  value={tweet} 
                  placeholder="What is happening?!" 
                  type="text"   
                />
            </div>
            <input className="tweetboxImageInput" 
              placeholder="Enter image url" 
              type="text"
              value={tweetImage} 
              onChange={(e) => setTweetImage(e.target.value)}
            />
            <Button className="tweetboxButton" onClick={postTweet} type="submit">Tweet</Button>
        </form>
    </div>
  );
}

export default TweetBox;
