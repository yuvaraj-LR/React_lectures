import { Component } from "react";
import MovieCard from "./MovieCard"

class MovieList extends Component {

    render() {

        const {movies} = this.props;
        const {addStars,removeStars, onClickFav, onClickCart} = this.props;

        return (
            <>
                {movies.map((x, i) => (
                    <div key={i}>
                        <MovieCard movie={x} addStars={addStars} removeStars={removeStars} onClickFav={onClickFav} onClickCart={onClickCart} />
                    </div>
                ))}
            </>
        )
    }
}

export default MovieList;