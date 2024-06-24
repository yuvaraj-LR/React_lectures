import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    const { todos, onHandleRemove } = this.props;

    return (
      <div className="list">
        {/* Render the todo here from the props */}
        {todos.map((todo, i) => (
          <Todo todo={todo} key={i} onHandleRemove={onHandleRemove} />
        ))}
      </div>
    );
  }
}
