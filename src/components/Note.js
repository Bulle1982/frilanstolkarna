import React from "react";
import notes from "../termer";

console.log(termer);


function Note(props) {
  return (
    <div className="note">
      <h1>{props.ord}</h1>
      <p>{props.mening}</p>
    </div>
  );
}

export default Note;
