import React from 'react';

// import TodosState from '../actions/todo';
import { Todo as ITodo } from '../reducer';
import Todo from './Todo';

interface Props {
  todos: ITodo[];
}

const Todos: React.FC<Props> = ({ todos }) => (
  <>
    {todos.map(todo => (
      <Todo title={todo.title} body={todo.body} />
    ))}
  </>
);

export default Todos;
