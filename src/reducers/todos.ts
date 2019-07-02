import { Todo, FetchTodosAction } from "../actions/";
import { ActionTypes } from "../actions/types";

export default (state: Todo[] = [], { type, payload }: FetchTodosAction) => {
  switch (type) {
    case ActionTypes.fetchTodos:
      return payload;

    default:
      return state;
  }
};
