import React from 'react';
require('./styles/stylesheet.css');

class Details extends React.Component {

    render() {
        var movie = this.props.movie;
        return <div className="details">
            <span>{movie.date}</span>
            <h4>{movie.name}</h4>
        </div>
    }

}

export default Details;