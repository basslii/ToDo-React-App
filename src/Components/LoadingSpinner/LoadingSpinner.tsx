import React from 'react';
import { Fragment, } from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ()  => {

    return(
        <React.StrictMode>
            <Fragment>
                <div className="spinner-container">
                    <div className="loading-spinner"></div>
                </div>
            </Fragment>
        </React.StrictMode>
    )
}

export default LoadingSpinner;