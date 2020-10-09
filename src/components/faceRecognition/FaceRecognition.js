import React from 'react';

import './faceRecognition-styles.css'
import FaceBox from '../faceBox/FaceBox';

const FaceRecognition = ({imageUrl, data}) => {
    return (
        <div className={`image-wrapper ${data.length === 0 ? `scanner ${imageUrl.length  ? 'toggle-scanner' : ''}` : ''}`}
        >
            <img 
                id='inputimage'
                src={imageUrl} 
                alt=''            
            />
            <FaceBox data={data}/> 
        </div>
        
    )
}

export default FaceRecognition;

