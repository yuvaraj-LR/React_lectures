import { Component } from "react";

class StopWatch extends Component {
    constructor() {
        super();
        this.state = {
            isRunning: false,
            time: 0
        };
        this.timer = null;
    }

    onClickButton = () => {
        if (this.state.isRunning) {
            clearInterval(this.timer);
        } else {
            this.timer = setInterval(() => {
                this.setState((prevState) => ({ time: prevState.time + 1 }));
            }, 1000);
        }

        this.setState((prevState) => ({
            isRunning: !prevState.isRunning
        }));
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("unmounting...");
    }

    render() {
        return (
            <>
                <h1>Stopwatch</h1>
                <button onClick={this.onClickButton}>
                    {this.state.isRunning ? "Stop" : "Start"}
                </button>
                <h3>{new Date(this.state.time * 1000).toISOString().slice(11, 19)}</h3>
            </>
        );
    }
}

export default StopWatch;