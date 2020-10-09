import React from 'react';

import './imageLinkForm.css';

const inputClickHandler = (event) => {
    event.target.value = '';
}

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <h2>This will detect any face in your picture.</h2>
            <ul>
                <li>Search for an image then click the image..</li>
                <li>Right click the image then <i>"Copy image address"</i></li>
                <li><i>(Note: Model has issues when image is blurred or cannot load fully..)</i></li>
            </ul>
            <p>Try this example url:</p>
            <p>https://worththechaos.com/wp-content/uploads/2016/09/bigstock-135849041.jpg</p>
            <div className='form'>
                <input onChange={onInputChange} type='text' placeholder='Paste image url here'
                    onClick={inputClickHandler}
                />
                <button onClick={onButtonSubmit}>Detect</button>
            </div>
           
        </div>
    )
}

export default ImageLinkForm;