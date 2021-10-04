import React from 'react';
import error from '../../images/error.gif'
import './Error.css'

const Error = () => {
    return (
        <div>
            <img className="error-img my-5" src={error} alt="" srcset="" />
        </div>
    );
};

export default Error;