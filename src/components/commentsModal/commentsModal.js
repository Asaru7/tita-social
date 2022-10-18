import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const CommentsModal = ({ setIsOpen2, name, lastName, avatar, comment, postImage, postText}) => {

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen2(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
              <img className={styles.postImage} src={postImage}/>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen2(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <h3 className={styles.postText}>{postText}</h3>
          <div className={styles.modalContent}>
          
          <img src={avatar} className={styles.heading}/>
          <div className={styles.commentOwner}>
          <h1 className={styles.name}>{name}{lastName}</h1>
           <h4 className={styles.comment}>{comment}</h4>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentsModal;