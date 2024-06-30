import { Component } from "react";
import ComponentB from "./ComponentB";

class ComponentA extends Component {
    constructor() {
        super();
        this.state = {
            name : "Component-A"
        }
    }

    static getDerivedStateFromProps() {
        console.log("I am from ComponentA getDerviedState.");
        return null;
    }

    componentDidMount() {
        console.log("I am from ComponentA componentDidMount.");
    }

    render() {
        console.log("I am from ComponetA render.");

        return (
            <>
                <h1>I am from ComponentA</h1>

                <ComponentB />
            </>
        )
    }
}

export default ComponentA;