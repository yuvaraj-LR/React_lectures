// Create Skill component here to display your skills
// In this component there should be a list with each listitem as your skill.

import { Component } from "react";

class Skill extends Component {
    render() {
        return (
            <div className="flex flex_wrap">
                <button>HTML</button>
                <button>CSS</button>
                <button>JavaScript</button>
                <button>NodeJS</button>
                <button>Express</button>
                <button>MongoDB</button>
            </div>
        )
    }
}

export default Skill;   