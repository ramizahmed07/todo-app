import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import "./app.css";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Get out of bed" },
      { id: 2, content: "Attend the lectures" },
    ],
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">TODODDD</h1>
        <p className="center">Click on items to remove todos</p>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
