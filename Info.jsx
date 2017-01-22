import React from 'react';
require('./styles/stylesheet.css');

class Info extends React.Component {

    render() {
        var movie = this.props.movie;
        return <div className="info">
            <h1>
                {movie.name}
                <span></span>
            </h1>
            <h2>
                {movie.date}
            </h2>
        </div>
    }

}

export default Info;