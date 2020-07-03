import React from "react";
import "./ImageLinkForm.css";
import Tilt from "react-tilt";
const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3">
        {"This magic brain will detect faces in your pictures, Give it a try"}
      </p>
      <div className="center">
        <Tilt className="Tilt" options={{ max: 25 }}>
          <div className="Tilt-inner">
            <div className="pa4 br3 shadow-5 center form">
              <input type="text" className="f4 pa2 w-70 center" />
              <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
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
