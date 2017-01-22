import React from 'react';
import StageItem from './StageItem.jsx'
import Pointer from './Pointer.jsx'
import Arrow from './Arrow.jsx'
require('./styles/stylesheet.css');

class Stage extends React.Component {
    constructor()
    {
        super();
    }
    render() {
        var movies = this.props.movies;
        return <section className="stage" >
            <ul className="ul-stage">
                {movies.map(movie =>
                    <StageItem key={movie.index} movie={movie} currentMovie={this.props.currentMovie}/>)}
            </ul>
            <Pointer/>
            <Arrow to="left" move={this.props.moveTo.bind(this,"left")}/>
            <Arrow to="right" move={this.props.moveTo.bind(this, "right")}/>
        </section>
    }
}

export default Stage;