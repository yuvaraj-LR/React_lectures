import { Component } from "react";

export class Todo extends Component {
  handleRemove = () => {
    const { onHandleRemove, todo } = this.props;
    onHandleRemove(todo.text);
  };

  render() {
    return (
      <div className="todo">
        <p>{this.props.todo.text}</p>
        {/* Add the onClick event to handle removal of the todos */}
        <button onClick={this.handleRemove}>x</button>
      </div>
    );
  }
}
