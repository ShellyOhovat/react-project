import React from 'react';
require('./styles/stylesheet.css');

class Arrow extends React.Component {
    constructor()
    {
        super();
    }

    render() {
        var className = this.props.to + "-button";
        return <div className={className} onClick={this.props.move}></div>
    }
}

export default Arrow;