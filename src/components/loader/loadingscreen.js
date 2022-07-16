import React from 'react';
import loading from '../../assets/images/rocket.gif';
const loadingScreen = () => {
    return (
        <div className="container" style={{ "textAlign" : 'center' , 'marginTop' : '4%'}}>
            <img src={loading} alt="loading" />
            <br />
            <br />
            <h3 className='custom-subtitle'>Loading ...</h3>
        </div>
    );
}
export default loadingScreen;