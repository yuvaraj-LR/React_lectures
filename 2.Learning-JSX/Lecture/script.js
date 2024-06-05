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


ReactDOM.createRoot(document.getElementById("root")).render(<JsxHeading />);