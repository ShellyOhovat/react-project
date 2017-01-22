import React from 'react';
import Container from './Container.jsx'
require('./styles/stylesheet.css');

class StageItem extends React.Component {

    render() {
        var movie = this.props.movie;
        return <li key={movie.index} className={(this.props.currentMovie == movie.index)? 'movie active': 'movie'}>
            <div>
                <img src={movie.src} width="100%" height="580px"/>
            </div>
            <Container movie={movie}/>
        </li>
    }
}

export default StageItem;