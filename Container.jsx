import React from 'react';
import Button from './Button.jsx'
import Info from './Info.jsx'
require('./styles/stylesheet.css');

class Container extends React.Component {

    render() {
        return <div className="container">
            <Info movie={this.props.movie}/>
            <ul className="buttons">
                <li className={(this.props.movie.haveTrailer)? '': 'hide'}>
                    <Button value="watch the trailer"/>
                </li>
                <li>
                    <Button value="visit official site"/>
                </li>
            </ul>
        </div>
    }
}

export default Container;