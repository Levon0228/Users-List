/** @format */

import React from "react";
import styles from "./AddEditModal.module.css";
import Modal from "react-modal";

const AddEditModal = (props) => {
  Modal.setAppElement(document.getElementById("modalContanier"));
  const { isEdit } = props;
  const { post } = props;
  const closeModal = () => {
    props.setIsOpen(false);
    props.setIsEdit(false);
  };

  const changeHandler = (e) => {
    const { target } = e;
    const { name } = target;
    const { value } = target;
    const { updatedData } = props;
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
    const a = { ...updatedData, ...{ [name]: value } }
    console.log(a)

    props.setUpdatedData(a);
  };

  const publishPost = () => {
    const newPostBody = document.getElementById("newPostBody");
    const newPostTitle = document.getElementById("newPostTitle");
    const userId = Number(props.userId);
    props.setSendData({
      body: newPostBody.value,
      title: newPostTitle.value,
      userId,
    });
    isEdit ? props.setIsUpdate(true) : props.setIsSend(true);
    closeModal();
  };

  return (
    <div id="modalContanier">
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}>
        {isEdit ? <h3>Edit Post</h3> : <h3>Addind New Post</h3>}
        <input
          type="text"
          id="newPostTitle"
          className={`${styles.postTitle} validate`}
          placeholder="Post Title"
          onChange={changeHandler}
          defaultValue={isEdit ? post.title : null}
          name="title"
        />
        <textarea
          rows="5"
          cols="33"
          id="newPostBody"
          name="body"
          className={`${styles.postBody} validate`}
          placeholder="Post Body"
          defaultValue={isEdit ? post.body : null}
          onChange={changeHandler}></textarea>
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
