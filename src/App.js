import React from 'react';
import './App.css';
import Clarifai from 'clarifai'
import Particles from 'react-particles-js';

import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/image-link-form/ImageLinkForm'
import Rank from './components/rank/Rank'
import FaceRecognition from './components/faceRecognition/FaceRecognition'



const app = new Clarifai.App({
  apiKey: '5a9a523ce0684b309ca20b1362ecf2a0'
 });

const particleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
    }
  }

  calculateFaceLocation = (data) => {
    const location = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height =  Number(image.height);
    return {
      leftCol: location.left_col * width,
      topRow: location.top_row * height,
      rightCol: width - (location.right_col * width),
      bottomRow: height - (location.bottom_row *  height)
    }
  }

  displayFaceBox = (box) => {
    // console.log(box)
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({input:event.target.value });
  }

  onSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      // THE JPG
      this.state.input
    )
    .then((response) => {
      console.log(response)
      this.displayFaceBox(this.calculateFaceLocation(response));
    })
    .catch((err) => {
      console.log(err);
    });
  };

  render() {
    return (
    <div className="App">
      <Particles className='particles'
        params={particleOptions}
      />
      <Navigation />
      <div className="main">
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtonSubmit = {this.onSubmit}  
        />  
      </div>
      <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      
    </div>
  );
  };
}

  
export default App;
