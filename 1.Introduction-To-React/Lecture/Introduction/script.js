/* ***JAVASCRIPT*** */
// const header = document.createElement("h2");
// header.classList = "head";
// header.textContent = "I am created by Javascript."

// document.getElementById("root").append(header)

/* ***REACT JS*** */
const reactHead = React.createElement("h2", {className: "header", id:"head", children:"I am created by react."});
ReactDOM.createRoot(document.getElementById("root")).render(reactHead); 