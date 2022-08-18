import React from "react";
import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {
  const [modalOpen, setModelOpen] = useState(false);

  function openModal() {
    setModelOpen(true);
  }
  function closeModal() {
    setModelOpen(false);
  }

  return (
    <div className="card">
      <h1>{props.title}</h1>
      <div className="actions">
        <button className="btn" onClick={openModal}>
          Open Modal
        </button>
      </div>
      {modalOpen && <Modal onCancel={closeModal} onConfirm={closeModal} />}
      {modalOpen && <Backdrop onCancel={closeModal} />}
    </div>
  );
};

export default Todo;
