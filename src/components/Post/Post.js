import './Post.css';
import { useState , useEffect } from 'react';
import ProfileModal from '../profileModal/profileModal';
import CommentsModal from "../commentsModal/commentsModal";

export function Post({ avatar, name, lastName,
 title, caption, imageUrl, commentOwnerName,
 comment,commentOwnerLastName, commentOwnerAvatar,
 likeCounts, commentDate, tag1,tag2,tag3 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const post = "post";

  return (
    <div className={`${post} ${tag1} ${tag2} ${tag3} `}>
      <div className="post__header">
        <div className="post__avatar">
        <button className="avatarButton" onClick={() => setIsOpen(true)}>
        <img className="image__avatar" src={avatar} />
        </button>
        {isOpen && <ProfileModal avatar={avatar} name={name} lastName={lastName} setIsOpen={setIsOpen} />}
        </div>
        <h3>{name}</h3>
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
        <button className="comments" onClick={() => setIsOpen2(true)}>
        1 comentario
        </button>
        {isOpen2 && <CommentsModal 
          avatar={commentOwnerAvatar} 
          name={commentOwnerName} 
          lastName={commentOwnerLastName} 
          comment={comment}
          date={commentDate}
          setIsOpen2={setIsOpen2}
          postImage={imageUrl}
          postText={caption} />}
        
        <button className="Like">
        <img className="Heart" src="https://upload.wikimedia.org/wikipedia/commons/4/42/Love_Heart_SVG.svg"></img>{likeCounts}</button>
        </div>
        
      </div>
        
    </div>
  );
}

 