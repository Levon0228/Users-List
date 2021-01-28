/** @format */

import React from "react";
import styles from "./DeleteModal.module.css";
import Modal from "react-modal";

const DeleteModal = (props) => {
  Modal.setAppElement(document.getElementById("deleteModalContanier")); // Todo what this?

  const closeModal = () => {
    props.setIsOpenDeleteModal(false)
  };


  const deletePost = () => {
    props.setisDelete(true)
    closeModal();
  };

  return (
    <div id="deleteModalContanier">
      <Modal
        isOpen={props.deleteModalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}>
        <h3>Delete Popup</h3>
        <div className={styles.text}>Are you sure you want to delete the post</div>
        <div className={styles.buttonsContanier}>
          <button
            onClick={deletePost}
            id="delete"
            className={`${styles.Btn} ${styles.deleteBtn} ${styles.deleteBtn}`}>
            Delete
          </button>
          <button onClick={closeModal} className={styles.Btn}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
