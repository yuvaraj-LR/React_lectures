import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }

  handleAdd = (text) => {
    // Add a new Todo to the list
    const { todos } = this.state;
    const newTodos = [{ text }, ...todos];

    this.setState({
      todos: newTodos
    });
  };

  handleRemove = (text) => {
    // Remove the Todo from the list
    const { todos } = this.state;
    const newTodos = todos.filter(todo => todo.text !== text);

    this.setState({
      todos: newTodos
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        <Form onHandleAdd={this.handleAdd} />
        <List todos={todos} onHandleRemove={this.handleRemove} />
      </div>
    );
  }
}
