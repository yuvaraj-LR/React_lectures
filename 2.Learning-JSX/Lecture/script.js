const JsxHeading = () => {
    const name = "Yuvaraj";
    const age = 21;
    const demo = false;

    return (
        <>
            <h1>Welcome to learn JSX.</h1>

            <p>This is {name}</p>
            <p>He was {age} old.</p>
            <p>I am trying to display null - {demo}</p>
        </>
    )
}

const RenderArraysAndObject = () => {
    const arr = [1, 2, 3, 4, 5];
    const obj = {
        "name": "Yuvaraj",
        "age": 21,
        "status": "broken"
    }

    const cars = ["BMW", "Audi", "Maruthi", "Jaguar"];

    return (
        <>
            <p>I am rendering.</p>
            {arr.map((element) => <p>{element}</p>)}
            <ul>
                {cars.map(element => <li>{element}</li>)}
            </ul>

        </>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<RenderArraysAndObject />);