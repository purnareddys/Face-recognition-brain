import React from "react";
import "./ImageLinkForm.css";
import Tilt from "react-tilt";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"This magic brain will detect faces in your pictures, Give it a try"}
      </p>
      <div className="center">
        <Tilt className="Tilt" options={{ max: 25 }}>
          <div className="Tilt-inner">
            <div className="pa4 br3 shadow-5 center form">
              <input
                onChange={onInputChange}
                type="text"
                className="f4 pa2 w-70 center"
              />
              <button
                onClick={onButtonSubmit}
                className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
              >
                Detect
              </button>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default ImageLinkForm;
