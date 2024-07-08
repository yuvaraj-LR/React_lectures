import { useState, useEffect } from "react";

export default function Input(){

    const [fname, setFname] = useState();
    const [lname, setLname] = useState();

    useEffect(() => {
        document.title = fname + " " + lname;
    })

    return(
        <>
        <div className="section">
            <Row label="Name">
                    <input className="input" value={fname} onChange={(e) => setFname(e.target.value)}/>
            </Row >
            <Row label="Last Name">
                    <input className="input" value={lname} onChange={(e) => setLname(e.target.value)}/>
            </Row >
        </div>

        <h2>Hello, {fname} {lname}</h2>
        
        </>
        )
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
