import React from "react";

export default class Input extends React.Component{

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: ""
        }
    }

    changeFirstName = (e) => {
        this.setState(
            {firstName: e.target.value}
        )
    }
    
    changeLastName = (e) => {
        this.setState(
            {lastName: e.target.value}
        )
    }

    componentDidMount() {
        document.title = this.state.firstName + " " + this.state.lastName
    }

    componentDidUpdate() {
        document.title = this.state.firstName + " " + this.state.lastName
    }

    render(){
        return(
            <>
            <div className="section">
                <Row label="Name">
                        <input className="input" value={this.state.firstName} onChange={this.changeFirstName}/>
                </Row >
                <Row label="Last Name">
                        <input className="input" value={this.state.lastName} onChange={this.changeLastName}/>
                </Row >
            </div>
    
            <h2>Hello, {this.state.firstName} {this.state.lastName}</h2>
            
            </>
            )

    }
   
    }


function Row(props){
    const{label} = props;
    return(
        <>
        <lable>{label}<br/></lable>
        {props.children}
        <hr />
        </>
    )
}
