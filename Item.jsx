import React from 'react';
import Details from './Details.jsx'
require('./styles/stylesheet.css');

class Item extends React.Component {

    render() {
        var movie = this.props.movie;
        return  <li key={movie.index} onClick={this.props.changeActive} className="menu-item">
            <img src={movie.src}/>
            <Details movie={movie}/>
        </li>
    }
}

export default Item;