import { Reducer } from 'redux';
import { TodoAction, ADD } from './actions/todo';

export interface Todo {
  id: number;
  title: string;
  body: string;
  check: boolean;
  deadline: string;
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
      check: false,
      deadline: '2019-12-12',
    },
    {
      id: 2,
      title: 'title-2',
      body: 'body-2',
      check: false,
      deadline: '2019-12-12',
    },
  ],
};

const TodosReducer: Reducer<TodosState, TodoAction> = (
  state: TodosState = initialState,
  action: TodoAction,
): TodosState => {
  switch (action.type) {
    case ADD: {
      const NextId = state.todos.length;
      const NewTodo: Todo = {
        id: NextId,
        title: action.payload.title,
        body: action.payload.body,
        check: false,
        deadline: '2019-12-12',
      };

      return {
        ...state,
        todos: state.todos.concat(NewTodo),
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default TodosReducer;
