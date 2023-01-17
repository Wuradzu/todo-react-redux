import React from "react";
import empty from "../assets/empty.jpg";

const Empty = () => {
  return (
    <div>
      <img src={empty} alt="empty todo list" className="absolute left-0 z-[-1]" />
      <p className="text-center font-semibold text-4xl md:text-8xl">
        To Do is empty....
      </p>
    </div>
  );
};

export default Empty;
