import React from 'react';
import Item from './Item.jsx'
require('./styles/stylesheet.css');

class Stage extends React.Component {
    constructor()
    {
        super();
    }
    render() {
        var movies = this.props.movies;
        return <section className="menu" style={{right: 250 * this.props.direction}}>
            <ul>
                {movies.map(movie =>
                    <Item key={movie.index} movie={movie} changeActive={this.props.changeCurrent.bind(this, movie.index)}/>)}
            </ul>
        </section>
    }
}

export default Stage;