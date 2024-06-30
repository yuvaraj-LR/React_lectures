import { Component } from "react";

class ComponentB extends Component {
    constructor() {
        super();
        this.state = {
            name : "Component-B",
            userNames: []
        }
    }

    static getDerivedStateFromProps() {
        console.log("I am from ComponentB getDerviedState.");
        return null;
    }

    async componentDidMount() {
        console.log(`I am from ComponentB componentDidMount.`);
        let response = [];
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            response = data.map(user => user.username);

            this.setState({
                userNames: response
            })
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        console.log(response, `resppp...`);
    }

    render() {
        console.log("I am from ComponentB render.");
        const {userNames} = this.state;

        return (
            <>
                <h1>I am from {this.state.name}</h1>

                <ul>
                    {userNames.map(x => (
                        <li>{x}</li>
                    ))}
                </ul>

            </>
        )
    }
}

export default ComponentB;