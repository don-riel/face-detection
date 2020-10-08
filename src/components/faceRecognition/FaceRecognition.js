import React from 'react';

import './faceRecognition-styles.css'

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className='image-wrapper'>
            <img 
                id='inputimage'
                src={imageUrl} 
                alt=''
            />
            <div 
                className='bounding-box'
                style= {{
                    top: box.topRow,
                    right: box.rightCol,
                    bottom: box.bottomRow,
                    left: box.leftCol
                }}
            >
            </div>
        </div>
    )
}

export default FaceRecognition;