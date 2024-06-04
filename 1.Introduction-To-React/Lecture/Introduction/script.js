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
const jsxHeading = (<div>
<h1 className="JSX-hello">Hello JSX</h1><p>This is test para.</p>
</div>);

ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);     

