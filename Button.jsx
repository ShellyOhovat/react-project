import React from 'react';
require('./styles/stylesheet.css');

class Button extends React.Component {

    render() {
        return <div className="btn">
            <span className="left">{this.props.value}</span>
            <span className="right">
                <span></span>
            </span>
        </div>
    }
}

export default Button;