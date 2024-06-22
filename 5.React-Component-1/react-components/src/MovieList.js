import { Component } from "react";
import MovieCard from "./MovieCard"

class MovieList extends Component {
    constructor() {
        super()
        this.state = {
            movies: [
                {
                    title:"The Avengers",
                    plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                    price: 199,
                    rating: 5,
                    starCount: 0,
                    isFav: false,
                    isInAddedCart: false
                },
                {
                    title:"Iron Man",
                    plot: "I am the Iron man who is saving the earth from thanos.",
                    price: 399,
                    rating: 3,
                    starCount: 0,
                    isFav: false,
                    isInAddedCart: false,
                },
                {
                    title:"Loki",
                    plot: "This is Loki, he is the god of ",
                    price: 199,
                    rating: 5,
                    starCount: 0,
                    isFav: false,
                    isInAddedCart: false,
                }
            ]
        }
    }

    handleIncreaseStar = (movie) => {
        const {movies} = this.state;

        const mid = movies.indexOf(movie);

        if(movies[mid].starCount >= 5) return;

        movies[mid].starCount += 0.5;
        
        this.setState({
            movies: movies
        })
    }

    handleDecreaseStart = (movie) => {
        const {movies} = this.state;

        const mid = movies.indexOf(movie);

        if(movies[mid].starCount <= 0) return;

        movies[mid].starCount -= 0.5;
        
        this.setState({
            movies: movies
        })
    }

    render() {
        const movies = this.state.movies;

        return (
            <>
                {movies.map((x, i) => (
                    <div key={i}>
                        <MovieCard movie={x} addStars={this.handleIncreaseStar} removeStars={this.handleDecreaseStart}/>
                    </div>
                ))}
            </>
        )
    }
}

export default MovieList;