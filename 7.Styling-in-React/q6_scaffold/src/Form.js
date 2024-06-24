import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleAdd = () => {
    const { onHandleAdd } = this.props;
    onHandleAdd(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div className="form">
        <input
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="What's on your mind?"
          required
        />
        {/* Add onclick event on the button to add the todos */}
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}
