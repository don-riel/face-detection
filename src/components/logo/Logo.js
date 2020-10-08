import React from 'react';
import Tilt from 'react-tilt'

import face from './face.jpg';
import './logo-styles.css';

const Logo = () => {
    return (
        <div className='logo'>
            <Tilt className="Tilt" options={{ max : 50 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner"><img src={face} alt='logo'></img></div>
            </Tilt>
        </div>
    )
}

export default Logo;