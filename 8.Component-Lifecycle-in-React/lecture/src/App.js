import {Component} from "react";

// import ComponentA from "./ComponentA";
import Timer from "./Timer/timer";

import StopWatch from "./stopWatch/stopwatch"

class App extends Component {

  constructor() {
    super();
    this.state = {
      text: "I am dummy text.",
      mount: false
    }
  }

  handleMount = () => {
    this.setState((prevState) => ({mount: !prevState.mount}));
  }

  render() {
    return (
        // <>
        //   <h1>Hello, React.</h1>
        //   <p>{this.state.text}</p>

        //   <button onClick={() => this.handleMount()}>{this.state.mount ? "Un-Mount" : "Mount"}</button>

        //   {this.state.mount ? <div><Timer /></div> : null}
        // </>

        <>
            <StopWatch /> 
        </>
    );
  }
}

export default App;
