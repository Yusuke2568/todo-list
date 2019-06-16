import { Reducer } from 'redux';
import { TodoAction, ADD } from './actions/todo';

export interface Todo {
  id: number;
  title: string;
  body: string;
}

export interface TodosState {
  todos: Todo[];
}

export const initialState: TodosState = {
  todos: [
    {
      id: 1,
      title: 'title-1',
      body: 'body-1',
    },
    {
      id: 2,
      title: 'title-2',
      body: 'body-2',
    },
  ],
};

const TodosReducer: Reducer<TodosState, TodoAction> = (
  state: TodosState = initialState,
  action: TodoAction,
): TodosState => {
  switch (action.type) {
    case ADD: {
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default TodosReducer;
