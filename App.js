import React from "react";
import "./App.css";
import TodoList from "./TodoList";

class App extends React.Component {
  state = {
    userInput: "",
    todoList: []
  };

  inputChange = event => {
    this.setState({ userInput: event.target.value });
  };

  addTodo = () => {
    this.setState({
      todoList: [...this.state.todoList, this.state.userInput],
      userInput: ""
    });
  };

  deleteTodo = event => {
    console.log(event);
    const array = this.state.todoList;
    const index = array.indexOf(event);
    console.log(index);
    array.splice(index, 1);
    this.setState({ todoList: array });
  };

  render() {
    return (
      <div>
        <TodoList
          propsDeleteTodo={this.deleteTodo}
          propsTodoList={this.state.todoList}
        />
        <input
          value={this.state.userInput}
          onChange={this.inputChange}
          type="text"
        />
        <button onClick={this.addTodo}>Ajouter !</button>
      </div>
    );
  }
}

export default App;
