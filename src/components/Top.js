import React from 'react';
import image from '../assets/images/boy.png';

import './ComponentStyles.css';

const Top = () => {
    return (
        <div className="heroWrapper">
            <img src={image} alt="Boy" className="heroImage"/>
        </div>
    )
}

export default Top
