import { Component } from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies(),
      cartCount: 0
    };
  }

  handleIncreaseStar = (movie) => {
    const { movies } = this.state;

    const mid = movies.indexOf(movie);

    if (movies[mid].starCount >= 5) return;

    movies[mid].starCount += 0.5;

    this.setState({
      movies: movies,
    });
  };

  handleDecreaseStar = (movie) => {
    const { movies } = this.state;

    const mid = movies.indexOf(movie);

    if (movies[mid].starCount <= 0) return;

    movies[mid].starCount -= 0.5;

    this.setState({
      movies: movies,
    });
  };

  handleTogglingForFavouriteButton = (movie) => {
    const { movies } = this.state;

    const mid = movies.indexOf(movie);

    movies[mid].isFav = !this.state.movies[mid].isFav;

    this.setState({
      movies: movies,
    });
  };

  handleTogglingForCartButton = (movie) => {
    const { movies } = this.state;
    let {cartCount} = this.state;

    const mid = movies.indexOf(movie);

    movies[mid].isInAddedCart = !this.state.movies[mid].isInAddedCart;

    if(!this.state.movies[mid].isInAddedCart) {
      cartCount--;
    } else {
      cartCount++;
    }

    this.setState({
      movies: movies,
      cartCount
    });
  };

  render() {
    const movies = this.state.movies;
    const cartCount = this.state.cartCount;

    return (
      <>
        <Navbar cartCount={cartCount}/>
        <MovieList movies={movies} addStars={this.handleIncreaseStar} removeStars={this.handleDecreaseStar} onClickFav={this.handleTogglingForFavouriteButton} onClickCart={this.handleTogglingForCartButton} />
      </>  
    )
  }
}

export default App;