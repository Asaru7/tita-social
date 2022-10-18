import { Header } from "../components/Header/Header";
import { Post } from "../components/Post/Post";
import { Filter } from "../components/Filter/Filter";
import { useState, useEffect } from "react";
import axios from "axios";
//import PostsList from "../components/postsList/postsList";

export function Home({posts, comments}) {
  return (
    <>
    <Header />
    {comments.map((comments => (
    <div className="timeline">
    <Filter />
        {posts.map((post) => (
          <Post
            avatar={post.owner.picture}
            name={post.owner.firstName}
            lastName={post.owner.lastName}
            caption={post.text}
            imageUrl={post.image}
            commentCounts={post.commentCounts}
            likeCounts={post.likes}
            tag1={post.tags[0]}
            tag2={post.tags[1]}
            tag3={post.tags[2]}
            commentOwnerName={comments.owner.firstName}
            comment={comments.message}
            commentOwnerLastName={comments.owner.lastName}
            commentOwnerAvatar={comments.owner.picture}
            commentDate={comments.publishDate}
          />
        ))}
      </div>
      )))}
    </>
  );
}
