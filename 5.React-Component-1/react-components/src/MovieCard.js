import React from "react";

class MovieCard extends React.Component {
    render() {
        const {title, plot, price, rating, starCount, isFav, isInAddedCart} = this.props.movie;
        const {addStars, removeStars, onClickFav, onClickCart} = this.props;

        return (
            <>
                <div className="main">
                    <div className="movie-card">
                        <div className="left">
                            <img src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" alt="poster" />
                        </div>

                        <div className="right">
                            <div className="title">{title}</div>
                            <div className="plot">{plot}</div>
                            <div className="price">Rs. {price}</div>

                            <div className="footer">
                                <div className="rating">{rating}</div>

                                <div className="star-dis">
                                    <img className="str-btn" alt="Decrease" src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" onClick={() => removeStars(this.props.movie)} />
                                    <img className="stars" alt="stars"  src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" />
                                    <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" onClick={() => addStars(this.props.movie)} />
                                    <span className="starCount">{starCount}</span>
                                </div>

                                <button className={isFav ? "unfavourite-btn" : "favourite-btn"} onClick={() => onClickFav(this.props.movie)}>{isFav ? "unfavourite" : "favourite"}</button>

                                <button className={isInAddedCart ? "unfavourite-btn" : "cart-btn"} onClick={() => onClickCart(this.props.movie)}>{isInAddedCart ? "View Cart" : "Add Cart"}</button>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default MovieCard;
