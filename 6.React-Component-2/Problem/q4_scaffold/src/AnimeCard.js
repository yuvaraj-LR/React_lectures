import { Component } from "react";

// Complete the AnimeCard Component
class AnimeCard extends Component {
  render() {
    const {name, imagePath, i} = this.props;

    return (
    <div key={i} className="anime-card">
      <img src={imagePath} alt={name} />
        <p>{name}</p>
    </div>
    )
  }
}

export default AnimeCard;
