import React from 'react';
require('./styles/stylesheet.css');

class Pointer extends React.Component {

    render() {
        return <div className="pointer">
            <div className="left-triangle"></div>
            <div className="right-triangle"></div>
        </div>
    }
}

export default Pointer;