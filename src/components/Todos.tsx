import React from 'react';

// import TodosState from '../actions/todo';
import { Todo as ITodo } from '../reducer';
import Todo from './Todo';

interface Props {
  todos: ITodo[];
  onclickHo: (todo: ITodo) => void;
}

const Todos: React.FC<Props> = ({ todos, onclickHo }) => {
  return (
    <>
      {todos.map(todo => (
        <div>
          <Todo title={todo.title} body={todo.body} />
          <button
            type="button"
            onClick={() => {
              onclickHo(todo);
            }}
          >
            Edit
          </button>
        </div>
      ))}
    </>
  );
};

export default Todos;
