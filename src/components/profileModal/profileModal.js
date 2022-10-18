import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const ProfileModal = ({ setIsOpen, name, lastName, avatar}) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <img src={avatar} className={styles.heading}/>
            <h1 className={styles.name}>{name} {lastName}</h1>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            La información del perfil deberia ir aqui, la api esta fallando.
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileModal;