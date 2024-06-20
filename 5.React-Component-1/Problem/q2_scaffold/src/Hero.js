// Create component here to display the Basic information such as 
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon

import {Component} from "react";

class Hero extends Component {
    render() {
        return (
            <>
                <ul>
                    <li className="bolder">
                        <span>Name: </span> <span>Yuvaraj L R</span>
                    </li>

                    <li>
                        <span>Email: </span> <span>yuvaraj@gmail.com</span>
                    </li>

                    <li>
                        <span>Phone: </span> <span>8428480807</span>
                    </li>

                    <li>
                        <span>Address: </span> <span>1080/1, Nehru Nagar, Chennai.</span>
                    </li>
                </ul>
            </>
        )
    }
}

export default Hero;