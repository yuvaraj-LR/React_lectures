import "./styles.css";
//create a object to store all the styles.
export default function App() {
  return (
    <div className="App">
      {/* Refactor the inline style to use the internal style. */}
      <form
        style={styles.form}
      >
        {/* Refactor the inline style to use the internal style. */}
        <h3 style={styles.title}>Sign Up</h3>
        <input style={styles.p10} placeholder="Username" />
        <input style={styles.p10} placeholder="Email" />
        <input style={styles.p10} placeholder="Password" />
        {/* Refactor the inline style to use the internal style. */}
        <div
          style={styles.buttondiv}
        >
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={styles.buttons}
          >
            Cancel
          </button>
          {/* Refactor the inline style to use the internal style. */}
          <button style={styles.buttons}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  form: {
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 20
  },
  title: { fontSize: "2rem", letterSpacing: 2 },
  p10: {padding: 10},
  buttondiv: {
    display: "flex",
    justifyContent: "center",
    gap: 20
  },
  buttons: {
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  }


}
