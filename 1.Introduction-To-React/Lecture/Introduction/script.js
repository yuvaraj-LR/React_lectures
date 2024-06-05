/* ***JAVASCRIPT*** */
// const header = document.createElement("h2");
// header.classList = "head";
// header.textContent = "I am created by Javascript."

// document.getElementById("root").append(header)

/* ***REACT WITH JS*** */
// const reactHead = React.createElement("h2", {className: "header", id:"head", children:"I am created by react."});
// ReactDOM.createRoot(document.getElementById("root")).render(reactHead);     

/* ***REACT WITHOUT JS*** */
// JSX = Javascript + HTML
// const jsxHeading = (<div>
// <h1 className="JSX-hello">Hello JSX</h1><p>This is test para.</p>
// </div>);

// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);     

/* ***REACT WITHOUT JS FOR MULTIPLE ELEMENT*** */
// const jsxHeading = <React.Fragment>
//     <h3>About React</h3>
//     <ul>
//         <li>About Us</li>
//         <li>Career</li>
//         <li>Blog</li>
//     </ul>
// </React.Fragment>

// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);

/* ***CREATING REUSABLE COMPONENTS*** */
// Pass this function as component.
// function App() {
//     return( 
//     <>
//         <h3>Learn About React</h3>
//         <p>I am Yuvaraj. I am working as a software engineer in Magzter for past 1 year.</p>
//     </>)
// }

function test() {
    return (
        <><h1>Here, the master codes.</h1></>
    )
}

// Pass this function in arrow function.
const App = () => {
    return( <>
                <h3>Learn About React</h3>
                <p>I am Yuvaraj. I am working as a software engineer in Magzter for past 1 year.</p>
                {test()}
            </> )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App test={test} />);