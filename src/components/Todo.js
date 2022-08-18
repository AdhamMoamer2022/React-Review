import React from "react";
import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {
  const [modalOpen, setModelOpen] = useState(false);

  return (
    <div className="card">
      <h1>{props.title}</h1>
      <div className="actions">
        <button className="btn btn-primary">Add Todo</button>
      </div>
      {modalOpen && <Modal />}
      {modalOpen && <Backdrop />}
    </div>
  );
};

export default Todo;
