import React from 'react';

import './imageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p>This will detect any face in your picture. Try it!</p>
            <div className='form'>
                <input onChange={onInputChange} type='text' placeholder='Paste image url here' />
                <button onClick={onButtonSubmit}>Detect</button>
            </div>
           
        </div>
    )
}

export default ImageLinkForm;