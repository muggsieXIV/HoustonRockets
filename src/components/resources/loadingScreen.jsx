import React from 'react';
import rocketsLogo from '../../media/images/rocketsLogo.png';
const LoadingScreen = () => {
    
    return (
        <div className="loading">
            <img src={ rocketsLogo } alt="" />
            <h1 className="loading-text">Loading<span>.</span><span>.</span><span>.</span></h1>
        </div>
    )
}

export default LoadingScreen;
