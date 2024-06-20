import React from "react";

class MovieCard extends React.Component {

    constructor() {
        super()
        this.state = {
            title:"The Avengers",
            plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
            price: 199,
            rating: 5,
            starCount: 0,
            isFav: false,
            isInAddedCart: false,
        }
        // this.increaseStar = this.increaseStar.bind(this)
        // this.decreaseStar = this.decreaseStar.bind(this)
    }

    increaseStar = () => {
        // Form 1
        // this.setState({
        //     starCount: this.state.starCount + 0.5
        // })

        // Form 2
        this.setState((prevState) => {
            return {
                starCount:prevState.starCount + 0.5
            }
        }) 
    }

    decreaseStar = () => {
        this.setState({
            thisstarCount: this.state.starCount - 0.5
        })
    }

    handleFavouriteClick = () => {
        this.setState({
            isFav: !this.state.isFav
        })
    }

    handleCartClick = () => {
        this.setState({
            isInAddedCart: !this.state.isInAddedCart
        })
    }

    render() {
        const {title, plot, price, rating, starCount, isFav, isInAddedCart} = this.state;

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
                                    <img className="str-btn" alt="Decrease" src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" onClick={this.decreaseStar} />
                                    <img className="stars" alt="stars"  src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" />
                                    <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" onClick={this.increaseStar} />
                                    <span className="starCount">{starCount}</span>
                                </div>
                                
                                {/* {isFav ? <button className="unfavourite-btn" onClick={() => this.favourite(false)} >Unfavourite</button> : <button className="favourite-btn" onClick={() => this.favourite(true)}>Favourite</button>} */}

                                <button className={isFav ? "unfavourite-btn" : "favourite-btn"} onClick={this.handleFavouriteClick}>{isFav ? "unfavourite" : "favourite"}</button>

                                <button className={isInAddedCart ? "unfavourite-btn" : "cart-btn"} onClick={this.handleCartClick}>{isInAddedCart ? "View Cart" : "Add Cart"}</button>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default MovieCard;
