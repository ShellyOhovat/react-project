import React from 'react';
import Menu from './Menu.jsx'
import Stage from './Stage.jsx'
require('./styles/stylesheet.css');

class App extends React.Component {
   constructor()
   {
      super();
      this.state = {
         movies: [],
         currentMovie: 2,
          direction:0
      }
   }
   componentDidMount()
    {
        fetch('./api/movies.json')
            .then((res) => res.json())
            .then((data) => {
                this.setState({movies: data.movies});
            });

    }
    changeCurrent(i)
   {
       var previous = this.state.currentMovie;
       this.setState({direction: this.state.direction + i - previous});
      this.setState({currentMovie: i});

   }

   moveTo(toWhere)
   {
       if((toWhere == "right") && (this.state.currentMovie < this.state.movies.length -1 ))
       {
           this.setState({currentMovie: this.state.currentMovie + 1});
           this.setState({direction: this.state.direction + 1});
       }
       if((toWhere == "left") && (this.state.currentMovie > 0))
       {
           this.setState({currentMovie: this.state.currentMovie - 1});
           this.setState({direction: this.state.direction -1});
       }
   }
   render() {
      let movies = this.state.movies;
      return (
         <div className="carousel">
            <Stage movies={movies} moveTo={this.moveTo.bind(this)} currentMovie={this.state.currentMovie}/>
            <Menu movies={movies} direction={this.state.direction} changeCurrent={this.changeCurrent.bind(this)}/>
         </div>
      );
   }
}

export default App;