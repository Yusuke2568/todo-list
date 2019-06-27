import React from 'react';

// import TodosState from '../actions/todo';
import styled from 'styled-components';
import { Todo as ITodo } from '../reducer';
import Todo from './Todo';

interface Props {
  todos: ITodo[];
  onclickHo: (todo: ITodo) => void;
}

const Todos: React.FC<Props> = ({ todos, onclickHo }) => {
  return (
    <TodosWrapper>
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
    </TodosWrapper>
  );
};

const TodosWrapper = styled.div`
  width: 700px;
`;

export default Todos;
