import React from "react";

export default function Output({ photo, name, title, fact }) {
  return (
    <div className="output">
      <div className="column">
        <img src={photo ?? ""} alt="profile" />
      </div>

      <div className="column">
        <h1>{name ?? "error"}</h1>
        <p>
          <b>
            <i>{title ?? "error"}</i>
          </b>
        </p>
        <p>
          <b>Fun Fact:</b>
          <br /> {fact ?? "error"}
        </p>
      </div>
    </div>
  );
}
