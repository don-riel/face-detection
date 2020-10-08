import React from 'react';

import './imageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p>This will detect any face in your picture.</p>
            <p>Try this example url:</p>
            <p>https://worththechaos.com/wp-content/uploads/2016/09/bigstock-135849041.jpg</p>
            <div className='form'>
                <input onChange={onInputChange} type='text' placeholder='Paste image url here'

                />
                <button onClick={onButtonSubmit}>Detect</button>
            </div>
           
        </div>
    )
}

export default ImageLinkForm;