import React from 'react';
import './Loader.scss';


class Loader extends React.Component {
    render() {
        return (
            <div className="spinner">
                <div className="dot1"></div>
                <div className="dot2"></div>
            </div>
        );
    }
}

export default Loader;