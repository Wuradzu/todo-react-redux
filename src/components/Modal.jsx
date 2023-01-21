import React, { useState } from "react";

const Modal = ({ setShowModal, updateTask, handleTask, currentTask }) => {
  const [newTask, setNewTask] = useState(updateTask);
  return (
    <div
      onClick={() => setShowModal(false)}
      className="fixed left-0 top-0 bottom-0 right-0 bg-transparentBlack z-[100] flex items-center justify-center"
    >
      <div
        className="bg-white p-4 flex-col rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="text"
          className="border-Gray border-2 outline-none rounded-md p-2"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <div className="flex justify-between pt-2">
          <button
            onClick={() => setShowModal(false)}
            className="bg-Tangaroa rounded-md px-3 py-2 text-white opacity-90 hover:opacity-100"
          >
            Cancel
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (newTask.trim().length === 0) {
                alert("Add text");
                return;
              }
              handleTask(newTask);
            }}
            className="bg-sunsetOrange rounded-md px-3 py-2 text-white opacity-90 hover:opacity-100"
          >
            {currentTask ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
