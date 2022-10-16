import { Header } from "../components/Header/Header";
import { Post } from "../components/Post/Post";
import { useState, useEffect } from "react";
import axios from "axios";
//import PostsList from "../components/postsList/postsList";

export function Home({posts, comments}) {
  return (
    <>
    <Header />

    <div className="timeline">
        {posts.map((post) => (
          <Post
            avatar={post.owner.picture}
            username={post.owner.firstName}
            caption={post.text}
            imageUrl={post.image}
            commentCounts={post.commentCounts}
            likeCounts={post.likes}
            tag1={post.tags[0]}
            tag2={post.tags[1]}
            tag3={post.tags[2]}
          />
          
        ))}
      </div>
    </>
  );
}
