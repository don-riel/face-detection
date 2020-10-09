import React from 'react';
import './App.css';
import Clarifai from 'clarifai'
import Particles from 'react-particles-js';

import ImageLinkForm from './components/image-link-form/ImageLinkForm'
import FaceRecognition from './components/faceRecognition/FaceRecognition'


const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_API_KEY
});

const particleOptions = { //paramas for Particles background component
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
      urlValid: true
      
    }
  }

  onInputChange = (event) => {
    this.setState({input:event.target.value });
  }

  onSubmit = () => {
    this.setState({output: []})   //reset the state
    this.setState({urlValid: true}) //reset the state
    this.setState({imageUrl: this.state.input})
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input
    )
    .then((response) => {
      this.setState({output: response.outputs[0].data.regions})  
    })
    .catch((err) => {
      console.log(err)
      this.setState({urlValid: false})
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
      {this.state.urlValid 
        ? <div>
            <p>{this.state.output.length 
                  ? `There ${this.state.output.length > 1 
                    ? 'are'
                    : 'is'} ${this.state.output.length} 
                      ${this.state.output.length > 1 
                      ? 'faces'
                      : 'face'} detected!` 
                  : ''
                }
            </p>
            <FaceRecognition data={this.state.output} imageUrl={this.state.imageUrl}/>  
          </div> 
        : this.state.urlValid ? ' ' : 'Invalid Url!'} 
    </div>
  );
  };
}

  
export default App;
