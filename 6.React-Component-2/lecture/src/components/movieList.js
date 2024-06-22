import { Component } from "react";

class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            studentMark: [
                {
                    id: 1,
                    name: "Yuvaraj",
                    marks: 97
                },
                {
                    id: 2,
                    name: "Dhathu",
                    marks: 98
                },
                {
                    id: 1,
                    name: "Nila",
                    marks: 99
                },
            ]
        } 
    }

    render() {
        const {studentMark} = this.state;

        return (
            <>
                <h1>Student List</h1>
                <ul>
                    {
                        studentMark.map((student, index) => (
                            <li key={index} >{student.name}</li>
                        ))
                    }
                </ul>
            </>
        )
    }
}



export default MovieList;