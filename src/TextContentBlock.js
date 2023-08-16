import React from "react";
import "./TextContentBlock.scss";

export default function TextContentBlock(props) {
  return (
    <div className="TextContentBlock">
      <h2 className="TextContentBlock-title">{props.title}</h2>
      <p className="TextContentBlock-description TextContentBlock-additional-description">
        {props.additionalDescription}
      </p>

      <div className="TextContentBlock-container">
        <div className="TextContentBlock-left">
          <h3 className="TextContentBlock-subtitle">{props.subtitle}</h3>
          <p className="TextContentBlock-description">
            {props.description && typeof props.description === "function"
              ? props.description()
              : props.description}
          </p>
        </div>

        <div className="TextContentBlock-right">{props.children}</div>
      </div>
    </div>
  );
}
