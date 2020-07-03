import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
// import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "2549f4a7e19049dba3d5e1f514be3a01",
});

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    shape: {
      type: "circle",
    },
  },
};
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: "",
      box: {},
    };
  }
  calculateFaceLoaction = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };
  displayFaceBox = (box) => {
    this.setState({ box: box });
    console.log(box);
  };
  onInputChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  onSubmit = () => {
    this.setState({
      imageURL: this.state.input,
    });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) =>
        this.displayFaceBox(this.calculateFaceLoaction(response)).catch((err) =>
          console.log(err)
        )
      );
  };
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        {/* <Logo /> */}
        <Rank />
        <ImageLinkForm
          onButtonSubmit={this.onSubmit}
          onInputChange={this.onInputChange}
        />
        <FaceRecognition box={this.state.box} imageURL={this.state.imageURL} />
      </div>
    );
  }
}

export default App;
