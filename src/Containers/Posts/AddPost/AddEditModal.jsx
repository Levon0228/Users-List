/** @format */

import React from "react";
import styles from "./AddEditModal.module.css";
import Modal from "react-modal";

const AddEditModal = (props) => {
  Modal.setAppElement(document.getElementById("modalContanier"));

  const afterOpenModal = () => {
    console.log("modal IS OPENED");
  };

  const closeModal = () => props.setIsOpen(false);

  const handlerKeyDown = () => {
    const elems = document.querySelectorAll(".validate");
    const button = document.getElementById("publish");
    for (const elem of elems) {
      if (!!elem.value) {
        button.classList.remove(`${styles.disabled}`);
      } else {
        button.classList.add(`${styles.disabled}`);
        return;
      }
    }
  };

  const publishPost = () => {
    const newPostBody = document.getElementById("newPostBody");
    const newPostTitle = document.getElementById("newPostTitle");
    const userId = Number(props.userId);
    props.setSendData({ body: newPostBody.value, title: newPostTitle.value, userId });
    props.setIsSend(true);
    closeModal();
  };

  return (
    <div id="modalContanier">
      <Modal
        isOpen={props.modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={styles.modal}>
        <h3>Addind New Post</h3>
        <input
          type="text"
          id="newPostTitle"
          className={`${styles.postTitle} validate`}
          placeholder="Post Title"
          onKeyUp={handlerKeyDown}
        />
        <textarea
          rows="5"
          cols="33"
          id="newPostBody"
          className={`${styles.postBody} validate`}
          placeholder="Post Body"
          onKeyUp={handlerKeyDown}></textarea>
        <div className={styles.buttonsContanier}>
          <button
            onClick={publishPost}
            id="publish"
            className={`${styles.Btn} ${styles.publishBtn} ${styles.disabled} `}>
            Publish
          </button>
          <button onClick={closeModal} className={styles.Btn}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddEditModal;
