import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import "./Feed.css";
import Post from "./Post";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data() ))
        ))
    }, []); 

    return (
        <div className="feed">
            <div className="feedHeader">
                <h1>Home</h1>
            </div> 
            <TweetBox />
            <FlipMove>
                {posts.map(post => (
                    <Post
                        key={post.text}
                        displayName={post.displayName}
                        userName={post.userName}
                        verified={post.verified}
                        text={post.text}
                        image={post.image}
                        avatar={post.avatar}
                    />
                ))}
            </FlipMove>
        </div>
    );
}

export default Feed;
