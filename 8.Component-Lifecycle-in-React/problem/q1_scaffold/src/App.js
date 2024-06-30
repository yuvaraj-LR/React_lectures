import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  // Use the required lifecycle methods here
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((resp) => resp.json())
      .then((photos) => this.setState({ photos, loading: false }));
  }

  render() {
    // Display loading status here
    
    return (
      <div className="App">
        {this.state.loading ? <p>loading...</p> : 
          this.state.photos.map((photo) => {
            return <Image key={photo.id} photo={photo} />;
          })
        }
      </div>
    );
  }
}
