import './Post.css';
import { useState , useEffect } from 'react';

export function Post({ avatar, user, username, title, caption, imageUrl, commentCounts, likeCounts, tag1,tag2,tag3 }) {
   
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__avatar">
        <img className="image__avatar" src={avatar} />
        </div>
        <h3>{username}</h3>
      </div>

      <img className="post__image" src={imageUrl} alt="" />
      
      <h4 className="post__text">
          {caption}
      </h4>
      
      <div className="post_footer">
      <div className="post_tags">
          <span className="tag">#{tag1}</span>
          <span className="tag">#{tag2}</span>
          <span className="tag">#{tag3}</span>
        </div>
        <div>
        <button>{commentCounts}</button>
        <button className="Like">
        <img className="Heart" src="https://upload.wikimedia.org/wikipedia/commons/4/42/Love_Heart_SVG.svg"></img>{likeCounts}</button>
        </div>
        
      </div>
        
    </div>
  );
}

 