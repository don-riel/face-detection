import React from 'react';
import './App.css';
import Clarifai from 'clarifai'
import Particles from 'react-particles-js';

import ImageLinkForm from './components/image-link-form/ImageLinkForm'
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
      output: [],
      
    }
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
      console.log(typeof response)
      this.setState({output: response.outputs[0].data.regions})
      
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
      <div className="main">
        <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtonSubmit = {this.onSubmit}  
        />  
      </div>
      <p>{this.state.output.length ? `There ${this.state.output.length > 1 ? 'are': 'is'} ${this.state.output.length} ${this.state.output.length > 1 ? 'faces': 'face'} detected!` : ''}</p>
      <FaceRecognition data={this.state.output} imageUrl={this.state.imageUrl} />
      
    </div>
  );
  };
}

  
export default App;
