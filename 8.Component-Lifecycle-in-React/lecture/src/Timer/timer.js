import React from "react";

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            time: 0
        };
        this.timer = null

        console.log("I am Timer Constructor.");
    }

    static getDerivedStateFromProps() {
        console.log("I am Timer Derived State Props.");
        return null;
    }

    shouldComponentUpdate() {
        console.log("Should Component Update.");
        return true;
    }
    
    // onClickingButton = () => {
    //     console.log("I have been clicked.");

    //     let {clickedCount} = this.state;
    //     console.log(clickedCount, "clickedCount");

    //     clickedCount += 1;

    //     this.setState({
    //         clickedCount: clickedCount
    //     })
    // }

    render() {
        return (
            <>
                <h1>Timer: </h1>
                {console.log("Render from render()")}

                {/* <div>
                    <button onClick={() => this.onClickingButton()}>Click Me</button>
                    <p>I have been clicked for {this.state.clickedCount}</p>
                </div> */}

                <h1>{new Date(this.state.time * 1000).toISOString().slice(11, 19)}</h1>
            </>
        )
    }

    clearIntervalFunction(prevState) {
        if(prevState.time > 5) {
            clearInterval();
            return ;
        } else {
            return {time: prevState.time + 1}
        }
    }
 
    componentDidMount() {
        console.log("Component Mounted.");
        console.log("__________________");
        
        this.timer = setInterval(() => {
            this.setState((prevState) => (
                {time: prevState.time+1}
            ));
        }, 1000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");

        return null;
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log("Component Updated.");
        console.log("__________________");
        // if(this.state.time == 10) {
        //     clearInterval(this.timer);
        // }

        console.log(prevProps, "propss...");
        console.log(prevState, "states.....");
        console.log(snapShot, "snappp...");
    }

    componentWillUnmount() {
        console.log("Unmountingg......")
        clearInterval(this.timer);
    } 
}

export default Timer;