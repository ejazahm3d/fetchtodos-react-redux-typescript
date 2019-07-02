import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos, Todo, deleteTodo, DeleteTodoAction } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
  deleteTodo(id: number): DeleteTodoAction;
}

class _App extends Component<AppProps> {
  state = {
    fetching: false
  };
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
    this.setState({ fetching: true });
  };

  renderList = (): JSX.Element[] =>
    this.props.todos.map((todo: Todo) => (
      <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
        {todo.title}
      </div>
    ));
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

export const App = connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(_App);
