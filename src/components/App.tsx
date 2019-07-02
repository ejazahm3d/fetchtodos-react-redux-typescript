import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos, Todo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class App extends Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };
  renderList = (): JSX.Element[] =>
    this.props.todos.map((todo: Todo) => <div key={todo.id}>{todo.title}</div>);
  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch Todos</button>
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => ({
  todos
});

export default connect(
  mapStateToProps,
  { fetchTodos }
)(App);
